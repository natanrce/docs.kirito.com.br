# Flag Secure

## Prefácio

A flag **`FLAG_SECURE`** é uma configuração importante no Android que ajuda a proteger o conteúdo sensível da tela em aplicativos. Quando uma atividade é marcada com essa flag, o sistema operacional adota medidas de segurança adicionais para evitar que o conteúdo da tela seja capturado por meio de screenshots ou gravado em vídeos. Além disso, impede que o conteúdo seja exibido em dispositivos externos, como monitores ou projetores, que não são considerados seguros pelo sistema.

## Importância da Flag Secure

A proteção do conteúdo sensível em aplicativos é crucial para garantir a privacidade e a segurança dos usuários. Ao utilizar a flag **`FLAG_SECURE`**, você pode evitar que informações confidenciais, como senhas, dados bancários e informações de autenticação, sejam comprometidas. Isso é especialmente relevante em aplicativos que lidam com dados sensíveis.

## OWASP ID

[OWASP-MOBILE-2016 - M4: Insecure Authentication](https://owasp.org/www-project-mobile-top-10/2016-risks/m4-insecure-authentication)

## Implementando a Flag Secure

Existem duas maneiras principais de implementar a **`FLAG_SECURE`** em um aplicativo Android:

1. No Manifest.xml:
Você pode definir o atributo **`android:windowSecure`** como **true** no elemento **`<activity>`** do arquivo **Manifest.xml** para todas as atividades do seu aplicativo. Dessa forma, a flag **`FLAG_SECURE`** será aplicada automaticamente a todas as atividades.

Exemplo **Manifest.xml**:

```xml
<activity android:name=".MainActivity"
          android:windowSecure="true">
    ...
</activity>
```

2. No código **Java/Kotlin**:

Você pode usar o método **`setFlags()`** da classe **`Window`** para definir programaticamente a flag **`FLAG_SECURE`** em uma atividade específica.

Exemplo **Java**:

```java
getWindow().setFlags(WindowManager.LayoutParams.FLAG_SECURE, WindowManager.LayoutParams.FLAG_SECURE);
```

Exemplo **Kotlin**:

```kotlin
window.setFlags(WindowManager.LayoutParams.FLAG_SECURE, WindowManager.LayoutParams.FLAG_SECURE)
```

Normalmente, você chamaria esse método no método onCreate() da sua atividade principal.

## Bypass da Flag Secure com Frida Tools

É importante destacar que a **`FLAG_SECURE`** não é uma proteção absoluta, e algumas abordagens podem contornar essa configuração. Uma dessas abordagens envolve o uso do Frida Tools, uma ferramenta para manipulação e instrumentação de aplicativos Android.

O script abaixo demonstra como realizar o bypass da **`FLAG_SECURE`** usando o Frida Tools:

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
        console.log("flag secure: " + layout_params.FLAG_SECURE.value);

        console.log("before setflags called  flags:  "+ flags);
        flags =(flags.value & ~layout_params.FLAG_SECURE.value);
        console.log("after setflags called  flags:  "+ flags);

        set_flags.call(this, flags, mask);
    };
});
```

Essa abordagem demonstra uma possível vulnerabilidade em relação à **`FLAG_SECURE`**, mas é importante ressaltar que a proteção oferecida por essa configuração é eficaz na maioria dos casos e desencoraja a captura e o compartilhamento não autorizados de conteúdo sensível.

## Práticas Recomendadas e Mitigação

Para mitigar as vulnerabilidades relacionadas à **`FLAG_SECURE`** e garantir uma proteção adequada do conteúdo sensível, aqui estão algumas práticas recomendadas:

- Verifique se a configuração global **`secure`** está definida como verdadeira. Isso pode ser feito usando o método **`Secure.getInt()`** para obter o valor da configuração e verificar se está definido como **1**;
- Monitore as propriedades do sistema, como **`secure`** e **`ro.debuggable`**, para verificar se estão definidas corretamente. Valores incorretos podem indicar que o **`FLAG_SECURE`** não está configurado adequadamente;
- Verifique se a assinatura do pacote do aplicativo corresponde à assinatura esperada. Se a assinatura for diferente, isso pode indicar que o aplicativo foi modificado para desativar o **`FLAG_SECURE`**;
- Analise o arquivo xml do aplicativo para verificar se a flag **`android:debuggable`** está definida como **false**. A definição dessa flag como **true** pode indicar uma configuração insegura;
- Monitore o comportamento do aplicativo em tempo de execução em busca de comportamentos incomuns, como o uso de APIs de depuração, acesso não autorizado a recursos protegidos ou acesso a informações sensíveis;
- Implemente testes de integridade no aplicativo para detectar modificações ou manipulações no código em tempo de execução. Isso pode envolver a verificação de hashes de arquivos relevantes ou a comparação de versões do aplicativo.

## Conclusão

A flag **`FLAG_SECURE`** é uma medida de segurança essencial para proteger o conteúdo sensível em aplicativos Android. Implementar essa configuração adequadamente e adotar as práticas recomendadas de mitigação ajudará a garantir a privacidade e a segurança dos usuários. No entanto, é importante estar ciente de que nenhuma proteção é absoluta, e abordagens como o uso do Frida Tools podem contornar a **`FLAG_SECURE`** em certos casos. Portanto, é fundamental adotar uma abordagem abrangente de segurança, combinando várias camadas de proteção para garantir a integridade do aplicativo e a privacidade dos usuários.

## Referências

[Android - Práticas recomendadas para segurança de *apps*](https://developer.android.com/topic/security/best-practices?hl=pt-br)

[Android - WindowManager.LayoutParams](https://developer.android.com/reference/android/view/WindowManager.LayoutParams#FLAG_LAYOUT_IN_SCREEN)

[GitHub - About the FLAG_SECURE Child Window Issue](https://github.com/commonsguy/cwac-security/blob/master/docs/FLAGSECURE.md)

[Java2s - set Flag Secure - Android User Interface](http://www.java2s.com/example/android/user-interface/set-flag-secure.html)