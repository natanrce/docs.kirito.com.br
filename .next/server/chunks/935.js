exports.id = 935;
exports.ids = [935];
exports.modules = {

/***/ 8389:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23))

/***/ }),

/***/ 1986:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2964));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9745));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 637));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4284));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1577));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3043));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9081));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1130))

/***/ }),

/***/ 1523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Fence: () => (/* binding */ Fence)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(9367);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/app/[...slug]/components/Fence/theme.ts
const theme = {
    plain: {},
    styles: [
        {
            types: [
                "keyword",
                "operator"
            ],
            style: {
                color: "#f76191"
            }
        },
        {
            types: [
                "comment"
            ],
            style: {
                color: "#a0a0a0"
            }
        },
        {
            types: [
                "function"
            ],
            style: {
                color: "#52a9ff"
            }
        },
        {
            types: [
                "string",
                "constant"
            ],
            style: {
                color: "#0ac5b2"
            }
        }
    ]
};

// EXTERNAL MODULE: ./node_modules/prism-react-renderer/dist/index.js
var dist = __webpack_require__(7934);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./src/app/[...slug]/components/Fence/Fence.tsx
/* __next_internal_client_entry_do_not_use__ Fence auto */ 




const Fence = ({ children, language = "bash" })=>{
    const [isCopied, setIsCopied] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        if (isCopied) {
            const timeout = setTimeout(()=>setIsCopied(false), 1000);
            return ()=>{
                clearTimeout(timeout);
            };
        }
    }, [
        isCopied
    ]);
    const copyToClipboard = ()=>{
        navigator.clipboard.writeText(children).then(()=>setIsCopied(true));
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "not-prose",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "group relative my-4 rounded-lg border border-[#2e2e2e]",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(dist.Highlight, {
                    code: children.trim(),
                    language: language,
                    theme: theme,
                    children: ({ tokens, getTokenProps })=>/*#__PURE__*/ jsx_runtime_.jsx("pre", {
                            className: "py-5 text-[#EAEAEA] bg-[#0A0A0A] border-[#2e2e2e] rounded-lg overflow-auto",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("code", {
                                children: tokens.map((line, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "px-5 h-5 block",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "pr-4 select-none opacity-50 text-right",
                                                children: index + 1
                                            }),
                                            line.map((token, tokenIndex)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    ...getTokenProps({
                                                        token
                                                    })
                                                }, tokenIndex)),
                                            "\n"
                                        ]
                                    }, index))
                            })
                        })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    className: "absolute top-3.5 right-3.5 overflow-hidden rounded-[5px] flex justify-center items-center w-8 h-8 font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100 hover:bg-[#1f1f1f] hover:text-[#a0a0a0]",
                    onClick: copyToClipboard,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            fill: "none",
                            height: 20,
                            shapeRendering: "geometricPrecision",
                            stroke: "currentColor",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "1.5",
                            viewBox: "0 0 24 24",
                            width: 20,
                            className: classnames_default()("pointer-events-none flex items-center gap-0.5 transition duration-300", isCopied && "-translate-y-1.5 opacity-0"),
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M6 17C4.89543 17 4 16.1046 4 15V5C4 3.89543 4.89543 3 6 3H13C13.7403 3 14.3866 3.4022 14.7324 4M11 21H18C19.1046 21 20 20.1046 20 19V9C20 7.89543 19.1046 7 18 7H11C9.89543 7 9 7.89543 9 9V19C9 20.1046 9.89543 21 11 21Z"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            fill: "none",
                            height: "20",
                            stroke: "currentColor",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "1.5",
                            viewBox: "0 0 24 24",
                            width: "20",
                            className: classnames_default()("pointer-events-none flex items-center absolute transition duration-300", !isCopied && "translate-y-1.5 opacity-0"),
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M20 6L9 17l-5-5"
                            })
                        })
                    ]
                })
            ]
        })
    });
};


/***/ }),

/***/ 4284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Navbar: () => (/* binding */ Navbar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./public/logo/logo_white.png
var logo_white = __webpack_require__(637);
;// CONCATENATED MODULE: ./src/app/components/Logo/Logo.tsx


const Logo = ()=>/*#__PURE__*/ jsx_runtime_.jsx("img", {
        src: logo_white["default"].src,
        alt: "Logo",
        style: {
            maxWidth: "40px",
            maxHeight: "100px"
        }
    });

;// CONCATENATED MODULE: ./src/app/components/Logo/index.ts


// EXTERNAL MODULE: ./src/app/providers/index.ts
var providers = __webpack_require__(9499);
;// CONCATENATED MODULE: ./src/app/components/Nav/Nav.tsx
/* __next_internal_client_entry_do_not_use__ Navbar auto */ 



const navigation = [
    {
        name: "Home",
        href: "/",
        external: false
    },
    {
        name: "Github",
        href: "https://github.com/kiritorce/",
        external: true
    },
    {
        name: "Community",
        href: "https://discord.gg/vfMrNRtPze",
        external: true
    }
];
const Navbar = ()=>{
    const { onOpen } = (0,providers/* useSearch */.Rx)();
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "h-[64px] sticky top-0 z-50 flex items-center md:px-4 pr-4 w-full antialiased backdrop-blur-sm backdrop-saturate-200 bg-black/50 border-b border-[#333]",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
            className: "mb-[-1px] h-full flex justify-between items-center w-full max-w-screen-xl px-4 mx-auto",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Logo, {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex gap-6",
                    children: navigation.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: item.href,
                            className: "text-sm relative transition-colors duration-200 text-[#888] hover:text-[#fafafa]",
                            children: [
                                item.name,
                                item.external && /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    "aria-hidden": "true",
                                    className: "absolute top-[0.5px] right-[-10px] text-[#444]",
                                    height: "7",
                                    viewBox: "0 0 6 6",
                                    width: "7",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z",
                                        fill: "currentColor"
                                    })
                                })
                            ]
                        }, index))
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    onClick: onOpen,
                    className: "hidden md:flex justify-between items-center py-1.5 px-2 text-sm whitespace-nowrap bg-[#1f1f1f] rounded-md text-neutral-400",
                    children: [
                        "Search documentation...",
                        /*#__PURE__*/ jsx_runtime_.jsx("kbd", {
                            className: "h-[22px] leading-[22px] rounded text-xs text-[#a1a1a1] bg-[#0a0a0a] border border-white/10 ml-4 p-[0_6px]",
                            children: "⌘ K"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    onClick: onOpen,
                    className: "md:hidden",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                        fill: "none",
                        height: "22",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "1.5",
                        viewBox: "0 0 24 24",
                        width: "22",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M16 16l4.5 4.5"
                            })
                        ]
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 4480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* reexport */ MobileNavigation),
  W: () => (/* reexport */ Navigation)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(9367);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/disclosure/disclosure.js + 1 modules
