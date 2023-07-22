# Sec4US - Certificação de Pentester Mobile Android (SCMP|A)

## Prefácio

Nesta seção, compartilharei minha jornada rumo à conquista da certificação SCMP|A (Sec4US Certified Mobile Pentester Android). Essa certificação representa um desafio abrangente de invasão em dispositivos móveis Android e é oferecida pela Sec4us, com Hélvio Júnior (também conhecido como Maverick) como líder. Hélvio é um pesquisador de renome, reconhecido por suas contribuições e criações de ferramentas importantes, como shellcodetester e turbosearch, além de possuir diversas certificações na área ofensiva.

## Introdução

A SCMP|A é a primeira certificação 100% prática de teste de invasão em dispositivos móveis da América Latina. Durante o exame, os candidatos enfrentam o desafio de realizar um teste de invasão em uma aplicação Android, seguindo os mais elevados padrões de segurança aplicados pelas grandes empresas brasileiras.

Os candidatos são avaliados quanto ao domínio das metodologias de ataques categorizados pela OWASP Mobile Security Top 10, além de habilidades em desenvolvimento de scripts e utilização das melhores ferramentas, sejam elas open-source ou gratuitas, para a realização do pentest mobile.

A certificação SCMP|A foi meticulosamente estruturada para habilitar os profissionais aprovados a coordenar e conduzir diversos tipos de testes de invasão em aplicações Android. Isso inclui não apenas o aplicativo em si, mas também todo o seu ecossistema, abrangendo aspectos como arquitetura, APIs e outros componentes.

Dessa forma, os profissionais certificados pela SCMP|A estarão preparados para enfrentar os desafios do universo de segurança mobile, atendendo às exigências das empresas e contribuindo para um ambiente digital mais seguro na América Latina.

## Moeda das Certificações

Antes de começar a ler este guia, aprecie todas as medalhas das certificações da Sec4US:

![Sec4US_Coins](/mobile/certification/sec4us_certification.jpeg)

## Prazo e escopo do exame

