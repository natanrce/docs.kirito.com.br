# Ferramentas de Teste de Segurança para Aplicativos Móveis (DAST)

## Introdução

A segurança de aplicativos móveis é de extrema importância para proteger os dados e a privacidade dos usuários. As ferramentas de Teste de Segurança de Aplicativos Móveis (DAST) auxiliam na identificação de possíveis vulnerabilidades e fraquezas nos aplicativos Android e iOS. Neste guia, apresentaremos duas ferramentas populares de DAST: o Mobile Security Framework (MobSF) e o QARK (Quick Android Review Kit).

## Mobile Security Framework (MobSF)

O Mobile Security Framework (MobSF) é uma plataforma de teste de segurança de aplicativos móveis de código aberto, que oferece uma ampla variedade de recursos para avaliar a segurança de aplicativos Android e iOS. Com o MobSF, é possível realizar testes estáticos e dinâmicos, análise de código, detecção de vulnerabilidades conhecidas, análise de tráfego de rede e muito mais. Sua interface amigável torna o MobSF uma opção popular para avaliar a segurança de aplicativos móveis durante o desenvolvimento ou em produção.

## QARK (Quick Android Review Kit)

O QARK (Quick Android Review Kit) é uma ferramenta de análise estática de segurança para aplicativos Android. Ele foi projetado para auxiliar os desenvolvedores na identificação de vulnerabilidades e fraquezas nos aplicativos. O QARK examina o código-fonte do aplicativo em busca de práticas inseguras, como permissões excessivas, vulnerabilidades conhecidas, problemas de configuração e muito mais. Com sua interface de linha de comando simples, o QARK pode ser facilmente integrado a pipelines de CI/CD e processos de teste automatizados, garantindo que os aplicativos Android sejam desenvolvidos com segurança em mente.

## Requisitos Mínimos

Antes de prosseguir com a instalação das ferramentas, é importante garantir que o seu ambiente atenda aos requisitos mínimos. Certifique-se de ter instalado o Python 3, Python 2 e o pip. Caso não tenha essas ferramentas instaladas, siga as instruções abaixo:

```bash
sudo apt-get update -y && sudo apt-get upgrade && apt-get install curl python3 python3-pip python2 -y
```

```bash
curl https://bootstrap.pypa.io/pip/2.7/get-pip.py -o get-pip.py ; python2.7 get-pip.py
```

## Instalação e Configuração MobSF

1. Clone o repositório do MobSF a partir do seguinte link:

[Download Mobile Security Framework (MobSF)](https://github.com/MobSF/Mobile-Security-Framework-MobSF)

```bash
git clone https://github.com/MobSF/Mobile-Security-Framework-MobSF
```
2. Renomeie a pasta do MobSF:

```bash
mv Mobile-Security-Framework-MobSF/ MobSF
```

3. Acesse o diretório MobSF e execute o script **`setup.sh`**:

```bash
cd MobSF/
```
```bash
./setup.sh
```

4. Após a conclusão da instalação, inicie o serviço executando o script  **`run.sh`**:

```bash
./run.sh
```

5. Acesse o serviço no navegador utilizando a URL local na porta 8000.

> Nota: A análise dinâmica de aplicativos móveis usando o MobSF requer um ambiente emulado no qual o aplicativo possa ser executado e monitorado. Portanto, antes de iniciar a análise dinâmica, é importante ter seguido todas as etapas apresentadas na seção **Guia de Instalação e Configuração do Android Studio**.

## Instalação e Configuração Qark

1. Instale o QARK usando o gerenciador de pacotes pip:

[Qark](https://github.com/linkedin/qark)

```bash
pip install --user qark
```

2. Verifique se a instalação foi bem-sucedida executando o seguinte comando:

```bash
qark --help
```

Com estas etapas, você estará pronto para utilizar o MobSF e o QARK como ferramentas de DAST para testar a segurança dos seus aplicativos móveis.