var disclosure = __webpack_require__(7747);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
// EXTERNAL MODULE: ./src/app/providers/index.ts
var providers = __webpack_require__(9499);
// EXTERNAL MODULE: ./src/lib/navigation.ts
var lib_navigation = __webpack_require__(6691);
;// CONCATENATED MODULE: ./src/app/components/Navigation/Navigation.tsx







const Navigation = ()=>{
    const pathname = (0,navigation.usePathname)();
    const { selectedWiki } = (0,providers/* useWiki */.BF)();
    const shouldOpen = (items)=>items.map((item)=>item.href).includes(pathname);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "h-[calc(100vh-130px)] overflow-y-auto",
        children: lib_navigation/* navigation */.G[selectedWiki].map((category, index)=>/*#__PURE__*/ jsx_runtime_.jsx(disclosure/* Disclosure */.p, {
                as: "div",
                defaultOpen: index === 0 && pathname === "/" || shouldOpen(category.items),
                children: ({ open })=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            className: "relative mt-6",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(disclosure/* Disclosure */.p.Button, {
                                    className: "flex justify-between w-full text-left mb-[4px] px-2 text-sm font-medium text-white",
                                    children: [
                                        category.name,
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            fill: "none",
                                            height: "16",
                                            stroke: "currentColor",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "1.5",
                                            viewBox: "0 0 24 24",
                                            width: "16",
                                            className: classnames_default()("text-current transition-transform", open && "rotate-90"),
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M9 18l6-6-6-6"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(disclosure/* Disclosure */.p.Panel, {
                                    className: "mb-8",
                                    as: "ul",
                                    children: category.items.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: "my-1.5",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: item.href,
                                                className: classnames_default()("flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2 py-1 text-left text-sm", pathname === item.href ? "font-medium text-blue-600 dark:text-blue-500" : "text-[#888] hover:text-[#fafafa]"),
                                                children: item.name
                                            })
                                        }, index))
                                })
                            ]
                        })
                    })
            }, index))
    });
};

;// CONCATENATED MODULE: ./src/app/components/Navigation/MobileNavigation.tsx
/* __next_internal_client_entry_do_not_use__ MobileNavigation auto */ 





const MobileNavigation = ()=>{
    const pathname = (0,navigation.usePathname)();
    const { selectedWiki } = (0,providers/* useWiki */.BF)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "h-[calc(100vh-200px)] overflow-y-auto",
        children: lib_navigation/* navigation */.G[selectedWiki].map((category, index)=>/*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "pb-3 pt-2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                    className: "my-1.5 ml-[3px] px-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "mb-[4px] text-sm font-medium text-[#eaeaea]",
                            children: category.name
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "h-auto flex flex-col",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                children: category.items.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "my-1.5 text-sm",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            className: classnames_default()("flex w-full text-left", pathname === item.href ? "font-medium text-blue-600 dark:text-blue-500" : "text-[#888] hover:text-[#fafafa]"),
                                            href: item.href,
                                            children: item.name
                                        })
                                    }, index))
                            })
                        })
                    ]
                })
            }, index))
    });
};

;// CONCATENATED MODULE: ./src/app/components/Navigation/index.ts




/***/ }),

/***/ 1577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  SearchDialog: () => (/* binding */ SearchDialog)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./src/app/providers/index.ts
var providers = __webpack_require__(9499);
// EXTERNAL MODULE: ./src/app/hooks/useAutoComplete.ts
var useAutoComplete = __webpack_require__(857);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./src/app/components/Search/SearchInput.tsx

const LoadingIcon = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 20 20",
        fill: "none",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: "10",
                cy: "10",
                r: "5.5",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M15.5 10a5.5 5.5 0 1 0-5.5 5.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                    x1: "13",
                    x2: "9.5",
                    y1: "9",
                    y2: "15",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                            stopColor: "currentColor"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                            offset: "1",
                            stopColor: "currentColor",
                            stopOpacity: "0"
                        })
                    ]
                })
            })
        ]
    });
};
const SearchInput = ({ autocomplete, autocompleteState })=>{
    const inpuProps = autocomplete?.getInputProps({
        inputElement: null
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "border-[#333] border-b",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                className: "appearance-none py-4 px-4 w-[calc(100%-36px)] text-white outline-none rounded-t-lg bg-transparent md:border-t-none placeholder:text-[#666] [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden [&::-webkit-search-results-button]:hidden [&::-webkit-search-results-decoration]:hidden",
                ...inpuProps
            }),
            autocompleteState?.status === "stalled" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute inset-y-0 right-3 flex items-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx(LoadingIcon, {
                    className: "h-5 w-5 animate-spin stroke-zinc-200 text-zinc-900 dark:stroke-zinc-800 dark:text-emerald-400"
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 202 modules
var motion = __webpack_require__(709);
;// CONCATENATED MODULE: ./src/app/components/Search/AutocompleteItem.tsx
/* __next_internal_client_entry_do_not_use__ AutocompleteItem auto */ 


const resolveResult = (result)=>{
    const allLevels = Object.keys(result.hierarchy);
    const hierarchy = Object.entries(result._highlightResult.hierarchy).filter(([, { value }])=>Boolean(value));
    const levels = hierarchy.map(([level])=>level);
    const level = result.type === "content" ? levels.pop() : levels.filter((level)=>allLevels.indexOf(level) <= allLevels.indexOf(result.type)).pop();
    return {
        titleHtml: result._highlightResult.hierarchy[level].value,
        contentHtml: result._snippetResult?.content?.value
    };
};
const AutocompleteItem = ({ result, autocomplete, handlePosition, collection })=>{
    const titleRef = /*#__PURE__*/ (0,react_.createRef)();
    const contentRef = /*#__PURE__*/ (0,react_.createRef)();
    const { onClose } = (0,providers/* useSearch */.Rx)();
    const { titleHtml, contentHtml } = resolveResult(result);
    const itemProps = autocomplete?.getItemProps({
        item: result,
        source: collection.source
    });
    const handleMouseEnter = (height)=>{
        handlePosition(height);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        ...itemProps,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            onClick: onClose,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    ref: titleRef,
                    onMouseEnter: ()=>handleMouseEnter(titleRef.current?.offsetTop),
                    className: "h-12 px-4 flex items-center gap-2 text-sm w-full text-[#888] rounded-md duration-150 transition relative cursor-pointer",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                            fill: "none",
                            height: "20",
                            shapeRendering: "geometricPrecision",
                            stroke: "currentColor",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "1.5",
                            viewBox: "0 0 24 24",
                            width: "20",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M7.06883 21.6H16.219C18.7973 21.6 20.8879 19.5093 20.8879 16.9312V5.86885C20.8879 3.29074 18.7973 1.20001 16.219 1.20001H7.06883C4.49072 1.20001 2.39999 3.29074 2.39999 5.86885V16.9312C2.39999 19.5093 4.49072 21.6 7.06883 21.6Z"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M15.3946 15.842H7.89178M15.3946 11.245H7.89178M10.755 6.6586H7.89232"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            dangerouslySetInnerHTML: {
                                __html: titleHtml
                            }
                        })
                    ]
                }),
                contentHtml && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    ref: contentRef,
                    className: "flex relative cursor-pointer",
                    onMouseEnter: ()=>handleMouseEnter(contentRef.current?.offsetTop),
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "border-l-2 border-[#333] ml-[25px] h-12 w-full px-4 flex items-center gap-2 text-sm text-[#888] overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                height: "20",
                                stroke: "currentColor",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "1.5",
                                viewBox: "0 0 24 24",
                                width: "20",
                                className: "flex-shrink-0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M17 10H3"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M21 6H3"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M21 14H3"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M17 18H3"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "overflow-hidden overflow-ellipsis whitespace-nowrap",
                                dangerouslySetInnerHTML: {
                                    __html: contentHtml
                                }
                            })
                        ]
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/app/components/Search/SearchResults.tsx




