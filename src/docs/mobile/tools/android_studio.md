# Guia de Instalação e Configuração do Android Studio

##  Introdução
O **Android Studio** é uma ferramenta de desenvolvimento integrado (IDE) criada pela JetBrains em colaboração com a Google, com o objetivo específico de simplificar a criação de aplicativos Android. Essa plataforma oferece uma ampla variedade de recursos essenciais, como edição de código, depuração e emuladores de dispositivos virtuais, além de bibliotecas de desenvolvimento.

Com a capacidade de proporcionar um ambiente completo, o Android Studio capacita os desenvolvedores a criarem e testarem aplicativos móveis de maneira eficiente, assegurando a robustez e segurança necessárias para atender às exigências do mercado atual. A possibilidade de realizar testes de segurança permite que os desenvolvedores protejam seus aplicativos contra potenciais ameaças, oferecendo uma experiência confiável e segura aos usuários.

Este guia o ajudará a instalar e configurar o Android Studio, permitindo que você comece a desenvolver e testar aplicativos Android de maneira eficiente e completa.

## Observações
Ao configurar o Android Studio no VMware, é fundamental verificar se as configurações de virtualização estão corretamente ajustadas. Para garantir isso, siga as etapas abaixo:

1. Desligue sua máquina virtual.
2. No menu do VMware, clique em **"VM"** e selecione **"Settings"** ou utilize o atalho **"CTRL + D"**.
3. Clique na opção **"Processors" ou "Processadores"**. Verifique se as três opções de virtualização estão marcadas:
- **Virtualize Intel VT-x/EPT ou AMD-V/RVI**
- **Virtualize CPU performance counters**
- **Virtualize IOMMU (IO memory management unit)**
5. Caso alguma opção esteja desmarcada, selecione-a para habilitar a virtualização.
6. Salve as alterações e inicie a máquina virtual.

![Android_Studio_img0](/mobile/android_studio/studio_img_0.png)

Essas etapas garantirão uma configuração adequada para o Android Studio no ambiente virtual, permitindo um desenvolvimento fluido e sem problemas.

## Download
Para realizar o download do Android Studio, acesse o site oficial da ferramenta disponibilizado abaixo:

