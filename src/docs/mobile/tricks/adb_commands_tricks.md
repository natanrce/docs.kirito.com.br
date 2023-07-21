# Android Device Bridge (ADB) Commands Tricks

## Intdodução
Esta documentação apresenta uma lista abrangente de truques e comandos úteis do Android Device Bridge (ADB). O ADB é uma ferramenta de linha de comando que permite a comunicação e o controle de dispositivos Android conectados a um computador. Com estes truques e comandos, você poderá aprimorar seu fluxo de trabalho no desenvolvimento, depuração e teste de aplicativos Android. Desde o gerenciamento de dispositivos até a instalação de aplicativos e manipulação de arquivos, esta documentação fornecerá as informações necessárias para aproveitar ao máximo o ADB.

## Listar Dispositivos Ativos

Para listar os dispositivos ativos conectados ao computador, execute o seguinte comando:
```bash
adb devices
```

## Conectar-se a um Dispositivo

Para abrir uma sessão de shell no dispositivo, utilize o seguinte comando:
```bash
adb shell
```

## Reiniciar Dispositivo com Permissões de Root

Para reiniciar o dispositivo com permissões de root, use o seguinte comando:
```bash
adb root
```

## Executar Comandos Através do ADB

Para executar comandos diretamente no dispositivo usando o ADB, utilize o comando a seguir:
```bash
adb shell ls
```

## Instalar e Desinstalar Aplicativos

Para instalar um arquivo APK no dispositivo, utilize o seguinte comando:
```bash
adb install app.apk
```

Para desinstalar um aplicativo do dispositivo, utilize o seguinte comando, substituindo **`<package_name>`** pelo nome do pacote do aplicativo:
```bash
adb uninstall <package_name>
```

## Exibir Log da Aplicação

Para visualizar o log da aplicação em tempo real, utilize o seguinte comando:
```bash
adb logcat
```

## Filtrar o Log da Aplicação

Para filtrar o log da aplicação por determinada TAG, utilize o seguinte comando:
```bash
adb logcat -v color -s "HackingMobileApp"
```

## Transferir Arquivos para o Dispositivo

Para enviar um arquivo para o dispositivo, utilize um dos comandos abaixo, substituindo file.txt pelo caminho e nome do arquivo que deseja transferir:
```bash
adb push file.txt /sdcard/file.txt
```

```bash
adb push file.txt /data/local/tmp/
```

## Transferir Arquivo do Dispositivo para o Computador

Para transferir um arquivo do dispositivo para o computador, utilize um dos comandos abaixo, substituindo file.txt pelo caminho e nome do arquivo que deseja transferir:
```bash
adb pull /sdcard/file.txt file.txt
```

```bash
adb pull /data/local/tmp/file.txt file.txt
```

## Iniciar uma Aplicação

Para iniciar uma aplicação no dispositivo, utilize o seguinte comando, substituindo **`<package_name>`** pelo nome do pacote da aplicação e **`<component>**` pelo nome do componente:
```bash
adb shell am start –n <package_name>/<componet>
```

## Conceder Permissões Específicas a uma Aplicação

Para conceder permissões específicas a uma aplicação, utilize o seguinte comando, substituindo **`<package_name>`** pelo nome do pacote da aplicação e **`<permissão>`** pelo nome da permissão:
```bash
adb shell pm grant <package_name> <permissão>
```

## Conectar-se ao Gerenciador de Caminhos (Path Manager)

Para obter o caminho de instalação de um pacote, utilize o seguinte comando, substituindo **`<package_name>`** pelo nome do pacote da aplicação:
```bash
adb shell pm path <package_name>
```

## Visualizar Informações do Sistema

Para visualizar informações detalhadas sobre o sistema, utilize o seguinte comando:
```bash
adb shell dumpsys
```

## Identificar Arquitetura do Dispositivo

Para identificar a arquitetura do processador do dispositivo, utilize o seguinte comando:
```bash
adb shell getprop ro.product.cpu.abi
```

## Iniciar o Servidor ADB em Modo TCP/IP

Para iniciar o servidor ADB em modo TCP/IP, utilize o seguinte comando:
```bash
adb tcpip 5555
```

## Conectar-se Usando o ADB via TCP/IP

Para conectar-se a um dispositivo usando o ADB via TCP/IP, utilize o seguinte comando, substituindo xxx.xxx.xxx.xxx pelo endereço IP do dispositivo:
```bash
adb connect xxx.xxx.xxx.xxx:5555
```

## Redirecionamento de Porta com ADB

Para redirecionar uma porta de um dispositivo para o computador, utilize o seguinte comando, substituindo 8080 pelo número da porta desejada:
```bash
adb -e reverse tcp:8080 tcp:8080
```

Listar Túneis de Redirecionamento

Para listar os túneis de redirecionamento ativos, utilize o seguinte comando:
```bash
adb reverse --list
```

## Desativar Dados Móveis

Para desativar a conexão de dados móveis do dispositivo, utilize o seguinte comando:
```bash
adb shell svc data disable
```