const SearchResults = ({ query, autocomplete, collection })=>{
    const [position, setPosition] = (0,react_.useState)(-48);
    const handlePosition = (height)=>{
        setPosition(height || 0);
    };
    if (collection?.items.length === 0) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "p-6 text-center select-none",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "mt-2 text-sm text-[#888]",
                children: [
                    "No results for ",
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                        className: "text-white",
                        children: [
                            '"',
                            query,
                            '"'
                        ]
                    })
                ]
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        ...autocomplete?.getListProps(),
        children: [
            position >= 0 && /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                className: "rounded-lg w-[calc(100%-16px)] h-[48px] absolute transition-transform duration-150 bg-[#33333370]",
                style: {
                    translateY: position
                }
            }),
            collection?.items.map((result, index)=>/*#__PURE__*/ jsx_runtime_.jsx(AutocompleteItem, {
                    result: result,
                    handlePosition: handlePosition,
                    autocomplete: autocomplete,
                    collection: collection
                }, index))
        ]
    });
};

;// CONCATENATED MODULE: ./src/app/components/Search/SearchDialog.tsx
/* __next_internal_client_entry_do_not_use__ SearchDialog auto */ 





const AlgoliaLogo = (props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 71 16",
        role: "img",
        "aria-label": "Algolia",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                d: "M34.98 8.81V.19a.189.189 0 0 0-.218-.186l-1.615.254a.19.19 0 0 0-.16.187l.006 8.741c0 .414 0 2.966 3.07 3.056a.19.19 0 0 0 .195-.19v-1.304a.187.187 0 0 0-.164-.187c-1.115-.128-1.115-1.522-1.115-1.75v-.002Z",
                clipRule: "evenodd"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M61.605 3.352H59.98a.189.189 0 0 0-.189.189v8.514c0 .104.085.189.189.189h1.625a.189.189 0 0 0 .188-.19V3.542a.189.189 0 0 0-.188-.189Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                d: "M59.98 2.285h1.625a.189.189 0 0 0 .188-.189V.19a.189.189 0 0 0-.218-.187l-1.624.255a.189.189 0 0 0-.16.186v1.652c0 .104.085.189.189.189ZM57.172 8.81V.19a.189.189 0 0 0-.218-.186l-1.615.254a.19.19 0 0 0-.16.187l.006 8.741c0 .414 0 2.966 3.07 3.056a.19.19 0 0 0 .196-.19v-1.304a.187.187 0 0 0-.164-.187c-1.115-.128-1.115-1.522-1.115-1.75v-.002ZM52.946 4.568a3.628 3.628 0 0 0-1.304-.906 4.347 4.347 0 0 0-1.666-.315c-.601 0-1.157.101-1.662.315a3.822 3.822 0 0 0-1.304.906c-.367.39-.652.86-.856 1.408-.204.55-.296 1.196-.296 1.868 0 .671.103 1.18.306 1.734.204.554.484 1.027.846 1.42.361.39.795.691 1.3.91.504.218 1.283.33 1.676.335.392 0 1.177-.122 1.686-.335.51-.214.943-.52 1.305-.91.361-.393.641-.866.84-1.42.199-.555.295-1.063.295-1.734 0-.672-.107-1.318-.32-1.868a4.203 4.203 0 0 0-.846-1.408Zm-1.421 5.239c-.367.504-.882.758-1.539.758-.657 0-1.172-.25-1.539-.758-.367-.504-.55-1.088-.55-1.958 0-.86.178-1.573.545-2.076.367-.504.882-.752 1.538-.752.658 0 1.172.248 1.539.752.367.498.556 1.215.556 2.076 0 .87-.184 1.449-.55 1.958ZM29.35 3.352H27.77c-1.547 0-2.909.815-3.703 2.051a4.643 4.643 0 0 0-.736 2.519 4.611 4.611 0 0 0 1.949 3.783 2.574 2.574 0 0 0 1.542.428l.034-.002.084-.006.032-.004.088-.011.02-.003c1.052-.163 1.97-.986 2.268-2.01v1.85c0 .105.085.19.19.19h1.612a.189.189 0 0 0 .19-.19V3.541a.189.189 0 0 0-.19-.189H29.35Zm0 6.62c-.39.326-.896.448-1.435.484l-.016.002a1.68 1.68 0 0 1-.107.003c-1.352 0-2.468-1.149-2.468-2.54 0-.328.063-.64.173-.927.36-.932 1.241-1.591 2.274-1.591h1.578v4.57ZM69.009 3.352H67.43c-1.547 0-2.908.815-3.703 2.051a4.643 4.643 0 0 0-.736 2.519 4.611 4.611 0 0 0 1.949 3.783 2.575 2.575 0 0 0 1.542.428l.034-.002.084-.006.033-.004.087-.011.02-.003c1.053-.163 1.97-.986 2.269-2.01v1.85c0 .105.084.19.188.19h1.614a.189.189 0 0 0 .188-.19V3.541a.189.189 0 0 0-.188-.189h-1.802Zm0 6.62c-.39.326-.895.448-1.435.484l-.016.002a1.675 1.675 0 0 1-.107.003c-1.352 0-2.468-1.149-2.468-2.54 0-.328.063-.64.174-.927.359-.932 1.24-1.591 2.273-1.591h1.579v4.57ZM42.775 3.352h-1.578c-1.547 0-2.909.815-3.704 2.051a4.63 4.63 0 0 0-.735 2.519 4.6 4.6 0 0 0 1.65 3.555c.094.083.194.16.298.228a2.575 2.575 0 0 0 2.966-.08c.52-.37.924-.913 1.103-1.527v1.608h-.004v.354c0 .7-.182 1.225-.554 1.58-.372.354-.994.532-1.864.532-.356 0-.921-.02-1.491-.078a.19.19 0 0 0-.2.136l-.41 1.379a.19.19 0 0 0 .155.24c.688.1 1.36.15 1.748.15 1.565 0 2.725-.343 3.484-1.03.688-.621 1.061-1.564 1.127-2.832V3.54a.189.189 0 0 0-.19-.189h-1.801Zm0 2.051s.021 4.452 0 4.587c-.386.312-.867.435-1.391.47l-.016.001a1.751 1.751 0 0 1-.233 0c-1.293-.067-2.385-1.192-2.385-2.54 0-.327.063-.64.174-.927.359-.931 1.24-1.591 2.273-1.591h1.578Z",
                clipRule: "evenodd"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M8.725.001C4.356.001.795 3.523.732 7.877c-.064 4.422 3.524 8.085 7.946 8.111a7.94 7.94 0 0 0 3.849-.96.187.187 0 0 0 .034-.305l-.748-.663a.528.528 0 0 0-.555-.094 6.461 6.461 0 0 1-2.614.513c-3.574-.043-6.46-3.016-6.404-6.59a6.493 6.493 0 0 1 6.485-6.38h6.485v11.527l-3.68-3.269a.271.271 0 0 0-.397.042 3.014 3.014 0 0 1-5.416-1.583 3.02 3.02 0 0 1 3.008-3.248 3.02 3.02 0 0 1 3.005 2.75.537.537 0 0 0 .176.356l.958.85a.187.187 0 0 0 .308-.106c.07-.37.094-.755.067-1.15a4.536 4.536 0 0 0-4.23-4.2A4.53 4.53 0 0 0 4.203 7.87c-.067 2.467 1.954 4.593 4.421 4.648a4.498 4.498 0 0 0 2.756-.863l4.808 4.262a.32.32 0 0 0 .531-.239V.304a.304.304 0 0 0-.303-.303h-7.69Z"
            })
        ]
    });
