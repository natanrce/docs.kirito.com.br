export const AVALIABLE_WIKI = {
  MOBILE: 'mobile',
  WEB: 'web',
  API: 'API',
  FORENSE: 'forense',
  WINDOWS: 'windows'
};

export const navigation = {
  [AVALIABLE_WIKI.MOBILE]: [
    {
      name: 'Setup ⚙️',
      items: [
        {
          name: 'Guia de Instalação e Configuração do Android Studio',
          href: '/mobile/tools/android-studio'
        },
        {
          name: 'Ferramentas essenciais para engenharia reversa em apps mobile',
          href: '/mobile/tools/reverse-engineering'
        },
        {
          name: 'Guia de Instalação e Uso do Frida, Frida-tools, Objection e Frida-Server',
          href: '/mobile/tools/instrumentation'
        },
        {
          name: 'Ferramentas de Teste de Segurança para Aplicativos Móveis (DAST)',
          href: '/mobile/tools/dast-tools'
        }
      ]
    },
    {
      name: 'Commands Trick 📱',
      items: [
        {
          name: 'Android Device Bridge (ADB) Commands Tricks',
          href: '/mobile/tricks/adb-commands-tricks'
        },
        {
          name: 'Disassembly, Assembly e Assinatura',
          href: '/mobile/tricks/dis-commands-tricks'
        }
      ]
    },
    {
      name: 'OWASP Mobile Top 10 - 2023 📚',
      items: [
        {
          name: 'M1: Insecure Authentication/Authorization',
          href: '/mobile/owasp-2023/M1-Insecure-Authentication-Authorization'
        },
        {
          name: 'M2: Insecure Communication',
          href: '/mobile/owasp-2023/M2-Insecure-Communication'
        },
        {
          name: 'M3: Inadequate Supply Chain Security',
          href: '/mobile/owasp-2023/M3-Inadequate-Supply-Chain-Security'
        },
        {
          name: 'M4: Inadequate Privacy Controls',
          href: '/mobile/owasp-2023/M4-Inadequate-Privacy-Controls'
        },
        {
          name: 'M5: Improper Credential Usage',
          href: '/mobile/owasp-2023/M5-Improper-Credential-Usage'
        },
        {
          name: 'M6: Insufficient Input/Output Validation',
          href: '/mobile/owasp-2023/M6-Insufficient-Input-Output-Validation'
        },
        {
          name: 'M7: Security Misconfiguration',
          href: '/mobile/owasp-2023/M7-Security-Misconfiguration'
        },
        {
          name: 'M8: Insufficient Cryptography',
          href: '/mobile/owasp-2023/M8-Insufficient-Cryptography'
        },
        {
          name: 'M9: Insecure Data Storage',
          href: '/mobile/owasp-2023/M9-Insecure-Data-Storage'
        },
        {
          name: 'M10: Insufficient Binary Protections',
          href: '/mobile/owasp-2023/M10-Insufficient-Binary-Protections'
        }
      ]
    },
    {
      name: 'Pentest (stage)',
      items: [
        {
          name: 'Aquisição de aplicativos: o primeiro passo para o pentest mobile',
          href: '/mobile/pentest/application-acquisition'
        }
      ]
    },
    {
      name: 'Proteções 🔒',
      items: [
        {
          name: 'Flag Secure',
          href: '/mobile/protections/secure-flag'
        },
        {
          name: 'Emulation Detection',
          href: '/mobile/protections/emulation-detection'
        },
        {
          name: 'Frida Detection',
          href: '/mobile/protections/frida-detection'
        },
        {
          name: 'Root Detection',
          href: '/mobile/protections/root-detection'
        },
        {
          name: 'SSL/TLS Pinning',
          href: '/mobile/protections/ssl-tls-pinning'
        },
        {
          name: 'Insecure Data Storage',
          href: '/mobile/protections/insecure-data-storage'
        },
        {
          name: 'SQL Injection',
          href: '/mobile/protections/sql-injection'
        }
      ]
    },
    {
      name: 'Laboratory 🔬',
      items: [
        {
          name: 'Secure App (Flag Secure)',
          href: '/labs/mobile/secure-app'
        }
      ]
    },
    {
      name: 'Certification Review🎓',
      items: [
        {
          name: 'SCMP|A',
          href: '/certification/mobile/scmp-a'
        }
      ]
    }
  ],
  [AVALIABLE_WIKI.WEB]: [
    {
      name: 'Web (OWASP Web Top 10 - 2021)📚',
      items: [
        {
          name: 'Em breve',
          href: '/index'
        }
      ]
    }
  ],
  [AVALIABLE_WIKI.API]: [
    // {
    //   name: 'API (OWASP API Top 10 - 2023)📚',
    //   items: [
    //     {
    //       name: 'Em breve',
    //       href: '/index'
    //     }
    //   ]
    // },
    {
      name: 'Certification Review🎓',
      items: [
        {
          name: 'SCWAP',
          href: '/certification/api/scwap'
        }
      ]
    }
  ],
  [AVALIABLE_WIKI.FORENSE]: [
    // {
    //   name: 'Fundamentos',
    //   items: [
    //     {
    //       name: 'Fundamentos da Perícia Forense Digital',
    //       href: '/digital-forensics/introduction'
    //     },
    //     {
    //       name: 'Formulário de Cadeia de Custódia',
    //       href: ''
    //     },
    //     {
    //       name: 'Coleta Perícia Forense Computacional em Computador',
    //       href: ''
    //     }
    //   ]
    // },
    {
      name: 'Certification Review🎓',
      items: [
        {
          name: 'SCFE',
          href: '/certification/digital-forensics/scfe'
        }
      ]
    }
  ],
  [AVALIABLE_WIKI.WINDOWS]: [
    {
      name: 'Commands Windows',
      items: [
        {
          name: 'Transferência de Arquivos entre Atacante e Vítima',
          href: '/windows/download/file-downloading'
        }
      ]
    }
  ]
};
