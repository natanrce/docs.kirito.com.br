"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"76cc72b7f2a8\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/NDk1YiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjc2Y2M3MmI3ZjJhOFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/lib/navigation.ts":
/*!*******************************!*\
  !*** ./src/lib/navigation.ts ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AVALIABLE_WIKI: function() { return /* binding */ AVALIABLE_WIKI; },\n/* harmony export */   navigation: function() { return /* binding */ navigation; }\n/* harmony export */ });\nconst AVALIABLE_WIKI = {\n    MOBILE: \"mobile\",\n    WEB: \"web\",\n    API: \"API\",\n    FORENSE: \"forense\",\n    WINDOWS: \"windows\"\n};\nconst navigation = {\n    [AVALIABLE_WIKI.MOBILE]: [\n        {\n            name: \"Setup ⚙️\",\n            items: [\n                {\n                    name: \"Guia de Instala\\xe7\\xe3o e Configura\\xe7\\xe3o do Android Studio\",\n                    href: \"/mobile/tools/android_studio\"\n                },\n                {\n                    name: \"Ferramentas essenciais para engenharia reversa em apps mobile\",\n                    href: \"/mobile/tools/reverse_engineering\"\n                },\n                {\n                    name: \"Guia de Instala\\xe7\\xe3o e Uso do Frida, Frida-tools, Objection e Frida-Server\",\n                    href: \"/mobile/tools/instrumentation\"\n                },\n                {\n                    name: \"Ferramentas de Teste de Seguran\\xe7a para Aplicativos M\\xf3veis (DAST)\",\n                    href: \"/mobile/tools/dast_tools\"\n                }\n            ]\n        },\n        {\n            name: \"Commands Trick \\uD83D\\uDCF1\",\n            items: [\n                {\n                    name: \"Android Device Bridge (ADB) Commands Tricks\",\n                    href: \"/mobile/tricks/adb_commands_tricks\"\n                },\n                {\n                    name: \"Disassembly, Assembly e Assinatura\",\n                    href: \"/mobile/tricks/dis_commands_tricks\"\n                }\n            ]\n        },\n        {\n            name: \"OWASP Mobile Top 10 - 2023 \\uD83D\\uDCDA\",\n            items: [\n                {\n                    name: \"M1: Insecure Authentication/Authorization\",\n                    href: \"/mobile/owasp-2023/M1-Insecure_Authentication-Authorization\"\n                },\n                {\n                    name: \"M2: Insecure Communication\",\n                    href: \"/mobile/owasp-2023/M2-Insecure_Communication\"\n                },\n                {\n                    name: \"M3: Inadequate Supply Chain Security\",\n                    href: \"/mobile/owasp-2023/M3-Inadequate_Supply_Chain_Security\"\n                },\n                {\n                    name: \"M4: Inadequate Privacy Controls\",\n                    href: \"/mobile/owasp-2023/M4-Inadequate_Privacy_Controls\"\n                },\n                {\n                    name: \"M5: Improper Credential Usage\",\n                    href: \"/mobile/owasp-2023/M5-Improper_Credential_Usage\"\n                },\n                {\n                    name: \"M6: Insufficient Input/Output Validation\",\n                    href: \"/mobile/owasp-2023/M6-Insufficient_Input-Output_Validation\"\n                },\n                {\n                    name: \"M7: Security Misconfiguration\",\n                    href: \"/mobile/owasp-2023/M7-Security_Misconfiguration\"\n                },\n                {\n                    name: \"M8: Insufficient Cryptography\",\n                    href: \"/mobile/owasp-2023/M8-Insufficient_Cryptography\"\n                },\n                {\n                    name: \"M9: Insecure Data Storage\",\n                    href: \"/mobile/owasp-2023/M9-Insecure_Data_Storage\"\n                },\n                {\n                    name: \"M10: Insufficient Binary Protections\",\n                    href: \"/mobile/owasp-2023/M10-Insufficient_Binary_Protections\"\n                }\n            ]\n        },\n        {\n            name: \"Pentest (stage)\",\n            items: [\n                {\n                    name: \"Aquisi\\xe7\\xe3o de aplicativos: o primeiro passo para o pentest mobile\",\n                    href: \"/mobile/pentest/application_acquisition\"\n                }\n            ]\n        },\n        {\n            name: \"Prote\\xe7\\xf5es \\uD83D\\uDD12\",\n            items: [\n                {\n                    name: \"Flag Secure\",\n                    href: \"/mobile/protections/secure_flag\"\n                },\n                {\n                    name: \"Emulation Detection\",\n                    href: \"/mobile/protections/emulation_detection\"\n                },\n                {\n                    name: \"Frida Detection\",\n                    href: \"/mobile/protections/frida_detection\"\n                },\n                {\n                    name: \"Root Detection\",\n                    href: \"/mobile/protections/root_detection\"\n                },\n                {\n                    name: \"SSL/TLS Pinning\",\n                    href: \"/mobile/protections/ssl_tls_pinning\"\n                },\n                {\n                    name: \"Insecure Data Storage\",\n                    href: \"/mobile/protections/insecure_data_storage\"\n                },\n                {\n                    name: \"SQL Injection\",\n                    href: \"/mobile/protections/sql_injection\"\n                }\n            ]\n        },\n        {\n            name: \"Laboratory \\uD83D\\uDD2C\",\n            items: [\n                {\n                    name: \"Secure App (Flag Secure)\",\n                    href: \"/labs/mobile/secure_app\"\n                }\n            ]\n        },\n        {\n            name: \"Certification Review\\uD83C\\uDF93\",\n            items: [\n                {\n                    name: \"SCMP|A\",\n                    href: \"/certification/mobile/scmp-a\"\n                }\n            ]\n        }\n    ],\n    [AVALIABLE_WIKI.WEB]: [\n        {\n            name: \"Web (OWASP Web Top 10 - 2021)\\uD83D\\uDCDA\",\n            items: [\n                {\n                    name: \"Em breve\",\n                    href: \"/index\"\n                }\n            ]\n        }\n    ],\n    [AVALIABLE_WIKI.API]: [\n        // {\n        //   name: 'API (OWASP API Top 10 - 2023)📚',\n        //   items: [\n        //     {\n        //       name: 'Em breve',\n        //       href: '/index'\n        //     }\n        //   ]\n        // },\n        {\n            name: \"Certification Review\\uD83C\\uDF93\",\n            items: [\n                {\n                    name: \"SCWAP\",\n                    href: \"/certification/api/scwap\"\n                }\n            ]\n        }\n    ],\n    [AVALIABLE_WIKI.FORENSE]: [\n        // {\n        //   name: 'Fundamentos',\n        //   items: [\n        //     {\n        //       name: 'Fundamentos da Perícia Forense Digital',\n        //       href: '/digital_forensics/introduction'\n        //     },\n        //     {\n        //       name: 'Formulário de Cadeia de Custódia',\n        //       href: ''\n        //     },\n        //     {\n        //       name: 'Coleta Perícia Forense Computacional em Computador',\n        //       href: ''\n        //     }\n        //   ]\n        // },\n        {\n            name: \"Certification Review\\uD83C\\uDF93\",\n            items: [\n                {\n                    name: \"SCFE\",\n                    href: \"/certification/digital_forensics/scfe\"\n                }\n            ]\n        }\n    ],\n    [AVALIABLE_WIKI.WINDOWS]: [\n        {\n            name: \"Commands Windows\",\n            items: [\n                {\n                    name: \"Transfer\\xeancia de Arquivos entre Atacante e V\\xedtima\",\n                    href: \"/windows/download/file_downloading\"\n                }\n            ]\n        }\n    ]\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvbmF2aWdhdGlvbi50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLE1BQU1BLGlCQUFpQjtJQUM1QkMsUUFBUTtJQUNSQyxLQUFLO0lBQ0xDLEtBQUs7SUFDTEMsU0FBUztJQUNUQyxTQUFTO0FBQ1gsRUFBRTtBQUVLLE1BQU1DLGFBQWE7SUFDeEIsQ0FBQ04sZUFBZUMsTUFBTSxDQUFDLEVBQUU7UUFDdkI7WUFDRU0sTUFBTTtZQUNOQyxPQUFPO2dCQUNMO29CQUNFRCxNQUFNO29CQUNORSxNQUFNO2dCQUNSO2dCQUNBO29CQUNFRixNQUFNO29CQUNORSxNQUFNO2dCQUNSO2dCQUNBO29CQUNFRixNQUFNO29CQUNORSxNQUFNO2dCQUNSO2dCQUNBO29CQUNFRixNQUFNO29CQUNORSxNQUFNO2dCQUNSO2FBQ0Q7UUFDSDtRQUNBO1lBQ0VGLE1BQU07WUFDTkMsT0FBTztnQkFDTDtvQkFDRUQsTUFBTTtvQkFDTkUsTUFBTTtnQkFDUjtnQkFDQTtvQkFDRUYsTUFBTTtvQkFDTkUsTUFBTTtnQkFDUjthQUNEO1FBQ0g7UUFDQTtZQUNFRixNQUFNO1lBQ05DLE9BQU87Z0JBQ0w7b0JBQ0VELE1BQU07b0JBQ05FLE1BQU07Z0JBQ1I7Z0JBQ0E7b0JBQ0VGLE1BQU07b0JBQ05FLE1BQU07Z0JBQ1I7Z0JBQ0E7b0JBQ0VGLE1BQU07b0JBQ05FLE1BQU07Z0JBQ1I7Z0JBQ0E7b0JBQ0VGLE1BQU07b0JBQ05FLE1BQU07Z0JBQ1I7Z0JBQ0E7b0JBQ0VGLE1BQU07b0JBQ05FLE1BQU07Z0JBQ1I7Z0JBQ0E7b0JBQ0VGLE1BQU07b0JBQ05FLE1BQU07Z0JBQ1I7Z0JBQ0E7b0JBQ0VGLE1BQU07b0JBQ05FLE1BQU07Z0JBQ1I7Z0JBQ0E7b0JBQ0VGLE1BQU07b0JBQ05FLE1BQU07Z0JBQ1I7Z0JBQ0E7b0JBQ0VGLE1BQU07b0JBQ05FLE1BQU07Z0JBQ1I7Z0JBQ0E7b0JBQ0VGLE1BQU07b0JBQ05FLE1BQU07Z0JBQ1I7YUFDRDtRQUNIO1FBQ0E7WUFDRUYsTUFBTTtZQUNOQyxPQUFPO2dCQUNMO29CQUNFRCxNQUFNO29CQUNORSxNQUFNO2dCQUNSO2FBQ0Q7UUFDSDtRQUNBO1lBQ0VGLE1BQU07WUFDTkMsT0FBTztnQkFDTDtvQkFDRUQsTUFBTTtvQkFDTkUsTUFBTTtnQkFDUjtnQkFDQTtvQkFDRUYsTUFBTTtvQkFDTkUsTUFBTTtnQkFDUjtnQkFDQTtvQkFDRUYsTUFBTTtvQkFDTkUsTUFBTTtnQkFDUjtnQkFDQTtvQkFDRUYsTUFBTTtvQkFDTkUsTUFBTTtnQkFDUjtnQkFDQTtvQkFDRUYsTUFBTTtvQkFDTkUsTUFBTTtnQkFDUjtnQkFDQTtvQkFDRUYsTUFBTTtvQkFDTkUsTUFBTTtnQkFDUjtnQkFDQTtvQkFDRUYsTUFBTTtvQkFDTkUsTUFBTTtnQkFDUjthQUNEO1FBQ0g7UUFDQTtZQUNFRixNQUFNO1lBQ05DLE9BQU87Z0JBQ0w7b0JBQ0VELE1BQU07b0JBQ05FLE1BQU07Z0JBQ1I7YUFDRDtRQUNIO1FBQ0E7WUFDRUYsTUFBTTtZQUNOQyxPQUFPO2dCQUNMO29CQUNFRCxNQUFNO29CQUNORSxNQUFNO2dCQUNSO2FBQ0Q7UUFDSDtLQUNEO0lBQ0QsQ0FBQ1QsZUFBZUUsR0FBRyxDQUFDLEVBQUU7UUFDcEI7WUFDRUssTUFBTTtZQUNOQyxPQUFPO2dCQUNMO29CQUNFRCxNQUFNO29CQUNORSxNQUFNO2dCQUNSO2FBQ0Q7UUFDSDtLQUNEO0lBQ0QsQ0FBQ1QsZUFBZUcsR0FBRyxDQUFDLEVBQUU7UUFDcEIsSUFBSTtRQUNKLDZDQUE2QztRQUM3QyxhQUFhO1FBQ2IsUUFBUTtRQUNSLDBCQUEwQjtRQUMxQix1QkFBdUI7UUFDdkIsUUFBUTtRQUNSLE1BQU07UUFDTixLQUFLO1FBQ0w7WUFDRUksTUFBTTtZQUNOQyxPQUFPO2dCQUNMO29CQUNFRCxNQUFNO29CQUNORSxNQUFNO2dCQUNSO2FBQ0Q7UUFDSDtLQUNEO0lBQ0QsQ0FBQ1QsZUFBZUksT0FBTyxDQUFDLEVBQUU7UUFDeEIsSUFBSTtRQUNKLHlCQUF5QjtRQUN6QixhQUFhO1FBQ2IsUUFBUTtRQUNSLHdEQUF3RDtRQUN4RCxnREFBZ0Q7UUFDaEQsU0FBUztRQUNULFFBQVE7UUFDUixrREFBa0Q7UUFDbEQsaUJBQWlCO1FBQ2pCLFNBQVM7UUFDVCxRQUFRO1FBQ1Isb0VBQW9FO1FBQ3BFLGlCQUFpQjtRQUNqQixRQUFRO1FBQ1IsTUFBTTtRQUNOLEtBQUs7UUFDTDtZQUNFRyxNQUFNO1lBQ05DLE9BQU87Z0JBQ0w7b0JBQ0VELE1BQU07b0JBQ05FLE1BQU07Z0JBQ1I7YUFDRDtRQUNIO0tBQ0Q7SUFDRCxDQUFDVCxlQUFlSyxPQUFPLENBQUMsRUFBRTtRQUN4QjtZQUNFRSxNQUFNO1lBQ05DLE9BQU87Z0JBQ0w7b0JBQ0VELE1BQU07b0JBQ05FLE1BQU07Z0JBQ1I7YUFDRDtRQUNIO0tBQ0Q7QUFDSCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWIvbmF2aWdhdGlvbi50cz85MzllIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBVkFMSUFCTEVfV0lLSSA9IHtcbiAgTU9CSUxFOiAnbW9iaWxlJyxcbiAgV0VCOiAnd2ViJyxcbiAgQVBJOiAnQVBJJyxcbiAgRk9SRU5TRTogJ2ZvcmVuc2UnLFxuICBXSU5ET1dTOiAnd2luZG93cydcbn07XG5cbmV4cG9ydCBjb25zdCBuYXZpZ2F0aW9uID0ge1xuICBbQVZBTElBQkxFX1dJS0kuTU9CSUxFXTogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdTZXR1cCDimpnvuI8nLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdHdWlhIGRlIEluc3RhbGHDp8OjbyBlIENvbmZpZ3VyYcOnw6NvIGRvIEFuZHJvaWQgU3R1ZGlvJyxcbiAgICAgICAgICBocmVmOiAnL21vYmlsZS90b29scy9hbmRyb2lkX3N0dWRpbydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdGZXJyYW1lbnRhcyBlc3NlbmNpYWlzIHBhcmEgZW5nZW5oYXJpYSByZXZlcnNhIGVtIGFwcHMgbW9iaWxlJyxcbiAgICAgICAgICBocmVmOiAnL21vYmlsZS90b29scy9yZXZlcnNlX2VuZ2luZWVyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0d1aWEgZGUgSW5zdGFsYcOnw6NvIGUgVXNvIGRvIEZyaWRhLCBGcmlkYS10b29scywgT2JqZWN0aW9uIGUgRnJpZGEtU2VydmVyJyxcbiAgICAgICAgICBocmVmOiAnL21vYmlsZS90b29scy9pbnN0cnVtZW50YXRpb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnRmVycmFtZW50YXMgZGUgVGVzdGUgZGUgU2VndXJhbsOnYSBwYXJhIEFwbGljYXRpdm9zIE3Ds3ZlaXMgKERBU1QpJyxcbiAgICAgICAgICBocmVmOiAnL21vYmlsZS90b29scy9kYXN0X3Rvb2xzJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQ29tbWFuZHMgVHJpY2sg8J+TsScsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0FuZHJvaWQgRGV2aWNlIEJyaWRnZSAoQURCKSBDb21tYW5kcyBUcmlja3MnLFxuICAgICAgICAgIGhyZWY6ICcvbW9iaWxlL3RyaWNrcy9hZGJfY29tbWFuZHNfdHJpY2tzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0Rpc2Fzc2VtYmx5LCBBc3NlbWJseSBlIEFzc2luYXR1cmEnLFxuICAgICAgICAgIGhyZWY6ICcvbW9iaWxlL3RyaWNrcy9kaXNfY29tbWFuZHNfdHJpY2tzJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnT1dBU1AgTW9iaWxlIFRvcCAxMCAtIDIwMjMg8J+TmicsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ00xOiBJbnNlY3VyZSBBdXRoZW50aWNhdGlvbi9BdXRob3JpemF0aW9uJyxcbiAgICAgICAgICBocmVmOiAnL21vYmlsZS9vd2FzcC0yMDIzL00xLUluc2VjdXJlX0F1dGhlbnRpY2F0aW9uLUF1dGhvcml6YXRpb24nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnTTI6IEluc2VjdXJlIENvbW11bmljYXRpb24nLFxuICAgICAgICAgIGhyZWY6ICcvbW9iaWxlL293YXNwLTIwMjMvTTItSW5zZWN1cmVfQ29tbXVuaWNhdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdNMzogSW5hZGVxdWF0ZSBTdXBwbHkgQ2hhaW4gU2VjdXJpdHknLFxuICAgICAgICAgIGhyZWY6ICcvbW9iaWxlL293YXNwLTIwMjMvTTMtSW5hZGVxdWF0ZV9TdXBwbHlfQ2hhaW5fU2VjdXJpdHknXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnTTQ6IEluYWRlcXVhdGUgUHJpdmFjeSBDb250cm9scycsXG4gICAgICAgICAgaHJlZjogJy9tb2JpbGUvb3dhc3AtMjAyMy9NNC1JbmFkZXF1YXRlX1ByaXZhY3lfQ29udHJvbHMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnTTU6IEltcHJvcGVyIENyZWRlbnRpYWwgVXNhZ2UnLFxuICAgICAgICAgIGhyZWY6ICcvbW9iaWxlL293YXNwLTIwMjMvTTUtSW1wcm9wZXJfQ3JlZGVudGlhbF9Vc2FnZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdNNjogSW5zdWZmaWNpZW50IElucHV0L091dHB1dCBWYWxpZGF0aW9uJyxcbiAgICAgICAgICBocmVmOiAnL21vYmlsZS9vd2FzcC0yMDIzL002LUluc3VmZmljaWVudF9JbnB1dC1PdXRwdXRfVmFsaWRhdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdNNzogU2VjdXJpdHkgTWlzY29uZmlndXJhdGlvbicsXG4gICAgICAgICAgaHJlZjogJy9tb2JpbGUvb3dhc3AtMjAyMy9NNy1TZWN1cml0eV9NaXNjb25maWd1cmF0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ004OiBJbnN1ZmZpY2llbnQgQ3J5cHRvZ3JhcGh5JyxcbiAgICAgICAgICBocmVmOiAnL21vYmlsZS9vd2FzcC0yMDIzL004LUluc3VmZmljaWVudF9DcnlwdG9ncmFwaHknXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnTTk6IEluc2VjdXJlIERhdGEgU3RvcmFnZScsXG4gICAgICAgICAgaHJlZjogJy9tb2JpbGUvb3dhc3AtMjAyMy9NOS1JbnNlY3VyZV9EYXRhX1N0b3JhZ2UnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnTTEwOiBJbnN1ZmZpY2llbnQgQmluYXJ5IFByb3RlY3Rpb25zJyxcbiAgICAgICAgICBocmVmOiAnL21vYmlsZS9vd2FzcC0yMDIzL00xMC1JbnN1ZmZpY2llbnRfQmluYXJ5X1Byb3RlY3Rpb25zJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnUGVudGVzdCAoc3RhZ2UpJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnQXF1aXNpw6fDo28gZGUgYXBsaWNhdGl2b3M6IG8gcHJpbWVpcm8gcGFzc28gcGFyYSBvIHBlbnRlc3QgbW9iaWxlJyxcbiAgICAgICAgICBocmVmOiAnL21vYmlsZS9wZW50ZXN0L2FwcGxpY2F0aW9uX2FjcXVpc2l0aW9uJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnUHJvdGXDp8O1ZXMg8J+UkicsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0ZsYWcgU2VjdXJlJyxcbiAgICAgICAgICBocmVmOiAnL21vYmlsZS9wcm90ZWN0aW9ucy9zZWN1cmVfZmxhZydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdFbXVsYXRpb24gRGV0ZWN0aW9uJyxcbiAgICAgICAgICBocmVmOiAnL21vYmlsZS9wcm90ZWN0aW9ucy9lbXVsYXRpb25fZGV0ZWN0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ0ZyaWRhIERldGVjdGlvbicsXG4gICAgICAgICAgaHJlZjogJy9tb2JpbGUvcHJvdGVjdGlvbnMvZnJpZGFfZGV0ZWN0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ1Jvb3QgRGV0ZWN0aW9uJyxcbiAgICAgICAgICBocmVmOiAnL21vYmlsZS9wcm90ZWN0aW9ucy9yb290X2RldGVjdGlvbidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdTU0wvVExTIFBpbm5pbmcnLFxuICAgICAgICAgIGhyZWY6ICcvbW9iaWxlL3Byb3RlY3Rpb25zL3NzbF90bHNfcGlubmluZydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdJbnNlY3VyZSBEYXRhIFN0b3JhZ2UnLFxuICAgICAgICAgIGhyZWY6ICcvbW9iaWxlL3Byb3RlY3Rpb25zL2luc2VjdXJlX2RhdGFfc3RvcmFnZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdTUUwgSW5qZWN0aW9uJyxcbiAgICAgICAgICBocmVmOiAnL21vYmlsZS9wcm90ZWN0aW9ucy9zcWxfaW5qZWN0aW9uJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnTGFib3JhdG9yeSDwn5SsJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnU2VjdXJlIEFwcCAoRmxhZyBTZWN1cmUpJyxcbiAgICAgICAgICBocmVmOiAnL2xhYnMvbW9iaWxlL3NlY3VyZV9hcHAnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDZXJ0aWZpY2F0aW9uIFJldmlld/CfjpMnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdTQ01QfEEnLFxuICAgICAgICAgIGhyZWY6ICcvY2VydGlmaWNhdGlvbi9tb2JpbGUvc2NtcC1hJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdLFxuICBbQVZBTElBQkxFX1dJS0kuV0VCXTogW1xuICAgIHtcbiAgICAgIG5hbWU6ICdXZWIgKE9XQVNQIFdlYiBUb3AgMTAgLSAyMDIxKfCfk5onLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdFbSBicmV2ZScsXG4gICAgICAgICAgaHJlZjogJy9pbmRleCdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXSxcbiAgW0FWQUxJQUJMRV9XSUtJLkFQSV06IFtcbiAgICAvLyB7XG4gICAgLy8gICBuYW1lOiAnQVBJIChPV0FTUCBBUEkgVG9wIDEwIC0gMjAyMynwn5OaJyxcbiAgICAvLyAgIGl0ZW1zOiBbXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICBuYW1lOiAnRW0gYnJldmUnLFxuICAgIC8vICAgICAgIGhyZWY6ICcvaW5kZXgnXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIF1cbiAgICAvLyB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDZXJ0aWZpY2F0aW9uIFJldmlld/CfjpMnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdTQ1dBUCcsXG4gICAgICAgICAgaHJlZjogJy9jZXJ0aWZpY2F0aW9uL2FwaS9zY3dhcCdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXSxcbiAgW0FWQUxJQUJMRV9XSUtJLkZPUkVOU0VdOiBbXG4gICAgLy8ge1xuICAgIC8vICAgbmFtZTogJ0Z1bmRhbWVudG9zJyxcbiAgICAvLyAgIGl0ZW1zOiBbXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICBuYW1lOiAnRnVuZGFtZW50b3MgZGEgUGVyw61jaWEgRm9yZW5zZSBEaWdpdGFsJyxcbiAgICAvLyAgICAgICBocmVmOiAnL2RpZ2l0YWxfZm9yZW5zaWNzL2ludHJvZHVjdGlvbidcbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgIG5hbWU6ICdGb3JtdWzDoXJpbyBkZSBDYWRlaWEgZGUgQ3VzdMOzZGlhJyxcbiAgICAvLyAgICAgICBocmVmOiAnJ1xuICAgIC8vICAgICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgbmFtZTogJ0NvbGV0YSBQZXLDrWNpYSBGb3JlbnNlIENvbXB1dGFjaW9uYWwgZW0gQ29tcHV0YWRvcicsXG4gICAgLy8gICAgICAgaHJlZjogJydcbiAgICAvLyAgICAgfVxuICAgIC8vICAgXVxuICAgIC8vIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0NlcnRpZmljYXRpb24gUmV2aWV38J+OkycsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ1NDRkUnLFxuICAgICAgICAgIGhyZWY6ICcvY2VydGlmaWNhdGlvbi9kaWdpdGFsX2ZvcmVuc2ljcy9zY2ZlJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdLFxuICBbQVZBTElBQkxFX1dJS0kuV0lORE9XU106IFtcbiAgICB7XG4gICAgICBuYW1lOiAnQ29tbWFuZHMgV2luZG93cycsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ1RyYW5zZmVyw6puY2lhIGRlIEFycXVpdm9zIGVudHJlIEF0YWNhbnRlIGUgVsOtdGltYScsXG4gICAgICAgICAgaHJlZjogJy93aW5kb3dzL2Rvd25sb2FkL2ZpbGVfZG93bmxvYWRpbmcnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn07XG4iXSwibmFtZXMiOlsiQVZBTElBQkxFX1dJS0kiLCJNT0JJTEUiLCJXRUIiLCJBUEkiLCJGT1JFTlNFIiwiV0lORE9XUyIsIm5hdmlnYXRpb24iLCJuYW1lIiwiaXRlbXMiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/navigation.ts\n"));

/***/ })

});