const SearchDialog = ()=>{
    const formRef = (0,react_.useRef)(null);
    const inputRef = (0,react_.useRef)(null);
    const { isOpen, onClose } = (0,providers/* useSearch */.Rx)();
    const { autocomplete, autocompleteState } = (0,useAutoComplete.useAutoComplete)();
    (0,react_.useEffect)(()=>{
        if (false) {}
    }, [
        isOpen
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("form", {
        ref: formRef,
        ...autocomplete.getFormProps({
            inputElement: inputRef.current
        }),
        children: isOpen && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "fixed inset-0 z-[9999]",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "absolute bg-black md:bg-black/50 h-full w-full",
                    onClick: onClose
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "fixed bottom-0 top-1/4 rounded-t-lg overflow-y-auto pt-1 pb-2 bg-black mx-auto max-w-2xl w-full md:top-1/4 md:left-1/2 md:-translate-x-1/2 md:rounded-lg md:border md:bg-[#111] md:border-white/20 md:bottom-auto",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(SearchInput, {
                            autocomplete: autocomplete,
                            autocompleteState: autocompleteState,
                            onClose: onClose
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: onClose,
                            className: "absolute hidden right-4 top-[26px] border border-[#333] transition text-xs text-[#666] px-1 rounded-[4px] h-[20px] font-medium hover:text-[#888] hover:bg-[#111] md:block",
                            children: "Esc"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "relative px-2 mt-2 mb-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(SearchResults, {
                                    autocomplete: autocomplete,
                                    query: autocompleteState?.query,
                                    collection: autocompleteState?.collections[0]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "flex items-center justify-end gap-2 px-4 py-2 text-xs text-zinc-400 dark:border-zinc-800 dark:text-zinc-500",
                                    children: [
                                        "Search by ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(AlgoliaLogo, {
                                            className: "h-4 fill-zinc-400"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};


/***/ }),

/***/ 3043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MobileSidebar: () => (/* binding */ MobileSidebar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9367);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Wiki__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3927);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4480);
/* __next_internal_client_entry_do_not_use__ MobileSidebar auto */ 




const MobileSidebar = ()=>{
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const handleOpen = ()=>setIsOpen(!isOpen);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (false) {}
    }, [
        isOpen
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "fixed w-full top-[64px] z-10 md:hidden py-3 px-4 border-b border-[#333] backdrop-blur-sm backdrop-saturate-200 antialiased bg-black",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col justify-between",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    className: "flex items-center gap-1",
                    type: "button",
                    onClick: handleOpen,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            fill: "none",
                            height: "16",
                            stroke: "currentColor",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "1.5",
                            viewBox: "0 0 24 24",
                            width: "16",
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("text-current transition-transform", isOpen && "rotate-90"),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M9 18l6-6-6-6"
                            })
                        }),
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: "Menu"
                        })
                    ]
                })
            }),
            isOpen && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "h-screen w-full block",
                "data-docs-crowler": true,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Wiki__WEBPACK_IMPORTED_MODULE_3__/* .WikiSelector */ .B, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navigation__WEBPACK_IMPORTED_MODULE_4__/* .MobileNavigation */ .$, {})
                ]
            })
        ]
    });
};


/***/ }),

/***/ 9081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sidebar: () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4480);
/* harmony import */ var _Wiki__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3927);
/* __next_internal_client_entry_do_not_use__ Sidebar auto */ 


const Sidebar = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("aside", {
        className: "w-[284px] shrink-0 hidden md:block",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "sticky top-[121px]",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Wiki__WEBPACK_IMPORTED_MODULE_2__/* .WikiSelector */ .B, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navigation__WEBPACK_IMPORTED_MODULE_1__/* .Navigation */ .W, {})
            ]
        })
    });
};


/***/ }),

/***/ 1130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  TableOfContents: () => (/* binding */ TableOfContents)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(9367);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./src/app/hooks/useAutoComplete.ts
var useAutoComplete = __webpack_require__(857);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
// EXTERNAL MODULE: ./node_modules/js-yaml/dist/js-yaml.mjs
var js_yaml = __webpack_require__(7024);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
;// CONCATENATED MODULE: ./src/schema/nodes.ts
const nodes_nodes = {
    link: {
        render: "Anchor",
        attributes: {
            href: {
                type: String
            }
        }
    },
    fence: {
        render: "Fence",
        attributes: {
            language: {
                type: String
            }
        }
    }
};

;// CONCATENATED MODULE: ./src/app/[...slug]/components/Anchor/Anchor.tsx