[Download Android Studio & App Tools - Android Developers](https://developer.android.com/studio)

Clique no botão **"Download Android Studio Flamingo"** para iniciar o download do software.

![Android_Studio_img1](/mobile/android_studio/studio_img_1.png)

Após o download, abra um terminal para iniciar o processo de instalação e configuração.

## Instalação Guiada

Para realizar a instalação e configuração siga os passos abaixos:

1. Acesse a pasta onde realizou o download do Android Studio e extraia os arquivos.

```jsx
tar -xvf android-studio-2022.1.1.20-linux.tar.gz
```

2. Dê permissão de execução para o script **`studio.sh`** localizado dentro do diretório **`/bin`**.

```jsx
cd $HOME/Downloads/android-studio/bin/ | chmod +x studio.sh
```

3. Execute o binário **`studio.sh`**.

```jsx
./studio.sh
```

4. Selecione a opção **"Do not import settings"**.
![Android_Studio_img2](/mobile/android_studio/studio_img_2.png)

5. Escolha entre **"Send usage statistics to Google"** para ajudar na melhoria contínua da ferramenta, ou **"Don't send"** se preferir não compartilhar dados.
![Android_Studio_img3](/mobile/android_studio/studio_img_3.png)

6. Na primeira tela do Setup Wizard, clique em **"Next"**.
![Android_Studio_img4](/mobile/android_studio/studio_img_4.png)

7. Selecione a opção de instalação **"Standard"** e clique em **"Next"**.
![Android_Studio_img5](/mobile/android_studio/studio_img_5.png)

8. Escolha o tema que preferir **(Dark ou Light)**.
![Android_Studio_img6](/mobile/android_studio/studio_img_6.png)

9. Na próxima tela do Setup Wizard, clique em **"Next"**.
![Android_Studio_img7](/mobile/android_studio/studio_img_7.png)

10. Aceite os termos de licença do **"android-sdk-license"** e **"android-sdk-preview-license"**.
![Android_Studio_img8](/mobile/android_studio/studio_img_8.png)
![Android_Studio_img9](/mobile/android_studio/studio_img_9.png)

11. Na tela de configurações do emulador, clique em **"Finish"**.
![Android_Studio_img10](/mobile/android_studio/studio_img_10.png)

12. Aguarde a conclusão dos downloads dos componentes.
![Android_Studio_img11](/mobile/android_studio/studio_img_11.png)

13. Na última tela do Setup Wizard, clique em **"Finish"**.
![Android_Studio_img12](/mobile/android_studio/studio_img_12.png)

A partir desse ponto, o Android Studio estará pronto para uso.

## Adicionando o ícone do Android Studio na barra de pesquisa

Após a instalação do Android Studio, pode ser que, ao procurar o nome do software na barra de pesquisa, nenhum resultado seja exibido.

![Android_Studio_img13](/mobile/android_studio/studio_img_13.png)

Para adicionar o ícone à barra de pesquisa, abra o Android Studio e clique no ícone de engrenagem no menu inferior esquerdo, em seguida, selecione **"Create Desktop Entry..."**.

![Android_Studio_img14](/mobile/android_studio/studio_img_14.png)

Na caixa de seleção que se abre, marque **"Create the entry for all users (requires superuser privileges)"** para criar o ícone para todos os usuários e clique em **"OK"**.

![Android_Studio_img15](/mobile/android_studio/studio_img_15.png)

Sua senha de superusuário será solicitada para concluir as configurações.

Após esses passos, você poderá pesquisar e acessar o ícone da ferramenta.

![Android_Studio_img16](/mobile/android_studio/studio_img_16.png)

## Criando um Android Virtual Device (AVD)

Um **AVD (Android Virtual Device)** é um emulador que simula dispositivos Android no computador. É usado para testar e depurar aplicativos em diferentes configurações de hardware e software. Os desenvolvedores podem criar AVDs com diversas versões do Android e tamanhos de tela, economizando tempo e recursos ao realizar testes sem dispositivos físicos.

Para realizar os testes de segurança, você pode utilizar tanto um dispositivos físicos quanto um AVD. Abaixo estão os passos para criar um dispositivo virtual Android (AVD).

1. Na tela inicial, clique em **"More Actions"** e selecione a opção **"Virtual Device Manager"**.
![Android_Studio_img17](/mobile/android_studio/studio_img_17.png)

2. Clique na opção **"Create device"** ou **"Create virtual device"**.
![Android_Studio_img18](/mobile/android_studio/studio_img_18.png)

3. Selecione o hardware desejado (opção visual).
![Android_Studio_img19](/mobile/android_studio/studio_img_19.png)

4. Selecione a imagem do sistema Android adequada para suas necessidades **(x86 Images para Windows ou ARM para Mac M1)** e clique no botão de download.
![Android_Studio_img20](/mobile/android_studio/studio_img_20.png)

> **Observações:** É importante lembrar que existe duas versões distintas de imagens para o AVD:
> Versão com Google API: Essa opção fornece acesso aos Google Play Services, que incluem bibliotecas e serviços essenciais do Google, como autenticação, localização, notificações por push, mapas, anúncios e outros recursos. Isso permite testar funcionalidades que dependem dos serviços do Google e também baixar aplicativos da Play Store diretamente no emulador.
> Versão sem Google API: Essa opção possui uma configuração básica do Android, sem os serviços específicos do Google.
>
> **Recomendações:** É recomendável instalar ambas as versões no ambiente de desenvolvimento. A versão com Google API pode ser usada para baixar aplicativos dos clientes que serão testados, enquanto a versão sem Google API é ideal para executar os testes de segurança. O processo detalhado será demonstrado em outra seção deste guia.

5. Aguarde o download e a instalação dos pacotes e clique em **"Finish"**.

![Android_Studio_img21](/mobile/android_studio/studio_img_21.png)

6. Após a conclusão do download, selecione a imagem baixada e clique em **"Next"**.
![Android_Studio_img22](/mobile/android_studio/studio_img_22.png)

7. Na etapa **"Device Configuration"**, adicione um nome para o **AVD** e clique em **"Show Advanced Settings"**.
![Android_Studio_img23](/mobile/android_studio/studio_img_23.png)

8. Configure as opções desejadas, como quantidade de memória e armazenamento interno. A opção **"Cold Boot"** é recomendada para evitar erros durante os testes.

Após concluir as configurações, clique em **"Finish"**.

![Android_Studio_img24](/mobile/android_studio/studio_img_24.png)

9. Clique no ícone de start para iniciar o emulador.

![Android_Studio_img25](/mobile/android_studio/studio_img_25.png)

![Android_Studio_img26](/mobile/android_studio/studio_img_26.png)

## O que é adb (Android Debug Bridge)

O ****Android Debug Bridge (ADB)** é uma ferramenta de linha de comando essencial no desenvolvimento e depuração de aplicativos Android. Ele é parte integrante do Android SDK (Software Development Kit) fornecido pela Google e permite a comunicação entre um computador e dispositivos Android, seja um smartphone ou tablet físico ou um emulador de dispositivo virtual.

O ADB oferece uma variedade de recursos poderosos que permitem aos desenvolvedores executar diversas ações no dispositivo Android conectado ou emulado. Alguns dos principais usos do ADB incluem:

1. Instalação e desinstalação de aplicativos: O ADB permite que os desenvolvedores instalem e desinstalem aplicativos diretamente em dispositivos Android, facilitando o processo de testes em diferentes versões e configurações de dispositivos.

2. Transferência de arquivos: É possível transferir arquivos entre o computador e o dispositivo Android usando o ADB. Isso é especialmente útil quando se deseja testar arquivos específicos ou transferir logs e relatórios de erro para fins de depuração.

3. Acesso ao terminal do dispositivo: O ADB permite que os desenvolvedores acessem o terminal do dispositivo Android para executar comandos diretamente no sistema operacional do dispositivo.

4. Captura de tela: Os desenvolvedores podem capturar a tela do dispositivo Android usando o ADB, o que é útil para criar imagens para documentação ou para relatar problemas de interface do usuário.

5. Depuração remota: O ADB facilita a depuração de aplicativos Android em dispositivos físicos ou emuladores, permitindo que os desenvolvedores rastreiem e identifiquem problemas durante o processo de desenvolvimento.

6. Emulação de eventos: Com o ADB, os desenvolvedores podem emular eventos de toque, deslize e teclas do dispositivo Android diretamente do computador, o que é útil para testar a interação do usuário em diferentes cenários.

7. Controle de permissões: O ADB permite que os desenvolvedores gerenciem permissões de aplicativos diretamente do computador, o que é útil para testar o comportamento do aplicativo em diferentes cenários de permissões.

## Configurando o ADB

### Adicionando ao PATH temporariamente (somente para a sessão atual do terminal):

```bash
export PATH="$PATH:$HOME/Android/Sdk/platform-tools/"
```

Essa abordagem adicionará o diretório **`platform-tools`** ao PATH temporariamente, apenas para a sessão atual do terminal. Isso é útil se você deseja utilizar o ADB e outras ferramentas do SDK Android somente durante a sessão atual.

### Adicionando ao PATH permanentemente (para todas as sessões do terminal):

Para adicionar permanentemente ao PATH, você pode editar o arquivo de configuração do shell, como **`.bashrc`** para o Bash ou **`.zshrc`** para o Zsh, de acordo com o shell que você estiver usando.

1. Para o Zsh (arquivo **`.zshrc`**), use este comando:

```bash
echo 'export PATH="$PATH:$HOME/Android/Sdk/platform-tools/"' >> .zshrc
```

2. Para o Bash (arquivo **`.bashrc`** ), você pode usar o seguinte comando:

```bash
echo 'export PATH="$PATH:$HOME/Android/Sdk/platform-tools/"' >> .bashrc
```

3. Depois de adicionar essa linha ao arquivo de configuração apropriado (dependendo do shell que você está usando), será necessário recarregar a configuração do shell para que as alterações sejam aplicadas:

```bash
source ~/.bashrc
```
ou
```bash
source ~/.zshrc
```

Com essa abordagem, o diretório platform-tools será adicionado permanentemente ao PATH, tornando as ferramentas do SDK Android acessíveis em todas as sessões do terminal.

## Testando o ADB

Certifique-se de testar se a configuração foi realizada corretamente executando o seguinte comando no terminal:

```jsx
adb --version
```

O comando retornará a versão do ADB instalada, indicando que a configuração foi bem-sucedida.

![Android_Studio_img26](/mobile/android_studio/studio_img_27.png)