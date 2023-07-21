exports.id = 303;
exports.ids = [303];
exports.modules = {

/***/ 5038:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 637));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4284));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1577));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3043));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9081));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1130));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 857));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6985));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3280, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9274, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3349, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9708, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1523))

/***/ }),

/***/ 9890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  PK: () => (/* reexport */ useMarkdoc)
});

// UNUSED EXPORTS: useAutoComplete, useTableOfContent

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./src/app/hooks/useAutoComplete.ts

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/kirito/Documents/www/docs.kirito.com.br/src/app/hooks/useAutoComplete.ts`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["useAutoComplete"];

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(2947);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(4980);
// EXTERNAL MODULE: ./node_modules/js-yaml/dist/js-yaml.mjs
var js_yaml = __webpack_require__(6498);
// EXTERNAL MODULE: ./node_modules/@markdoc/markdoc/dist/index.js
var dist = __webpack_require__(3990);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
// EXTERNAL MODULE: ./node_modules/@sindresorhus/slugify/index.js + 4 modules
var _sindresorhus_slugify = __webpack_require__(132);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
;// CONCATENATED MODULE: ./src/schema/nodes.ts
const nodes = {
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

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
;// CONCATENATED MODULE: ./src/app/[...slug]/components/Anchor/Anchor.tsx

const Anchor = ({ href, children })=>{
    const isExternalLink = href.startsWith("http");
    return isExternalLink ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
        href: href,
        children: [
            children,
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "inline-flex",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
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
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M7 17L17 7"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M7 7h10v10"
                        })
                    ]
                })
            })
        ]
    }) : /*#__PURE__*/ jsx_runtime_.jsx("a", {
        href: href,
        children: children
    });
};

;// CONCATENATED MODULE: ./src/app/[...slug]/components/Anchor/index.ts


;// CONCATENATED MODULE: ./src/app/[...slug]/components/Fence/Fence.tsx

const Fence_proxy = (0,module_proxy.createProxy)(String.raw`/Users/kirito/Documents/www/docs.kirito.com.br/src/app/[...slug]/components/Fence/Fence.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Fence_esModule, $$typeof: Fence_$$typeof } = Fence_proxy;
const Fence_default_ = Fence_proxy.default;

const Fence_e0 = Fence_proxy["Fence"];

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
const collectHeadings = (nodes, slugify = (0,_sindresorhus_slugify/* slugifyWithCounter */.p)())=>{
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
        const filePath = (0,external_path_.join)(`src/docs/${slug}.md`);
        const markdown = (0,external_fs_.readFileSync)(filePath, "utf-8");
        const ast = dist_default().parse(markdown);
        const content = dist_default().transform(ast, {
            nodes: nodes
        });
        const headings = collectHeadings(content.children);
        const children = dist_default().renderers.react(content, react_shared_subset, {
            components: {
                Anchor: Anchor,
                Fence: Fence_e0
            }
        });
        return {
            frontmatter: js_yaml/* load */.zD(ast.attributes.frontmatter),
            children,
            headings
        };
    } catch  {
        (0,navigation.notFound)();
    }
};

;// CONCATENATED MODULE: ./src/app/hooks/useTableOfContent.ts

const useTableOfContent_proxy = (0,module_proxy.createProxy)(String.raw`/Users/kirito/Documents/www/docs.kirito.com.br/src/app/hooks/useTableOfContent.ts`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: useTableOfContent_esModule, $$typeof: useTableOfContent_$$typeof } = useTableOfContent_proxy;
const useTableOfContent_default_ = useTableOfContent_proxy.default;

const useTableOfContent_e0 = useTableOfContent_proxy["useTableOfContent"];

;// CONCATENATED MODULE: ./src/app/hooks/index.ts





/***/ })

};
;