const Anchor_Anchor = ({ href, children })=>{
    const isExternalLink = href.startsWith("http");
    return isExternalLink ? /*#__PURE__*/ _jsxs("a", {
        href: href,
        children: [
            children,
            /*#__PURE__*/ _jsx("span", {
                className: "inline-flex",
                children: /*#__PURE__*/ _jsxs("svg", {
                    "data-testid": "geist-icon",
                    fill: "none",
                    height: "14",
                    shapeRendering: "geometricPrecision",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "1.5",
                    viewBox: "0 0 24 24",
                    width: "14",
                    className: "text-current",
                    children: [
                        /*#__PURE__*/ _jsx("path", {
                            d: "M7 17L17 7"
                        }),
                        /*#__PURE__*/ _jsx("path", {
                            d: "M7 7h10v10"
                        })
                    ]
                })
            })
        ]
    }) : /*#__PURE__*/ _jsx("a", {
        href: href,
        children: children
    });
};

;// CONCATENATED MODULE: ./src/app/[...slug]/components/Anchor/index.ts


// EXTERNAL MODULE: ./src/app/[...slug]/components/Fence/Fence.tsx + 1 modules
var Fence_Fence = __webpack_require__(1523);
;// CONCATENATED MODULE: ./src/app/[...slug]/components/Fence/index.ts


;// CONCATENATED MODULE: ./src/app/[...slug]/components/index.ts



;// CONCATENATED MODULE: ./src/app/hooks/useMarkdoc.ts









const getNodeTitle = (node)=>{
    let title = "";
    const nodes = node.children;
    for (const child of nodes ?? []){
        if (typeof child === "string") {
            title += child;
        }
        title += getNodeTitle(child);
    }
    return title;
};
const collectHeadings = (nodes, slugify = slugifyWithCounter())=>{
    const sections = [];
    if (!Array.isArray(nodes)) return [];
    for (const node of nodes){
        if (/^h[123]$/.test(node.name)) {
            const title = getNodeTitle(node);
            if (title) {
                const id = slugify(title);
                node.attributes.id = id;
                sections.push({
                    ...node.attributes,
                    title,
                    children: []
                });
            }
        }
        sections.push(...collectHeadings(node.children, slugify));
    }
    return sections;
};
const useMarkdoc = (slug)=>{
    try {
        const filePath = join(`src/docs/${slug}.md`);
        const markdown = readFileSync(filePath, "utf-8");
        const ast = Markdoc.parse(markdown);
        const content = Markdoc.transform(ast, {
            nodes
        });
        const headings = collectHeadings(content.children);
        const children = Markdoc.renderers.react(content, React, {
            components: {
                Anchor,
                Fence
            }
        });
        return {
            frontmatter: yaml.load(ast.attributes.frontmatter),
            children,
            headings
        };
    } catch  {
        notFound();
    }
};

// EXTERNAL MODULE: ./src/app/hooks/useTableOfContent.ts
var useTableOfContent = __webpack_require__(6985);
;// CONCATENATED MODULE: ./src/app/hooks/index.ts




;// CONCATENATED MODULE: ./src/app/components/TableOfContent/TableOfContent.tsx
/* __next_internal_client_entry_do_not_use__ TableOfContents auto */ 



const TableOfContents = ({ headings })=>{
    const { currentSection } = (0,useTableOfContent.useTableOfContent)(headings);
    const [isScrollVisible, setIsScrollVisible] = (0,react_.useState)(false);
    const sectionIsActive = (section)=>{
        if (section.id === currentSection) {
            return true;
        }
        return section.children.findIndex(sectionIsActive) > -1;
    };
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    if (false) {}
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "w-56 shrink-0 hidden lg:block",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "hidden lg:block sticky top-[126px] overflow-y-auto",
            "data-docs-crowler": true,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: "mb-1 mt-[7px] text-sm font-medium text-white",
                    children: "Nessa p\xe1gina"
                }),
                headings.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "mt-4 space-y-3 text-sm",
                    children: headings.map((section)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: `#${section.id}`,
                                className: sectionIsActive(section) ? "block leading-[1.6] font-medium text-blue-500" : "block text-[#888] hover:text-[#999] leading-[1.6]",
                                children: section.title
                            })
                        }, section.id))
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mt-4 space-y-2 border-t border-[#444] pt-5 text-sm"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    className: classnames_default()("flex items-center gap-x-2 text-sm text-[#888] transition-opacity hover:text-white", isScrollVisible ? "opacity-100" : "opacity-0"),
                    onClick: scrollToTop,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                            fill: "none",
                            height: "14",
                            shapeRendering: "geometricPrecision",
                            stroke: "currentColor",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "1.5",
                            viewBox: "0 0 24 24",
                            width: "14",
                            className: "text-current",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                    cx: "12",
                                    cy: "12",
                                    r: "10"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M16 12l-4-4-4 4"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M12 16V8"
                                })
                            ]
                        }),
                        "Scroll to top"
                    ]
                })
            ]
        })
    });
};


/***/ }),

/***/ 3927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: () => (/* reexport */ WikiSelector)
});

// UNUSED EXPORTS: WikiOption

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/app/components/Wiki/WikiOption.tsx

const WikiOption = ({ title, description, icon })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-col gap-6 p-2",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [
                icon,
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-left text-sm font-medium",
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-gray-400 text-xs font-normal",
                            children: description
                        })
                    ]
                })
            ]
        })
    });

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/listbox/listbox.js + 15 modules
var listbox = __webpack_require__(4343);
// EXTERNAL MODULE: ./src/app/providers/index.ts
var providers = __webpack_require__(9499);
// EXTERNAL MODULE: ./src/lib/navigation.ts
var navigation = __webpack_require__(6691);
;// CONCATENATED MODULE: ./src/app/components/Wiki/WikiSelector.tsx
/* __next_internal_client_entry_do_not_use__ WikiSelector auto */ 




const wikis = {
    [navigation/* AVALIABLE_WIKI */.s.MOBILE]: {
        id: "mobile",
        title: "Mobile Hacking Wiki",
        description: "Android mobile hacking resources.",
        icon: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "text-[#0072f5] border rounded-md p-1.5 border-[#0d3868] border bg-gradient-to-b from-black to-[#0d3868]",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                fill: "none",
                height: "24",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.5",
                viewBox: "0 0 24 24",
                width: "24",
                style: {
                    color: "currentcolor",
                    width: 20,
                    height: 20
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M13 2v7h7"
                    })
                ]
            })
        })
    },
    [navigation/* AVALIABLE_WIKI */.s.WEB]: {
        id: "web",
        title: "WEB Hacking Wiki",
        description: "Web hacking resources.",
        icon: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "text-[#8e4ec6] border rounded-md p-1.5 border-[#4f2768] border bg-gradient-to-b from-black to-[#4f2768]",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                fill: "none",
                height: "24",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.5",
                viewBox: "0 0 24 24",
                width: "24",
                style: {
                    color: "currentcolor",
                    width: 20,
                    height: 20
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M13 2v7h7"
                    })
                ]
            })
        })
    },
    [navigation/* AVALIABLE_WIKI */.s.API]: {
        id: "API",
        title: "API Hacking Wiki",
        description: "API hacking resources.",
        icon: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "text-[#8ee6c6] border rounded-md p-1.5 border-[#4fe668] border bg-gradient-to-b from-black to-[#4fe668]",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                fill: "none",
                height: "24",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.5",
                viewBox: "0 0 24 24",
                width: "24",
                style: {
                    color: "currentcolor",
                    width: 20,
                    height: 20
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M13 2v7h7"
                    })
                ]
            })
        })
    }
};
const ChevronIcon = ()=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        fill: "none",
        height: "16",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        viewBox: "0 0 24 24",
        width: "16",
        className: "text-current transition-transform rotate-90",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M9 18l6-6-6-6"
        })
    });
