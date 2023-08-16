# Sec4US Certified Web API Pentester (SCWAP)

## Introdução

Nesta documentação, compartilharei minha jornada em busca da certificação SCWAP (Sec4US Certified Web API Pentester). Essa certificação representa um desafio abrangente de teste de invasão em API WEB e é oferecida pela Sec4us, liderada por Hélvio Júnior, também conhecido como M4v3r1cK. Hélvio é um pesquisador renomado, reconhecido por suas contribuições e criações de ferramentas importantes, como shellcodetester e turbosearch, além de possuir diversas certificações na área ofensiva.

O exame da certificação SCWAP desafia os candidatos a realizarem testes de invasão em API seguindo os mais altos padrões de segurança aplicados pelas grandes empresas mundiais. Durante o teste, é exigido que os candidatos demonstrem profundos conhecimentos das metodologias de ataques categorizados pela OWASP API Security Top 10, além de dominarem o desenvolvimento de scripts e a utilização das melhores ferramentas open-source ou gratuitas para a realização do pentest em API. A certificação SCWAP foi cuidadosamente projetada para capacitar os profissionais a coordenar e conduzir testes de invasão em Web APIs, abrangendo não apenas metodologias black-box, mas também gray-box e white-box, incluindo a revisão de código fonte.

Esta documentação relata minha preparação intensiva e dedicada para enfrentar esse desafio, abordando as etapas, as dificuldades superadas e as valiosas lições aprendidas durante todo o processo. Além disso, pretendo oferecer insights e dicas úteis para inspirar outros profissionais interessados em trilhar o caminho da segurança da informação.

## Moeda das Certificações

Antes de começar a ler este guia, aprecie todas as medalhas das certificações da Sec4US:

![Sec4US_Coins](/mobile/certification/sec4us_certification.jpeg)

## Prazo e Escopo do Exame

O exame abrange a exploração de mais de uma API Web em três metodologias de ataque: Black Box, Gray Box e White Box. Além disso, inclui a análise de código fonte para identificação e exploração de vulnerabilidades. Os servidores e APIs estarão acessíveis por meio do laboratório do exame. Após clicar em iniciar o exame, todas as informações sobre engajamento, escopo e credenciais serão liberadas para acesso.

O candidato terá 48 horas para concluir os testes, coletar todas as informações necessárias, criar os exploits e identificar as flags que correspondem a algumas vulnerabilidades. Uma vez obtido acesso ao conteúdo (flag) proposto pelo desafio, o candidato deve submetê-lo no painel do exame.

Após o término das 48 horas do exame, será concedido um prazo adicional de 24 horas para elaborar um relatório técnico detalhado sobre as vulnerabilidades identificadas durante o processo de reconhecimento e exploração. Um template do relatório será fornecido no início do exame para facilitar a elaboração.

É importante ressaltar que nem todas as vulnerabilidades possuem uma flag associada. No entanto, durante a elaboração do relatório, é fundamental evidenciar as flags encontradas através de capturas de tela, além de fornecer os scripts desenvolvidos para exploração das vulnerabilidades.

## Principais assuntos cobrados durante o exame:

A certificação possui várias APIs para serem testadas, cobrando os seguintes pontos do analista:

1. Interagir com APIs Web
2. Identificar o padrão de API utilizado
3. Enumerar e identificar pontos de interação e exploração da API
4. Explorar as principais vulnerabilidades do OWASP API Security Top 10
5. Identificar falhas lógicas
6. Realizar análise e revisão de código fonte para localização de vulnerabilidades
7. Escrever exploits

## Pontuação do Exame

O exame atribui uma pontuação para cada objetivo, sendo necessário cumprir totalmente os requisitos de cada objetivo para obter os pontos correspondentes. O candidato deve adquirir uma pontuação mínima de 85 pontos para ser aprovado no exame, que tem como pontuação máxima 100 pontos.

## Preparação do Ambiente

