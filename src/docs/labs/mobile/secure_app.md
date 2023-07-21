# Prefácio

O objetivo deste laboratório é colocar em prática os conceitos destacados na seção de proteções [Flag Secure](https://docs.kirito.com.br/mobile/secure_flag). Ao longo deste laboratório, investigaremos de perto o impacto da vulnerabilidade da secure flag no contexto do sistema operacional Android. Você terá a oportunidade de observar como a falta de segurança pode comprometer a integridade e a confidencialidade dos dados em um dispositivo Android.

Ressaltamos que este laboratório destina-se exclusivamente a fins educacionais e para conscientização sobre as ameaças potenciais relacionadas à segurança do Android. Ao explorar essa vulnerabilidade em um ambiente controlado, esperamos fornecer uma compreensão mais aprofundada dos desafios enfrentados pelos desenvolvedores e usuários na proteção de dispositivos Android contra ataques maliciosos.

## Requisitos

Para a realização deste laboratório, foi desenvolvido um aplicativo específico para estudos, que pode ser adquirido no seguinte link:

[Secure App](https://github.com/kiritorce/mobile-hacking-laboratory)

Antes de prosseguir com os testes, certifique-se de que o dispositivo esteja configurado com o API Level 30 para garantir o correto funcionamento de todas as etapas do laboratório.

## Instalação e fluxo padrão

Antes de realizar qualquer processo de root no dispositivo ou iniciar o servidor Frida, é importante entender o comportamento padrão do aplicativo e verificar suas funcionalidades.

1. Instale o aplicativo a ser testado e verifique o seu funcionamento normal.

```jsx
adb install secureapp.apk
```

![Lab01-SecureApp_img1](/mobile/labs_mobile/lab01_secureapp/flag_img_1.png)

2. Tente tirar uma screenshot da tela ou colocar o aplicativo em segundo plano (background).

```jsx
adb shell screencap -p /sdcard/screen.png
```

```jsx
adb exec-out screencap -p > screen.png
```

![Lab01-SecureApp_img2](/mobile/labs_mobile/lab01_secureapp/flag_img_2.png)

Verifique que a captura é exibida com 0 bytes e as informações desaparecem ao serem enviadas para o plano de fundo, o que indica que a proteção **`FLAG_SECURE`** está operando adequadamente.

> A implementação da configuração FLAG_SECURE não é tão eficiente quanto gostaríamos, pois pode ser facilmente burlada com o uso de scripts encontrados na internet. A seguir, serão apresentadas formas de realizar essa ação utilizando o Frida Tools. Vamos utilizar o script padrão do Frida, que pode ser encontrado no seguinte repositório do GitHub: [FRIDA script for bypassing Android FLAG_SECURE](https://gist.github.com/su-vikas/36410f67c9e0127961ae344010c4c0ef)

## Script Flag Secure Bypass

```js
Java.perform(function() {
    var surface_view = Java.use('android.view.SurfaceView');

    var set_secure = surface_view.setSecure.overload('boolean');

    set_secure.implementation = function(flag){
        console.log("setSecure() flag called with args: " + flag); 
        set_secure.call(false);
    };

    var window = Java.use('android.view.Window');
    var set_flags = window.setFlags.overload('int', 'int');

    var window_manager = Java.use('android.view.WindowManager');
    var layout_params = Java.use('android.view.WindowManager$LayoutParams');

    set_flags.implementation = function(flags, mask){
        //console.log(Object.getOwnPropertyNames(window.__proto__).join('\n'));
        console.log("flag secure: " + layout_params.FLAG_SECURE.value);

        console.log("before setflags called  flags:  "+ flags);
        flags =(flags.value & ~layout_params.FLAG_SECURE.value);
        console.log("after setflags called  flags:  "+ flags);

        set_flags.call(this, flags, mask);
    };
});
```

## Processo de Bypass

1. Após entender o funcionamento normal do aplicativo e identificar a proteção, é necessário fazer o root do dispositivo e iniciar o servidor Frida.

```jsx
adb root
adb shell /data/local/tmp/frida-server-16.0.10-android-arm64 &
```

2. A partir desse ponto, basta anexar o script ao aplicativo e realizar a captura de tela.

```jsx
frida -U -f com.secureapp -l secureflag.js --pause
```

![Lab01-SecureApp_img3](/mobile/labs_mobile/lab01_secureapp/flag_img_3.png)

![Lab01-SecureApp_img4](/mobile/labs_mobile/lab01_secureapp/flag_img_4.png)