const WikiSelector = ()=>{
    const { selectedWiki, setWiki } = (0,providers/* useWiki */.BF)();
    const selectedListbox = wikis[selectedWiki];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(listbox/* Listbox */.R, {
        value: selectedListbox,
        onChange: (e)=>setWiki(e.id),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(listbox/* Listbox */.R.Button, {
                className: "flex justify-between items-center w-full hover:bg-[#1f1f1f] hover:cursor-pointer rounded-md pr-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(WikiOption, {
                        title: selectedListbox.title,
                        description: selectedListbox.description,
                        icon: selectedListbox.icon
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ChevronIcon, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(listbox/* Listbox */.R.Options, {
                className: "absolute rounded-md border border-[#1f1f1f] z-50 bg-[#0a0a0a] w-full",
                children: Object.values(wikis).map((wiki, index)=>/*#__PURE__*/ jsx_runtime_.jsx(listbox/* Listbox */.R.Option, {
                        value: wiki,
                        className: "hover:bg-[#1f1f1f] hover:cursor-pointer rounded-md",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(WikiOption, {
                            title: wiki.title,
                            description: wiki.description,
                            icon: wiki.icon
                        }, index)
                    }, index))
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/app/components/Wiki/index.ts




/***/ }),

/***/ 857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useAutoComplete: () => (/* binding */ useAutoComplete)
/* harmony export */ });
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3467);
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(algoliasearch_lite__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _algolia_autocomplete_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8728);
/* harmony import */ var _algolia_autocomplete_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_algolia_autocomplete_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _algolia_autocomplete_preset_algolia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(899);
/* harmony import */ var _algolia_autocomplete_preset_algolia__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_algolia_autocomplete_preset_algolia__WEBPACK_IMPORTED_MODULE_4__);
/* __next_internal_client_entry_do_not_use__ useAutoComplete auto */ 




const searchClient = algoliasearch_lite__WEBPACK_IMPORTED_MODULE_2___default()(process.env.NEXT_PUBLIC_DOCSEARCH_APP_ID, process.env.NEXT_PUBLIC_DOCSEARCH_API_KEY);
function useAutoComplete() {
    const id = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const [autocompleteState, setAutocompleteState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const autocomplete = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>(0,_algolia_autocomplete_core__WEBPACK_IMPORTED_MODULE_3__.createAutocomplete)({
            id,
            autoFocus: true,
            openOnFocus: true,
            placeholder: "Search documentation",
            defaultActiveItemId: 0,
            onStateChange ({ state }) {
                setAutocompleteState(state);
            },
            shouldPanelOpen ({ state }) {
                return state.query !== "";
            },
            getSources () {
                return [
                    {
                        sourceId: "documentation",
                        getItemInputValue ({ item }) {
                            return item.query;
                        },
                        getItemUrl ({ item }) {
                            const url = new URL(item.url);
                            return `${url.pathname}${url.hash}`;
                        },
                        onSelect ({ itemUrl }) {
                            router.push(itemUrl || "");
                        },
                        getItems ({ query }) {
                            return (0,_algolia_autocomplete_preset_algolia__WEBPACK_IMPORTED_MODULE_4__.getAlgoliaResults)({
                                searchClient,
                                queries: [
                                    {
                                        query,
                                        indexName: process.env.NEXT_PUBLIC_DOCSEARCH_INDEX_NAME,
                                        params: {
                                            hitsPerPage: 5,
                                            highlightPreTag: '<mark class="bg-transparent text-current">',
                                            highlightPostTag: "</mark>"
                                        }
                                    }
                                ]
                            });
                        }
                    }
                ];
            }
        }), [
        id,
        router
    ]);
    return {
        autocomplete,
        autocompleteState
    };
}


/***/ }),

/***/ 6985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTableOfContent: () => (/* binding */ useTableOfContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ useTableOfContent auto */ 
function useTableOfContent(tableOfContent) {
    const [currentSection, setCurrentSection] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(tableOfContent[0]?.id);
    const getHeadings = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        function* traverse(node) {
            if (Array.isArray(node)) {
                for (const child of node){
                    yield* traverse(child);
                }
            } else {
                const element = document.getElementById(node.id);
                if (!element) return;
                const style = window.getComputedStyle(element);
                const scrollMt = parseFloat(style.scrollMarginTop);
                const top = window.scrollY + element.getBoundingClientRect().top - scrollMt;
                yield {
                    id: node.id,
                    top
                };
                for (const child of node.children ?? []){
                    yield* traverse(child);
                }
            }
        }
        return Array.from(traverse(tableOfContent));
    }, [
        tableOfContent
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const headings = getHeadings();
        if (tableOfContent.length === 0 || headings.length === 0) return;
        function onScrollListener() {
            const sortedHeadings = headings.concat([]).sort((a, b)=>a.top - b.top);
            const top = window.pageYOffset;
            let current = sortedHeadings[0].id;
            for(let i = 0; i < sortedHeadings.length; i++){
                if (top >= sortedHeadings[i].top - 100) {
                    current = sortedHeadings[i].id;
                }
            }
            setCurrentSection(current);
        }
        window.addEventListener("scroll", onScrollListener, {
            capture: true,
            passive: true
        });
        onScrollListener();
        return ()=>{
            window.removeEventListener("scroll", onScrollListener, {
                capture: true
            });
        };
    }, [
        getHeadings,
        tableOfContent
    ]);
    return {
        currentSection
    };
}


/***/ }),

/***/ 2964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchProvider: () => (/* binding */ SearchProvider),
/* harmony export */   useSearch: () => (/* binding */ useSearch)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ SearchProvider,useSearch auto */ 

const SearchContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
function SearchProvider({ children }) {
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const onOpen = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setIsOpen(true);
    }, [
        setIsOpen
    ]);
    const onClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setIsOpen(false);
    }, [
        setIsOpen
    ]);
    const handleKeyPress = (event)=>{
        if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
            event.preventDefault();
            setIsOpen(true);
        }
        if (event.key === "Escape") {
            setIsOpen(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.addEventListener("keydown", handleKeyPress);
        return ()=>{
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SearchContext.Provider, {
        value: {
            isOpen,
            onOpen,
            onClose
        },
        children: children
    });
}
const useSearch = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SearchContext);


