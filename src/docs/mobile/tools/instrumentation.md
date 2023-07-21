# Guia de Instalação e Uso do Frida, Frida-tools, Objection e Frida-Server

## Introdução

O Frida é um framework open-source que permite injetar código em tempo de execução em aplicativos, tanto em dispositivos físicos quanto em emuladores. Com o Frida, é possível analisar o comportamento interno dos aplicativos, alterar dinamicamente seu fluxo de execução, interceptar chamadas de função e modificar dados em tempo real. Ele oferece uma API flexível que pode ser usada em conjunto com várias linguagens de programação, como Python, JavaScript e C#, permitindo que os pesquisadores personalizem e automatizem suas análises.

O Frida-tools é uma coleção de utilitários e bibliotecas que acompanham o Frida. Essas ferramentas fornecem recursos adicionais para facilitar o uso e a integração do Frida em fluxos de trabalho de segurança. Incluem scripts e comandos úteis que podem ser usados para automatizar tarefas comuns, como monitorar chamadas de sistema, rastrear a execução de código nativo, manipular dados em memória e realizar análises de engenharia reversa.

O frida-server é um componente essencial do Frida, sendo um servidor que é implantado dentro do dispositivo móvel Android ou iOS para permitir a comunicação entre o Frida e os aplicativos que estão sendo analisados.

O Objection é um complemento para o Frida que simplifica a análise de aplicativos móveis. Ele oferece uma interface de linha de comando fácil de usar e uma API Python para realizar várias tarefas de teste de segurança de maneira eficiente. Com o Objection, os pesquisadores podem explorar e manipular o aplicativo em tempo de execução, como a manipulação de fluxos de execução, a modificação de dados em memória, a interceptação de chamadas de função e a descoberta de vulnerabilidades de segurança. Ele também fornece recursos avançados, como descriptografia de comunicações em rede, bypass de certificados SSL e análise dinâmica de bibliotecas de terceiros.

## Requisitos Mínimos

Antes de prosseguir com a instalação das ferramentas, é importante garantir que o seu ambiente atenda aos requisitos mínimos. Certifique-se de ter instalado o Python 3, Python 2 e o pip. Caso não tenha essas ferramentas instaladas, siga as instruções abaixo:

```bash
sudo apt-get update -y && sudo apt-get upgrade && apt-get install curl python3 python3-pip python2 -y
```

```bash
curl https://bootstrap.pypa.io/pip/2.7/get-pip.py -o get-pip.py ; python2.7 get-pip.py
```

## Instalação do Frida, Frida-tools e Objection

Após instalar as ferramentas e módulos necessários, vamos prosseguir com a instalação do Frida, Frida-tools e Objection.


Execute o comando abaixo em um terminal não privilegiado:

```bash
python3 -m pip install frida frida-tools objection
```

Caso deseje definir uma versão específica durante a instalação, utilize os comandos abaixo:
```bash
python3 -m pip install -U frida==15.1.17 frida-tools==10.8.0
```

## Adicionando as ferramentas ao PATH do sistema

Após a instalação, é necessário adicionar as ferramentas ao **PATH** do sistema para que elas possam ser acessadas globalmente. Siga as etapas abaixo para fazer isso:

1. Abra o arquivo de perfil do seu shell, que pode ser **`~/.zshrc`** para usuários do Zsh ou **`~/.bashrc`** para usuários do Bash. Para abrir o arquivo usando o editor de texto padrão, execute o comando abaixo no terminal:

**Para usuários do Zsh**

```bash
$EDITOR ~/.zshrc
```

**Para usuários do Bash**

```bash
$EDITOR ~/.bashrc
```

2. No final do arquivo de perfil aberto, adicione a seguinte linha:

```bash
export PATH="$PATH:$HOME/.local/bin"
```

Essa linha adiciona o diretório **`~/.local/bin`** ao PATH, permitindo que o sistema encontre os executáveis do Frida, Frida-tools e Objection.

3. Salve e feche o arquivo de perfil.

4. Para que as alterações entrem em vigor, carregue o perfil atualizado no terminal executando o seguinte comando:

**Para usuários do Zsh**
```bash
source ~/.zshrc
```
**Para usuários do Bash**
```bash
source ~/.bashrc
```

Agora, as ferramentas Frida, Frida-tools e Objection podem ser acessadas globalmente em seu sistema. Certifique-se de substituir **`$EDITOR`** pelo editor de texto de sua preferência, como nano ou **`vim`**.

## Baixando e configurando o frida-server (Android)

Para utilizar o Frida em dispositivos Android, é necessário baixar e configurar o frida-server. Siga as etapas abaixo:

1. Inicie o emulador do dispositivo móvel ou conecte o cabo USB em um dispositivo físico. Verifique a arquitetura do dispositivo e a versão do Frida executando os seguintes comandos:

```bash
adb shell getprop ro.product.cpu.abi
```
```bash
frida --version
```

2. Acesse o link abaixo para realizar o download do frida-server (Android) correspondente à arquitetura do seu dispositivo:

[Download Frida-Server](https://github.com/frida/frida/releases)

```bash
wget https://github.com/frida/frida/releases/download/16.0.10/frida-server-16.0.10-android-x86_64.xz
```

3. Após o download, extraia o frida-server do arquivo baixado:
```bash
xz -d frida-server-16.0.10-android-x86_64.xz
```

4. Envie o frida-server para dentro do dispositivo móvel usando o comando adb:
```bash
adb push frida-server-16.0.10-android-x86_64 /data/local/tmp/
```

5. Inicie o dispositivo móvel no modo root executando o seguinte comando:
```bash
adb root
```

6. Altere a permissão de execução do frida-server no dispositivo:
```bash
adb shell chmod 755 /data/local/tmp/frida-server-16.0.10-android-x86_64
```

7. Inicie o frida-server no dispositivo móvel:
```bash
adb shell /data/local/tmp/frida-server-16.0.10-android-x86_64 &
```

8. Verifique se a comunicação está funcionando corretamente executando o seguinte comando no terminal:
```bash
frida-ps -U -a
```

Agora você tem o frida-server configurado no seu dispositivo Android e pode começar a utilizar o Frida para análise e manipulação de aplicativos em tempo de execução.

## Testando o Frida e Objection

Na última etapa, vamos testar o Frida e o Objection. Execute os seguintes comandos no terminal:

```bash
frida --version
```

```bash
objection version
```

Isso exibirá as versões instaladas do Frida e do Objection, confirmando que a instalação foi concluída com sucesso.