A configuração do ambiente para essa certificação é bastante simples. Com apenas um terminal, você pode utilizar o [Burp Suite Community](https://portswigger.net/burp/communitydownload), o [Postman](https://www.postman.com/) e o [Visual Studio Code](https://code.visualstudio.com/download) para interagir e explorar as APIs. Como essa foi a última certificação que realizei para completar as três da Sec4US, já estava familiarizado com os desafios que poderiam surgir nesta fase. Optei por utilizar minha máquina nativa com Windows para executar o [Burp Suite Community](https://portswigger.net/burp/communitydownload) e o [Postman](https://www.postman.com/), enquanto o meu MacBook foi dedicado ao processo de programação e criação de exploits.

É importante ressaltar que, assim como nas outras certificações, apenas ferramentas open-source e gratuitas podem ser utilizadas durante o exame. Além disso, outro fator crucial que contribuiu para o meu sucesso foi contar com boas wordlists para o processo de reconhecimento e exploração. Caso ainda não tenha wordlists próprias e personalizadas, recomendo fortemente que você faça o download da [SecList](https://github.com/danielmiessler/SecLists), um repositório com várias wordlists contendo nomes de usuários, senhas, URLs, padrões de dados, entre outros recursos úteis.

A preparação cuidadosa do ambiente, com as ferramentas certas e recursos como wordlists, será de grande valor durante o teste de invasão em API. Lembre-se de praticar com antecedência e estar familiarizado com todas as ferramentas e procedimentos, para que possa enfrentar o exame com confiança e obter sucesso em sua busca pela certificação SCWAP.

## Bases Importantes

Para conquistar essa certificação, é fundamental possuir um conhecimento sólido em programação, uma vez que a prova exige a confecção de exploits personalizados para explorar vulnerabilidades específicas. É importante ressaltar que o uso de ferramentas automatizadas, como SQLmap, SQLninja e similares, não é permitido no exame. Portanto, é essencial desenvolver seus próprios scripts para realizar os testes de invasão de forma eficiente.

Dominar conceitos de programação e scripting será essencial para identificar e explorar vulnerabilidades durante o teste. Além disso, a capacidade de criar exploits personalizados permitirá que você demonstre habilidades avançadas em segurança ofensiva e se destaque como um profissional preparado para conduzir testes de invasão em APIs Web de forma independente e precisa.

Portanto, antes de se inscrever para a certificação, dedique tempo para aprimorar suas habilidades em programação e desenvolvimento de scripts. Isso certamente aumentará suas chances de sucesso no exame e, mais importante ainda, irá prepará-lo para desafios reais na área de segurança da informação. Boa preparação e sucesso em sua busca pela certificação SCWAP!

## Relatório

Escrever um bom relatório é essencial para comunicar de forma clara e objetiva os resultados das avaliações de segurança realizadas. Um relatório bem elaborado fornecerá informações cruciais para os stakeholders, permitindo que eles compreendam as vulnerabilidades encontradas, os riscos associados e as medidas recomendadas para melhorar a segurança da API. Abaixo estão algumas dicas para escrever um relatório de pentest em API eficaz:

1. **Estrutura do Relatório:** Organize o relatório de forma estruturada e lógica, começando por uma introdução que descreva o escopo do teste, os objetivos e as metodologias utilizadas. Em seguida, apresente os detalhes das vulnerabilidades encontradas, os riscos associados a cada uma delas e, por fim, as recomendações para mitigação.

2. **Linguagem Clara e Concisa:** Utilize uma linguagem clara e concisa ao descrever os resultados do pentest. Evite jargões técnicos em excesso e explique os termos técnicos utilizados, especialmente para os leitores que não são especialistas em segurança da informação.

3. **Destaque as Principais Vulnerabilidades:** Identifique e destaque as principais vulnerabilidades encontradas na API. Liste-as em ordem de prioridade, começando pelas mais críticas. Isso ajuda os stakeholders a entenderem os pontos de maior risco.

4. **Detalhes Técnicos:** Forneça detalhes técnicos suficientes sobre cada vulnerabilidade, incluindo os passos para reproduzir o problema, URLs, parâmetros afetados, códigos de resposta HTTP, etc. Isso auxilia os desenvolvedores a entenderem o contexto e corrigirem as falhas de segurança.

5. **Demonstre Impacto:** Explique o possível impacto de cada vulnerabilidade em termos de risco para a organização e seus ativos. Isso ajudará os tomadores de decisão a compreender a gravidade das falhas encontradas.

6. **Screenshots e Provas de Conceito:** Inclua screenshots e provas de conceito que ilustrem as vulnerabilidades encontradas. Essas evidências visuais ajudam a tornar os problemas mais tangíveis e compreensíveis.

7. **Recomendações Claras:** Ao apresentar as recomendações de mitigação, seja específico e claro sobre as ações a serem tomadas. Forneça orientações passo a passo para corrigir as vulnerabilidades e proteger a API.

8. **Relate Achados Positivos:** Além das vulnerabilidades, inclua os achados positivos, como boas práticas de segurança que foram observadas na API. Reconhecer as medidas de segurança eficazes também é importante.

9. **Estilo Visual:** Utilize formatação adequada, como cabeçalhos, listas numeradas ou com marcadores e gráficos, para facilitar a leitura e compreensão do relatório.

10. **Revisão e Validação:** Antes de finalizar o relatório, revise cuidadosamente o conteúdo para garantir que não haja erros ou informações conflitantes. Certifique-se de que todas as informações relevantes estejam incluídas e que o relatório atenda aos requisitos e expectativas dos stakeholders.

Lembre-se de que um relatório de pentest bem elaborado é uma ferramenta poderosa para promover a segurança da API e ajudar a organização a tomar decisões informadas para proteger seus ativos e dados. Invista tempo e cuidado na criação do relatório para garantir que ele seja eficaz e útil para todos os envolvidos.

## Recomendações Gerais

Durante o exame, lembre-se da importância de fazer pausas para clarear a mente. Dê-se alguns momentos para afastar-se do computador, tomar água e pensar de forma criativa para resolver os problemas. Gerenciar bem o tempo é outro fator crucial. Antes de iniciar o exame, certifique-se de ter compreendido completamente as informações fornecidas no [guia do exame](https://wiki.sec4us.com.br/scwap-sec4us-certified-web-api-pentester-exam-guide/).

Aqui estão algumas dicas adicionais para auxiliar no exame:

1. **Organize o Tempo:** Antes de iniciar, revise o escopo do exame e defina quanto tempo dedicará a cada tarefa. Planeje seu tempo de forma equilibrada para cobrir todas as etapas do pentest.

2. **Priorize as Vulnerabilidades:** Durante o exame, ao identificar vulnerabilidades, priorize-as de acordo com sua gravidade. Concentre-se primeiro nas mais críticas para garantir que sejam documentadas e abordadas no relatório.

3. **Documente suas Ações:** Mantenha um registro detalhado de suas ações durante o exame. Isso o ajudará a organizar as informações para o relatório posteriormente e também a rastrear seu progresso.

4. **Comunique-se de Forma Clara:** Ao elaborar o relatório, seja claro e objetivo em suas descrições. Forneça informações técnicas suficientes para que os leitores compreendam as vulnerabilidades, suas causas e as soluções propostas.

5. **Revise e Verifique:** Antes de enviar o relatório final, faça uma revisão completa para garantir que todas as informações estejam corretas e coerentes. Verifique se todas as vulnerabilidades estão documentadas e se suas soluções são viáveis.

6. **Aprenda com a Experiência:** Independentemente do resultado do exame, encare-o como uma oportunidade de aprendizado. Identifique áreas em que pode melhorar e busque aprimorar suas habilidades para futuros desafios.

7. **Participe de Labs e CTFs:** Antes do exame, participe de laboratórios e Capture The Flags (CTFs) para praticar suas habilidades em ambientes controlados.

Lembre-se de que a certificação SCWAP é uma oportunidade para demonstrar seus conhecimentos e habilidades em teste de invasão em API. Mantenha-se focado, siga as recomendações e confie em sua preparação. Boa sorte no exame e que sua jornada de busca pela certificação seja bem-sucedida!

## Treinamentos

A Sec4US oferece um curso preparatório para essa certificação ministrado pelo Helvio.

[Web API Exploitation](https://sec4us.com.br/treinamentos/web-api-exploitation/)

## Conclusão

A conclusão desta certificação foi de extrema importância para mim, pois representou o último passo para alcançar um marco significativo: ser o primeiro a conquistar as 3 certificações da Sec4US. A experiência adquirida durante o exame foi única, permitindo-me me reinventar diversas vezes.

Sinceramente, espero que este guia e a documentação aqui presente sejam de grande utilidade em sua própria jornada, bem como em outros desafios que você possa enfrentar. Que esses recursos possam ser uma fonte de inspiração e conhecimento para sua busca contínua por crescimento e excelência na área de segurança da informação. Boa sorte em suas futuras conquistas!