/***/ }),

/***/ 9745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WikiProvider: () => (/* binding */ WikiProvider),
/* harmony export */   useWiki: () => (/* binding */ useWiki)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ WikiProvider,useWiki auto */ 

const WikiContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
function WikiProvider({ children }) {
    const initialWiki = "mobile";
    const [selectedWiki, setSelectedWiki] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialWiki);
    const setWiki = (wiki)=>{
        localStorage.setItem("wiki", wiki);
        setSelectedWiki(wiki);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const stored = localStorage.getItem("wiki");
        if (stored) {
            setSelectedWiki(stored);
            return;
        }
        localStorage.setItem("wiki", initialWiki);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(WikiContext.Provider, {
        value: {
            selectedWiki,
            setWiki
        },
        children: children
    });
}
const useWiki = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(WikiContext);


/***/ }),

/***/ 9499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BF: () => (/* reexport safe */ _WikiProvider__WEBPACK_IMPORTED_MODULE_1__.useWiki),
/* harmony export */   Rx: () => (/* reexport safe */ _SearchProvider__WEBPACK_IMPORTED_MODULE_0__.useSearch)
/* harmony export */ });
/* harmony import */ var _SearchProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2964);
/* harmony import */ var _WikiProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9745);




/***/ }),

/***/ 6691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ navigation),
/* harmony export */   s: () => (/* binding */ AVALIABLE_WIKI)
/* harmony export */ });
const AVALIABLE_WIKI = {
    MOBILE: "mobile",
    WEB: "web",
    API: "API"
};
const navigation = {
    [AVALIABLE_WIKI.MOBILE]: [
        {
            name: "Setup ⚙️",
            items: [
                {
                    name: "Guia de Instala\xe7\xe3o e Configura\xe7\xe3o do Android Studio",
                    href: "/mobile/tools/android_studio"
                },
                {
                    name: "Ferramentas essenciais para engenharia reversa em apps mobile",
                    href: "/mobile/tools/reverse_engineering"
                },
                {
                    name: "Guia de Instala\xe7\xe3o e Uso do Frida, Frida-tools, Objection e Frida-Server",
                    href: "/mobile/tools/instrumentation"
                },
                {
                    name: "Ferramentas de Teste de Seguran\xe7a para Aplicativos M\xf3veis (DAST)",
                    href: "/mobile/tools/dast_tools"
                }
            ]
        },
        {
            name: "Commands Trick \uD83D\uDCF1",
            items: [
                {
                    name: "Android Device Bridge (ADB) Commands Tricks",
                    href: "/mobile/tricks/adb_commands_tricks"
                },
                {
                    name: "Disassembly, Assembly e Assinatura",
                    href: "/mobile/tricks/dis_commands_tricks"
                }
            ]
        },
        {
            name: "OWASP Mobile Top 10 - 2023 \uD83D\uDCDA",
            items: [
                {
                    name: "M1: Insecure Authentication/Authorization",
                    href: "/mobile/owasp-2023/M1-Insecure_Authentication-Authorization"
                },
                {
                    name: "M2: Insecure Communication",
                    href: "/mobile/owasp-2023/M2-Insecure_Communication"
                },
                {
                    name: "M3: Inadequate Supply Chain Security",
                    href: "/mobile/owasp-2023/M3-Inadequate_Supply_Chain_Security"
                },
                {
                    name: "M4: Inadequate Privacy Controls",
                    href: "/mobile/owasp-2023/M4-Inadequate_Privacy_Controls"
                },
                {
                    name: "M5: Improper Credential Usage",
                    href: "/mobile/owasp-2023/M5-Improper_Credential_Usage"
                },
                {
                    name: "M6: Insufficient Input/Output Validation",
                    href: "/mobile/owasp-2023/M6-Insufficient_Input-Output_Validation"
                },
                {
                    name: "M7: Security Misconfiguration",
                    href: "/mobile/owasp-2023/M7-Security_Misconfiguration"
                },
                {
                    name: "M8: Insufficient Cryptography",
                    href: "/mobile/owasp-2023/M8-Insufficient_Cryptography"
                },
                {
                    name: "M9: Insecure Data Storage",
                    href: "/mobile/owasp-2023/M9-Insecure_Data_Storage"
                },
                {
                    name: "M10: Insufficient Binary Protections",
                    href: "/mobile/owasp-2023/M10-Insufficient_Binary_Protections"
                }
            ]
        },
        {
            name: "Pentest (stage)",
            items: [
                {
                    name: "Aquisi\xe7\xe3o de aplicativos: o primeiro passo para o pentest mobile",
                    href: "/mobile/pentest/application_acquisition"
                }
            ]
        },
        {
            name: "Prote\xe7\xf5es \uD83D\uDD12",
            items: [
                {
                    name: "Flag Secure",
                    href: "/mobile/protections/secure_flag"
                },
                {
                    name: "Emulation Detection",
                    href: "/mobile/protections/emulation_detection"
                },
                {
                    name: "Frida Detection",
                    href: "/mobile/protections/frida_detection"
                },
                {
                    name: "Root Detection",
                    href: "/mobile/protections/root_detection"
                },
                {
                    name: "SSL/TLS Pinning",
                    href: "/mobile/protections/ssl_tls_pinning"
                },
                {
                    name: "Insecure Data Storage",
                    href: "/mobile/protections/insecure_data_storage"
                },
                {
                    name: "SQL Injection",
                    href: "/mobile/protections/sql_injection"
                }
            ]
        },
        {
            name: "Laboratory \uD83D\uDD2C",
            items: [
                {
                    name: "Secure App (Flag Secure)",
                    href: "/labs/mobile/secure_app"
                }
            ]
        }
    ],
    [AVALIABLE_WIKI.WEB]: [
        {
            name: "Web (OWASP Web Top 10 - 2021)\uD83D\uDCDA",
            items: [
                {
                    name: "Em breve",
                    href: "/index"
                }
            ]
        }
    ],
    [AVALIABLE_WIKI.API]: [
        {
            name: "API (OWASP API Top 10 - 2023)\uD83D\uDCDA",
            items: [
                {
                    name: "Em breve",
                    href: "/index"
                }
            ]
        }
    ]
};


/***/ }),

/***/ 5629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $_: () => (/* reexport */ Footer),
  nh: () => (/* reexport */ MobileSidebar_e0),
  wp: () => (/* reexport */ e0),
  Mr: () => (/* reexport */ Prose),
  F4: () => (/* reexport */ SearchDialog_e0),
  YE: () => (/* reexport */ Sidebar_e0),
  o5: () => (/* reexport */ TableOfContent_e0)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./public/logo/logo_white.png
