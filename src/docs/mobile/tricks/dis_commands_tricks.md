# Disassembly, Assembly e Assinatura

## Introdução

Este documento apresenta uma série de truques de comandos relacionados a Disassembly, Assembly e Assinatura de aplicativos Android. Esses processos são essenciais para entender e modificar o funcionamento de um aplicativo, desde desmontar arquivos executáveis até a assinatura e compactação de um APK.

A seção de Disassembly aborda como converter um arquivo .dex em formato Smali, tornando-o legível por humanos. Já a seção de Assembly mostra como reverter o processo, convertendo arquivos legíveis por humanos em um formato executável novamente.

A assinatura de APK é um processo crucial para garantir a autenticidade e a integridade de um aplicativo. Aqui, você aprenderá a gerar um keystore e assinar um APK usando diferentes algoritmos de assinatura.

Por fim, a seção de Compactação demonstra como comprimir arquivos e diretórios em um arquivo APK, essencial para a distribuição eficiente de um aplicativo.

Utilize os comandos e exemplos fornecidos para aprimorar suas habilidades de desenvolvimento e manipulação de aplicativos Android.

## Disassembly

Disassembly é o processo de converter um arquivo executável ou binário em um formato legível por humanos. Neste caso, estamos realizando o disassembly de um arquivo .dex em formato Smali.

Para realizar o disassembly de um arquivo .dex usando o Baksmali, utilize o seguinte comando:

```bash
baksmali disassemble /tmp/classes.dex -o /tmp/output
```

O comando acima irá realizar o Disassembly do arquivo "classes.dex" localizado em "/tmp" e salvar os arquivos dentro do diretório "/tmp/output".

Para extrair os arquivos de um aplicativo APK, podemos usar o APKTool:

```bash
apktool d app.apk –o output
```
O comando "apktool d" irá desmontar o arquivo APK especificado e salvar os recursos extraídos no diretório "output".

## Asseambly

Assembly é o processo inverso do Disassembly, onde convertemos arquivos legíveis por humanos de volta para um formato executável.

Para montar arquivos Smali em um arquivo .dex, utilizamos o comando Smali:

```bash
smali assemble /tmp/output/ -o /tmp/classes.dex
```

O comando acima irá montar os arquivos Smali contidos no diretório "/tmp/output/" e gerar um arquivo .dex chamado "classes.dex" no diretório "/tmp".

Para montar um diretório de recursos em um novo arquivo APK, podemos usar o APKTool:

```bash
apktool b output –o patched.apk
```

O comando "apktool b" irá montar o diretório de recursos especificado e gerar um novo arquivo APK chamado "patched.apk".

## Assinatura de APK

A assinatura de um APK é um processo importante para garantir a autenticidade e integridade do aplicativo.

Antes de realizar a assinatura, é necessário gerar um keystore que contém as chaves de assinatura. Para gerar um keystore, utilizamos o comando "keytool":

```bash
keytool -genkey -v -keystore hackingmobile.keystore -alias hacking -keyalg RSA -keysize 2048 -validity 10000
```

O comando acima irá gerar um keystore chamado "hackingmobile.keystore" com uma chave chamada "hacking" usando o algoritmo RSA. O keystore será válido por 10000 dias.

Após gerar o keystore, podemos assinar o APK usando o comando "jarsigner":

```bash
jarsigner -sigalg SHA1withRSA -digestalg SHA1 -keystore hackingmobile.keystore patched.apk hacking
```

O comando acima irá assinar o arquivo "patched.apk" com a chave contida no keystore "hackingmobile.keystore" e o alias "hacking". Ele utiliza os algoritmos de assinatura SHA1withRSA e SHA1 para digestão.

Para otimizar o arquivo APK após a assinatura, podemos alinhá-lo usando o comando "zipalign":

```bash
zipalign -v 4 patched.apk final.apk 
```

O comando acima irá alinhar os dados do arquivo APK, melhorando o desempenho do aplicativo. O arquivo de entrada é o "patched.apk" e o arquivo de saída é o "final.apk".

## Compactando APK

Para compactar um conjunto de arquivos e diretórios em um arquivo APK, podemos usar o comando "zip". A seguir, um exemplo de compactação com os arquivos essenciais para a criação de um APK:

```bash
zip -r patched.apk AndroidManifest.xml classes.dex res/ resources.arsc
```

O comando acima irá compactar os arquivos "AndroidManifest.xml", "classes.dex", a pasta "res/" e o arquivo "resources.arsc" em um arquivo chamado "patched.apk".