Durante o exame, o candidato receberá um aplicativo Android no formato APK para avaliação. A API level recomendada até a presente data é a API level 30, conforme detalhado no [guia oficial do exame](https://wiki.sec4us.com.br/scmpa-sec4us-certified-mobile-pentester-android-exam-guide/).

O candidato terá 72 horas para concluir os testes, coletar todas as informações necessárias e identificar as flags que correspondem a algumas vulnerabilidades. Após o término das 72 horas do exame, será concedido um prazo adicional de 24 horas para elaborar um relatório técnico detalhado sobre as vulnerabilidades identificadas durante o processo de reconhecimento e exploração. Um template do relatório será fornecido no início do exame para facilitar a elaboração.

É importante ressaltar que nem todas as vulnerabilidades possuem uma flag associada. No entanto, durante a elaboração do relatório, é fundamental evidenciar a flag encontrada através de uma captura de tela.

## Proteções abordadas no exame

A certificação simula um ambiente real e, portanto, inclui todas as principais proteções implementadas em aplicativos bancários ou financeiros:

1. **Frida Detection:** A proteção de Frida Detection é um conjunto de técnicas e medidas implementadas em aplicativos e sistemas para evitar a detecção e análise do aplicativo pelo software Frida. Essas proteções visam dificultar ou impedir que hackers e pesquisadores de segurança usem o Frida para explorar vulnerabilidades ou realizar atividades maliciosas. As técnicas de proteção podem envolver ofuscação de código, checagem de integridade do aplicativo, uso de criptografia e outras medidas para tornar a identificação do Frida mais desafiadora e manter a segurança e privacidade do aplicativo.

2. **Root Detection:** A proteção de root detection é uma medida de segurança implementada para identificar se um dispositivo possui acesso root ou superusuário. Essa detecção é usada para identificar dispositivos que foram desbloqueados ou modificados, o que pode representar um risco de segurança, pois aplicativos com privilégios de root podem acessar áreas sensíveis do sistema e potencialmente comprometer a integridade do aplicativo ou violar a privacidade do usuário. Ao detectar a presença do root, o aplicativo pode tomar ações preventivas, como restringir funcionalidades ou negar o acesso para garantir uma maior segurança.

3. **Emulation Detection:** A proteção de emulação detection refere-se a técnicas empregadas para identificar se um aplicativo está sendo executado em um ambiente de emulação ou virtualização, em vez de um dispositivo real. Essas técnicas são usadas para evitar que análises maliciosas sejam realizadas em um ambiente controlado e para proteger a propriedade intelectual do aplicativo, impedindo sua engenharia reversa. Ao detectar a emulação, o aplicativo pode alterar seu comportamento ou mesmo interromper sua execução para dificultar a análise e proteger-se contra possíveis ameaças.

4. **SSL Pinning:** A proteção de SSL Pinning é uma medida de segurança utilizada em aplicativos para garantir que a comunicação com um servidor remoto seja estabelecida apenas com certificados SSL específicos. Isso impede ataques de intermediários que tentam interceptar e decifrar o tráfego, uma vez que o aplicativo só confiará em certificados pré-configurados ou fixos (pins) para se comunicar com o servidor. Dessa forma, mesmo que um certificado não autorizado seja apresentado, a conexão será bloqueada, protegendo os dados sensíveis transmitidos entre o aplicativo e o servidor.

5. **MTLS(Mutual TLS):** A proteção de MTLS (Mutual TLS) é uma camada adicional de segurança utilizada em comunicações entre sistemas. Nesse método, tanto o cliente quanto o servidor apresentam certificados digitais para autenticação mútua, garantindo a identidade de ambas as partes. Isso garante que apenas as entidades confiáveis possam se comunicar e ajuda a prevenir ataques de intermediários maliciosos, aumentando a segurança nas transmissões de dados.

6. **Criptografia na comunicação das API's:** A proteção de criptografia na comunicação de APIs é uma medida de segurança que consiste em utilizar algoritmos criptográficos para proteger os dados transmitidos entre os clientes e servidores por meio das APIs. Essa criptografia garante que as informações sensíveis, como senhas, tokens de acesso e dados confidenciais, sejam embaralhadas durante o tráfego, tornando-as ilegíveis para invasores. Ao utilizar criptografia na comunicação, é possível reduzir significativamente o risco de interceptações maliciosas e garantir a integridade e confidencialidade dos dados durante as transferências entre as partes envolvidas.

Todas as técnicas descritas acima serão abordadas nesta documentação, onde serão apresentados casos de uso, formas de identificação, mitigação e outros aspectos relevantes.

## Pontuação do Exame

O Exame irá propor uma pontuação para cada objetivo. Cada objetivo especifica os seus requisitos próprios, que precisam ser cumpridos integralmente para a obtenção de todos os pontos. O candidato deve adquirir uma pontuação mínima de 70 pontos para ser aprovado no exame, sendo que a pontuação máxima do exame é de 100 pontos.

## Preparação do Ambiente

Algumas semanas antes do exame, eu havia configurado uma máquina Ubuntu com o Android Studio, JD-GUI, JADX e outras ferramentas essenciais para a execução da certificação. No entanto, no dia do exame, meu Ubuntu se recusou a inicializar, e o Android Studio começou a apresentar falhas, o que me obrigou a reconfigurar todo o ambiente do zero. Como muitos sabem, executar o Android Studio em uma máquina virtual não é a opção mais recomendada, pois considera-se que é um software pesado que pode travar facilmente em qualquer momento. Recomendo fortemente realizar a configuração diretamente na máquina host para evitar tais problemas. Usuários de Mac não precisam se preocupar, pois o Android Studio roda de forma suave nessa plataforma.

A experiência de enfrentar esses problemas de configuração foi um desafio inesperado, mas serviu como uma valiosa lição sobre a importância de estar preparado para contratempos. Tive que lidar com o contratempo e reconfigurar rapidamente o ambiente para prosseguir com o exame. Felizmente, consegui superar essa dificuldade e continuar minha busca pela certificação SCMP|A. Esse episódio também reforçou a importância de ter backups adequados e se certificar de que o ambiente de trabalho está completamente funcional antes de uma ocasião tão importante.

Aprendendo com essa experiência, decidi criar uma ferramenta chamada "mobox" para auxiliar na criação rápida de um ambiente para pentest mobile. Essa ferramenta pode ser encontrada na seção de "Setup" desta documentação. Atualmente, ela está em versão beta, mas pretendo aprimorá-la ainda mais em futuras versões.

## Bases Importantes

Embora não seja uma certificação que exija um grande conhecimento de desenvolvimento Android, essas bases podem ser um diferencial que irá te ajudar a enfrentar os desafios. Lembre-se de que será necessário criar scripts personalizados para realizar alguns bypass de proteções. Pratique bastante suas habilidades de programação e engenharia reversa.

## Relatório

Escrever um relatório de pentest eficaz é essencial para fornecer uma visão clara e útil ao cliente sobre a segurança de seus sistemas. Aqui estão algumas dicas para criar um relatório de pentest de qualidade tanto para a certifição quanto para o dia dia de trabalho:

1. **Estrutura clara e organizada:** Organize o relatório de forma lógica e coerente. Use títulos, subtítulos e seções bem definidas para facilitar a leitura e a localização de informações específicas.

2. **Resumo executivo:** Inicie o relatório com um resumo executivo conciso. Destaque as principais conclusões, vulnerabilidades críticas e recomendações prioritárias. Essa seção é importante, pois muitos stakeholders não têm tempo para ler o relatório completo e precisam de uma visão geral rápida.

3. **Escopo e objetivos:** Explique claramente o escopo do pentest e os objetivos do projeto. Isso ajuda o cliente a entender o que foi avaliado e o que esperar do relatório.

4. **Descrição detalhada das descobertas:** Forneça informações detalhadas sobre as vulnerabilidades encontradas durante o pentest. Inclua informações como a descrição da vulnerabilidade, o impacto potencial, a probabilidade de exploração, flag identificada e scripts utilizados ou criados para fazer o bypass das proteções.

5. **Priorização de riscos:** Classifique as vulnerabilidades de acordo com sua gravidade, impacto e probabilidade de exploração. Isso ajudará o cliente a focar nas questões mais críticas e tomar medidas corretivas efetivas.

6. **Contexto e cenários de ataque:** Forneça contexto ao cliente sobre como as vulnerabilidades podem ser exploradas em cenários de ataque real. Isso ajudará a demonstrar a importância das correções sugeridas.

7. **Recomendações claras e acionáveis:** Ofereça recomendações específicas para corrigir cada vulnerabilidade encontrada. Certifique-se de que as recomendações sejam práticas e possam ser implementadas pelo cliente.

8. **Demonstração de exploração:** Inclua demonstrações de exploração das vulnerabilidades encontradas. Isso pode ajudar a tornar as questões mais tangíveis.

9. **Evidências detalhadas:** Forneça evidências detalhadas de cada vulnerabilidade encontrada, como logs de ataques, capturas de tela e registros de atividades. Isso ajuda a validar suas descobertas e aumenta a confiança do cliente no relatório.

10. **Gráficos e tabelas informativas:** Utilize gráficos e tabelas para resumir dados complexos, como a distribuição de severidade das vulnerabilidades ou o número de problemas encontrados em diferentes áreas do sistema.

11. **Linguagem clara:** Utilize uma linguagem clara e explique os termos técnicos quando forem usados. O relatório deve ser compreensível para todos os níveis de stakeholders do cliente.

12. **Prazo para solução:** Estabeleça prazos claros para a resolução das vulnerabilidades. Isso ajuda o cliente a entender a urgência de cada problema e a priorizar as correções.

13. **Siga o MSTG (Mobile Security Testing Guide) e o OWASP Mobile Top Ten Mobile:** Utilize as principais metodologias de mercado para estruturar seus testes e sua forma de abordagem.

14. **Revisão e edição:** Revise o relatório cuidadosamente para garantir a precisão e a clareza das informações apresentadas.

Lembre-se de que a qualidade e a eficácia do relatório de pentest têm um impacto significativo na maneira como o cliente percebe o trabalho realizado. Transmitir suas descobertas e recomendações de maneira clara, detalhada e acionável é fundamental para fornecer uma visão valiosa e útil ao cliente sobre a segurança de seus sistemas.

## Recomendações Gerais

Lembre-se de fazer pausas durante o exame. Saia um pouco da frente do computador para clarear a mente, tome água e pense de forma criativa para resolver os problemas. Outro fator crucial é gerenciar bem o seu tempo. Lembro-me de que entreguei meu relatório faltando apenas 1 minuto para o término da prova, acabei adormecendo e, quando percebi, várias horas já haviam passado.

## Aplicativos para Treinar

A melhor forma de se preparar para um novo desafio é treinando. Abaixo, vou listar os principais projetos que você pode utilizar para treinar e aprimorar suas técnicas:

[InsecureBankv2](https://github.com/dineshshetty/Android-InsecureBankv2)

[Diva Android (DIVA)](https://github.com/payatu/diva-android)

[Crackmes](https://github.com/OWASP/owasp-mastg/tree/master/Crackmes)

[Damn Vulnerable Bank](https://github.com/rewanthtammana/Damn-Vulnerable-Bank)

[Damn Vulnerable iOS App](https://github.com/prateek147/DVIA)

[OWASP GoatDroid Project](https://github.com/jackMannino/OWASP-GoatDroid-Project)

[Damn Vulnerable Hybrid Mobile App (DVHMA)](https://github.com/logicalhacking/DVHMA)

[MSTG Hacking Playground](https://github.com/OWASP/MSTG-Hacking-Playground)

[Ovaa](https://github.com/oversecured/ovaa)

## Treinamentos

Não existem muitos cursos relacionados a pentest mobile, no entanto, por sorte, a Sec4US oferece um curso preparatório para essa certificação ministrado pelo Hélvio.

[Hacking Mobile Application - Android](https://sec4us.com.br/treinamentos/hacking-mobile-application-android/)

## Conclusão

A conquista desta certificação representou uma experiência extremamente desafiadora e, ao mesmo tempo, incrivelmente gratificante para mim. Durante a minha preparação, investi tempo no curso da Sec4US e participei ativamente em laboratórios práticos, como o InsecureBankv2. Além disso, não posso deixar de mencionar a contribuição significativa do artigo do B4kT3r14, disponível no [blog da Hacking Force](https://blog.hackingforce.com.br/) [Mais segurança com mTLS: entenda as diferenças em relação ao TLS, a importância e as vulnerabilidades](https://blog.hackingforce.com.br/pt/mtls), que se mostrou fundamental e extremamente esclarecedor.

Espero sinceramente que este guia e a documentação aqui presente sejam de grande utilidade em sua própria jornada, assim como em outros desafios que você possa enfrentar.