/* harmony default export */ const logo_white = ({"src":"/_next/static/media/logo_white.35709e9b.png","height":565,"width":612,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAQAAACfUMTVAAAAQ0lEQVR42mOAgH+MYNL7nwqEywzEof9q/xlAuExg8vK/brAUlNvwzxuqFUx1/nOAc/9x/2v7ZwakWWHm2/4zROIyAABGEh5+1Fe59gAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":7});
;// CONCATENATED MODULE: ./src/app/components/Footer/Footer.tsx


const Footer = ()=>/*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "bg-[#111] border-y border-[#333]",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-center gap-3 items-center w-full my-8 mb-12",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: logo_white.src,
                        alt: "Logo",
                        style: {
                            maxWidth: "40px",
                            maxHeight: "100px"
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-xs text-[#888]",
                        children: [
                            "Copyright \xa9 ",
                            new Date().getFullYear(),
                            " \xa0",
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "text-blue-500 font-bold no-underline",
                                href: "https://github.com/kiritorce",
                                children: "Kirito"
                            })
                        ]
                    })
                ]
            })
        })
    });

;// CONCATENATED MODULE: ./src/app/components/Footer/index.ts


// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./src/app/components/Nav/Nav.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/kirito/Documents/www/docs.kirito.com.br/src/app/components/Nav/Nav.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Navbar"];

;// CONCATENATED MODULE: ./src/app/components/Nav/index.ts


;// CONCATENATED MODULE: ./src/app/components/Prose/Prose.tsx

const Prose = ({ children })=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "prose prose-invert w-full min-w-0 max-w-6xl custom-li",
        children: children
    });

;// CONCATENATED MODULE: ./src/app/components/Prose/index.ts


;// CONCATENATED MODULE: ./src/app/components/Search/SearchDialog.tsx

const SearchDialog_proxy = (0,module_proxy.createProxy)(String.raw`/Users/kirito/Documents/www/docs.kirito.com.br/src/app/components/Search/SearchDialog.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: SearchDialog_esModule, $$typeof: SearchDialog_$$typeof } = SearchDialog_proxy;
const SearchDialog_default_ = SearchDialog_proxy.default;

const SearchDialog_e0 = SearchDialog_proxy["SearchDialog"];

;// CONCATENATED MODULE: ./src/app/components/Search/index.ts


;// CONCATENATED MODULE: ./src/app/components/Sidebar/MobileSidebar.tsx

const MobileSidebar_proxy = (0,module_proxy.createProxy)(String.raw`/Users/kirito/Documents/www/docs.kirito.com.br/src/app/components/Sidebar/MobileSidebar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: MobileSidebar_esModule, $$typeof: MobileSidebar_$$typeof } = MobileSidebar_proxy;
const MobileSidebar_default_ = MobileSidebar_proxy.default;

const MobileSidebar_e0 = MobileSidebar_proxy["MobileSidebar"];

;// CONCATENATED MODULE: ./src/app/components/Sidebar/Sidebar.tsx

const Sidebar_proxy = (0,module_proxy.createProxy)(String.raw`/Users/kirito/Documents/www/docs.kirito.com.br/src/app/components/Sidebar/Sidebar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Sidebar_esModule, $$typeof: Sidebar_$$typeof } = Sidebar_proxy;
const Sidebar_default_ = Sidebar_proxy.default;

const Sidebar_e0 = Sidebar_proxy["Sidebar"];

;// CONCATENATED MODULE: ./src/app/components/Sidebar/index.ts



;// CONCATENATED MODULE: ./src/app/components/TableOfContent/TableOfContent.tsx

const TableOfContent_proxy = (0,module_proxy.createProxy)(String.raw`/Users/kirito/Documents/www/docs.kirito.com.br/src/app/components/TableOfContent/TableOfContent.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: TableOfContent_esModule, $$typeof: TableOfContent_$$typeof } = TableOfContent_proxy;
const TableOfContent_default_ = TableOfContent_proxy.default;

const TableOfContent_e0 = TableOfContent_proxy["TableOfContents"];

;// CONCATENATED MODULE: ./src/app/components/TableOfContent/index.ts


;// CONCATENATED MODULE: ./src/app/components/index.ts








/***/ }),

/***/ 6202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/app/layout.tsx","import":"Inter","arguments":[{"subsets":["latin"],"display":"swap"}],"variableName":"inter"}
var layout_tsx_import_Inter_arguments_subsets_latin_display_swap_variableName_inter_ = __webpack_require__(7992);
var layout_tsx_import_Inter_arguments_subsets_latin_display_swap_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Inter_arguments_subsets_latin_display_swap_variableName_inter_);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5023);
// EXTERNAL MODULE: ./src/app/components/index.ts + 14 modules
var components = __webpack_require__(5629);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./src/app/providers/SearchProvider.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/kirito/Documents/www/docs.kirito.com.br/src/app/providers/SearchProvider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["SearchProvider"];

const e1 = proxy["useSearch"];

;// CONCATENATED MODULE: ./src/app/providers/WikiProvider.tsx

const WikiProvider_proxy = (0,module_proxy.createProxy)(String.raw`/Users/kirito/Documents/www/docs.kirito.com.br/src/app/providers/WikiProvider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: WikiProvider_esModule, $$typeof: WikiProvider_$$typeof } = WikiProvider_proxy;
const WikiProvider_default_ = WikiProvider_proxy.default;

const WikiProvider_e0 = WikiProvider_proxy["WikiProvider"];

const WikiProvider_e1 = WikiProvider_proxy["useWiki"];

;// CONCATENATED MODULE: ./src/app/providers/index.ts



;// CONCATENATED MODULE: ./src/app/layout.tsx





const metadata = {
    title: "Docs | Kirito",
    icons: {
        icon: "/logo/logo_green.png"
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        className: (layout_tsx_import_Inter_arguments_subsets_latin_display_swap_variableName_inter_default()).className,
        style: {
            colorScheme: "dark"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: "bg-black",
            children: /*#__PURE__*/ jsx_runtime_.jsx(WikiProvider_e0, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(e0, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(components/* Navbar */.wp, {}),
                        children,
                        /*#__PURE__*/ jsx_runtime_.jsx(components/* Footer */.$_, {})
                    ]
                })
            })
        })
    });
}


/***/ }),

/***/ 637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo_white.35709e9b.png","height":565,"width":612,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAQAAACfUMTVAAAAQ0lEQVR42mOAgH+MYNL7nwqEywzEof9q/xlAuExg8vK/brAUlNvwzxuqFUx1/nOAc/9x/2v7ZwakWWHm2/4zROIyAABGEh5+1Fe59gAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":7});

/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;