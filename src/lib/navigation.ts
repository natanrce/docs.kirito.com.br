export const AVALIABLE_WIKI = {
  MOBILE: 'mobile',
  WEB: 'web',
  API: 'API'
};

export const navigation = {
  [AVALIABLE_WIKI.MOBILE]: [
    {
      name: 'Setup ⚙️',
      items: [
        {
          name: 'Guia de Instalação e Configuração do Android Studio',
          href: '/mobile/tools/android_studio'
        },
        {
          name: 'Ferramentas essenciais para engenharia reversa em apps mobile',
          href: '/mobile/tools/reverse_engineering'
        },
        {
          name: 'Guia de Instalação e Uso do Frida, Frida-tools, Objection e Frida-Server',
          href: '/mobile/tools/instrumentation'
        },
        {
          name: 'Ferramentas de Teste de Segurança para Aplicativos Móveis (DAST)',
          href: '/mobile/tools/dast_tools'
        }
        // {
        //   name: 'Facilitando a montagem automatizada do seu setup com o Mobox',
        //   href: '/mobile/tools/mobox'
        // }
      ]
    },
    {
      name: 'Commands Trick 📱',
      items: [
        {
          name: 'Android Device Bridge (ADB) Commands Tricks',
          href: '/mobile/tricks/adb_commands_tricks'
        },
        {
          name: 'Disassembly, Assembly e Assinatura',
          href: '/mobile/tricks/dis_commands_tricks'
        }
      ]
    },
    {
      name: 'OWASP Mobile Top 10 - 2023 📚',
      items: [
        {
          name: 'M1: Insecure Authentication/Authorization',
          href: '/mobile/owasp-2023/M1-Insecure_Authentication-Authorization'
        },
        {
          name: 'M2: Insecure Communication',
          href: '/mobile/owasp-2023/M2-Insecure_Communication'
        },
        {
          name: 'M3: Inadequate Supply Chain Security',
          href: '/mobile/owasp-2023/M3-Inadequate_Supply_Chain_Security'
        },
        {
          name: 'M4: Inadequate Privacy Controls',
          href: '/mobile/owasp-2023/M4-Inadequate_Privacy_Controls'
        },
        {
          name: 'M5: Improper Credential Usage',
          href: '/mobile/owasp-2023/M5-Improper_Credential_Usage'
        },
        {
          name: 'M6: Insufficient Input/Output Validation',
          href: '/mobile/owasp-2023/M6-Insufficient_Input-Output_Validation'
        },
        {
          name: 'M7: Security Misconfiguration',
          href: '/mobile/owasp-2023/M7-Security_Misconfiguration'
        },
        {
          name: 'M8: Insufficient Cryptography',
          href: '/mobile/owasp-2023/M8-Insufficient_Cryptography'
        },
        {
          name: 'M9: Insecure Data Storage',
          href: '/mobile/owasp-2023/M9-Insecure_Data_Storage'
        },
        {
          name: 'M10: Insufficient Binary Protections',
          href: '/mobile/owasp-2023/M10-Insufficient_Binary_Protections'
        }
      ]
    },
    {
      name: 'Pentest (stage)',
      items: [
        {
          name: 'Aquisição de aplicativos: o primeiro passo para o pentest mobile',
          href: '/mobile/pentest/application_acquisition'
        }
      ]
    },
    {
      name: 'Proteções 🔒',
      items: [
        {
          name: 'Flag Secure',
          href: '/mobile/protections/secure_flag'
        },
        {
          name: 'Emulation Detection',
          href: '/mobile/protections/emulation_detection'
        },
        {
          name: 'Frida Detection',
          href: '/mobile/protections/frida_detection'
        },
        {
          name: 'Root Detection',
          href: '/mobile/protections/root_detection'
        },
        {
          name: 'SSL/TLS Pinning',
          href: '/mobile/protections/ssl_tls_pinning'
        },
        {
          name: 'Insecure Data Storage',
          href: '/mobile/protections/insecure_data_storage'
        },
        {
          name: 'SQL Injection',
          href: '/mobile/protections/sql_injection'
        }
      ]
    },
    {
      name: 'Laboratory 🔬',
      items: [
        {
          name: 'Secure App (Flag Secure)',
          href: '/labs/mobile/secure_app'
        }
      ]
    }
    // {
    //   name: 'Certification 🎓',
    //   items: [
    //     {
    //       name: 'SCMP|A',
    //       href: '/certification/mobile/scmp-a'
    //     }
    //   ]
    // }
  ],
  [AVALIABLE_WIKI.WEB]: [
    {
      name: 'Web (OWASP Web Top 10 - 2021)📚',
      items: [
        {
          name: 'Em breve',
          href: '/index'
        }
        // {
        //   name: 'A01:2021-Broken Access Control ',
        //   href: ''
        // },
        // {
        //   name: 'A02:2021-Cryptographic Failures',
        //   href: ''
        // },
        // {
        //   name: 'A03:2021-Injection',
        //   href: ''
        // },
        // {
        //   name: 'A04:2021-Insecure Design',
        //   href: ''
        // },
        // {
        //   name: 'A05:2021-Security Misconfiguration',
        //   href: ''
        // },
        // {
        //   name: 'A06:2021-Vulnerable and Outdated Components',
        //   href: ''
        // },
        // {
        //   name: 'A07:2021-Identification and Authentication Failures',
        //   href: ''
        // },
        // {
        //   name: 'A08:2021-Software and Data Integrity Failures',
        //   href: ''
        // },
        // {
        //   name: 'A09:2021-Security Logging and Monitoring Failures',
        //   href: ''
        // },
        // {
        //   name: 'A10:2021-Server-Side Request Forgery',
        //   href: ''
        // }
      ]
    }
  ],
  [AVALIABLE_WIKI.API]: [
    {
      name: 'API (OWASP API Top 10 - 2023)📚',
      items: [
        {
          name: 'Em breve',
          href: '/index'
        }
        // {
        //   name: 'API1:2023 - Broken Object Level Authorization',
        //   href: ''
        // },
        // {
        //   name: 'API2:2023 - Broken Authentication',
        //   href: ''
        // },
        // {
        //   name: 'API3:2023 - Broken Object Property Level Authorization',
        //   href: ''
        // },
        // {
        //   name: 'API4:2023 - Unrestricted Resource Consumption',
        //   href: ''
        // },
        // {
        //   name: 'API5:2023 - Broken Function Level Authorization',
        //   href: ''
        // },
        // {
        //   name: 'API6:2023 - Unrestricted Access to Sensitive Business Flows',
        //   href: ''
        // },
        // {
        //   name: 'API7:2023 - Server Side Request Forgery',
        //   href: ''
        // },
        // {
        //   name: 'API8:2023 - Security Misconfiguration',
        //   href: ''
        // },
        // {
        //   name: 'API9:2023 - Improper Inventory Management',
        //   href: ''
        // },
        // {
        //   name: 'API10:2023 - Unsafe Consumption of APIs',
        //   href: ''
        // }
      ]
    }
  ]
};
