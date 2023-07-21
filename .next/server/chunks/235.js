exports.id = 235;
exports.ids = [235];
exports.modules = {

/***/ 3990:
/***/ ((__unused_webpack_module, exports) => {

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target)=>__defProp(target, "__esModule", {
        value: true
    });
var __commonJS = (cb, mod)=>function __require() {
        return mod || (0, cb[Object.keys(cb)[0]])((mod = {
            exports: {}
        }).exports, mod), mod.exports;
    };
var __export = (target, all)=>{
    __markAsModule(target);
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __reExport = (target, module2, desc)=>{
    if (module2 && typeof module2 === "object" || typeof module2 === "function") {
        for (let key of __getOwnPropNames(module2))if (!__hasOwnProp.call(target, key) && key !== "default") __defProp(target, key, {
            get: ()=>module2[key],
            enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable
        });
    }
    return target;
};
var __toModule = (module2)=>{
    return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? {
        get: ()=>module2.default,
        enumerable: true
    } : {
        value: module2,
        enumerable: true
    })), module2);
};
// src/grammar/tag.js
var require_tag = __commonJS({
    "src/grammar/tag.js" (exports1, module2) {
        "use strict";
        function peg$subclass(child, parent) {
            function C() {
                this.constructor = child;
            }
            C.prototype = parent.prototype;
            child.prototype = new C();
        }
        function peg$SyntaxError(message, expected, found, location) {
            this.message = message;
            this.expected = expected;
            this.found = found;
            this.location = location;
            this.name = "SyntaxError";
            if (typeof Error.captureStackTrace === "function") {
                Error.captureStackTrace(this, peg$SyntaxError);
            }
        }
        peg$subclass(peg$SyntaxError, Error);
        peg$SyntaxError.buildMessage = function(expected, found, location) {
            var DESCRIBE_EXPECTATION_FNS = {
                literal: function(expectation) {
                    return '"' + literalEscape(expectation.text) + '"';
                },
                class: function(expectation) {
                    var escapedParts = expectation.parts.map(function(part) {
                        return Array.isArray(part) ? classEscape(part[0]) + "-" + classEscape(part[1]) : classEscape(part);
                    });
                    return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
                },
                any: function() {
                    return "any character";
                },
                end: function() {
                    return "end of input";
                },
                other: function(expectation) {
                    return expectation.description;
                },
                not: function(expectation) {
                    return "not " + describeExpectation(expectation.expected);
                }
            };
            function hex(ch) {
                return ch.charCodeAt(0).toString(16).toUpperCase();
            }
            function literalEscape(s2) {
                return s2.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(ch) {
                    return "\\x0" + hex(ch);
                }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) {
                    return "\\x" + hex(ch);
                });
            }
            function classEscape(s2) {
                return s2.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(ch) {
                    return "\\x0" + hex(ch);
                }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) {
                    return "\\x" + hex(ch);
                });
            }
            function describeExpectation(expectation) {
                return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
            }
            function describeExpected(expected2) {
                var descriptions = expected2.map(describeExpectation);
                var i, j;
                descriptions.sort();
                if (descriptions.length > 0) {
                    for(i = 1, j = 1; i < descriptions.length; i++){
                        if (descriptions[i - 1] !== descriptions[i]) {
                            descriptions[j] = descriptions[i];
                            j++;
                        }
                    }
                    descriptions.length = j;
                }
                switch(descriptions.length){
                    case 1:
                        return descriptions[0];
                    case 2:
                        return descriptions[0] + " or " + descriptions[1];
                    default:
                        return descriptions.slice(0, -1).join(", ") + ", or " + descriptions[descriptions.length - 1];
                }
            }
            function describeFound(found2) {
                return found2 ? '"' + literalEscape(found2) + '"' : "end of input";
            }
            return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
        };
        function peg$parse(input, options) {
            options = options !== void 0 ? options : {};
            var peg$FAILED = {};
            var peg$startRuleFunctions = {
                Top: peg$parseTop
            };
            var peg$startRuleFunction = peg$parseTop;
            var peg$c0 = "/";
            var peg$c1 = ".";
            var peg$c2 = "#";
            var peg$c3 = "=";
            var peg$c4 = "(";
            var peg$c5 = ")";
            var peg$c6 = ",";
            var peg$c7 = "[";
            var peg$c8 = "]";
            var peg$c9 = "null";
            var peg$c10 = "true";
            var peg$c11 = "false";
            var peg$c12 = "{";
            var peg$c13 = "}";
            var peg$c14 = ":";
            var peg$c15 = "-";
            var peg$c16 = '"';
            var peg$c17 = "\\";
            var peg$r0 = /^[$@]/;
            var peg$r1 = /^[0-9]/;
            var peg$r2 = /^[^\0-\x1F"\\]/;
            var peg$r3 = /^[a-zA-Z0-9_\-]/;
            var peg$r4 = /^[ \n\t]/;
            var peg$e0 = peg$literalExpectation("/", false);
            var peg$e1 = peg$otherExpectation("tag name");
            var peg$e2 = peg$otherExpectation("class");
            var peg$e3 = peg$otherExpectation("id");
            var peg$e4 = peg$literalExpectation("=", false);
            var peg$e5 = peg$literalExpectation("(", false);
            var peg$e6 = peg$literalExpectation(")", false);
            var peg$e7 = peg$literalExpectation(",", false);
            var peg$e8 = peg$otherExpectation("variable");
            var peg$e9 = peg$otherExpectation("null");
            var peg$e10 = peg$otherExpectation("boolean");
            var peg$e11 = peg$literalExpectation("[", false);
            var peg$e12 = peg$literalExpectation("]", false);
            var peg$e13 = peg$literalExpectation("{", false);
            var peg$e14 = peg$literalExpectation("}", false);
            var peg$e15 = peg$literalExpectation(":", false);
            var peg$e16 = peg$otherExpectation("number");
            var peg$e17 = peg$otherExpectation("string");
            var peg$e18 = peg$otherExpectation("identifier");
            var peg$e19 = peg$otherExpectation("whitespace");
            var peg$f0 = function(variable) {
                return {
                    type: "variable",
                    meta: {
                        variable
                    }
                };
            };
            var peg$f1 = function(attributes) {
                return {
                    type: "annotation",
                    meta: {
                        attributes
                    }
                };
            };
            var peg$f2 = function(tag, value) {
                return value;
            };
            var peg$f3 = function(tag, primary, attributes, close) {
                if (primary) {
                    attributes = attributes || [];
                    attributes.unshift({
                        type: "attribute",
                        name: "primary",
                        value: primary
                    });
                }
                const [type, nesting] = close ? [
                    "tag",
                    0
                ] : [
                    "tag_open",
                    1
                ];
                return {
                    type,
                    nesting,
                    meta: {
                        tag,
                        attributes
                    }
                };
            };
            var peg$f4 = function(tag) {
                return {
                    type: "tag_close",
                    nesting: -1,
                    meta: {
                        tag
                    }
                };
            };
            var peg$f5 = function(head, tail) {
                return !head ? [] : [
                    head,
                    ...tail
                ];
            };
            var peg$f6 = function(item2) {
                return item2;
            };
            var peg$f7 = function(ids) {
                return ids;
            };
            var peg$f8 = function(classes) {
                return classes;
            };
            var peg$f9 = function(attribute) {
                return attribute;
            };
            var peg$f10 = function(name) {
                return {
                    type: "class",
                    name,
                    value: true
                };
            };
            var peg$f11 = function(value) {
                return {
                    type: "attribute",
                    name: "id",
                    value
                };
            };
            var peg$f12 = function(name, value) {
                return {
                    type: "attribute",
                    name,
                    value
                };
            };
            var peg$f13 = function(name, head, tail) {
                return head ? [
                    head,
                    ...tail
                ] : [];
            };
            var peg$f14 = function(name, params) {
                let parameters = {};
                for (let [index, { name: name2, value }] of params.entries())parameters[name2 || index] = value;
                return new Function3(name, parameters);
            };
            var peg$f15 = function(name) {
                return name;
            };
            var peg$f16 = function(name, value) {
                return {
                    name,
                    value
                };
            };
            var peg$f17 = function(value) {
                return value;
            };
            var peg$f18 = function(prefix, head, tail) {
                if (prefix === "@") return [
                    head,
                    ...tail
                ];
                return new Variable2([
                    head,
                    ...tail
                ]);
            };
            var peg$f19 = function() {
                return null;
            };
            var peg$f20 = function() {
                return true;
            };
            var peg$f21 = function() {
                return false;
            };
            var peg$f22 = function(head, tail) {
                return [
                    head,
                    ...tail
                ];
            };
            var peg$f23 = function(value) {
                return value || [];
            };
            var peg$f24 = function(head, tail) {
                return Object.assign(head, ...tail);
            };
            var peg$f25 = function(value) {
                return value || {};
            };
            var peg$f26 = function(key, value) {
                return key === "$$mdtype" ? {} : {
                    [key]: value
                };
            };
            var peg$f27 = function() {
                return parseFloat(text2());
            };
            var peg$f28 = function(value) {
                return value.join("");
            };
            var peg$f29 = function(sequence) {
                return sequence;
            };
            var peg$currPos = 0;
            var peg$savedPos = 0;
            var peg$posDetailsCache = [
                {
                    line: 1,
                    column: 1
                }
            ];
            var peg$expected = [];
            var peg$silentFails = 0;
            var peg$result;
            if ("startRule" in options) {
                if (!(options.startRule in peg$startRuleFunctions)) {
                    throw new Error(`Can't start parsing from rule "` + options.startRule + '".');
                }
                peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
            }
            function text2() {
                return input.substring(peg$savedPos, peg$currPos);
            }
            function offset() {
                return peg$savedPos;
            }
            function range() {
                return [
                    peg$savedPos,
                    peg$currPos
                ];
            }
            function location() {
                return peg$computeLocation(peg$savedPos, peg$currPos);
            }
            function expected(description, location2) {
                location2 = location2 !== void 0 ? location2 : peg$computeLocation(peg$savedPos, peg$currPos);
                throw peg$buildStructuredError([
                    peg$otherExpectation(description)
                ], input.substring(peg$savedPos, peg$currPos), location2);
            }
            function error2(message, location2) {
                location2 = location2 !== void 0 ? location2 : peg$computeLocation(peg$savedPos, peg$currPos);
                throw peg$buildSimpleError(message, location2);
            }
            function peg$literalExpectation(text3, ignoreCase) {
                return {
                    type: "literal",
                    text: text3,
                    ignoreCase
                };
            }
            function peg$classExpectation(parts, inverted, ignoreCase) {
                return {
                    type: "class",
                    parts,
                    inverted,
                    ignoreCase
                };
            }
            function peg$anyExpectation() {
                return {
                    type: "any"
                };
            }
            function peg$endExpectation() {
                return {
                    type: "end"
                };
            }
            function peg$otherExpectation(description) {
                return {
                    type: "other",
                    description
                };
            }
            function peg$computePosDetails(pos) {
                var details = peg$posDetailsCache[pos];
                var p;
                if (details) {
                    return details;
                } else {
                    p = pos - 1;
                    while(!peg$posDetailsCache[p]){
                        p--;
                    }
                    details = peg$posDetailsCache[p];
                    details = {
                        line: details.line,
                        column: details.column
                    };
                    while(p < pos){
                        if (input.charCodeAt(p) === 10) {
                            details.line++;
                            details.column = 1;
                        } else {
                            details.column++;
                        }
                        p++;
                    }
                    peg$posDetailsCache[pos] = details;
                    return details;
                }
            }
            var peg$VALIDFILENAME = typeof options.filename === "string" && options.filename.length > 0;
            function peg$computeLocation(startPos, endPos) {
                var loc = {};
                if (peg$VALIDFILENAME) loc.filename = options.filename;
                var startPosDetails = peg$computePosDetails(startPos);
                loc.start = {
                    offset: startPos,
                    line: startPosDetails.line,
                    column: startPosDetails.column
                };
                var endPosDetails = peg$computePosDetails(endPos);
                loc.end = {
                    offset: endPos,
                    line: endPosDetails.line,
                    column: endPosDetails.column
                };
                return loc;
            }
            function peg$begin() {
                peg$expected.push({
                    pos: peg$currPos,
                    variants: []
                });
            }
            function peg$expect(expected2) {
                var top = peg$expected[peg$expected.length - 1];
                if (peg$currPos < top.pos) {
                    return;
                }
                if (peg$currPos > top.pos) {
                    top.pos = peg$currPos;
                    top.variants = [];
                }
                top.variants.push(expected2);
            }
            function peg$end(invert) {
                var expected2 = peg$expected.pop();
                var top = peg$expected[peg$expected.length - 1];
                var variants = expected2.variants;
                if (top.pos !== expected2.pos) {
                    return;
                }
                if (invert) {
                    variants = variants.map(function(e) {
                        return e.type === "not" ? e.expected : {
                            type: "not",
                            expected: e
                        };
                    });
                }
                Array.prototype.push.apply(top.variants, variants);
            }
            function peg$buildSimpleError(message, location2) {
                return new peg$SyntaxError(message, null, null, location2);
            }
            function peg$buildStructuredError(expected2, found, location2) {
                return new peg$SyntaxError(peg$SyntaxError.buildMessage(expected2, found, location2), expected2, found, location2);
            }
            function peg$buildError() {
                var expected2 = peg$expected[0];
                var failPos = expected2.pos;
                return peg$buildStructuredError(expected2.variants, failPos < input.length ? input.charAt(failPos) : null, failPos < input.length ? peg$computeLocation(failPos, failPos + 1) : peg$computeLocation(failPos, failPos));
            }
            function peg$parseTop() {
                var s0;
                var rule$expects = function(expected2) {
                    if (peg$silentFails === 0) peg$expect(expected2);
                };
                s0 = peg$parseTopLevelValue();
                if (s0 === peg$FAILED) {
                    s0 = peg$parseAnnotation();
                    if (s0 === peg$FAILED) {
                        s0 = peg$parseTagOpen();
                        if (s0 === peg$FAILED) {
                            s0 = peg$parseTagClose();
                        }
                    }
                }
                return s0;
            }
            function peg$parseTopLevelValue() {
                var s0, s1;
                var rule$expects = function(expected2) {
                    if (peg$silentFails === 0) peg$expect(expected2);
                };
                s0 = peg$currPos;
                s1 = peg$parseVariable();
                if (s1 === peg$FAILED) {
                    s1 = peg$parseFunction();
                }
                if (s1 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$f0(s1);
                }
                s0 = s1;
                return s0;
            }
            function peg$parseAnnotation() {
                var s0, s1, s2, s3;
                var rule$expects = function(expected2) {
                    if (peg$silentFails === 0) peg$expect(expected2);
                };
                s0 = peg$currPos;
                s1 = peg$parseTagAttributes();
                if (s1 !== peg$FAILED) {
                    s2 = [];
                    s3 = peg$parse_();
                    while(s3 !== peg$FAILED){
                        s2.push(s3);
                        s3 = peg$parse_();
                    }
                    peg$savedPos = s0;
                    s0 = peg$f1(s1);
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
                return s0;
            }
            function peg$parseTagOpen() {
                var s0, s1, s2, s3, s4, s5, s6;
                var rule$expects = function(expected2) {
                    if (peg$silentFails === 0) peg$expect(expected2);
                };
                s0 = peg$currPos;
                s1 = peg$parseTagName();
                if (s1 !== peg$FAILED) {
                    s2 = [];
                    s3 = peg$parse_();
                    while(s3 !== peg$FAILED){
                        s2.push(s3);
                        s3 = peg$parse_();
                    }
                    s3 = peg$currPos;
                    s4 = peg$parseValue();
                    if (s4 !== peg$FAILED) {
                        s5 = peg$parse_();
                        if (s5 === peg$FAILED) {
                            s5 = null;
                        }
                        peg$savedPos = s3;
                        s3 = peg$f2(s1, s4);
                    } else {
                        peg$currPos = s3;
                        s3 = peg$FAILED;
                    }
                    if (s3 === peg$FAILED) {
                        s3 = null;
                    }
                    s4 = peg$parseTagAttributes();
                    if (s4 === peg$FAILED) {
                        s4 = null;
                    }
                    s5 = [];
                    s6 = peg$parse_();
                    while(s6 !== peg$FAILED){
                        s5.push(s6);
                        s6 = peg$parse_();
                    }
                    rule$expects(peg$e0);
                    if (input.charCodeAt(peg$currPos) === 47) {
                        s6 = peg$c0;
                        peg$currPos++;
                    } else {
                        s6 = peg$FAILED;
                    }
                    if (s6 === peg$FAILED) {
                        s6 = null;
                    }
                    peg$savedPos = s0;
                    s0 = peg$f3(s1, s3, s4, s6);
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
                return s0;
            }
            function peg$parseTagClose() {
                var s0, s1, s2;
                var rule$expects = function(expected2) {
                    if (peg$silentFails === 0) peg$expect(expected2);
                };
                s0 = peg$currPos;
                rule$expects(peg$e0);
                if (input.charCodeAt(peg$currPos) === 47) {
                    s1 = peg$c0;
                    peg$currPos++;
                } else {
                    s1 = peg$FAILED;
                }
                if (s1 !== peg$FAILED) {
                    s2 = peg$parseTagName();
                    if (s2 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s0 = peg$f4(s2);
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
                return s0;
            }
            function peg$parseTagName() {
                var s0;
                var rule$expects = function(expected2) {
                    if (peg$silentFails === 0) peg$expect(expected2);
                };
                rule$expects(peg$e1);
                peg$silentFails++;
                s0 = peg$parseIdentifier();
                peg$silentFails--;
                return s0;
            }
            function peg$parseTagAttributes() {
                var s0, s1, s2, s3;
                var rule$expects = function(expected2) {
                    if (peg$silentFails === 0) peg$expect(expected2);
                };
                s0 = peg$currPos;
                s1 = peg$parseTagAttributesItem();
                if (s1 !== peg$FAILED) {
                    s2 = [];
                    s3 = peg$parseTagAttributesTail();
                    while(s3 !== peg$FAILED){
                        s2.push(s3);
                        s3 = peg$parseTagAttributesTail();
                    }
                    peg$savedPos = s0;
                    s0 = peg$f5(s1, s2);
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
                return s0;
            }
            function peg$parseTagAttributesTail() {
                var s0, s1, s2;
                var rule$expects = function(expected2) {
                    if (peg$silentFails === 0) peg$expect(expected2);
                };
                s0 = peg$currPos;
                s1 = [];
                s2 = peg$parse_();
                if (s2 !== peg$FAILED) {
                    while(s2 !== peg$FAILED){
                        s1.push(s2);
                        s2 = peg$parse_();
                    }
                } else {
                    s1 = peg$FAILED;
                }
                if (s1 !== peg$FAILED) {
                    s2 = peg$parseTagAttributesItem();
                    if (s2 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s0 = peg$f6(s2);
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
                return s0;
            }
            function peg$parseTagAttributesItem() {
                var s0, s1;
                var rule$expects = function(expected2) {
                    if (peg$silentFails === 0) peg$expect(expected2);
                };
                s0 = peg$currPos;
                s1 = peg$parseTagShortcutId();
                if (s1 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$f7(s1);
                }
                s0 = s1;
                if (s0 === peg$FAILED) {
                    s0 = peg$currPos;
                    s1 = peg$parseTagShortcutClass();
                    if (s1 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$f8(s1);
                    }
                    s0 = s1;
                    if (s0 === peg$FAILED) {
                        s0 = peg$currPos;
                        s1 = peg$parseTagAttribute();
                        if (s1 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s1 = peg$f9(s1);
                        }
                        s0 = s1;
                    }
                }
                return s0;
            }
            function peg$parseTagShortcutClass() {
                var s0, s1, s2;
                var rule$expects = function(expected2) {
                    if (peg$silentFails === 0) peg$expect(expected2);
                };
                rule$expects(peg$e2);
                peg$silentFails++;
                s0 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 46) {
                    s1 = peg$c1;
                    peg$currPos++;
                } else {
                    s1 = peg$FAILED;
                }
                if (s1 !== peg$FAILED) {
                    s2 = peg$parseIdentifier();
                    if (s2 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s0 = peg$f10(s2);
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
                peg$silentFails--;
                return s0;
            }
            function peg$parseTagShortcutId() {
                var s0, s1, s2;
                var rule$expects = function(expected2) {
                    if (peg$silentFails === 0) peg$expect(expected2);
                };
                rule$expects(peg$e3);
                peg$silentFails++;
                s0 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 35) {
                    s1 = peg$c2;
                    peg$currPos++;
                } else {
                    s1 = peg$FAILED;
                }
                if (s1 !== peg$FAILED) {
                    s2 = peg$parseIdentifier();
                    if (s2 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s0 = peg$f11(s2);
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
                peg$silentFails--;
                return s0;
            }
            function peg$parseTagAttribute() {
                var s0, s1, s2, s3;
                var rule$expects = function(expected2) {
                    if (peg$silentFails === 0) peg$expect(expected2);
                };
                s0 = peg$currPos;
                s1 = peg$parseIdentifier();
                if (s1 !== peg$FAILED) {
                    rule$expects(peg$e4);
                    if (input.charCodeAt(peg$currPos) === 61) {
                        s2 = peg$c3;
                        peg$currPos++;
                    } else {
                        s2 = peg$FAILED;
                    }
                    if (s2 !== peg$FAILED) {
                        s3 = peg$parseValue();
                        if (s3 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s0 = peg$f12(s1, s3);
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
                return s0;
            }
            function peg$parseFunction() {
                var s0, s1, s2, s3, s4, s5, s6, s7;
                var rule$expects = function(expected2) {
                    if (peg$silentFails === 0) peg$expect(expected2);
                };
                s0 = peg$currPos;
                s1 = peg$parseIdentifier();
                if (s1 !== peg$FAILED) {
                    rule$expects(peg$e5);
                    if (input.charCodeAt(peg$currPos) === 40) {
                        s2 = peg$c4;
                        peg$currPos++;
                    } else {
                        s2 = peg$FAILED;
                    }
                    if (s2 !== peg$FAILED) {
                        s3 = [];
                        s4 = peg$parse_();
                        while(s4 !== peg$FAILED){
                            s3.push(s4);
                            s4 = peg$parse_();
                        }
                        s4 = peg$currPos;
                        s5 = peg$parseFunctionParameter();
                        if (s5 === peg$FAILED) {
                            s5 = null;
                        }
                        s6 = [];
                        s7 = peg$parseFunctionParameterTail();
                        while(s7 !== peg$FAILED){
                            s6.push(s7);
                            s7 = peg$parseFunctionParameterTail();
                        }
                        peg$savedPos = s4;
                        s4 = peg$f13(s1, s5, s6);
                        rule$expects(peg$e6);
                        if (input.charCodeAt(peg$currPos) === 41) {
                            s5 = peg$c5;
                            peg$currPos++;
                        } else {
                            s5 = peg$FAILED;
                        }
                        if (s5 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s0 = peg$f14(s1, s4);
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
                return s0;
            }
            function peg$parseFunctionParameter() {
                var s0, s1, s2, s3;
                var rule$expects = function(expected2) {
                    if (peg$silentFails === 0) peg$expect(expected2);
                };
                s0 = peg$currPos;
                s1 = peg$currPos;
                s2 = peg$parseIdentifier();
                if (s2 !== peg$FAILED) {
                    rule$expects(peg$e4);
                    if (input.charCodeAt(peg$currPos) === 61) {
                        s3 = peg$c3;
                        peg$currPos++;
                    } else {
                        s3 = peg$FAILED;
                    }
                    if (s3 !== peg$FAILED) {
                        peg$savedPos = s1;
                        s1 = peg$f15(s2);
                    } else {
                        peg$currPos = s1;
                        s1 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s1;
                    s1 = peg$FAILED;
                }
                if (s1 === peg$FAILED) {
                    s1 = null;
                }
                s2 = peg$parseValue();
                if (s2 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s0 = peg$f16(s1, s2);
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
                return s0;
            }
            function peg$parseFunctionParameterTail() {
                var s0, s1, s2, s3, s4;
                var rule$expects = function(expected2) {
                    if (peg$silentFails === 0) peg$expect(expected2);
                };
                s0 = peg$currPos;
                s1 = [];
                s2 = peg$parse_();
                while(s2 !== peg$FAILED){
                    s1.push(s2);
                    s2 = peg$parse_();
                }
                rule$expects(peg$e7);
                if (input.charCodeAt(peg$currPos) === 44) {
                    s2 = peg$c6;
                    peg$currPos++;
                } else {
                    s2 = peg$FAILED;
                }
                if (s2 !== peg$FAILED) {
                    s3 = [];
                    s4 = peg$parse_();
                    while(s4 !== peg$FAILED){
                        s3.push(s4);
                        s4 = peg$parse_();
                    }
                    s4 = peg$parseFunctionParameter();
                    if (s4 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s0 = peg$f17(s4);
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
                return s0;
            }
            function peg$parseTrailingComma() {
                var s0, s1, s2;
                var rule$expects = function(expected2) {
                    if (peg$silentFails === 0) peg$expect(expected2);
                };
                s0 = peg$currPos;
                s1 = [];
                s2 = peg$parse_();
                while(s2 !== peg$FAILED){
                    s1.push(s2);
                    s2 = peg$parse_();
                }
                rule$expects(peg$e7);
                if (input.charCodeAt(peg$currPos) === 44) {
                    s2 = peg$c6;
                    peg$currPos++;
                } else {
                    s2 = peg$FAILED;
                }
                if (s2 !== peg$FAILED) {
                    s1 = [
                        s1,
                        s2
                    ];
                    s0 = s1;
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
                if (s0 === peg$FAILED) {
                    s0 = null;
                }
                return s0;
            }
            function peg$parseVariable() {
                var s0, s1, s2, s3, s4;
                var rule$expects = function(expected2) {
                    if (peg$silentFails === 0) peg$expect(expected2);
                };
                rule$expects(peg$e8);
                peg$silentFails++;
                s0 = peg$currPos;
                if (peg$r0.test(input.charAt(peg$currPos))) {
                    s1 = input.charAt(peg$currPos);
                    peg$currPos++;
                } else {
                    s1 = peg$FAILED;
                }
                if (s1 !== peg$FAILED) {
                    s2 = peg$parseIdentifier();
                    if (s2 !== peg$FAILED) {
                        s3 = [];
                        s4 = peg$parseVariableTail();
                        while(s4 !== peg$FAILED){
                            s3.push(s4);
                            s4 = peg$parseVariableTail();
                        }
                        peg$savedPos = s0;
                        s0 = peg$f18(s1, s2, s3);
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
                peg$silentFails--;
                return s0;
            }
            function peg$parseVariableTail() {
                var s0, s1, s2, s3;
                var rule$expects = function(expected2) {
                    if (peg$silentFails === 0) peg$expect(expected2);
                };
                s0 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 46) {
                    s1 = peg$c1;
                    peg$currPos++;
                } else {
                    s1 = peg$FAILED;
                }
                if (s1 !== peg$FAILED) {
                    s2 = peg$parseIdentifier();
                    if (s2 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s0 = peg$f15(s2);
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
                if (s0 === peg$FAILED) {
                    s0 = peg$currPos;
                    if (input.charCodeAt(peg$currPos) === 91) {
                        s1 = peg$c7;
                        peg$currPos++;
                    } else {
                        s1 = peg$FAILED;
                    }
                    if (s1 !== peg$FAILED) {
                        s2 = peg$parseValueNumber();
                        if (s2 === peg$FAILED) {
                            s2 = peg$parseValueString();
                        }
                        if (s2 !== peg$FAILED) {
                            if (input.charCodeAt(peg$currPos) === 93) {
                                s3 = peg$c8;
                                peg$currPos++;
                            } else {
                                s3 = peg$FAILED;
                            }
                            if (s3 !== peg$FAILED) {
                                peg$savedPos = s0;
                                s0 = peg$f17(s2);
                            } else {
                                peg$currPos = s0;
                                s0 = peg$FAILED;
                            }
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                }
                return s0;
            }
            function peg$parseValue() {
                var s0;
                var rule$expects = function(expected2) {
                    if (peg$silentFails === 0) peg$expect(expected2);
                };
                s0 = peg$parseValueNull();
                if (s0 === peg$FAILED) {
                    s0 = peg$parseValueBoolean();
                    if (s0 === peg$FAILED) {
                        s0 = peg$parseValueString();
                        if (s0 === peg$FAILED) {
                            s0 = peg$parseValueNumber();
                            if (s0 === peg$FAILED) {
                                s0 = peg$parseValueArray();
                                if (s0 === peg$FAILED) {
                                    s0 = peg$parseValueHash();
                                    if (s0 === peg$FAILED) {
                                        s0 = peg$parseFunction();
                                        if (s0 === peg$FAILED) {
                                            s0 = peg$parseVariable();
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return s0;
            }
            function peg$parseValueNull() {
                var s0, s1;
                var rule$expects = function(expected2) {
                    if (peg$silentFails === 0) peg$expect(expected2);
                };
                rule$expects(peg$e9);
                peg$silentFails++;
                s0 = peg$currPos;
                if (input.substr(peg$currPos, 4) === peg$c9) {
                    s1 = peg$c9;
                    peg$currPos += 4;
                } else {
                    s1 = peg$FAILED;
                }
                if (s1 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$f19();
                }
                s0 = s1;
                peg$silentFails--;
                return s0;
            }
            function peg$parseValueBoolean() {
                var s0, s1;
                var rule$expects = function(expected2) {
                    if (peg$silentFails === 0) peg$expect(expected2);
                };
                rule$expects(peg$e10);
                peg$silentFails++;
                s0 = peg$currPos;
                if (input.substr(peg$currPos, 4) === peg$c10) {
                    s1 = peg$c10;
                    peg$currPos += 4;
                } else {
                    s1 = peg$FAILED;
                }
                if (s1 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$f20();
                }
                s0 = s1;
                if (s0 === peg$FAILED) {
                    s0 = peg$currPos;
                    if (input.substr(peg$currPos, 5) === peg$c11) {
                        s1 = peg$c11;
                        peg$currPos += 5;
                    } else {
                        s1 = peg$FAILED;
                    }
                    if (s1 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s1 = peg$f21();
                    }
                    s0 = s1;
                }
                peg$silentFails--;
                return s0;
            }
            function peg$parseValueArray() {
                var s0, s1, s2, s3, s4, s5, s6;
                var rule$expects = function(expected2) {
                    if (peg$silentFails === 0) peg$expect(expected2);
                };
                s0 = peg$currPos;
                rule$expects(peg$e11);
                if (input.charCodeAt(peg$currPos) === 91) {
                    s1 = peg$c7;
                    peg$currPos++;
                } else {
                    s1 = peg$FAILED;
                }
                if (s1 !== peg$FAILED) {
                    s2 = [];
                    s3 = peg$parse_();
                    while(s3 !== peg$FAILED){
                        s2.push(s3);
                        s3 = peg$parse_();
                    }
                    s3 = peg$currPos;
                    s4 = peg$parseValue();
                    if (s4 !== peg$FAILED) {
                        s5 = [];
                        s6 = peg$parseValueArrayTail();
                        while(s6 !== peg$FAILED){
                            s5.push(s6);
                            s6 = peg$parseValueArrayTail();
                        }
                        s6 = peg$parseTrailingComma();
                        peg$savedPos = s3;
                        s3 = peg$f22(s4, s5);
                    } else {
                        peg$currPos = s3;
                        s3 = peg$FAILED;
                    }
                    if (s3 === peg$FAILED) {
                        s3 = null;
                    }
                    s4 = [];
                    s5 = peg$parse_();
                    while(s5 !== peg$FAILED){
                        s4.push(s5);
                        s5 = peg$parse_();
                    }
                    rule$expects(peg$e12);
                    if (input.charCodeAt(peg$currPos) === 93) {
                        s5 = peg$c8;
                        peg$currPos++;
                    } else {
                        s5 = peg$FAILED;
                    }
                    if (s5 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s0 = peg$f23(s3);
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
                return s0;
            }
            function peg$parseValueArrayTail() {
                var s0, s1, s2, s3, s4;
                var rule$expects = function(expected2) {
                    if (peg$silentFails === 0) peg$expect(expected2);
                };
                s0 = peg$currPos;
                s1 = [];
                s2 = peg$parse_();
                while(s2 !== peg$FAILED){
                    s1.push(s2);
                    s2 = peg$parse_();
                }
                rule$expects(peg$e7);
                if (input.charCodeAt(peg$currPos) === 44) {
                    s2 = peg$c6;
                    peg$currPos++;
                } else {
                    s2 = peg$FAILED;
                }
                if (s2 !== peg$FAILED) {
                    s3 = [];
                    s4 = peg$parse_();
                    while(s4 !== peg$FAILED){
                        s3.push(s4);
                        s4 = peg$parse_();
                    }
                    s4 = peg$parseValue();
                    if (s4 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s0 = peg$f17(s4);
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
                return s0;
            }
            function peg$parseValueHash() {
                var s0, s1, s2, s3, s4, s5, s6;
                var rule$expects = function(expected2) {
                    if (peg$silentFails === 0) peg$expect(expected2);
                };
                s0 = peg$currPos;
                rule$expects(peg$e13);
                if (input.charCodeAt(peg$currPos) === 123) {
                    s1 = peg$c12;
                    peg$currPos++;
                } else {
                    s1 = peg$FAILED;
                }
                if (s1 !== peg$FAILED) {
                    s2 = [];
                    s3 = peg$parse_();
                    while(s3 !== peg$FAILED){
                        s2.push(s3);
                        s3 = peg$parse_();
                    }
                    s3 = peg$currPos;
                    s4 = peg$parseValueHashItem();
                    if (s4 !== peg$FAILED) {
                        s5 = [];
                        s6 = peg$parseValueHashTail();
                        while(s6 !== peg$FAILED){
                            s5.push(s6);
                            s6 = peg$parseValueHashTail();
                        }
                        s6 = peg$parseTrailingComma();
                        peg$savedPos = s3;
                        s3 = peg$f24(s4, s5);
                    } else {
                        peg$currPos = s3;
                        s3 = peg$FAILED;
                    }
                    if (s3 === peg$FAILED) {
                        s3 = null;
                    }
                    s4 = [];
                    s5 = peg$parse_();
                    while(s5 !== peg$FAILED){
                        s4.push(s5);
                        s5 = peg$parse_();
                    }
                    rule$expects(peg$e14);
                    if (input.charCodeAt(peg$currPos) === 125) {
                        s5 = peg$c13;
                        peg$currPos++;
                    } else {
                        s5 = peg$FAILED;
                    }
                    if (s5 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s0 = peg$f25(s3);
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
                return s0;
            }
            function peg$parseValueHashTail() {
                var s0, s1, s2, s3, s4;
                var rule$expects = function(expected2) {
                    if (peg$silentFails === 0) peg$expect(expected2);
                };
                s0 = peg$currPos;
                s1 = [];
                s2 = peg$parse_();
                while(s2 !== peg$FAILED){
                    s1.push(s2);
                    s2 = peg$parse_();
                }
                rule$expects(peg$e7);
                if (input.charCodeAt(peg$currPos) === 44) {
                    s2 = peg$c6;
                    peg$currPos++;
                } else {
                    s2 = peg$FAILED;
                }
                if (s2 !== peg$FAILED) {
                    s3 = [];
                    s4 = peg$parse_();
                    while(s4 !== peg$FAILED){
                        s3.push(s4);
                        s4 = peg$parse_();
                    }
                    s4 = peg$parseValueHashItem();
                    if (s4 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s0 = peg$f6(s4);
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
                return s0;
            }
            function peg$parseValueHashItem() {
                var s0, s1, s2, s3, s4;
                var rule$expects = function(expected2) {
                    if (peg$silentFails === 0) peg$expect(expected2);
                };
                s0 = peg$currPos;
                s1 = peg$parseIdentifier();
                if (s1 === peg$FAILED) {
                    s1 = peg$parseValueString();
                }
                if (s1 !== peg$FAILED) {
                    rule$expects(peg$e15);
                    if (input.charCodeAt(peg$currPos) === 58) {
                        s2 = peg$c14;
                        peg$currPos++;
                    } else {
                        s2 = peg$FAILED;
                    }
                    if (s2 !== peg$FAILED) {
                        s3 = [];
                        s4 = peg$parse_();
                        while(s4 !== peg$FAILED){
                            s3.push(s4);
                            s4 = peg$parse_();
                        }
                        s4 = peg$parseValue();
                        if (s4 !== peg$FAILED) {
                            peg$savedPos = s0;
                            s0 = peg$f26(s1, s4);
                        } else {
                            peg$currPos = s0;
                            s0 = peg$FAILED;
                        }
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
                return s0;
            }
            function peg$parseValueNumber() {
                var s0, s1, s2, s3, s4, s5, s6;
                var rule$expects = function(expected2) {
                    if (peg$silentFails === 0) peg$expect(expected2);
                };
                rule$expects(peg$e16);
                peg$silentFails++;
                s0 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 45) {
                    s1 = peg$c15;
                    peg$currPos++;
                } else {
                    s1 = peg$FAILED;
                }
                if (s1 === peg$FAILED) {
                    s1 = null;
                }
                s2 = [];
                if (peg$r1.test(input.charAt(peg$currPos))) {
                    s3 = input.charAt(peg$currPos);
                    peg$currPos++;
                } else {
                    s3 = peg$FAILED;
                }
                if (s3 !== peg$FAILED) {
                    while(s3 !== peg$FAILED){
                        s2.push(s3);
                        if (peg$r1.test(input.charAt(peg$currPos))) {
                            s3 = input.charAt(peg$currPos);
                            peg$currPos++;
                        } else {
                            s3 = peg$FAILED;
                        }
                    }
                } else {
                    s2 = peg$FAILED;
                }
                if (s2 !== peg$FAILED) {
                    s3 = peg$currPos;
                    if (input.charCodeAt(peg$currPos) === 46) {
                        s4 = peg$c1;
                        peg$currPos++;
                    } else {
                        s4 = peg$FAILED;
                    }
                    if (s4 !== peg$FAILED) {
                        s5 = [];
                        if (peg$r1.test(input.charAt(peg$currPos))) {
                            s6 = input.charAt(peg$currPos);
                            peg$currPos++;
                        } else {
                            s6 = peg$FAILED;
                        }
                        if (s6 !== peg$FAILED) {
                            while(s6 !== peg$FAILED){
                                s5.push(s6);
                                if (peg$r1.test(input.charAt(peg$currPos))) {
                                    s6 = input.charAt(peg$currPos);
                                    peg$currPos++;
                                } else {
                                    s6 = peg$FAILED;
                                }
                            }
                        } else {
                            s5 = peg$FAILED;
                        }
                        if (s5 !== peg$FAILED) {
                            s4 = [
                                s4,
                                s5
                            ];
                            s3 = s4;
                        } else {
                            peg$currPos = s3;
                            s3 = peg$FAILED;
                        }
                    } else {
                        peg$currPos = s3;
                        s3 = peg$FAILED;
                    }
                    if (s3 === peg$FAILED) {
                        s3 = null;
                    }
                    peg$savedPos = s0;
                    s0 = peg$f27();
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
                peg$silentFails--;
                return s0;
            }
            function peg$parseValueString() {
                var s0, s1, s2, s3;
                var rule$expects = function(expected2) {
                    if (peg$silentFails === 0) peg$expect(expected2);
                };
                rule$expects(peg$e17);
                peg$silentFails++;
                s0 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 34) {
                    s1 = peg$c16;
                    peg$currPos++;
                } else {
                    s1 = peg$FAILED;
                }
                if (s1 !== peg$FAILED) {
                    s2 = [];
                    s3 = peg$parseValueStringChars();
                    while(s3 !== peg$FAILED){
                        s2.push(s3);
                        s3 = peg$parseValueStringChars();
                    }
                    if (input.charCodeAt(peg$currPos) === 34) {
                        s3 = peg$c16;
                        peg$currPos++;
                    } else {
                        s3 = peg$FAILED;
                    }
                    if (s3 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s0 = peg$f28(s2);
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
                peg$silentFails--;
                return s0;
            }
            function peg$parseValueStringChars() {
                var s0;
                var rule$expects = function(expected2) {
                    if (peg$silentFails === 0) peg$expect(expected2);
                };
                if (peg$r2.test(input.charAt(peg$currPos))) {
                    s0 = input.charAt(peg$currPos);
                    peg$currPos++;
                } else {
                    s0 = peg$FAILED;
                }
                if (s0 === peg$FAILED) {
                    s0 = peg$parseValueStringEscapes();
                }
                return s0;
            }
            function peg$parseValueStringEscapes() {
                var s0, s1, s2;
                var rule$expects = function(expected2) {
                    if (peg$silentFails === 0) peg$expect(expected2);
                };
                s0 = peg$currPos;
                if (input.charCodeAt(peg$currPos) === 92) {
                    s1 = peg$c17;
                    peg$currPos++;
                } else {
                    s1 = peg$FAILED;
                }
                if (s1 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 34) {
                        s2 = peg$c16;
                        peg$currPos++;
                    } else {
                        s2 = peg$FAILED;
                    }
                    if (s2 === peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 92) {
                            s2 = peg$c17;
                            peg$currPos++;
                        } else {
                            s2 = peg$FAILED;
                        }
                    }
                    if (s2 !== peg$FAILED) {
                        peg$savedPos = s0;
                        s0 = peg$f29(s2);
                    } else {
                        peg$currPos = s0;
                        s0 = peg$FAILED;
                    }
                } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                }
                return s0;
            }
            function peg$parseIdentifier() {
                var s0, s1, s2;
                var rule$expects = function(expected2) {
                    if (peg$silentFails === 0) peg$expect(expected2);
                };
                rule$expects(peg$e18);
                peg$silentFails++;
                s0 = peg$currPos;
                s1 = [];
                if (peg$r3.test(input.charAt(peg$currPos))) {
                    s2 = input.charAt(peg$currPos);
                    peg$currPos++;
                } else {
                    s2 = peg$FAILED;
                }
                if (s2 !== peg$FAILED) {
                    while(s2 !== peg$FAILED){
                        s1.push(s2);
                        if (peg$r3.test(input.charAt(peg$currPos))) {
                            s2 = input.charAt(peg$currPos);
                            peg$currPos++;
                        } else {
                            s2 = peg$FAILED;
                        }
                    }
                } else {
                    s1 = peg$FAILED;
                }
                if (s1 !== peg$FAILED) {
                    s0 = input.substring(s0, peg$currPos);
                } else {
                    s0 = s1;
                }
                peg$silentFails--;
                return s0;
            }
            function peg$parse_() {
                var s0;
                var rule$expects = function(expected2) {
                    if (peg$silentFails === 0) peg$expect(expected2);
                };
                rule$expects(peg$e19);
                peg$silentFails++;
                if (peg$r4.test(input.charAt(peg$currPos))) {
                    s0 = input.charAt(peg$currPos);
                    peg$currPos++;
                } else {
                    s0 = peg$FAILED;
                }
                peg$silentFails--;
                return s0;
            }
            const { Variable: Variable2, Function: Function3 } = options;
            peg$begin();
            peg$result = peg$startRuleFunction();
            if (peg$result !== peg$FAILED && peg$currPos === input.length) {
                return peg$result;
            } else {
                if (peg$result !== peg$FAILED && peg$currPos < input.length) {
                    peg$expect(peg$endExpectation());
                }
                throw peg$buildError();
            }
        }
        module2.exports = {
            SyntaxError: peg$SyntaxError,
            parse: peg$parse
        };
    }
});
// node_modules/entities/lib/maps/entities.json
var require_entities = __commonJS({
    "node_modules/entities/lib/maps/entities.json" (exports1, module2) {
        module2.exports = {
            Aacute: "\xc1",
            aacute: "\xe1",
            Abreve: "Ă",
            abreve: "ă",
            ac: "∾",
            acd: "∿",
            acE: "∾̳",
            Acirc: "\xc2",
            acirc: "\xe2",
            acute: "\xb4",
            Acy: "А",
            acy: "а",
            AElig: "\xc6",
            aelig: "\xe6",
            af: "⁡",
            Afr: "\uD835\uDD04",
            afr: "\uD835\uDD1E",
            Agrave: "\xc0",
            agrave: "\xe0",
            alefsym: "ℵ",
            aleph: "ℵ",
            Alpha: "Α",
            alpha: "α",
            Amacr: "Ā",
            amacr: "ā",
            amalg: "⨿",
            amp: "&",
            AMP: "&",
            andand: "⩕",
            And: "⩓",
            and: "∧",
            andd: "⩜",
            andslope: "⩘",
            andv: "⩚",
            ang: "∠",
            ange: "⦤",
            angle: "∠",
            angmsdaa: "⦨",
            angmsdab: "⦩",
            angmsdac: "⦪",
            angmsdad: "⦫",
            angmsdae: "⦬",
            angmsdaf: "⦭",
            angmsdag: "⦮",
            angmsdah: "⦯",
            angmsd: "∡",
            angrt: "∟",
            angrtvb: "⊾",
            angrtvbd: "⦝",
            angsph: "∢",
            angst: "\xc5",
            angzarr: "⍼",
            Aogon: "Ą",
            aogon: "ą",
            Aopf: "\uD835\uDD38",
            aopf: "\uD835\uDD52",
            apacir: "⩯",
            ap: "≈",
            apE: "⩰",
            ape: "≊",
            apid: "≋",
            apos: "'",
            ApplyFunction: "⁡",
            approx: "≈",
            approxeq: "≊",
            Aring: "\xc5",
            aring: "\xe5",
            Ascr: "\uD835\uDC9C",
            ascr: "\uD835\uDCB6",
            Assign: "≔",
            ast: "*",
            asymp: "≈",
            asympeq: "≍",
            Atilde: "\xc3",
            atilde: "\xe3",
            Auml: "\xc4",
            auml: "\xe4",
            awconint: "∳",
            awint: "⨑",
            backcong: "≌",
            backepsilon: "϶",
            backprime: "‵",
            backsim: "∽",
            backsimeq: "⋍",
            Backslash: "∖",
            Barv: "⫧",
            barvee: "⊽",
            barwed: "⌅",
            Barwed: "⌆",
            barwedge: "⌅",
            bbrk: "⎵",
            bbrktbrk: "⎶",
            bcong: "≌",
            Bcy: "Б",
            bcy: "б",
            bdquo: "„",
            becaus: "∵",
            because: "∵",
            Because: "∵",
            bemptyv: "⦰",
            bepsi: "϶",
            bernou: "ℬ",
            Bernoullis: "ℬ",
            Beta: "Β",
            beta: "β",
            beth: "ℶ",
            between: "≬",
            Bfr: "\uD835\uDD05",
            bfr: "\uD835\uDD1F",
            bigcap: "⋂",
            bigcirc: "◯",
            bigcup: "⋃",
            bigodot: "⨀",
            bigoplus: "⨁",
            bigotimes: "⨂",
            bigsqcup: "⨆",
            bigstar: "★",
            bigtriangledown: "▽",
            bigtriangleup: "△",
            biguplus: "⨄",
            bigvee: "⋁",
            bigwedge: "⋀",
            bkarow: "⤍",
            blacklozenge: "⧫",
            blacksquare: "▪",
            blacktriangle: "▴",
            blacktriangledown: "▾",
            blacktriangleleft: "◂",
            blacktriangleright: "▸",
            blank: "␣",
            blk12: "▒",
            blk14: "░",
            blk34: "▓",
            block: "█",
            bne: "=⃥",
            bnequiv: "≡⃥",
            bNot: "⫭",
            bnot: "⌐",
            Bopf: "\uD835\uDD39",
            bopf: "\uD835\uDD53",
            bot: "⊥",
            bottom: "⊥",
            bowtie: "⋈",
            boxbox: "⧉",
            boxdl: "┐",
            boxdL: "╕",
            boxDl: "╖",
            boxDL: "╗",
            boxdr: "┌",
            boxdR: "╒",
            boxDr: "╓",
            boxDR: "╔",
            boxh: "─",
            boxH: "═",
            boxhd: "┬",
            boxHd: "╤",
            boxhD: "╥",
            boxHD: "╦",
            boxhu: "┴",
            boxHu: "╧",
            boxhU: "╨",
            boxHU: "╩",
            boxminus: "⊟",
            boxplus: "⊞",
            boxtimes: "⊠",
            boxul: "┘",
            boxuL: "╛",
            boxUl: "╜",
            boxUL: "╝",
            boxur: "└",
            boxuR: "╘",
            boxUr: "╙",
            boxUR: "╚",
            boxv: "│",
            boxV: "║",
            boxvh: "┼",
            boxvH: "╪",
            boxVh: "╫",
            boxVH: "╬",
            boxvl: "┤",
            boxvL: "╡",
            boxVl: "╢",
            boxVL: "╣",
            boxvr: "├",
            boxvR: "╞",
            boxVr: "╟",
            boxVR: "╠",
            bprime: "‵",
            breve: "˘",
            Breve: "˘",
            brvbar: "\xa6",
            bscr: "\uD835\uDCB7",
            Bscr: "ℬ",
            bsemi: "⁏",
            bsim: "∽",
            bsime: "⋍",
            bsolb: "⧅",
            bsol: "\\",
            bsolhsub: "⟈",
            bull: "•",
            bullet: "•",
            bump: "≎",
            bumpE: "⪮",
            bumpe: "≏",
            Bumpeq: "≎",
            bumpeq: "≏",
            Cacute: "Ć",
            cacute: "ć",
            capand: "⩄",
            capbrcup: "⩉",
            capcap: "⩋",
            cap: "∩",
            Cap: "⋒",
            capcup: "⩇",
            capdot: "⩀",
            CapitalDifferentialD: "ⅅ",
            caps: "∩︀",
            caret: "⁁",
            caron: "ˇ",
            Cayleys: "ℭ",
            ccaps: "⩍",
            Ccaron: "Č",
            ccaron: "č",
            Ccedil: "\xc7",
            ccedil: "\xe7",
            Ccirc: "Ĉ",
            ccirc: "ĉ",
            Cconint: "∰",
            ccups: "⩌",
            ccupssm: "⩐",
            Cdot: "Ċ",
            cdot: "ċ",
            cedil: "\xb8",
            Cedilla: "\xb8",
            cemptyv: "⦲",
            cent: "\xa2",
            centerdot: "\xb7",
            CenterDot: "\xb7",
            cfr: "\uD835\uDD20",
            Cfr: "ℭ",
            CHcy: "Ч",
            chcy: "ч",
            check: "✓",
            checkmark: "✓",
            Chi: "Χ",
            chi: "χ",
            circ: "ˆ",
            circeq: "≗",
            circlearrowleft: "↺",
            circlearrowright: "↻",
            circledast: "⊛",
            circledcirc: "⊚",
            circleddash: "⊝",
            CircleDot: "⊙",
            circledR: "\xae",
            circledS: "Ⓢ",
            CircleMinus: "⊖",
            CirclePlus: "⊕",
            CircleTimes: "⊗",
            cir: "○",
            cirE: "⧃",
            cire: "≗",
            cirfnint: "⨐",
            cirmid: "⫯",
            cirscir: "⧂",
            ClockwiseContourIntegral: "∲",
            CloseCurlyDoubleQuote: "”",
            CloseCurlyQuote: "’",
            clubs: "♣",
            clubsuit: "♣",
            colon: ":",
            Colon: "∷",
            Colone: "⩴",
            colone: "≔",
            coloneq: "≔",
            comma: ",",
            commat: "@",
            comp: "∁",
            compfn: "∘",
            complement: "∁",
            complexes: "ℂ",
            cong: "≅",
            congdot: "⩭",
            Congruent: "≡",
            conint: "∮",
            Conint: "∯",
            ContourIntegral: "∮",
            copf: "\uD835\uDD54",
            Copf: "ℂ",
            coprod: "∐",
            Coproduct: "∐",
            copy: "\xa9",
            COPY: "\xa9",
            copysr: "℗",
            CounterClockwiseContourIntegral: "∳",
            crarr: "↵",
            cross: "✗",
            Cross: "⨯",
            Cscr: "\uD835\uDC9E",
            cscr: "\uD835\uDCB8",
            csub: "⫏",
            csube: "⫑",
            csup: "⫐",
            csupe: "⫒",
            ctdot: "⋯",
            cudarrl: "⤸",
            cudarrr: "⤵",
            cuepr: "⋞",
            cuesc: "⋟",
            cularr: "↶",
            cularrp: "⤽",
            cupbrcap: "⩈",
            cupcap: "⩆",
            CupCap: "≍",
            cup: "∪",
            Cup: "⋓",
            cupcup: "⩊",
            cupdot: "⊍",
            cupor: "⩅",
            cups: "∪︀",
            curarr: "↷",
            curarrm: "⤼",
            curlyeqprec: "⋞",
            curlyeqsucc: "⋟",
            curlyvee: "⋎",
            curlywedge: "⋏",
            curren: "\xa4",
            curvearrowleft: "↶",
            curvearrowright: "↷",
            cuvee: "⋎",
            cuwed: "⋏",
            cwconint: "∲",
            cwint: "∱",
            cylcty: "⌭",
            dagger: "†",
            Dagger: "‡",
            daleth: "ℸ",
            darr: "↓",
            Darr: "↡",
            dArr: "⇓",
            dash: "‐",
            Dashv: "⫤",
            dashv: "⊣",
            dbkarow: "⤏",
            dblac: "˝",
            Dcaron: "Ď",
            dcaron: "ď",
            Dcy: "Д",
            dcy: "д",
            ddagger: "‡",
            ddarr: "⇊",
            DD: "ⅅ",
            dd: "ⅆ",
            DDotrahd: "⤑",
            ddotseq: "⩷",
            deg: "\xb0",
            Del: "∇",
            Delta: "Δ",
            delta: "δ",
            demptyv: "⦱",
            dfisht: "⥿",
            Dfr: "\uD835\uDD07",
            dfr: "\uD835\uDD21",
            dHar: "⥥",
            dharl: "⇃",
            dharr: "⇂",
            DiacriticalAcute: "\xb4",
            DiacriticalDot: "˙",
            DiacriticalDoubleAcute: "˝",
            DiacriticalGrave: "`",
            DiacriticalTilde: "˜",
            diam: "⋄",
            diamond: "⋄",
            Diamond: "⋄",
            diamondsuit: "♦",
            diams: "♦",
            die: "\xa8",
            DifferentialD: "ⅆ",
            digamma: "ϝ",
            disin: "⋲",
            div: "\xf7",
            divide: "\xf7",
            divideontimes: "⋇",
            divonx: "⋇",
            DJcy: "Ђ",
            djcy: "ђ",
            dlcorn: "⌞",
            dlcrop: "⌍",
            dollar: "$",
            Dopf: "\uD835\uDD3B",
            dopf: "\uD835\uDD55",
            Dot: "\xa8",
            dot: "˙",
            DotDot: "⃜",
            doteq: "≐",
            doteqdot: "≑",
            DotEqual: "≐",
            dotminus: "∸",
            dotplus: "∔",
            dotsquare: "⊡",
            doublebarwedge: "⌆",
            DoubleContourIntegral: "∯",
            DoubleDot: "\xa8",
            DoubleDownArrow: "⇓",
            DoubleLeftArrow: "⇐",
            DoubleLeftRightArrow: "⇔",
            DoubleLeftTee: "⫤",
            DoubleLongLeftArrow: "⟸",
            DoubleLongLeftRightArrow: "⟺",
            DoubleLongRightArrow: "⟹",
            DoubleRightArrow: "⇒",
            DoubleRightTee: "⊨",
            DoubleUpArrow: "⇑",
            DoubleUpDownArrow: "⇕",
            DoubleVerticalBar: "∥",
            DownArrowBar: "⤓",
            downarrow: "↓",
            DownArrow: "↓",
            Downarrow: "⇓",
            DownArrowUpArrow: "⇵",
            DownBreve: "̑",
            downdownarrows: "⇊",
            downharpoonleft: "⇃",
            downharpoonright: "⇂",
            DownLeftRightVector: "⥐",
            DownLeftTeeVector: "⥞",
            DownLeftVectorBar: "⥖",
            DownLeftVector: "↽",
            DownRightTeeVector: "⥟",
            DownRightVectorBar: "⥗",
            DownRightVector: "⇁",
            DownTeeArrow: "↧",
            DownTee: "⊤",
            drbkarow: "⤐",
            drcorn: "⌟",
            drcrop: "⌌",
            Dscr: "\uD835\uDC9F",
            dscr: "\uD835\uDCB9",
            DScy: "Ѕ",
            dscy: "ѕ",
            dsol: "⧶",
            Dstrok: "Đ",
            dstrok: "đ",
            dtdot: "⋱",
            dtri: "▿",
            dtrif: "▾",
            duarr: "⇵",
            duhar: "⥯",
            dwangle: "⦦",
            DZcy: "Џ",
            dzcy: "џ",
            dzigrarr: "⟿",
            Eacute: "\xc9",
            eacute: "\xe9",
            easter: "⩮",
            Ecaron: "Ě",
            ecaron: "ě",
            Ecirc: "\xca",
            ecirc: "\xea",
            ecir: "≖",
            ecolon: "≕",
            Ecy: "Э",
            ecy: "э",
            eDDot: "⩷",
            Edot: "Ė",
            edot: "ė",
            eDot: "≑",
            ee: "ⅇ",
            efDot: "≒",
            Efr: "\uD835\uDD08",
            efr: "\uD835\uDD22",
            eg: "⪚",
            Egrave: "\xc8",
            egrave: "\xe8",
            egs: "⪖",
            egsdot: "⪘",
            el: "⪙",
            Element: "∈",
            elinters: "⏧",
            ell: "ℓ",
            els: "⪕",
            elsdot: "⪗",
            Emacr: "Ē",
            emacr: "ē",
            empty: "∅",
            emptyset: "∅",
            EmptySmallSquare: "◻",
            emptyv: "∅",
            EmptyVerySmallSquare: "▫",
            emsp13: " ",
            emsp14: " ",
            emsp: " ",
            ENG: "Ŋ",
            eng: "ŋ",
            ensp: " ",
            Eogon: "Ę",
            eogon: "ę",
            Eopf: "\uD835\uDD3C",
            eopf: "\uD835\uDD56",
            epar: "⋕",
            eparsl: "⧣",
            eplus: "⩱",
            epsi: "ε",
            Epsilon: "Ε",
            epsilon: "ε",
            epsiv: "ϵ",
            eqcirc: "≖",
            eqcolon: "≕",
            eqsim: "≂",
            eqslantgtr: "⪖",
            eqslantless: "⪕",
            Equal: "⩵",
            equals: "=",
            EqualTilde: "≂",
            equest: "≟",
            Equilibrium: "⇌",
            equiv: "≡",
            equivDD: "⩸",
            eqvparsl: "⧥",
            erarr: "⥱",
            erDot: "≓",
            escr: "ℯ",
            Escr: "ℰ",
            esdot: "≐",
            Esim: "⩳",
            esim: "≂",
            Eta: "Η",
            eta: "η",
            ETH: "\xd0",
            eth: "\xf0",
            Euml: "\xcb",
            euml: "\xeb",
            euro: "€",
            excl: "!",
            exist: "∃",
            Exists: "∃",
            expectation: "ℰ",
            exponentiale: "ⅇ",
            ExponentialE: "ⅇ",
            fallingdotseq: "≒",
            Fcy: "Ф",
            fcy: "ф",
            female: "♀",
            ffilig: "ﬃ",
            fflig: "ﬀ",
            ffllig: "ﬄ",
            Ffr: "\uD835\uDD09",
            ffr: "\uD835\uDD23",
            filig: "ﬁ",
            FilledSmallSquare: "◼",
            FilledVerySmallSquare: "▪",
            fjlig: "fj",
            flat: "♭",
            fllig: "ﬂ",
            fltns: "▱",
            fnof: "ƒ",
            Fopf: "\uD835\uDD3D",
            fopf: "\uD835\uDD57",
            forall: "∀",
            ForAll: "∀",
            fork: "⋔",
            forkv: "⫙",
            Fouriertrf: "ℱ",
            fpartint: "⨍",
            frac12: "\xbd",
            frac13: "⅓",
            frac14: "\xbc",
            frac15: "⅕",
            frac16: "⅙",
            frac18: "⅛",
            frac23: "⅔",
            frac25: "⅖",
            frac34: "\xbe",
            frac35: "⅗",
            frac38: "⅜",
            frac45: "⅘",
            frac56: "⅚",
            frac58: "⅝",
            frac78: "⅞",
            frasl: "⁄",
            frown: "⌢",
            fscr: "\uD835\uDCBB",
            Fscr: "ℱ",
            gacute: "ǵ",
            Gamma: "Γ",
            gamma: "γ",
            Gammad: "Ϝ",
            gammad: "ϝ",
            gap: "⪆",
            Gbreve: "Ğ",
            gbreve: "ğ",
            Gcedil: "Ģ",
            Gcirc: "Ĝ",
            gcirc: "ĝ",
            Gcy: "Г",
            gcy: "г",
            Gdot: "Ġ",
            gdot: "ġ",
            ge: "≥",
            gE: "≧",
            gEl: "⪌",
            gel: "⋛",
            geq: "≥",
            geqq: "≧",
            geqslant: "⩾",
            gescc: "⪩",
            ges: "⩾",
            gesdot: "⪀",
            gesdoto: "⪂",
            gesdotol: "⪄",
            gesl: "⋛︀",
            gesles: "⪔",
            Gfr: "\uD835\uDD0A",
            gfr: "\uD835\uDD24",
            gg: "≫",
            Gg: "⋙",
            ggg: "⋙",
            gimel: "ℷ",
            GJcy: "Ѓ",
            gjcy: "ѓ",
            gla: "⪥",
            gl: "≷",
            glE: "⪒",
            glj: "⪤",
            gnap: "⪊",
            gnapprox: "⪊",
            gne: "⪈",
            gnE: "≩",
            gneq: "⪈",
            gneqq: "≩",
            gnsim: "⋧",
            Gopf: "\uD835\uDD3E",
            gopf: "\uD835\uDD58",
            grave: "`",
            GreaterEqual: "≥",
            GreaterEqualLess: "⋛",
            GreaterFullEqual: "≧",
            GreaterGreater: "⪢",
            GreaterLess: "≷",
            GreaterSlantEqual: "⩾",
            GreaterTilde: "≳",
            Gscr: "\uD835\uDCA2",
            gscr: "ℊ",
            gsim: "≳",
            gsime: "⪎",
            gsiml: "⪐",
            gtcc: "⪧",
            gtcir: "⩺",
            gt: ">",
            GT: ">",
            Gt: "≫",
            gtdot: "⋗",
            gtlPar: "⦕",
            gtquest: "⩼",
            gtrapprox: "⪆",
            gtrarr: "⥸",
            gtrdot: "⋗",
            gtreqless: "⋛",
            gtreqqless: "⪌",
            gtrless: "≷",
            gtrsim: "≳",
            gvertneqq: "≩︀",
            gvnE: "≩︀",
            Hacek: "ˇ",
            hairsp: " ",
            half: "\xbd",
            hamilt: "ℋ",
            HARDcy: "Ъ",
            hardcy: "ъ",
            harrcir: "⥈",
            harr: "↔",
            hArr: "⇔",
            harrw: "↭",
            Hat: "^",
            hbar: "ℏ",
            Hcirc: "Ĥ",
            hcirc: "ĥ",
            hearts: "♥",
            heartsuit: "♥",
            hellip: "…",
            hercon: "⊹",
            hfr: "\uD835\uDD25",
            Hfr: "ℌ",
            HilbertSpace: "ℋ",
            hksearow: "⤥",
            hkswarow: "⤦",
            hoarr: "⇿",
            homtht: "∻",
            hookleftarrow: "↩",
            hookrightarrow: "↪",
            hopf: "\uD835\uDD59",
            Hopf: "ℍ",
            horbar: "―",
            HorizontalLine: "─",
            hscr: "\uD835\uDCBD",
            Hscr: "ℋ",
            hslash: "ℏ",
            Hstrok: "Ħ",
            hstrok: "ħ",
            HumpDownHump: "≎",
            HumpEqual: "≏",
            hybull: "⁃",
            hyphen: "‐",
            Iacute: "\xcd",
            iacute: "\xed",
            ic: "⁣",
            Icirc: "\xce",
            icirc: "\xee",
            Icy: "И",
            icy: "и",
            Idot: "İ",
            IEcy: "Е",
            iecy: "е",
            iexcl: "\xa1",
            iff: "⇔",
            ifr: "\uD835\uDD26",
            Ifr: "ℑ",
            Igrave: "\xcc",
            igrave: "\xec",
            ii: "ⅈ",
            iiiint: "⨌",
            iiint: "∭",
            iinfin: "⧜",
            iiota: "℩",
            IJlig: "Ĳ",
            ijlig: "ĳ",
            Imacr: "Ī",
            imacr: "ī",
            image: "ℑ",
            ImaginaryI: "ⅈ",
            imagline: "ℐ",
            imagpart: "ℑ",
            imath: "ı",
            Im: "ℑ",
            imof: "⊷",
            imped: "Ƶ",
            Implies: "⇒",
            incare: "℅",
            in: "∈",
            infin: "∞",
            infintie: "⧝",
            inodot: "ı",
            intcal: "⊺",
            int: "∫",
            Int: "∬",
            integers: "ℤ",
            Integral: "∫",
            intercal: "⊺",
            Intersection: "⋂",
            intlarhk: "⨗",
            intprod: "⨼",
            InvisibleComma: "⁣",
            InvisibleTimes: "⁢",
            IOcy: "Ё",
            iocy: "ё",
            Iogon: "Į",
            iogon: "į",
            Iopf: "\uD835\uDD40",
            iopf: "\uD835\uDD5A",
            Iota: "Ι",
            iota: "ι",
            iprod: "⨼",
            iquest: "\xbf",
            iscr: "\uD835\uDCBE",
            Iscr: "ℐ",
            isin: "∈",
            isindot: "⋵",
            isinE: "⋹",
            isins: "⋴",
            isinsv: "⋳",
            isinv: "∈",
            it: "⁢",
            Itilde: "Ĩ",
            itilde: "ĩ",
            Iukcy: "І",
            iukcy: "і",
            Iuml: "\xcf",
            iuml: "\xef",
            Jcirc: "Ĵ",
            jcirc: "ĵ",
            Jcy: "Й",
            jcy: "й",
            Jfr: "\uD835\uDD0D",
            jfr: "\uD835\uDD27",
            jmath: "ȷ",
            Jopf: "\uD835\uDD41",
            jopf: "\uD835\uDD5B",
            Jscr: "\uD835\uDCA5",
            jscr: "\uD835\uDCBF",
            Jsercy: "Ј",
            jsercy: "ј",
            Jukcy: "Є",
            jukcy: "є",
            Kappa: "Κ",
            kappa: "κ",
            kappav: "ϰ",
            Kcedil: "Ķ",
            kcedil: "ķ",
            Kcy: "К",
            kcy: "к",
            Kfr: "\uD835\uDD0E",
            kfr: "\uD835\uDD28",
            kgreen: "ĸ",
            KHcy: "Х",
            khcy: "х",
            KJcy: "Ќ",
            kjcy: "ќ",
            Kopf: "\uD835\uDD42",
            kopf: "\uD835\uDD5C",
            Kscr: "\uD835\uDCA6",
            kscr: "\uD835\uDCC0",
            lAarr: "⇚",
            Lacute: "Ĺ",
            lacute: "ĺ",
            laemptyv: "⦴",
            lagran: "ℒ",
            Lambda: "Λ",
            lambda: "λ",
            lang: "⟨",
            Lang: "⟪",
            langd: "⦑",
            langle: "⟨",
            lap: "⪅",
            Laplacetrf: "ℒ",
            laquo: "\xab",
            larrb: "⇤",
            larrbfs: "⤟",
            larr: "←",
            Larr: "↞",
            lArr: "⇐",
            larrfs: "⤝",
            larrhk: "↩",
            larrlp: "↫",
            larrpl: "⤹",
            larrsim: "⥳",
            larrtl: "↢",
            latail: "⤙",
            lAtail: "⤛",
            lat: "⪫",
            late: "⪭",
            lates: "⪭︀",
            lbarr: "⤌",
            lBarr: "⤎",
            lbbrk: "❲",
            lbrace: "{",
            lbrack: "[",
            lbrke: "⦋",
            lbrksld: "⦏",
            lbrkslu: "⦍",
            Lcaron: "Ľ",
            lcaron: "ľ",
            Lcedil: "Ļ",
            lcedil: "ļ",
            lceil: "⌈",
            lcub: "{",
            Lcy: "Л",
            lcy: "л",
            ldca: "⤶",
            ldquo: "“",
            ldquor: "„",
            ldrdhar: "⥧",
            ldrushar: "⥋",
            ldsh: "↲",
            le: "≤",
            lE: "≦",
            LeftAngleBracket: "⟨",
            LeftArrowBar: "⇤",
            leftarrow: "←",
            LeftArrow: "←",
            Leftarrow: "⇐",
            LeftArrowRightArrow: "⇆",
            leftarrowtail: "↢",
            LeftCeiling: "⌈",
            LeftDoubleBracket: "⟦",
            LeftDownTeeVector: "⥡",
            LeftDownVectorBar: "⥙",
            LeftDownVector: "⇃",
            LeftFloor: "⌊",
            leftharpoondown: "↽",
            leftharpoonup: "↼",
            leftleftarrows: "⇇",
            leftrightarrow: "↔",
            LeftRightArrow: "↔",
            Leftrightarrow: "⇔",
            leftrightarrows: "⇆",
            leftrightharpoons: "⇋",
            leftrightsquigarrow: "↭",
            LeftRightVector: "⥎",
            LeftTeeArrow: "↤",
            LeftTee: "⊣",
            LeftTeeVector: "⥚",
            leftthreetimes: "⋋",
            LeftTriangleBar: "⧏",
            LeftTriangle: "⊲",
            LeftTriangleEqual: "⊴",
            LeftUpDownVector: "⥑",
            LeftUpTeeVector: "⥠",
            LeftUpVectorBar: "⥘",
            LeftUpVector: "↿",
            LeftVectorBar: "⥒",
            LeftVector: "↼",
            lEg: "⪋",
            leg: "⋚",
            leq: "≤",
            leqq: "≦",
            leqslant: "⩽",
            lescc: "⪨",
            les: "⩽",
            lesdot: "⩿",
            lesdoto: "⪁",
            lesdotor: "⪃",
            lesg: "⋚︀",
            lesges: "⪓",
            lessapprox: "⪅",
            lessdot: "⋖",
            lesseqgtr: "⋚",
            lesseqqgtr: "⪋",
            LessEqualGreater: "⋚",
            LessFullEqual: "≦",
            LessGreater: "≶",
            lessgtr: "≶",
            LessLess: "⪡",
            lesssim: "≲",
            LessSlantEqual: "⩽",
            LessTilde: "≲",
            lfisht: "⥼",
            lfloor: "⌊",
            Lfr: "\uD835\uDD0F",
            lfr: "\uD835\uDD29",
            lg: "≶",
            lgE: "⪑",
            lHar: "⥢",
            lhard: "↽",
            lharu: "↼",
            lharul: "⥪",
            lhblk: "▄",
            LJcy: "Љ",
            ljcy: "љ",
            llarr: "⇇",
            ll: "≪",
            Ll: "⋘",
            llcorner: "⌞",
            Lleftarrow: "⇚",
            llhard: "⥫",
            lltri: "◺",
            Lmidot: "Ŀ",
            lmidot: "ŀ",
            lmoustache: "⎰",
            lmoust: "⎰",
            lnap: "⪉",
            lnapprox: "⪉",
            lne: "⪇",
            lnE: "≨",
            lneq: "⪇",
            lneqq: "≨",
            lnsim: "⋦",
            loang: "⟬",
            loarr: "⇽",
            lobrk: "⟦",
            longleftarrow: "⟵",
            LongLeftArrow: "⟵",
            Longleftarrow: "⟸",
            longleftrightarrow: "⟷",
            LongLeftRightArrow: "⟷",
            Longleftrightarrow: "⟺",
            longmapsto: "⟼",
            longrightarrow: "⟶",
            LongRightArrow: "⟶",
            Longrightarrow: "⟹",
            looparrowleft: "↫",
            looparrowright: "↬",
            lopar: "⦅",
            Lopf: "\uD835\uDD43",
            lopf: "\uD835\uDD5D",
            loplus: "⨭",
            lotimes: "⨴",
            lowast: "∗",
            lowbar: "_",
            LowerLeftArrow: "↙",
            LowerRightArrow: "↘",
            loz: "◊",
            lozenge: "◊",
            lozf: "⧫",
            lpar: "(",
            lparlt: "⦓",
            lrarr: "⇆",
            lrcorner: "⌟",
            lrhar: "⇋",
            lrhard: "⥭",
            lrm: "‎",
            lrtri: "⊿",
            lsaquo: "‹",
            lscr: "\uD835\uDCC1",
            Lscr: "ℒ",
            lsh: "↰",
            Lsh: "↰",
            lsim: "≲",
            lsime: "⪍",
            lsimg: "⪏",
            lsqb: "[",
            lsquo: "‘",
            lsquor: "‚",
            Lstrok: "Ł",
            lstrok: "ł",
            ltcc: "⪦",
            ltcir: "⩹",
            lt: "<",
            LT: "<",
            Lt: "≪",
            ltdot: "⋖",
            lthree: "⋋",
            ltimes: "⋉",
            ltlarr: "⥶",
            ltquest: "⩻",
            ltri: "◃",
            ltrie: "⊴",
            ltrif: "◂",
            ltrPar: "⦖",
            lurdshar: "⥊",
            luruhar: "⥦",
            lvertneqq: "≨︀",
            lvnE: "≨︀",
            macr: "\xaf",
            male: "♂",
            malt: "✠",
            maltese: "✠",
            Map: "⤅",
            map: "↦",
            mapsto: "↦",
            mapstodown: "↧",
            mapstoleft: "↤",
            mapstoup: "↥",
            marker: "▮",
            mcomma: "⨩",
            Mcy: "М",
            mcy: "м",
            mdash: "—",
            mDDot: "∺",
            measuredangle: "∡",
            MediumSpace: " ",
            Mellintrf: "ℳ",
            Mfr: "\uD835\uDD10",
            mfr: "\uD835\uDD2A",
            mho: "℧",
            micro: "\xb5",
            midast: "*",
            midcir: "⫰",
            mid: "∣",
            middot: "\xb7",
            minusb: "⊟",
            minus: "−",
            minusd: "∸",
            minusdu: "⨪",
            MinusPlus: "∓",
            mlcp: "⫛",
            mldr: "…",
            mnplus: "∓",
            models: "⊧",
            Mopf: "\uD835\uDD44",
            mopf: "\uD835\uDD5E",
            mp: "∓",
            mscr: "\uD835\uDCC2",
            Mscr: "ℳ",
            mstpos: "∾",
            Mu: "Μ",
            mu: "μ",
            multimap: "⊸",
            mumap: "⊸",
            nabla: "∇",
            Nacute: "Ń",
            nacute: "ń",
            nang: "∠⃒",
            nap: "≉",
            napE: "⩰̸",
            napid: "≋̸",
            napos: "ŉ",
            napprox: "≉",
            natural: "♮",
            naturals: "ℕ",
            natur: "♮",
            nbsp: "\xa0",
            nbump: "≎̸",
            nbumpe: "≏̸",
            ncap: "⩃",
            Ncaron: "Ň",
            ncaron: "ň",
            Ncedil: "Ņ",
            ncedil: "ņ",
            ncong: "≇",
            ncongdot: "⩭̸",
            ncup: "⩂",
            Ncy: "Н",
            ncy: "н",
            ndash: "–",
            nearhk: "⤤",
            nearr: "↗",
            neArr: "⇗",
            nearrow: "↗",
            ne: "≠",
            nedot: "≐̸",
            NegativeMediumSpace: "​",
            NegativeThickSpace: "​",
            NegativeThinSpace: "​",
            NegativeVeryThinSpace: "​",
            nequiv: "≢",
            nesear: "⤨",
            nesim: "≂̸",
            NestedGreaterGreater: "≫",
            NestedLessLess: "≪",
            NewLine: "\n",
            nexist: "∄",
            nexists: "∄",
            Nfr: "\uD835\uDD11",
            nfr: "\uD835\uDD2B",
            ngE: "≧̸",
            nge: "≱",
            ngeq: "≱",
            ngeqq: "≧̸",
            ngeqslant: "⩾̸",
            nges: "⩾̸",
            nGg: "⋙̸",
            ngsim: "≵",
            nGt: "≫⃒",
            ngt: "≯",
            ngtr: "≯",
            nGtv: "≫̸",
            nharr: "↮",
            nhArr: "⇎",
            nhpar: "⫲",
            ni: "∋",
            nis: "⋼",
            nisd: "⋺",
            niv: "∋",
            NJcy: "Њ",
            njcy: "њ",
            nlarr: "↚",
            nlArr: "⇍",
            nldr: "‥",
            nlE: "≦̸",
            nle: "≰",
            nleftarrow: "↚",
            nLeftarrow: "⇍",
            nleftrightarrow: "↮",
            nLeftrightarrow: "⇎",
            nleq: "≰",
            nleqq: "≦̸",
            nleqslant: "⩽̸",
            nles: "⩽̸",
            nless: "≮",
            nLl: "⋘̸",
            nlsim: "≴",
            nLt: "≪⃒",
            nlt: "≮",
            nltri: "⋪",
            nltrie: "⋬",
            nLtv: "≪̸",
            nmid: "∤",
            NoBreak: "⁠",
            NonBreakingSpace: "\xa0",
            nopf: "\uD835\uDD5F",
            Nopf: "ℕ",
            Not: "⫬",
            not: "\xac",
            NotCongruent: "≢",
            NotCupCap: "≭",
            NotDoubleVerticalBar: "∦",
            NotElement: "∉",
            NotEqual: "≠",
            NotEqualTilde: "≂̸",
            NotExists: "∄",
            NotGreater: "≯",
            NotGreaterEqual: "≱",
            NotGreaterFullEqual: "≧̸",
            NotGreaterGreater: "≫̸",
            NotGreaterLess: "≹",
            NotGreaterSlantEqual: "⩾̸",
            NotGreaterTilde: "≵",
            NotHumpDownHump: "≎̸",
            NotHumpEqual: "≏̸",
            notin: "∉",
            notindot: "⋵̸",
            notinE: "⋹̸",
            notinva: "∉",
            notinvb: "⋷",
            notinvc: "⋶",
            NotLeftTriangleBar: "⧏̸",
            NotLeftTriangle: "⋪",
            NotLeftTriangleEqual: "⋬",
            NotLess: "≮",
            NotLessEqual: "≰",
            NotLessGreater: "≸",
            NotLessLess: "≪̸",
            NotLessSlantEqual: "⩽̸",
            NotLessTilde: "≴",
            NotNestedGreaterGreater: "⪢̸",
            NotNestedLessLess: "⪡̸",
            notni: "∌",
            notniva: "∌",
            notnivb: "⋾",
            notnivc: "⋽",
            NotPrecedes: "⊀",
            NotPrecedesEqual: "⪯̸",
            NotPrecedesSlantEqual: "⋠",
            NotReverseElement: "∌",
            NotRightTriangleBar: "⧐̸",
            NotRightTriangle: "⋫",
            NotRightTriangleEqual: "⋭",
            NotSquareSubset: "⊏̸",
            NotSquareSubsetEqual: "⋢",
            NotSquareSuperset: "⊐̸",
            NotSquareSupersetEqual: "⋣",
            NotSubset: "⊂⃒",
            NotSubsetEqual: "⊈",
            NotSucceeds: "⊁",
            NotSucceedsEqual: "⪰̸",
            NotSucceedsSlantEqual: "⋡",
            NotSucceedsTilde: "≿̸",
            NotSuperset: "⊃⃒",
            NotSupersetEqual: "⊉",
            NotTilde: "≁",
            NotTildeEqual: "≄",
            NotTildeFullEqual: "≇",
            NotTildeTilde: "≉",
            NotVerticalBar: "∤",
            nparallel: "∦",
            npar: "∦",
            nparsl: "⫽⃥",
            npart: "∂̸",
            npolint: "⨔",
            npr: "⊀",
            nprcue: "⋠",
            nprec: "⊀",
            npreceq: "⪯̸",
            npre: "⪯̸",
            nrarrc: "⤳̸",
            nrarr: "↛",
            nrArr: "⇏",
            nrarrw: "↝̸",
            nrightarrow: "↛",
            nRightarrow: "⇏",
            nrtri: "⋫",
            nrtrie: "⋭",
            nsc: "⊁",
            nsccue: "⋡",
            nsce: "⪰̸",
            Nscr: "\uD835\uDCA9",
            nscr: "\uD835\uDCC3",
            nshortmid: "∤",
            nshortparallel: "∦",
            nsim: "≁",
            nsime: "≄",
            nsimeq: "≄",
            nsmid: "∤",
            nspar: "∦",
            nsqsube: "⋢",
            nsqsupe: "⋣",
            nsub: "⊄",
            nsubE: "⫅̸",
            nsube: "⊈",
            nsubset: "⊂⃒",
            nsubseteq: "⊈",
            nsubseteqq: "⫅̸",
            nsucc: "⊁",
            nsucceq: "⪰̸",
            nsup: "⊅",
            nsupE: "⫆̸",
            nsupe: "⊉",
            nsupset: "⊃⃒",
            nsupseteq: "⊉",
            nsupseteqq: "⫆̸",
            ntgl: "≹",
            Ntilde: "\xd1",
            ntilde: "\xf1",
            ntlg: "≸",
            ntriangleleft: "⋪",
            ntrianglelefteq: "⋬",
            ntriangleright: "⋫",
            ntrianglerighteq: "⋭",
            Nu: "Ν",
            nu: "ν",
            num: "#",
            numero: "№",
            numsp: " ",
            nvap: "≍⃒",
            nvdash: "⊬",
            nvDash: "⊭",
            nVdash: "⊮",
            nVDash: "⊯",
            nvge: "≥⃒",
            nvgt: ">⃒",
            nvHarr: "⤄",
            nvinfin: "⧞",
            nvlArr: "⤂",
            nvle: "≤⃒",
            nvlt: "<⃒",
            nvltrie: "⊴⃒",
            nvrArr: "⤃",
            nvrtrie: "⊵⃒",
            nvsim: "∼⃒",
            nwarhk: "⤣",
            nwarr: "↖",
            nwArr: "⇖",
            nwarrow: "↖",
            nwnear: "⤧",
            Oacute: "\xd3",
            oacute: "\xf3",
            oast: "⊛",
            Ocirc: "\xd4",
            ocirc: "\xf4",
            ocir: "⊚",
            Ocy: "О",
            ocy: "о",
            odash: "⊝",
            Odblac: "Ő",
            odblac: "ő",
            odiv: "⨸",
            odot: "⊙",
            odsold: "⦼",
            OElig: "Œ",
            oelig: "œ",
            ofcir: "⦿",
            Ofr: "\uD835\uDD12",
            ofr: "\uD835\uDD2C",
            ogon: "˛",
            Ograve: "\xd2",
            ograve: "\xf2",
            ogt: "⧁",
            ohbar: "⦵",
            ohm: "Ω",
            oint: "∮",
            olarr: "↺",
            olcir: "⦾",
            olcross: "⦻",
            oline: "‾",
            olt: "⧀",
            Omacr: "Ō",
            omacr: "ō",
            Omega: "Ω",
            omega: "ω",
            Omicron: "Ο",
            omicron: "ο",
            omid: "⦶",
            ominus: "⊖",
            Oopf: "\uD835\uDD46",
            oopf: "\uD835\uDD60",
            opar: "⦷",
            OpenCurlyDoubleQuote: "“",
            OpenCurlyQuote: "‘",
            operp: "⦹",
            oplus: "⊕",
            orarr: "↻",
            Or: "⩔",
            or: "∨",
            ord: "⩝",
            order: "ℴ",
            orderof: "ℴ",
            ordf: "\xaa",
            ordm: "\xba",
            origof: "⊶",
            oror: "⩖",
            orslope: "⩗",
            orv: "⩛",
            oS: "Ⓢ",
            Oscr: "\uD835\uDCAA",
            oscr: "ℴ",
            Oslash: "\xd8",
            oslash: "\xf8",
            osol: "⊘",
            Otilde: "\xd5",
            otilde: "\xf5",
            otimesas: "⨶",
            Otimes: "⨷",
            otimes: "⊗",
            Ouml: "\xd6",
            ouml: "\xf6",
            ovbar: "⌽",
            OverBar: "‾",
            OverBrace: "⏞",
            OverBracket: "⎴",
            OverParenthesis: "⏜",
            para: "\xb6",
            parallel: "∥",
            par: "∥",
            parsim: "⫳",
            parsl: "⫽",
            part: "∂",
            PartialD: "∂",
            Pcy: "П",
            pcy: "п",
            percnt: "%",
            period: ".",
            permil: "‰",
            perp: "⊥",
            pertenk: "‱",
            Pfr: "\uD835\uDD13",
            pfr: "\uD835\uDD2D",
            Phi: "Φ",
            phi: "φ",
            phiv: "ϕ",
            phmmat: "ℳ",
            phone: "☎",
            Pi: "Π",
            pi: "π",
            pitchfork: "⋔",
            piv: "ϖ",
            planck: "ℏ",
            planckh: "ℎ",
            plankv: "ℏ",
            plusacir: "⨣",
            plusb: "⊞",
            pluscir: "⨢",
            plus: "+",
            plusdo: "∔",
            plusdu: "⨥",
            pluse: "⩲",
            PlusMinus: "\xb1",
            plusmn: "\xb1",
            plussim: "⨦",
            plustwo: "⨧",
            pm: "\xb1",
            Poincareplane: "ℌ",
            pointint: "⨕",
            popf: "\uD835\uDD61",
            Popf: "ℙ",
            pound: "\xa3",
            prap: "⪷",
            Pr: "⪻",
            pr: "≺",
            prcue: "≼",
            precapprox: "⪷",
            prec: "≺",
            preccurlyeq: "≼",
            Precedes: "≺",
            PrecedesEqual: "⪯",
            PrecedesSlantEqual: "≼",
            PrecedesTilde: "≾",
            preceq: "⪯",
            precnapprox: "⪹",
            precneqq: "⪵",
            precnsim: "⋨",
            pre: "⪯",
            prE: "⪳",
            precsim: "≾",
            prime: "′",
            Prime: "″",
            primes: "ℙ",
            prnap: "⪹",
            prnE: "⪵",
            prnsim: "⋨",
            prod: "∏",
            Product: "∏",
            profalar: "⌮",
            profline: "⌒",
            profsurf: "⌓",
            prop: "∝",
            Proportional: "∝",
            Proportion: "∷",
            propto: "∝",
            prsim: "≾",
            prurel: "⊰",
            Pscr: "\uD835\uDCAB",
            pscr: "\uD835\uDCC5",
            Psi: "Ψ",
            psi: "ψ",
            puncsp: " ",
            Qfr: "\uD835\uDD14",
            qfr: "\uD835\uDD2E",
            qint: "⨌",
            qopf: "\uD835\uDD62",
            Qopf: "ℚ",
            qprime: "⁗",
            Qscr: "\uD835\uDCAC",
            qscr: "\uD835\uDCC6",
            quaternions: "ℍ",
            quatint: "⨖",
            quest: "?",
            questeq: "≟",
            quot: '"',
            QUOT: '"',
            rAarr: "⇛",
            race: "∽̱",
            Racute: "Ŕ",
            racute: "ŕ",
            radic: "√",
            raemptyv: "⦳",
            rang: "⟩",
            Rang: "⟫",
            rangd: "⦒",
            range: "⦥",
            rangle: "⟩",
            raquo: "\xbb",
            rarrap: "⥵",
            rarrb: "⇥",
            rarrbfs: "⤠",
            rarrc: "⤳",
            rarr: "→",
            Rarr: "↠",
            rArr: "⇒",
            rarrfs: "⤞",
            rarrhk: "↪",
            rarrlp: "↬",
            rarrpl: "⥅",
            rarrsim: "⥴",
            Rarrtl: "⤖",
            rarrtl: "↣",
            rarrw: "↝",
            ratail: "⤚",
            rAtail: "⤜",
            ratio: "∶",
            rationals: "ℚ",
            rbarr: "⤍",
            rBarr: "⤏",
            RBarr: "⤐",
            rbbrk: "❳",
            rbrace: "}",
            rbrack: "]",
            rbrke: "⦌",
            rbrksld: "⦎",
            rbrkslu: "⦐",
            Rcaron: "Ř",
            rcaron: "ř",
            Rcedil: "Ŗ",
            rcedil: "ŗ",
            rceil: "⌉",
            rcub: "}",
            Rcy: "Р",
            rcy: "р",
            rdca: "⤷",
            rdldhar: "⥩",
            rdquo: "”",
            rdquor: "”",
            rdsh: "↳",
            real: "ℜ",
            realine: "ℛ",
            realpart: "ℜ",
            reals: "ℝ",
            Re: "ℜ",
            rect: "▭",
            reg: "\xae",
            REG: "\xae",
            ReverseElement: "∋",
            ReverseEquilibrium: "⇋",
            ReverseUpEquilibrium: "⥯",
            rfisht: "⥽",
            rfloor: "⌋",
            rfr: "\uD835\uDD2F",
            Rfr: "ℜ",
            rHar: "⥤",
            rhard: "⇁",
            rharu: "⇀",
            rharul: "⥬",
            Rho: "Ρ",
            rho: "ρ",
            rhov: "ϱ",
            RightAngleBracket: "⟩",
            RightArrowBar: "⇥",
            rightarrow: "→",
            RightArrow: "→",
            Rightarrow: "⇒",
            RightArrowLeftArrow: "⇄",
            rightarrowtail: "↣",
            RightCeiling: "⌉",
            RightDoubleBracket: "⟧",
            RightDownTeeVector: "⥝",
            RightDownVectorBar: "⥕",
            RightDownVector: "⇂",
            RightFloor: "⌋",
            rightharpoondown: "⇁",
            rightharpoonup: "⇀",
            rightleftarrows: "⇄",
            rightleftharpoons: "⇌",
            rightrightarrows: "⇉",
            rightsquigarrow: "↝",
            RightTeeArrow: "↦",
            RightTee: "⊢",
            RightTeeVector: "⥛",
            rightthreetimes: "⋌",
            RightTriangleBar: "⧐",
            RightTriangle: "⊳",
            RightTriangleEqual: "⊵",
            RightUpDownVector: "⥏",
            RightUpTeeVector: "⥜",
            RightUpVectorBar: "⥔",
            RightUpVector: "↾",
            RightVectorBar: "⥓",
            RightVector: "⇀",
            ring: "˚",
            risingdotseq: "≓",
            rlarr: "⇄",
            rlhar: "⇌",
            rlm: "‏",
            rmoustache: "⎱",
            rmoust: "⎱",
            rnmid: "⫮",
            roang: "⟭",
            roarr: "⇾",
            robrk: "⟧",
            ropar: "⦆",
            ropf: "\uD835\uDD63",
            Ropf: "ℝ",
            roplus: "⨮",
            rotimes: "⨵",
            RoundImplies: "⥰",
            rpar: ")",
            rpargt: "⦔",
            rppolint: "⨒",
            rrarr: "⇉",
            Rrightarrow: "⇛",
            rsaquo: "›",
            rscr: "\uD835\uDCC7",
            Rscr: "ℛ",
            rsh: "↱",
            Rsh: "↱",
            rsqb: "]",
            rsquo: "’",
            rsquor: "’",
            rthree: "⋌",
            rtimes: "⋊",
            rtri: "▹",
            rtrie: "⊵",
            rtrif: "▸",
            rtriltri: "⧎",
            RuleDelayed: "⧴",
            ruluhar: "⥨",
            rx: "℞",
            Sacute: "Ś",
            sacute: "ś",
            sbquo: "‚",
            scap: "⪸",
            Scaron: "Š",
            scaron: "š",
            Sc: "⪼",
            sc: "≻",
            sccue: "≽",
            sce: "⪰",
            scE: "⪴",
            Scedil: "Ş",
            scedil: "ş",
            Scirc: "Ŝ",
            scirc: "ŝ",
            scnap: "⪺",
            scnE: "⪶",
            scnsim: "⋩",
            scpolint: "⨓",
            scsim: "≿",
            Scy: "С",
            scy: "с",
            sdotb: "⊡",
            sdot: "⋅",
            sdote: "⩦",
            searhk: "⤥",
            searr: "↘",
            seArr: "⇘",
            searrow: "↘",
            sect: "\xa7",
            semi: ";",
            seswar: "⤩",
            setminus: "∖",
            setmn: "∖",
            sext: "✶",
            Sfr: "\uD835\uDD16",
            sfr: "\uD835\uDD30",
            sfrown: "⌢",
            sharp: "♯",
            SHCHcy: "Щ",
            shchcy: "щ",
            SHcy: "Ш",
            shcy: "ш",
            ShortDownArrow: "↓",
            ShortLeftArrow: "←",
            shortmid: "∣",
            shortparallel: "∥",
            ShortRightArrow: "→",
            ShortUpArrow: "↑",
            shy: "\xad",
            Sigma: "Σ",
            sigma: "σ",
            sigmaf: "ς",
            sigmav: "ς",
            sim: "∼",
            simdot: "⩪",
            sime: "≃",
            simeq: "≃",
            simg: "⪞",
            simgE: "⪠",
            siml: "⪝",
            simlE: "⪟",
            simne: "≆",
            simplus: "⨤",
            simrarr: "⥲",
            slarr: "←",
            SmallCircle: "∘",
            smallsetminus: "∖",
            smashp: "⨳",
            smeparsl: "⧤",
            smid: "∣",
            smile: "⌣",
            smt: "⪪",
            smte: "⪬",
            smtes: "⪬︀",
            SOFTcy: "Ь",
            softcy: "ь",
            solbar: "⌿",
            solb: "⧄",
            sol: "/",
            Sopf: "\uD835\uDD4A",
            sopf: "\uD835\uDD64",
            spades: "♠",
            spadesuit: "♠",
            spar: "∥",
            sqcap: "⊓",
            sqcaps: "⊓︀",
            sqcup: "⊔",
            sqcups: "⊔︀",
            Sqrt: "√",
            sqsub: "⊏",
            sqsube: "⊑",
            sqsubset: "⊏",
            sqsubseteq: "⊑",
            sqsup: "⊐",
            sqsupe: "⊒",
            sqsupset: "⊐",
            sqsupseteq: "⊒",
            square: "□",
            Square: "□",
            SquareIntersection: "⊓",
            SquareSubset: "⊏",
            SquareSubsetEqual: "⊑",
            SquareSuperset: "⊐",
            SquareSupersetEqual: "⊒",
            SquareUnion: "⊔",
            squarf: "▪",
            squ: "□",
            squf: "▪",
            srarr: "→",
            Sscr: "\uD835\uDCAE",
            sscr: "\uD835\uDCC8",
            ssetmn: "∖",
            ssmile: "⌣",
            sstarf: "⋆",
            Star: "⋆",
            star: "☆",
            starf: "★",
            straightepsilon: "ϵ",
            straightphi: "ϕ",
            strns: "\xaf",
            sub: "⊂",
            Sub: "⋐",
            subdot: "⪽",
            subE: "⫅",
            sube: "⊆",
            subedot: "⫃",
            submult: "⫁",
            subnE: "⫋",
            subne: "⊊",
            subplus: "⪿",
            subrarr: "⥹",
            subset: "⊂",
            Subset: "⋐",
            subseteq: "⊆",
            subseteqq: "⫅",
            SubsetEqual: "⊆",
            subsetneq: "⊊",
            subsetneqq: "⫋",
            subsim: "⫇",
            subsub: "⫕",
            subsup: "⫓",
            succapprox: "⪸",
            succ: "≻",
            succcurlyeq: "≽",
            Succeeds: "≻",
            SucceedsEqual: "⪰",
            SucceedsSlantEqual: "≽",
            SucceedsTilde: "≿",
            succeq: "⪰",
            succnapprox: "⪺",
            succneqq: "⪶",
            succnsim: "⋩",
            succsim: "≿",
            SuchThat: "∋",
            sum: "∑",
            Sum: "∑",
            sung: "♪",
            sup1: "\xb9",
            sup2: "\xb2",
            sup3: "\xb3",
            sup: "⊃",
            Sup: "⋑",
            supdot: "⪾",
            supdsub: "⫘",
            supE: "⫆",
            supe: "⊇",
            supedot: "⫄",
            Superset: "⊃",
            SupersetEqual: "⊇",
            suphsol: "⟉",
            suphsub: "⫗",
            suplarr: "⥻",
            supmult: "⫂",
            supnE: "⫌",
            supne: "⊋",
            supplus: "⫀",
            supset: "⊃",
            Supset: "⋑",
            supseteq: "⊇",
            supseteqq: "⫆",
            supsetneq: "⊋",
            supsetneqq: "⫌",
            supsim: "⫈",
            supsub: "⫔",
            supsup: "⫖",
            swarhk: "⤦",
            swarr: "↙",
            swArr: "⇙",
            swarrow: "↙",
            swnwar: "⤪",
            szlig: "\xdf",
            Tab: "	",
            target: "⌖",
            Tau: "Τ",
            tau: "τ",
            tbrk: "⎴",
            Tcaron: "Ť",
            tcaron: "ť",
            Tcedil: "Ţ",
            tcedil: "ţ",
            Tcy: "Т",
            tcy: "т",
            tdot: "⃛",
            telrec: "⌕",
            Tfr: "\uD835\uDD17",
            tfr: "\uD835\uDD31",
            there4: "∴",
            therefore: "∴",
            Therefore: "∴",
            Theta: "Θ",
            theta: "θ",
            thetasym: "ϑ",
            thetav: "ϑ",
            thickapprox: "≈",
            thicksim: "∼",
            ThickSpace: "  ",
            ThinSpace: " ",
            thinsp: " ",
            thkap: "≈",
            thksim: "∼",
            THORN: "\xde",
            thorn: "\xfe",
            tilde: "˜",
            Tilde: "∼",
            TildeEqual: "≃",
            TildeFullEqual: "≅",
            TildeTilde: "≈",
            timesbar: "⨱",
            timesb: "⊠",
            times: "\xd7",
            timesd: "⨰",
            tint: "∭",
            toea: "⤨",
            topbot: "⌶",
            topcir: "⫱",
            top: "⊤",
            Topf: "\uD835\uDD4B",
            topf: "\uD835\uDD65",
            topfork: "⫚",
            tosa: "⤩",
            tprime: "‴",
            trade: "™",
            TRADE: "™",
            triangle: "▵",
            triangledown: "▿",
            triangleleft: "◃",
            trianglelefteq: "⊴",
            triangleq: "≜",
            triangleright: "▹",
            trianglerighteq: "⊵",
            tridot: "◬",
            trie: "≜",
            triminus: "⨺",
            TripleDot: "⃛",
            triplus: "⨹",
            trisb: "⧍",
            tritime: "⨻",
            trpezium: "⏢",
            Tscr: "\uD835\uDCAF",
            tscr: "\uD835\uDCC9",
            TScy: "Ц",
            tscy: "ц",
            TSHcy: "Ћ",
            tshcy: "ћ",
            Tstrok: "Ŧ",
            tstrok: "ŧ",
            twixt: "≬",
            twoheadleftarrow: "↞",
            twoheadrightarrow: "↠",
            Uacute: "\xda",
            uacute: "\xfa",
            uarr: "↑",
            Uarr: "↟",
            uArr: "⇑",
            Uarrocir: "⥉",
            Ubrcy: "Ў",
            ubrcy: "ў",
            Ubreve: "Ŭ",
            ubreve: "ŭ",
            Ucirc: "\xdb",
            ucirc: "\xfb",
            Ucy: "У",
            ucy: "у",
            udarr: "⇅",
            Udblac: "Ű",
            udblac: "ű",
            udhar: "⥮",
            ufisht: "⥾",
            Ufr: "\uD835\uDD18",
            ufr: "\uD835\uDD32",
            Ugrave: "\xd9",
            ugrave: "\xf9",
            uHar: "⥣",
            uharl: "↿",
            uharr: "↾",
            uhblk: "▀",
            ulcorn: "⌜",
            ulcorner: "⌜",
            ulcrop: "⌏",
            ultri: "◸",
            Umacr: "Ū",
            umacr: "ū",
            uml: "\xa8",
            UnderBar: "_",
            UnderBrace: "⏟",
            UnderBracket: "⎵",
            UnderParenthesis: "⏝",
            Union: "⋃",
            UnionPlus: "⊎",
            Uogon: "Ų",
            uogon: "ų",
            Uopf: "\uD835\uDD4C",
            uopf: "\uD835\uDD66",
            UpArrowBar: "⤒",
            uparrow: "↑",
            UpArrow: "↑",
            Uparrow: "⇑",
            UpArrowDownArrow: "⇅",
            updownarrow: "↕",
            UpDownArrow: "↕",
            Updownarrow: "⇕",
            UpEquilibrium: "⥮",
            upharpoonleft: "↿",
            upharpoonright: "↾",
            uplus: "⊎",
            UpperLeftArrow: "↖",
            UpperRightArrow: "↗",
            upsi: "υ",
            Upsi: "ϒ",
            upsih: "ϒ",
            Upsilon: "Υ",
            upsilon: "υ",
            UpTeeArrow: "↥",
            UpTee: "⊥",
            upuparrows: "⇈",
            urcorn: "⌝",
            urcorner: "⌝",
            urcrop: "⌎",
            Uring: "Ů",
            uring: "ů",
            urtri: "◹",
            Uscr: "\uD835\uDCB0",
            uscr: "\uD835\uDCCA",
            utdot: "⋰",
            Utilde: "Ũ",
            utilde: "ũ",
            utri: "▵",
            utrif: "▴",
            uuarr: "⇈",
            Uuml: "\xdc",
            uuml: "\xfc",
            uwangle: "⦧",
            vangrt: "⦜",
            varepsilon: "ϵ",
            varkappa: "ϰ",
            varnothing: "∅",
            varphi: "ϕ",
            varpi: "ϖ",
            varpropto: "∝",
            varr: "↕",
            vArr: "⇕",
            varrho: "ϱ",
            varsigma: "ς",
            varsubsetneq: "⊊︀",
            varsubsetneqq: "⫋︀",
            varsupsetneq: "⊋︀",
            varsupsetneqq: "⫌︀",
            vartheta: "ϑ",
            vartriangleleft: "⊲",
            vartriangleright: "⊳",
            vBar: "⫨",
            Vbar: "⫫",
            vBarv: "⫩",
            Vcy: "В",
            vcy: "в",
            vdash: "⊢",
            vDash: "⊨",
            Vdash: "⊩",
            VDash: "⊫",
            Vdashl: "⫦",
            veebar: "⊻",
            vee: "∨",
            Vee: "⋁",
            veeeq: "≚",
            vellip: "⋮",
            verbar: "|",
            Verbar: "‖",
            vert: "|",
            Vert: "‖",
            VerticalBar: "∣",
            VerticalLine: "|",
            VerticalSeparator: "❘",
            VerticalTilde: "≀",
            VeryThinSpace: " ",
            Vfr: "\uD835\uDD19",
            vfr: "\uD835\uDD33",
            vltri: "⊲",
            vnsub: "⊂⃒",
            vnsup: "⊃⃒",
            Vopf: "\uD835\uDD4D",
            vopf: "\uD835\uDD67",
            vprop: "∝",
            vrtri: "⊳",
            Vscr: "\uD835\uDCB1",
            vscr: "\uD835\uDCCB",
            vsubnE: "⫋︀",
            vsubne: "⊊︀",
            vsupnE: "⫌︀",
            vsupne: "⊋︀",
            Vvdash: "⊪",
            vzigzag: "⦚",
            Wcirc: "Ŵ",
            wcirc: "ŵ",
            wedbar: "⩟",
            wedge: "∧",
            Wedge: "⋀",
            wedgeq: "≙",
            weierp: "℘",
            Wfr: "\uD835\uDD1A",
            wfr: "\uD835\uDD34",
            Wopf: "\uD835\uDD4E",
            wopf: "\uD835\uDD68",
            wp: "℘",
            wr: "≀",
            wreath: "≀",
            Wscr: "\uD835\uDCB2",
            wscr: "\uD835\uDCCC",
            xcap: "⋂",
            xcirc: "◯",
            xcup: "⋃",
            xdtri: "▽",
            Xfr: "\uD835\uDD1B",
            xfr: "\uD835\uDD35",
            xharr: "⟷",
            xhArr: "⟺",
            Xi: "Ξ",
            xi: "ξ",
            xlarr: "⟵",
            xlArr: "⟸",
            xmap: "⟼",
            xnis: "⋻",
            xodot: "⨀",
            Xopf: "\uD835\uDD4F",
            xopf: "\uD835\uDD69",
            xoplus: "⨁",
            xotime: "⨂",
            xrarr: "⟶",
            xrArr: "⟹",
            Xscr: "\uD835\uDCB3",
            xscr: "\uD835\uDCCD",
            xsqcup: "⨆",
            xuplus: "⨄",
            xutri: "△",
            xvee: "⋁",
            xwedge: "⋀",
            Yacute: "\xdd",
            yacute: "\xfd",
            YAcy: "Я",
            yacy: "я",
            Ycirc: "Ŷ",
            ycirc: "ŷ",
            Ycy: "Ы",
            ycy: "ы",
            yen: "\xa5",
            Yfr: "\uD835\uDD1C",
            yfr: "\uD835\uDD36",
            YIcy: "Ї",
            yicy: "ї",
            Yopf: "\uD835\uDD50",
            yopf: "\uD835\uDD6A",
            Yscr: "\uD835\uDCB4",
            yscr: "\uD835\uDCCE",
            YUcy: "Ю",
            yucy: "ю",
            yuml: "\xff",
            Yuml: "Ÿ",
            Zacute: "Ź",
            zacute: "ź",
            Zcaron: "Ž",
            zcaron: "ž",
            Zcy: "З",
            zcy: "з",
            Zdot: "Ż",
            zdot: "ż",
            zeetrf: "ℨ",
            ZeroWidthSpace: "​",
            Zeta: "Ζ",
            zeta: "ζ",
            zfr: "\uD835\uDD37",
            Zfr: "ℨ",
            ZHcy: "Ж",
            zhcy: "ж",
            zigrarr: "⇝",
            zopf: "\uD835\uDD6B",
            Zopf: "ℤ",
            Zscr: "\uD835\uDCB5",
            zscr: "\uD835\uDCCF",
            zwj: "‍",
            zwnj: "‌"
        };
    }
});
// node_modules/markdown-it/lib/common/entities.js
var require_entities2 = __commonJS({
    "node_modules/markdown-it/lib/common/entities.js" (exports1, module2) {
        "use strict";
        module2.exports = require_entities();
    }
});
// node_modules/uc.micro/categories/P/regex.js
var require_regex = __commonJS({
    "node_modules/uc.micro/categories/P/regex.js" (exports1, module2) {
        module2.exports = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
    }
});
// node_modules/mdurl/encode.js
var require_encode = __commonJS({
    "node_modules/mdurl/encode.js" (exports1, module2) {
        "use strict";
        var encodeCache = {};
        function getEncodeCache(exclude) {
            var i, ch, cache = encodeCache[exclude];
            if (cache) {
                return cache;
            }
            cache = encodeCache[exclude] = [];
            for(i = 0; i < 128; i++){
                ch = String.fromCharCode(i);
                if (/^[0-9a-z]$/i.test(ch)) {
                    cache.push(ch);
                } else {
                    cache.push("%" + ("0" + i.toString(16).toUpperCase()).slice(-2));
                }
            }
            for(i = 0; i < exclude.length; i++){
                cache[exclude.charCodeAt(i)] = exclude[i];
            }
            return cache;
        }
        function encode(string, exclude, keepEscaped) {
            var i, l, code2, nextCode, cache, result = "";
            if (typeof exclude !== "string") {
                keepEscaped = exclude;
                exclude = encode.defaultChars;
            }
            if (typeof keepEscaped === "undefined") {
                keepEscaped = true;
            }
            cache = getEncodeCache(exclude);
            for(i = 0, l = string.length; i < l; i++){
                code2 = string.charCodeAt(i);
                if (keepEscaped && code2 === 37 && i + 2 < l) {
                    if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
                        result += string.slice(i, i + 3);
                        i += 2;
                        continue;
                    }
                }
                if (code2 < 128) {
                    result += cache[code2];
                    continue;
                }
                if (code2 >= 55296 && code2 <= 57343) {
                    if (code2 >= 55296 && code2 <= 56319 && i + 1 < l) {
                        nextCode = string.charCodeAt(i + 1);
                        if (nextCode >= 56320 && nextCode <= 57343) {
                            result += encodeURIComponent(string[i] + string[i + 1]);
                            i++;
                            continue;
                        }
                    }
                    result += "%EF%BF%BD";
                    continue;
                }
                result += encodeURIComponent(string[i]);
            }
            return result;
        }
        encode.defaultChars = ";/?:@&=+$,-_.!~*'()#";
        encode.componentChars = "-_.!~*'()";
        module2.exports = encode;
    }
});
// node_modules/mdurl/decode.js
var require_decode = __commonJS({
    "node_modules/mdurl/decode.js" (exports1, module2) {
        "use strict";
        var decodeCache = {};
        function getDecodeCache(exclude) {
            var i, ch, cache = decodeCache[exclude];
            if (cache) {
                return cache;
            }
            cache = decodeCache[exclude] = [];
            for(i = 0; i < 128; i++){
                ch = String.fromCharCode(i);
                cache.push(ch);
            }
            for(i = 0; i < exclude.length; i++){
                ch = exclude.charCodeAt(i);
                cache[ch] = "%" + ("0" + ch.toString(16).toUpperCase()).slice(-2);
            }
            return cache;
        }
        function decode(string, exclude) {
            var cache;
            if (typeof exclude !== "string") {
                exclude = decode.defaultChars;
            }
            cache = getDecodeCache(exclude);
            return string.replace(/(%[a-f0-9]{2})+/gi, function(seq) {
                var i, l, b1, b2, b3, b4, chr, result = "";
                for(i = 0, l = seq.length; i < l; i += 3){
                    b1 = parseInt(seq.slice(i + 1, i + 3), 16);
                    if (b1 < 128) {
                        result += cache[b1];
                        continue;
                    }
                    if ((b1 & 224) === 192 && i + 3 < l) {
                        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
                        if ((b2 & 192) === 128) {
                            chr = b1 << 6 & 1984 | b2 & 63;
                            if (chr < 128) {
                                result += "��";
                            } else {
                                result += String.fromCharCode(chr);
                            }
                            i += 3;
                            continue;
                        }
                    }
                    if ((b1 & 240) === 224 && i + 6 < l) {
                        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
                        b3 = parseInt(seq.slice(i + 7, i + 9), 16);
                        if ((b2 & 192) === 128 && (b3 & 192) === 128) {
                            chr = b1 << 12 & 61440 | b2 << 6 & 4032 | b3 & 63;
                            if (chr < 2048 || chr >= 55296 && chr <= 57343) {
                                result += "���";
                            } else {
                                result += String.fromCharCode(chr);
                            }
                            i += 6;
                            continue;
                        }
                    }
                    if ((b1 & 248) === 240 && i + 9 < l) {
                        b2 = parseInt(seq.slice(i + 4, i + 6), 16);
                        b3 = parseInt(seq.slice(i + 7, i + 9), 16);
                        b4 = parseInt(seq.slice(i + 10, i + 12), 16);
                        if ((b2 & 192) === 128 && (b3 & 192) === 128 && (b4 & 192) === 128) {
                            chr = b1 << 18 & 1835008 | b2 << 12 & 258048 | b3 << 6 & 4032 | b4 & 63;
                            if (chr < 65536 || chr > 1114111) {
                                result += "����";
                            } else {
                                chr -= 65536;
                                result += String.fromCharCode(55296 + (chr >> 10), 56320 + (chr & 1023));
                            }
                            i += 9;
                            continue;
                        }
                    }
                    result += "�";
                }
                return result;
            });
        }
        decode.defaultChars = ";/?:@&=+$,#";
        decode.componentChars = "";
        module2.exports = decode;
    }
});
// node_modules/mdurl/format.js
var require_format = __commonJS({
    "node_modules/mdurl/format.js" (exports1, module2) {
        "use strict";
        module2.exports = function format2(url) {
            var result = "";
            result += url.protocol || "";
            result += url.slashes ? "//" : "";
            result += url.auth ? url.auth + "@" : "";
            if (url.hostname && url.hostname.indexOf(":") !== -1) {
                result += "[" + url.hostname + "]";
            } else {
                result += url.hostname || "";
            }
            result += url.port ? ":" + url.port : "";
            result += url.pathname || "";
            result += url.search || "";
            result += url.hash || "";
            return result;
        };
    }
});
// node_modules/mdurl/parse.js
var require_parse = __commonJS({
    "node_modules/mdurl/parse.js" (exports1, module2) {
        "use strict";
        function Url() {
            this.protocol = null;
            this.slashes = null;
            this.auth = null;
            this.port = null;
            this.hostname = null;
            this.hash = null;
            this.search = null;
            this.pathname = null;
        }
        var protocolPattern = /^([a-z0-9.+-]+:)/i;
        var portPattern = /:[0-9]*$/;
        var simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
        var delims = [
            "<",
            ">",
            '"',
            "`",
            " ",
            "\r",
            "\n",
            "	"
        ];
        var unwise = [
            "{",
            "}",
            "|",
            "\\",
            "^",
            "`"
        ].concat(delims);
        var autoEscape = [
            "'"
        ].concat(unwise);
        var nonHostChars = [
            "%",
            "/",
            "?",
            ";",
            "#"
        ].concat(autoEscape);
        var hostEndingChars = [
            "/",
            "?",
            "#"
        ];
        var hostnameMaxLen = 255;
        var hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/;
        var hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
        var hostlessProtocol = {
            "javascript": true,
            "javascript:": true
        };
        var slashedProtocol = {
            "http": true,
            "https": true,
            "ftp": true,
            "gopher": true,
            "file": true,
            "http:": true,
            "https:": true,
            "ftp:": true,
            "gopher:": true,
            "file:": true
        };
        function urlParse(url, slashesDenoteHost) {
            if (url && url instanceof Url) {
                return url;
            }
            var u = new Url();
            u.parse(url, slashesDenoteHost);
            return u;
        }
        Url.prototype.parse = function(url, slashesDenoteHost) {
            var i, l, lowerProto, hec, slashes, rest = url;
            rest = rest.trim();
            if (!slashesDenoteHost && url.split("#").length === 1) {
                var simplePath = simplePathPattern.exec(rest);
                if (simplePath) {
                    this.pathname = simplePath[1];
                    if (simplePath[2]) {
                        this.search = simplePath[2];
                    }
                    return this;
                }
            }
            var proto = protocolPattern.exec(rest);
            if (proto) {
                proto = proto[0];
                lowerProto = proto.toLowerCase();
                this.protocol = proto;
                rest = rest.substr(proto.length);
            }
            if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                slashes = rest.substr(0, 2) === "//";
                if (slashes && !(proto && hostlessProtocol[proto])) {
                    rest = rest.substr(2);
                    this.slashes = true;
                }
            }
            if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
                var hostEnd = -1;
                for(i = 0; i < hostEndingChars.length; i++){
                    hec = rest.indexOf(hostEndingChars[i]);
                    if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
                        hostEnd = hec;
                    }
                }
                var auth, atSign;
                if (hostEnd === -1) {
                    atSign = rest.lastIndexOf("@");
                } else {
                    atSign = rest.lastIndexOf("@", hostEnd);
                }
                if (atSign !== -1) {
                    auth = rest.slice(0, atSign);
                    rest = rest.slice(atSign + 1);
                    this.auth = auth;
                }
                hostEnd = -1;
                for(i = 0; i < nonHostChars.length; i++){
                    hec = rest.indexOf(nonHostChars[i]);
                    if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) {
                        hostEnd = hec;
                    }
                }
                if (hostEnd === -1) {
                    hostEnd = rest.length;
                }
                if (rest[hostEnd - 1] === ":") {
                    hostEnd--;
                }
                var host = rest.slice(0, hostEnd);
                rest = rest.slice(hostEnd);
                this.parseHost(host);
                this.hostname = this.hostname || "";
                var ipv6Hostname = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
                if (!ipv6Hostname) {
                    var hostparts = this.hostname.split(/\./);
                    for(i = 0, l = hostparts.length; i < l; i++){
                        var part = hostparts[i];
                        if (!part) {
                            continue;
                        }
                        if (!part.match(hostnamePartPattern)) {
                            var newpart = "";
                            for(var j = 0, k = part.length; j < k; j++){
                                if (part.charCodeAt(j) > 127) {
                                    newpart += "x";
                                } else {
                                    newpart += part[j];
                                }
                            }
                            if (!newpart.match(hostnamePartPattern)) {
                                var validParts = hostparts.slice(0, i);
                                var notHost = hostparts.slice(i + 1);
                                var bit = part.match(hostnamePartStart);
                                if (bit) {
                                    validParts.push(bit[1]);
                                    notHost.unshift(bit[2]);
                                }
                                if (notHost.length) {
                                    rest = notHost.join(".") + rest;
                                }
                                this.hostname = validParts.join(".");
                                break;
                            }
                        }
                    }
                }
                if (this.hostname.length > hostnameMaxLen) {
                    this.hostname = "";
                }
                if (ipv6Hostname) {
                    this.hostname = this.hostname.substr(1, this.hostname.length - 2);
                }
            }
            var hash = rest.indexOf("#");
            if (hash !== -1) {
                this.hash = rest.substr(hash);
                rest = rest.slice(0, hash);
            }
            var qm = rest.indexOf("?");
            if (qm !== -1) {
                this.search = rest.substr(qm);
                rest = rest.slice(0, qm);
            }
            if (rest) {
                this.pathname = rest;
            }
            if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
                this.pathname = "";
            }
            return this;
        };
        Url.prototype.parseHost = function(host) {
            var port = portPattern.exec(host);
            if (port) {
                port = port[0];
                if (port !== ":") {
                    this.port = port.substr(1);
                }
                host = host.substr(0, host.length - port.length);
            }
            if (host) {
                this.hostname = host;
            }
        };
        module2.exports = urlParse;
    }
});
// node_modules/mdurl/index.js
var require_mdurl = __commonJS({
    "node_modules/mdurl/index.js" (exports1, module2) {
        "use strict";
        module2.exports.encode = require_encode();
        module2.exports.decode = require_decode();
        module2.exports.format = require_format();
        module2.exports.parse = require_parse();
    }
});
// node_modules/uc.micro/properties/Any/regex.js
var require_regex2 = __commonJS({
    "node_modules/uc.micro/properties/Any/regex.js" (exports1, module2) {
        module2.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
    }
});
// node_modules/uc.micro/categories/Cc/regex.js
var require_regex3 = __commonJS({
    "node_modules/uc.micro/categories/Cc/regex.js" (exports1, module2) {
        module2.exports = /[\0-\x1F\x7F-\x9F]/;
    }
});
// node_modules/uc.micro/categories/Cf/regex.js
var require_regex4 = __commonJS({
    "node_modules/uc.micro/categories/Cf/regex.js" (exports1, module2) {
        module2.exports = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;
    }
});
// node_modules/uc.micro/categories/Z/regex.js
var require_regex5 = __commonJS({
    "node_modules/uc.micro/categories/Z/regex.js" (exports1, module2) {
        module2.exports = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
    }
});
// node_modules/uc.micro/index.js
var require_uc = __commonJS({
    "node_modules/uc.micro/index.js" (exports1) {
        "use strict";
        exports1.Any = require_regex2();
        exports1.Cc = require_regex3();
        exports1.Cf = require_regex4();
        exports1.P = require_regex();
        exports1.Z = require_regex5();
    }
});
// node_modules/markdown-it/lib/common/utils.js
var require_utils = __commonJS({
    "node_modules/markdown-it/lib/common/utils.js" (exports1) {
        "use strict";
        function _class(obj) {
            return Object.prototype.toString.call(obj);
        }
        function isString(obj) {
            return _class(obj) === "[object String]";
        }
        var _hasOwnProperty = Object.prototype.hasOwnProperty;
        function has(object, key) {
            return _hasOwnProperty.call(object, key);
        }
        function assign(obj) {
            var sources = Array.prototype.slice.call(arguments, 1);
            sources.forEach(function(source) {
                if (!source) {
                    return;
                }
                if (typeof source !== "object") {
                    throw new TypeError(source + "must be object");
                }
                Object.keys(source).forEach(function(key) {
                    obj[key] = source[key];
                });
            });
            return obj;
        }
        function arrayReplaceAt(src, pos, newElements) {
            return [].concat(src.slice(0, pos), newElements, src.slice(pos + 1));
        }
        function isValidEntityCode(c) {
            if (c >= 55296 && c <= 57343) {
                return false;
            }
            if (c >= 64976 && c <= 65007) {
                return false;
            }
            if ((c & 65535) === 65535 || (c & 65535) === 65534) {
                return false;
            }
            if (c >= 0 && c <= 8) {
                return false;
            }
            if (c === 11) {
                return false;
            }
            if (c >= 14 && c <= 31) {
                return false;
            }
            if (c >= 127 && c <= 159) {
                return false;
            }
            if (c > 1114111) {
                return false;
            }
            return true;
        }
        function fromCodePoint(c) {
            if (c > 65535) {
                c -= 65536;
                var surrogate1 = 55296 + (c >> 10), surrogate2 = 56320 + (c & 1023);
                return String.fromCharCode(surrogate1, surrogate2);
            }
            return String.fromCharCode(c);
        }
        var UNESCAPE_MD_RE = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g;
        var ENTITY_RE = /&([a-z#][a-z0-9]{1,31});/gi;
        var UNESCAPE_ALL_RE = new RegExp(UNESCAPE_MD_RE.source + "|" + ENTITY_RE.source, "gi");
        var DIGITAL_ENTITY_TEST_RE = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;
        var entities = require_entities2();
        function replaceEntityPattern(match, name) {
            var code2 = 0;
            if (has(entities, name)) {
                return entities[name];
            }
            if (name.charCodeAt(0) === 35 && DIGITAL_ENTITY_TEST_RE.test(name)) {
                code2 = name[1].toLowerCase() === "x" ? parseInt(name.slice(2), 16) : parseInt(name.slice(1), 10);
                if (isValidEntityCode(code2)) {
                    return fromCodePoint(code2);
                }
            }
            return match;
        }
        function unescapeMd(str) {
            if (str.indexOf("\\") < 0) {
                return str;
            }
            return str.replace(UNESCAPE_MD_RE, "$1");
        }
        function unescapeAll(str) {
            if (str.indexOf("\\") < 0 && str.indexOf("&") < 0) {
                return str;
            }
            return str.replace(UNESCAPE_ALL_RE, function(match, escaped, entity) {
                if (escaped) {
                    return escaped;
                }
                return replaceEntityPattern(match, entity);
            });
        }
        var HTML_ESCAPE_TEST_RE = /[&<>"]/;
        var HTML_ESCAPE_REPLACE_RE = /[&<>"]/g;
        var HTML_REPLACEMENTS = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;"
        };
        function replaceUnsafeChar(ch) {
            return HTML_REPLACEMENTS[ch];
        }
        function escapeHtml2(str) {
            if (HTML_ESCAPE_TEST_RE.test(str)) {
                return str.replace(HTML_ESCAPE_REPLACE_RE, replaceUnsafeChar);
            }
            return str;
        }
        var REGEXP_ESCAPE_RE = /[.?*+^$[\]\\(){}|-]/g;
        function escapeRE(str) {
            return str.replace(REGEXP_ESCAPE_RE, "\\$&");
        }
        function isSpace(code2) {
            switch(code2){
                case 9:
                case 32:
                    return true;
            }
            return false;
        }
        function isWhiteSpace(code2) {
            if (code2 >= 8192 && code2 <= 8202) {
                return true;
            }
            switch(code2){
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 32:
                case 160:
                case 5760:
                case 8239:
                case 8287:
                case 12288:
                    return true;
            }
            return false;
        }
        var UNICODE_PUNCT_RE = require_regex();
        function isPunctChar(ch) {
            return UNICODE_PUNCT_RE.test(ch);
        }
        function isMdAsciiPunct(ch) {
            switch(ch){
                case 33:
                case 34:
                case 35:
                case 36:
                case 37:
                case 38:
                case 39:
                case 40:
                case 41:
                case 42:
                case 43:
                case 44:
                case 45:
                case 46:
                case 47:
                case 58:
                case 59:
                case 60:
                case 61:
                case 62:
                case 63:
                case 64:
                case 91:
                case 92:
                case 93:
                case 94:
                case 95:
                case 96:
                case 123:
                case 124:
                case 125:
                case 126:
                    return true;
                default:
                    return false;
            }
        }
        function normalizeReference(str) {
            str = str.trim().replace(/\s+/g, " ");
            if ("ẞ".toLowerCase() === "Ṿ") {
                str = str.replace(/ẞ/g, "\xdf");
            }
            return str.toLowerCase().toUpperCase();
        }
        exports1.lib = {};
        exports1.lib.mdurl = require_mdurl();
        exports1.lib.ucmicro = require_uc();
        exports1.assign = assign;
        exports1.isString = isString;
        exports1.has = has;
        exports1.unescapeMd = unescapeMd;
        exports1.unescapeAll = unescapeAll;
        exports1.isValidEntityCode = isValidEntityCode;
        exports1.fromCodePoint = fromCodePoint;
        exports1.escapeHtml = escapeHtml2;
        exports1.arrayReplaceAt = arrayReplaceAt;
        exports1.isSpace = isSpace;
        exports1.isWhiteSpace = isWhiteSpace;
        exports1.isMdAsciiPunct = isMdAsciiPunct;
        exports1.isPunctChar = isPunctChar;
        exports1.escapeRE = escapeRE;
        exports1.normalizeReference = normalizeReference;
    }
});
// node_modules/markdown-it/lib/helpers/parse_link_label.js
var require_parse_link_label = __commonJS({
    "node_modules/markdown-it/lib/helpers/parse_link_label.js" (exports1, module2) {
        "use strict";
        module2.exports = function parseLinkLabel(state, start, disableNested) {
            var level, found, marker, prevPos, labelEnd = -1, max2 = state.posMax, oldPos = state.pos;
            state.pos = start + 1;
            level = 1;
            while(state.pos < max2){
                marker = state.src.charCodeAt(state.pos);
                if (marker === 93) {
                    level--;
                    if (level === 0) {
                        found = true;
                        break;
                    }
                }
                prevPos = state.pos;
                state.md.inline.skipToken(state);
                if (marker === 91) {
                    if (prevPos === state.pos - 1) {
                        level++;
                    } else if (disableNested) {
                        state.pos = oldPos;
                        return -1;
                    }
                }
            }
            if (found) {
                labelEnd = state.pos;
            }
            state.pos = oldPos;
            return labelEnd;
        };
    }
});
// node_modules/markdown-it/lib/helpers/parse_link_destination.js
var require_parse_link_destination = __commonJS({
    "node_modules/markdown-it/lib/helpers/parse_link_destination.js" (exports1, module2) {
        "use strict";
        var unescapeAll = require_utils().unescapeAll;
        module2.exports = function parseLinkDestination(str, pos, max2) {
            var code2, level, lines = 0, start = pos, result = {
                ok: false,
                pos: 0,
                lines: 0,
                str: ""
            };
            if (str.charCodeAt(pos) === 60) {
                pos++;
                while(pos < max2){
                    code2 = str.charCodeAt(pos);
                    if (code2 === 10) {
                        return result;
                    }
                    if (code2 === 60) {
                        return result;
                    }
                    if (code2 === 62) {
                        result.pos = pos + 1;
                        result.str = unescapeAll(str.slice(start + 1, pos));
                        result.ok = true;
                        return result;
                    }
                    if (code2 === 92 && pos + 1 < max2) {
                        pos += 2;
                        continue;
                    }
                    pos++;
                }
                return result;
            }
            level = 0;
            while(pos < max2){
                code2 = str.charCodeAt(pos);
                if (code2 === 32) {
                    break;
                }
                if (code2 < 32 || code2 === 127) {
                    break;
                }
                if (code2 === 92 && pos + 1 < max2) {
                    if (str.charCodeAt(pos + 1) === 32) {
                        break;
                    }
                    pos += 2;
                    continue;
                }
                if (code2 === 40) {
                    level++;
                    if (level > 32) {
                        return result;
                    }
                }
                if (code2 === 41) {
                    if (level === 0) {
                        break;
                    }
                    level--;
                }
                pos++;
            }
            if (start === pos) {
                return result;
            }
            if (level !== 0) {
                return result;
            }
            result.str = unescapeAll(str.slice(start, pos));
            result.lines = lines;
            result.pos = pos;
            result.ok = true;
            return result;
        };
    }
});
// node_modules/markdown-it/lib/helpers/parse_link_title.js
var require_parse_link_title = __commonJS({
    "node_modules/markdown-it/lib/helpers/parse_link_title.js" (exports1, module2) {
        "use strict";
        var unescapeAll = require_utils().unescapeAll;
        module2.exports = function parseLinkTitle(str, pos, max2) {
            var code2, marker, lines = 0, start = pos, result = {
                ok: false,
                pos: 0,
                lines: 0,
                str: ""
            };
            if (pos >= max2) {
                return result;
            }
            marker = str.charCodeAt(pos);
            if (marker !== 34 && marker !== 39 && marker !== 40) {
                return result;
            }
            pos++;
            if (marker === 40) {
                marker = 41;
            }
            while(pos < max2){
                code2 = str.charCodeAt(pos);
                if (code2 === marker) {
                    result.pos = pos + 1;
                    result.lines = lines;
                    result.str = unescapeAll(str.slice(start + 1, pos));
                    result.ok = true;
                    return result;
                } else if (code2 === 40 && marker === 41) {
                    return result;
                } else if (code2 === 10) {
                    lines++;
                } else if (code2 === 92 && pos + 1 < max2) {
                    pos++;
                    if (str.charCodeAt(pos) === 10) {
                        lines++;
                    }
                }
                pos++;
            }
            return result;
        };
    }
});
// node_modules/markdown-it/lib/helpers/index.js
var require_helpers = __commonJS({
    "node_modules/markdown-it/lib/helpers/index.js" (exports1) {
        "use strict";
        exports1.parseLinkLabel = require_parse_link_label();
        exports1.parseLinkDestination = require_parse_link_destination();
        exports1.parseLinkTitle = require_parse_link_title();
    }
});
// node_modules/markdown-it/lib/renderer.js
var require_renderer = __commonJS({
    "node_modules/markdown-it/lib/renderer.js" (exports1, module2) {
        "use strict";
        var assign = require_utils().assign;
        var unescapeAll = require_utils().unescapeAll;
        var escapeHtml2 = require_utils().escapeHtml;
        var default_rules = {};
        default_rules.code_inline = function(tokens, idx, options, env, slf) {
            var token = tokens[idx];
            return "<code" + slf.renderAttrs(token) + ">" + escapeHtml2(tokens[idx].content) + "</code>";
        };
        default_rules.code_block = function(tokens, idx, options, env, slf) {
            var token = tokens[idx];
            return "<pre" + slf.renderAttrs(token) + "><code>" + escapeHtml2(tokens[idx].content) + "</code></pre>\n";
        };
        default_rules.fence = function(tokens, idx, options, env, slf) {
            var token = tokens[idx], info = token.info ? unescapeAll(token.info).trim() : "", langName = "", langAttrs = "", highlighted, i, arr, tmpAttrs, tmpToken;
            if (info) {
                arr = info.split(/(\s+)/g);
                langName = arr[0];
                langAttrs = arr.slice(2).join("");
            }
            if (options.highlight) {
                highlighted = options.highlight(token.content, langName, langAttrs) || escapeHtml2(token.content);
            } else {
                highlighted = escapeHtml2(token.content);
            }
            if (highlighted.indexOf("<pre") === 0) {
                return highlighted + "\n";
            }
            if (info) {
                i = token.attrIndex("class");
                tmpAttrs = token.attrs ? token.attrs.slice() : [];
                if (i < 0) {
                    tmpAttrs.push([
                        "class",
                        options.langPrefix + langName
                    ]);
                } else {
                    tmpAttrs[i] = tmpAttrs[i].slice();
                    tmpAttrs[i][1] += " " + options.langPrefix + langName;
                }
                tmpToken = {
                    attrs: tmpAttrs
                };
                return "<pre><code" + slf.renderAttrs(tmpToken) + ">" + highlighted + "</code></pre>\n";
            }
            return "<pre><code" + slf.renderAttrs(token) + ">" + highlighted + "</code></pre>\n";
        };
        default_rules.image = function(tokens, idx, options, env, slf) {
            var token = tokens[idx];
            token.attrs[token.attrIndex("alt")][1] = slf.renderInlineAsText(token.children, options, env);
            return slf.renderToken(tokens, idx, options);
        };
        default_rules.hardbreak = function(tokens, idx, options) {
            return options.xhtmlOut ? "<br />\n" : "<br>\n";
        };
        default_rules.softbreak = function(tokens, idx, options) {
            return options.breaks ? options.xhtmlOut ? "<br />\n" : "<br>\n" : "\n";
        };
        default_rules.text = function(tokens, idx) {
            return escapeHtml2(tokens[idx].content);
        };
        default_rules.html_block = function(tokens, idx) {
            return tokens[idx].content;
        };
        default_rules.html_inline = function(tokens, idx) {
            return tokens[idx].content;
        };
        function Renderer() {
            this.rules = assign({}, default_rules);
        }
        Renderer.prototype.renderAttrs = function renderAttrs(token) {
            var i, l, result;
            if (!token.attrs) {
                return "";
            }
            result = "";
            for(i = 0, l = token.attrs.length; i < l; i++){
                result += " " + escapeHtml2(token.attrs[i][0]) + '="' + escapeHtml2(token.attrs[i][1]) + '"';
            }
            return result;
        };
        Renderer.prototype.renderToken = function renderToken(tokens, idx, options) {
            var nextToken, result = "", needLf = false, token = tokens[idx];
            if (token.hidden) {
                return "";
            }
            if (token.block && token.nesting !== -1 && idx && tokens[idx - 1].hidden) {
                result += "\n";
            }
            result += (token.nesting === -1 ? "</" : "<") + token.tag;
            result += this.renderAttrs(token);
            if (token.nesting === 0 && options.xhtmlOut) {
                result += " /";
            }
            if (token.block) {
                needLf = true;
                if (token.nesting === 1) {
                    if (idx + 1 < tokens.length) {
                        nextToken = tokens[idx + 1];
                        if (nextToken.type === "inline" || nextToken.hidden) {
                            needLf = false;
                        } else if (nextToken.nesting === -1 && nextToken.tag === token.tag) {
                            needLf = false;
                        }
                    }
                }
            }
            result += needLf ? ">\n" : ">";
            return result;
        };
        Renderer.prototype.renderInline = function(tokens, options, env) {
            var type, result = "", rules = this.rules;
            for(var i = 0, len = tokens.length; i < len; i++){
                type = tokens[i].type;
                if (typeof rules[type] !== "undefined") {
                    result += rules[type](tokens, i, options, env, this);
                } else {
                    result += this.renderToken(tokens, i, options);
                }
            }
            return result;
        };
        Renderer.prototype.renderInlineAsText = function(tokens, options, env) {
            var result = "";
            for(var i = 0, len = tokens.length; i < len; i++){
                if (tokens[i].type === "text") {
                    result += tokens[i].content;
                } else if (tokens[i].type === "image") {
                    result += this.renderInlineAsText(tokens[i].children, options, env);
                } else if (tokens[i].type === "softbreak") {
                    result += "\n";
                }
            }
            return result;
        };
        Renderer.prototype.render = function(tokens, options, env) {
            var i, len, type, result = "", rules = this.rules;
            for(i = 0, len = tokens.length; i < len; i++){
                type = tokens[i].type;
                if (type === "inline") {
                    result += this.renderInline(tokens[i].children, options, env);
                } else if (typeof rules[type] !== "undefined") {
                    result += rules[tokens[i].type](tokens, i, options, env, this);
                } else {
                    result += this.renderToken(tokens, i, options, env);
                }
            }
            return result;
        };
        module2.exports = Renderer;
    }
});
// node_modules/markdown-it/lib/ruler.js
var require_ruler = __commonJS({
    "node_modules/markdown-it/lib/ruler.js" (exports1, module2) {
        "use strict";
        function Ruler() {
            this.__rules__ = [];
            this.__cache__ = null;
        }
        Ruler.prototype.__find__ = function(name) {
            for(var i = 0; i < this.__rules__.length; i++){
                if (this.__rules__[i].name === name) {
                    return i;
                }
            }
            return -1;
        };
        Ruler.prototype.__compile__ = function() {
            var self = this;
            var chains = [
                ""
            ];
            self.__rules__.forEach(function(rule) {
                if (!rule.enabled) {
                    return;
                }
                rule.alt.forEach(function(altName) {
                    if (chains.indexOf(altName) < 0) {
                        chains.push(altName);
                    }
                });
            });
            self.__cache__ = {};
            chains.forEach(function(chain) {
                self.__cache__[chain] = [];
                self.__rules__.forEach(function(rule) {
                    if (!rule.enabled) {
                        return;
                    }
                    if (chain && rule.alt.indexOf(chain) < 0) {
                        return;
                    }
                    self.__cache__[chain].push(rule.fn);
                });
            });
        };
        Ruler.prototype.at = function(name, fn, options) {
            var index = this.__find__(name);
            var opt = options || {};
            if (index === -1) {
                throw new Error("Parser rule not found: " + name);
            }
            this.__rules__[index].fn = fn;
            this.__rules__[index].alt = opt.alt || [];
            this.__cache__ = null;
        };
        Ruler.prototype.before = function(beforeName, ruleName, fn, options) {
            var index = this.__find__(beforeName);
            var opt = options || {};
            if (index === -1) {
                throw new Error("Parser rule not found: " + beforeName);
            }
            this.__rules__.splice(index, 0, {
                name: ruleName,
                enabled: true,
                fn,
                alt: opt.alt || []
            });
            this.__cache__ = null;
        };
        Ruler.prototype.after = function(afterName, ruleName, fn, options) {
            var index = this.__find__(afterName);
            var opt = options || {};
            if (index === -1) {
                throw new Error("Parser rule not found: " + afterName);
            }
            this.__rules__.splice(index + 1, 0, {
                name: ruleName,
                enabled: true,
                fn,
                alt: opt.alt || []
            });
            this.__cache__ = null;
        };
        Ruler.prototype.push = function(ruleName, fn, options) {
            var opt = options || {};
            this.__rules__.push({
                name: ruleName,
                enabled: true,
                fn,
                alt: opt.alt || []
            });
            this.__cache__ = null;
        };
        Ruler.prototype.enable = function(list2, ignoreInvalid) {
            if (!Array.isArray(list2)) {
                list2 = [
                    list2
                ];
            }
            var result = [];
            list2.forEach(function(name) {
                var idx = this.__find__(name);
                if (idx < 0) {
                    if (ignoreInvalid) {
                        return;
                    }
                    throw new Error("Rules manager: invalid rule name " + name);
                }
                this.__rules__[idx].enabled = true;
                result.push(name);
            }, this);
            this.__cache__ = null;
            return result;
        };
        Ruler.prototype.enableOnly = function(list2, ignoreInvalid) {
            if (!Array.isArray(list2)) {
                list2 = [
                    list2
                ];
            }
            this.__rules__.forEach(function(rule) {
                rule.enabled = false;
            });
            this.enable(list2, ignoreInvalid);
        };
        Ruler.prototype.disable = function(list2, ignoreInvalid) {
            if (!Array.isArray(list2)) {
                list2 = [
                    list2
                ];
            }
            var result = [];
            list2.forEach(function(name) {
                var idx = this.__find__(name);
                if (idx < 0) {
                    if (ignoreInvalid) {
                        return;
                    }
                    throw new Error("Rules manager: invalid rule name " + name);
                }
                this.__rules__[idx].enabled = false;
                result.push(name);
            }, this);
            this.__cache__ = null;
            return result;
        };
        Ruler.prototype.getRules = function(chainName) {
            if (this.__cache__ === null) {
                this.__compile__();
            }
            return this.__cache__[chainName] || [];
        };
        module2.exports = Ruler;
    }
});
// node_modules/markdown-it/lib/rules_core/normalize.js
var require_normalize = __commonJS({
    "node_modules/markdown-it/lib/rules_core/normalize.js" (exports1, module2) {
        "use strict";
        var NEWLINES_RE = /\r\n?|\n/g;
        var NULL_RE = /\0/g;
        module2.exports = function normalize(state) {
            var str;
            str = state.src.replace(NEWLINES_RE, "\n");
            str = str.replace(NULL_RE, "�");
            state.src = str;
        };
    }
});
// node_modules/markdown-it/lib/rules_core/block.js
var require_block = __commonJS({
    "node_modules/markdown-it/lib/rules_core/block.js" (exports1, module2) {
        "use strict";
        module2.exports = function block4(state) {
            var token;
            if (state.inlineMode) {
                token = new state.Token("inline", "", 0);
                token.content = state.src;
                token.map = [
                    0,
                    1
                ];
                token.children = [];
                state.tokens.push(token);
            } else {
                state.md.block.parse(state.src, state.md, state.env, state.tokens);
            }
        };
    }
});
// node_modules/markdown-it/lib/rules_core/inline.js
var require_inline = __commonJS({
    "node_modules/markdown-it/lib/rules_core/inline.js" (exports1, module2) {
        "use strict";
        module2.exports = function inline4(state) {
            var tokens = state.tokens, tok, i, l;
            for(i = 0, l = tokens.length; i < l; i++){
                tok = tokens[i];
                if (tok.type === "inline") {
                    state.md.inline.parse(tok.content, state.md, state.env, tok.children);
                }
            }
        };
    }
});
// node_modules/markdown-it/lib/rules_core/linkify.js
var require_linkify = __commonJS({
    "node_modules/markdown-it/lib/rules_core/linkify.js" (exports1, module2) {
        "use strict";
        var arrayReplaceAt = require_utils().arrayReplaceAt;
        function isLinkOpen(str) {
            return /^<a[>\s]/i.test(str);
        }
        function isLinkClose(str) {
            return /^<\/a\s*>/i.test(str);
        }
        module2.exports = function linkify(state) {
            var i, j, l, tokens, token, currentToken, nodes, ln, text2, pos, lastPos, level, htmlLinkLevel, url, fullUrl, urlText, blockTokens = state.tokens, links;
            if (!state.md.options.linkify) {
                return;
            }
            for(j = 0, l = blockTokens.length; j < l; j++){
                if (blockTokens[j].type !== "inline" || !state.md.linkify.pretest(blockTokens[j].content)) {
                    continue;
                }
                tokens = blockTokens[j].children;
                htmlLinkLevel = 0;
                for(i = tokens.length - 1; i >= 0; i--){
                    currentToken = tokens[i];
                    if (currentToken.type === "link_close") {
                        i--;
                        while(tokens[i].level !== currentToken.level && tokens[i].type !== "link_open"){
                            i--;
                        }
                        continue;
                    }
                    if (currentToken.type === "html_inline") {
                        if (isLinkOpen(currentToken.content) && htmlLinkLevel > 0) {
                            htmlLinkLevel--;
                        }
                        if (isLinkClose(currentToken.content)) {
                            htmlLinkLevel++;
                        }
                    }
                    if (htmlLinkLevel > 0) {
                        continue;
                    }
                    if (currentToken.type === "text" && state.md.linkify.test(currentToken.content)) {
                        text2 = currentToken.content;
                        links = state.md.linkify.match(text2);
                        nodes = [];
                        level = currentToken.level;
                        lastPos = 0;
                        for(ln = 0; ln < links.length; ln++){
                            url = links[ln].url;
                            fullUrl = state.md.normalizeLink(url);
                            if (!state.md.validateLink(fullUrl)) {
                                continue;
                            }
                            urlText = links[ln].text;
                            if (!links[ln].schema) {
                                urlText = state.md.normalizeLinkText("http://" + urlText).replace(/^http:\/\//, "");
                            } else if (links[ln].schema === "mailto:" && !/^mailto:/i.test(urlText)) {
                                urlText = state.md.normalizeLinkText("mailto:" + urlText).replace(/^mailto:/, "");
                            } else {
                                urlText = state.md.normalizeLinkText(urlText);
                            }
                            pos = links[ln].index;
                            if (pos > lastPos) {
                                token = new state.Token("text", "", 0);
                                token.content = text2.slice(lastPos, pos);
                                token.level = level;
                                nodes.push(token);
                            }
                            token = new state.Token("link_open", "a", 1);
                            token.attrs = [
                                [
                                    "href",
                                    fullUrl
                                ]
                            ];
                            token.level = level++;
                            token.markup = "linkify";
                            token.info = "auto";
                            nodes.push(token);
                            token = new state.Token("text", "", 0);
                            token.content = urlText;
                            token.level = level;
                            nodes.push(token);
                            token = new state.Token("link_close", "a", -1);
                            token.level = --level;
                            token.markup = "linkify";
                            token.info = "auto";
                            nodes.push(token);
                            lastPos = links[ln].lastIndex;
                        }
                        if (lastPos < text2.length) {
                            token = new state.Token("text", "", 0);
                            token.content = text2.slice(lastPos);
                            token.level = level;
                            nodes.push(token);
                        }
                        blockTokens[j].children = tokens = arrayReplaceAt(tokens, i, nodes);
                    }
                }
            }
        };
    }
});
// node_modules/markdown-it/lib/rules_core/replacements.js
var require_replacements = __commonJS({
    "node_modules/markdown-it/lib/rules_core/replacements.js" (exports1, module2) {
        "use strict";
        var RARE_RE = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
        var SCOPED_ABBR_TEST_RE = /\((c|tm|r|p)\)/i;
        var SCOPED_ABBR_RE = /\((c|tm|r|p)\)/ig;
        var SCOPED_ABBR = {
            c: "\xa9",
            r: "\xae",
            p: "\xa7",
            tm: "™"
        };
        function replaceFn(match, name) {
            return SCOPED_ABBR[name.toLowerCase()];
        }
        function replace_scoped(inlineTokens) {
            var i, token, inside_autolink = 0;
            for(i = inlineTokens.length - 1; i >= 0; i--){
                token = inlineTokens[i];
                if (token.type === "text" && !inside_autolink) {
                    token.content = token.content.replace(SCOPED_ABBR_RE, replaceFn);
                }
                if (token.type === "link_open" && token.info === "auto") {
                    inside_autolink--;
                }
                if (token.type === "link_close" && token.info === "auto") {
                    inside_autolink++;
                }
            }
        }
        function replace_rare(inlineTokens) {
            var i, token, inside_autolink = 0;
            for(i = inlineTokens.length - 1; i >= 0; i--){
                token = inlineTokens[i];
                if (token.type === "text" && !inside_autolink) {
                    if (RARE_RE.test(token.content)) {
                        token.content = token.content.replace(/\+-/g, "\xb1").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–");
                    }
                }
                if (token.type === "link_open" && token.info === "auto") {
                    inside_autolink--;
                }
                if (token.type === "link_close" && token.info === "auto") {
                    inside_autolink++;
                }
            }
        }
        module2.exports = function replace(state) {
            var blkIdx;
            if (!state.md.options.typographer) {
                return;
            }
            for(blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--){
                if (state.tokens[blkIdx].type !== "inline") {
                    continue;
                }
                if (SCOPED_ABBR_TEST_RE.test(state.tokens[blkIdx].content)) {
                    replace_scoped(state.tokens[blkIdx].children);
                }
                if (RARE_RE.test(state.tokens[blkIdx].content)) {
                    replace_rare(state.tokens[blkIdx].children);
                }
            }
        };
    }
});
// node_modules/markdown-it/lib/rules_core/smartquotes.js
var require_smartquotes = __commonJS({
    "node_modules/markdown-it/lib/rules_core/smartquotes.js" (exports1, module2) {
        "use strict";
        var isWhiteSpace = require_utils().isWhiteSpace;
        var isPunctChar = require_utils().isPunctChar;
        var isMdAsciiPunct = require_utils().isMdAsciiPunct;
        var QUOTE_TEST_RE = /['"]/;
        var QUOTE_RE = /['"]/g;
        var APOSTROPHE = "’";
        function replaceAt(str, index, ch) {
            return str.substr(0, index) + ch + str.substr(index + 1);
        }
        function process_inlines(tokens, state) {
            var i, token, text2, t, pos, max2, thisLevel, item2, lastChar, nextChar, isLastPunctChar, isNextPunctChar, isLastWhiteSpace, isNextWhiteSpace, canOpen, canClose, j, isSingle, stack, openQuote, closeQuote;
            stack = [];
            for(i = 0; i < tokens.length; i++){
                token = tokens[i];
                thisLevel = tokens[i].level;
                for(j = stack.length - 1; j >= 0; j--){
                    if (stack[j].level <= thisLevel) {
                        break;
                    }
                }
                stack.length = j + 1;
                if (token.type !== "text") {
                    continue;
                }
                text2 = token.content;
                pos = 0;
                max2 = text2.length;
                OUTER: while(pos < max2){
                    QUOTE_RE.lastIndex = pos;
                    t = QUOTE_RE.exec(text2);
                    if (!t) {
                        break;
                    }
                    canOpen = canClose = true;
                    pos = t.index + 1;
                    isSingle = t[0] === "'";
                    lastChar = 32;
                    if (t.index - 1 >= 0) {
                        lastChar = text2.charCodeAt(t.index - 1);
                    } else {
                        for(j = i - 1; j >= 0; j--){
                            if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak") break;
                            if (!tokens[j].content) continue;
                            lastChar = tokens[j].content.charCodeAt(tokens[j].content.length - 1);
                            break;
                        }
                    }
                    nextChar = 32;
                    if (pos < max2) {
                        nextChar = text2.charCodeAt(pos);
                    } else {
                        for(j = i + 1; j < tokens.length; j++){
                            if (tokens[j].type === "softbreak" || tokens[j].type === "hardbreak") break;
                            if (!tokens[j].content) continue;
                            nextChar = tokens[j].content.charCodeAt(0);
                            break;
                        }
                    }
                    isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
                    isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
                    isLastWhiteSpace = isWhiteSpace(lastChar);
                    isNextWhiteSpace = isWhiteSpace(nextChar);
                    if (isNextWhiteSpace) {
                        canOpen = false;
                    } else if (isNextPunctChar) {
                        if (!(isLastWhiteSpace || isLastPunctChar)) {
                            canOpen = false;
                        }
                    }
                    if (isLastWhiteSpace) {
                        canClose = false;
                    } else if (isLastPunctChar) {
                        if (!(isNextWhiteSpace || isNextPunctChar)) {
                            canClose = false;
                        }
                    }
                    if (nextChar === 34 && t[0] === '"') {
                        if (lastChar >= 48 && lastChar <= 57) {
                            canClose = canOpen = false;
                        }
                    }
                    if (canOpen && canClose) {
                        canOpen = isLastPunctChar;
                        canClose = isNextPunctChar;
                    }
                    if (!canOpen && !canClose) {
                        if (isSingle) {
                            token.content = replaceAt(token.content, t.index, APOSTROPHE);
                        }
                        continue;
                    }
                    if (canClose) {
                        for(j = stack.length - 1; j >= 0; j--){
                            item2 = stack[j];
                            if (stack[j].level < thisLevel) {
                                break;
                            }
                            if (item2.single === isSingle && stack[j].level === thisLevel) {
                                item2 = stack[j];
                                if (isSingle) {
                                    openQuote = state.md.options.quotes[2];
                                    closeQuote = state.md.options.quotes[3];
                                } else {
                                    openQuote = state.md.options.quotes[0];
                                    closeQuote = state.md.options.quotes[1];
                                }
                                token.content = replaceAt(token.content, t.index, closeQuote);
                                tokens[item2.token].content = replaceAt(tokens[item2.token].content, item2.pos, openQuote);
                                pos += closeQuote.length - 1;
                                if (item2.token === i) {
                                    pos += openQuote.length - 1;
                                }
                                text2 = token.content;
                                max2 = text2.length;
                                stack.length = j;
                                continue OUTER;
                            }
                        }
                    }
                    if (canOpen) {
                        stack.push({
                            token: i,
                            pos: t.index,
                            single: isSingle,
                            level: thisLevel
                        });
                    } else if (canClose && isSingle) {
                        token.content = replaceAt(token.content, t.index, APOSTROPHE);
                    }
                }
            }
        }
        module2.exports = function smartquotes(state) {
            var blkIdx;
            if (!state.md.options.typographer) {
                return;
            }
            for(blkIdx = state.tokens.length - 1; blkIdx >= 0; blkIdx--){
                if (state.tokens[blkIdx].type !== "inline" || !QUOTE_TEST_RE.test(state.tokens[blkIdx].content)) {
                    continue;
                }
                process_inlines(state.tokens[blkIdx].children, state);
            }
        };
    }
});
// node_modules/markdown-it/lib/token.js
var require_token = __commonJS({
    "node_modules/markdown-it/lib/token.js" (exports1, module2) {
        "use strict";
        function Token(type, tag, nesting) {
            this.type = type;
            this.tag = tag;
            this.attrs = null;
            this.map = null;
            this.nesting = nesting;
            this.level = 0;
            this.children = null;
            this.content = "";
            this.markup = "";
            this.info = "";
            this.meta = null;
            this.block = false;
            this.hidden = false;
        }
        Token.prototype.attrIndex = function attrIndex(name) {
            var attrs, i, len;
            if (!this.attrs) {
                return -1;
            }
            attrs = this.attrs;
            for(i = 0, len = attrs.length; i < len; i++){
                if (attrs[i][0] === name) {
                    return i;
                }
            }
            return -1;
        };
        Token.prototype.attrPush = function attrPush(attrData) {
            if (this.attrs) {
                this.attrs.push(attrData);
            } else {
                this.attrs = [
                    attrData
                ];
            }
        };
        Token.prototype.attrSet = function attrSet(name, value) {
            var idx = this.attrIndex(name), attrData = [
                name,
                value
            ];
            if (idx < 0) {
                this.attrPush(attrData);
            } else {
                this.attrs[idx] = attrData;
            }
        };
        Token.prototype.attrGet = function attrGet(name) {
            var idx = this.attrIndex(name), value = null;
            if (idx >= 0) {
                value = this.attrs[idx][1];
            }
            return value;
        };
        Token.prototype.attrJoin = function attrJoin(name, value) {
            var idx = this.attrIndex(name);
            if (idx < 0) {
                this.attrPush([
                    name,
                    value
                ]);
            } else {
                this.attrs[idx][1] = this.attrs[idx][1] + " " + value;
            }
        };
        module2.exports = Token;
    }
});
// node_modules/markdown-it/lib/rules_core/state_core.js
var require_state_core = __commonJS({
    "node_modules/markdown-it/lib/rules_core/state_core.js" (exports1, module2) {
        "use strict";
        var Token = require_token();
        function StateCore(src, md, env) {
            this.src = src;
            this.env = env;
            this.tokens = [];
            this.inlineMode = false;
            this.md = md;
        }
        StateCore.prototype.Token = Token;
        module2.exports = StateCore;
    }
});
// node_modules/markdown-it/lib/parser_core.js
var require_parser_core = __commonJS({
    "node_modules/markdown-it/lib/parser_core.js" (exports1, module2) {
        "use strict";
        var Ruler = require_ruler();
        var _rules = [
            [
                "normalize",
                require_normalize()
            ],
            [
                "block",
                require_block()
            ],
            [
                "inline",
                require_inline()
            ],
            [
                "linkify",
                require_linkify()
            ],
            [
                "replacements",
                require_replacements()
            ],
            [
                "smartquotes",
                require_smartquotes()
            ]
        ];
        function Core() {
            this.ruler = new Ruler();
            for(var i = 0; i < _rules.length; i++){
                this.ruler.push(_rules[i][0], _rules[i][1]);
            }
        }
        Core.prototype.process = function(state) {
            var i, l, rules;
            rules = this.ruler.getRules("");
            for(i = 0, l = rules.length; i < l; i++){
                rules[i](state);
            }
        };
        Core.prototype.State = require_state_core();
        module2.exports = Core;
    }
});
// node_modules/markdown-it/lib/rules_block/table.js
var require_table = __commonJS({
    "node_modules/markdown-it/lib/rules_block/table.js" (exports1, module2) {
        "use strict";
        var isSpace = require_utils().isSpace;
        function getLine2(state, line) {
            var pos = state.bMarks[line] + state.tShift[line], max2 = state.eMarks[line];
            return state.src.substr(pos, max2 - pos);
        }
        function escapedSplit(str) {
            var result = [], pos = 0, max2 = str.length, ch, isEscaped = false, lastPos = 0, current = "";
            ch = str.charCodeAt(pos);
            while(pos < max2){
                if (ch === 124) {
                    if (!isEscaped) {
                        result.push(current + str.substring(lastPos, pos));
                        current = "";
                        lastPos = pos + 1;
                    } else {
                        current += str.substring(lastPos, pos - 1);
                        lastPos = pos;
                    }
                }
                isEscaped = ch === 92;
                pos++;
                ch = str.charCodeAt(pos);
            }
            result.push(current + str.substring(lastPos));
            return result;
        }
        module2.exports = function table3(state, startLine, endLine, silent) {
            var ch, lineText, pos, i, l, nextLine, columns, columnCount, token, aligns, t, tableLines, tbodyLines, oldParentType, terminate, terminatorRules, firstCh, secondCh;
            if (startLine + 2 > endLine) {
                return false;
            }
            nextLine = startLine + 1;
            if (state.sCount[nextLine] < state.blkIndent) {
                return false;
            }
            if (!state.md.options.allowIndentation && state.sCount[nextLine] - state.blkIndent >= 4) {
                return false;
            }
            pos = state.bMarks[nextLine] + state.tShift[nextLine];
            if (pos >= state.eMarks[nextLine]) {
                return false;
            }
            firstCh = state.src.charCodeAt(pos++);
            if (firstCh !== 124 && firstCh !== 45 && firstCh !== 58) {
                return false;
            }
            if (pos >= state.eMarks[nextLine]) {
                return false;
            }
            secondCh = state.src.charCodeAt(pos++);
            if (secondCh !== 124 && secondCh !== 45 && secondCh !== 58 && !isSpace(secondCh)) {
                return false;
            }
            if (firstCh === 45 && isSpace(secondCh)) {
                return false;
            }
            while(pos < state.eMarks[nextLine]){
                ch = state.src.charCodeAt(pos);
                if (ch !== 124 && ch !== 45 && ch !== 58 && !isSpace(ch)) {
                    return false;
                }
                pos++;
            }
            lineText = getLine2(state, startLine + 1);
            columns = lineText.split("|");
            aligns = [];
            for(i = 0; i < columns.length; i++){
                t = columns[i].trim();
                if (!t) {
                    if (i === 0 || i === columns.length - 1) {
                        continue;
                    } else {
                        return false;
                    }
                }
                if (!/^:?-+:?$/.test(t)) {
                    return false;
                }
                if (t.charCodeAt(t.length - 1) === 58) {
                    aligns.push(t.charCodeAt(0) === 58 ? "center" : "right");
                } else if (t.charCodeAt(0) === 58) {
                    aligns.push("left");
                } else {
                    aligns.push("");
                }
            }
            lineText = getLine2(state, startLine).trim();
            if (lineText.indexOf("|") === -1) {
                return false;
            }
            if (!state.md.options.allowIndentation && state.sCount[startLine] - state.blkIndent >= 4) {
                return false;
            }
            columns = escapedSplit(lineText);
            if (columns.length && columns[0] === "") columns.shift();
            if (columns.length && columns[columns.length - 1] === "") columns.pop();
            columnCount = columns.length;
            if (columnCount === 0 || columnCount !== aligns.length) {
                return false;
            }
            if (silent) {
                return true;
            }
            oldParentType = state.parentType;
            state.parentType = "table";
            terminatorRules = state.md.block.ruler.getRules("blockquote");
            token = state.push("table_open", "table", 1);
            token.map = tableLines = [
                startLine,
                0
            ];
            token = state.push("thead_open", "thead", 1);
            token.map = [
                startLine,
                startLine + 1
            ];
            token = state.push("tr_open", "tr", 1);
            token.map = [
                startLine,
                startLine + 1
            ];
            for(i = 0; i < columns.length; i++){
                token = state.push("th_open", "th", 1);
                if (aligns[i]) {
                    token.attrs = [
                        [
                            "style",
                            "text-align:" + aligns[i]
                        ]
                    ];
                }
                token = state.push("inline", "", 0);
                token.content = columns[i].trim();
                token.children = [];
                token = state.push("th_close", "th", -1);
            }
            token = state.push("tr_close", "tr", -1);
            token = state.push("thead_close", "thead", -1);
            for(nextLine = startLine + 2; nextLine < endLine; nextLine++){
                if (state.sCount[nextLine] < state.blkIndent) {
                    break;
                }
                terminate = false;
                for(i = 0, l = terminatorRules.length; i < l; i++){
                    if (terminatorRules[i](state, nextLine, endLine, true)) {
                        terminate = true;
                        break;
                    }
                }
                if (terminate) {
                    break;
                }
                lineText = getLine2(state, nextLine).trim();
                if (!lineText) {
                    break;
                }
                if (!state.md.options.allowIndentation && state.sCount[nextLine] - state.blkIndent >= 4) {
                    break;
                }
                columns = escapedSplit(lineText);
                if (columns.length && columns[0] === "") columns.shift();
                if (columns.length && columns[columns.length - 1] === "") columns.pop();
                if (nextLine === startLine + 2) {
                    token = state.push("tbody_open", "tbody", 1);
                    token.map = tbodyLines = [
                        startLine + 2,
                        0
                    ];
                }
                token = state.push("tr_open", "tr", 1);
                token.map = [
                    nextLine,
                    nextLine + 1
                ];
                for(i = 0; i < columnCount; i++){
                    token = state.push("td_open", "td", 1);
                    if (aligns[i]) {
                        token.attrs = [
                            [
                                "style",
                                "text-align:" + aligns[i]
                            ]
                        ];
                    }
                    token = state.push("inline", "", 0);
                    token.content = columns[i] ? columns[i].trim() : "";
                    token.children = [];
                    token = state.push("td_close", "td", -1);
                }
                token = state.push("tr_close", "tr", -1);
            }
            if (tbodyLines) {
                token = state.push("tbody_close", "tbody", -1);
                tbodyLines[1] = nextLine;
            }
            token = state.push("table_close", "table", -1);
            tableLines[1] = nextLine;
            state.parentType = oldParentType;
            state.line = nextLine;
            return true;
        };
    }
});
// node_modules/markdown-it/lib/rules_block/code.js
var require_code = __commonJS({
    "node_modules/markdown-it/lib/rules_block/code.js" (exports1, module2) {
        "use strict";
        module2.exports = function code2(state, startLine, endLine) {
            if (state.md.options.allowIndentation) {
                return false;
            }
            var nextLine, last, token;
            if (state.sCount[startLine] - state.blkIndent < 4) {
                return false;
            }
            last = nextLine = startLine + 1;
            while(nextLine < endLine){
                if (state.isEmpty(nextLine)) {
                    nextLine++;
                    continue;
                }
                if (state.sCount[nextLine] - state.blkIndent >= 4) {
                    nextLine++;
                    last = nextLine;
                    continue;
                }
                break;
            }
            state.line = last;
            token = state.push("code_block", "code", 0);
            token.content = state.getLines(startLine, last, 4 + state.blkIndent, false) + "\n";
            token.map = [
                startLine,
                state.line
            ];
            return true;
        };
    }
});
// node_modules/markdown-it/lib/rules_block/fence.js
var require_fence = __commonJS({
    "node_modules/markdown-it/lib/rules_block/fence.js" (exports1, module2) {
        "use strict";
        module2.exports = function fence3(state, startLine, endLine, silent) {
            var marker, len, params, nextLine, mem, token, markup, haveEndMarker = false, pos = state.bMarks[startLine] + state.tShift[startLine], max2 = state.eMarks[startLine];
            if (!state.md.options.allowIndentation && state.sCount[startLine] - state.blkIndent >= 4) {
                return false;
            }
            if (pos + 3 > max2) {
                return false;
            }
            marker = state.src.charCodeAt(pos);
            if (marker !== 126 && marker !== 96) {
                return false;
            }
            mem = pos;
            pos = state.skipChars(pos, marker);
            len = pos - mem;
            if (len < 3) {
                return false;
            }
            markup = state.src.slice(mem, pos);
            params = state.src.slice(pos, max2);
            if (marker === 96) {
                if (params.indexOf(String.fromCharCode(marker)) >= 0) {
                    return false;
                }
            }
            if (silent) {
                return true;
            }
            nextLine = startLine;
            for(;;){
                nextLine++;
                if (nextLine >= endLine) {
                    break;
                }
                pos = mem = state.bMarks[nextLine] + state.tShift[nextLine];
                max2 = state.eMarks[nextLine];
                if (pos < max2 && state.sCount[nextLine] < state.blkIndent) {
                    break;
                }
                if (state.src.charCodeAt(pos) !== marker) {
                    continue;
                }
                if (!state.md.options.allowIndentation && state.sCount[nextLine] - state.blkIndent >= 4) {
                    continue;
                }
                pos = state.skipChars(pos, marker);
                if (pos - mem < len) {
                    continue;
                }
                pos = state.skipSpaces(pos);
                if (pos < max2) {
                    continue;
                }
                haveEndMarker = true;
                break;
            }
            len = state.sCount[startLine];
            state.line = nextLine + (haveEndMarker ? 1 : 0);
            token = state.push("fence", "code", 0);
            token.info = params;
            token.content = state.getLines(startLine + 1, nextLine, len, true);
            token.markup = markup;
            token.map = [
                startLine,
                state.line
            ];
            return true;
        };
    }
});
// node_modules/markdown-it/lib/rules_block/blockquote.js
var require_blockquote = __commonJS({
    "node_modules/markdown-it/lib/rules_block/blockquote.js" (exports1, module2) {
        "use strict";
        var isSpace = require_utils().isSpace;
        module2.exports = function blockquote2(state, startLine, endLine, silent) {
            var adjustTab, ch, i, initial, l, lastLineEmpty, lines, nextLine, offset, oldBMarks, oldBSCount, oldIndent, oldParentType, oldSCount, oldTShift, spaceAfterMarker, terminate, terminatorRules, token, isOutdented, oldLineMax = state.lineMax, pos = state.bMarks[startLine] + state.tShift[startLine], max2 = state.eMarks[startLine];
            if (!state.md.options.allowIndentation && state.sCount[startLine] - state.blkIndent >= 4) {
                return false;
            }
            if (state.src.charCodeAt(pos++) !== 62) {
                return false;
            }
            if (silent) {
                return true;
            }
            initial = offset = state.sCount[startLine] + 1;
            if (state.src.charCodeAt(pos) === 32) {
                pos++;
                initial++;
                offset++;
                adjustTab = false;
                spaceAfterMarker = true;
            } else if (state.src.charCodeAt(pos) === 9) {
                spaceAfterMarker = true;
                if ((state.bsCount[startLine] + offset) % 4 === 3) {
                    pos++;
                    initial++;
                    offset++;
                    adjustTab = false;
                } else {
                    adjustTab = true;
                }
            } else {
                spaceAfterMarker = false;
            }
            oldBMarks = [
                state.bMarks[startLine]
            ];
            state.bMarks[startLine] = pos;
            while(pos < max2){
                ch = state.src.charCodeAt(pos);
                if (isSpace(ch)) {
                    if (ch === 9) {
                        offset += 4 - (offset + state.bsCount[startLine] + (adjustTab ? 1 : 0)) % 4;
                    } else {
                        offset++;
                    }
                } else {
                    break;
                }
                pos++;
            }
            oldBSCount = [
                state.bsCount[startLine]
            ];
            state.bsCount[startLine] = state.sCount[startLine] + 1 + (spaceAfterMarker ? 1 : 0);
            lastLineEmpty = pos >= max2;
            oldSCount = [
                state.sCount[startLine]
            ];
            state.sCount[startLine] = offset - initial;
            oldTShift = [
                state.tShift[startLine]
            ];
            state.tShift[startLine] = pos - state.bMarks[startLine];
            terminatorRules = state.md.block.ruler.getRules("blockquote");
            oldParentType = state.parentType;
            state.parentType = "blockquote";
            for(nextLine = startLine + 1; nextLine < endLine; nextLine++){
                isOutdented = state.sCount[nextLine] < state.blkIndent;
                pos = state.bMarks[nextLine] + state.tShift[nextLine];
                max2 = state.eMarks[nextLine];
                if (pos >= max2) {
                    break;
                }
                if (state.src.charCodeAt(pos++) === 62 && !isOutdented) {
                    initial = offset = state.sCount[nextLine] + 1;
                    if (state.src.charCodeAt(pos) === 32) {
                        pos++;
                        initial++;
                        offset++;
                        adjustTab = false;
                        spaceAfterMarker = true;
                    } else if (state.src.charCodeAt(pos) === 9) {
                        spaceAfterMarker = true;
                        if ((state.bsCount[nextLine] + offset) % 4 === 3) {
                            pos++;
                            initial++;
                            offset++;
                            adjustTab = false;
                        } else {
                            adjustTab = true;
                        }
                    } else {
                        spaceAfterMarker = false;
                    }
                    oldBMarks.push(state.bMarks[nextLine]);
                    state.bMarks[nextLine] = pos;
                    while(pos < max2){
                        ch = state.src.charCodeAt(pos);
                        if (isSpace(ch)) {
                            if (ch === 9) {
                                offset += 4 - (offset + state.bsCount[nextLine] + (adjustTab ? 1 : 0)) % 4;
                            } else {
                                offset++;
                            }
                        } else {
                            break;
                        }
                        pos++;
                    }
                    lastLineEmpty = pos >= max2;
                    oldBSCount.push(state.bsCount[nextLine]);
                    state.bsCount[nextLine] = state.sCount[nextLine] + 1 + (spaceAfterMarker ? 1 : 0);
                    oldSCount.push(state.sCount[nextLine]);
                    state.sCount[nextLine] = offset - initial;
                    oldTShift.push(state.tShift[nextLine]);
                    state.tShift[nextLine] = pos - state.bMarks[nextLine];
                    continue;
                }
                if (lastLineEmpty) {
                    break;
                }
                terminate = false;
                for(i = 0, l = terminatorRules.length; i < l; i++){
                    if (terminatorRules[i](state, nextLine, endLine, true)) {
                        terminate = true;
                        break;
                    }
                }
                if (terminate) {
                    state.lineMax = nextLine;
                    if (state.blkIndent !== 0) {
                        oldBMarks.push(state.bMarks[nextLine]);
                        oldBSCount.push(state.bsCount[nextLine]);
                        oldTShift.push(state.tShift[nextLine]);
                        oldSCount.push(state.sCount[nextLine]);
                        state.sCount[nextLine] -= state.blkIndent;
                    }
                    break;
                }
                oldBMarks.push(state.bMarks[nextLine]);
                oldBSCount.push(state.bsCount[nextLine]);
                oldTShift.push(state.tShift[nextLine]);
                oldSCount.push(state.sCount[nextLine]);
                state.sCount[nextLine] = -1;
            }
            oldIndent = state.blkIndent;
            state.blkIndent = 0;
            token = state.push("blockquote_open", "blockquote", 1);
            token.markup = ">";
            token.map = lines = [
                startLine,
                0
            ];
            state.md.block.tokenize(state, startLine, nextLine);
            token = state.push("blockquote_close", "blockquote", -1);
            token.markup = ">";
            state.lineMax = oldLineMax;
            state.parentType = oldParentType;
            lines[1] = state.line;
            for(i = 0; i < oldTShift.length; i++){
                state.bMarks[i + startLine] = oldBMarks[i];
                state.tShift[i + startLine] = oldTShift[i];
                state.sCount[i + startLine] = oldSCount[i];
                state.bsCount[i + startLine] = oldBSCount[i];
            }
            state.blkIndent = oldIndent;
            return true;
        };
    }
});
// node_modules/markdown-it/lib/rules_block/hr.js
var require_hr = __commonJS({
    "node_modules/markdown-it/lib/rules_block/hr.js" (exports1, module2) {
        "use strict";
        var isSpace = require_utils().isSpace;
        module2.exports = function hr2(state, startLine, endLine, silent) {
            var marker, cnt, ch, token, pos = state.bMarks[startLine] + state.tShift[startLine], max2 = state.eMarks[startLine];
            if (!state.md.options.allowIndentation && state.sCount[startLine] - state.blkIndent >= 4) {
                return false;
            }
            marker = state.src.charCodeAt(pos++);
            if (marker !== 42 && marker !== 45 && marker !== 95) {
                return false;
            }
            cnt = 1;
            while(pos < max2){
                ch = state.src.charCodeAt(pos++);
                if (ch !== marker && !isSpace(ch)) {
                    return false;
                }
                if (ch === marker) {
                    cnt++;
                }
            }
            if (cnt < 3) {
                return false;
            }
            if (silent) {
                return true;
            }
            state.line = startLine + 1;
            token = state.push("hr", "hr", 0);
            token.map = [
                startLine,
                state.line
            ];
            token.markup = Array(cnt + 1).join(String.fromCharCode(marker));
            return true;
        };
    }
});
// node_modules/markdown-it/lib/rules_block/list.js
var require_list = __commonJS({
    "node_modules/markdown-it/lib/rules_block/list.js" (exports1, module2) {
        "use strict";
        var isSpace = require_utils().isSpace;
        function skipBulletListMarker(state, startLine) {
            var marker, pos, max2, ch;
            pos = state.bMarks[startLine] + state.tShift[startLine];
            max2 = state.eMarks[startLine];
            marker = state.src.charCodeAt(pos++);
            if (marker !== 42 && marker !== 45 && marker !== 43) {
                return -1;
            }
            if (pos < max2) {
                ch = state.src.charCodeAt(pos);
                if (!isSpace(ch)) {
                    return -1;
                }
            }
            return pos;
        }
        function skipOrderedListMarker(state, startLine) {
            var ch, start = state.bMarks[startLine] + state.tShift[startLine], pos = start, max2 = state.eMarks[startLine];
            if (pos + 1 >= max2) {
                return -1;
            }
            ch = state.src.charCodeAt(pos++);
            if (ch < 48 || ch > 57) {
                return -1;
            }
            for(;;){
                if (pos >= max2) {
                    return -1;
                }
                ch = state.src.charCodeAt(pos++);
                if (ch >= 48 && ch <= 57) {
                    if (pos - start >= 10) {
                        return -1;
                    }
                    continue;
                }
                if (ch === 41 || ch === 46) {
                    break;
                }
                return -1;
            }
            if (pos < max2) {
                ch = state.src.charCodeAt(pos);
                if (!isSpace(ch)) {
                    return -1;
                }
            }
            return pos;
        }
        function markTightParagraphs(state, idx) {
            var i, l, level = state.level + 2;
            for(i = idx + 2, l = state.tokens.length - 2; i < l; i++){
                if (state.tokens[i].level === level && state.tokens[i].type === "paragraph_open") {
                    state.tokens[i + 2].hidden = true;
                    state.tokens[i].hidden = true;
                    i += 2;
                }
            }
        }
        module2.exports = function list2(state, startLine, endLine, silent) {
            var ch, contentStart, i, indent, indentAfterMarker, initial, isOrdered, itemLines, l, listLines, listTokIdx, markerCharCode, markerValue, max2, nextLine, offset, oldListIndent, oldParentType, oldSCount, oldTShift, oldTight, pos, posAfterMarker, prevEmptyEnd, start, terminate, terminatorRules, token, isTerminatingParagraph = false, tight = true;
            if (!state.md.options.allowIndentation && state.sCount[startLine] - state.blkIndent >= 4) {
                return false;
            }
            if (!state.md.options.allowIndentation && state.listIndent >= 0 && state.sCount[startLine] - state.listIndent >= 4 && state.sCount[startLine] < state.blkIndent) {
                return false;
            }
            if (silent && state.parentType === "paragraph") {
                if (state.sCount[startLine] >= state.blkIndent) {
                    isTerminatingParagraph = true;
                }
            }
            if ((posAfterMarker = skipOrderedListMarker(state, startLine)) >= 0) {
                isOrdered = true;
                start = state.bMarks[startLine] + state.tShift[startLine];
                markerValue = Number(state.src.slice(start, posAfterMarker - 1));
                if (isTerminatingParagraph && markerValue !== 1) return false;
            } else if ((posAfterMarker = skipBulletListMarker(state, startLine)) >= 0) {
                isOrdered = false;
            } else {
                return false;
            }
            if (isTerminatingParagraph) {
                if (state.skipSpaces(posAfterMarker) >= state.eMarks[startLine]) return false;
            }
            markerCharCode = state.src.charCodeAt(posAfterMarker - 1);
            if (silent) {
                return true;
            }
            listTokIdx = state.tokens.length;
            if (isOrdered) {
                token = state.push("ordered_list_open", "ol", 1);
                if (markerValue !== 1) {
                    token.attrs = [
                        [
                            "start",
                            markerValue
                        ]
                    ];
                }
            } else {
                token = state.push("bullet_list_open", "ul", 1);
            }
            token.map = listLines = [
                startLine,
                0
            ];
            token.markup = String.fromCharCode(markerCharCode);
            nextLine = startLine;
            prevEmptyEnd = false;
            terminatorRules = state.md.block.ruler.getRules("list");
            oldParentType = state.parentType;
            state.parentType = "list";
            while(nextLine < endLine){
                pos = posAfterMarker;
                max2 = state.eMarks[nextLine];
                initial = offset = state.sCount[nextLine] + posAfterMarker - (state.bMarks[startLine] + state.tShift[startLine]);
                while(pos < max2){
                    ch = state.src.charCodeAt(pos);
                    if (ch === 9) {
                        offset += 4 - (offset + state.bsCount[nextLine]) % 4;
                    } else if (ch === 32) {
                        offset++;
                    } else {
                        break;
                    }
                    pos++;
                }
                contentStart = pos;
                if (contentStart >= max2) {
                    indentAfterMarker = 1;
                } else {
                    indentAfterMarker = offset - initial;
                }
                if (!state.md.options.allowIndentation && indentAfterMarker > 4) {
                    indentAfterMarker = 1;
                }
                indent = initial + indentAfterMarker;
                token = state.push("list_item_open", "li", 1);
                token.markup = String.fromCharCode(markerCharCode);
                token.map = itemLines = [
                    startLine,
                    0
                ];
                if (isOrdered) {
                    token.info = state.src.slice(start, posAfterMarker - 1);
                }
                oldTight = state.tight;
                oldTShift = state.tShift[startLine];
                oldSCount = state.sCount[startLine];
                oldListIndent = state.listIndent;
                state.listIndent = state.blkIndent;
                state.blkIndent = indent;
                state.tight = true;
                state.tShift[startLine] = contentStart - state.bMarks[startLine];
                state.sCount[startLine] = offset;
                if (contentStart >= max2 && state.isEmpty(startLine + 1)) {
                    state.line = Math.min(state.line + 2, endLine);
                } else {
                    state.md.block.tokenize(state, startLine, endLine, true);
                }
                if (!state.tight || prevEmptyEnd) {
                    tight = false;
                }
                prevEmptyEnd = state.line - startLine > 1 && state.isEmpty(state.line - 1);
                state.blkIndent = state.listIndent;
                state.listIndent = oldListIndent;
                state.tShift[startLine] = oldTShift;
                state.sCount[startLine] = oldSCount;
                state.tight = oldTight;
                token = state.push("list_item_close", "li", -1);
                token.markup = String.fromCharCode(markerCharCode);
                nextLine = startLine = state.line;
                itemLines[1] = nextLine;
                contentStart = state.bMarks[startLine];
                if (nextLine >= endLine) {
                    break;
                }
                if (state.sCount[nextLine] < state.blkIndent) {
                    break;
                }
                if (!state.md.options.allowIndentation && state.sCount[startLine] - state.blkIndent >= 4) {
                    break;
                }
                terminate = false;
                for(i = 0, l = terminatorRules.length; i < l; i++){
                    if (terminatorRules[i](state, nextLine, endLine, true)) {
                        terminate = true;
                        break;
                    }
                }
                if (terminate) {
                    break;
                }
                if (isOrdered) {
                    posAfterMarker = skipOrderedListMarker(state, nextLine);
                    if (posAfterMarker < 0) {
                        break;
                    }
                    start = state.bMarks[nextLine] + state.tShift[nextLine];
                } else {
                    posAfterMarker = skipBulletListMarker(state, nextLine);
                    if (posAfterMarker < 0) {
                        break;
                    }
                }
                if (markerCharCode !== state.src.charCodeAt(posAfterMarker - 1)) {
                    break;
                }
            }
            if (isOrdered) {
                token = state.push("ordered_list_close", "ol", -1);
            } else {
                token = state.push("bullet_list_close", "ul", -1);
            }
            token.markup = String.fromCharCode(markerCharCode);
            listLines[1] = nextLine;
            state.line = nextLine;
            state.parentType = oldParentType;
            if (tight) {
                markTightParagraphs(state, listTokIdx);
            }
            return true;
        };
    }
});
// node_modules/markdown-it/lib/rules_block/reference.js
var require_reference = __commonJS({
    "node_modules/markdown-it/lib/rules_block/reference.js" (exports1, module2) {
        "use strict";
        var normalizeReference = require_utils().normalizeReference;
        var isSpace = require_utils().isSpace;
        module2.exports = function reference(state, startLine, _endLine, silent) {
            var ch, destEndPos, destEndLineNo, endLine, href, i, l, label, labelEnd, oldParentType, res, start, str, terminate, terminatorRules, title, lines = 0, pos = state.bMarks[startLine] + state.tShift[startLine], max2 = state.eMarks[startLine], nextLine = startLine + 1;
            if (!state.md.options.allowIndentation && state.sCount[startLine] - state.blkIndent >= 4) {
                return false;
            }
            if (state.src.charCodeAt(pos) !== 91) {
                return false;
            }
            while(++pos < max2){
                if (state.src.charCodeAt(pos) === 93 && state.src.charCodeAt(pos - 1) !== 92) {
                    if (pos + 1 === max2) {
                        return false;
                    }
                    if (state.src.charCodeAt(pos + 1) !== 58) {
                        return false;
                    }
                    break;
                }
            }
            endLine = state.lineMax;
            terminatorRules = state.md.block.ruler.getRules("reference");
            oldParentType = state.parentType;
            state.parentType = "reference";
            for(; nextLine < endLine && !state.isEmpty(nextLine); nextLine++){
                if (!state.md.options.allowIndentation && state.sCount[nextLine] - state.blkIndent > 3) {
                    continue;
                }
                if (state.sCount[nextLine] < 0) {
                    continue;
                }
                terminate = false;
                for(i = 0, l = terminatorRules.length; i < l; i++){
                    if (terminatorRules[i](state, nextLine, endLine, true)) {
                        terminate = true;
                        break;
                    }
                }
                if (terminate) {
                    break;
                }
            }
            str = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
            max2 = str.length;
            for(pos = 1; pos < max2; pos++){
                ch = str.charCodeAt(pos);
                if (ch === 91) {
                    return false;
                } else if (ch === 93) {
                    labelEnd = pos;
                    break;
                } else if (ch === 10) {
                    lines++;
                } else if (ch === 92) {
                    pos++;
                    if (pos < max2 && str.charCodeAt(pos) === 10) {
                        lines++;
                    }
                }
            }
            if (labelEnd < 0 || str.charCodeAt(labelEnd + 1) !== 58) {
                return false;
            }
            for(pos = labelEnd + 2; pos < max2; pos++){
                ch = str.charCodeAt(pos);
                if (ch === 10) {
                    lines++;
                } else if (isSpace(ch)) {} else {
                    break;
                }
            }
            res = state.md.helpers.parseLinkDestination(str, pos, max2);
            if (!res.ok) {
                return false;
            }
            href = state.md.normalizeLink(res.str);
            if (!state.md.validateLink(href)) {
                return false;
            }
            pos = res.pos;
            lines += res.lines;
            destEndPos = pos;
            destEndLineNo = lines;
            start = pos;
            for(; pos < max2; pos++){
                ch = str.charCodeAt(pos);
                if (ch === 10) {
                    lines++;
                } else if (isSpace(ch)) {} else {
                    break;
                }
            }
            res = state.md.helpers.parseLinkTitle(str, pos, max2);
            if (pos < max2 && start !== pos && res.ok) {
                title = res.str;
                pos = res.pos;
                lines += res.lines;
            } else {
                title = "";
                pos = destEndPos;
                lines = destEndLineNo;
            }
            while(pos < max2){
                ch = str.charCodeAt(pos);
                if (!isSpace(ch)) {
                    break;
                }
                pos++;
            }
            if (pos < max2 && str.charCodeAt(pos) !== 10) {
                if (title) {
                    title = "";
                    pos = destEndPos;
                    lines = destEndLineNo;
                    while(pos < max2){
                        ch = str.charCodeAt(pos);
                        if (!isSpace(ch)) {
                            break;
                        }
                        pos++;
                    }
                }
            }
            if (pos < max2 && str.charCodeAt(pos) !== 10) {
                return false;
            }
            label = normalizeReference(str.slice(1, labelEnd));
            if (!label) {
                return false;
            }
            if (silent) {
                return true;
            }
            if (typeof state.env.references === "undefined") {
                state.env.references = {};
            }
            if (typeof state.env.references[label] === "undefined") {
                state.env.references[label] = {
                    title,
                    href
                };
            }
            state.parentType = oldParentType;
            state.line = startLine + lines + 1;
            return true;
        };
    }
});
// node_modules/markdown-it/lib/common/html_blocks.js
var require_html_blocks = __commonJS({
    "node_modules/markdown-it/lib/common/html_blocks.js" (exports1, module2) {
        "use strict";
        module2.exports = [
            "address",
            "article",
            "aside",
            "base",
            "basefont",
            "blockquote",
            "body",
            "caption",
            "center",
            "col",
            "colgroup",
            "dd",
            "details",
            "dialog",
            "dir",
            "div",
            "dl",
            "dt",
            "fieldset",
            "figcaption",
            "figure",
            "footer",
            "form",
            "frame",
            "frameset",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "head",
            "header",
            "hr",
            "html",
            "iframe",
            "legend",
            "li",
            "link",
            "main",
            "menu",
            "menuitem",
            "nav",
            "noframes",
            "ol",
            "optgroup",
            "option",
            "p",
            "param",
            "section",
            "source",
            "summary",
            "table",
            "tbody",
            "td",
            "tfoot",
            "th",
            "thead",
            "title",
            "tr",
            "track",
            "ul"
        ];
    }
});
// node_modules/markdown-it/lib/common/html_re.js
var require_html_re = __commonJS({
    "node_modules/markdown-it/lib/common/html_re.js" (exports1, module2) {
        "use strict";
        var attr_name = "[a-zA-Z_:][a-zA-Z0-9:._-]*";
        var unquoted = "[^\"'=<>`\\x00-\\x20]+";
        var single_quoted = "'[^']*'";
        var double_quoted = '"[^"]*"';
        var attr_value = "(?:" + unquoted + "|" + single_quoted + "|" + double_quoted + ")";
        var attribute = "(?:\\s+" + attr_name + "(?:\\s*=\\s*" + attr_value + ")?)";
        var open_tag = "<[A-Za-z][A-Za-z0-9\\-]*" + attribute + "*\\s*\\/?>";
        var close_tag = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";
        var comment2 = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->";
        var processing = "<[?][\\s\\S]*?[?]>";
        var declaration = "<![A-Z]+\\s+[^>]*>";
        var cdata = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>";
        var HTML_TAG_RE = new RegExp("^(?:" + open_tag + "|" + close_tag + "|" + comment2 + "|" + processing + "|" + declaration + "|" + cdata + ")");
        var HTML_OPEN_CLOSE_TAG_RE = new RegExp("^(?:" + open_tag + "|" + close_tag + ")");
        module2.exports.HTML_TAG_RE = HTML_TAG_RE;
        module2.exports.HTML_OPEN_CLOSE_TAG_RE = HTML_OPEN_CLOSE_TAG_RE;
    }
});
// node_modules/markdown-it/lib/rules_block/html_block.js
var require_html_block = __commonJS({
    "node_modules/markdown-it/lib/rules_block/html_block.js" (exports1, module2) {
        "use strict";
        var block_names = require_html_blocks();
        var HTML_OPEN_CLOSE_TAG_RE = require_html_re().HTML_OPEN_CLOSE_TAG_RE;
        var HTML_SEQUENCES = [
            [
                /^<(script|pre|style|textarea)(?=(\s|>|$))/i,
                /<\/(script|pre|style|textarea)>/i,
                true
            ],
            [
                /^<!--/,
                /-->/,
                true
            ],
            [
                /^<\?/,
                /\?>/,
                true
            ],
            [
                /^<![A-Z]/,
                />/,
                true
            ],
            [
                /^<!\[CDATA\[/,
                /\]\]>/,
                true
            ],
            [
                new RegExp("^</?(" + block_names.join("|") + ")(?=(\\s|/?>|$))", "i"),
                /^$/,
                true
            ],
            [
                new RegExp(HTML_OPEN_CLOSE_TAG_RE.source + "\\s*$"),
                /^$/,
                false
            ]
        ];
        module2.exports = function html_block(state, startLine, endLine, silent) {
            var i, nextLine, token, lineText, pos = state.bMarks[startLine] + state.tShift[startLine], max2 = state.eMarks[startLine];
            if (!state.md.options.allowIndentation && state.sCount[startLine] - state.blkIndent >= 4) {
                return false;
            }
            if (!state.md.options.html) {
                return false;
            }
            if (state.src.charCodeAt(pos) !== 60) {
                return false;
            }
            lineText = state.src.slice(pos, max2);
            for(i = 0; i < HTML_SEQUENCES.length; i++){
                if (HTML_SEQUENCES[i][0].test(lineText)) {
                    break;
                }
            }
            if (i === HTML_SEQUENCES.length) {
                return false;
            }
            if (silent) {
                return HTML_SEQUENCES[i][2];
            }
            nextLine = startLine + 1;
            if (!HTML_SEQUENCES[i][1].test(lineText)) {
                for(; nextLine < endLine; nextLine++){
                    if (state.sCount[nextLine] < state.blkIndent) {
                        break;
                    }
                    pos = state.bMarks[nextLine] + state.tShift[nextLine];
                    max2 = state.eMarks[nextLine];
                    lineText = state.src.slice(pos, max2);
                    if (HTML_SEQUENCES[i][1].test(lineText)) {
                        if (lineText.length !== 0) {
                            nextLine++;
                        }
                        break;
                    }
                }
            }
            state.line = nextLine;
            token = state.push("html_block", "", 0);
            token.map = [
                startLine,
                nextLine
            ];
            token.content = state.getLines(startLine, nextLine, state.blkIndent, true);
            return true;
        };
    }
});
// node_modules/markdown-it/lib/rules_block/heading.js
var require_heading = __commonJS({
    "node_modules/markdown-it/lib/rules_block/heading.js" (exports1, module2) {
        "use strict";
        var isSpace = require_utils().isSpace;
        module2.exports = function heading2(state, startLine, endLine, silent) {
            var ch, level, tmp, token, pos = state.bMarks[startLine] + state.tShift[startLine], max2 = state.eMarks[startLine];
            if (!state.md.options.allowIndentation && state.sCount[startLine] - state.blkIndent >= 4) {
                return false;
            }
            ch = state.src.charCodeAt(pos);
            if (ch !== 35 || pos >= max2) {
                return false;
            }
            level = 1;
            ch = state.src.charCodeAt(++pos);
            while(ch === 35 && pos < max2 && level <= 6){
                level++;
                ch = state.src.charCodeAt(++pos);
            }
            if (level > 6 || pos < max2 && !isSpace(ch)) {
                return false;
            }
            if (silent) {
                return true;
            }
            max2 = state.skipSpacesBack(max2, pos);
            tmp = state.skipCharsBack(max2, 35, pos);
            if (tmp > pos && isSpace(state.src.charCodeAt(tmp - 1))) {
                max2 = tmp;
            }
            state.line = startLine + 1;
            token = state.push("heading_open", "h" + String(level), 1);
            token.markup = "########".slice(0, level);
            token.map = [
                startLine,
                state.line
            ];
            token = state.push("inline", "", 0);
            token.content = state.src.slice(pos, max2).trim();
            token.map = [
                startLine,
                state.line
            ];
            token.children = [];
            token = state.push("heading_close", "h" + String(level), -1);
            token.markup = "########".slice(0, level);
            return true;
        };
    }
});
// node_modules/markdown-it/lib/rules_block/lheading.js
var require_lheading = __commonJS({
    "node_modules/markdown-it/lib/rules_block/lheading.js" (exports1, module2) {
        "use strict";
        module2.exports = function lheading(state, startLine, endLine) {
            var content, terminate, i, l, token, pos, max2, level, marker, nextLine = startLine + 1, oldParentType, terminatorRules = state.md.block.ruler.getRules("paragraph");
            if (!state.md.options.allowIndentation && state.sCount[startLine] - state.blkIndent >= 4) {
                return false;
            }
            oldParentType = state.parentType;
            state.parentType = "paragraph";
            for(; nextLine < endLine && !state.isEmpty(nextLine); nextLine++){
                if (!state.md.options.allowIndentation && state.sCount[nextLine] - state.blkIndent > 3) {
                    continue;
                }
                if (state.sCount[nextLine] >= state.blkIndent) {
                    pos = state.bMarks[nextLine] + state.tShift[nextLine];
                    max2 = state.eMarks[nextLine];
                    if (pos < max2) {
                        marker = state.src.charCodeAt(pos);
                        if (marker === 45 || marker === 61) {
                            pos = state.skipChars(pos, marker);
                            pos = state.skipSpaces(pos);
                            if (pos >= max2) {
                                level = marker === 61 ? 1 : 2;
                                break;
                            }
                        }
                    }
                }
                if (state.sCount[nextLine] < 0) {
                    continue;
                }
                terminate = false;
                for(i = 0, l = terminatorRules.length; i < l; i++){
                    if (terminatorRules[i](state, nextLine, endLine, true)) {
                        terminate = true;
                        break;
                    }
                }
                if (terminate) {
                    break;
                }
            }
            if (!level) {
                return false;
            }
            content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
            state.line = nextLine + 1;
            token = state.push("heading_open", "h" + String(level), 1);
            token.markup = String.fromCharCode(marker);
            token.map = [
                startLine,
                state.line
            ];
            token = state.push("inline", "", 0);
            token.content = content;
            token.map = [
                startLine,
                state.line - 1
            ];
            token.children = [];
            token = state.push("heading_close", "h" + String(level), -1);
            token.markup = String.fromCharCode(marker);
            state.parentType = oldParentType;
            return true;
        };
    }
});
// node_modules/markdown-it/lib/rules_block/paragraph.js
var require_paragraph = __commonJS({
    "node_modules/markdown-it/lib/rules_block/paragraph.js" (exports1, module2) {
        "use strict";
        module2.exports = function paragraph2(state, startLine) {
            var content, terminate, i, l, token, oldParentType, nextLine = startLine + 1, terminatorRules = state.md.block.ruler.getRules("paragraph"), endLine = state.lineMax;
            oldParentType = state.parentType;
            state.parentType = "paragraph";
            for(; nextLine < endLine && !state.isEmpty(nextLine); nextLine++){
                if (!state.md.options.allowIndentation && state.sCount[nextLine] - state.blkIndent > 3) {
                    continue;
                }
                if (state.sCount[nextLine] < 0) {
                    continue;
                }
                terminate = false;
                for(i = 0, l = terminatorRules.length; i < l; i++){
                    if (terminatorRules[i](state, nextLine, endLine, true)) {
                        terminate = true;
                        break;
                    }
                }
                if (terminate) {
                    break;
                }
            }
            content = state.getLines(startLine, nextLine, state.blkIndent, false).trim();
            state.line = nextLine;
            token = state.push("paragraph_open", "p", 1);
            token.map = [
                startLine,
                state.line
            ];
            token = state.push("inline", "", 0);
            token.content = content;
            token.map = [
                startLine,
                state.line
            ];
            token.children = [];
            token = state.push("paragraph_close", "p", -1);
            state.parentType = oldParentType;
            return true;
        };
    }
});
// node_modules/markdown-it/lib/rules_block/state_block.js
var require_state_block = __commonJS({
    "node_modules/markdown-it/lib/rules_block/state_block.js" (exports1, module2) {
        "use strict";
        var Token = require_token();
        var isSpace = require_utils().isSpace;
        function StateBlock(src, md, env, tokens) {
            var ch, s2, start, pos, len, indent, offset, indent_found;
            this.src = src;
            this.md = md;
            this.env = env;
            this.tokens = tokens;
            this.bMarks = [];
            this.eMarks = [];
            this.tShift = [];
            this.sCount = [];
            this.bsCount = [];
            this.blkIndent = 0;
            this.line = 0;
            this.lineMax = 0;
            this.tight = false;
            this.ddIndent = -1;
            this.listIndent = -1;
            this.parentType = "root";
            this.level = 0;
            this.result = "";
            s2 = this.src;
            indent_found = false;
            for(start = pos = indent = offset = 0, len = s2.length; pos < len; pos++){
                ch = s2.charCodeAt(pos);
                if (!indent_found) {
                    if (isSpace(ch)) {
                        indent++;
                        if (ch === 9) {
                            offset += 4 - offset % 4;
                        } else {
                            offset++;
                        }
                        continue;
                    } else {
                        indent_found = true;
                    }
                }
                if (ch === 10 || pos === len - 1) {
                    if (ch !== 10) {
                        pos++;
                    }
                    this.bMarks.push(start);
                    this.eMarks.push(pos);
                    this.tShift.push(indent);
                    this.sCount.push(offset);
                    this.bsCount.push(0);
                    indent_found = false;
                    indent = 0;
                    offset = 0;
                    start = pos + 1;
                }
            }
            this.bMarks.push(s2.length);
            this.eMarks.push(s2.length);
            this.tShift.push(0);
            this.sCount.push(0);
            this.bsCount.push(0);
            this.lineMax = this.bMarks.length - 1;
        }
        StateBlock.prototype.push = function(type, tag, nesting) {
            var token = new Token(type, tag, nesting);
            token.block = true;
            if (nesting < 0) this.level--;
            token.level = this.level;
            if (nesting > 0) this.level++;
            this.tokens.push(token);
            return token;
        };
        StateBlock.prototype.isEmpty = function isEmpty(line) {
            return this.bMarks[line] + this.tShift[line] >= this.eMarks[line];
        };
        StateBlock.prototype.skipEmptyLines = function skipEmptyLines(from) {
            for(var max2 = this.lineMax; from < max2; from++){
                if (this.bMarks[from] + this.tShift[from] < this.eMarks[from]) {
                    break;
                }
            }
            return from;
        };
        StateBlock.prototype.skipSpaces = function skipSpaces(pos) {
            var ch;
            for(var max2 = this.src.length; pos < max2; pos++){
                ch = this.src.charCodeAt(pos);
                if (!isSpace(ch)) {
                    break;
                }
            }
            return pos;
        };
        StateBlock.prototype.skipSpacesBack = function skipSpacesBack(pos, min) {
            if (pos <= min) {
                return pos;
            }
            while(pos > min){
                if (!isSpace(this.src.charCodeAt(--pos))) {
                    return pos + 1;
                }
            }
            return pos;
        };
        StateBlock.prototype.skipChars = function skipChars(pos, code2) {
            for(var max2 = this.src.length; pos < max2; pos++){
                if (this.src.charCodeAt(pos) !== code2) {
                    break;
                }
            }
            return pos;
        };
        StateBlock.prototype.skipCharsBack = function skipCharsBack(pos, code2, min) {
            if (pos <= min) {
                return pos;
            }
            while(pos > min){
                if (code2 !== this.src.charCodeAt(--pos)) {
                    return pos + 1;
                }
            }
            return pos;
        };
        StateBlock.prototype.getLines = function getLines(begin, end, indent, keepLastLF) {
            var i, lineIndent, ch, first, last, queue, lineStart, line = begin;
            if (begin >= end) {
                return "";
            }
            queue = new Array(end - begin);
            for(i = 0; line < end; line++, i++){
                lineIndent = 0;
                lineStart = first = this.bMarks[line];
                if (line + 1 < end || keepLastLF) {
                    last = this.eMarks[line] + 1;
                } else {
                    last = this.eMarks[line];
                }
                while(first < last && lineIndent < indent){
                    ch = this.src.charCodeAt(first);
                    if (isSpace(ch)) {
                        if (ch === 9) {
                            lineIndent += 4 - (lineIndent + this.bsCount[line]) % 4;
                        } else {
                            lineIndent++;
                        }
                    } else if (first - lineStart < this.tShift[line]) {
                        lineIndent++;
                    } else {
                        break;
                    }
                    first++;
                }
                if (lineIndent > indent) {
                    queue[i] = new Array(lineIndent - indent + 1).join(" ") + this.src.slice(first, last);
                } else {
                    queue[i] = this.src.slice(first, last);
                }
            }
            return queue.join("");
        };
        StateBlock.prototype.Token = Token;
        module2.exports = StateBlock;
    }
});
// node_modules/markdown-it/lib/parser_block.js
var require_parser_block = __commonJS({
    "node_modules/markdown-it/lib/parser_block.js" (exports1, module2) {
        "use strict";
        var Ruler = require_ruler();
        var _rules = [
            [
                "table",
                require_table(),
                [
                    "paragraph",
                    "reference"
                ]
            ],
            [
                "code",
                require_code()
            ],
            [
                "fence",
                require_fence(),
                [
                    "paragraph",
                    "reference",
                    "blockquote",
                    "list"
                ]
            ],
            [
                "blockquote",
                require_blockquote(),
                [
                    "paragraph",
                    "reference",
                    "blockquote",
                    "list"
                ]
            ],
            [
                "hr",
                require_hr(),
                [
                    "paragraph",
                    "reference",
                    "blockquote",
                    "list"
                ]
            ],
            [
                "list",
                require_list(),
                [
                    "paragraph",
                    "reference",
                    "blockquote"
                ]
            ],
            [
                "reference",
                require_reference()
            ],
            [
                "html_block",
                require_html_block(),
                [
                    "paragraph",
                    "reference",
                    "blockquote"
                ]
            ],
            [
                "heading",
                require_heading(),
                [
                    "paragraph",
                    "reference",
                    "blockquote"
                ]
            ],
            [
                "lheading",
                require_lheading()
            ],
            [
                "paragraph",
                require_paragraph()
            ]
        ];
        function ParserBlock() {
            this.ruler = new Ruler();
            for(var i = 0; i < _rules.length; i++){
                this.ruler.push(_rules[i][0], _rules[i][1], {
                    alt: (_rules[i][2] || []).slice()
                });
            }
        }
        ParserBlock.prototype.tokenize = function(state, startLine, endLine) {
            var ok, i, rules = this.ruler.getRules(""), len = rules.length, line = startLine, hasEmptyLines = false, maxNesting = state.md.options.maxNesting;
            while(line < endLine){
                state.line = line = state.skipEmptyLines(line);
                if (line >= endLine) {
                    break;
                }
                if (state.sCount[line] < state.blkIndent) {
                    break;
                }
                if (state.level >= maxNesting) {
                    state.line = endLine;
                    break;
                }
                for(i = 0; i < len; i++){
                    ok = rules[i](state, line, endLine, false);
                    if (ok) {
                        break;
                    }
                }
                state.tight = !hasEmptyLines;
                if (state.isEmpty(state.line - 1)) {
                    hasEmptyLines = true;
                }
                line = state.line;
                if (line < endLine && state.isEmpty(line)) {
                    hasEmptyLines = true;
                    line++;
                    state.line = line;
                }
            }
        };
        ParserBlock.prototype.parse = function(src, md, env, outTokens) {
            var state;
            if (!src) {
                return;
            }
            state = new this.State(src, md, env, outTokens);
            this.tokenize(state, state.line, state.lineMax);
        };
        ParserBlock.prototype.State = require_state_block();
        module2.exports = ParserBlock;
    }
});
// node_modules/markdown-it/lib/rules_inline/text.js
var require_text = __commonJS({
    "node_modules/markdown-it/lib/rules_inline/text.js" (exports1, module2) {
        "use strict";
        function isTerminatorChar(ch) {
            switch(ch){
                case 10:
                case 33:
                case 35:
                case 36:
                case 37:
                case 38:
                case 42:
                case 43:
                case 45:
                case 58:
                case 60:
                case 61:
                case 62:
                case 64:
                case 91:
                case 92:
                case 93:
                case 94:
                case 95:
                case 96:
                case 123:
                case 125:
                case 126:
                    return true;
                default:
                    return false;
            }
        }
        module2.exports = function text2(state, silent) {
            var pos = state.pos;
            while(pos < state.posMax && !isTerminatorChar(state.src.charCodeAt(pos))){
                pos++;
            }
            if (pos === state.pos) {
                return false;
            }
            if (!silent) {
                state.pending += state.src.slice(state.pos, pos);
            }
            state.pos = pos;
            return true;
        };
    }
});
// node_modules/markdown-it/lib/rules_inline/newline.js
var require_newline = __commonJS({
    "node_modules/markdown-it/lib/rules_inline/newline.js" (exports1, module2) {
        "use strict";
        var isSpace = require_utils().isSpace;
        module2.exports = function newline(state, silent) {
            var pmax, max2, ws, pos = state.pos;
            if (state.src.charCodeAt(pos) !== 10) {
                return false;
            }
            pmax = state.pending.length - 1;
            max2 = state.posMax;
            if (!silent) {
                if (pmax >= 0 && state.pending.charCodeAt(pmax) === 32) {
                    if (pmax >= 1 && state.pending.charCodeAt(pmax - 1) === 32) {
                        ws = pmax - 1;
                        while(ws >= 1 && state.pending.charCodeAt(ws - 1) === 32)ws--;
                        state.pending = state.pending.slice(0, ws);
                        state.push("hardbreak", "br", 0);
                    } else {
                        state.pending = state.pending.slice(0, -1);
                        state.push("softbreak", "br", 0);
                    }
                } else {
                    state.push("softbreak", "br", 0);
                }
            }
            pos++;
            while(pos < max2 && isSpace(state.src.charCodeAt(pos))){
                pos++;
            }
            state.pos = pos;
            return true;
        };
    }
});
// node_modules/markdown-it/lib/rules_inline/escape.js
var require_escape = __commonJS({
    "node_modules/markdown-it/lib/rules_inline/escape.js" (exports1, module2) {
        "use strict";
        var isSpace = require_utils().isSpace;
        var ESCAPED = [];
        for(i = 0; i < 256; i++){
            ESCAPED.push(0);
        }
        var i;
        "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(ch) {
            ESCAPED[ch.charCodeAt(0)] = 1;
        });
        module2.exports = function escape(state, silent) {
            var ch, pos = state.pos, max2 = state.posMax;
            if (state.src.charCodeAt(pos) !== 92) {
                return false;
            }
            pos++;
            if (pos < max2) {
                ch = state.src.charCodeAt(pos);
                if (ch < 256 && ESCAPED[ch] !== 0) {
                    if (!silent) {
                        state.pending += state.src[pos];
                    }
                    state.pos += 2;
                    return true;
                }
                if (ch === 10) {
                    if (!silent) {
                        state.push("hardbreak", "br", 0);
                    }
                    pos++;
                    while(pos < max2){
                        ch = state.src.charCodeAt(pos);
                        if (!isSpace(ch)) {
                            break;
                        }
                        pos++;
                    }
                    state.pos = pos;
                    return true;
                }
            }
            if (!silent) {
                state.pending += "\\";
            }
            state.pos++;
            return true;
        };
    }
});
// node_modules/markdown-it/lib/rules_inline/backticks.js
var require_backticks = __commonJS({
    "node_modules/markdown-it/lib/rules_inline/backticks.js" (exports1, module2) {
        "use strict";
        module2.exports = function backtick(state, silent) {
            var start, max2, marker, token, matchStart, matchEnd, openerLength, closerLength, pos = state.pos, ch = state.src.charCodeAt(pos);
            if (ch !== 96) {
                return false;
            }
            start = pos;
            pos++;
            max2 = state.posMax;
            while(pos < max2 && state.src.charCodeAt(pos) === 96){
                pos++;
            }
            marker = state.src.slice(start, pos);
            openerLength = marker.length;
            if (state.backticksScanned && (state.backticks[openerLength] || 0) <= start) {
                if (!silent) state.pending += marker;
                state.pos += openerLength;
                return true;
            }
            matchStart = matchEnd = pos;
            while((matchStart = state.src.indexOf("`", matchEnd)) !== -1){
                matchEnd = matchStart + 1;
                while(matchEnd < max2 && state.src.charCodeAt(matchEnd) === 96){
                    matchEnd++;
                }
                closerLength = matchEnd - matchStart;
                if (closerLength === openerLength) {
                    if (!silent) {
                        token = state.push("code_inline", "code", 0);
                        token.markup = marker;
                        token.content = state.src.slice(pos, matchStart).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
                    }
                    state.pos = matchEnd;
                    return true;
                }
                state.backticks[closerLength] = matchStart;
            }
            state.backticksScanned = true;
            if (!silent) state.pending += marker;
            state.pos += openerLength;
            return true;
        };
    }
});
// node_modules/markdown-it/lib/rules_inline/strikethrough.js
var require_strikethrough = __commonJS({
    "node_modules/markdown-it/lib/rules_inline/strikethrough.js" (exports1, module2) {
        "use strict";
        module2.exports.tokenize = function strikethrough(state, silent) {
            var i, scanned, token, len, ch, start = state.pos, marker = state.src.charCodeAt(start);
            if (silent) {
                return false;
            }
            if (marker !== 126) {
                return false;
            }
            scanned = state.scanDelims(state.pos, true);
            len = scanned.length;
            ch = String.fromCharCode(marker);
            if (len < 2) {
                return false;
            }
            if (len % 2) {
                token = state.push("text", "", 0);
                token.content = ch;
                len--;
            }
            for(i = 0; i < len; i += 2){
                token = state.push("text", "", 0);
                token.content = ch + ch;
                state.delimiters.push({
                    marker,
                    length: 0,
                    token: state.tokens.length - 1,
                    end: -1,
                    open: scanned.can_open,
                    close: scanned.can_close
                });
            }
            state.pos += scanned.length;
            return true;
        };
        function postProcess(state, delimiters) {
            var i, j, startDelim, endDelim, token, loneMarkers = [], max2 = delimiters.length;
            for(i = 0; i < max2; i++){
                startDelim = delimiters[i];
                if (startDelim.marker !== 126) {
                    continue;
                }
                if (startDelim.end === -1) {
                    continue;
                }
                endDelim = delimiters[startDelim.end];
                token = state.tokens[startDelim.token];
                token.type = "s_open";
                token.tag = "s";
                token.nesting = 1;
                token.markup = "~~";
                token.content = "";
                token = state.tokens[endDelim.token];
                token.type = "s_close";
                token.tag = "s";
                token.nesting = -1;
                token.markup = "~~";
                token.content = "";
                if (state.tokens[endDelim.token - 1].type === "text" && state.tokens[endDelim.token - 1].content === "~") {
                    loneMarkers.push(endDelim.token - 1);
                }
            }
            while(loneMarkers.length){
                i = loneMarkers.pop();
                j = i + 1;
                while(j < state.tokens.length && state.tokens[j].type === "s_close"){
                    j++;
                }
                j--;
                if (i !== j) {
                    token = state.tokens[j];
                    state.tokens[j] = state.tokens[i];
                    state.tokens[i] = token;
                }
            }
        }
        module2.exports.postProcess = function strikethrough(state) {
            var curr, tokens_meta = state.tokens_meta, max2 = state.tokens_meta.length;
            postProcess(state, state.delimiters);
            for(curr = 0; curr < max2; curr++){
                if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
                    postProcess(state, tokens_meta[curr].delimiters);
                }
            }
        };
    }
});
// node_modules/markdown-it/lib/rules_inline/emphasis.js
var require_emphasis = __commonJS({
    "node_modules/markdown-it/lib/rules_inline/emphasis.js" (exports1, module2) {
        "use strict";
        module2.exports.tokenize = function emphasis(state, silent) {
            var i, scanned, token, start = state.pos, marker = state.src.charCodeAt(start);
            if (silent) {
                return false;
            }
            if (marker !== 95 && marker !== 42) {
                return false;
            }
            scanned = state.scanDelims(state.pos, marker === 42);
            for(i = 0; i < scanned.length; i++){
                token = state.push("text", "", 0);
                token.content = String.fromCharCode(marker);
                state.delimiters.push({
                    marker,
                    length: scanned.length,
                    token: state.tokens.length - 1,
                    end: -1,
                    open: scanned.can_open,
                    close: scanned.can_close
                });
            }
            state.pos += scanned.length;
            return true;
        };
        function postProcess(state, delimiters) {
            var i, startDelim, endDelim, token, ch, isStrong, max2 = delimiters.length;
            for(i = max2 - 1; i >= 0; i--){
                startDelim = delimiters[i];
                if (startDelim.marker !== 95 && startDelim.marker !== 42) {
                    continue;
                }
                if (startDelim.end === -1) {
                    continue;
                }
                endDelim = delimiters[startDelim.end];
                isStrong = i > 0 && delimiters[i - 1].end === startDelim.end + 1 && delimiters[i - 1].marker === startDelim.marker && delimiters[i - 1].token === startDelim.token - 1 && delimiters[startDelim.end + 1].token === endDelim.token + 1;
                ch = String.fromCharCode(startDelim.marker);
                token = state.tokens[startDelim.token];
                token.type = isStrong ? "strong_open" : "em_open";
                token.tag = isStrong ? "strong" : "em";
                token.nesting = 1;
                token.markup = isStrong ? ch + ch : ch;
                token.content = "";
                token = state.tokens[endDelim.token];
                token.type = isStrong ? "strong_close" : "em_close";
                token.tag = isStrong ? "strong" : "em";
                token.nesting = -1;
                token.markup = isStrong ? ch + ch : ch;
                token.content = "";
                if (isStrong) {
                    state.tokens[delimiters[i - 1].token].content = "";
                    state.tokens[delimiters[startDelim.end + 1].token].content = "";
                    i--;
                }
            }
        }
        module2.exports.postProcess = function emphasis(state) {
            var curr, tokens_meta = state.tokens_meta, max2 = state.tokens_meta.length;
            postProcess(state, state.delimiters);
            for(curr = 0; curr < max2; curr++){
                if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
                    postProcess(state, tokens_meta[curr].delimiters);
                }
            }
        };
    }
});
// node_modules/markdown-it/lib/rules_inline/link.js
var require_link = __commonJS({
    "node_modules/markdown-it/lib/rules_inline/link.js" (exports1, module2) {
        "use strict";
        var normalizeReference = require_utils().normalizeReference;
        var isSpace = require_utils().isSpace;
        module2.exports = function link2(state, silent) {
            var attrs, code2, label, labelEnd, labelStart, pos, res, ref, token, href = "", title = "", oldPos = state.pos, max2 = state.posMax, start = state.pos, parseReference = true;
            if (state.src.charCodeAt(state.pos) !== 91) {
                return false;
            }
            labelStart = state.pos + 1;
            labelEnd = state.md.helpers.parseLinkLabel(state, state.pos, true);
            if (labelEnd < 0) {
                return false;
            }
            pos = labelEnd + 1;
            if (pos < max2 && state.src.charCodeAt(pos) === 40) {
                parseReference = false;
                pos++;
                for(; pos < max2; pos++){
                    code2 = state.src.charCodeAt(pos);
                    if (!isSpace(code2) && code2 !== 10) {
                        break;
                    }
                }
                if (pos >= max2) {
                    return false;
                }
                start = pos;
                res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
                if (res.ok) {
                    href = state.md.normalizeLink(res.str);
                    if (state.md.validateLink(href)) {
                        pos = res.pos;
                    } else {
                        href = "";
                    }
                    start = pos;
                    for(; pos < max2; pos++){
                        code2 = state.src.charCodeAt(pos);
                        if (!isSpace(code2) && code2 !== 10) {
                            break;
                        }
                    }
                    res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
                    if (pos < max2 && start !== pos && res.ok) {
                        title = res.str;
                        pos = res.pos;
                        for(; pos < max2; pos++){
                            code2 = state.src.charCodeAt(pos);
                            if (!isSpace(code2) && code2 !== 10) {
                                break;
                            }
                        }
                    }
                }
                if (pos >= max2 || state.src.charCodeAt(pos) !== 41) {
                    parseReference = true;
                }
                pos++;
            }
            if (parseReference) {
                if (typeof state.env.references === "undefined") {
                    return false;
                }
                if (pos < max2 && state.src.charCodeAt(pos) === 91) {
                    start = pos + 1;
                    pos = state.md.helpers.parseLinkLabel(state, pos);
                    if (pos >= 0) {
                        label = state.src.slice(start, pos++);
                    } else {
                        pos = labelEnd + 1;
                    }
                } else {
                    pos = labelEnd + 1;
                }
                if (!label) {
                    label = state.src.slice(labelStart, labelEnd);
                }
                ref = state.env.references[normalizeReference(label)];
                if (!ref) {
                    state.pos = oldPos;
                    return false;
                }
                href = ref.href;
                title = ref.title;
            }
            if (!silent) {
                state.pos = labelStart;
                state.posMax = labelEnd;
                token = state.push("link_open", "a", 1);
                token.attrs = attrs = [
                    [
                        "href",
                        href
                    ]
                ];
                if (title) {
                    attrs.push([
                        "title",
                        title
                    ]);
                }
                state.md.inline.tokenize(state);
                token = state.push("link_close", "a", -1);
            }
            state.pos = pos;
            state.posMax = max2;
            return true;
        };
    }
});
// node_modules/markdown-it/lib/rules_inline/image.js
var require_image = __commonJS({
    "node_modules/markdown-it/lib/rules_inline/image.js" (exports1, module2) {
        "use strict";
        var normalizeReference = require_utils().normalizeReference;
        var isSpace = require_utils().isSpace;
        module2.exports = function image2(state, silent) {
            var attrs, code2, content, label, labelEnd, labelStart, pos, ref, res, title, token, tokens, start, href = "", oldPos = state.pos, max2 = state.posMax;
            if (state.src.charCodeAt(state.pos) !== 33) {
                return false;
            }
            if (state.src.charCodeAt(state.pos + 1) !== 91) {
                return false;
            }
            labelStart = state.pos + 2;
            labelEnd = state.md.helpers.parseLinkLabel(state, state.pos + 1, false);
            if (labelEnd < 0) {
                return false;
            }
            pos = labelEnd + 1;
            if (pos < max2 && state.src.charCodeAt(pos) === 40) {
                pos++;
                for(; pos < max2; pos++){
                    code2 = state.src.charCodeAt(pos);
                    if (!isSpace(code2) && code2 !== 10) {
                        break;
                    }
                }
                if (pos >= max2) {
                    return false;
                }
                start = pos;
                res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
                if (res.ok) {
                    href = state.md.normalizeLink(res.str);
                    if (state.md.validateLink(href)) {
                        pos = res.pos;
                    } else {
                        href = "";
                    }
                }
                start = pos;
                for(; pos < max2; pos++){
                    code2 = state.src.charCodeAt(pos);
                    if (!isSpace(code2) && code2 !== 10) {
                        break;
                    }
                }
                res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
                if (pos < max2 && start !== pos && res.ok) {
                    title = res.str;
                    pos = res.pos;
                    for(; pos < max2; pos++){
                        code2 = state.src.charCodeAt(pos);
                        if (!isSpace(code2) && code2 !== 10) {
                            break;
                        }
                    }
                } else {
                    title = "";
                }
                if (pos >= max2 || state.src.charCodeAt(pos) !== 41) {
                    state.pos = oldPos;
                    return false;
                }
                pos++;
            } else {
                if (typeof state.env.references === "undefined") {
                    return false;
                }
                if (pos < max2 && state.src.charCodeAt(pos) === 91) {
                    start = pos + 1;
                    pos = state.md.helpers.parseLinkLabel(state, pos);
                    if (pos >= 0) {
                        label = state.src.slice(start, pos++);
                    } else {
                        pos = labelEnd + 1;
                    }
                } else {
                    pos = labelEnd + 1;
                }
                if (!label) {
                    label = state.src.slice(labelStart, labelEnd);
                }
                ref = state.env.references[normalizeReference(label)];
                if (!ref) {
                    state.pos = oldPos;
                    return false;
                }
                href = ref.href;
                title = ref.title;
            }
            if (!silent) {
                content = state.src.slice(labelStart, labelEnd);
                state.md.inline.parse(content, state.md, state.env, tokens = []);
                token = state.push("image", "img", 0);
                token.attrs = attrs = [
                    [
                        "src",
                        href
                    ],
                    [
                        "alt",
                        ""
                    ]
                ];
                token.children = tokens;
                token.content = content;
                if (title) {
                    attrs.push([
                        "title",
                        title
                    ]);
                }
            }
            state.pos = pos;
            state.posMax = max2;
            return true;
        };
    }
});
// node_modules/markdown-it/lib/rules_inline/autolink.js
var require_autolink = __commonJS({
    "node_modules/markdown-it/lib/rules_inline/autolink.js" (exports1, module2) {
        "use strict";
        var EMAIL_RE = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/;
        var AUTOLINK_RE = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;
        module2.exports = function autolink(state, silent) {
            var url, fullUrl, token, ch, start, max2, pos = state.pos;
            if (state.src.charCodeAt(pos) !== 60) {
                return false;
            }
            start = state.pos;
            max2 = state.posMax;
            for(;;){
                if (++pos >= max2) return false;
                ch = state.src.charCodeAt(pos);
                if (ch === 60) return false;
                if (ch === 62) break;
            }
            url = state.src.slice(start + 1, pos);
            if (AUTOLINK_RE.test(url)) {
                fullUrl = state.md.normalizeLink(url);
                if (!state.md.validateLink(fullUrl)) {
                    return false;
                }
                if (!silent) {
                    token = state.push("link_open", "a", 1);
                    token.attrs = [
                        [
                            "href",
                            fullUrl
                        ]
                    ];
                    token.markup = "autolink";
                    token.info = "auto";
                    token = state.push("text", "", 0);
                    token.content = state.md.normalizeLinkText(url);
                    token = state.push("link_close", "a", -1);
                    token.markup = "autolink";
                    token.info = "auto";
                }
                state.pos += url.length + 2;
                return true;
            }
            if (EMAIL_RE.test(url)) {
                fullUrl = state.md.normalizeLink("mailto:" + url);
                if (!state.md.validateLink(fullUrl)) {
                    return false;
                }
                if (!silent) {
                    token = state.push("link_open", "a", 1);
                    token.attrs = [
                        [
                            "href",
                            fullUrl
                        ]
                    ];
                    token.markup = "autolink";
                    token.info = "auto";
                    token = state.push("text", "", 0);
                    token.content = state.md.normalizeLinkText(url);
                    token = state.push("link_close", "a", -1);
                    token.markup = "autolink";
                    token.info = "auto";
                }
                state.pos += url.length + 2;
                return true;
            }
            return false;
        };
    }
});
// node_modules/markdown-it/lib/rules_inline/html_inline.js
var require_html_inline = __commonJS({
    "node_modules/markdown-it/lib/rules_inline/html_inline.js" (exports1, module2) {
        "use strict";
        var HTML_TAG_RE = require_html_re().HTML_TAG_RE;
        function isLetter(ch) {
            var lc = ch | 32;
            return lc >= 97 && lc <= 122;
        }
        module2.exports = function html_inline(state, silent) {
            var ch, match, max2, token, pos = state.pos;
            if (!state.md.options.html) {
                return false;
            }
            max2 = state.posMax;
            if (state.src.charCodeAt(pos) !== 60 || pos + 2 >= max2) {
                return false;
            }
            ch = state.src.charCodeAt(pos + 1);
            if (ch !== 33 && ch !== 63 && ch !== 47 && !isLetter(ch)) {
                return false;
            }
            match = state.src.slice(pos).match(HTML_TAG_RE);
            if (!match) {
                return false;
            }
            if (!silent) {
                token = state.push("html_inline", "", 0);
                token.content = state.src.slice(pos, pos + match[0].length);
            }
            state.pos += match[0].length;
            return true;
        };
    }
});
// node_modules/markdown-it/lib/rules_inline/entity.js
var require_entity = __commonJS({
    "node_modules/markdown-it/lib/rules_inline/entity.js" (exports1, module2) {
        "use strict";
        var entities = require_entities2();
        var has = require_utils().has;
        var isValidEntityCode = require_utils().isValidEntityCode;
        var fromCodePoint = require_utils().fromCodePoint;
        var DIGITAL_RE = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i;
        var NAMED_RE = /^&([a-z][a-z0-9]{1,31});/i;
        module2.exports = function entity(state, silent) {
            var ch, code2, match, pos = state.pos, max2 = state.posMax;
            if (state.src.charCodeAt(pos) !== 38) {
                return false;
            }
            if (pos + 1 < max2) {
                ch = state.src.charCodeAt(pos + 1);
                if (ch === 35) {
                    match = state.src.slice(pos).match(DIGITAL_RE);
                    if (match) {
                        if (!silent) {
                            code2 = match[1][0].toLowerCase() === "x" ? parseInt(match[1].slice(1), 16) : parseInt(match[1], 10);
                            state.pending += isValidEntityCode(code2) ? fromCodePoint(code2) : fromCodePoint(65533);
                        }
                        state.pos += match[0].length;
                        return true;
                    }
                } else {
                    match = state.src.slice(pos).match(NAMED_RE);
                    if (match) {
                        if (has(entities, match[1])) {
                            if (!silent) {
                                state.pending += entities[match[1]];
                            }
                            state.pos += match[0].length;
                            return true;
                        }
                    }
                }
            }
            if (!silent) {
                state.pending += "&";
            }
            state.pos++;
            return true;
        };
    }
});
// node_modules/markdown-it/lib/rules_inline/balance_pairs.js
var require_balance_pairs = __commonJS({
    "node_modules/markdown-it/lib/rules_inline/balance_pairs.js" (exports1, module2) {
        "use strict";
        function processDelimiters(state, delimiters) {
            var closerIdx, openerIdx, closer, opener, minOpenerIdx, newMinOpenerIdx, isOddMatch, lastJump, openersBottom = {}, max2 = delimiters.length;
            if (!max2) return;
            var headerIdx = 0;
            var lastTokenIdx = -2;
            var jumps = [];
            for(closerIdx = 0; closerIdx < max2; closerIdx++){
                closer = delimiters[closerIdx];
                jumps.push(0);
                if (delimiters[headerIdx].marker !== closer.marker || lastTokenIdx !== closer.token - 1) {
                    headerIdx = closerIdx;
                }
                lastTokenIdx = closer.token;
                closer.length = closer.length || 0;
                if (!closer.close) continue;
                if (!openersBottom.hasOwnProperty(closer.marker)) {
                    openersBottom[closer.marker] = [
                        -1,
                        -1,
                        -1,
                        -1,
                        -1,
                        -1
                    ];
                }
                minOpenerIdx = openersBottom[closer.marker][(closer.open ? 3 : 0) + closer.length % 3];
                openerIdx = headerIdx - jumps[headerIdx] - 1;
                newMinOpenerIdx = openerIdx;
                for(; openerIdx > minOpenerIdx; openerIdx -= jumps[openerIdx] + 1){
                    opener = delimiters[openerIdx];
                    if (opener.marker !== closer.marker) continue;
                    if (opener.open && opener.end < 0) {
                        isOddMatch = false;
                        if (opener.close || closer.open) {
                            if ((opener.length + closer.length) % 3 === 0) {
                                if (opener.length % 3 !== 0 || closer.length % 3 !== 0) {
                                    isOddMatch = true;
                                }
                            }
                        }
                        if (!isOddMatch) {
                            lastJump = openerIdx > 0 && !delimiters[openerIdx - 1].open ? jumps[openerIdx - 1] + 1 : 0;
                            jumps[closerIdx] = closerIdx - openerIdx + lastJump;
                            jumps[openerIdx] = lastJump;
                            closer.open = false;
                            opener.end = closerIdx;
                            opener.close = false;
                            newMinOpenerIdx = -1;
                            lastTokenIdx = -2;
                            break;
                        }
                    }
                }
                if (newMinOpenerIdx !== -1) {
                    openersBottom[closer.marker][(closer.open ? 3 : 0) + (closer.length || 0) % 3] = newMinOpenerIdx;
                }
            }
        }
        module2.exports = function link_pairs(state) {
            var curr, tokens_meta = state.tokens_meta, max2 = state.tokens_meta.length;
            processDelimiters(state, state.delimiters);
            for(curr = 0; curr < max2; curr++){
                if (tokens_meta[curr] && tokens_meta[curr].delimiters) {
                    processDelimiters(state, tokens_meta[curr].delimiters);
                }
            }
        };
    }
});
// node_modules/markdown-it/lib/rules_inline/text_collapse.js
var require_text_collapse = __commonJS({
    "node_modules/markdown-it/lib/rules_inline/text_collapse.js" (exports1, module2) {
        "use strict";
        module2.exports = function text_collapse(state) {
            var curr, last, level = 0, tokens = state.tokens, max2 = state.tokens.length;
            for(curr = last = 0; curr < max2; curr++){
                if (tokens[curr].nesting < 0) level--;
                tokens[curr].level = level;
                if (tokens[curr].nesting > 0) level++;
                if (tokens[curr].type === "text" && curr + 1 < max2 && tokens[curr + 1].type === "text") {
                    tokens[curr + 1].content = tokens[curr].content + tokens[curr + 1].content;
                } else {
                    if (curr !== last) {
                        tokens[last] = tokens[curr];
                    }
                    last++;
                }
            }
            if (curr !== last) {
                tokens.length = last;
            }
        };
    }
});
// node_modules/markdown-it/lib/rules_inline/state_inline.js
var require_state_inline = __commonJS({
    "node_modules/markdown-it/lib/rules_inline/state_inline.js" (exports1, module2) {
        "use strict";
        var Token = require_token();
        var isWhiteSpace = require_utils().isWhiteSpace;
        var isPunctChar = require_utils().isPunctChar;
        var isMdAsciiPunct = require_utils().isMdAsciiPunct;
        function StateInline(src, md, env, outTokens) {
            this.src = src;
            this.env = env;
            this.md = md;
            this.tokens = outTokens;
            this.tokens_meta = Array(outTokens.length);
            this.pos = 0;
            this.posMax = this.src.length;
            this.level = 0;
            this.pending = "";
            this.pendingLevel = 0;
            this.cache = {};
            this.delimiters = [];
            this._prev_delimiters = [];
            this.backticks = {};
            this.backticksScanned = false;
        }
        StateInline.prototype.pushPending = function() {
            var token = new Token("text", "", 0);
            token.content = this.pending;
            token.level = this.pendingLevel;
            this.tokens.push(token);
            this.pending = "";
            return token;
        };
        StateInline.prototype.push = function(type, tag, nesting) {
            if (this.pending) {
                this.pushPending();
            }
            var token = new Token(type, tag, nesting);
            var token_meta = null;
            if (nesting < 0) {
                this.level--;
                this.delimiters = this._prev_delimiters.pop();
            }
            token.level = this.level;
            if (nesting > 0) {
                this.level++;
                this._prev_delimiters.push(this.delimiters);
                this.delimiters = [];
                token_meta = {
                    delimiters: this.delimiters
                };
            }
            this.pendingLevel = this.level;
            this.tokens.push(token);
            this.tokens_meta.push(token_meta);
            return token;
        };
        StateInline.prototype.scanDelims = function(start, canSplitWord) {
            var pos = start, lastChar, nextChar, count, can_open, can_close, isLastWhiteSpace, isLastPunctChar, isNextWhiteSpace, isNextPunctChar, left_flanking = true, right_flanking = true, max2 = this.posMax, marker = this.src.charCodeAt(start);
            lastChar = start > 0 ? this.src.charCodeAt(start - 1) : 32;
            while(pos < max2 && this.src.charCodeAt(pos) === marker){
                pos++;
            }
            count = pos - start;
            nextChar = pos < max2 ? this.src.charCodeAt(pos) : 32;
            isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
            isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
            isLastWhiteSpace = isWhiteSpace(lastChar);
            isNextWhiteSpace = isWhiteSpace(nextChar);
            if (isNextWhiteSpace) {
                left_flanking = false;
            } else if (isNextPunctChar) {
                if (!(isLastWhiteSpace || isLastPunctChar)) {
                    left_flanking = false;
                }
            }
            if (isLastWhiteSpace) {
                right_flanking = false;
            } else if (isLastPunctChar) {
                if (!(isNextWhiteSpace || isNextPunctChar)) {
                    right_flanking = false;
                }
            }
            if (!canSplitWord) {
                can_open = left_flanking && (!right_flanking || isLastPunctChar);
                can_close = right_flanking && (!left_flanking || isNextPunctChar);
            } else {
                can_open = left_flanking;
                can_close = right_flanking;
            }
            return {
                can_open,
                can_close,
                length: count
            };
        };
        StateInline.prototype.Token = Token;
        module2.exports = StateInline;
    }
});
// node_modules/markdown-it/lib/parser_inline.js
var require_parser_inline = __commonJS({
    "node_modules/markdown-it/lib/parser_inline.js" (exports1, module2) {
        "use strict";
        var Ruler = require_ruler();
        var _rules = [
            [
                "text",
                require_text()
            ],
            [
                "newline",
                require_newline()
            ],
            [
                "escape",
                require_escape()
            ],
            [
                "backticks",
                require_backticks()
            ],
            [
                "strikethrough",
                require_strikethrough().tokenize
            ],
            [
                "emphasis",
                require_emphasis().tokenize
            ],
            [
                "link",
                require_link()
            ],
            [
                "image",
                require_image()
            ],
            [
                "autolink",
                require_autolink()
            ],
            [
                "html_inline",
                require_html_inline()
            ],
            [
                "entity",
                require_entity()
            ]
        ];
        var _rules2 = [
            [
                "balance_pairs",
                require_balance_pairs()
            ],
            [
                "strikethrough",
                require_strikethrough().postProcess
            ],
            [
                "emphasis",
                require_emphasis().postProcess
            ],
            [
                "text_collapse",
                require_text_collapse()
            ]
        ];
        function ParserInline() {
            var i;
            this.ruler = new Ruler();
            for(i = 0; i < _rules.length; i++){
                this.ruler.push(_rules[i][0], _rules[i][1]);
            }
            this.ruler2 = new Ruler();
            for(i = 0; i < _rules2.length; i++){
                this.ruler2.push(_rules2[i][0], _rules2[i][1]);
            }
        }
        ParserInline.prototype.skipToken = function(state) {
            var ok, i, pos = state.pos, rules = this.ruler.getRules(""), len = rules.length, maxNesting = state.md.options.maxNesting, cache = state.cache;
            if (typeof cache[pos] !== "undefined") {
                state.pos = cache[pos];
                return;
            }
            if (state.level < maxNesting) {
                for(i = 0; i < len; i++){
                    state.level++;
                    ok = rules[i](state, true);
                    state.level--;
                    if (ok) {
                        break;
                    }
                }
            } else {
                state.pos = state.posMax;
            }
            if (!ok) {
                state.pos++;
            }
            cache[pos] = state.pos;
        };
        ParserInline.prototype.tokenize = function(state) {
            var ok, i, rules = this.ruler.getRules(""), len = rules.length, end = state.posMax, maxNesting = state.md.options.maxNesting;
            while(state.pos < end){
                if (state.level < maxNesting) {
                    for(i = 0; i < len; i++){
                        ok = rules[i](state, false);
                        if (ok) {
                            break;
                        }
                    }
                }
                if (ok) {
                    if (state.pos >= end) {
                        break;
                    }
                    continue;
                }
                state.pending += state.src[state.pos++];
            }
            if (state.pending) {
                state.pushPending();
            }
        };
        ParserInline.prototype.parse = function(str, md, env, outTokens) {
            var i, rules, len;
            var state = new this.State(str, md, env, outTokens);
            this.tokenize(state);
            rules = this.ruler2.getRules("");
            len = rules.length;
            for(i = 0; i < len; i++){
                rules[i](state);
            }
        };
        ParserInline.prototype.State = require_state_inline();
        module2.exports = ParserInline;
    }
});
// node_modules/linkify-it/lib/re.js
var require_re = __commonJS({
    "node_modules/linkify-it/lib/re.js" (exports1, module2) {
        "use strict";
        module2.exports = function(opts) {
            var re = {};
            re.src_Any = require_regex2().source;
            re.src_Cc = require_regex3().source;
            re.src_Z = require_regex5().source;
            re.src_P = require_regex().source;
            re.src_ZPCc = [
                re.src_Z,
                re.src_P,
                re.src_Cc
            ].join("|");
            re.src_ZCc = [
                re.src_Z,
                re.src_Cc
            ].join("|");
            var text_separators = "[><｜]";
            re.src_pseudo_letter = "(?:(?!" + text_separators + "|" + re.src_ZPCc + ")" + re.src_Any + ")";
            re.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
            re.src_auth = "(?:(?:(?!" + re.src_ZCc + "|[@/\\[\\]()]).)+@)?";
            re.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?";
            re.src_host_terminator = "(?=$|" + text_separators + "|" + re.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + re.src_ZPCc + "))";
            re.src_path = "(?:[/?#](?:(?!" + re.src_ZCc + "|" + text_separators + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + re.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + re.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + re.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + re.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + re.src_ZCc + "|[']).)+\\'|\\'(?=" + re.src_pseudo_letter + "|[-]).|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + re.src_ZCc + "|[.]).|" + (opts && opts["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + re.src_ZCc + ").|;(?!" + re.src_ZCc + ").|\\!+(?!" + re.src_ZCc + "|[!]).|\\?(?!" + re.src_ZCc + "|[?]).)+|\\/)?";
            re.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*';
            re.src_xn = "xn--[a-z0-9\\-]{1,59}";
            re.src_domain_root = "(?:" + re.src_xn + "|" + re.src_pseudo_letter + "{1,63})";
            re.src_domain = "(?:" + re.src_xn + "|(?:" + re.src_pseudo_letter + ")|(?:" + re.src_pseudo_letter + "(?:-|" + re.src_pseudo_letter + "){0,61}" + re.src_pseudo_letter + "))";
            re.src_host = "(?:(?:(?:(?:" + re.src_domain + ")\\.)*" + re.src_domain + "))";
            re.tpl_host_fuzzy = "(?:" + re.src_ip4 + "|(?:(?:(?:" + re.src_domain + ")\\.)+(?:%TLDS%)))";
            re.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + re.src_domain + ")\\.)+(?:%TLDS%))";
            re.src_host_strict = re.src_host + re.src_host_terminator;
            re.tpl_host_fuzzy_strict = re.tpl_host_fuzzy + re.src_host_terminator;
            re.src_host_port_strict = re.src_host + re.src_port + re.src_host_terminator;
            re.tpl_host_port_fuzzy_strict = re.tpl_host_fuzzy + re.src_port + re.src_host_terminator;
            re.tpl_host_port_no_ip_fuzzy_strict = re.tpl_host_no_ip_fuzzy + re.src_port + re.src_host_terminator;
            re.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + re.src_ZPCc + "|>|$))";
            re.tpl_email_fuzzy = "(^|" + text_separators + '|"|\\(|' + re.src_ZCc + ")(" + re.src_email_name + "@" + re.tpl_host_fuzzy_strict + ")";
            re.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + re.src_ZPCc + "))((?![$+<=>^`|｜])" + re.tpl_host_port_fuzzy_strict + re.src_path + ")";
            re.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + re.src_ZPCc + "))((?![$+<=>^`|｜])" + re.tpl_host_port_no_ip_fuzzy_strict + re.src_path + ")";
            return re;
        };
    }
});
// node_modules/linkify-it/index.js
var require_linkify_it = __commonJS({
    "node_modules/linkify-it/index.js" (exports1, module2) {
        "use strict";
        function assign(obj) {
            var sources = Array.prototype.slice.call(arguments, 1);
            sources.forEach(function(source) {
                if (!source) {
                    return;
                }
                Object.keys(source).forEach(function(key) {
                    obj[key] = source[key];
                });
            });
            return obj;
        }
        function _class(obj) {
            return Object.prototype.toString.call(obj);
        }
        function isString(obj) {
            return _class(obj) === "[object String]";
        }
        function isObject(obj) {
            return _class(obj) === "[object Object]";
        }
        function isRegExp(obj) {
            return _class(obj) === "[object RegExp]";
        }
        function isFunction2(obj) {
            return _class(obj) === "[object Function]";
        }
        function escapeRE(str) {
            return str.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
        }
        var defaultOptions = {
            fuzzyLink: true,
            fuzzyEmail: true,
            fuzzyIP: false
        };
        function isOptionsObj(obj) {
            return Object.keys(obj || {}).reduce(function(acc, k) {
                return acc || defaultOptions.hasOwnProperty(k);
            }, false);
        }
        var defaultSchemas = {
            "http:": {
                validate: function(text2, pos, self) {
                    var tail = text2.slice(pos);
                    if (!self.re.http) {
                        self.re.http = new RegExp("^\\/\\/" + self.re.src_auth + self.re.src_host_port_strict + self.re.src_path, "i");
                    }
                    if (self.re.http.test(tail)) {
                        return tail.match(self.re.http)[0].length;
                    }
                    return 0;
                }
            },
            "https:": "http:",
            "ftp:": "http:",
            "//": {
                validate: function(text2, pos, self) {
                    var tail = text2.slice(pos);
                    if (!self.re.no_http) {
                        self.re.no_http = new RegExp("^" + self.re.src_auth + "(?:localhost|(?:(?:" + self.re.src_domain + ")\\.)+" + self.re.src_domain_root + ")" + self.re.src_port + self.re.src_host_terminator + self.re.src_path, "i");
                    }
                    if (self.re.no_http.test(tail)) {
                        if (pos >= 3 && text2[pos - 3] === ":") {
                            return 0;
                        }
                        if (pos >= 3 && text2[pos - 3] === "/") {
                            return 0;
                        }
                        return tail.match(self.re.no_http)[0].length;
                    }
                    return 0;
                }
            },
            "mailto:": {
                validate: function(text2, pos, self) {
                    var tail = text2.slice(pos);
                    if (!self.re.mailto) {
                        self.re.mailto = new RegExp("^" + self.re.src_email_name + "@" + self.re.src_host_strict, "i");
                    }
                    if (self.re.mailto.test(tail)) {
                        return tail.match(self.re.mailto)[0].length;
                    }
                    return 0;
                }
            }
        };
        var tlds_2ch_src_re = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]";
        var tlds_default = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
        function resetScanCache(self) {
            self.__index__ = -1;
            self.__text_cache__ = "";
        }
        function createValidator(re) {
            return function(text2, pos) {
                var tail = text2.slice(pos);
                if (re.test(tail)) {
                    return tail.match(re)[0].length;
                }
                return 0;
            };
        }
        function createNormalizer() {
            return function(match, self) {
                self.normalize(match);
            };
        }
        function compile(self) {
            var re = self.re = require_re()(self.__opts__);
            var tlds = self.__tlds__.slice();
            self.onCompile();
            if (!self.__tlds_replaced__) {
                tlds.push(tlds_2ch_src_re);
            }
            tlds.push(re.src_xn);
            re.src_tlds = tlds.join("|");
            function untpl(tpl) {
                return tpl.replace("%TLDS%", re.src_tlds);
            }
            re.email_fuzzy = RegExp(untpl(re.tpl_email_fuzzy), "i");
            re.link_fuzzy = RegExp(untpl(re.tpl_link_fuzzy), "i");
            re.link_no_ip_fuzzy = RegExp(untpl(re.tpl_link_no_ip_fuzzy), "i");
            re.host_fuzzy_test = RegExp(untpl(re.tpl_host_fuzzy_test), "i");
            var aliases = [];
            self.__compiled__ = {};
            function schemaError(name, val) {
                throw new Error('(LinkifyIt) Invalid schema "' + name + '": ' + val);
            }
            Object.keys(self.__schemas__).forEach(function(name) {
                var val = self.__schemas__[name];
                if (val === null) {
                    return;
                }
                var compiled = {
                    validate: null,
                    link: null
                };
                self.__compiled__[name] = compiled;
                if (isObject(val)) {
                    if (isRegExp(val.validate)) {
                        compiled.validate = createValidator(val.validate);
                    } else if (isFunction2(val.validate)) {
                        compiled.validate = val.validate;
                    } else {
                        schemaError(name, val);
                    }
                    if (isFunction2(val.normalize)) {
                        compiled.normalize = val.normalize;
                    } else if (!val.normalize) {
                        compiled.normalize = createNormalizer();
                    } else {
                        schemaError(name, val);
                    }
                    return;
                }
                if (isString(val)) {
                    aliases.push(name);
                    return;
                }
                schemaError(name, val);
            });
            aliases.forEach(function(alias) {
                if (!self.__compiled__[self.__schemas__[alias]]) {
                    return;
                }
                self.__compiled__[alias].validate = self.__compiled__[self.__schemas__[alias]].validate;
                self.__compiled__[alias].normalize = self.__compiled__[self.__schemas__[alias]].normalize;
            });
            self.__compiled__[""] = {
                validate: null,
                normalize: createNormalizer()
            };
            var slist = Object.keys(self.__compiled__).filter(function(name) {
                return name.length > 0 && self.__compiled__[name];
            }).map(escapeRE).join("|");
            self.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + re.src_ZPCc + "))(" + slist + ")", "i");
            self.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + re.src_ZPCc + "))(" + slist + ")", "ig");
            self.re.pretest = RegExp("(" + self.re.schema_test.source + ")|(" + self.re.host_fuzzy_test.source + ")|@", "i");
            resetScanCache(self);
        }
        function Match(self, shift) {
            var start = self.__index__, end = self.__last_index__, text2 = self.__text_cache__.slice(start, end);
            this.schema = self.__schema__.toLowerCase();
            this.index = start + shift;
            this.lastIndex = end + shift;
            this.raw = text2;
            this.text = text2;
            this.url = text2;
        }
        function createMatch(self, shift) {
            var match = new Match(self, shift);
            self.__compiled__[match.schema].normalize(match, self);
            return match;
        }
        function LinkifyIt(schemas, options) {
            if (!(this instanceof LinkifyIt)) {
                return new LinkifyIt(schemas, options);
            }
            if (!options) {
                if (isOptionsObj(schemas)) {
                    options = schemas;
                    schemas = {};
                }
            }
            this.__opts__ = assign({}, defaultOptions, options);
            this.__index__ = -1;
            this.__last_index__ = -1;
            this.__schema__ = "";
            this.__text_cache__ = "";
            this.__schemas__ = assign({}, defaultSchemas, schemas);
            this.__compiled__ = {};
            this.__tlds__ = tlds_default;
            this.__tlds_replaced__ = false;
            this.re = {};
            compile(this);
        }
        LinkifyIt.prototype.add = function add(schema, definition) {
            this.__schemas__[schema] = definition;
            compile(this);
            return this;
        };
        LinkifyIt.prototype.set = function set(options) {
            this.__opts__ = assign(this.__opts__, options);
            return this;
        };
        LinkifyIt.prototype.test = function test(text2) {
            this.__text_cache__ = text2;
            this.__index__ = -1;
            if (!text2.length) {
                return false;
            }
            var m, ml, me, len, shift, next, re, tld_pos, at_pos;
            if (this.re.schema_test.test(text2)) {
                re = this.re.schema_search;
                re.lastIndex = 0;
                while((m = re.exec(text2)) !== null){
                    len = this.testSchemaAt(text2, m[2], re.lastIndex);
                    if (len) {
                        this.__schema__ = m[2];
                        this.__index__ = m.index + m[1].length;
                        this.__last_index__ = m.index + m[0].length + len;
                        break;
                    }
                }
            }
            if (this.__opts__.fuzzyLink && this.__compiled__["http:"]) {
                tld_pos = text2.search(this.re.host_fuzzy_test);
                if (tld_pos >= 0) {
                    if (this.__index__ < 0 || tld_pos < this.__index__) {
                        if ((ml = text2.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null) {
                            shift = ml.index + ml[1].length;
                            if (this.__index__ < 0 || shift < this.__index__) {
                                this.__schema__ = "";
                                this.__index__ = shift;
                                this.__last_index__ = ml.index + ml[0].length;
                            }
                        }
                    }
                }
            }
            if (this.__opts__.fuzzyEmail && this.__compiled__["mailto:"]) {
                at_pos = text2.indexOf("@");
                if (at_pos >= 0) {
                    if ((me = text2.match(this.re.email_fuzzy)) !== null) {
                        shift = me.index + me[1].length;
                        next = me.index + me[0].length;
                        if (this.__index__ < 0 || shift < this.__index__ || shift === this.__index__ && next > this.__last_index__) {
                            this.__schema__ = "mailto:";
                            this.__index__ = shift;
                            this.__last_index__ = next;
                        }
                    }
                }
            }
            return this.__index__ >= 0;
        };
        LinkifyIt.prototype.pretest = function pretest(text2) {
            return this.re.pretest.test(text2);
        };
        LinkifyIt.prototype.testSchemaAt = function testSchemaAt(text2, schema, pos) {
            if (!this.__compiled__[schema.toLowerCase()]) {
                return 0;
            }
            return this.__compiled__[schema.toLowerCase()].validate(text2, pos, this);
        };
        LinkifyIt.prototype.match = function match(text2) {
            var shift = 0, result = [];
            if (this.__index__ >= 0 && this.__text_cache__ === text2) {
                result.push(createMatch(this, shift));
                shift = this.__last_index__;
            }
            var tail = shift ? text2.slice(shift) : text2;
            while(this.test(tail)){
                result.push(createMatch(this, shift));
                tail = tail.slice(this.__last_index__);
                shift += this.__last_index__;
            }
            if (result.length) {
                return result;
            }
            return null;
        };
        LinkifyIt.prototype.tlds = function tlds(list2, keepOld) {
            list2 = Array.isArray(list2) ? list2 : [
                list2
            ];
            if (!keepOld) {
                this.__tlds__ = list2.slice();
                this.__tlds_replaced__ = true;
                compile(this);
                return this;
            }
            this.__tlds__ = this.__tlds__.concat(list2).sort().filter(function(el, idx, arr) {
                return el !== arr[idx - 1];
            }).reverse();
            compile(this);
            return this;
        };
        LinkifyIt.prototype.normalize = function normalize(match) {
            if (!match.schema) {
                match.url = "http://" + match.url;
            }
            if (match.schema === "mailto:" && !/^mailto:/i.test(match.url)) {
                match.url = "mailto:" + match.url;
            }
        };
        LinkifyIt.prototype.onCompile = function onCompile() {};
        module2.exports = LinkifyIt;
    }
});
// node_modules/punycode/punycode.js
var require_punycode = __commonJS({
    "node_modules/punycode/punycode.js" (exports1, module2) {
        "use strict";
        var maxInt = 2147483647;
        var base = 36;
        var tMin = 1;
        var tMax = 26;
        var skew = 38;
        var damp = 700;
        var initialBias = 72;
        var initialN = 128;
        var delimiter = "-";
        var regexPunycode = /^xn--/;
        var regexNonASCII = /[^\0-\x7E]/;
        var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g;
        var errors = {
            "overflow": "Overflow: input needs wider integers to process",
            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
            "invalid-input": "Invalid input"
        };
        var baseMinusTMin = base - tMin;
        var floor = Math.floor;
        var stringFromCharCode = String.fromCharCode;
        function error2(type) {
            throw new RangeError(errors[type]);
        }
        function map(array, fn) {
            const result = [];
            let length = array.length;
            while(length--){
                result[length] = fn(array[length]);
            }
            return result;
        }
        function mapDomain(string, fn) {
            const parts = string.split("@");
            let result = "";
            if (parts.length > 1) {
                result = parts[0] + "@";
                string = parts[1];
            }
            string = string.replace(regexSeparators, ".");
            const labels = string.split(".");
            const encoded = map(labels, fn).join(".");
            return result + encoded;
        }
        function ucs2decode(string) {
            const output = [];
            let counter = 0;
            const length = string.length;
            while(counter < length){
                const value = string.charCodeAt(counter++);
                if (value >= 55296 && value <= 56319 && counter < length) {
                    const extra = string.charCodeAt(counter++);
                    if ((extra & 64512) == 56320) {
                        output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
                    } else {
                        output.push(value);
                        counter--;
                    }
                } else {
                    output.push(value);
                }
            }
            return output;
        }
        var ucs2encode = (array)=>String.fromCodePoint(...array);
        var basicToDigit = function(codePoint) {
            if (codePoint - 48 < 10) {
                return codePoint - 22;
            }
            if (codePoint - 65 < 26) {
                return codePoint - 65;
            }
            if (codePoint - 97 < 26) {
                return codePoint - 97;
            }
            return base;
        };
        var digitToBasic = function(digit, flag) {
            return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
        };
        var adapt = function(delta, numPoints, firstTime) {
            let k = 0;
            delta = firstTime ? floor(delta / damp) : delta >> 1;
            delta += floor(delta / numPoints);
            for(; delta > baseMinusTMin * tMax >> 1; k += base){
                delta = floor(delta / baseMinusTMin);
            }
            return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
        };
        var decode = function(input) {
            const output = [];
            const inputLength = input.length;
            let i = 0;
            let n = initialN;
            let bias = initialBias;
            let basic = input.lastIndexOf(delimiter);
            if (basic < 0) {
                basic = 0;
            }
            for(let j = 0; j < basic; ++j){
                if (input.charCodeAt(j) >= 128) {
                    error2("not-basic");
                }
                output.push(input.charCodeAt(j));
            }
            for(let index = basic > 0 ? basic + 1 : 0; index < inputLength;){
                let oldi = i;
                for(let w = 1, k = base;; k += base){
                    if (index >= inputLength) {
                        error2("invalid-input");
                    }
                    const digit = basicToDigit(input.charCodeAt(index++));
                    if (digit >= base || digit > floor((maxInt - i) / w)) {
                        error2("overflow");
                    }
                    i += digit * w;
                    const t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                    if (digit < t) {
                        break;
                    }
                    const baseMinusT = base - t;
                    if (w > floor(maxInt / baseMinusT)) {
                        error2("overflow");
                    }
                    w *= baseMinusT;
                }
                const out = output.length + 1;
                bias = adapt(i - oldi, out, oldi == 0);
                if (floor(i / out) > maxInt - n) {
                    error2("overflow");
                }
                n += floor(i / out);
                i %= out;
                output.splice(i++, 0, n);
            }
            return String.fromCodePoint(...output);
        };
        var encode = function(input) {
            const output = [];
            input = ucs2decode(input);
            let inputLength = input.length;
            let n = initialN;
            let delta = 0;
            let bias = initialBias;
            for (const currentValue of input){
                if (currentValue < 128) {
                    output.push(stringFromCharCode(currentValue));
                }
            }
            let basicLength = output.length;
            let handledCPCount = basicLength;
            if (basicLength) {
                output.push(delimiter);
            }
            while(handledCPCount < inputLength){
                let m = maxInt;
                for (const currentValue of input){
                    if (currentValue >= n && currentValue < m) {
                        m = currentValue;
                    }
                }
                const handledCPCountPlusOne = handledCPCount + 1;
                if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
                    error2("overflow");
                }
                delta += (m - n) * handledCPCountPlusOne;
                n = m;
                for (const currentValue of input){
                    if (currentValue < n && ++delta > maxInt) {
                        error2("overflow");
                    }
                    if (currentValue == n) {
                        let q = delta;
                        for(let k = base;; k += base){
                            const t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                            if (q < t) {
                                break;
                            }
                            const qMinusT = q - t;
                            const baseMinusT = base - t;
                            output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
                            q = floor(qMinusT / baseMinusT);
                        }
                        output.push(stringFromCharCode(digitToBasic(q, 0)));
                        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                        delta = 0;
                        ++handledCPCount;
                    }
                }
                ++delta;
                ++n;
            }
            return output.join("");
        };
        var toUnicode = function(input) {
            return mapDomain(input, function(string) {
                return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
            });
        };
        var toASCII = function(input) {
            return mapDomain(input, function(string) {
                return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
            });
        };
        var punycode = {
            "version": "2.1.0",
            "ucs2": {
                "decode": ucs2decode,
                "encode": ucs2encode
            },
            "decode": decode,
            "encode": encode,
            "toASCII": toASCII,
            "toUnicode": toUnicode
        };
        module2.exports = punycode;
    }
});
// node_modules/markdown-it/lib/presets/default.js
var require_default = __commonJS({
    "node_modules/markdown-it/lib/presets/default.js" (exports1, module2) {
        "use strict";
        module2.exports = {
            options: {
                html: false,
                xhtmlOut: false,
                breaks: false,
                langPrefix: "language-",
                linkify: false,
                typographer: false,
                quotes: "“”‘’",
                highlight: null,
                maxNesting: 100
            },
            components: {
                core: {},
                block: {},
                inline: {}
            }
        };
    }
});
// node_modules/markdown-it/lib/presets/zero.js
var require_zero = __commonJS({
    "node_modules/markdown-it/lib/presets/zero.js" (exports1, module2) {
        "use strict";
        module2.exports = {
            options: {
                html: false,
                xhtmlOut: false,
                breaks: false,
                langPrefix: "language-",
                linkify: false,
                typographer: false,
                quotes: "“”‘’",
                highlight: null,
                maxNesting: 20
            },
            components: {
                core: {
                    rules: [
                        "normalize",
                        "block",
                        "inline"
                    ]
                },
                block: {
                    rules: [
                        "paragraph"
                    ]
                },
                inline: {
                    rules: [
                        "text"
                    ],
                    rules2: [
                        "balance_pairs",
                        "text_collapse"
                    ]
                }
            }
        };
    }
});
// node_modules/markdown-it/lib/presets/commonmark.js
var require_commonmark = __commonJS({
    "node_modules/markdown-it/lib/presets/commonmark.js" (exports1, module2) {
        "use strict";
        module2.exports = {
            options: {
                html: true,
                xhtmlOut: true,
                breaks: false,
                langPrefix: "language-",
                linkify: false,
                typographer: false,
                quotes: "“”‘’",
                highlight: null,
                maxNesting: 20
            },
            components: {
                core: {
                    rules: [
                        "normalize",
                        "block",
                        "inline"
                    ]
                },
                block: {
                    rules: [
                        "blockquote",
                        "code",
                        "fence",
                        "heading",
                        "hr",
                        "html_block",
                        "lheading",
                        "list",
                        "reference",
                        "paragraph"
                    ]
                },
                inline: {
                    rules: [
                        "autolink",
                        "backticks",
                        "emphasis",
                        "entity",
                        "escape",
                        "html_inline",
                        "image",
                        "link",
                        "newline",
                        "text"
                    ],
                    rules2: [
                        "balance_pairs",
                        "emphasis",
                        "text_collapse"
                    ]
                }
            }
        };
    }
});
// node_modules/markdown-it/lib/index.js
var require_lib = __commonJS({
    "node_modules/markdown-it/lib/index.js" (exports1, module2) {
        "use strict";
        var utils = require_utils();
        var helpers = require_helpers();
        var Renderer = require_renderer();
        var ParserCore = require_parser_core();
        var ParserBlock = require_parser_block();
        var ParserInline = require_parser_inline();
        var LinkifyIt = require_linkify_it();
        var mdurl = require_mdurl();
        var punycode = require_punycode();
        var config = {
            default: require_default(),
            zero: require_zero(),
            commonmark: require_commonmark()
        };
        var BAD_PROTO_RE = /^(vbscript|javascript|file|data):/;
        var GOOD_DATA_RE = /^data:image\/(gif|png|jpeg|webp);/;
        function validateLink(url) {
            var str = url.trim().toLowerCase();
            return BAD_PROTO_RE.test(str) ? GOOD_DATA_RE.test(str) ? true : false : true;
        }
        var RECODE_HOSTNAME_FOR = [
            "http:",
            "https:",
            "mailto:"
        ];
        function normalizeLink(url) {
            var parsed = mdurl.parse(url, true);
            if (parsed.hostname) {
                if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
                    try {
                        parsed.hostname = punycode.toASCII(parsed.hostname);
                    } catch (er) {}
                }
            }
            return mdurl.encode(mdurl.format(parsed));
        }
        function normalizeLinkText(url) {
            var parsed = mdurl.parse(url, true);
            if (parsed.hostname) {
                if (!parsed.protocol || RECODE_HOSTNAME_FOR.indexOf(parsed.protocol) >= 0) {
                    try {
                        parsed.hostname = punycode.toUnicode(parsed.hostname);
                    } catch (er) {}
                }
            }
            return mdurl.decode(mdurl.format(parsed), mdurl.decode.defaultChars + "%");
        }
        function MarkdownIt3(presetName, options) {
            if (!(this instanceof MarkdownIt3)) {
                return new MarkdownIt3(presetName, options);
            }
            if (!options) {
                if (!utils.isString(presetName)) {
                    options = presetName || {};
                    presetName = "default";
                }
            }
            this.inline = new ParserInline();
            this.block = new ParserBlock();
            this.core = new ParserCore();
            this.renderer = new Renderer();
            this.linkify = new LinkifyIt();
            this.validateLink = validateLink;
            this.normalizeLink = normalizeLink;
            this.normalizeLinkText = normalizeLinkText;
            this.utils = utils;
            this.helpers = utils.assign({}, helpers);
            this.options = {};
            this.configure(presetName);
            if (options) {
                this.set(options);
            }
        }
        MarkdownIt3.prototype.set = function(options) {
            utils.assign(this.options, options);
            return this;
        };
        MarkdownIt3.prototype.configure = function(presets) {
            var self = this, presetName;
            if (utils.isString(presets)) {
                presetName = presets;
                presets = config[presetName];
                if (!presets) {
                    throw new Error('Wrong `markdown-it` preset "' + presetName + '", check name');
                }
            }
            if (!presets) {
                throw new Error("Wrong `markdown-it` preset, can't be empty");
            }
            if (presets.options) {
                self.set(presets.options);
            }
            if (presets.components) {
                Object.keys(presets.components).forEach(function(name) {
                    if (presets.components[name].rules) {
                        self[name].ruler.enableOnly(presets.components[name].rules);
                    }
                    if (presets.components[name].rules2) {
                        self[name].ruler2.enableOnly(presets.components[name].rules2);
                    }
                });
            }
            return this;
        };
        MarkdownIt3.prototype.enable = function(list2, ignoreInvalid) {
            var result = [];
            if (!Array.isArray(list2)) {
                list2 = [
                    list2
                ];
            }
            [
                "core",
                "block",
                "inline"
            ].forEach(function(chain) {
                result = result.concat(this[chain].ruler.enable(list2, true));
            }, this);
            result = result.concat(this.inline.ruler2.enable(list2, true));
            var missed = list2.filter(function(name) {
                return result.indexOf(name) < 0;
            });
            if (missed.length && !ignoreInvalid) {
                throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + missed);
            }
            return this;
        };
        MarkdownIt3.prototype.disable = function(list2, ignoreInvalid) {
            var result = [];
            if (!Array.isArray(list2)) {
                list2 = [
                    list2
                ];
            }
            [
                "core",
                "block",
                "inline"
            ].forEach(function(chain) {
                result = result.concat(this[chain].ruler.disable(list2, true));
            }, this);
            result = result.concat(this.inline.ruler2.disable(list2, true));
            var missed = list2.filter(function(name) {
                return result.indexOf(name) < 0;
            });
            if (missed.length && !ignoreInvalid) {
                throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + missed);
            }
            return this;
        };
        MarkdownIt3.prototype.use = function(plugin4) {
            var args = [
                this
            ].concat(Array.prototype.slice.call(arguments, 1));
            plugin4.apply(plugin4, args);
            return this;
        };
        MarkdownIt3.prototype.parse = function(src, env) {
            if (typeof src !== "string") {
                throw new Error("Input data should be a String");
            }
            var state = new this.core.State(src, this, env);
            this.core.process(state);
            return state.tokens;
        };
        MarkdownIt3.prototype.render = function(src, env) {
            env = env || {};
            return this.renderer.render(this.parse(src, env), this.options, env);
        };
        MarkdownIt3.prototype.parseInline = function(src, env) {
            var state = new this.core.State(src, this, env);
            state.inlineMode = true;
            this.core.process(state);
            return state.tokens;
        };
        MarkdownIt3.prototype.renderInline = function(src, env) {
            env = env || {};
            return this.renderer.render(this.parseInline(src, env), this.options, env);
        };
        module2.exports = MarkdownIt3;
    }
});
// node_modules/markdown-it/index.js
var require_markdown_it = __commonJS({
    "node_modules/markdown-it/index.js" (exports1, module2) {
        "use strict";
        module2.exports = require_lib();
    }
});
// index.ts
__export(exports, {
    Ast: ()=>ast_default,
    Tag: ()=>Tag,
    Tokenizer: ()=>Tokenizer,
    createElement: ()=>createElement,
    default: ()=>Markdoc,
    format: ()=>format,
    functions: ()=>functions_default,
    globalAttributes: ()=>globalAttributes,
    nodes: ()=>schema_exports,
    parse: ()=>parse3,
    parseTags: ()=>parseTags,
    renderers: ()=>renderers_default,
    resolve: ()=>resolve2,
    tags: ()=>tags_default,
    transform: ()=>transform2,
    transformer: ()=>transformer_default,
    transforms: ()=>transforms_default,
    truthy: ()=>truthy,
    validate: ()=>validate,
    validator: ()=>validator
});
// src/ast/base.ts
var base_exports = {};
__export(base_exports, {
    getAstValues: ()=>getAstValues,
    isAst: ()=>isAst,
    isFunction: ()=>isFunction,
    isVariable: ()=>isVariable,
    resolve: ()=>resolve
});
function isAst(value) {
    return !!value?.$$mdtype;
}
function isFunction(value) {
    return !!(value?.$$mdtype === "Function");
}
function isVariable(value) {
    return !!(value?.$$mdtype === "Variable");
}
function* getAstValues(value) {
    if (value == null || typeof value !== "object") return;
    if (Array.isArray(value)) for (const v of value)yield* getAstValues(v);
    if (isAst(value)) yield value;
    if (Object.getPrototypeOf(value) !== Object.prototype) return;
    for (const v of Object.values(value))yield* getAstValues(v);
}
function resolve(value, config = {}) {
    if (value == null || typeof value !== "object") return value;
    if (Array.isArray(value)) return value.map((item2)=>resolve(item2, config));
    if (isAst(value) && value?.resolve instanceof Function) return value.resolve(config);
    if (Object.getPrototypeOf(value) !== Object.prototype) return value;
    const output = {};
    for (const [k, v] of Object.entries(value))output[k] = resolve(v, config);
    return output;
}
// src/tag.ts
var Tag = class {
    constructor(name = "div", attributes = {}, children = []){
        this.$$mdtype = "Tag";
        this.name = name;
        this.attributes = attributes;
        this.children = children;
    }
};
Tag.isTag = (tag)=>{
    return !!(tag?.$$mdtype === "Tag");
};
// src/schema-types/class.ts
var Class = class {
    validate(value) {
        if (typeof value === "string" || typeof value === "object") return [];
        return [
            {
                id: "attribute-type-invalid",
                level: "error",
                message: `Attribute 'class' must be type 'string | object'`
            }
        ];
    }
    transform(value) {
        if (!value || typeof value === "string") return value;
        const classes = [];
        for (const [k, v] of Object.entries(value ?? {}))if (v) classes.push(k);
        return classes.join(" ");
    }
};
// src/schema-types/id.ts
var Id = class {
    validate(value) {
        if (typeof value === "string" && value.match(/^[a-zA-Z]/)) return [];
        return [
            {
                id: "attribute-value-invalid",
                level: "error",
                message: "The 'id' attribute must start with a letter"
            }
        ];
    }
};
// src/utils.ts
var import_tag = __toModule(require_tag());
// src/ast/variable.ts
var Variable = class {
    constructor(path = []){
        this.$$mdtype = "Variable";
        this.path = path;
    }
    resolve({ variables } = {}) {
        return variables instanceof Function ? variables(this.path) : this.path.reduce((obj = {}, key)=>obj[key], variables);
    }
};
// src/ast/function.ts
var Function2 = class {
    constructor(name, parameters){
        this.$$mdtype = "Function";
        this.name = name;
        this.parameters = parameters;
    }
    resolve(config = {}) {
        const fn = config?.functions?.[this.name];
        if (!fn) return null;
        const parameters = resolve(this.parameters, config);
        return fn.transform?.(parameters, config);
    }
};
// src/utils.ts
var STATES;
(function(STATES2) {
    STATES2[STATES2["normal"] = 0] = "normal";
    STATES2[STATES2["string"] = 1] = "string";
    STATES2[STATES2["escape"] = 2] = "escape";
})(STATES || (STATES = {}));
var OPEN = "{%";
var CLOSE = "%}";
var IDENTIFIER_REGEX = /^[a-zA-Z0-9_-]+$/;
function isIdentifier(s2) {
    return typeof s2 === "string" && IDENTIFIER_REGEX.test(s2);
}
function isPromise(a) {
    return a && typeof a === "object" && typeof a.then === "function";
}
function findTagEnd(content, start = 0) {
    let state = 0;
    for(let pos = start; pos < content.length; pos++){
        const char = content[pos];
        switch(state){
            case 1:
                switch(char){
                    case '"':
                        state = 0;
                        break;
                    case "\\":
                        state = 2;
                        break;
                }
                break;
            case 2:
                state = 1;
                break;
            case 0:
                if (char === '"') state = 1;
                else if (content.startsWith(CLOSE, pos)) return pos;
        }
    }
    return null;
}
function parseTag(content, line, contentStart) {
    try {
        return (0, import_tag.parse)(content, {
            Variable,
            Function: Function2
        });
    } catch (error2) {
        if (!(error2 instanceof import_tag.SyntaxError)) throw error2;
        const { message, location: { start, end } } = error2;
        const location = {
            start: {
                line,
                character: start.offset + contentStart
            },
            end: {
                line: line + 1,
                character: end.offset + contentStart
            }
        };
        return {
            type: "error",
            meta: {
                error: {
                    message,
                    location
                }
            }
        };
    }
}
function parseTags(content, firstLine = 0) {
    let line = firstLine + 1;
    const output = [];
    let start = 0;
    for(let pos = 0; pos < content.length; pos++){
        if (content[pos] === "\n") {
            line++;
            continue;
        }
        if (!content.startsWith(OPEN, pos)) continue;
        const end = findTagEnd(content, pos);
        if (end == null) {
            pos = pos + OPEN.length;
            continue;
        }
        const text2 = content.slice(pos, end + CLOSE.length);
        const inner = content.slice(pos + OPEN.length, end);
        const lineStart = content.lastIndexOf("\n", pos);
        const lineEnd = content.indexOf("\n", end);
        const lineContent = content.slice(lineStart, lineEnd);
        const tag = parseTag(inner.trim(), line, pos - lineStart);
        const precedingTextEnd = lineContent.trim() === text2 ? lineStart : pos;
        const precedingText = content.slice(start, precedingTextEnd);
        output.push({
            type: "text",
            start,
            end: pos - 1,
            content: precedingText
        });
        output.push({
            map: [
                line,
                line + 1
            ],
            position: {
                start: pos - lineStart,
                end: pos - lineStart + text2.length
            },
            start: pos,
            end: pos + text2.length - 1,
            info: text2,
            ...tag
        });
        start = end + CLOSE.length;
        pos = start - 1;
    }
    output.push({
        type: "text",
        start,
        end: content.length - 1,
        content: content.slice(start)
    });
    return output;
}
// src/transformer.ts
var globalAttributes = {
    class: {
        type: Class,
        render: true
    },
    id: {
        type: Id,
        render: true
    }
};
var transformer_default = {
    findSchema (node2, { nodes = {}, tags = {} } = {}) {
        return node2.tag ? tags[node2.tag] : nodes[node2.type];
    },
    attributes (node2, config = {}) {
        const schema = this.findSchema(node2, config) ?? {};
        const output = {};
        const attrs = {
            ...globalAttributes,
            ...schema.attributes
        };
        for (const [key, attr] of Object.entries(attrs)){
            if (attr.render == false) continue;
            const name = typeof attr.render === "string" ? attr.render : key;
            let value = node2.attributes[key];
            if (typeof attr.type === "function") {
                const instance = new attr.type();
                if (instance.transform) {
                    value = instance.transform(value, config);
                }
            }
            value = value === void 0 ? attr.default : value;
            if (value === void 0) continue;
            output[name] = value;
        }
        return output;
    },
    children (node2, config = {}) {
        const children = node2.children.flatMap((child)=>this.node(child, config));
        if (children.some(isPromise)) {
            return Promise.all(children);
        }
        return children;
    },
    node (node2, config = {}) {
        const schema = this.findSchema(node2, config) ?? {};
        if (schema && schema.transform instanceof Function) return schema.transform(node2, config);
        const children = this.children(node2, config);
        if (!schema || !schema.render) return children;
        const attributes = this.attributes(node2, config);
        if (isPromise(attributes) || isPromise(children)) {
            return Promise.all([
                attributes,
                children
            ]).then((values)=>new Tag(schema.render, ...values));
        }
        return new Tag(schema.render, attributes, children);
    }
};
// src/ast/node.ts
var Node = class {
    constructor(type = "node", attributes = {}, children = [], tag){
        this.$$mdtype = "Node";
        this.errors = [];
        this.lines = [];
        this.inline = false;
        this.attributes = attributes;
        this.children = children;
        this.type = type;
        this.tag = tag;
        this.annotations = [];
    }
    *walk() {
        for (const child of this.children){
            yield child;
            yield* child.walk();
        }
    }
    push(node2) {
        this.children.push(node2);
    }
    resolve(config = {}) {
        return Object.assign(new Node(), this, {
            children: this.children.map((child)=>child.resolve(config)),
            attributes: resolve(this.attributes, config)
        });
    }
    findSchema(config = {}) {
        return transformer_default.findSchema(this, config);
    }
    transformAttributes(config = {}) {
        return transformer_default.attributes(this, config);
    }
    transformChildren(config) {
        return transformer_default.children(this, config);
    }
    transform(config) {
        return transformer_default.node(this, config);
    }
};
// src/ast/index.ts
var AstTypes = {
    Function: Function2,
    Node,
    Variable
};
function reviver(_, value) {
    if (!value) return value;
    const klass = AstTypes[value.$$mdtype];
    return klass ? Object.assign(new klass(), value) : value;
}
function fromJSON(text2) {
    return JSON.parse(text2, reviver);
}
var ast_default = {
    ...AstTypes,
    ...base_exports,
    fromJSON
};
// src/formatter.ts
var SPACE = " ";
var SEP = ", ";
var NL = "\n";
var OL = "1. ";
var UL = "- ";
var MAX_TAG_OPENING_WIDTH = 80;
var WRAPPING_TYPES = [
    "strong",
    "em",
    "s"
];
var max = (a, b)=>Math.max(a, b);
var increment = (o, n = 2)=>({
        ...o,
        indent: (o.indent || 0) + n
    });
function* formatChildren(a, options) {
    for (const child of a.children){
        yield* formatValue(child, options);
    }
}
function* formatInline(g) {
    yield [
        ...g
    ].join("").trim();
}
function* formatTableRow(items) {
    yield `| ${items.join(" | ")} |`;
}
function formatScalar(v) {
    if (ast_default.isAst(v)) {
        return format(v);
    }
    if (v === null) {
        return "null";
    }
    if (Array.isArray(v)) {
        return "[" + v.map(formatScalar).join(SEP) + "]";
    }
    if (typeof v === "object") {
        return "{" + Object.entries(v).map(([key, value])=>`${isIdentifier(key) ? key : `"${key}"`}: ${formatScalar(value)}`).join(SEP) + "}";
    }
    return JSON.stringify(v);
}
function formatAnnotationValue(a) {
    if (a.name === "primary") return formatScalar(a.value);
    if (a.name === "id" && typeof a.value === "string" && isIdentifier(a.value)) return "#" + a.value;
    if (a.type === "class" && isIdentifier(a.name)) return "." + a.name;
    return `${a.name}=${formatScalar(a.value)}`;
}
function* formatAttributes(n) {
    for (const [key, value] of Object.entries(n.attributes)){
        if (key === "class" && typeof value === "object" && !ast_default.isAst(value)) for (const name of Object.keys(value)){
            yield formatAnnotationValue({
                type: "class",
                name,
                value
            });
        }
        else yield formatAnnotationValue({
            type: "attribute",
            name: key,
            value
        });
    }
}
function* formatAnnotations(n) {
    if (n.annotations.length) {
        yield OPEN + SPACE;
        yield n.annotations.map(formatAnnotationValue).join(SPACE);
        yield SPACE + CLOSE;
    }
}
function* formatVariable(v) {
    yield "$";
    yield v.path.map((p, i)=>{
        if (i === 0) return p;
        if (isIdentifier(p)) return "." + p;
        if (typeof p === "number") return `[${p}]`;
        return `["${p}"]`;
    }).join("");
}
function* formatFunction(f) {
    yield f.name;
    yield "(";
    yield Object.values(f.parameters).map(formatScalar).join(SEP);
    yield ")";
}
function* trimStart(g) {
    let n;
    do {
        const { value, done } = g.next();
        if (done) return;
        n = value.trimStart();
    }while (!n.length);
    yield n;
    yield* g;
}
function* escapeMarkdownCharacters(s2, characters) {
    yield s2.replace(characters, "\\$&").replace(new RegExp("\xa0", "g"), "&nbsp;");
}
function* formatNode(n, o = {}) {
    const no = {
        ...o,
        parent: n
    };
    const indent = SPACE.repeat(no.indent || 0);
    switch(n.type){
        case "document":
            {
                if (n.attributes.frontmatter && n.attributes.frontmatter.length) {
                    yield "---" + NL + n.attributes.frontmatter + NL + "---" + NL + NL;
                }
                yield* trimStart(formatChildren(n, no));
                break;
            }
        case "heading":
            {
                yield NL;
                yield indent;
                yield "#".repeat(n.attributes.level || 1);
                yield SPACE;
                yield* trimStart(formatChildren(n, no));
                yield* formatAnnotations(n);
                yield NL;
                break;
            }
        case "paragraph":
            {
                yield NL;
                yield* formatChildren(n, no);
                yield* formatAnnotations(n);
                yield NL;
                break;
            }
        case "inline":
            {
                yield indent;
                yield* formatChildren(n, no);
                break;
            }
        case "image":
            {
                yield "!";
                yield "[";
                yield* formatValue(n.attributes.alt, no);
                yield "]";
                yield "(";
                yield* typeof n.attributes.src === "string" ? escapeMarkdownCharacters(n.attributes.src, /[()]/) : formatValue(n.attributes.src, no);
                if (n.attributes.title) {
                    yield SPACE + `"${n.attributes.title}"`;
                }
                yield ")";
                break;
            }
        case "link":
            {
                yield "[";
                yield* formatChildren(n, no);
                yield "]";
                yield "(";
                yield* typeof n.attributes.href === "string" ? escapeMarkdownCharacters(n.attributes.href, /[()]/g) : formatValue(n.attributes.href, no);
                if (n.attributes.title) {
                    yield SPACE + `"${n.attributes.title}"`;
                }
                yield ")";
                break;
            }
        case "text":
            {
                const { content } = n.attributes;
                if (ast_default.isAst(content)) {
                    yield OPEN + SPACE;
                    yield* formatValue(content, no);
                    yield SPACE + CLOSE;
                } else {
                    if (o.parent && WRAPPING_TYPES.includes(o.parent.type)) {
                        yield* escapeMarkdownCharacters(content, /[*_~]/g);
                    } else {
                        yield* escapeMarkdownCharacters(content, /^[*>#]/);
                    }
                }
                break;
            }
        case "blockquote":
            {
                const prefix = ">" + SPACE;
                yield n.children.map((child)=>format(child, no).trimStart()).map((d)=>NL + indent + prefix + d).join(indent + prefix);
                break;
            }
        case "hr":
            {
                yield NL;
                yield indent;
                yield "---";
                yield NL;
                break;
            }
        case "fence":
            {
                yield NL;
                yield indent;
                const innerFence = n.attributes.content.match(/`{3,}/g) || [];
                const innerFenceLength = innerFence.map((s2)=>s2.length).reduce(max, 0);
                const boundary = "`".repeat(innerFenceLength ? innerFenceLength + 1 : 3);
                yield boundary;
                if (n.attributes.language) yield n.attributes.language;
                if (n.annotations.length) yield SPACE;
                yield* formatAnnotations(n);
                yield NL;
                yield indent;
                yield n.attributes.content.split(NL).join(NL + indent);
                yield boundary;
                yield NL;
                break;
            }
        case "tag":
            {
                if (!n.inline) {
                    yield NL;
                    yield indent;
                }
                const open = OPEN + SPACE;
                const tag = [
                    open + n.tag,
                    ...formatAttributes(n)
                ];
                const inlineTag = tag.join(SPACE);
                const isLongTagOpening = inlineTag.length + open.length * 2 > (o.maxTagOpeningWidth || MAX_TAG_OPENING_WIDTH);
                yield (!n.inline && isLongTagOpening ? tag.join(NL + SPACE.repeat(open.length) + indent) : inlineTag) + SPACE + (n.children.length ? "" : "/") + CLOSE;
                if (n.children.length) {
                    yield* formatChildren(n, no.allowIndentation ? increment(no) : no);
                    if (!n.inline) {
                        yield indent;
                    }
                    yield OPEN + SPACE + "/" + n.tag + SPACE + CLOSE;
                }
                if (!n.inline) {
                    yield NL;
                }
                break;
            }
        case "list":
            {
                const prefix = n.attributes.ordered ? OL : UL;
                for (const child of n.children){
                    const d = format(child, increment(no, prefix.length)).trim();
                    yield NL + indent + prefix + d;
                }
                yield NL;
                break;
            }
        case "item":
            {
                for(let i = 0; i < n.children.length; i++){
                    yield* formatValue(n.children[i], no);
                    if (i === 0) yield* formatAnnotations(n);
                }
                break;
            }
        case "strong":
            {
                yield "**";
                yield* formatInline(formatChildren(n, no));
                yield "**";
                break;
            }
        case "em":
            {
                yield "_";
                yield* formatInline(formatChildren(n, no));
                yield "_";
                break;
            }
        case "code":
            {
                yield "`";
                yield* formatInline(formatValue(n.attributes.content, no));
                yield "`";
                break;
            }
        case "s":
            {
                yield "~~";
                yield* formatInline(formatChildren(n, no));
                yield "~~";
                break;
            }
        case "hardbreak":
            {
                yield "\\" + NL;
                yield indent;
                break;
            }
        case "softbreak":
            {
                yield NL;
                yield indent;
                break;
            }
        case "table":
            {
                const table3 = [
                    ...formatChildren(n, increment(no))
                ];
                if (o.parent && o.parent.type === "tag" && o.parent.tag === "table") {
                    for(let i = 0; i < table3.length; i++){
                        const row = table3[i];
                        if (typeof row === "string") {
                            if (row.trim().length) {
                                yield NL;
                                yield row;
                            }
                        } else {
                            if (i !== 0) {
                                yield NL;
                                yield indent + "---";
                            }
                            for (const d of row){
                                yield NL + indent + UL + d;
                            }
                        }
                    }
                    yield NL;
                } else {
                    yield NL;
                    const [head, ...rows] = table3;
                    const ml = table3.map((arr)=>arr.map((s2)=>s2.length).reduce(max)).reduce(max);
                    yield* formatTableRow(head.map((h)=>h + SPACE.repeat(ml - h.length)));
                    yield NL;
                    yield* formatTableRow(head.map(()=>"-".repeat(ml)));
                    yield NL;
                    for (const row of rows){
                        yield* formatTableRow(row.map((r)=>r + SPACE.repeat(ml - r.length)));
                        yield NL;
                    }
                }
                break;
            }
        case "thead":
            {
                const [head] = [
                    ...formatChildren(n, no)
                ];
                yield head || [];
                break;
            }
        case "tr":
            {
                yield [
                    ...formatChildren(n, no)
                ];
                break;
            }
        case "td":
        case "th":
            {
                yield [
                    ...formatChildren(n, no),
                    ...formatAnnotations(n)
                ].join("").trim();
                break;
            }
        case "tbody":
            {
                yield* formatChildren(n, no);
                break;
            }
        case "comment":
            {
                yield "<!-- " + n.attributes.content + " -->\n";
                break;
            }
        case "error":
        case "node":
            break;
    }
}
function* formatValue(v, o = {}) {
    switch(typeof v){
        case "undefined":
            break;
        case "boolean":
        case "number":
        case "string":
            {
                yield v.toString();
                break;
            }
        case "object":
            {
                if (v === null) break;
                if (Array.isArray(v)) {
                    for (const n of v)yield* formatValue(n, o);
                    break;
                }
                switch(v.$$mdtype){
                    case "Function":
                        {
                            yield* formatFunction(v);
                            break;
                        }
                    case "Node":
                        yield* formatNode(v, o);
                        break;
                    case "Variable":
                        {
                            yield* formatVariable(v);
                            break;
                        }
                    default:
                        throw new Error(`Unimplemented: "${v.$$mdtype}"`);
                }
                break;
            }
    }
}
function format(v, options) {
    let doc = "";
    for (const s2 of formatValue(v, options))doc += s2;
    return doc.trimStart();
}
// src/tags/conditional.ts
function truthy(value) {
    return value !== false && value !== void 0 && value !== null;
}
function renderConditions(node2) {
    const conditions = [
        {
            condition: node2.attributes.primary,
            children: []
        }
    ];
    for (const child of node2.children){
        if (child.type === "tag" && child.tag === "else") conditions.push({
            condition: "primary" in child.attributes ? child.attributes.primary : true,
            children: []
        });
        else conditions[conditions.length - 1].children.push(child);
    }
    return conditions;
}
var tagIf = {
    attributes: {
        primary: {
            type: Object,
            render: false
        }
    },
    transform (node2, config) {
        const conditions = renderConditions(node2);
        for (const { condition, children } of conditions)if (truthy(condition)) {
            const nodes = children.flatMap((child)=>child.transform(config));
            if (nodes.some(isPromise)) {
                return Promise.all(nodes).then((nodes2)=>nodes2.flat());
            }
            return nodes;
        }
        return [];
    }
};
var tagElse = {
    selfClosing: true,
    attributes: {
        primary: {
            type: Object,
            render: false
        }
    }
};
// src/functions/index.ts
var and = {
    transform (parameters) {
        return Object.values(parameters).every((x)=>truthy(x));
    }
};
var or = {
    transform (parameters) {
        return Object.values(parameters).find((x)=>truthy(x)) !== void 0;
    }
};
var not = {
    parameters: {
        0: {
            required: true
        }
    },
    transform (parameters) {
        return !truthy(parameters[0]);
    }
};
var equals = {
    transform (parameters) {
        const values = Object.values(parameters);
        return values.every((v)=>v === values[0]);
    }
};
var debug = {
    transform (parameters) {
        return JSON.stringify(parameters[0], null, 2);
    }
};
var defaultFn = {
    transform (parameters) {
        return parameters[0] === void 0 ? parameters[1] : parameters[0];
    }
};
var functions_default = {
    and,
    or,
    not,
    equals,
    default: defaultFn,
    debug
};
// src/transforms/table.ts
function convertToRow(node2, cellType = "td") {
    node2.type = "tr";
    node2.attributes = {};
    for (const cell of node2.children)cell.type = cellType;
    return node2;
}
function transform(document2) {
    for (const node2 of document2.walk()){
        if (node2.type !== "tag" || node2.tag !== "table") continue;
        const [first, ...rest] = node2.children;
        if (!first || first.type === "table") continue;
        const table3 = new ast_default.Node("table", node2.attributes, [
            new ast_default.Node("thead"),
            new ast_default.Node("tbody")
        ]);
        const [thead2, tbody2] = table3.children;
        if (first.type === "list") thead2.push(convertToRow(first, "th"));
        for (const row of rest){
            if (row.type === "list") convertToRow(row);
            else if (row.type === "tag" && row.tag === "if") {
                const children = [];
                for (const child of row.children){
                    if (child.type === "hr") continue;
                    if (child.type === "list") convertToRow(child);
                    children.push(child);
                }
                row.children = children;
            } else continue;
            tbody2.push(row);
        }
        node2.children = [
            table3
        ];
    }
}
// src/transforms/index.ts
var transforms_default = [
    transform
];
// src/parser.ts
var mappings = {
    ordered_list: "list",
    bullet_list: "list",
    code_inline: "code",
    list_item: "item",
    variable: "text"
};
function annotate(node2, attributes) {
    for (const attribute of attributes){
        node2.annotations.push(attribute);
        const { name, value, type } = attribute;
        if (type === "attribute") node2.attributes[name] = value;
        else if (type === "class") if (node2.attributes.class) node2.attributes.class[name] = value;
        else node2.attributes.class = {
            [name]: value
        };
    }
}
function handleAttrs(token, type) {
    switch(type){
        case "heading":
            return {
                level: Number(token.tag.replace("h", ""))
            };
        case "list":
            return {
                ordered: token.type.startsWith("ordered")
            };
        case "link":
            {
                const attrs = Object.fromEntries(token.attrs);
                return attrs.title ? {
                    href: attrs.href,
                    title: attrs.title
                } : {
                    href: attrs.href
                };
            }
        case "image":
            {
                const attrs = Object.fromEntries(token.attrs);
                return attrs.title ? {
                    alt: token.content,
                    src: attrs.src,
                    title: attrs.title
                } : {
                    alt: token.content,
                    src: attrs.src
                };
            }
        case "text":
        case "code":
        case "comment":
            return {
                content: (token.meta || {}).variable || token.content
            };
        case "fence":
            {
                const [language] = token.info.split(" ", 1);
                return language === "" || language === OPEN ? {
                    content: token.content
                } : {
                    content: token.content,
                    language
                };
            }
        case "td":
        case "th":
            {
                if (token.attrs) {
                    const attrs = Object.fromEntries(token.attrs);
                    let align;
                    if (attrs.style) {
                        if (attrs.style.includes("left")) {
                            align = "left";
                        } else if (attrs.style.includes("center")) {
                            align = "center";
                        } else if (attrs.style.includes("right")) {
                            align = "right";
                        }
                    }
                    if (align) {
                        return {
                            align
                        };
                    }
                }
                return {};
            }
        default:
            return {};
    }
}
function handleToken(token, nodes, file, inlineParent) {
    if (token.type === "frontmatter") {
        nodes[0].attributes.frontmatter = token.content;
        return;
    }
    if (token.hidden || token.type === "text" && token.content === "") return;
    const errors = token.errors || [];
    const parent = nodes[nodes.length - 1];
    const { tag, attributes, error: error2 } = token.meta || {};
    if (token.type === "annotation") {
        if (inlineParent) return annotate(inlineParent, attributes);
        return parent.errors.push({
            id: "no-inline-annotations",
            level: "error",
            message: `Can't apply inline annotations to '${parent.type}'`
        });
    }
    let typeName = token.type.replace(/_(open|close)$/, "");
    if (mappings[typeName]) typeName = mappings[typeName];
    if (typeName === "error") {
        const { message, location } = error2;
        errors.push({
            id: "parse-error",
            level: "critical",
            message,
            location
        });
    }
    if (token.nesting < 0) {
        if (parent.type === typeName) {
            if (parent.lines && token.map) parent.lines.push(...token.map);
            return nodes.pop();
        }
        errors.push({
            id: "missing-opening",
            level: "critical",
            message: `Node '${typeName}' is missing opening`
        });
    }
    const attrs = handleAttrs(token, typeName);
    const node2 = new Node(typeName, attrs, void 0, tag || void 0);
    const { position = {} } = token;
    node2.errors = errors;
    node2.lines = token.map || parent.lines || [];
    node2.location = {
        file,
        start: {
            line: node2.lines[0],
            character: position.start
        },
        end: {
            line: node2.lines[1],
            character: position.end
        }
    };
    if (inlineParent) node2.inline = true;
    if (attributes && [
        "tag",
        "fence",
        "image"
    ].includes(typeName)) annotate(node2, attributes);
    parent.push(node2);
    if (token.nesting > 0) nodes.push(node2);
    if (!Array.isArray(token.children)) return;
    inlineParent = parent;
    nodes.push(node2);
    const isLeafNode = typeName === "image";
    if (!isLeafNode) {
        for (const child of token.children)handleToken(child, nodes, file, inlineParent);
    }
    nodes.pop();
}
function parser(tokens, file) {
    const doc = new Node("document");
    const nodes = [
        doc
    ];
    for (const token of tokens)handleToken(token, nodes, file);
    if (nodes.length > 1) for (const node2 of nodes.slice(1))node2.errors.push({
        id: "missing-closing",
        level: "critical",
        message: `Node '${node2.tag || node2.type}' is missing closing`
    });
    for (const transform3 of transforms_default)transform3(doc);
    return doc;
}
// src/schema.ts
var schema_exports = {};
__export(schema_exports, {
    blockquote: ()=>blockquote,
    code: ()=>code,
    comment: ()=>comment,
    document: ()=>document,
    em: ()=>em,
    error: ()=>error,
    fence: ()=>fence,
    hardbreak: ()=>hardbreak,
    heading: ()=>heading,
    hr: ()=>hr,
    image: ()=>image,
    inline: ()=>inline,
    item: ()=>item,
    link: ()=>link,
    list: ()=>list,
    node: ()=>node,
    paragraph: ()=>paragraph,
    s: ()=>s,
    softbreak: ()=>softbreak,
    strong: ()=>strong,
    table: ()=>table,
    tbody: ()=>tbody,
    td: ()=>td,
    text: ()=>text,
    th: ()=>th,
    thead: ()=>thead,
    tr: ()=>tr
});
var document = {
    render: "article",
    children: [
        "heading",
        "paragraph",
        "image",
        "table",
        "tag",
        "fence",
        "blockquote",
        "comment",
        "list",
        "hr"
    ],
    attributes: {
        frontmatter: {
            render: false
        }
    }
};
var heading = {
    children: [
        "inline"
    ],
    attributes: {
        level: {
            type: Number,
            render: false,
            required: true
        }
    },
    transform (node2, config) {
        return new Tag(`h${node2.attributes["level"]}`, node2.transformAttributes(config), node2.transformChildren(config));
    }
};
var paragraph = {
    render: "p",
    children: [
        "inline"
    ]
};
var image = {
    render: "img",
    attributes: {
        src: {
            type: String,
            required: true
        },
        alt: {
            type: String
        },
        title: {
            type: String
        }
    }
};
var fence = {
    render: "pre",
    attributes: {
        content: {
            type: String,
            render: false,
            required: true
        },
        language: {
            type: String,
            render: "data-language"
        },
        process: {
            type: Boolean,
            render: false,
            default: true
        }
    },
    transform (node2, config) {
        const attributes = node2.transformAttributes(config);
        const children = node2.children.length ? node2.transformChildren(config) : [
            node2.attributes.content
        ];
        return new Tag("pre", attributes, children);
    }
};
var blockquote = {
    render: "blockquote",
    children: [
        "heading",
        "paragraph",
        "image",
        "table",
        "tag",
        "fence",
        "blockquote",
        "list",
        "hr"
    ]
};
var item = {
    render: "li",
    children: [
        "inline",
        "heading",
        "paragraph",
        "image",
        "table",
        "tag",
        "fence",
        "blockquote",
        "list",
        "hr"
    ]
};
var list = {
    children: [
        "item"
    ],
    attributes: {
        ordered: {
            type: Boolean,
            render: false,
            required: true
        }
    },
    transform (node2, config) {
        return new Tag(node2.attributes.ordered ? "ol" : "ul", node2.transformAttributes(config), node2.transformChildren(config));
    }
};
var hr = {
    render: "hr"
};
var table = {
    render: "table"
};
var td = {
    render: "td",
    children: [
        "inline",
        "heading",
        "paragraph",
        "image",
        "table",
        "tag",
        "fence",
        "blockquote",
        "list",
        "hr"
    ],
    attributes: {
        colspan: {
            type: Number
        },
        rowspan: {
            type: Number
        },
        align: {
            type: String
        }
    }
};
var th = {
    render: "th",
    attributes: {
        width: {
            type: Number
        },
        align: {
            type: String
        }
    }
};
var tr = {
    render: "tr",
    children: [
        "th",
        "td"
    ]
};
var tbody = {
    render: "tbody",
    children: [
        "tr",
        "tag"
    ]
};
var thead = {
    render: "thead",
    children: [
        "tr"
    ]
};
var strong = {
    render: "strong",
    children: [
        "em",
        "s",
        "link",
        "code",
        "text",
        "tag"
    ]
};
var em = {
    render: "em",
    children: [
        "strong",
        "s",
        "link",
        "code",
        "text",
        "tag"
    ]
};
var s = {
    render: "s",
    children: [
        "strong",
        "em",
        "link",
        "code",
        "text",
        "tag"
    ]
};
var inline = {
    children: [
        "strong",
        "em",
        "s",
        "code",
        "text",
        "tag",
        "link",
        "image",
        "hardbreak",
        "softbreak",
        "comment"
    ]
};
var link = {
    render: "a",
    children: [
        "strong",
        "em",
        "s",
        "code",
        "text",
        "tag"
    ],
    attributes: {
        href: {
            type: String,
            required: true
        },
        title: {
            type: String
        }
    }
};
var code = {
    render: "code",
    attributes: {
        content: {
            type: String,
            render: false,
            required: true
        }
    },
    transform (node2, config) {
        const attributes = node2.transformAttributes(config);
        return new Tag("code", attributes, [
            node2.attributes.content
        ]);
    }
};
var text = {
    attributes: {
        content: {
            type: String,
            required: true
        }
    },
    transform (node2) {
        return node2.attributes.content;
    }
};
var hardbreak = {
    render: "br"
};
var softbreak = {
    transform () {
        return " ";
    }
};
var comment = {
    attributes: {
        content: {
            type: String,
            required: true
        }
    }
};
var error = {};
var node = {};
// src/renderers/html.ts
var import_markdown_it = __toModule(require_markdown_it());
var { escapeHtml } = (0, import_markdown_it.default)().utils;
var voidElements = new Set([
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
]);
function render(node2) {
    if (typeof node2 === "string" || typeof node2 === "number") return escapeHtml(String(node2));
    if (Array.isArray(node2)) return node2.map(render).join("");
    if (node2 === null || typeof node2 !== "object" || !Tag.isTag(node2)) return "";
    const { name, attributes, children = [] } = node2;
    if (!name) return render(children);
    let output = `<${name}`;
    for (const [k, v] of Object.entries(attributes ?? {}))output += ` ${k}="${escapeHtml(String(v))}"`;
    output += ">";
    if (voidElements.has(name)) return output;
    if (children.length) output += render(children);
    output += `</${name}>`;
    return output;
}
// src/renderers/react/react.ts
function tagName(name, components) {
    return typeof name !== "string" ? name : name[0] !== name[0].toUpperCase() ? name : components instanceof Function ? components(name) : components[name];
}
function dynamic(node2, React, { components = {} } = {}) {
    function deepRender2(value) {
        if (value == null || typeof value !== "object") return value;
        if (Array.isArray(value)) return value.map((item2)=>deepRender2(item2));
        if (value.$$mdtype === "Tag") return render3(value);
        if (typeof value !== "object") return value;
        const output = {};
        for (const [k, v] of Object.entries(value))output[k] = deepRender2(v);
        return output;
    }
    function render3(node3) {
        if (Array.isArray(node3)) return React.createElement(React.Fragment, null, ...node3.map(render3));
        if (node3 === null || typeof node3 !== "object" || !Tag.isTag(node3)) return node3;
        const { name, attributes: { class: className, ...attrs } = {}, children = [] } = node3;
        if (className) attrs.className = className;
        return React.createElement(tagName(name, components), Object.keys(attrs).length == 0 ? null : deepRender2(attrs), ...children.map(render3));
    }
    return render3(node2);
}
// src/renderers/react/static.ts
function tagName2(name, components) {
    return typeof name !== "string" ? "Fragment" : name[0] !== name[0].toUpperCase() ? name : components instanceof Function ? components(name) : components[name];
}
function renderArray(children) {
    return children.map(render2).join(", ");
}
function deepRender(value) {
    if (value == null || typeof value !== "object") return JSON.stringify(value);
    if (Array.isArray(value)) return `[${value.map((item2)=>deepRender(item2)).join(", ")}]`;
    if (value.$$mdtype === "Tag") return render2(value);
    if (typeof value !== "object") return JSON.stringify(value);
    const object = Object.entries(value).map(([k, v])=>[
            JSON.stringify(k),
            deepRender(v)
        ].join(": ")).join(", ");
    return `{${object}}`;
}
function render2(node2) {
    if (Array.isArray(node2)) return `React.createElement(React.Fragment, null, ${renderArray(node2)})`;
    if (node2 === null || typeof node2 !== "object" || !Tag.isTag(node2)) return JSON.stringify(node2);
    const { name, attributes: { class: className, ...attrs } = {}, children = [] } = node2;
    if (className) attrs.className = className;
    return `React.createElement(
    tagName(${JSON.stringify(name)}, components),
    ${Object.keys(attrs).length == 0 ? "null" : deepRender(attrs)},
    ${renderArray(children)})`;
}
function reactStatic(node2) {
    return `
  (({components = {}} = {}) => {
    ${tagName2}
    return ${render2(node2)};
  })
`;
}
// src/renderers/index.ts
var renderers_default = {
    html: render,
    react: dynamic,
    reactStatic
};
// src/tags/partial.ts
var PartialFile = class {
    validate(file, config) {
        const { partials = {} } = config;
        const partial2 = partials[file];
        if (!partial2) return [
            {
                id: "attribute-value-invalid",
                level: "error",
                message: `Partial \`${file}\` not found. The 'file' attribute must be set in \`config.partials\``
            }
        ];
        return [];
    }
};
var partial = {
    inline: false,
    selfClosing: true,
    attributes: {
        file: {
            type: PartialFile,
            render: false,
            required: true
        },
        variables: {
            type: Object,
            render: false
        }
    },
    transform (node2, config) {
        const { partials = {} } = config;
        const { file, variables } = node2.attributes;
        const partial2 = partials[file];
        if (!partial2) return null;
        const scopedConfig = {
            ...config,
            variables: {
                ...config.variables,
                ...variables,
                ["$$partial:filename"]: file
            }
        };
        const transformChildren = (part)=>part.resolve(scopedConfig).transformChildren(scopedConfig);
        return Array.isArray(partial2) ? partial2.flatMap(transformChildren) : transformChildren(partial2);
    }
};
// src/tags/table.ts
var table2 = {
    children: [
        "table"
    ],
    inline: false
};
// src/tags/index.ts
var tags_default = {
    if: tagIf,
    else: tagElse,
    partial,
    table: table2
};
// src/tokenizer/index.ts
var import_lib = __toModule(require_lib());
// src/tokenizer/plugins/annotations.ts
var import_tag7 = __toModule(require_tag());
function createToken(state, content, contentStart) {
    try {
        const { type, meta, nesting = 0 } = (0, import_tag7.parse)(content, {
            Variable,
            Function: Function2
        });
        const token = state.push(type, "", nesting);
        token.info = content;
        token.meta = meta;
        if (!state.delimiters) {
            state.delimiters = [];
        }
        return token;
    } catch (error2) {
        if (!(error2 instanceof import_tag7.SyntaxError)) throw error2;
        const { message, location: { start, end } } = error2;
        const location = contentStart ? {
            start: {
                offset: start.offset + contentStart
            },
            end: {
                offset: end.offset + contentStart
            }
        } : null;
        const token = state.push("error", "", 0);
        token.meta = {
            error: {
                message,
                location
            }
        };
        return token;
    }
}
function block(state, startLine, endLine, silent) {
    const start = state.bMarks[startLine] + state.tShift[startLine];
    const finish = state.eMarks[startLine];
    if (!state.src.startsWith(OPEN, start)) return false;
    const tagEnd = findTagEnd(state.src, start);
    const lastPossible = state.src.slice(0, finish).trim().length;
    if (!tagEnd || tagEnd < lastPossible - CLOSE.length) return false;
    const contentStart = start + OPEN.length;
    const content = state.src.slice(contentStart, tagEnd).trim();
    const lines = content.split("\n").length;
    if (content[0] === "$") return false;
    if (silent) return true;
    const token = createToken(state, content, contentStart);
    token.map = [
        startLine,
        startLine + lines
    ];
    state.line += lines;
    return true;
}
function inline2(state, silent) {
    if (!state.src.startsWith(OPEN, state.pos)) return false;
    const tagEnd = findTagEnd(state.src, state.pos);
    if (!tagEnd) return false;
    const content = state.src.slice(state.pos + OPEN.length, tagEnd);
    if (!silent) createToken(state, content.trim());
    state.pos = tagEnd + CLOSE.length;
    return true;
}
function core(state) {
    let token;
    for (token of state.tokens){
        if (token.type !== "fence") continue;
        if (token.info.includes(OPEN)) {
            const start = token.info.indexOf(OPEN);
            const end = findTagEnd(token.info, start);
            const content = token.info.slice(start + OPEN.length, end);
            try {
                const { meta } = (0, import_tag7.parse)(content.trim(), {
                    Variable,
                    Function: Function2
                });
                token.meta = meta;
            } catch (error2) {
                if (!(error2 instanceof import_tag7.SyntaxError)) throw error2;
                if (!token.errors) token.errors = [];
                token.errors.push({
                    id: "fence-tag-error",
                    level: "error",
                    message: `Syntax error in fence tag: ${error2.message}`
                });
            }
        }
        if (token?.meta?.attributes?.find((attr)=>attr.name === "process" && !attr.value)) continue;
        token.children = parseTags(token.content, token.map[0]);
    }
}
function plugin(md) {
    md.block.ruler.before("paragraph", "annotations", block, {
        alt: [
            "paragraph",
            "blockquote"
        ]
    });
    md.inline.ruler.push("containers", inline2);
    md.core.ruler.push("annotations", core);
}
// src/tokenizer/plugins/frontmatter.ts
var fence2 = "---";
function getLine(state, n) {
    return state.src.slice(state.bMarks[n], state.eMarks[n]).trim();
}
function findClose(state, endLine) {
    for(let line = 1; line < endLine; line++)if (getLine(state, line) === fence2) return line;
}
function block2(state, startLine, endLine, silent) {
    if (startLine != 0 || getLine(state, 0) != fence2) return false;
    const close = findClose(state, endLine);
    if (!close) return false;
    if (silent) return true;
    const token = state.push("frontmatter", "", 0);
    token.content = state.src.slice(state.eMarks[0], state.bMarks[close]).trim();
    token.map = [
        0,
        close
    ];
    token.hidden = true;
    state.line = close + 1;
    return true;
}
function plugin2(md) {
    md.block.ruler.before("hr", "frontmatter", block2);
}
// src/tokenizer/plugins/comments.ts
var OPEN2 = "<!--";
var CLOSE2 = "-->";
function block3(state, startLine, endLine, silent) {
    const start = state.bMarks[startLine] + state.tShift[startLine];
    if (!state.src.startsWith(OPEN2, start)) return false;
    const close = state.src.indexOf(CLOSE2, start);
    if (!close) return false;
    if (silent) return true;
    const content = state.src.slice(start + OPEN2.length, close);
    const lines = content.split("\n").length;
    const token = state.push("comment", "", 0);
    token.content = content.trim();
    token.map = [
        startLine,
        startLine + lines
    ];
    state.line += lines;
    return true;
}
function inline3(state, silent) {
    if (!state.src.startsWith(OPEN2, state.pos)) return false;
    const close = state.src.indexOf(CLOSE2, state.pos);
    if (!close) return false;
    if (silent) return true;
    const content = state.src.slice(state.pos + OPEN2.length, close);
    const token = state.push("comment", "", 0);
    token.content = content.trim();
    state.pos = close + CLOSE2.length;
    return true;
}
function plugin3(md) {
    md.block.ruler.before("table", "comment", block3, {
        alt: [
            "paragraph"
        ]
    });
    md.inline.ruler.push("comment", inline3);
}
// src/tokenizer/index.ts
var Tokenizer = class {
    constructor(config = {}){
        this.parser = new import_lib.default(config);
        this.parser.use(plugin, "annotations", {});
        this.parser.use(plugin2, "frontmatter", {});
        this.parser.disable([
            "lheading",
            "code"
        ]);
        if (config.allowComments) this.parser.use(plugin3, "comments", {});
    }
    tokenize(content) {
        return this.parser.parse(content.toString(), {});
    }
};
// src/validator.ts
var TypeMappings = {
    String,
    Number,
    Array,
    Object,
    Boolean
};
function validateType(type, value, config) {
    if (!type) return true;
    if (ast_default.isFunction(value) && config.validation?.validateFunctions) {
        const schema = config.functions?.[value.name];
        return !schema?.returns ? true : Array.isArray(schema.returns) ? schema.returns.find((t)=>t === type) !== void 0 : schema.returns === type;
    }
    if (ast_default.isAst(value)) return true;
    if (Array.isArray(type)) return type.some((t)=>validateType(t, value, config));
    if (typeof type === "string") type = TypeMappings[type];
    if (typeof type === "function") {
        const instance = new type();
        if (instance.validate) {
            return instance.validate(value, config);
        }
    }
    return value != null && value.constructor === type;
}
function typeToString(type) {
    if (typeof type === "string") return type;
    if (Array.isArray(type)) return type.map(typeToString).join(" | ");
    return type.name;
}
function validateFunction(fn, config) {
    const schema = config.functions?.[fn.name];
    const errors = [];
    if (!schema) return [
        {
            id: "function-undefined",
            level: "critical",
            message: `Undefined function: '${fn.name}'`
        }
    ];
    if (schema.validate) errors.push(...schema.validate(fn, config));
    if (schema.parameters) {
        for (const [key, value] of Object.entries(fn.parameters)){
            const param = schema.parameters?.[key];
            if (!param) {
                errors.push({
                    id: "parameter-undefined",
                    level: "error",
                    message: `Invalid parameter: '${key}'`
                });
                continue;
            }
            if (ast_default.isAst(value) && !ast_default.isFunction(value)) continue;
            if (param.type) {
                const valid = validateType(param.type, value, config);
                if (valid === false) {
                    errors.push({
                        id: "parameter-type-invalid",
                        level: "error",
                        message: `Parameter '${key}' of '${fn.name}' must be type of '${typeToString(param.type)}'`
                    });
                } else if (Array.isArray(valid)) {
                    errors.push(...valid);
                }
            }
        }
    }
    for (const [key, { required }] of Object.entries(schema.parameters ?? {}))if (required && fn.parameters[key] === void 0) errors.push({
        id: "parameter-missing-required",
        level: "error",
        message: `Missing required parameter: '${key}'`
    });
    return errors;
}
function validator(node2, config) {
    const schema = node2.findSchema(config);
    const errors = [
        ...node2.errors || []
    ];
    if (!schema) {
        errors.push({
            id: node2.tag ? "tag-undefined" : "node-undefined",
            level: "critical",
            message: node2.tag ? `Undefined tag: '${node2.tag}'` : `Undefined node: '${node2.type}'`
        });
        return errors;
    }
    if (schema.inline != void 0 && node2.inline !== schema.inline) errors.push({
        id: "tag-placement-invalid",
        level: "critical",
        message: `'${node2.tag}' tag should be ${schema.inline ? "inline" : "block"}`
    });
    if (schema.selfClosing && node2.children.length > 0) errors.push({
        id: "tag-selfclosing-has-children",
        level: "critical",
        message: `'${node2.tag}' tag should be self-closing`
    });
    const attributes = {
        ...globalAttributes,
        ...schema.attributes
    };
    for (let [key, value] of Object.entries(node2.attributes)){
        const attrib = attributes[key];
        if (!attrib) {
            errors.push({
                id: "attribute-undefined",
                level: "error",
                message: `Invalid attribute: '${key}'`
            });
            continue;
        }
        let { type, matches, errorLevel } = attrib;
        if (ast_default.isAst(value)) {
            if (ast_default.isFunction(value) && config.validation?.validateFunctions) errors.push(...validateFunction(value, config));
            else if (ast_default.isVariable(value) && config.variables) {
                let missing = false;
                let variables = config.variables;
                for (const key2 of value.path){
                    if (!Object.prototype.hasOwnProperty.call(variables, key2)) {
                        missing = true;
                        break;
                    }
                    variables = variables[key2];
                }
                if (missing) {
                    errors.push({
                        id: "variable-undefined",
                        level: "error",
                        message: `Undefined variable: '${value.path.join(".")}'`
                    });
                }
            } else continue;
        }
        value = value;
        if (type) {
            const valid = validateType(type, value, config);
            if (valid === false) {
                errors.push({
                    id: "attribute-type-invalid",
                    level: errorLevel || "error",
                    message: `Attribute '${key}' must be type of '${typeToString(type)}'`
                });
            }
            if (Array.isArray(valid)) {
                errors.push(...valid);
            }
        }
        if (typeof matches === "function") matches = matches(config);
        if (Array.isArray(matches) && !matches.includes(value)) errors.push({
            id: "attribute-value-invalid",
            level: errorLevel || "error",
            message: `Attribute '${key}' must match one of ${JSON.stringify(matches)}. Got '${value}' instead.`
        });
        if (matches instanceof RegExp && !matches.test(value)) errors.push({
            id: "attribute-value-invalid",
            level: errorLevel || "error",
            message: `Attribute '${key}' must match ${matches}. Got '${value}' instead.`
        });
    }
    for (const [key, { required }] of Object.entries(attributes))if (required && node2.attributes[key] === void 0) errors.push({
        id: "attribute-missing-required",
        level: "error",
        message: `Missing required attribute: '${key}'`
    });
    for (const { type } of node2.children){
        if (schema.children && type !== "error" && !schema.children.includes(type)) errors.push({
            id: "child-invalid",
            level: "warning",
            message: `Can't nest '${type}' in '${node2.tag || node2.type}'`
        });
    }
    if (schema.validate) {
        const schemaErrors = schema.validate(node2, config);
        if (isPromise(schemaErrors)) {
            return schemaErrors.then((e)=>errors.concat(e));
        }
        errors.push(...schemaErrors);
    }
    return errors;
}
// index.ts
var tokenizer = new Tokenizer();
function mergeConfig(config = {}) {
    return {
        ...config,
        tags: {
            ...tags_default,
            ...config.tags
        },
        nodes: {
            ...schema_exports,
            ...config.nodes
        },
        functions: {
            ...functions_default,
            ...config.functions
        }
    };
}
function parse3(content, file) {
    if (typeof content === "string") content = tokenizer.tokenize(content);
    return parser(content, file);
}
function resolve2(content, config) {
    if (Array.isArray(content)) return content.flatMap((child)=>child.resolve(config));
    return content.resolve(config);
}
function transform2(nodes, options) {
    const config = mergeConfig(options);
    const content = resolve2(nodes, config);
    if (Array.isArray(content)) return content.flatMap((child)=>child.transform(config));
    return content.transform(config);
}
function validate(content, options) {
    const config = mergeConfig(options);
    const output = [
        content,
        ...content.walk()
    ].map((node2)=>{
        const { type, lines, location } = node2;
        const errors = validator(node2, config);
        if (isPromise(errors)) {
            return errors.then((e)=>e.map((error2)=>({
                        type,
                        lines,
                        location,
                        error: error2
                    })));
        }
        return errors.map((error2)=>({
                type,
                lines,
                location,
                error: error2
            }));
    });
    if (output.some(isPromise)) {
        return Promise.all(output).then((o)=>o.flat());
    }
    return output.flat();
}
function createElement(name, attributes = {}, ...children) {
    return {
        name,
        attributes,
        children
    };
}
var Markdoc = class {
    constructor(config){
        this.parse = parse3;
        this.resolve = (content)=>resolve2(content, this.config);
        this.transform = (content)=>transform2(content, this.config);
        this.validate = (content)=>validate(content, this.config);
        this.config = config;
    }
};
Markdoc.nodes = schema_exports;
Markdoc.tags = tags_default;
Markdoc.functions = functions_default;
Markdoc.globalAttributes = globalAttributes;
Markdoc.renderers = renderers_default;
Markdoc.transforms = transforms_default;
Markdoc.Ast = ast_default;
Markdoc.Tag = Tag;
Markdoc.Tokenizer = Tokenizer;
Markdoc.parseTags = parseTags;
Markdoc.transformer = transformer_default;
Markdoc.validator = validator;
Markdoc.parse = parse3;
Markdoc.transform = transform2;
Markdoc.validate = validate;
Markdoc.createElement = createElement;
Markdoc.truthy = truthy;
Markdoc.format = format;


/***/ }),

/***/ 2271:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "bailoutToClientRendering", ({
    enumerable: true,
    get: function() {
        return bailoutToClientRendering;
    }
}));
const _dynamicnossr = __webpack_require__(5070);
const _staticgenerationasyncstorage = __webpack_require__(3539);
function bailoutToClientRendering() {
    const staticGenerationStore = _staticgenerationasyncstorage.staticGenerationAsyncStorage.getStore();
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.forceStatic) {
        return true;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.isStaticGeneration) {
        (0, _dynamicnossr.suspense)();
    }
    return false;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=bailout-to-client-rendering.js.map


/***/ }),

/***/ 4713:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "clientHookInServerComponentError", ({
    enumerable: true,
    get: function() {
        return clientHookInServerComponentError;
    }
}));
const _interop_require_default = __webpack_require__(3297);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(2947));
function clientHookInServerComponentError(hookName) {
    if (false) {}
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=client-hook-in-server-component-error.js.map


/***/ }),

/***/ 7158:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
// useLayoutSegments() // Only the segments for the current place. ['children', 'dashboard', 'children', 'integrations'] -> /dashboard/integrations (/dashboard/layout.js would get ['children', 'dashboard', 'children', 'integrations'])

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return ReadonlyURLSearchParams;
    },
    useSearchParams: function() {
        return useSearchParams;
    },
    usePathname: function() {
        return usePathname;
    },
    ServerInsertedHTMLContext: function() {
        return _serverinsertedhtml.ServerInsertedHTMLContext;
    },
    useServerInsertedHTML: function() {
        return _serverinsertedhtml.useServerInsertedHTML;
    },
    useRouter: function() {
        return useRouter;
    },
    useParams: function() {
        return useParams;
    },
    useSelectedLayoutSegments: function() {
        return useSelectedLayoutSegments;
    },
    useSelectedLayoutSegment: function() {
        return useSelectedLayoutSegment;
    },
    redirect: function() {
        return _redirect.redirect;
    },
    notFound: function() {
        return _notfound.notFound;
    }
});
const _react = __webpack_require__(2947);
const _approutercontext = __webpack_require__(6021);
const _hooksclientcontext = __webpack_require__(4629);
const _clienthookinservercomponenterror = __webpack_require__(4713);
const _getsegmentvalue = __webpack_require__(5891);
const _serverinsertedhtml = __webpack_require__(9107);
const _redirect = __webpack_require__(5287);
const _notfound = __webpack_require__(2241);
const INTERNAL_URLSEARCHPARAMS_INSTANCE = Symbol("internal for urlsearchparams readonly");
function readonlyURLSearchParamsError() {
    return new Error("ReadonlyURLSearchParams cannot be modified");
}
class ReadonlyURLSearchParams {
    [Symbol.iterator]() {
        return this[INTERNAL_URLSEARCHPARAMS_INSTANCE][Symbol.iterator]();
    }
    append() {
        throw readonlyURLSearchParamsError();
    }
    delete() {
        throw readonlyURLSearchParamsError();
    }
    set() {
        throw readonlyURLSearchParamsError();
    }
    sort() {
        throw readonlyURLSearchParamsError();
    }
    constructor(urlSearchParams){
        this[INTERNAL_URLSEARCHPARAMS_INSTANCE] = urlSearchParams;
        this.entries = urlSearchParams.entries.bind(urlSearchParams);
        this.forEach = urlSearchParams.forEach.bind(urlSearchParams);
        this.get = urlSearchParams.get.bind(urlSearchParams);
        this.getAll = urlSearchParams.getAll.bind(urlSearchParams);
        this.has = urlSearchParams.has.bind(urlSearchParams);
        this.keys = urlSearchParams.keys.bind(urlSearchParams);
        this.values = urlSearchParams.values.bind(urlSearchParams);
        this.toString = urlSearchParams.toString.bind(urlSearchParams);
    }
}
function useSearchParams() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useSearchParams");
    const searchParams = (0, _react.useContext)(_hooksclientcontext.SearchParamsContext);
    // In the case where this is `null`, the compat types added in
    // `next-env.d.ts` will add a new overload that changes the return type to
    // include `null`.
    const readonlySearchParams = (0, _react.useMemo)(()=>{
        if (!searchParams) {
            // When the router is not ready in pages, we won't have the search params
            // available.
            return null;
        }
        return new ReadonlyURLSearchParams(searchParams);
    }, [
        searchParams
    ]);
    if (true) {
        // AsyncLocalStorage should not be included in the client bundle.
        const { bailoutToClientRendering } = __webpack_require__(2271);
        if (bailoutToClientRendering()) {
            // TODO-APP: handle dynamic = 'force-static' here and on the client
            return readonlySearchParams;
        }
    }
    return readonlySearchParams;
}
function usePathname() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("usePathname");
    // In the case where this is `null`, the compat types added in `next-env.d.ts`
    // will add a new overload that changes the return type to include `null`.
    return (0, _react.useContext)(_hooksclientcontext.PathnameContext);
}
function useRouter() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useRouter");
    const router = (0, _react.useContext)(_approutercontext.AppRouterContext);
    if (router === null) {
        throw new Error("invariant expected app router to be mounted");
    }
    return router;
}
// this function performs a depth-first search of the tree to find the selected
// params
function getSelectedParams(tree, params) {
    if (params === void 0) params = {};
    const parallelRoutes = tree[1];
    for (const parallelRoute of Object.values(parallelRoutes)){
        const segment = parallelRoute[0];
        const isDynamicParameter = Array.isArray(segment);
        const segmentValue = isDynamicParameter ? segment[1] : segment;
        if (!segmentValue || segmentValue.startsWith("__PAGE__")) continue;
        // Ensure catchAll and optional catchall are turned into an array
        const isCatchAll = isDynamicParameter && (segment[2] === "c" || segment[2] === "oc");
        if (isCatchAll) {
            params[segment[0]] = segment[1].split("/");
        } else if (isDynamicParameter) {
            params[segment[0]] = segment[1];
        }
        params = getSelectedParams(parallelRoute, params);
    }
    return params;
}
function useParams() {
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useParams");
    const globalLayoutRouterContext = (0, _react.useContext)(_approutercontext.GlobalLayoutRouterContext);
    if (!globalLayoutRouterContext) {
        // This only happens in `pages`. Type is overwritten in navigation.d.ts
        return null;
    }
    return getSelectedParams(globalLayoutRouterContext.tree);
}
// TODO-APP: handle parallel routes
/**
 * Get the canonical parameters from the current level to the leaf node.
 */ function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first, segmentPath) {
    if (first === void 0) first = true;
    if (segmentPath === void 0) segmentPath = [];
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        var _parallelRoutes_children;
        node = (_parallelRoutes_children = parallelRoutes.children) != null ? _parallelRoutes_children : Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    const segmentValue = (0, _getsegmentvalue.getSegmentValue)(segment);
    if (!segmentValue || segmentValue.startsWith("__PAGE__")) return segmentPath;
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
function useSelectedLayoutSegments(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = "children";
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useSelectedLayoutSegments");
    const { tree } = (0, _react.useContext)(_approutercontext.LayoutRouterContext);
    return getSelectedLayoutSegmentPath(tree, parallelRouteKey);
}
function useSelectedLayoutSegment(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = "children";
    (0, _clienthookinservercomponenterror.clientHookInServerComponentError)("useSelectedLayoutSegment");
    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    if (selectedLayoutSegments.length === 0) {
        return null;
    }
    return selectedLayoutSegments[0];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.js.map


/***/ }),

/***/ 2241:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    notFound: function() {
        return notFound;
    },
    isNotFoundError: function() {
        return isNotFoundError;
    }
});
const NOT_FOUND_ERROR_CODE = "NEXT_NOT_FOUND";
function notFound() {
    // eslint-disable-next-line no-throw-literal
    const error = new Error(NOT_FOUND_ERROR_CODE);
    error.digest = NOT_FOUND_ERROR_CODE;
    throw error;
}
function isNotFoundError(error) {
    return (error == null ? void 0 : error.digest) === NOT_FOUND_ERROR_CODE;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found.js.map


/***/ }),

/***/ 5287:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RedirectType: function() {
        return RedirectType;
    },
    getRedirectError: function() {
        return getRedirectError;
    },
    redirect: function() {
        return redirect;
    },
    isRedirectError: function() {
        return isRedirectError;
    },
    getURLFromRedirectError: function() {
        return getURLFromRedirectError;
    },
    getRedirectTypeFromError: function() {
        return getRedirectTypeFromError;
    }
});
const _requestasyncstorage = __webpack_require__(1715);
const REDIRECT_ERROR_CODE = "NEXT_REDIRECT";
var RedirectType;
(function(RedirectType) {
    RedirectType["push"] = "push";
    RedirectType["replace"] = "replace";
})(RedirectType || (RedirectType = {}));
function getRedirectError(url, type) {
    const error = new Error(REDIRECT_ERROR_CODE);
    error.digest = REDIRECT_ERROR_CODE + ";" + type + ";" + url;
    const requestStore = _requestasyncstorage.requestAsyncStorage.getStore();
    if (requestStore) {
        error.mutableCookies = requestStore.mutableCookies;
    }
    return error;
}
function redirect(url, type) {
    if (type === void 0) type = "replace";
    throw getRedirectError(url, type);
}
function isRedirectError(error) {
    if (typeof (error == null ? void 0 : error.digest) !== "string") return false;
    const [errorCode, type, destination] = error.digest.split(";", 3);
    return errorCode === REDIRECT_ERROR_CODE && (type === "replace" || type === "push") && typeof destination === "string";
}
function getURLFromRedirectError(error) {
    if (!isRedirectError(error)) return null;
    // Slices off the beginning of the digest that contains the code and the
    // separating ';'.
    return error.digest.split(";", 3)[2];
}
function getRedirectTypeFromError(error) {
    if (!isRedirectError(error)) {
        throw new Error("Not a redirect error");
    }
    return error.digest.split(";", 3)[1];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect.js.map


/***/ }),

/***/ 5891:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getSegmentValue", ({
    enumerable: true,
    get: function() {
        return getSegmentValue;
    }
}));
function getSegmentValue(segment) {
    return Array.isArray(segment) ? segment[1] : segment;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-segment-value.js.map


/***/ }),

/***/ 6021:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(1363);
module.exports = createProxy("/Users/kirito/Documents/www/docs.kirito.com.br/node_modules/next/dist/shared/lib/app-router-context.js");
 //# sourceMappingURL=app-router-context.js.map


/***/ }),

/***/ 4629:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(1363);
module.exports = createProxy("/Users/kirito/Documents/www/docs.kirito.com.br/node_modules/next/dist/shared/lib/hooks-client-context.js");
 //# sourceMappingURL=hooks-client-context.js.map


/***/ }),

/***/ 5070:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(1363);
module.exports = createProxy("/Users/kirito/Documents/www/docs.kirito.com.br/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-no-ssr.js");
 //# sourceMappingURL=dynamic-no-ssr.js.map


/***/ }),

/***/ 9107:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(1363);
module.exports = createProxy("/Users/kirito/Documents/www/docs.kirito.com.br/node_modules/next/dist/shared/lib/server-inserted-html.js");
 //# sourceMappingURL=server-inserted-html.js.map


/***/ }),

/***/ 4980:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(7158);


/***/ }),

/***/ 3297:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

exports._ = exports._interop_require_default = _interop_require_default;
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}


/***/ }),

/***/ 132:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  p: () => (/* binding */ slugifyWithCounter)
});

// UNUSED EXPORTS: default

;// CONCATENATED MODULE: ./node_modules/escape-string-regexp/index.js
function escapeStringRegexp(string) {
    if (typeof string !== "string") {
        throw new TypeError("Expected a string");
    }
    // Escape characters with special meaning either inside or outside character sets.
    // Use a simple backslash escape when it’s always valid, and a `\xnn` escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.
    return string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}

;// CONCATENATED MODULE: ./node_modules/@sindresorhus/transliterate/replacements.js
const replacements = [
    // German umlauts
    [
        "\xdf",
        "ss"
    ],
    [
        "ẞ",
        "Ss"
    ],
    [
        "\xe4",
        "ae"
    ],
    [
        "\xc4",
        "Ae"
    ],
    [
        "\xf6",
        "oe"
    ],
    [
        "\xd6",
        "Oe"
    ],
    [
        "\xfc",
        "ue"
    ],
    [
        "\xdc",
        "Ue"
    ],
    // Latin
    [
        "\xc0",
        "A"
    ],
    [
        "\xc1",
        "A"
    ],
    [
        "\xc2",
        "A"
    ],
    [
        "\xc3",
        "A"
    ],
    [
        "\xc4",
        "Ae"
    ],
    [
        "\xc5",
        "A"
    ],
    [
        "\xc6",
        "AE"
    ],
    [
        "\xc7",
        "C"
    ],
    [
        "\xc8",
        "E"
    ],
    [
        "\xc9",
        "E"
    ],
    [
        "\xca",
        "E"
    ],
    [
        "\xcb",
        "E"
    ],
    [
        "\xcc",
        "I"
    ],
    [
        "\xcd",
        "I"
    ],
    [
        "\xce",
        "I"
    ],
    [
        "\xcf",
        "I"
    ],
    [
        "\xd0",
        "D"
    ],
    [
        "\xd1",
        "N"
    ],
    [
        "\xd2",
        "O"
    ],
    [
        "\xd3",
        "O"
    ],
    [
        "\xd4",
        "O"
    ],
    [
        "\xd5",
        "O"
    ],
    [
        "\xd6",
        "Oe"
    ],
    [
        "Ő",
        "O"
    ],
    [
        "\xd8",
        "O"
    ],
    [
        "\xd9",
        "U"
    ],
    [
        "\xda",
        "U"
    ],
    [
        "\xdb",
        "U"
    ],
    [
        "\xdc",
        "Ue"
    ],
    [
        "Ű",
        "U"
    ],
    [
        "\xdd",
        "Y"
    ],
    [
        "\xde",
        "TH"
    ],
    [
        "\xdf",
        "ss"
    ],
    [
        "\xe0",
        "a"
    ],
    [
        "\xe1",
        "a"
    ],
    [
        "\xe2",
        "a"
    ],
    [
        "\xe3",
        "a"
    ],
    [
        "\xe4",
        "ae"
    ],
    [
        "\xe5",
        "a"
    ],
    [
        "\xe6",
        "ae"
    ],
    [
        "\xe7",
        "c"
    ],
    [
        "\xe8",
        "e"
    ],
    [
        "\xe9",
        "e"
    ],
    [
        "\xea",
        "e"
    ],
    [
        "\xeb",
        "e"
    ],
    [
        "\xec",
        "i"
    ],
    [
        "\xed",
        "i"
    ],
    [
        "\xee",
        "i"
    ],
    [
        "\xef",
        "i"
    ],
    [
        "\xf0",
        "d"
    ],
    [
        "\xf1",
        "n"
    ],
    [
        "\xf2",
        "o"
    ],
    [
        "\xf3",
        "o"
    ],
    [
        "\xf4",
        "o"
    ],
    [
        "\xf5",
        "o"
    ],
    [
        "\xf6",
        "oe"
    ],
    [
        "ő",
        "o"
    ],
    [
        "\xf8",
        "o"
    ],
    [
        "\xf9",
        "u"
    ],
    [
        "\xfa",
        "u"
    ],
    [
        "\xfb",
        "u"
    ],
    [
        "\xfc",
        "ue"
    ],
    [
        "ű",
        "u"
    ],
    [
        "\xfd",
        "y"
    ],
    [
        "\xfe",
        "th"
    ],
    [
        "\xff",
        "y"
    ],
    [
        "ẞ",
        "SS"
    ],
    // Vietnamese
    [
        "\xe0",
        "a"
    ],
    [
        "\xc0",
        "A"
    ],
    [
        "\xe1",
        "a"
    ],
    [
        "\xc1",
        "A"
    ],
    [
        "\xe2",
        "a"
    ],
    [
        "\xc2",
        "A"
    ],
    [
        "\xe3",
        "a"
    ],
    [
        "\xc3",
        "A"
    ],
    [
        "\xe8",
        "e"
    ],
    [
        "\xc8",
        "E"
    ],
    [
        "\xe9",
        "e"
    ],
    [
        "\xc9",
        "E"
    ],
    [
        "\xea",
        "e"
    ],
    [
        "\xca",
        "E"
    ],
    [
        "\xec",
        "i"
    ],
    [
        "\xcc",
        "I"
    ],
    [
        "\xed",
        "i"
    ],
    [
        "\xcd",
        "I"
    ],
    [
        "\xf2",
        "o"
    ],
    [
        "\xd2",
        "O"
    ],
    [
        "\xf3",
        "o"
    ],
    [
        "\xd3",
        "O"
    ],
    [
        "\xf4",
        "o"
    ],
    [
        "\xd4",
        "O"
    ],
    [
        "\xf5",
        "o"
    ],
    [
        "\xd5",
        "O"
    ],
    [
        "\xf9",
        "u"
    ],
    [
        "\xd9",
        "U"
    ],
    [
        "\xfa",
        "u"
    ],
    [
        "\xda",
        "U"
    ],
    [
        "\xfd",
        "y"
    ],
    [
        "\xdd",
        "Y"
    ],
    [
        "ă",
        "a"
    ],
    [
        "Ă",
        "A"
    ],
    [
        "Đ",
        "D"
    ],
    [
        "đ",
        "d"
    ],
    [
        "ĩ",
        "i"
    ],
    [
        "Ĩ",
        "I"
    ],
    [
        "ũ",
        "u"
    ],
    [
        "Ũ",
        "U"
    ],
    [
        "ơ",
        "o"
    ],
    [
        "Ơ",
        "O"
    ],
    [
        "ư",
        "u"
    ],
    [
        "Ư",
        "U"
    ],
    [
        "ạ",
        "a"
    ],
    [
        "Ạ",
        "A"
    ],
    [
        "ả",
        "a"
    ],
    [
        "Ả",
        "A"
    ],
    [
        "ấ",
        "a"
    ],
    [
        "Ấ",
        "A"
    ],
    [
        "ầ",
        "a"
    ],
    [
        "Ầ",
        "A"
    ],
    [
        "ẩ",
        "a"
    ],
    [
        "Ẩ",
        "A"
    ],
    [
        "ẫ",
        "a"
    ],
    [
        "Ẫ",
        "A"
    ],
    [
        "ậ",
        "a"
    ],
    [
        "Ậ",
        "A"
    ],
    [
        "ắ",
        "a"
    ],
    [
        "Ắ",
        "A"
    ],
    [
        "ằ",
        "a"
    ],
    [
        "Ằ",
        "A"
    ],
    [
        "ẳ",
        "a"
    ],
    [
        "Ẳ",
        "A"
    ],
    [
        "ẵ",
        "a"
    ],
    [
        "Ẵ",
        "A"
    ],
    [
        "ặ",
        "a"
    ],
    [
        "Ặ",
        "A"
    ],
    [
        "ẹ",
        "e"
    ],
    [
        "Ẹ",
        "E"
    ],
    [
        "ẻ",
        "e"
    ],
    [
        "Ẻ",
        "E"
    ],
    [
        "ẽ",
        "e"
    ],
    [
        "Ẽ",
        "E"
    ],
    [
        "ế",
        "e"
    ],
    [
        "Ế",
        "E"
    ],
    [
        "ề",
        "e"
    ],
    [
        "Ề",
        "E"
    ],
    [
        "ể",
        "e"
    ],
    [
        "Ể",
        "E"
    ],
    [
        "ễ",
        "e"
    ],
    [
        "Ễ",
        "E"
    ],
    [
        "ệ",
        "e"
    ],
    [
        "Ệ",
        "E"
    ],
    [
        "ỉ",
        "i"
    ],
    [
        "Ỉ",
        "I"
    ],
    [
        "ị",
        "i"
    ],
    [
        "Ị",
        "I"
    ],
    [
        "ọ",
        "o"
    ],
    [
        "Ọ",
        "O"
    ],
    [
        "ỏ",
        "o"
    ],
    [
        "Ỏ",
        "O"
    ],
    [
        "ố",
        "o"
    ],
    [
        "Ố",
        "O"
    ],
    [
        "ồ",
        "o"
    ],
    [
        "Ồ",
        "O"
    ],
    [
        "ổ",
        "o"
    ],
    [
        "Ổ",
        "O"
    ],
    [
        "ỗ",
        "o"
    ],
    [
        "Ỗ",
        "O"
    ],
    [
        "ộ",
        "o"
    ],
    [
        "Ộ",
        "O"
    ],
    [
        "ớ",
        "o"
    ],
    [
        "Ớ",
        "O"
    ],
    [
        "ờ",
        "o"
    ],
    [
        "Ờ",
        "O"
    ],
    [
        "ở",
        "o"
    ],
    [
        "Ở",
        "O"
    ],
    [
        "ỡ",
        "o"
    ],
    [
        "Ỡ",
        "O"
    ],
    [
        "ợ",
        "o"
    ],
    [
        "Ợ",
        "O"
    ],
    [
        "ụ",
        "u"
    ],
    [
        "Ụ",
        "U"
    ],
    [
        "ủ",
        "u"
    ],
    [
        "Ủ",
        "U"
    ],
    [
        "ứ",
        "u"
    ],
    [
        "Ứ",
        "U"
    ],
    [
        "ừ",
        "u"
    ],
    [
        "Ừ",
        "U"
    ],
    [
        "ử",
        "u"
    ],
    [
        "Ử",
        "U"
    ],
    [
        "ữ",
        "u"
    ],
    [
        "Ữ",
        "U"
    ],
    [
        "ự",
        "u"
    ],
    [
        "Ự",
        "U"
    ],
    [
        "ỳ",
        "y"
    ],
    [
        "Ỳ",
        "Y"
    ],
    [
        "ỵ",
        "y"
    ],
    [
        "Ỵ",
        "Y"
    ],
    [
        "ỷ",
        "y"
    ],
    [
        "Ỷ",
        "Y"
    ],
    [
        "ỹ",
        "y"
    ],
    [
        "Ỹ",
        "Y"
    ],
    // Arabic
    [
        "ء",
        "e"
    ],
    [
        "آ",
        "a"
    ],
    [
        "أ",
        "a"
    ],
    [
        "ؤ",
        "w"
    ],
    [
        "إ",
        "i"
    ],
    [
        "ئ",
        "y"
    ],
    [
        "ا",
        "a"
    ],
    [
        "ب",
        "b"
    ],
    [
        "ة",
        "t"
    ],
    [
        "ت",
        "t"
    ],
    [
        "ث",
        "th"
    ],
    [
        "ج",
        "j"
    ],
    [
        "ح",
        "h"
    ],
    [
        "خ",
        "kh"
    ],
    [
        "د",
        "d"
    ],
    [
        "ذ",
        "dh"
    ],
    [
        "ر",
        "r"
    ],
    [
        "ز",
        "z"
    ],
    [
        "س",
        "s"
    ],
    [
        "ش",
        "sh"
    ],
    [
        "ص",
        "s"
    ],
    [
        "ض",
        "d"
    ],
    [
        "ط",
        "t"
    ],
    [
        "ظ",
        "z"
    ],
    [
        "ع",
        "e"
    ],
    [
        "غ",
        "gh"
    ],
    [
        "ـ",
        "_"
    ],
    [
        "ف",
        "f"
    ],
    [
        "ق",
        "q"
    ],
    [
        "ك",
        "k"
    ],
    [
        "ل",
        "l"
    ],
    [
        "م",
        "m"
    ],
    [
        "ن",
        "n"
    ],
    [
        "ه",
        "h"
    ],
    [
        "و",
        "w"
    ],
    [
        "ى",
        "a"
    ],
    [
        "ي",
        "y"
    ],
    [
        "َ‎",
        "a"
    ],
    [
        "ُ",
        "u"
    ],
    [
        "ِ‎",
        "i"
    ],
    [
        "٠",
        "0"
    ],
    [
        "١",
        "1"
    ],
    [
        "٢",
        "2"
    ],
    [
        "٣",
        "3"
    ],
    [
        "٤",
        "4"
    ],
    [
        "٥",
        "5"
    ],
    [
        "٦",
        "6"
    ],
    [
        "٧",
        "7"
    ],
    [
        "٨",
        "8"
    ],
    [
        "٩",
        "9"
    ],
    // Persian / Farsi
    [
        "چ",
        "ch"
    ],
    [
        "ک",
        "k"
    ],
    [
        "گ",
        "g"
    ],
    [
        "پ",
        "p"
    ],
    [
        "ژ",
        "zh"
    ],
    [
        "ی",
        "y"
    ],
    [
        "۰",
        "0"
    ],
    [
        "۱",
        "1"
    ],
    [
        "۲",
        "2"
    ],
    [
        "۳",
        "3"
    ],
    [
        "۴",
        "4"
    ],
    [
        "۵",
        "5"
    ],
    [
        "۶",
        "6"
    ],
    [
        "۷",
        "7"
    ],
    [
        "۸",
        "8"
    ],
    [
        "۹",
        "9"
    ],
    // Pashto
    [
        "ټ",
        "p"
    ],
    [
        "ځ",
        "z"
    ],
    [
        "څ",
        "c"
    ],
    [
        "ډ",
        "d"
    ],
    [
        "ﺫ",
        "d"
    ],
    [
        "ﺭ",
        "r"
    ],
    [
        "ړ",
        "r"
    ],
    [
        "ﺯ",
        "z"
    ],
    [
        "ږ",
        "g"
    ],
    [
        "ښ",
        "x"
    ],
    [
        "ګ",
        "g"
    ],
    [
        "ڼ",
        "n"
    ],
    [
        "ۀ",
        "e"
    ],
    [
        "ې",
        "e"
    ],
    [
        "ۍ",
        "ai"
    ],
    // Urdu
    [
        "ٹ",
        "t"
    ],
    [
        "ڈ",
        "d"
    ],
    [
        "ڑ",
        "r"
    ],
    [
        "ں",
        "n"
    ],
    [
        "ہ",
        "h"
    ],
    [
        "ھ",
        "h"
    ],
    [
        "ے",
        "e"
    ],
    // Russian
    [
        "А",
        "A"
    ],
    [
        "а",
        "a"
    ],
    [
        "Б",
        "B"
    ],
    [
        "б",
        "b"
    ],
    [
        "В",
        "V"
    ],
    [
        "в",
        "v"
    ],
    [
        "Г",
        "G"
    ],
    [
        "г",
        "g"
    ],
    [
        "Д",
        "D"
    ],
    [
        "д",
        "d"
    ],
    [
        "ъе",
        "ye"
    ],
    [
        "Ъе",
        "Ye"
    ],
    [
        "ъЕ",
        "yE"
    ],
    [
        "ЪЕ",
        "YE"
    ],
    [
        "Е",
        "E"
    ],
    [
        "е",
        "e"
    ],
    [
        "Ё",
        "Yo"
    ],
    [
        "ё",
        "yo"
    ],
    [
        "Ж",
        "Zh"
    ],
    [
        "ж",
        "zh"
    ],
    [
        "З",
        "Z"
    ],
    [
        "з",
        "z"
    ],
    [
        "И",
        "I"
    ],
    [
        "и",
        "i"
    ],
    [
        "ый",
        "iy"
    ],
    [
        "Ый",
        "Iy"
    ],
    [
        "ЫЙ",
        "IY"
    ],
    [
        "ыЙ",
        "iY"
    ],
    [
        "Й",
        "Y"
    ],
    [
        "й",
        "y"
    ],
    [
        "К",
        "K"
    ],
    [
        "к",
        "k"
    ],
    [
        "Л",
        "L"
    ],
    [
        "л",
        "l"
    ],
    [
        "М",
        "M"
    ],
    [
        "м",
        "m"
    ],
    [
        "Н",
        "N"
    ],
    [
        "н",
        "n"
    ],
    [
        "О",
        "O"
    ],
    [
        "о",
        "o"
    ],
    [
        "П",
        "P"
    ],
    [
        "п",
        "p"
    ],
    [
        "Р",
        "R"
    ],
    [
        "р",
        "r"
    ],
    [
        "С",
        "S"
    ],
    [
        "с",
        "s"
    ],
    [
        "Т",
        "T"
    ],
    [
        "т",
        "t"
    ],
    [
        "У",
        "U"
    ],
    [
        "у",
        "u"
    ],
    [
        "Ф",
        "F"
    ],
    [
        "ф",
        "f"
    ],
    [
        "Х",
        "Kh"
    ],
    [
        "х",
        "kh"
    ],
    [
        "Ц",
        "Ts"
    ],
    [
        "ц",
        "ts"
    ],
    [
        "Ч",
        "Ch"
    ],
    [
        "ч",
        "ch"
    ],
    [
        "Ш",
        "Sh"
    ],
    [
        "ш",
        "sh"
    ],
    [
        "Щ",
        "Sch"
    ],
    [
        "щ",
        "sch"
    ],
    [
        "Ъ",
        ""
    ],
    [
        "ъ",
        ""
    ],
    [
        "Ы",
        "Y"
    ],
    [
        "ы",
        "y"
    ],
    [
        "Ь",
        ""
    ],
    [
        "ь",
        ""
    ],
    [
        "Э",
        "E"
    ],
    [
        "э",
        "e"
    ],
    [
        "Ю",
        "Yu"
    ],
    [
        "ю",
        "yu"
    ],
    [
        "Я",
        "Ya"
    ],
    [
        "я",
        "ya"
    ],
    // Romanian
    [
        "ă",
        "a"
    ],
    [
        "Ă",
        "A"
    ],
    [
        "ș",
        "s"
    ],
    [
        "Ș",
        "S"
    ],
    [
        "ț",
        "t"
    ],
    [
        "Ț",
        "T"
    ],
    [
        "ţ",
        "t"
    ],
    [
        "Ţ",
        "T"
    ],
    // Turkish
    [
        "ş",
        "s"
    ],
    [
        "Ş",
        "S"
    ],
    [
        "\xe7",
        "c"
    ],
    [
        "\xc7",
        "C"
    ],
    [
        "ğ",
        "g"
    ],
    [
        "Ğ",
        "G"
    ],
    [
        "ı",
        "i"
    ],
    [
        "İ",
        "I"
    ],
    // Armenian
    [
        "ա",
        "a"
    ],
    [
        "Ա",
        "A"
    ],
    [
        "բ",
        "b"
    ],
    [
        "Բ",
        "B"
    ],
    [
        "գ",
        "g"
    ],
    [
        "Գ",
        "G"
    ],
    [
        "դ",
        "d"
    ],
    [
        "Դ",
        "D"
    ],
    [
        "ե",
        "ye"
    ],
    [
        "Ե",
        "Ye"
    ],
    [
        "զ",
        "z"
    ],
    [
        "Զ",
        "Z"
    ],
    [
        "է",
        "e"
    ],
    [
        "Է",
        "E"
    ],
    [
        "ը",
        "y"
    ],
    [
        "Ը",
        "Y"
    ],
    [
        "թ",
        "t"
    ],
    [
        "Թ",
        "T"
    ],
    [
        "ժ",
        "zh"
    ],
    [
        "Ժ",
        "Zh"
    ],
    [
        "ի",
        "i"
    ],
    [
        "Ի",
        "I"
    ],
    [
        "լ",
        "l"
    ],
    [
        "Լ",
        "L"
    ],
    [
        "խ",
        "kh"
    ],
    [
        "Խ",
        "Kh"
    ],
    [
        "ծ",
        "ts"
    ],
    [
        "Ծ",
        "Ts"
    ],
    [
        "կ",
        "k"
    ],
    [
        "Կ",
        "K"
    ],
    [
        "հ",
        "h"
    ],
    [
        "Հ",
        "H"
    ],
    [
        "ձ",
        "dz"
    ],
    [
        "Ձ",
        "Dz"
    ],
    [
        "ղ",
        "gh"
    ],
    [
        "Ղ",
        "Gh"
    ],
    [
        "ճ",
        "tch"
    ],
    [
        "Ճ",
        "Tch"
    ],
    [
        "մ",
        "m"
    ],
    [
        "Մ",
        "M"
    ],
    [
        "յ",
        "y"
    ],
    [
        "Յ",
        "Y"
    ],
    [
        "ն",
        "n"
    ],
    [
        "Ն",
        "N"
    ],
    [
        "շ",
        "sh"
    ],
    [
        "Շ",
        "Sh"
    ],
    [
        "ո",
        "vo"
    ],
    [
        "Ո",
        "Vo"
    ],
    [
        "չ",
        "ch"
    ],
    [
        "Չ",
        "Ch"
    ],
    [
        "պ",
        "p"
    ],
    [
        "Պ",
        "P"
    ],
    [
        "ջ",
        "j"
    ],
    [
        "Ջ",
        "J"
    ],
    [
        "ռ",
        "r"
    ],
    [
        "Ռ",
        "R"
    ],
    [
        "ս",
        "s"
    ],
    [
        "Ս",
        "S"
    ],
    [
        "վ",
        "v"
    ],
    [
        "Վ",
        "V"
    ],
    [
        "տ",
        "t"
    ],
    [
        "Տ",
        "T"
    ],
    [
        "ր",
        "r"
    ],
    [
        "Ր",
        "R"
    ],
    [
        "ց",
        "c"
    ],
    [
        "Ց",
        "C"
    ],
    [
        "ու",
        "u"
    ],
    [
        "ՈՒ",
        "U"
    ],
    [
        "Ու",
        "U"
    ],
    [
        "փ",
        "p"
    ],
    [
        "Փ",
        "P"
    ],
    [
        "ք",
        "q"
    ],
    [
        "Ք",
        "Q"
    ],
    [
        "օ",
        "o"
    ],
    [
        "Օ",
        "O"
    ],
    [
        "ֆ",
        "f"
    ],
    [
        "Ֆ",
        "F"
    ],
    [
        "և",
        "yev"
    ],
    // Georgian
    [
        "ა",
        "a"
    ],
    [
        "ბ",
        "b"
    ],
    [
        "გ",
        "g"
    ],
    [
        "დ",
        "d"
    ],
    [
        "ე",
        "e"
    ],
    [
        "ვ",
        "v"
    ],
    [
        "ზ",
        "z"
    ],
    [
        "თ",
        "t"
    ],
    [
        "ი",
        "i"
    ],
    [
        "კ",
        "k"
    ],
    [
        "ლ",
        "l"
    ],
    [
        "მ",
        "m"
    ],
    [
        "ნ",
        "n"
    ],
    [
        "ო",
        "o"
    ],
    [
        "პ",
        "p"
    ],
    [
        "ჟ",
        "zh"
    ],
    [
        "რ",
        "r"
    ],
    [
        "ს",
        "s"
    ],
    [
        "ტ",
        "t"
    ],
    [
        "უ",
        "u"
    ],
    [
        "ფ",
        "ph"
    ],
    [
        "ქ",
        "q"
    ],
    [
        "ღ",
        "gh"
    ],
    [
        "ყ",
        "k"
    ],
    [
        "შ",
        "sh"
    ],
    [
        "ჩ",
        "ch"
    ],
    [
        "ც",
        "ts"
    ],
    [
        "ძ",
        "dz"
    ],
    [
        "წ",
        "ts"
    ],
    [
        "ჭ",
        "tch"
    ],
    [
        "ხ",
        "kh"
    ],
    [
        "ჯ",
        "j"
    ],
    [
        "ჰ",
        "h"
    ],
    // Czech
    [
        "č",
        "c"
    ],
    [
        "ď",
        "d"
    ],
    [
        "ě",
        "e"
    ],
    [
        "ň",
        "n"
    ],
    [
        "ř",
        "r"
    ],
    [
        "š",
        "s"
    ],
    [
        "ť",
        "t"
    ],
    [
        "ů",
        "u"
    ],
    [
        "ž",
        "z"
    ],
    [
        "Č",
        "C"
    ],
    [
        "Ď",
        "D"
    ],
    [
        "Ě",
        "E"
    ],
    [
        "Ň",
        "N"
    ],
    [
        "Ř",
        "R"
    ],
    [
        "Š",
        "S"
    ],
    [
        "Ť",
        "T"
    ],
    [
        "Ů",
        "U"
    ],
    [
        "Ž",
        "Z"
    ],
    // Dhivehi
    [
        "ހ",
        "h"
    ],
    [
        "ށ",
        "sh"
    ],
    [
        "ނ",
        "n"
    ],
    [
        "ރ",
        "r"
    ],
    [
        "ބ",
        "b"
    ],
    [
        "ޅ",
        "lh"
    ],
    [
        "ކ",
        "k"
    ],
    [
        "އ",
        "a"
    ],
    [
        "ވ",
        "v"
    ],
    [
        "މ",
        "m"
    ],
    [
        "ފ",
        "f"
    ],
    [
        "ދ",
        "dh"
    ],
    [
        "ތ",
        "th"
    ],
    [
        "ލ",
        "l"
    ],
    [
        "ގ",
        "g"
    ],
    [
        "ޏ",
        "gn"
    ],
    [
        "ސ",
        "s"
    ],
    [
        "ޑ",
        "d"
    ],
    [
        "ޒ",
        "z"
    ],
    [
        "ޓ",
        "t"
    ],
    [
        "ޔ",
        "y"
    ],
    [
        "ޕ",
        "p"
    ],
    [
        "ޖ",
        "j"
    ],
    [
        "ޗ",
        "ch"
    ],
    [
        "ޘ",
        "tt"
    ],
    [
        "ޙ",
        "hh"
    ],
    [
        "ޚ",
        "kh"
    ],
    [
        "ޛ",
        "th"
    ],
    [
        "ޜ",
        "z"
    ],
    [
        "ޝ",
        "sh"
    ],
    [
        "ޞ",
        "s"
    ],
    [
        "ޟ",
        "d"
    ],
    [
        "ޠ",
        "t"
    ],
    [
        "ޡ",
        "z"
    ],
    [
        "ޢ",
        "a"
    ],
    [
        "ޣ",
        "gh"
    ],
    [
        "ޤ",
        "q"
    ],
    [
        "ޥ",
        "w"
    ],
    [
        "ަ",
        "a"
    ],
    [
        "ާ",
        "aa"
    ],
    [
        "ި",
        "i"
    ],
    [
        "ީ",
        "ee"
    ],
    [
        "ު",
        "u"
    ],
    [
        "ޫ",
        "oo"
    ],
    [
        "ެ",
        "e"
    ],
    [
        "ޭ",
        "ey"
    ],
    [
        "ޮ",
        "o"
    ],
    [
        "ޯ",
        "oa"
    ],
    [
        "ް",
        ""
    ],
    // Greek
    [
        "α",
        "a"
    ],
    [
        "β",
        "v"
    ],
    [
        "γ",
        "g"
    ],
    [
        "δ",
        "d"
    ],
    [
        "ε",
        "e"
    ],
    [
        "ζ",
        "z"
    ],
    [
        "η",
        "i"
    ],
    [
        "θ",
        "th"
    ],
    [
        "ι",
        "i"
    ],
    [
        "κ",
        "k"
    ],
    [
        "λ",
        "l"
    ],
    [
        "μ",
        "m"
    ],
    [
        "ν",
        "n"
    ],
    [
        "ξ",
        "ks"
    ],
    [
        "ο",
        "o"
    ],
    [
        "π",
        "p"
    ],
    [
        "ρ",
        "r"
    ],
    [
        "σ",
        "s"
    ],
    [
        "τ",
        "t"
    ],
    [
        "υ",
        "y"
    ],
    [
        "φ",
        "f"
    ],
    [
        "χ",
        "x"
    ],
    [
        "ψ",
        "ps"
    ],
    [
        "ω",
        "o"
    ],
    [
        "ά",
        "a"
    ],
    [
        "έ",
        "e"
    ],
    [
        "ί",
        "i"
    ],
    [
        "ό",
        "o"
    ],
    [
        "ύ",
        "y"
    ],
    [
        "ή",
        "i"
    ],
    [
        "ώ",
        "o"
    ],
    [
        "ς",
        "s"
    ],
    [
        "ϊ",
        "i"
    ],
    [
        "ΰ",
        "y"
    ],
    [
        "ϋ",
        "y"
    ],
    [
        "ΐ",
        "i"
    ],
    [
        "Α",
        "A"
    ],
    [
        "Β",
        "B"
    ],
    [
        "Γ",
        "G"
    ],
    [
        "Δ",
        "D"
    ],
    [
        "Ε",
        "E"
    ],
    [
        "Ζ",
        "Z"
    ],
    [
        "Η",
        "I"
    ],
    [
        "Θ",
        "TH"
    ],
    [
        "Ι",
        "I"
    ],
    [
        "Κ",
        "K"
    ],
    [
        "Λ",
        "L"
    ],
    [
        "Μ",
        "M"
    ],
    [
        "Ν",
        "N"
    ],
    [
        "Ξ",
        "KS"
    ],
    [
        "Ο",
        "O"
    ],
    [
        "Π",
        "P"
    ],
    [
        "Ρ",
        "R"
    ],
    [
        "Σ",
        "S"
    ],
    [
        "Τ",
        "T"
    ],
    [
        "Υ",
        "Y"
    ],
    [
        "Φ",
        "F"
    ],
    [
        "Χ",
        "X"
    ],
    [
        "Ψ",
        "PS"
    ],
    [
        "Ω",
        "O"
    ],
    [
        "Ά",
        "A"
    ],
    [
        "Έ",
        "E"
    ],
    [
        "Ί",
        "I"
    ],
    [
        "Ό",
        "O"
    ],
    [
        "Ύ",
        "Y"
    ],
    [
        "Ή",
        "I"
    ],
    [
        "Ώ",
        "O"
    ],
    [
        "Ϊ",
        "I"
    ],
    [
        "Ϋ",
        "Y"
    ],
    // Disabled as it conflicts with German and Latin.
    // Hungarian
    // ['ä', 'a'],
    // ['Ä', 'A'],
    // ['ö', 'o'],
    // ['Ö', 'O'],
    // ['ü', 'u'],
    // ['Ü', 'U'],
    // ['ű', 'u'],
    // ['Ű', 'U'],
    // Latvian
    [
        "ā",
        "a"
    ],
    [
        "ē",
        "e"
    ],
    [
        "ģ",
        "g"
    ],
    [
        "ī",
        "i"
    ],
    [
        "ķ",
        "k"
    ],
    [
        "ļ",
        "l"
    ],
    [
        "ņ",
        "n"
    ],
    [
        "ū",
        "u"
    ],
    [
        "Ā",
        "A"
    ],
    [
        "Ē",
        "E"
    ],
    [
        "Ģ",
        "G"
    ],
    [
        "Ī",
        "I"
    ],
    [
        "Ķ",
        "K"
    ],
    [
        "Ļ",
        "L"
    ],
    [
        "Ņ",
        "N"
    ],
    [
        "Ū",
        "U"
    ],
    [
        "č",
        "c"
    ],
    [
        "š",
        "s"
    ],
    [
        "ž",
        "z"
    ],
    [
        "Č",
        "C"
    ],
    [
        "Š",
        "S"
    ],
    [
        "Ž",
        "Z"
    ],
    // Lithuanian
    [
        "ą",
        "a"
    ],
    [
        "č",
        "c"
    ],
    [
        "ę",
        "e"
    ],
    [
        "ė",
        "e"
    ],
    [
        "į",
        "i"
    ],
    [
        "š",
        "s"
    ],
    [
        "ų",
        "u"
    ],
    [
        "ū",
        "u"
    ],
    [
        "ž",
        "z"
    ],
    [
        "Ą",
        "A"
    ],
    [
        "Č",
        "C"
    ],
    [
        "Ę",
        "E"
    ],
    [
        "Ė",
        "E"
    ],
    [
        "Į",
        "I"
    ],
    [
        "Š",
        "S"
    ],
    [
        "Ų",
        "U"
    ],
    [
        "Ū",
        "U"
    ],
    // Macedonian
    [
        "Ќ",
        "Kj"
    ],
    [
        "ќ",
        "kj"
    ],
    [
        "Љ",
        "Lj"
    ],
    [
        "љ",
        "lj"
    ],
    [
        "Њ",
        "Nj"
    ],
    [
        "њ",
        "nj"
    ],
    [
        "Тс",
        "Ts"
    ],
    [
        "тс",
        "ts"
    ],
    // Polish
    [
        "ą",
        "a"
    ],
    [
        "ć",
        "c"
    ],
    [
        "ę",
        "e"
    ],
    [
        "ł",
        "l"
    ],
    [
        "ń",
        "n"
    ],
    [
        "ś",
        "s"
    ],
    [
        "ź",
        "z"
    ],
    [
        "ż",
        "z"
    ],
    [
        "Ą",
        "A"
    ],
    [
        "Ć",
        "C"
    ],
    [
        "Ę",
        "E"
    ],
    [
        "Ł",
        "L"
    ],
    [
        "Ń",
        "N"
    ],
    [
        "Ś",
        "S"
    ],
    [
        "Ź",
        "Z"
    ],
    [
        "Ż",
        "Z"
    ],
    // Disabled as it conflicts with Vietnamese.
    // Serbian
    // ['љ', 'lj'],
    // ['њ', 'nj'],
    // ['Љ', 'Lj'],
    // ['Њ', 'Nj'],
    // ['đ', 'dj'],
    // ['Đ', 'Dj'],
    // ['ђ', 'dj'],
    // ['ј', 'j'],
    // ['ћ', 'c'],
    // ['џ', 'dz'],
    // ['Ђ', 'Dj'],
    // ['Ј', 'j'],
    // ['Ћ', 'C'],
    // ['Џ', 'Dz'],
    // Disabled as it conflicts with German and Latin.
    // Slovak
    // ['ä', 'a'],
    // ['Ä', 'A'],
    // ['ľ', 'l'],
    // ['ĺ', 'l'],
    // ['ŕ', 'r'],
    // ['Ľ', 'L'],
    // ['Ĺ', 'L'],
    // ['Ŕ', 'R'],
    // Disabled as it conflicts with German and Latin.
    // Swedish
    // ['å', 'o'],
    // ['Å', 'o'],
    // ['ä', 'a'],
    // ['Ä', 'A'],
    // ['ë', 'e'],
    // ['Ë', 'E'],
    // ['ö', 'o'],
    // ['Ö', 'O'],
    // Ukrainian
    [
        "Є",
        "Ye"
    ],
    [
        "І",
        "I"
    ],
    [
        "Ї",
        "Yi"
    ],
    [
        "Ґ",
        "G"
    ],
    [
        "є",
        "ye"
    ],
    [
        "і",
        "i"
    ],
    [
        "ї",
        "yi"
    ],
    [
        "ґ",
        "g"
    ],
    // Dutch
    [
        "Ĳ",
        "IJ"
    ],
    [
        "ĳ",
        "ij"
    ],
    // Danish
    // ['Æ', 'Ae'],
    // ['Ø', 'Oe'],
    // ['Å', 'Aa'],
    // ['æ', 'ae'],
    // ['ø', 'oe'],
    // ['å', 'aa']
    // Currencies
    [
        "\xa2",
        "c"
    ],
    [
        "\xa5",
        "Y"
    ],
    [
        "߿",
        "b"
    ],
    [
        "৳",
        "t"
    ],
    [
        "૱",
        "Bo"
    ],
    [
        "฿",
        "B"
    ],
    [
        "₠",
        "CE"
    ],
    [
        "₡",
        "C"
    ],
    [
        "₢",
        "Cr"
    ],
    [
        "₣",
        "F"
    ],
    [
        "₥",
        "m"
    ],
    [
        "₦",
        "N"
    ],
    [
        "₧",
        "Pt"
    ],
    [
        "₨",
        "Rs"
    ],
    [
        "₩",
        "W"
    ],
    [
        "₫",
        "s"
    ],
    [
        "€",
        "E"
    ],
    [
        "₭",
        "K"
    ],
    [
        "₮",
        "T"
    ],
    [
        "₯",
        "Dp"
    ],
    [
        "₰",
        "S"
    ],
    [
        "₱",
        "P"
    ],
    [
        "₲",
        "G"
    ],
    [
        "₳",
        "A"
    ],
    [
        "₴",
        "S"
    ],
    [
        "₵",
        "C"
    ],
    [
        "₶",
        "tt"
    ],
    [
        "₷",
        "S"
    ],
    [
        "₸",
        "T"
    ],
    [
        "₹",
        "R"
    ],
    [
        "₺",
        "L"
    ],
    [
        "₽",
        "P"
    ],
    [
        "₿",
        "B"
    ],
    [
        "﹩",
        "$"
    ],
    [
        "￠",
        "c"
    ],
    [
        "￥",
        "Y"
    ],
    [
        "￦",
        "W"
    ],
    // Latin
    [
        "\uD835\uDC00",
        "A"
    ],
    [
        "\uD835\uDC01",
        "B"
    ],
    [
        "\uD835\uDC02",
        "C"
    ],
    [
        "\uD835\uDC03",
        "D"
    ],
    [
        "\uD835\uDC04",
        "E"
    ],
    [
        "\uD835\uDC05",
        "F"
    ],
    [
        "\uD835\uDC06",
        "G"
    ],
    [
        "\uD835\uDC07",
        "H"
    ],
    [
        "\uD835\uDC08",
        "I"
    ],
    [
        "\uD835\uDC09",
        "J"
    ],
    [
        "\uD835\uDC0A",
        "K"
    ],
    [
        "\uD835\uDC0B",
        "L"
    ],
    [
        "\uD835\uDC0C",
        "M"
    ],
    [
        "\uD835\uDC0D",
        "N"
    ],
    [
        "\uD835\uDC0E",
        "O"
    ],
    [
        "\uD835\uDC0F",
        "P"
    ],
    [
        "\uD835\uDC10",
        "Q"
    ],
    [
        "\uD835\uDC11",
        "R"
    ],
    [
        "\uD835\uDC12",
        "S"
    ],
    [
        "\uD835\uDC13",
        "T"
    ],
    [
        "\uD835\uDC14",
        "U"
    ],
    [
        "\uD835\uDC15",
        "V"
    ],
    [
        "\uD835\uDC16",
        "W"
    ],
    [
        "\uD835\uDC17",
        "X"
    ],
    [
        "\uD835\uDC18",
        "Y"
    ],
    [
        "\uD835\uDC19",
        "Z"
    ],
    [
        "\uD835\uDC1A",
        "a"
    ],
    [
        "\uD835\uDC1B",
        "b"
    ],
    [
        "\uD835\uDC1C",
        "c"
    ],
    [
        "\uD835\uDC1D",
        "d"
    ],
    [
        "\uD835\uDC1E",
        "e"
    ],
    [
        "\uD835\uDC1F",
        "f"
    ],
    [
        "\uD835\uDC20",
        "g"
    ],
    [
        "\uD835\uDC21",
        "h"
    ],
    [
        "\uD835\uDC22",
        "i"
    ],
    [
        "\uD835\uDC23",
        "j"
    ],
    [
        "\uD835\uDC24",
        "k"
    ],
    [
        "\uD835\uDC25",
        "l"
    ],
    [
        "\uD835\uDC26",
        "m"
    ],
    [
        "\uD835\uDC27",
        "n"
    ],
    [
        "\uD835\uDC28",
        "o"
    ],
    [
        "\uD835\uDC29",
        "p"
    ],
    [
        "\uD835\uDC2A",
        "q"
    ],
    [
        "\uD835\uDC2B",
        "r"
    ],
    [
        "\uD835\uDC2C",
        "s"
    ],
    [
        "\uD835\uDC2D",
        "t"
    ],
    [
        "\uD835\uDC2E",
        "u"
    ],
    [
        "\uD835\uDC2F",
        "v"
    ],
    [
        "\uD835\uDC30",
        "w"
    ],
    [
        "\uD835\uDC31",
        "x"
    ],
    [
        "\uD835\uDC32",
        "y"
    ],
    [
        "\uD835\uDC33",
        "z"
    ],
    [
        "\uD835\uDC34",
        "A"
    ],
    [
        "\uD835\uDC35",
        "B"
    ],
    [
        "\uD835\uDC36",
        "C"
    ],
    [
        "\uD835\uDC37",
        "D"
    ],
    [
        "\uD835\uDC38",
        "E"
    ],
    [
        "\uD835\uDC39",
        "F"
    ],
    [
        "\uD835\uDC3A",
        "G"
    ],
    [
        "\uD835\uDC3B",
        "H"
    ],
    [
        "\uD835\uDC3C",
        "I"
    ],
    [
        "\uD835\uDC3D",
        "J"
    ],
    [
        "\uD835\uDC3E",
        "K"
    ],
    [
        "\uD835\uDC3F",
        "L"
    ],
    [
        "\uD835\uDC40",
        "M"
    ],
    [
        "\uD835\uDC41",
        "N"
    ],
    [
        "\uD835\uDC42",
        "O"
    ],
    [
        "\uD835\uDC43",
        "P"
    ],
    [
        "\uD835\uDC44",
        "Q"
    ],
    [
        "\uD835\uDC45",
        "R"
    ],
    [
        "\uD835\uDC46",
        "S"
    ],
    [
        "\uD835\uDC47",
        "T"
    ],
    [
        "\uD835\uDC48",
        "U"
    ],
    [
        "\uD835\uDC49",
        "V"
    ],
    [
        "\uD835\uDC4A",
        "W"
    ],
    [
        "\uD835\uDC4B",
        "X"
    ],
    [
        "\uD835\uDC4C",
        "Y"
    ],
    [
        "\uD835\uDC4D",
        "Z"
    ],
    [
        "\uD835\uDC4E",
        "a"
    ],
    [
        "\uD835\uDC4F",
        "b"
    ],
    [
        "\uD835\uDC50",
        "c"
    ],
    [
        "\uD835\uDC51",
        "d"
    ],
    [
        "\uD835\uDC52",
        "e"
    ],
    [
        "\uD835\uDC53",
        "f"
    ],
    [
        "\uD835\uDC54",
        "g"
    ],
    [
        "\uD835\uDC56",
        "i"
    ],
    [
        "\uD835\uDC57",
        "j"
    ],
    [
        "\uD835\uDC58",
        "k"
    ],
    [
        "\uD835\uDC59",
        "l"
    ],
    [
        "\uD835\uDC5A",
        "m"
    ],
    [
        "\uD835\uDC5B",
        "n"
    ],
    [
        "\uD835\uDC5C",
        "o"
    ],
    [
        "\uD835\uDC5D",
        "p"
    ],
    [
        "\uD835\uDC5E",
        "q"
    ],
    [
        "\uD835\uDC5F",
        "r"
    ],
    [
        "\uD835\uDC60",
        "s"
    ],
    [
        "\uD835\uDC61",
        "t"
    ],
    [
        "\uD835\uDC62",
        "u"
    ],
    [
        "\uD835\uDC63",
        "v"
    ],
    [
        "\uD835\uDC64",
        "w"
    ],
    [
        "\uD835\uDC65",
        "x"
    ],
    [
        "\uD835\uDC66",
        "y"
    ],
    [
        "\uD835\uDC67",
        "z"
    ],
    [
        "\uD835\uDC68",
        "A"
    ],
    [
        "\uD835\uDC69",
        "B"
    ],
    [
        "\uD835\uDC6A",
        "C"
    ],
    [
        "\uD835\uDC6B",
        "D"
    ],
    [
        "\uD835\uDC6C",
        "E"
    ],
    [
        "\uD835\uDC6D",
        "F"
    ],
    [
        "\uD835\uDC6E",
        "G"
    ],
    [
        "\uD835\uDC6F",
        "H"
    ],
    [
        "\uD835\uDC70",
        "I"
    ],
    [
        "\uD835\uDC71",
        "J"
    ],
    [
        "\uD835\uDC72",
        "K"
    ],
    [
        "\uD835\uDC73",
        "L"
    ],
    [
        "\uD835\uDC74",
        "M"
    ],
    [
        "\uD835\uDC75",
        "N"
    ],
    [
        "\uD835\uDC76",
        "O"
    ],
    [
        "\uD835\uDC77",
        "P"
    ],
    [
        "\uD835\uDC78",
        "Q"
    ],
    [
        "\uD835\uDC79",
        "R"
    ],
    [
        "\uD835\uDC7A",
        "S"
    ],
    [
        "\uD835\uDC7B",
        "T"
    ],
    [
        "\uD835\uDC7C",
        "U"
    ],
    [
        "\uD835\uDC7D",
        "V"
    ],
    [
        "\uD835\uDC7E",
        "W"
    ],
    [
        "\uD835\uDC7F",
        "X"
    ],
    [
        "\uD835\uDC80",
        "Y"
    ],
    [
        "\uD835\uDC81",
        "Z"
    ],
    [
        "\uD835\uDC82",
        "a"
    ],
    [
        "\uD835\uDC83",
        "b"
    ],
    [
        "\uD835\uDC84",
        "c"
    ],
    [
        "\uD835\uDC85",
        "d"
    ],
    [
        "\uD835\uDC86",
        "e"
    ],
    [
        "\uD835\uDC87",
        "f"
    ],
    [
        "\uD835\uDC88",
        "g"
    ],
    [
        "\uD835\uDC89",
        "h"
    ],
    [
        "\uD835\uDC8A",
        "i"
    ],
    [
        "\uD835\uDC8B",
        "j"
    ],
    [
        "\uD835\uDC8C",
        "k"
    ],
    [
        "\uD835\uDC8D",
        "l"
    ],
    [
        "\uD835\uDC8E",
        "m"
    ],
    [
        "\uD835\uDC8F",
        "n"
    ],
    [
        "\uD835\uDC90",
        "o"
    ],
    [
        "\uD835\uDC91",
        "p"
    ],
    [
        "\uD835\uDC92",
        "q"
    ],
    [
        "\uD835\uDC93",
        "r"
    ],
    [
        "\uD835\uDC94",
        "s"
    ],
    [
        "\uD835\uDC95",
        "t"
    ],
    [
        "\uD835\uDC96",
        "u"
    ],
    [
        "\uD835\uDC97",
        "v"
    ],
    [
        "\uD835\uDC98",
        "w"
    ],
    [
        "\uD835\uDC99",
        "x"
    ],
    [
        "\uD835\uDC9A",
        "y"
    ],
    [
        "\uD835\uDC9B",
        "z"
    ],
    [
        "\uD835\uDC9C",
        "A"
    ],
    [
        "\uD835\uDC9E",
        "C"
    ],
    [
        "\uD835\uDC9F",
        "D"
    ],
    [
        "\uD835\uDCA2",
        "g"
    ],
    [
        "\uD835\uDCA5",
        "J"
    ],
    [
        "\uD835\uDCA6",
        "K"
    ],
    [
        "\uD835\uDCA9",
        "N"
    ],
    [
        "\uD835\uDCAA",
        "O"
    ],
    [
        "\uD835\uDCAB",
        "P"
    ],
    [
        "\uD835\uDCAC",
        "Q"
    ],
    [
        "\uD835\uDCAE",
        "S"
    ],
    [
        "\uD835\uDCAF",
        "T"
    ],
    [
        "\uD835\uDCB0",
        "U"
    ],
    [
        "\uD835\uDCB1",
        "V"
    ],
    [
        "\uD835\uDCB2",
        "W"
    ],
    [
        "\uD835\uDCB3",
        "X"
    ],
    [
        "\uD835\uDCB4",
        "Y"
    ],
    [
        "\uD835\uDCB5",
        "Z"
    ],
    [
        "\uD835\uDCB6",
        "a"
    ],
    [
        "\uD835\uDCB7",
        "b"
    ],
    [
        "\uD835\uDCB8",
        "c"
    ],
    [
        "\uD835\uDCB9",
        "d"
    ],
    [
        "\uD835\uDCBB",
        "f"
    ],
    [
        "\uD835\uDCBD",
        "h"
    ],
    [
        "\uD835\uDCBE",
        "i"
    ],
    [
        "\uD835\uDCBF",
        "j"
    ],
    [
        "\uD835\uDCC0",
        "h"
    ],
    [
        "\uD835\uDCC1",
        "l"
    ],
    [
        "\uD835\uDCC2",
        "m"
    ],
    [
        "\uD835\uDCC3",
        "n"
    ],
    [
        "\uD835\uDCC5",
        "p"
    ],
    [
        "\uD835\uDCC6",
        "q"
    ],
    [
        "\uD835\uDCC7",
        "r"
    ],
    [
        "\uD835\uDCC8",
        "s"
    ],
    [
        "\uD835\uDCC9",
        "t"
    ],
    [
        "\uD835\uDCCA",
        "u"
    ],
    [
        "\uD835\uDCCB",
        "v"
    ],
    [
        "\uD835\uDCCC",
        "w"
    ],
    [
        "\uD835\uDCCD",
        "x"
    ],
    [
        "\uD835\uDCCE",
        "y"
    ],
    [
        "\uD835\uDCCF",
        "z"
    ],
    [
        "\uD835\uDCD0",
        "A"
    ],
    [
        "\uD835\uDCD1",
        "B"
    ],
    [
        "\uD835\uDCD2",
        "C"
    ],
    [
        "\uD835\uDCD3",
        "D"
    ],
    [
        "\uD835\uDCD4",
        "E"
    ],
    [
        "\uD835\uDCD5",
        "F"
    ],
    [
        "\uD835\uDCD6",
        "G"
    ],
    [
        "\uD835\uDCD7",
        "H"
    ],
    [
        "\uD835\uDCD8",
        "I"
    ],
    [
        "\uD835\uDCD9",
        "J"
    ],
    [
        "\uD835\uDCDA",
        "K"
    ],
    [
        "\uD835\uDCDB",
        "L"
    ],
    [
        "\uD835\uDCDC",
        "M"
    ],
    [
        "\uD835\uDCDD",
        "N"
    ],
    [
        "\uD835\uDCDE",
        "O"
    ],
    [
        "\uD835\uDCDF",
        "P"
    ],
    [
        "\uD835\uDCE0",
        "Q"
    ],
    [
        "\uD835\uDCE1",
        "R"
    ],
    [
        "\uD835\uDCE2",
        "S"
    ],
    [
        "\uD835\uDCE3",
        "T"
    ],
    [
        "\uD835\uDCE4",
        "U"
    ],
    [
        "\uD835\uDCE5",
        "V"
    ],
    [
        "\uD835\uDCE6",
        "W"
    ],
    [
        "\uD835\uDCE7",
        "X"
    ],
    [
        "\uD835\uDCE8",
        "Y"
    ],
    [
        "\uD835\uDCE9",
        "Z"
    ],
    [
        "\uD835\uDCEA",
        "a"
    ],
    [
        "\uD835\uDCEB",
        "b"
    ],
    [
        "\uD835\uDCEC",
        "c"
    ],
    [
        "\uD835\uDCED",
        "d"
    ],
    [
        "\uD835\uDCEE",
        "e"
    ],
    [
        "\uD835\uDCEF",
        "f"
    ],
    [
        "\uD835\uDCF0",
        "g"
    ],
    [
        "\uD835\uDCF1",
        "h"
    ],
    [
        "\uD835\uDCF2",
        "i"
    ],
    [
        "\uD835\uDCF3",
        "j"
    ],
    [
        "\uD835\uDCF4",
        "k"
    ],
    [
        "\uD835\uDCF5",
        "l"
    ],
    [
        "\uD835\uDCF6",
        "m"
    ],
    [
        "\uD835\uDCF7",
        "n"
    ],
    [
        "\uD835\uDCF8",
        "o"
    ],
    [
        "\uD835\uDCF9",
        "p"
    ],
    [
        "\uD835\uDCFA",
        "q"
    ],
    [
        "\uD835\uDCFB",
        "r"
    ],
    [
        "\uD835\uDCFC",
        "s"
    ],
    [
        "\uD835\uDCFD",
        "t"
    ],
    [
        "\uD835\uDCFE",
        "u"
    ],
    [
        "\uD835\uDCFF",
        "v"
    ],
    [
        "\uD835\uDD00",
        "w"
    ],
    [
        "\uD835\uDD01",
        "x"
    ],
    [
        "\uD835\uDD02",
        "y"
    ],
    [
        "\uD835\uDD03",
        "z"
    ],
    [
        "\uD835\uDD04",
        "A"
    ],
    [
        "\uD835\uDD05",
        "B"
    ],
    [
        "\uD835\uDD07",
        "D"
    ],
    [
        "\uD835\uDD08",
        "E"
    ],
    [
        "\uD835\uDD09",
        "F"
    ],
    [
        "\uD835\uDD0A",
        "G"
    ],
    [
        "\uD835\uDD0D",
        "J"
    ],
    [
        "\uD835\uDD0E",
        "K"
    ],
    [
        "\uD835\uDD0F",
        "L"
    ],
    [
        "\uD835\uDD10",
        "M"
    ],
    [
        "\uD835\uDD11",
        "N"
    ],
    [
        "\uD835\uDD12",
        "O"
    ],
    [
        "\uD835\uDD13",
        "P"
    ],
    [
        "\uD835\uDD14",
        "Q"
    ],
    [
        "\uD835\uDD16",
        "S"
    ],
    [
        "\uD835\uDD17",
        "T"
    ],
    [
        "\uD835\uDD18",
        "U"
    ],
    [
        "\uD835\uDD19",
        "V"
    ],
    [
        "\uD835\uDD1A",
        "W"
    ],
    [
        "\uD835\uDD1B",
        "X"
    ],
    [
        "\uD835\uDD1C",
        "Y"
    ],
    [
        "\uD835\uDD1E",
        "a"
    ],
    [
        "\uD835\uDD1F",
        "b"
    ],
    [
        "\uD835\uDD20",
        "c"
    ],
    [
        "\uD835\uDD21",
        "d"
    ],
    [
        "\uD835\uDD22",
        "e"
    ],
    [
        "\uD835\uDD23",
        "f"
    ],
    [
        "\uD835\uDD24",
        "g"
    ],
    [
        "\uD835\uDD25",
        "h"
    ],
    [
        "\uD835\uDD26",
        "i"
    ],
    [
        "\uD835\uDD27",
        "j"
    ],
    [
        "\uD835\uDD28",
        "k"
    ],
    [
        "\uD835\uDD29",
        "l"
    ],
    [
        "\uD835\uDD2A",
        "m"
    ],
    [
        "\uD835\uDD2B",
        "n"
    ],
    [
        "\uD835\uDD2C",
        "o"
    ],
    [
        "\uD835\uDD2D",
        "p"
    ],
    [
        "\uD835\uDD2E",
        "q"
    ],
    [
        "\uD835\uDD2F",
        "r"
    ],
    [
        "\uD835\uDD30",
        "s"
    ],
    [
        "\uD835\uDD31",
        "t"
    ],
    [
        "\uD835\uDD32",
        "u"
    ],
    [
        "\uD835\uDD33",
        "v"
    ],
    [
        "\uD835\uDD34",
        "w"
    ],
    [
        "\uD835\uDD35",
        "x"
    ],
    [
        "\uD835\uDD36",
        "y"
    ],
    [
        "\uD835\uDD37",
        "z"
    ],
    [
        "\uD835\uDD38",
        "A"
    ],
    [
        "\uD835\uDD39",
        "B"
    ],
    [
        "\uD835\uDD3B",
        "D"
    ],
    [
        "\uD835\uDD3C",
        "E"
    ],
    [
        "\uD835\uDD3D",
        "F"
    ],
    [
        "\uD835\uDD3E",
        "G"
    ],
    [
        "\uD835\uDD40",
        "I"
    ],
    [
        "\uD835\uDD41",
        "J"
    ],
    [
        "\uD835\uDD42",
        "K"
    ],
    [
        "\uD835\uDD43",
        "L"
    ],
    [
        "\uD835\uDD44",
        "M"
    ],
    [
        "\uD835\uDD46",
        "N"
    ],
    [
        "\uD835\uDD4A",
        "S"
    ],
    [
        "\uD835\uDD4B",
        "T"
    ],
    [
        "\uD835\uDD4C",
        "U"
    ],
    [
        "\uD835\uDD4D",
        "V"
    ],
    [
        "\uD835\uDD4E",
        "W"
    ],
    [
        "\uD835\uDD4F",
        "X"
    ],
    [
        "\uD835\uDD50",
        "Y"
    ],
    [
        "\uD835\uDD52",
        "a"
    ],
    [
        "\uD835\uDD53",
        "b"
    ],
    [
        "\uD835\uDD54",
        "c"
    ],
    [
        "\uD835\uDD55",
        "d"
    ],
    [
        "\uD835\uDD56",
        "e"
    ],
    [
        "\uD835\uDD57",
        "f"
    ],
    [
        "\uD835\uDD58",
        "g"
    ],
    [
        "\uD835\uDD59",
        "h"
    ],
    [
        "\uD835\uDD5A",
        "i"
    ],
    [
        "\uD835\uDD5B",
        "j"
    ],
    [
        "\uD835\uDD5C",
        "k"
    ],
    [
        "\uD835\uDD5D",
        "l"
    ],
    [
        "\uD835\uDD5E",
        "m"
    ],
    [
        "\uD835\uDD5F",
        "n"
    ],
    [
        "\uD835\uDD60",
        "o"
    ],
    [
        "\uD835\uDD61",
        "p"
    ],
    [
        "\uD835\uDD62",
        "q"
    ],
    [
        "\uD835\uDD63",
        "r"
    ],
    [
        "\uD835\uDD64",
        "s"
    ],
    [
        "\uD835\uDD65",
        "t"
    ],
    [
        "\uD835\uDD66",
        "u"
    ],
    [
        "\uD835\uDD67",
        "v"
    ],
    [
        "\uD835\uDD68",
        "w"
    ],
    [
        "\uD835\uDD69",
        "x"
    ],
    [
        "\uD835\uDD6A",
        "y"
    ],
    [
        "\uD835\uDD6B",
        "z"
    ],
    [
        "\uD835\uDD6C",
        "A"
    ],
    [
        "\uD835\uDD6D",
        "B"
    ],
    [
        "\uD835\uDD6E",
        "C"
    ],
    [
        "\uD835\uDD6F",
        "D"
    ],
    [
        "\uD835\uDD70",
        "E"
    ],
    [
        "\uD835\uDD71",
        "F"
    ],
    [
        "\uD835\uDD72",
        "G"
    ],
    [
        "\uD835\uDD73",
        "H"
    ],
    [
        "\uD835\uDD74",
        "I"
    ],
    [
        "\uD835\uDD75",
        "J"
    ],
    [
        "\uD835\uDD76",
        "K"
    ],
    [
        "\uD835\uDD77",
        "L"
    ],
    [
        "\uD835\uDD78",
        "M"
    ],
    [
        "\uD835\uDD79",
        "N"
    ],
    [
        "\uD835\uDD7A",
        "O"
    ],
    [
        "\uD835\uDD7B",
        "P"
    ],
    [
        "\uD835\uDD7C",
        "Q"
    ],
    [
        "\uD835\uDD7D",
        "R"
    ],
    [
        "\uD835\uDD7E",
        "S"
    ],
    [
        "\uD835\uDD7F",
        "T"
    ],
    [
        "\uD835\uDD80",
        "U"
    ],
    [
        "\uD835\uDD81",
        "V"
    ],
    [
        "\uD835\uDD82",
        "W"
    ],
    [
        "\uD835\uDD83",
        "X"
    ],
    [
        "\uD835\uDD84",
        "Y"
    ],
    [
        "\uD835\uDD85",
        "Z"
    ],
    [
        "\uD835\uDD86",
        "a"
    ],
    [
        "\uD835\uDD87",
        "b"
    ],
    [
        "\uD835\uDD88",
        "c"
    ],
    [
        "\uD835\uDD89",
        "d"
    ],
    [
        "\uD835\uDD8A",
        "e"
    ],
    [
        "\uD835\uDD8B",
        "f"
    ],
    [
        "\uD835\uDD8C",
        "g"
    ],
    [
        "\uD835\uDD8D",
        "h"
    ],
    [
        "\uD835\uDD8E",
        "i"
    ],
    [
        "\uD835\uDD8F",
        "j"
    ],
    [
        "\uD835\uDD90",
        "k"
    ],
    [
        "\uD835\uDD91",
        "l"
    ],
    [
        "\uD835\uDD92",
        "m"
    ],
    [
        "\uD835\uDD93",
        "n"
    ],
    [
        "\uD835\uDD94",
        "o"
    ],
    [
        "\uD835\uDD95",
        "p"
    ],
    [
        "\uD835\uDD96",
        "q"
    ],
    [
        "\uD835\uDD97",
        "r"
    ],
    [
        "\uD835\uDD98",
        "s"
    ],
    [
        "\uD835\uDD99",
        "t"
    ],
    [
        "\uD835\uDD9A",
        "u"
    ],
    [
        "\uD835\uDD9B",
        "v"
    ],
    [
        "\uD835\uDD9C",
        "w"
    ],
    [
        "\uD835\uDD9D",
        "x"
    ],
    [
        "\uD835\uDD9E",
        "y"
    ],
    [
        "\uD835\uDD9F",
        "z"
    ],
    [
        "\uD835\uDDA0",
        "A"
    ],
    [
        "\uD835\uDDA1",
        "B"
    ],
    [
        "\uD835\uDDA2",
        "C"
    ],
    [
        "\uD835\uDDA3",
        "D"
    ],
    [
        "\uD835\uDDA4",
        "E"
    ],
    [
        "\uD835\uDDA5",
        "F"
    ],
    [
        "\uD835\uDDA6",
        "G"
    ],
    [
        "\uD835\uDDA7",
        "H"
    ],
    [
        "\uD835\uDDA8",
        "I"
    ],
    [
        "\uD835\uDDA9",
        "J"
    ],
    [
        "\uD835\uDDAA",
        "K"
    ],
    [
        "\uD835\uDDAB",
        "L"
    ],
    [
        "\uD835\uDDAC",
        "M"
    ],
    [
        "\uD835\uDDAD",
        "N"
    ],
    [
        "\uD835\uDDAE",
        "O"
    ],
    [
        "\uD835\uDDAF",
        "P"
    ],
    [
        "\uD835\uDDB0",
        "Q"
    ],
    [
        "\uD835\uDDB1",
        "R"
    ],
    [
        "\uD835\uDDB2",
        "S"
    ],
    [
        "\uD835\uDDB3",
        "T"
    ],
    [
        "\uD835\uDDB4",
        "U"
    ],
    [
        "\uD835\uDDB5",
        "V"
    ],
    [
        "\uD835\uDDB6",
        "W"
    ],
    [
        "\uD835\uDDB7",
        "X"
    ],
    [
        "\uD835\uDDB8",
        "Y"
    ],
    [
        "\uD835\uDDB9",
        "Z"
    ],
    [
        "\uD835\uDDBA",
        "a"
    ],
    [
        "\uD835\uDDBB",
        "b"
    ],
    [
        "\uD835\uDDBC",
        "c"
    ],
    [
        "\uD835\uDDBD",
        "d"
    ],
    [
        "\uD835\uDDBE",
        "e"
    ],
    [
        "\uD835\uDDBF",
        "f"
    ],
    [
        "\uD835\uDDC0",
        "g"
    ],
    [
        "\uD835\uDDC1",
        "h"
    ],
    [
        "\uD835\uDDC2",
        "i"
    ],
    [
        "\uD835\uDDC3",
        "j"
    ],
    [
        "\uD835\uDDC4",
        "k"
    ],
    [
        "\uD835\uDDC5",
        "l"
    ],
    [
        "\uD835\uDDC6",
        "m"
    ],
    [
        "\uD835\uDDC7",
        "n"
    ],
    [
        "\uD835\uDDC8",
        "o"
    ],
    [
        "\uD835\uDDC9",
        "p"
    ],
    [
        "\uD835\uDDCA",
        "q"
    ],
    [
        "\uD835\uDDCB",
        "r"
    ],
    [
        "\uD835\uDDCC",
        "s"
    ],
    [
        "\uD835\uDDCD",
        "t"
    ],
    [
        "\uD835\uDDCE",
        "u"
    ],
    [
        "\uD835\uDDCF",
        "v"
    ],
    [
        "\uD835\uDDD0",
        "w"
    ],
    [
        "\uD835\uDDD1",
        "x"
    ],
    [
        "\uD835\uDDD2",
        "y"
    ],
    [
        "\uD835\uDDD3",
        "z"
    ],
    [
        "\uD835\uDDD4",
        "A"
    ],
    [
        "\uD835\uDDD5",
        "B"
    ],
    [
        "\uD835\uDDD6",
        "C"
    ],
    [
        "\uD835\uDDD7",
        "D"
    ],
    [
        "\uD835\uDDD8",
        "E"
    ],
    [
        "\uD835\uDDD9",
        "F"
    ],
    [
        "\uD835\uDDDA",
        "G"
    ],
    [
        "\uD835\uDDDB",
        "H"
    ],
    [
        "\uD835\uDDDC",
        "I"
    ],
    [
        "\uD835\uDDDD",
        "J"
    ],
    [
        "\uD835\uDDDE",
        "K"
    ],
    [
        "\uD835\uDDDF",
        "L"
    ],
    [
        "\uD835\uDDE0",
        "M"
    ],
    [
        "\uD835\uDDE1",
        "N"
    ],
    [
        "\uD835\uDDE2",
        "O"
    ],
    [
        "\uD835\uDDE3",
        "P"
    ],
    [
        "\uD835\uDDE4",
        "Q"
    ],
    [
        "\uD835\uDDE5",
        "R"
    ],
    [
        "\uD835\uDDE6",
        "S"
    ],
    [
        "\uD835\uDDE7",
        "T"
    ],
    [
        "\uD835\uDDE8",
        "U"
    ],
    [
        "\uD835\uDDE9",
        "V"
    ],
    [
        "\uD835\uDDEA",
        "W"
    ],
    [
        "\uD835\uDDEB",
        "X"
    ],
    [
        "\uD835\uDDEC",
        "Y"
    ],
    [
        "\uD835\uDDED",
        "Z"
    ],
    [
        "\uD835\uDDEE",
        "a"
    ],
    [
        "\uD835\uDDEF",
        "b"
    ],
    [
        "\uD835\uDDF0",
        "c"
    ],
    [
        "\uD835\uDDF1",
        "d"
    ],
    [
        "\uD835\uDDF2",
        "e"
    ],
    [
        "\uD835\uDDF3",
        "f"
    ],
    [
        "\uD835\uDDF4",
        "g"
    ],
    [
        "\uD835\uDDF5",
        "h"
    ],
    [
        "\uD835\uDDF6",
        "i"
    ],
    [
        "\uD835\uDDF7",
        "j"
    ],
    [
        "\uD835\uDDF8",
        "k"
    ],
    [
        "\uD835\uDDF9",
        "l"
    ],
    [
        "\uD835\uDDFA",
        "m"
    ],
    [
        "\uD835\uDDFB",
        "n"
    ],
    [
        "\uD835\uDDFC",
        "o"
    ],
    [
        "\uD835\uDDFD",
        "p"
    ],
    [
        "\uD835\uDDFE",
        "q"
    ],
    [
        "\uD835\uDDFF",
        "r"
    ],
    [
        "\uD835\uDE00",
        "s"
    ],
    [
        "\uD835\uDE01",
        "t"
    ],
    [
        "\uD835\uDE02",
        "u"
    ],
    [
        "\uD835\uDE03",
        "v"
    ],
    [
        "\uD835\uDE04",
        "w"
    ],
    [
        "\uD835\uDE05",
        "x"
    ],
    [
        "\uD835\uDE06",
        "y"
    ],
    [
        "\uD835\uDE07",
        "z"
    ],
    [
        "\uD835\uDE08",
        "A"
    ],
    [
        "\uD835\uDE09",
        "B"
    ],
    [
        "\uD835\uDE0A",
        "C"
    ],
    [
        "\uD835\uDE0B",
        "D"
    ],
    [
        "\uD835\uDE0C",
        "E"
    ],
    [
        "\uD835\uDE0D",
        "F"
    ],
    [
        "\uD835\uDE0E",
        "G"
    ],
    [
        "\uD835\uDE0F",
        "H"
    ],
    [
        "\uD835\uDE10",
        "I"
    ],
    [
        "\uD835\uDE11",
        "J"
    ],
    [
        "\uD835\uDE12",
        "K"
    ],
    [
        "\uD835\uDE13",
        "L"
    ],
    [
        "\uD835\uDE14",
        "M"
    ],
    [
        "\uD835\uDE15",
        "N"
    ],
    [
        "\uD835\uDE16",
        "O"
    ],
    [
        "\uD835\uDE17",
        "P"
    ],
    [
        "\uD835\uDE18",
        "Q"
    ],
    [
        "\uD835\uDE19",
        "R"
    ],
    [
        "\uD835\uDE1A",
        "S"
    ],
    [
        "\uD835\uDE1B",
        "T"
    ],
    [
        "\uD835\uDE1C",
        "U"
    ],
    [
        "\uD835\uDE1D",
        "V"
    ],
    [
        "\uD835\uDE1E",
        "W"
    ],
    [
        "\uD835\uDE1F",
        "X"
    ],
    [
        "\uD835\uDE20",
        "Y"
    ],
    [
        "\uD835\uDE21",
        "Z"
    ],
    [
        "\uD835\uDE22",
        "a"
    ],
    [
        "\uD835\uDE23",
        "b"
    ],
    [
        "\uD835\uDE24",
        "c"
    ],
    [
        "\uD835\uDE25",
        "d"
    ],
    [
        "\uD835\uDE26",
        "e"
    ],
    [
        "\uD835\uDE27",
        "f"
    ],
    [
        "\uD835\uDE28",
        "g"
    ],
    [
        "\uD835\uDE29",
        "h"
    ],
    [
        "\uD835\uDE2A",
        "i"
    ],
    [
        "\uD835\uDE2B",
        "j"
    ],
    [
        "\uD835\uDE2C",
        "k"
    ],
    [
        "\uD835\uDE2D",
        "l"
    ],
    [
        "\uD835\uDE2E",
        "m"
    ],
    [
        "\uD835\uDE2F",
        "n"
    ],
    [
        "\uD835\uDE30",
        "o"
    ],
    [
        "\uD835\uDE31",
        "p"
    ],
    [
        "\uD835\uDE32",
        "q"
    ],
    [
        "\uD835\uDE33",
        "r"
    ],
    [
        "\uD835\uDE34",
        "s"
    ],
    [
        "\uD835\uDE35",
        "t"
    ],
    [
        "\uD835\uDE36",
        "u"
    ],
    [
        "\uD835\uDE37",
        "v"
    ],
    [
        "\uD835\uDE38",
        "w"
    ],
    [
        "\uD835\uDE39",
        "x"
    ],
    [
        "\uD835\uDE3A",
        "y"
    ],
    [
        "\uD835\uDE3B",
        "z"
    ],
    [
        "\uD835\uDE3C",
        "A"
    ],
    [
        "\uD835\uDE3D",
        "B"
    ],
    [
        "\uD835\uDE3E",
        "C"
    ],
    [
        "\uD835\uDE3F",
        "D"
    ],
    [
        "\uD835\uDE40",
        "E"
    ],
    [
        "\uD835\uDE41",
        "F"
    ],
    [
        "\uD835\uDE42",
        "G"
    ],
    [
        "\uD835\uDE43",
        "H"
    ],
    [
        "\uD835\uDE44",
        "I"
    ],
    [
        "\uD835\uDE45",
        "J"
    ],
    [
        "\uD835\uDE46",
        "K"
    ],
    [
        "\uD835\uDE47",
        "L"
    ],
    [
        "\uD835\uDE48",
        "M"
    ],
    [
        "\uD835\uDE49",
        "N"
    ],
    [
        "\uD835\uDE4A",
        "O"
    ],
    [
        "\uD835\uDE4B",
        "P"
    ],
    [
        "\uD835\uDE4C",
        "Q"
    ],
    [
        "\uD835\uDE4D",
        "R"
    ],
    [
        "\uD835\uDE4E",
        "S"
    ],
    [
        "\uD835\uDE4F",
        "T"
    ],
    [
        "\uD835\uDE50",
        "U"
    ],
    [
        "\uD835\uDE51",
        "V"
    ],
    [
        "\uD835\uDE52",
        "W"
    ],
    [
        "\uD835\uDE53",
        "X"
    ],
    [
        "\uD835\uDE54",
        "Y"
    ],
    [
        "\uD835\uDE55",
        "Z"
    ],
    [
        "\uD835\uDE56",
        "a"
    ],
    [
        "\uD835\uDE57",
        "b"
    ],
    [
        "\uD835\uDE58",
        "c"
    ],
    [
        "\uD835\uDE59",
        "d"
    ],
    [
        "\uD835\uDE5A",
        "e"
    ],
    [
        "\uD835\uDE5B",
        "f"
    ],
    [
        "\uD835\uDE5C",
        "g"
    ],
    [
        "\uD835\uDE5D",
        "h"
    ],
    [
        "\uD835\uDE5E",
        "i"
    ],
    [
        "\uD835\uDE5F",
        "j"
    ],
    [
        "\uD835\uDE60",
        "k"
    ],
    [
        "\uD835\uDE61",
        "l"
    ],
    [
        "\uD835\uDE62",
        "m"
    ],
    [
        "\uD835\uDE63",
        "n"
    ],
    [
        "\uD835\uDE64",
        "o"
    ],
    [
        "\uD835\uDE65",
        "p"
    ],
    [
        "\uD835\uDE66",
        "q"
    ],
    [
        "\uD835\uDE67",
        "r"
    ],
    [
        "\uD835\uDE68",
        "s"
    ],
    [
        "\uD835\uDE69",
        "t"
    ],
    [
        "\uD835\uDE6A",
        "u"
    ],
    [
        "\uD835\uDE6B",
        "v"
    ],
    [
        "\uD835\uDE6C",
        "w"
    ],
    [
        "\uD835\uDE6D",
        "x"
    ],
    [
        "\uD835\uDE6E",
        "y"
    ],
    [
        "\uD835\uDE6F",
        "z"
    ],
    [
        "\uD835\uDE70",
        "A"
    ],
    [
        "\uD835\uDE71",
        "B"
    ],
    [
        "\uD835\uDE72",
        "C"
    ],
    [
        "\uD835\uDE73",
        "D"
    ],
    [
        "\uD835\uDE74",
        "E"
    ],
    [
        "\uD835\uDE75",
        "F"
    ],
    [
        "\uD835\uDE76",
        "G"
    ],
    [
        "\uD835\uDE77",
        "H"
    ],
    [
        "\uD835\uDE78",
        "I"
    ],
    [
        "\uD835\uDE79",
        "J"
    ],
    [
        "\uD835\uDE7A",
        "K"
    ],
    [
        "\uD835\uDE7B",
        "L"
    ],
    [
        "\uD835\uDE7C",
        "M"
    ],
    [
        "\uD835\uDE7D",
        "N"
    ],
    [
        "\uD835\uDE7E",
        "O"
    ],
    [
        "\uD835\uDE7F",
        "P"
    ],
    [
        "\uD835\uDE80",
        "Q"
    ],
    [
        "\uD835\uDE81",
        "R"
    ],
    [
        "\uD835\uDE82",
        "S"
    ],
    [
        "\uD835\uDE83",
        "T"
    ],
    [
        "\uD835\uDE84",
        "U"
    ],
    [
        "\uD835\uDE85",
        "V"
    ],
    [
        "\uD835\uDE86",
        "W"
    ],
    [
        "\uD835\uDE87",
        "X"
    ],
    [
        "\uD835\uDE88",
        "Y"
    ],
    [
        "\uD835\uDE89",
        "Z"
    ],
    [
        "\uD835\uDE8A",
        "a"
    ],
    [
        "\uD835\uDE8B",
        "b"
    ],
    [
        "\uD835\uDE8C",
        "c"
    ],
    [
        "\uD835\uDE8D",
        "d"
    ],
    [
        "\uD835\uDE8E",
        "e"
    ],
    [
        "\uD835\uDE8F",
        "f"
    ],
    [
        "\uD835\uDE90",
        "g"
    ],
    [
        "\uD835\uDE91",
        "h"
    ],
    [
        "\uD835\uDE92",
        "i"
    ],
    [
        "\uD835\uDE93",
        "j"
    ],
    [
        "\uD835\uDE94",
        "k"
    ],
    [
        "\uD835\uDE95",
        "l"
    ],
    [
        "\uD835\uDE96",
        "m"
    ],
    [
        "\uD835\uDE97",
        "n"
    ],
    [
        "\uD835\uDE98",
        "o"
    ],
    [
        "\uD835\uDE99",
        "p"
    ],
    [
        "\uD835\uDE9A",
        "q"
    ],
    [
        "\uD835\uDE9B",
        "r"
    ],
    [
        "\uD835\uDE9C",
        "s"
    ],
    [
        "\uD835\uDE9D",
        "t"
    ],
    [
        "\uD835\uDE9E",
        "u"
    ],
    [
        "\uD835\uDE9F",
        "v"
    ],
    [
        "\uD835\uDEA0",
        "w"
    ],
    [
        "\uD835\uDEA1",
        "x"
    ],
    [
        "\uD835\uDEA2",
        "y"
    ],
    [
        "\uD835\uDEA3",
        "z"
    ],
    // Dotless letters
    [
        "\uD835\uDEA4",
        "l"
    ],
    [
        "\uD835\uDEA5",
        "j"
    ],
    // Greek
    [
        "\uD835\uDEE2",
        "A"
    ],
    [
        "\uD835\uDEE3",
        "B"
    ],
    [
        "\uD835\uDEE4",
        "G"
    ],
    [
        "\uD835\uDEE5",
        "D"
    ],
    [
        "\uD835\uDEE6",
        "E"
    ],
    [
        "\uD835\uDEE7",
        "Z"
    ],
    [
        "\uD835\uDEE8",
        "I"
    ],
    [
        "\uD835\uDEE9",
        "TH"
    ],
    [
        "\uD835\uDEEA",
        "I"
    ],
    [
        "\uD835\uDEEB",
        "K"
    ],
    [
        "\uD835\uDEEC",
        "L"
    ],
    [
        "\uD835\uDEED",
        "M"
    ],
    [
        "\uD835\uDEEE",
        "N"
    ],
    [
        "\uD835\uDEEF",
        "KS"
    ],
    [
        "\uD835\uDEF0",
        "O"
    ],
    [
        "\uD835\uDEF1",
        "P"
    ],
    [
        "\uD835\uDEF2",
        "R"
    ],
    [
        "\uD835\uDEF3",
        "TH"
    ],
    [
        "\uD835\uDEF4",
        "S"
    ],
    [
        "\uD835\uDEF5",
        "T"
    ],
    [
        "\uD835\uDEF6",
        "Y"
    ],
    [
        "\uD835\uDEF7",
        "F"
    ],
    [
        "\uD835\uDEF8",
        "x"
    ],
    [
        "\uD835\uDEF9",
        "PS"
    ],
    [
        "\uD835\uDEFA",
        "O"
    ],
    [
        "\uD835\uDEFB",
        "D"
    ],
    [
        "\uD835\uDEFC",
        "a"
    ],
    [
        "\uD835\uDEFD",
        "b"
    ],
    [
        "\uD835\uDEFE",
        "g"
    ],
    [
        "\uD835\uDEFF",
        "d"
    ],
    [
        "\uD835\uDF00",
        "e"
    ],
    [
        "\uD835\uDF01",
        "z"
    ],
    [
        "\uD835\uDF02",
        "i"
    ],
    [
        "\uD835\uDF03",
        "th"
    ],
    [
        "\uD835\uDF04",
        "i"
    ],
    [
        "\uD835\uDF05",
        "k"
    ],
    [
        "\uD835\uDF06",
        "l"
    ],
    [
        "\uD835\uDF07",
        "m"
    ],
    [
        "\uD835\uDF08",
        "n"
    ],
    [
        "\uD835\uDF09",
        "ks"
    ],
    [
        "\uD835\uDF0A",
        "o"
    ],
    [
        "\uD835\uDF0B",
        "p"
    ],
    [
        "\uD835\uDF0C",
        "r"
    ],
    [
        "\uD835\uDF0D",
        "s"
    ],
    [
        "\uD835\uDF0E",
        "s"
    ],
    [
        "\uD835\uDF0F",
        "t"
    ],
    [
        "\uD835\uDF10",
        "y"
    ],
    [
        "\uD835\uDF11",
        "f"
    ],
    [
        "\uD835\uDF12",
        "x"
    ],
    [
        "\uD835\uDF13",
        "ps"
    ],
    [
        "\uD835\uDF14",
        "o"
    ],
    [
        "\uD835\uDF15",
        "d"
    ],
    [
        "\uD835\uDF16",
        "E"
    ],
    [
        "\uD835\uDF17",
        "TH"
    ],
    [
        "\uD835\uDF18",
        "K"
    ],
    [
        "\uD835\uDF19",
        "f"
    ],
    [
        "\uD835\uDF1A",
        "r"
    ],
    [
        "\uD835\uDF1B",
        "p"
    ],
    [
        "\uD835\uDF1C",
        "A"
    ],
    [
        "\uD835\uDF1D",
        "V"
    ],
    [
        "\uD835\uDF1E",
        "G"
    ],
    [
        "\uD835\uDF1F",
        "D"
    ],
    [
        "\uD835\uDF20",
        "E"
    ],
    [
        "\uD835\uDF21",
        "Z"
    ],
    [
        "\uD835\uDF22",
        "I"
    ],
    [
        "\uD835\uDF23",
        "TH"
    ],
    [
        "\uD835\uDF24",
        "I"
    ],
    [
        "\uD835\uDF25",
        "K"
    ],
    [
        "\uD835\uDF26",
        "L"
    ],
    [
        "\uD835\uDF27",
        "M"
    ],
    [
        "\uD835\uDF28",
        "N"
    ],
    [
        "\uD835\uDF29",
        "KS"
    ],
    [
        "\uD835\uDF2A",
        "O"
    ],
    [
        "\uD835\uDF2B",
        "P"
    ],
    [
        "\uD835\uDF2C",
        "S"
    ],
    [
        "\uD835\uDF2D",
        "TH"
    ],
    [
        "\uD835\uDF2E",
        "S"
    ],
    [
        "\uD835\uDF2F",
        "T"
    ],
    [
        "\uD835\uDF30",
        "Y"
    ],
    [
        "\uD835\uDF31",
        "F"
    ],
    [
        "\uD835\uDF32",
        "X"
    ],
    [
        "\uD835\uDF33",
        "PS"
    ],
    [
        "\uD835\uDF34",
        "O"
    ],
    [
        "\uD835\uDF35",
        "D"
    ],
    [
        "\uD835\uDF36",
        "a"
    ],
    [
        "\uD835\uDF37",
        "v"
    ],
    [
        "\uD835\uDF38",
        "g"
    ],
    [
        "\uD835\uDF39",
        "d"
    ],
    [
        "\uD835\uDF3A",
        "e"
    ],
    [
        "\uD835\uDF3B",
        "z"
    ],
    [
        "\uD835\uDF3C",
        "i"
    ],
    [
        "\uD835\uDF3D",
        "th"
    ],
    [
        "\uD835\uDF3E",
        "i"
    ],
    [
        "\uD835\uDF3F",
        "k"
    ],
    [
        "\uD835\uDF40",
        "l"
    ],
    [
        "\uD835\uDF41",
        "m"
    ],
    [
        "\uD835\uDF42",
        "n"
    ],
    [
        "\uD835\uDF43",
        "ks"
    ],
    [
        "\uD835\uDF44",
        "o"
    ],
    [
        "\uD835\uDF45",
        "p"
    ],
    [
        "\uD835\uDF46",
        "r"
    ],
    [
        "\uD835\uDF47",
        "s"
    ],
    [
        "\uD835\uDF48",
        "s"
    ],
    [
        "\uD835\uDF49",
        "t"
    ],
    [
        "\uD835\uDF4A",
        "y"
    ],
    [
        "\uD835\uDF4B",
        "f"
    ],
    [
        "\uD835\uDF4C",
        "x"
    ],
    [
        "\uD835\uDF4D",
        "ps"
    ],
    [
        "\uD835\uDF4E",
        "o"
    ],
    [
        "\uD835\uDF4F",
        "a"
    ],
    [
        "\uD835\uDF50",
        "e"
    ],
    [
        "\uD835\uDF51",
        "i"
    ],
    [
        "\uD835\uDF52",
        "k"
    ],
    [
        "\uD835\uDF53",
        "f"
    ],
    [
        "\uD835\uDF54",
        "r"
    ],
    [
        "\uD835\uDF55",
        "p"
    ],
    [
        "\uD835\uDF56",
        "A"
    ],
    [
        "\uD835\uDF57",
        "B"
    ],
    [
        "\uD835\uDF58",
        "G"
    ],
    [
        "\uD835\uDF59",
        "D"
    ],
    [
        "\uD835\uDF5A",
        "E"
    ],
    [
        "\uD835\uDF5B",
        "Z"
    ],
    [
        "\uD835\uDF5C",
        "I"
    ],
    [
        "\uD835\uDF5D",
        "TH"
    ],
    [
        "\uD835\uDF5E",
        "I"
    ],
    [
        "\uD835\uDF5F",
        "K"
    ],
    [
        "\uD835\uDF60",
        "L"
    ],
    [
        "\uD835\uDF61",
        "M"
    ],
    [
        "\uD835\uDF62",
        "N"
    ],
    [
        "\uD835\uDF63",
        "KS"
    ],
    [
        "\uD835\uDF64",
        "O"
    ],
    [
        "\uD835\uDF65",
        "P"
    ],
    [
        "\uD835\uDF66",
        "R"
    ],
    [
        "\uD835\uDF67",
        "TH"
    ],
    [
        "\uD835\uDF68",
        "S"
    ],
    [
        "\uD835\uDF69",
        "T"
    ],
    [
        "\uD835\uDF6A",
        "Y"
    ],
    [
        "\uD835\uDF6B",
        "F"
    ],
    [
        "\uD835\uDF6C",
        "X"
    ],
    [
        "\uD835\uDF6D",
        "PS"
    ],
    [
        "\uD835\uDF6E",
        "O"
    ],
    [
        "\uD835\uDF6F",
        "D"
    ],
    [
        "\uD835\uDF70",
        "a"
    ],
    [
        "\uD835\uDF71",
        "v"
    ],
    [
        "\uD835\uDF72",
        "g"
    ],
    [
        "\uD835\uDF73",
        "d"
    ],
    [
        "\uD835\uDF74",
        "e"
    ],
    [
        "\uD835\uDF75",
        "z"
    ],
    [
        "\uD835\uDF76",
        "i"
    ],
    [
        "\uD835\uDF77",
        "th"
    ],
    [
        "\uD835\uDF78",
        "i"
    ],
    [
        "\uD835\uDF79",
        "k"
    ],
    [
        "\uD835\uDF7A",
        "l"
    ],
    [
        "\uD835\uDF7B",
        "m"
    ],
    [
        "\uD835\uDF7C",
        "n"
    ],
    [
        "\uD835\uDF7D",
        "ks"
    ],
    [
        "\uD835\uDF7E",
        "o"
    ],
    [
        "\uD835\uDF7F",
        "p"
    ],
    [
        "\uD835\uDF80",
        "r"
    ],
    [
        "\uD835\uDF81",
        "s"
    ],
    [
        "\uD835\uDF82",
        "s"
    ],
    [
        "\uD835\uDF83",
        "t"
    ],
    [
        "\uD835\uDF84",
        "y"
    ],
    [
        "\uD835\uDF85",
        "f"
    ],
    [
        "\uD835\uDF86",
        "x"
    ],
    [
        "\uD835\uDF87",
        "ps"
    ],
    [
        "\uD835\uDF88",
        "o"
    ],
    [
        "\uD835\uDF89",
        "a"
    ],
    [
        "\uD835\uDF8A",
        "e"
    ],
    [
        "\uD835\uDF8B",
        "i"
    ],
    [
        "\uD835\uDF8C",
        "k"
    ],
    [
        "\uD835\uDF8D",
        "f"
    ],
    [
        "\uD835\uDF8E",
        "r"
    ],
    [
        "\uD835\uDF8F",
        "p"
    ],
    [
        "\uD835\uDF90",
        "A"
    ],
    [
        "\uD835\uDF91",
        "V"
    ],
    [
        "\uD835\uDF92",
        "G"
    ],
    [
        "\uD835\uDF93",
        "D"
    ],
    [
        "\uD835\uDF94",
        "E"
    ],
    [
        "\uD835\uDF95",
        "Z"
    ],
    [
        "\uD835\uDF96",
        "I"
    ],
    [
        "\uD835\uDF97",
        "TH"
    ],
    [
        "\uD835\uDF98",
        "I"
    ],
    [
        "\uD835\uDF99",
        "K"
    ],
    [
        "\uD835\uDF9A",
        "L"
    ],
    [
        "\uD835\uDF9B",
        "M"
    ],
    [
        "\uD835\uDF9C",
        "N"
    ],
    [
        "\uD835\uDF9D",
        "KS"
    ],
    [
        "\uD835\uDF9E",
        "O"
    ],
    [
        "\uD835\uDF9F",
        "P"
    ],
    [
        "\uD835\uDFA0",
        "S"
    ],
    [
        "\uD835\uDFA1",
        "TH"
    ],
    [
        "\uD835\uDFA2",
        "S"
    ],
    [
        "\uD835\uDFA3",
        "T"
    ],
    [
        "\uD835\uDFA4",
        "Y"
    ],
    [
        "\uD835\uDFA5",
        "F"
    ],
    [
        "\uD835\uDFA6",
        "X"
    ],
    [
        "\uD835\uDFA7",
        "PS"
    ],
    [
        "\uD835\uDFA8",
        "O"
    ],
    [
        "\uD835\uDFA9",
        "D"
    ],
    [
        "\uD835\uDFAA",
        "av"
    ],
    [
        "\uD835\uDFAB",
        "g"
    ],
    [
        "\uD835\uDFAC",
        "d"
    ],
    [
        "\uD835\uDFAD",
        "e"
    ],
    [
        "\uD835\uDFAE",
        "z"
    ],
    [
        "\uD835\uDFAF",
        "i"
    ],
    [
        "\uD835\uDFB0",
        "i"
    ],
    [
        "\uD835\uDFB1",
        "th"
    ],
    [
        "\uD835\uDFB2",
        "i"
    ],
    [
        "\uD835\uDFB3",
        "k"
    ],
    [
        "\uD835\uDFB4",
        "l"
    ],
    [
        "\uD835\uDFB5",
        "m"
    ],
    [
        "\uD835\uDFB6",
        "n"
    ],
    [
        "\uD835\uDFB7",
        "ks"
    ],
    [
        "\uD835\uDFB8",
        "o"
    ],
    [
        "\uD835\uDFB9",
        "p"
    ],
    [
        "\uD835\uDFBA",
        "r"
    ],
    [
        "\uD835\uDFBB",
        "s"
    ],
    [
        "\uD835\uDFBC",
        "s"
    ],
    [
        "\uD835\uDFBD",
        "t"
    ],
    [
        "\uD835\uDFBE",
        "y"
    ],
    [
        "\uD835\uDFBF",
        "f"
    ],
    [
        "\uD835\uDFC0",
        "x"
    ],
    [
        "\uD835\uDFC1",
        "ps"
    ],
    [
        "\uD835\uDFC2",
        "o"
    ],
    [
        "\uD835\uDFC3",
        "a"
    ],
    [
        "\uD835\uDFC4",
        "e"
    ],
    [
        "\uD835\uDFC5",
        "i"
    ],
    [
        "\uD835\uDFC6",
        "k"
    ],
    [
        "\uD835\uDFC7",
        "f"
    ],
    [
        "\uD835\uDFC8",
        "r"
    ],
    [
        "\uD835\uDFC9",
        "p"
    ],
    [
        "\uD835\uDFCA",
        "F"
    ],
    [
        "\uD835\uDFCB",
        "f"
    ],
    [
        "⒜",
        "(a)"
    ],
    [
        "⒝",
        "(b)"
    ],
    [
        "⒞",
        "(c)"
    ],
    [
        "⒟",
        "(d)"
    ],
    [
        "⒠",
        "(e)"
    ],
    [
        "⒡",
        "(f)"
    ],
    [
        "⒢",
        "(g)"
    ],
    [
        "⒣",
        "(h)"
    ],
    [
        "⒤",
        "(i)"
    ],
    [
        "⒥",
        "(j)"
    ],
    [
        "⒦",
        "(k)"
    ],
    [
        "⒧",
        "(l)"
    ],
    [
        "⒨",
        "(m)"
    ],
    [
        "⒩",
        "(n)"
    ],
    [
        "⒪",
        "(o)"
    ],
    [
        "⒫",
        "(p)"
    ],
    [
        "⒬",
        "(q)"
    ],
    [
        "⒭",
        "(r)"
    ],
    [
        "⒮",
        "(s)"
    ],
    [
        "⒯",
        "(t)"
    ],
    [
        "⒰",
        "(u)"
    ],
    [
        "⒱",
        "(v)"
    ],
    [
        "⒲",
        "(w)"
    ],
    [
        "⒳",
        "(x)"
    ],
    [
        "⒴",
        "(y)"
    ],
    [
        "⒵",
        "(z)"
    ],
    [
        "Ⓐ",
        "(A)"
    ],
    [
        "Ⓑ",
        "(B)"
    ],
    [
        "Ⓒ",
        "(C)"
    ],
    [
        "Ⓓ",
        "(D)"
    ],
    [
        "Ⓔ",
        "(E)"
    ],
    [
        "Ⓕ",
        "(F)"
    ],
    [
        "Ⓖ",
        "(G)"
    ],
    [
        "Ⓗ",
        "(H)"
    ],
    [
        "Ⓘ",
        "(I)"
    ],
    [
        "Ⓙ",
        "(J)"
    ],
    [
        "Ⓚ",
        "(K)"
    ],
    [
        "Ⓛ",
        "(L)"
    ],
    [
        "Ⓝ",
        "(N)"
    ],
    [
        "Ⓞ",
        "(O)"
    ],
    [
        "Ⓟ",
        "(P)"
    ],
    [
        "Ⓠ",
        "(Q)"
    ],
    [
        "Ⓡ",
        "(R)"
    ],
    [
        "Ⓢ",
        "(S)"
    ],
    [
        "Ⓣ",
        "(T)"
    ],
    [
        "Ⓤ",
        "(U)"
    ],
    [
        "Ⓥ",
        "(V)"
    ],
    [
        "Ⓦ",
        "(W)"
    ],
    [
        "Ⓧ",
        "(X)"
    ],
    [
        "Ⓨ",
        "(Y)"
    ],
    [
        "Ⓩ",
        "(Z)"
    ],
    [
        "ⓐ",
        "(a)"
    ],
    [
        "ⓑ",
        "(b)"
    ],
    [
        "ⓒ",
        "(b)"
    ],
    [
        "ⓓ",
        "(c)"
    ],
    [
        "ⓔ",
        "(e)"
    ],
    [
        "ⓕ",
        "(f)"
    ],
    [
        "ⓖ",
        "(g)"
    ],
    [
        "ⓗ",
        "(h)"
    ],
    [
        "ⓘ",
        "(i)"
    ],
    [
        "ⓙ",
        "(j)"
    ],
    [
        "ⓚ",
        "(k)"
    ],
    [
        "ⓛ",
        "(l)"
    ],
    [
        "ⓜ",
        "(m)"
    ],
    [
        "ⓝ",
        "(n)"
    ],
    [
        "ⓞ",
        "(o)"
    ],
    [
        "ⓟ",
        "(p)"
    ],
    [
        "ⓠ",
        "(q)"
    ],
    [
        "ⓡ",
        "(r)"
    ],
    [
        "ⓢ",
        "(s)"
    ],
    [
        "ⓣ",
        "(t)"
    ],
    [
        "ⓤ",
        "(u)"
    ],
    [
        "ⓥ",
        "(v)"
    ],
    [
        "ⓦ",
        "(w)"
    ],
    [
        "ⓧ",
        "(x)"
    ],
    [
        "ⓨ",
        "(y)"
    ],
    [
        "ⓩ",
        "(z)"
    ],
    // Maltese
    [
        "Ċ",
        "C"
    ],
    [
        "ċ",
        "c"
    ],
    [
        "Ġ",
        "G"
    ],
    [
        "ġ",
        "g"
    ],
    [
        "Ħ",
        "H"
    ],
    [
        "ħ",
        "h"
    ],
    [
        "Ż",
        "Z"
    ],
    [
        "ż",
        "z"
    ],
    // Numbers
    [
        "\uD835\uDFCE",
        "0"
    ],
    [
        "\uD835\uDFCF",
        "1"
    ],
    [
        "\uD835\uDFD0",
        "2"
    ],
    [
        "\uD835\uDFD1",
        "3"
    ],
    [
        "\uD835\uDFD2",
        "4"
    ],
    [
        "\uD835\uDFD3",
        "5"
    ],
    [
        "\uD835\uDFD4",
        "6"
    ],
    [
        "\uD835\uDFD5",
        "7"
    ],
    [
        "\uD835\uDFD6",
        "8"
    ],
    [
        "\uD835\uDFD7",
        "9"
    ],
    [
        "\uD835\uDFD8",
        "0"
    ],
    [
        "\uD835\uDFD9",
        "1"
    ],
    [
        "\uD835\uDFDA",
        "2"
    ],
    [
        "\uD835\uDFDB",
        "3"
    ],
    [
        "\uD835\uDFDC",
        "4"
    ],
    [
        "\uD835\uDFDD",
        "5"
    ],
    [
        "\uD835\uDFDE",
        "6"
    ],
    [
        "\uD835\uDFDF",
        "7"
    ],
    [
        "\uD835\uDFE0",
        "8"
    ],
    [
        "\uD835\uDFE1",
        "9"
    ],
    [
        "\uD835\uDFE2",
        "0"
    ],
    [
        "\uD835\uDFE3",
        "1"
    ],
    [
        "\uD835\uDFE4",
        "2"
    ],
    [
        "\uD835\uDFE5",
        "3"
    ],
    [
        "\uD835\uDFE6",
        "4"
    ],
    [
        "\uD835\uDFE7",
        "5"
    ],
    [
        "\uD835\uDFE8",
        "6"
    ],
    [
        "\uD835\uDFE9",
        "7"
    ],
    [
        "\uD835\uDFEA",
        "8"
    ],
    [
        "\uD835\uDFEB",
        "9"
    ],
    [
        "\uD835\uDFEC",
        "0"
    ],
    [
        "\uD835\uDFED",
        "1"
    ],
    [
        "\uD835\uDFEE",
        "2"
    ],
    [
        "\uD835\uDFEF",
        "3"
    ],
    [
        "\uD835\uDFF0",
        "4"
    ],
    [
        "\uD835\uDFF1",
        "5"
    ],
    [
        "\uD835\uDFF2",
        "6"
    ],
    [
        "\uD835\uDFF3",
        "7"
    ],
    [
        "\uD835\uDFF4",
        "8"
    ],
    [
        "\uD835\uDFF5",
        "9"
    ],
    [
        "\uD835\uDFF6",
        "0"
    ],
    [
        "\uD835\uDFF7",
        "1"
    ],
    [
        "\uD835\uDFF8",
        "2"
    ],
    [
        "\uD835\uDFF9",
        "3"
    ],
    [
        "\uD835\uDFFA",
        "4"
    ],
    [
        "\uD835\uDFFB",
        "5"
    ],
    [
        "\uD835\uDFFC",
        "6"
    ],
    [
        "\uD835\uDFFD",
        "7"
    ],
    [
        "\uD835\uDFFE",
        "8"
    ],
    [
        "\uD835\uDFFF",
        "9"
    ],
    [
        "①",
        "1"
    ],
    [
        "②",
        "2"
    ],
    [
        "③",
        "3"
    ],
    [
        "④",
        "4"
    ],
    [
        "⑤",
        "5"
    ],
    [
        "⑥",
        "6"
    ],
    [
        "⑦",
        "7"
    ],
    [
        "⑧",
        "8"
    ],
    [
        "⑨",
        "9"
    ],
    [
        "⑩",
        "10"
    ],
    [
        "⑪",
        "11"
    ],
    [
        "⑫",
        "12"
    ],
    [
        "⑬",
        "13"
    ],
    [
        "⑭",
        "14"
    ],
    [
        "⑮",
        "15"
    ],
    [
        "⑯",
        "16"
    ],
    [
        "⑰",
        "17"
    ],
    [
        "⑱",
        "18"
    ],
    [
        "⑲",
        "19"
    ],
    [
        "⑳",
        "20"
    ],
    [
        "⑴",
        "1"
    ],
    [
        "⑵",
        "2"
    ],
    [
        "⑶",
        "3"
    ],
    [
        "⑷",
        "4"
    ],
    [
        "⑸",
        "5"
    ],
    [
        "⑹",
        "6"
    ],
    [
        "⑺",
        "7"
    ],
    [
        "⑻",
        "8"
    ],
    [
        "⑼",
        "9"
    ],
    [
        "⑽",
        "10"
    ],
    [
        "⑾",
        "11"
    ],
    [
        "⑿",
        "12"
    ],
    [
        "⒀",
        "13"
    ],
    [
        "⒁",
        "14"
    ],
    [
        "⒂",
        "15"
    ],
    [
        "⒃",
        "16"
    ],
    [
        "⒄",
        "17"
    ],
    [
        "⒅",
        "18"
    ],
    [
        "⒆",
        "19"
    ],
    [
        "⒇",
        "20"
    ],
    [
        "⒈",
        "1."
    ],
    [
        "⒉",
        "2."
    ],
    [
        "⒊",
        "3."
    ],
    [
        "⒋",
        "4."
    ],
    [
        "⒌",
        "5."
    ],
    [
        "⒍",
        "6."
    ],
    [
        "⒎",
        "7."
    ],
    [
        "⒏",
        "8."
    ],
    [
        "⒐",
        "9."
    ],
    [
        "⒑",
        "10."
    ],
    [
        "⒒",
        "11."
    ],
    [
        "⒓",
        "12."
    ],
    [
        "⒔",
        "13."
    ],
    [
        "⒕",
        "14."
    ],
    [
        "⒖",
        "15."
    ],
    [
        "⒗",
        "16."
    ],
    [
        "⒘",
        "17."
    ],
    [
        "⒙",
        "18."
    ],
    [
        "⒚",
        "19."
    ],
    [
        "⒛",
        "20."
    ],
    [
        "⓪",
        "0"
    ],
    [
        "⓫",
        "11"
    ],
    [
        "⓬",
        "12"
    ],
    [
        "⓭",
        "13"
    ],
    [
        "⓮",
        "14"
    ],
    [
        "⓯",
        "15"
    ],
    [
        "⓰",
        "16"
    ],
    [
        "⓱",
        "17"
    ],
    [
        "⓲",
        "18"
    ],
    [
        "⓳",
        "19"
    ],
    [
        "⓴",
        "20"
    ],
    [
        "⓵",
        "1"
    ],
    [
        "⓶",
        "2"
    ],
    [
        "⓷",
        "3"
    ],
    [
        "⓸",
        "4"
    ],
    [
        "⓹",
        "5"
    ],
    [
        "⓺",
        "6"
    ],
    [
        "⓻",
        "7"
    ],
    [
        "⓼",
        "8"
    ],
    [
        "⓽",
        "9"
    ],
    [
        "⓾",
        "10"
    ],
    [
        "⓿",
        "0"
    ],
    // Punctuation
    [
        "\uD83D\uDE70",
        "&"
    ],
    [
        "\uD83D\uDE71",
        "&"
    ],
    [
        "\uD83D\uDE72",
        "&"
    ],
    [
        "\uD83D\uDE73",
        "&"
    ],
    [
        "\uD83D\uDE74",
        "&"
    ],
    [
        "\uD83D\uDE75",
        "&"
    ],
    [
        "\uD83D\uDE76",
        '"'
    ],
    [
        "\uD83D\uDE77",
        '"'
    ],
    [
        "\uD83D\uDE78",
        '"'
    ],
    [
        "‽",
        "?!"
    ],
    [
        "\uD83D\uDE79",
        "?!"
    ],
    [
        "\uD83D\uDE7A",
        "?!"
    ],
    [
        "\uD83D\uDE7B",
        "?!"
    ],
    [
        "\uD83D\uDE7C",
        "/"
    ],
    [
        "\uD83D\uDE7D",
        "\\"
    ],
    // Alchemy
    [
        "\uD83D\uDF07",
        "AR"
    ],
    [
        "\uD83D\uDF08",
        "V"
    ],
    [
        "\uD83D\uDF09",
        "V"
    ],
    [
        "\uD83D\uDF06",
        "VR"
    ],
    [
        "\uD83D\uDF05",
        "VF"
    ],
    [
        "\uD83D\uDF29",
        "2"
    ],
    [
        "\uD83D\uDF2A",
        "5"
    ],
    [
        "\uD83D\uDF61",
        "f"
    ],
    [
        "\uD83D\uDF62",
        "W"
    ],
    [
        "\uD83D\uDF63",
        "U"
    ],
    [
        "\uD83D\uDF67",
        "V"
    ],
    [
        "\uD83D\uDF68",
        "T"
    ],
    [
        "\uD83D\uDF6A",
        "V"
    ],
    [
        "\uD83D\uDF6B",
        "MB"
    ],
    [
        "\uD83D\uDF6C",
        "VB"
    ],
    [
        "\uD83D\uDF72",
        "3B"
    ],
    [
        "\uD83D\uDF73",
        "3B"
    ],
    // Emojis
    [
        "\uD83D\uDCAF",
        "100"
    ],
    [
        "\uD83D\uDD19",
        "BACK"
    ],
    [
        "\uD83D\uDD1A",
        "END"
    ],
    [
        "\uD83D\uDD1B",
        "ON!"
    ],
    [
        "\uD83D\uDD1C",
        "SOON"
    ],
    [
        "\uD83D\uDD1D",
        "TOP"
    ],
    [
        "\uD83D\uDD1E",
        "18"
    ],
    [
        "\uD83D\uDD24",
        "abc"
    ],
    [
        "\uD83D\uDD20",
        "ABCD"
    ],
    [
        "\uD83D\uDD21",
        "abcd"
    ],
    [
        "\uD83D\uDD22",
        "1234"
    ],
    [
        "\uD83D\uDD23",
        "T&@%"
    ],
    [
        "#️⃣",
        "#"
    ],
    [
        "*️⃣",
        "*"
    ],
    [
        "0️⃣",
        "0"
    ],
    [
        "1️⃣",
        "1"
    ],
    [
        "2️⃣",
        "2"
    ],
    [
        "3️⃣",
        "3"
    ],
    [
        "4️⃣",
        "4"
    ],
    [
        "5️⃣",
        "5"
    ],
    [
        "6️⃣",
        "6"
    ],
    [
        "7️⃣",
        "7"
    ],
    [
        "8️⃣",
        "8"
    ],
    [
        "9️⃣",
        "9"
    ],
    [
        "\uD83D\uDD1F",
        "10"
    ],
    [
        "\uD83C\uDD70️",
        "A"
    ],
    [
        "\uD83C\uDD71️",
        "B"
    ],
    [
        "\uD83C\uDD8E",
        "AB"
    ],
    [
        "\uD83C\uDD91",
        "CL"
    ],
    [
        "\uD83C\uDD7E️",
        "O"
    ],
    [
        "\uD83C\uDD7F",
        "P"
    ],
    [
        "\uD83C\uDD98",
        "SOS"
    ],
    [
        "\uD83C\uDD72",
        "C"
    ],
    [
        "\uD83C\uDD73",
        "D"
    ],
    [
        "\uD83C\uDD74",
        "E"
    ],
    [
        "\uD83C\uDD75",
        "F"
    ],
    [
        "\uD83C\uDD76",
        "G"
    ],
    [
        "\uD83C\uDD77",
        "H"
    ],
    [
        "\uD83C\uDD78",
        "I"
    ],
    [
        "\uD83C\uDD79",
        "J"
    ],
    [
        "\uD83C\uDD7A",
        "K"
    ],
    [
        "\uD83C\uDD7B",
        "L"
    ],
    [
        "\uD83C\uDD7C",
        "M"
    ],
    [
        "\uD83C\uDD7D",
        "N"
    ],
    [
        "\uD83C\uDD80",
        "Q"
    ],
    [
        "\uD83C\uDD81",
        "R"
    ],
    [
        "\uD83C\uDD82",
        "S"
    ],
    [
        "\uD83C\uDD83",
        "T"
    ],
    [
        "\uD83C\uDD84",
        "U"
    ],
    [
        "\uD83C\uDD85",
        "V"
    ],
    [
        "\uD83C\uDD86",
        "W"
    ],
    [
        "\uD83C\uDD87",
        "X"
    ],
    [
        "\uD83C\uDD88",
        "Y"
    ],
    [
        "\uD83C\uDD89",
        "Z"
    ]
];
/* harmony default export */ const transliterate_replacements = (replacements);

;// CONCATENATED MODULE: ./node_modules/@sindresorhus/transliterate/index.js


const doCustomReplacements = (string, replacements)=>{
    for (const [key, value] of replacements){
        // TODO: Use `String#replaceAll()` when targeting Node.js 16.
        string = string.replace(new RegExp(escapeStringRegexp(key), "g"), value);
    }
    return string;
};
function transliterate(string, options) {
    if (typeof string !== "string") {
        throw new TypeError(`Expected a string, got \`${typeof string}\``);
    }
    options = {
        customReplacements: [],
        ...options
    };
    const customReplacements = new Map([
        ...transliterate_replacements,
        ...options.customReplacements
    ]);
    string = string.normalize();
    string = doCustomReplacements(string, customReplacements);
    string = string.normalize("NFD").replace(/\p{Diacritic}/gu, "").normalize();
    return string;
}

;// CONCATENATED MODULE: ./node_modules/@sindresorhus/slugify/overridable-replacements.js
const overridableReplacements = [
    [
        "&",
        " and "
    ],
    [
        "\uD83E\uDD84",
        " unicorn "
    ],
    [
        "♥",
        " love "
    ]
];
/* harmony default export */ const overridable_replacements = (overridableReplacements);

;// CONCATENATED MODULE: ./node_modules/@sindresorhus/slugify/index.js



const decamelize = (string)=>{
    return string// Separate capitalized words.
    .replace(/([A-Z]{2,})(\d+)/g, "$1 $2").replace(/([a-z\d]+)([A-Z]{2,})/g, "$1 $2").replace(/([a-z\d])([A-Z])/g, "$1 $2")// `[a-rt-z]` matches all lowercase characters except `s`.
    // This avoids matching plural acronyms like `APIs`.
    .replace(/([A-Z]+)([A-Z][a-rt-z\d]+)/g, "$1 $2");
};
const removeMootSeparators = (string, separator)=>{
    const escapedSeparator = escapeStringRegexp(separator);
    return string.replace(new RegExp(`${escapedSeparator}{2,}`, "g"), separator).replace(new RegExp(`^${escapedSeparator}|${escapedSeparator}$`, "g"), "");
};
const buildPatternSlug = (options)=>{
    let negationSetPattern = "a-z\\d";
    negationSetPattern += options.lowercase ? "" : "A-Z";
    if (options.preserveCharacters.length > 0) {
        for (const character of options.preserveCharacters){
            if (character === options.separator) {
                throw new Error(`The separator character \`${options.separator}\` cannot be included in preserved characters: ${options.preserveCharacters}`);
            }
            negationSetPattern += escapeStringRegexp(character);
        }
    }
    return new RegExp(`[^${negationSetPattern}]+`, "g");
};
function slugify(string, options) {
    if (typeof string !== "string") {
        throw new TypeError(`Expected a string, got \`${typeof string}\``);
    }
    options = {
        separator: "-",
        lowercase: true,
        decamelize: true,
        customReplacements: [],
        preserveLeadingUnderscore: false,
        preserveTrailingDash: false,
        preserveCharacters: [],
        ...options
    };
    const shouldPrependUnderscore = options.preserveLeadingUnderscore && string.startsWith("_");
    const shouldAppendDash = options.preserveTrailingDash && string.endsWith("-");
    const customReplacements = new Map([
        ...overridable_replacements,
        ...options.customReplacements
    ]);
    string = transliterate(string, {
        customReplacements
    });
    if (options.decamelize) {
        string = decamelize(string);
    }
    const patternSlug = buildPatternSlug(options);
    if (options.lowercase) {
        string = string.toLowerCase();
    }
    string = string.replace(patternSlug, options.separator);
    string = string.replace(/\\/g, "");
    // Detect contractions/possessives by looking for any word followed by a `-t`
    // or `-s` in isolation and then remove it.
    string = string.replace(/([a-zA-Z\d]+)-([ts])(-|$)/g, "$1$2$3");
    if (options.separator) {
        string = removeMootSeparators(string, options.separator);
    }
    if (shouldPrependUnderscore) {
        string = `_${string}`;
    }
    if (shouldAppendDash) {
        string = `${string}-`;
    }
    return string;
}
function slugifyWithCounter() {
    const occurrences = new Map();
    const countable = (string, options)=>{
        string = slugify(string, options);
        if (!string) {
            return "";
        }
        const stringLower = string.toLowerCase();
        const numberless = occurrences.get(stringLower.replace(/(?:-\d+?)+?$/, "")) || 0;
        const counter = occurrences.get(stringLower);
        occurrences.set(stringLower, typeof counter === "number" ? counter + 1 : 1);
        const newCounter = occurrences.get(stringLower) || 2;
        if (newCounter >= 2 || numberless > 2) {
            string = `${string}-${newCounter}`;
        }
        return string;
    };
    countable.reset = ()=>{
        occurrences.clear();
    };
    return countable;
}


/***/ }),

/***/ 6498:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   zD: () => (/* binding */ load)
/* harmony export */ });
/* unused harmony exports CORE_SCHEMA, DEFAULT_SCHEMA, FAILSAFE_SCHEMA, JSON_SCHEMA, Schema, Type, YAMLException, dump, loadAll, safeDump, safeLoad, safeLoadAll, types */
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */ function isNothing(subject) {
    return typeof subject === "undefined" || subject === null;
}
function isObject(subject) {
    return typeof subject === "object" && subject !== null;
}
function toArray(sequence) {
    if (Array.isArray(sequence)) return sequence;
    else if (isNothing(sequence)) return [];
    return [
        sequence
    ];
}
function extend(target, source) {
    var index, length, key, sourceKeys;
    if (source) {
        sourceKeys = Object.keys(source);
        for(index = 0, length = sourceKeys.length; index < length; index += 1){
            key = sourceKeys[index];
            target[key] = source[key];
        }
    }
    return target;
}
function repeat(string, count) {
    var result = "", cycle;
    for(cycle = 0; cycle < count; cycle += 1){
        result += string;
    }
    return result;
}
function isNegativeZero(number) {
    return number === 0 && Number.NEGATIVE_INFINITY === 1 / number;
}
var isNothing_1 = isNothing;
var isObject_1 = isObject;
var toArray_1 = toArray;
var repeat_1 = repeat;
var isNegativeZero_1 = isNegativeZero;
var extend_1 = extend;
var common = {
    isNothing: isNothing_1,
    isObject: isObject_1,
    toArray: toArray_1,
    repeat: repeat_1,
    isNegativeZero: isNegativeZero_1,
    extend: extend_1
};
// YAML error class. http://stackoverflow.com/questions/8458984
function formatError(exception, compact) {
    var where = "", message = exception.reason || "(unknown reason)";
    if (!exception.mark) return message;
    if (exception.mark.name) {
        where += 'in "' + exception.mark.name + '" ';
    }
    where += "(" + (exception.mark.line + 1) + ":" + (exception.mark.column + 1) + ")";
    if (!compact && exception.mark.snippet) {
        where += "\n\n" + exception.mark.snippet;
    }
    return message + " " + where;
}
function YAMLException$1(reason, mark) {
    // Super constructor
    Error.call(this);
    this.name = "YAMLException";
    this.reason = reason;
    this.mark = mark;
    this.message = formatError(this, false);
    // Include stack trace in error object
    if (Error.captureStackTrace) {
        // Chrome and NodeJS
        Error.captureStackTrace(this, this.constructor);
    } else {
        // FF, IE 10+ and Safari 6+. Fallback for others
        this.stack = new Error().stack || "";
    }
}
// Inherit from Error
YAMLException$1.prototype = Object.create(Error.prototype);
YAMLException$1.prototype.constructor = YAMLException$1;
YAMLException$1.prototype.toString = function toString(compact) {
    return this.name + ": " + formatError(this, compact);
};
var exception = YAMLException$1;
// get snippet for a single line, respecting maxLength
function getLine(buffer, lineStart, lineEnd, position, maxLineLength) {
    var head = "";
    var tail = "";
    var maxHalfLength = Math.floor(maxLineLength / 2) - 1;
    if (position - lineStart > maxHalfLength) {
        head = " ... ";
        lineStart = position - maxHalfLength + head.length;
    }
    if (lineEnd - position > maxHalfLength) {
        tail = " ...";
        lineEnd = position + maxHalfLength - tail.length;
    }
    return {
        str: head + buffer.slice(lineStart, lineEnd).replace(/\t/g, "→") + tail,
        pos: position - lineStart + head.length // relative position
    };
}
function padStart(string, max) {
    return common.repeat(" ", max - string.length) + string;
}
function makeSnippet(mark, options) {
    options = Object.create(options || null);
    if (!mark.buffer) return null;
    if (!options.maxLength) options.maxLength = 79;
    if (typeof options.indent !== "number") options.indent = 1;
    if (typeof options.linesBefore !== "number") options.linesBefore = 3;
    if (typeof options.linesAfter !== "number") options.linesAfter = 2;
    var re = /\r?\n|\r|\0/g;
    var lineStarts = [
        0
    ];
    var lineEnds = [];
    var match;
    var foundLineNo = -1;
    while(match = re.exec(mark.buffer)){
        lineEnds.push(match.index);
        lineStarts.push(match.index + match[0].length);
        if (mark.position <= match.index && foundLineNo < 0) {
            foundLineNo = lineStarts.length - 2;
        }
    }
    if (foundLineNo < 0) foundLineNo = lineStarts.length - 1;
    var result = "", i, line;
    var lineNoLength = Math.min(mark.line + options.linesAfter, lineEnds.length).toString().length;
    var maxLineLength = options.maxLength - (options.indent + lineNoLength + 3);
    for(i = 1; i <= options.linesBefore; i++){
        if (foundLineNo - i < 0) break;
        line = getLine(mark.buffer, lineStarts[foundLineNo - i], lineEnds[foundLineNo - i], mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo - i]), maxLineLength);
        result = common.repeat(" ", options.indent) + padStart((mark.line - i + 1).toString(), lineNoLength) + " | " + line.str + "\n" + result;
    }
    line = getLine(mark.buffer, lineStarts[foundLineNo], lineEnds[foundLineNo], mark.position, maxLineLength);
    result += common.repeat(" ", options.indent) + padStart((mark.line + 1).toString(), lineNoLength) + " | " + line.str + "\n";
    result += common.repeat("-", options.indent + lineNoLength + 3 + line.pos) + "^" + "\n";
    for(i = 1; i <= options.linesAfter; i++){
        if (foundLineNo + i >= lineEnds.length) break;
        line = getLine(mark.buffer, lineStarts[foundLineNo + i], lineEnds[foundLineNo + i], mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo + i]), maxLineLength);
        result += common.repeat(" ", options.indent) + padStart((mark.line + i + 1).toString(), lineNoLength) + " | " + line.str + "\n";
    }
    return result.replace(/\n$/, "");
}
var snippet = makeSnippet;
var TYPE_CONSTRUCTOR_OPTIONS = [
    "kind",
    "multi",
    "resolve",
    "construct",
    "instanceOf",
    "predicate",
    "represent",
    "representName",
    "defaultStyle",
    "styleAliases"
];
var YAML_NODE_KINDS = [
    "scalar",
    "sequence",
    "mapping"
];
function compileStyleAliases(map) {
    var result = {};
    if (map !== null) {
        Object.keys(map).forEach(function(style) {
            map[style].forEach(function(alias) {
                result[String(alias)] = style;
            });
        });
    }
    return result;
}
function Type$1(tag, options) {
    options = options || {};
    Object.keys(options).forEach(function(name) {
        if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
            throw new exception('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
        }
    });
    // TODO: Add tag format check.
    this.options = options; // keep original options in case user wants to extend this type later
    this.tag = tag;
    this.kind = options["kind"] || null;
    this.resolve = options["resolve"] || function() {
        return true;
    };
    this.construct = options["construct"] || function(data) {
        return data;
    };
    this.instanceOf = options["instanceOf"] || null;
    this.predicate = options["predicate"] || null;
    this.represent = options["represent"] || null;
    this.representName = options["representName"] || null;
    this.defaultStyle = options["defaultStyle"] || null;
    this.multi = options["multi"] || false;
    this.styleAliases = compileStyleAliases(options["styleAliases"] || null);
    if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
        throw new exception('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
    }
}
var type = Type$1;
/*eslint-disable max-len*/ function compileList(schema, name) {
    var result = [];
    schema[name].forEach(function(currentType) {
        var newIndex = result.length;
        result.forEach(function(previousType, previousIndex) {
            if (previousType.tag === currentType.tag && previousType.kind === currentType.kind && previousType.multi === currentType.multi) {
                newIndex = previousIndex;
            }
        });
        result[newIndex] = currentType;
    });
    return result;
}
function compileMap() {
    var result = {
        scalar: {},
        sequence: {},
        mapping: {},
        fallback: {},
        multi: {
            scalar: [],
            sequence: [],
            mapping: [],
            fallback: []
        }
    }, index, length;
    function collectType(type) {
        if (type.multi) {
            result.multi[type.kind].push(type);
            result.multi["fallback"].push(type);
        } else {
            result[type.kind][type.tag] = result["fallback"][type.tag] = type;
        }
    }
    for(index = 0, length = arguments.length; index < length; index += 1){
        arguments[index].forEach(collectType);
    }
    return result;
}
function Schema$1(definition) {
    return this.extend(definition);
}
Schema$1.prototype.extend = function extend(definition) {
    var implicit = [];
    var explicit = [];
    if (definition instanceof type) {
        // Schema.extend(type)
        explicit.push(definition);
    } else if (Array.isArray(definition)) {
        // Schema.extend([ type1, type2, ... ])
        explicit = explicit.concat(definition);
    } else if (definition && (Array.isArray(definition.implicit) || Array.isArray(definition.explicit))) {
        // Schema.extend({ explicit: [ type1, type2, ... ], implicit: [ type1, type2, ... ] })
        if (definition.implicit) implicit = implicit.concat(definition.implicit);
        if (definition.explicit) explicit = explicit.concat(definition.explicit);
    } else {
        throw new exception("Schema.extend argument should be a Type, [ Type ], " + "or a schema definition ({ implicit: [...], explicit: [...] })");
    }
    implicit.forEach(function(type$1) {
        if (!(type$1 instanceof type)) {
            throw new exception("Specified list of YAML types (or a single Type object) contains a non-Type object.");
        }
        if (type$1.loadKind && type$1.loadKind !== "scalar") {
            throw new exception("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
        }
        if (type$1.multi) {
            throw new exception("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
        }
    });
    explicit.forEach(function(type$1) {
        if (!(type$1 instanceof type)) {
            throw new exception("Specified list of YAML types (or a single Type object) contains a non-Type object.");
        }
    });
    var result = Object.create(Schema$1.prototype);
    result.implicit = (this.implicit || []).concat(implicit);
    result.explicit = (this.explicit || []).concat(explicit);
    result.compiledImplicit = compileList(result, "implicit");
    result.compiledExplicit = compileList(result, "explicit");
    result.compiledTypeMap = compileMap(result.compiledImplicit, result.compiledExplicit);
    return result;
};
var schema = Schema$1;
var str = new type("tag:yaml.org,2002:str", {
    kind: "scalar",
    construct: function(data) {
        return data !== null ? data : "";
    }
});
var seq = new type("tag:yaml.org,2002:seq", {
    kind: "sequence",
    construct: function(data) {
        return data !== null ? data : [];
    }
});
var map = new type("tag:yaml.org,2002:map", {
    kind: "mapping",
    construct: function(data) {
        return data !== null ? data : {};
    }
});
var failsafe = new schema({
    explicit: [
        str,
        seq,
        map
    ]
});
function resolveYamlNull(data) {
    if (data === null) return true;
    var max = data.length;
    return max === 1 && data === "~" || max === 4 && (data === "null" || data === "Null" || data === "NULL");
}
function constructYamlNull() {
    return null;
}
function isNull(object) {
    return object === null;
}
var _null = new type("tag:yaml.org,2002:null", {
    kind: "scalar",
    resolve: resolveYamlNull,
    construct: constructYamlNull,
    predicate: isNull,
    represent: {
        canonical: function() {
            return "~";
        },
        lowercase: function() {
            return "null";
        },
        uppercase: function() {
            return "NULL";
        },
        camelcase: function() {
            return "Null";
        },
        empty: function() {
            return "";
        }
    },
    defaultStyle: "lowercase"
});
function resolveYamlBoolean(data) {
    if (data === null) return false;
    var max = data.length;
    return max === 4 && (data === "true" || data === "True" || data === "TRUE") || max === 5 && (data === "false" || data === "False" || data === "FALSE");
}
function constructYamlBoolean(data) {
    return data === "true" || data === "True" || data === "TRUE";
}
function isBoolean(object) {
    return Object.prototype.toString.call(object) === "[object Boolean]";
}
var bool = new type("tag:yaml.org,2002:bool", {
    kind: "scalar",
    resolve: resolveYamlBoolean,
    construct: constructYamlBoolean,
    predicate: isBoolean,
    represent: {
        lowercase: function(object) {
            return object ? "true" : "false";
        },
        uppercase: function(object) {
            return object ? "TRUE" : "FALSE";
        },
        camelcase: function(object) {
            return object ? "True" : "False";
        }
    },
    defaultStyle: "lowercase"
});
function isHexCode(c) {
    return 0x30 /* 0 */  <= c && c <= 0x39 /* 9 */  || 0x41 /* A */  <= c && c <= 0x46 /* F */  || 0x61 /* a */  <= c && c <= 0x66 /* f */ ;
}
function isOctCode(c) {
    return 0x30 /* 0 */  <= c && c <= 0x37 /* 7 */ ;
}
function isDecCode(c) {
    return 0x30 /* 0 */  <= c && c <= 0x39 /* 9 */ ;
}
function resolveYamlInteger(data) {
    if (data === null) return false;
    var max = data.length, index = 0, hasDigits = false, ch;
    if (!max) return false;
    ch = data[index];
    // sign
    if (ch === "-" || ch === "+") {
        ch = data[++index];
    }
    if (ch === "0") {
        // 0
        if (index + 1 === max) return true;
        ch = data[++index];
        // base 2, base 8, base 16
        if (ch === "b") {
            // base 2
            index++;
            for(; index < max; index++){
                ch = data[index];
                if (ch === "_") continue;
                if (ch !== "0" && ch !== "1") return false;
                hasDigits = true;
            }
            return hasDigits && ch !== "_";
        }
        if (ch === "x") {
            // base 16
            index++;
            for(; index < max; index++){
                ch = data[index];
                if (ch === "_") continue;
                if (!isHexCode(data.charCodeAt(index))) return false;
                hasDigits = true;
            }
            return hasDigits && ch !== "_";
        }
        if (ch === "o") {
            // base 8
            index++;
            for(; index < max; index++){
                ch = data[index];
                if (ch === "_") continue;
                if (!isOctCode(data.charCodeAt(index))) return false;
                hasDigits = true;
            }
            return hasDigits && ch !== "_";
        }
    }
    // base 10 (except 0)
    // value should not start with `_`;
    if (ch === "_") return false;
    for(; index < max; index++){
        ch = data[index];
        if (ch === "_") continue;
        if (!isDecCode(data.charCodeAt(index))) {
            return false;
        }
        hasDigits = true;
    }
    // Should have digits and should not end with `_`
    if (!hasDigits || ch === "_") return false;
    return true;
}
function constructYamlInteger(data) {
    var value = data, sign = 1, ch;
    if (value.indexOf("_") !== -1) {
        value = value.replace(/_/g, "");
    }
    ch = value[0];
    if (ch === "-" || ch === "+") {
        if (ch === "-") sign = -1;
        value = value.slice(1);
        ch = value[0];
    }
    if (value === "0") return 0;
    if (ch === "0") {
        if (value[1] === "b") return sign * parseInt(value.slice(2), 2);
        if (value[1] === "x") return sign * parseInt(value.slice(2), 16);
        if (value[1] === "o") return sign * parseInt(value.slice(2), 8);
    }
    return sign * parseInt(value, 10);
}
function isInteger(object) {
    return Object.prototype.toString.call(object) === "[object Number]" && object % 1 === 0 && !common.isNegativeZero(object);
}
var int = new type("tag:yaml.org,2002:int", {
    kind: "scalar",
    resolve: resolveYamlInteger,
    construct: constructYamlInteger,
    predicate: isInteger,
    represent: {
        binary: function(obj) {
            return obj >= 0 ? "0b" + obj.toString(2) : "-0b" + obj.toString(2).slice(1);
        },
        octal: function(obj) {
            return obj >= 0 ? "0o" + obj.toString(8) : "-0o" + obj.toString(8).slice(1);
        },
        decimal: function(obj) {
            return obj.toString(10);
        },
        /* eslint-disable max-len */ hexadecimal: function(obj) {
            return obj >= 0 ? "0x" + obj.toString(16).toUpperCase() : "-0x" + obj.toString(16).toUpperCase().slice(1);
        }
    },
    defaultStyle: "decimal",
    styleAliases: {
        binary: [
            2,
            "bin"
        ],
        octal: [
            8,
            "oct"
        ],
        decimal: [
            10,
            "dec"
        ],
        hexadecimal: [
            16,
            "hex"
        ]
    }
});
var YAML_FLOAT_PATTERN = new RegExp(// 2.5e4, 2.5 and integers
"^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?" + // .2e4, .2
// special case, seems not from spec
"|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?" + // .inf
"|[-+]?\\.(?:inf|Inf|INF)" + // .nan
"|\\.(?:nan|NaN|NAN))$");
function resolveYamlFloat(data) {
    if (data === null) return false;
    if (!YAML_FLOAT_PATTERN.test(data) || // Quick hack to not allow integers end with `_`
    // Probably should update regexp & check speed
    data[data.length - 1] === "_") {
        return false;
    }
    return true;
}
function constructYamlFloat(data) {
    var value, sign;
    value = data.replace(/_/g, "").toLowerCase();
    sign = value[0] === "-" ? -1 : 1;
    if ("+-".indexOf(value[0]) >= 0) {
        value = value.slice(1);
    }
    if (value === ".inf") {
        return sign === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
    } else if (value === ".nan") {
        return NaN;
    }
    return sign * parseFloat(value, 10);
}
var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
function representYamlFloat(object, style) {
    var res;
    if (isNaN(object)) {
        switch(style){
            case "lowercase":
                return ".nan";
            case "uppercase":
                return ".NAN";
            case "camelcase":
                return ".NaN";
        }
    } else if (Number.POSITIVE_INFINITY === object) {
        switch(style){
            case "lowercase":
                return ".inf";
            case "uppercase":
                return ".INF";
            case "camelcase":
                return ".Inf";
        }
    } else if (Number.NEGATIVE_INFINITY === object) {
        switch(style){
            case "lowercase":
                return "-.inf";
            case "uppercase":
                return "-.INF";
            case "camelcase":
                return "-.Inf";
        }
    } else if (common.isNegativeZero(object)) {
        return "-0.0";
    }
    res = object.toString(10);
    // JS stringifier can build scientific format without dots: 5e-100,
    // while YAML requres dot: 5.e-100. Fix it with simple hack
    return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace("e", ".e") : res;
}
function isFloat(object) {
    return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 !== 0 || common.isNegativeZero(object));
}
var float = new type("tag:yaml.org,2002:float", {
    kind: "scalar",
    resolve: resolveYamlFloat,
    construct: constructYamlFloat,
    predicate: isFloat,
    represent: representYamlFloat,
    defaultStyle: "lowercase"
});
var json = failsafe.extend({
    implicit: [
        _null,
        bool,
        int,
        float
    ]
});
var core = json;
var YAML_DATE_REGEXP = new RegExp("^([0-9][0-9][0-9][0-9])" + // [1] year
"-([0-9][0-9])" + // [2] month
"-([0-9][0-9])$"); // [3] day
var YAML_TIMESTAMP_REGEXP = new RegExp("^([0-9][0-9][0-9][0-9])" + // [1] year
"-([0-9][0-9]?)" + // [2] month
"-([0-9][0-9]?)" + // [3] day
"(?:[Tt]|[ \\t]+)" + // ...
"([0-9][0-9]?)" + // [4] hour
":([0-9][0-9])" + // [5] minute
":([0-9][0-9])" + // [6] second
"(?:\\.([0-9]*))?" + // [7] fraction
"(?:[ \\t]*(Z|([-+])([0-9][0-9]?)" + // [8] tz [9] tz_sign [10] tz_hour
"(?::([0-9][0-9]))?))?$"); // [11] tz_minute
function resolveYamlTimestamp(data) {
    if (data === null) return false;
    if (YAML_DATE_REGEXP.exec(data) !== null) return true;
    if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
    return false;
}
function constructYamlTimestamp(data) {
    var match, year, month, day, hour, minute, second, fraction = 0, delta = null, tz_hour, tz_minute, date;
    match = YAML_DATE_REGEXP.exec(data);
    if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);
    if (match === null) throw new Error("Date resolve error");
    // match: [1] year [2] month [3] day
    year = +match[1];
    month = +match[2] - 1; // JS month starts with 0
    day = +match[3];
    if (!match[4]) {
        return new Date(Date.UTC(year, month, day));
    }
    // match: [4] hour [5] minute [6] second [7] fraction
    hour = +match[4];
    minute = +match[5];
    second = +match[6];
    if (match[7]) {
        fraction = match[7].slice(0, 3);
        while(fraction.length < 3){
            fraction += "0";
        }
        fraction = +fraction;
    }
    // match: [8] tz [9] tz_sign [10] tz_hour [11] tz_minute
    if (match[9]) {
        tz_hour = +match[10];
        tz_minute = +(match[11] || 0);
        delta = (tz_hour * 60 + tz_minute) * 60000; // delta in mili-seconds
        if (match[9] === "-") delta = -delta;
    }
    date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
    if (delta) date.setTime(date.getTime() - delta);
    return date;
}
function representYamlTimestamp(object /*, style*/ ) {
    return object.toISOString();
}
var timestamp = new type("tag:yaml.org,2002:timestamp", {
    kind: "scalar",
    resolve: resolveYamlTimestamp,
    construct: constructYamlTimestamp,
    instanceOf: Date,
    represent: representYamlTimestamp
});
function resolveYamlMerge(data) {
    return data === "<<" || data === null;
}
var merge = new type("tag:yaml.org,2002:merge", {
    kind: "scalar",
    resolve: resolveYamlMerge
});
/*eslint-disable no-bitwise*/ // [ 64, 65, 66 ] -> [ padding, CR, LF ]
var BASE64_MAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
function resolveYamlBinary(data) {
    if (data === null) return false;
    var code, idx, bitlen = 0, max = data.length, map = BASE64_MAP;
    // Convert one by one.
    for(idx = 0; idx < max; idx++){
        code = map.indexOf(data.charAt(idx));
        // Skip CR/LF
        if (code > 64) continue;
        // Fail on illegal characters
        if (code < 0) return false;
        bitlen += 6;
    }
    // If there are any bits left, source was corrupted
    return bitlen % 8 === 0;
}
function constructYamlBinary(data) {
    var idx, tailbits, input = data.replace(/[\r\n=]/g, ""), max = input.length, map = BASE64_MAP, bits = 0, result = [];
    // Collect by 6*4 bits (3 bytes)
    for(idx = 0; idx < max; idx++){
        if (idx % 4 === 0 && idx) {
            result.push(bits >> 16 & 0xFF);
            result.push(bits >> 8 & 0xFF);
            result.push(bits & 0xFF);
        }
        bits = bits << 6 | map.indexOf(input.charAt(idx));
    }
    // Dump tail
    tailbits = max % 4 * 6;
    if (tailbits === 0) {
        result.push(bits >> 16 & 0xFF);
        result.push(bits >> 8 & 0xFF);
        result.push(bits & 0xFF);
    } else if (tailbits === 18) {
        result.push(bits >> 10 & 0xFF);
        result.push(bits >> 2 & 0xFF);
    } else if (tailbits === 12) {
        result.push(bits >> 4 & 0xFF);
    }
    return new Uint8Array(result);
}
function representYamlBinary(object /*, style*/ ) {
    var result = "", bits = 0, idx, tail, max = object.length, map = BASE64_MAP;
    // Convert every three bytes to 4 ASCII characters.
    for(idx = 0; idx < max; idx++){
        if (idx % 3 === 0 && idx) {
            result += map[bits >> 18 & 0x3F];
            result += map[bits >> 12 & 0x3F];
            result += map[bits >> 6 & 0x3F];
            result += map[bits & 0x3F];
        }
        bits = (bits << 8) + object[idx];
    }
    // Dump tail
    tail = max % 3;
    if (tail === 0) {
        result += map[bits >> 18 & 0x3F];
        result += map[bits >> 12 & 0x3F];
        result += map[bits >> 6 & 0x3F];
        result += map[bits & 0x3F];
    } else if (tail === 2) {
        result += map[bits >> 10 & 0x3F];
        result += map[bits >> 4 & 0x3F];
        result += map[bits << 2 & 0x3F];
        result += map[64];
    } else if (tail === 1) {
        result += map[bits >> 2 & 0x3F];
        result += map[bits << 4 & 0x3F];
        result += map[64];
        result += map[64];
    }
    return result;
}
function isBinary(obj) {
    return Object.prototype.toString.call(obj) === "[object Uint8Array]";
}
var binary = new type("tag:yaml.org,2002:binary", {
    kind: "scalar",
    resolve: resolveYamlBinary,
    construct: constructYamlBinary,
    predicate: isBinary,
    represent: representYamlBinary
});
var _hasOwnProperty$3 = Object.prototype.hasOwnProperty;
var _toString$2 = Object.prototype.toString;
function resolveYamlOmap(data) {
    if (data === null) return true;
    var objectKeys = [], index, length, pair, pairKey, pairHasKey, object = data;
    for(index = 0, length = object.length; index < length; index += 1){
        pair = object[index];
        pairHasKey = false;
        if (_toString$2.call(pair) !== "[object Object]") return false;
        for(pairKey in pair){
            if (_hasOwnProperty$3.call(pair, pairKey)) {
                if (!pairHasKey) pairHasKey = true;
                else return false;
            }
        }
        if (!pairHasKey) return false;
        if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
        else return false;
    }
    return true;
}
function constructYamlOmap(data) {
    return data !== null ? data : [];
}
var omap = new type("tag:yaml.org,2002:omap", {
    kind: "sequence",
    resolve: resolveYamlOmap,
    construct: constructYamlOmap
});
var _toString$1 = Object.prototype.toString;
function resolveYamlPairs(data) {
    if (data === null) return true;
    var index, length, pair, keys, result, object = data;
    result = new Array(object.length);
    for(index = 0, length = object.length; index < length; index += 1){
        pair = object[index];
        if (_toString$1.call(pair) !== "[object Object]") return false;
        keys = Object.keys(pair);
        if (keys.length !== 1) return false;
        result[index] = [
            keys[0],
            pair[keys[0]]
        ];
    }
    return true;
}
function constructYamlPairs(data) {
    if (data === null) return [];
    var index, length, pair, keys, result, object = data;
    result = new Array(object.length);
    for(index = 0, length = object.length; index < length; index += 1){
        pair = object[index];
        keys = Object.keys(pair);
        result[index] = [
            keys[0],
            pair[keys[0]]
        ];
    }
    return result;
}
var pairs = new type("tag:yaml.org,2002:pairs", {
    kind: "sequence",
    resolve: resolveYamlPairs,
    construct: constructYamlPairs
});
var _hasOwnProperty$2 = Object.prototype.hasOwnProperty;
function resolveYamlSet(data) {
    if (data === null) return true;
    var key, object = data;
    for(key in object){
        if (_hasOwnProperty$2.call(object, key)) {
            if (object[key] !== null) return false;
        }
    }
    return true;
}
function constructYamlSet(data) {
    return data !== null ? data : {};
}
var set = new type("tag:yaml.org,2002:set", {
    kind: "mapping",
    resolve: resolveYamlSet,
    construct: constructYamlSet
});
var _default = core.extend({
    implicit: [
        timestamp,
        merge
    ],
    explicit: [
        binary,
        omap,
        pairs,
        set
    ]
});
/*eslint-disable max-len,no-use-before-define*/ var _hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var CONTEXT_FLOW_IN = 1;
var CONTEXT_FLOW_OUT = 2;
var CONTEXT_BLOCK_IN = 3;
var CONTEXT_BLOCK_OUT = 4;
var CHOMPING_CLIP = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP = 3;
var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function _class(obj) {
    return Object.prototype.toString.call(obj);
}
function is_EOL(c) {
    return c === 0x0A /* LF */  || c === 0x0D /* CR */ ;
}
function is_WHITE_SPACE(c) {
    return c === 0x09 /* Tab */  || c === 0x20 /* Space */ ;
}
function is_WS_OR_EOL(c) {
    return c === 0x09 /* Tab */  || c === 0x20 /* Space */  || c === 0x0A /* LF */  || c === 0x0D /* CR */ ;
}
function is_FLOW_INDICATOR(c) {
    return c === 0x2C /* , */  || c === 0x5B /* [ */  || c === 0x5D /* ] */  || c === 0x7B /* { */  || c === 0x7D /* } */ ;
}
function fromHexCode(c) {
    var lc;
    if (0x30 /* 0 */  <= c && c <= 0x39 /* 9 */ ) {
        return c - 0x30;
    }
    /*eslint-disable no-bitwise*/ lc = c | 0x20;
    if (0x61 /* a */  <= lc && lc <= 0x66 /* f */ ) {
        return lc - 0x61 + 10;
    }
    return -1;
}
function escapedHexLen(c) {
    if (c === 0x78 /* x */ ) {
        return 2;
    }
    if (c === 0x75 /* u */ ) {
        return 4;
    }
    if (c === 0x55 /* U */ ) {
        return 8;
    }
    return 0;
}
function fromDecimalCode(c) {
    if (0x30 /* 0 */  <= c && c <= 0x39 /* 9 */ ) {
        return c - 0x30;
    }
    return -1;
}
function simpleEscapeSequence(c) {
    /* eslint-disable indent */ return c === 0x30 /* 0 */  ? "\x00" : c === 0x61 /* a */  ? "\x07" : c === 0x62 /* b */  ? "\b" : c === 0x74 /* t */  ? "	" : c === 0x09 /* Tab */  ? "	" : c === 0x6E /* n */  ? "\n" : c === 0x76 /* v */  ? "\v" : c === 0x66 /* f */  ? "\f" : c === 0x72 /* r */  ? "\r" : c === 0x65 /* e */  ? "\x1b" : c === 0x20 /* Space */  ? " " : c === 0x22 /* " */  ? '"' : c === 0x2F /* / */  ? "/" : c === 0x5C /* \ */  ? "\\" : c === 0x4E /* N */  ? "\x85" : c === 0x5F /* _ */  ? "\xa0" : c === 0x4C /* L */  ? "\u2028" : c === 0x50 /* P */  ? "\u2029" : "";
}
function charFromCodepoint(c) {
    if (c <= 0xFFFF) {
        return String.fromCharCode(c);
    }
    // Encode UTF-16 surrogate pair
    // https://en.wikipedia.org/wiki/UTF-16#Code_points_U.2B010000_to_U.2B10FFFF
    return String.fromCharCode((c - 0x010000 >> 10) + 0xD800, (c - 0x010000 & 0x03FF) + 0xDC00);
}
var simpleEscapeCheck = new Array(256); // integer, for fast access
var simpleEscapeMap = new Array(256);
for(var i = 0; i < 256; i++){
    simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
    simpleEscapeMap[i] = simpleEscapeSequence(i);
}
function State$1(input, options) {
    this.input = input;
    this.filename = options["filename"] || null;
    this.schema = options["schema"] || _default;
    this.onWarning = options["onWarning"] || null;
    // (Hidden) Remove? makes the loader to expect YAML 1.1 documents
    // if such documents have no explicit %YAML directive
    this.legacy = options["legacy"] || false;
    this.json = options["json"] || false;
    this.listener = options["listener"] || null;
    this.implicitTypes = this.schema.compiledImplicit;
    this.typeMap = this.schema.compiledTypeMap;
    this.length = input.length;
    this.position = 0;
    this.line = 0;
    this.lineStart = 0;
    this.lineIndent = 0;
    // position of first leading tab in the current line,
    // used to make sure there are no tabs in the indentation
    this.firstTabInLine = -1;
    this.documents = [];
/*
  this.version;
  this.checkLineBreaks;
  this.tagMap;
  this.anchorMap;
  this.tag;
  this.anchor;
  this.kind;
  this.result;*/ }
function generateError(state, message) {
    var mark = {
        name: state.filename,
        buffer: state.input.slice(0, -1),
        position: state.position,
        line: state.line,
        column: state.position - state.lineStart
    };
    mark.snippet = snippet(mark);
    return new exception(message, mark);
}
function throwError(state, message) {
    throw generateError(state, message);
}
function throwWarning(state, message) {
    if (state.onWarning) {
        state.onWarning.call(null, generateError(state, message));
    }
}
var directiveHandlers = {
    YAML: function handleYamlDirective(state, name, args) {
        var match, major, minor;
        if (state.version !== null) {
            throwError(state, "duplication of %YAML directive");
        }
        if (args.length !== 1) {
            throwError(state, "YAML directive accepts exactly one argument");
        }
        match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);
        if (match === null) {
            throwError(state, "ill-formed argument of the YAML directive");
        }
        major = parseInt(match[1], 10);
        minor = parseInt(match[2], 10);
        if (major !== 1) {
            throwError(state, "unacceptable YAML version of the document");
        }
        state.version = args[0];
        state.checkLineBreaks = minor < 2;
        if (minor !== 1 && minor !== 2) {
            throwWarning(state, "unsupported YAML version of the document");
        }
    },
    TAG: function handleTagDirective(state, name, args) {
        var handle, prefix;
        if (args.length !== 2) {
            throwError(state, "TAG directive accepts exactly two arguments");
        }
        handle = args[0];
        prefix = args[1];
        if (!PATTERN_TAG_HANDLE.test(handle)) {
            throwError(state, "ill-formed tag handle (first argument) of the TAG directive");
        }
        if (_hasOwnProperty$1.call(state.tagMap, handle)) {
            throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
        }
        if (!PATTERN_TAG_URI.test(prefix)) {
            throwError(state, "ill-formed tag prefix (second argument) of the TAG directive");
        }
        try {
            prefix = decodeURIComponent(prefix);
        } catch (err) {
            throwError(state, "tag prefix is malformed: " + prefix);
        }
        state.tagMap[handle] = prefix;
    }
};
function captureSegment(state, start, end, checkJson) {
    var _position, _length, _character, _result;
    if (start < end) {
        _result = state.input.slice(start, end);
        if (checkJson) {
            for(_position = 0, _length = _result.length; _position < _length; _position += 1){
                _character = _result.charCodeAt(_position);
                if (!(_character === 0x09 || 0x20 <= _character && _character <= 0x10FFFF)) {
                    throwError(state, "expected valid JSON character");
                }
            }
        } else if (PATTERN_NON_PRINTABLE.test(_result)) {
            throwError(state, "the stream contains non-printable characters");
        }
        state.result += _result;
    }
}
function mergeMappings(state, destination, source, overridableKeys) {
    var sourceKeys, key, index, quantity;
    if (!common.isObject(source)) {
        throwError(state, "cannot merge mappings; the provided source object is unacceptable");
    }
    sourceKeys = Object.keys(source);
    for(index = 0, quantity = sourceKeys.length; index < quantity; index += 1){
        key = sourceKeys[index];
        if (!_hasOwnProperty$1.call(destination, key)) {
            destination[key] = source[key];
            overridableKeys[key] = true;
        }
    }
}
function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startLineStart, startPos) {
    var index, quantity;
    // The output is a plain object here, so keys can only be strings.
    // We need to convert keyNode to a string, but doing so can hang the process
    // (deeply nested arrays that explode exponentially using aliases).
    if (Array.isArray(keyNode)) {
        keyNode = Array.prototype.slice.call(keyNode);
        for(index = 0, quantity = keyNode.length; index < quantity; index += 1){
            if (Array.isArray(keyNode[index])) {
                throwError(state, "nested arrays are not supported inside keys");
            }
            if (typeof keyNode === "object" && _class(keyNode[index]) === "[object Object]") {
                keyNode[index] = "[object Object]";
            }
        }
    }
    // Avoid code execution in load() via toString property
    // (still use its own toString for arrays, timestamps,
    // and whatever user schema extensions happen to have @@toStringTag)
    if (typeof keyNode === "object" && _class(keyNode) === "[object Object]") {
        keyNode = "[object Object]";
    }
    keyNode = String(keyNode);
    if (_result === null) {
        _result = {};
    }
    if (keyTag === "tag:yaml.org,2002:merge") {
        if (Array.isArray(valueNode)) {
            for(index = 0, quantity = valueNode.length; index < quantity; index += 1){
                mergeMappings(state, _result, valueNode[index], overridableKeys);
            }
        } else {
            mergeMappings(state, _result, valueNode, overridableKeys);
        }
    } else {
        if (!state.json && !_hasOwnProperty$1.call(overridableKeys, keyNode) && _hasOwnProperty$1.call(_result, keyNode)) {
            state.line = startLine || state.line;
            state.lineStart = startLineStart || state.lineStart;
            state.position = startPos || state.position;
            throwError(state, "duplicated mapping key");
        }
        // used for this specific key only because Object.defineProperty is slow
        if (keyNode === "__proto__") {
            Object.defineProperty(_result, keyNode, {
                configurable: true,
                enumerable: true,
                writable: true,
                value: valueNode
            });
        } else {
            _result[keyNode] = valueNode;
        }
        delete overridableKeys[keyNode];
    }
    return _result;
}
function readLineBreak(state) {
    var ch;
    ch = state.input.charCodeAt(state.position);
    if (ch === 0x0A /* LF */ ) {
        state.position++;
    } else if (ch === 0x0D /* CR */ ) {
        state.position++;
        if (state.input.charCodeAt(state.position) === 0x0A /* LF */ ) {
            state.position++;
        }
    } else {
        throwError(state, "a line break is expected");
    }
    state.line += 1;
    state.lineStart = state.position;
    state.firstTabInLine = -1;
}
function skipSeparationSpace(state, allowComments, checkIndent) {
    var lineBreaks = 0, ch = state.input.charCodeAt(state.position);
    while(ch !== 0){
        while(is_WHITE_SPACE(ch)){
            if (ch === 0x09 /* Tab */  && state.firstTabInLine === -1) {
                state.firstTabInLine = state.position;
            }
            ch = state.input.charCodeAt(++state.position);
        }
        if (allowComments && ch === 0x23 /* # */ ) {
            do {
                ch = state.input.charCodeAt(++state.position);
            }while (ch !== 0x0A /* LF */  && ch !== 0x0D /* CR */  && ch !== 0);
        }
        if (is_EOL(ch)) {
            readLineBreak(state);
            ch = state.input.charCodeAt(state.position);
            lineBreaks++;
            state.lineIndent = 0;
            while(ch === 0x20 /* Space */ ){
                state.lineIndent++;
                ch = state.input.charCodeAt(++state.position);
            }
        } else {
            break;
        }
    }
    if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
        throwWarning(state, "deficient indentation");
    }
    return lineBreaks;
}
function testDocumentSeparator(state) {
    var _position = state.position, ch;
    ch = state.input.charCodeAt(_position);
    // Condition state.position === state.lineStart is tested
    // in parent on each call, for efficiency. No needs to test here again.
    if ((ch === 0x2D /* - */  || ch === 0x2E /* . */ ) && ch === state.input.charCodeAt(_position + 1) && ch === state.input.charCodeAt(_position + 2)) {
        _position += 3;
        ch = state.input.charCodeAt(_position);
        if (ch === 0 || is_WS_OR_EOL(ch)) {
            return true;
        }
    }
    return false;
}
function writeFoldedLines(state, count) {
    if (count === 1) {
        state.result += " ";
    } else if (count > 1) {
        state.result += common.repeat("\n", count - 1);
    }
}
function readPlainScalar(state, nodeIndent, withinFlowCollection) {
    var preceding, following, captureStart, captureEnd, hasPendingContent, _line, _lineStart, _lineIndent, _kind = state.kind, _result = state.result, ch;
    ch = state.input.charCodeAt(state.position);
    if (is_WS_OR_EOL(ch) || is_FLOW_INDICATOR(ch) || ch === 0x23 /* # */  || ch === 0x26 /* & */  || ch === 0x2A /* * */  || ch === 0x21 /* ! */  || ch === 0x7C /* | */  || ch === 0x3E /* > */  || ch === 0x27 /* ' */  || ch === 0x22 /* " */  || ch === 0x25 /* % */  || ch === 0x40 /* @ */  || ch === 0x60 /* ` */ ) {
        return false;
    }
    if (ch === 0x3F /* ? */  || ch === 0x2D /* - */ ) {
        following = state.input.charCodeAt(state.position + 1);
        if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
            return false;
        }
    }
    state.kind = "scalar";
    state.result = "";
    captureStart = captureEnd = state.position;
    hasPendingContent = false;
    while(ch !== 0){
        if (ch === 0x3A /* : */ ) {
            following = state.input.charCodeAt(state.position + 1);
            if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
                break;
            }
        } else if (ch === 0x23 /* # */ ) {
            preceding = state.input.charCodeAt(state.position - 1);
            if (is_WS_OR_EOL(preceding)) {
                break;
            }
        } else if (state.position === state.lineStart && testDocumentSeparator(state) || withinFlowCollection && is_FLOW_INDICATOR(ch)) {
            break;
        } else if (is_EOL(ch)) {
            _line = state.line;
            _lineStart = state.lineStart;
            _lineIndent = state.lineIndent;
            skipSeparationSpace(state, false, -1);
            if (state.lineIndent >= nodeIndent) {
                hasPendingContent = true;
                ch = state.input.charCodeAt(state.position);
                continue;
            } else {
                state.position = captureEnd;
                state.line = _line;
                state.lineStart = _lineStart;
                state.lineIndent = _lineIndent;
                break;
            }
        }
        if (hasPendingContent) {
            captureSegment(state, captureStart, captureEnd, false);
            writeFoldedLines(state, state.line - _line);
            captureStart = captureEnd = state.position;
            hasPendingContent = false;
        }
        if (!is_WHITE_SPACE(ch)) {
            captureEnd = state.position + 1;
        }
        ch = state.input.charCodeAt(++state.position);
    }
    captureSegment(state, captureStart, captureEnd, false);
    if (state.result) {
        return true;
    }
    state.kind = _kind;
    state.result = _result;
    return false;
}
function readSingleQuotedScalar(state, nodeIndent) {
    var ch, captureStart, captureEnd;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 0x27 /* ' */ ) {
        return false;
    }
    state.kind = "scalar";
    state.result = "";
    state.position++;
    captureStart = captureEnd = state.position;
    while((ch = state.input.charCodeAt(state.position)) !== 0){
        if (ch === 0x27 /* ' */ ) {
            captureSegment(state, captureStart, state.position, true);
            ch = state.input.charCodeAt(++state.position);
            if (ch === 0x27 /* ' */ ) {
                captureStart = state.position;
                state.position++;
                captureEnd = state.position;
            } else {
                return true;
            }
        } else if (is_EOL(ch)) {
            captureSegment(state, captureStart, captureEnd, true);
            writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
            captureStart = captureEnd = state.position;
        } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
            throwError(state, "unexpected end of the document within a single quoted scalar");
        } else {
            state.position++;
            captureEnd = state.position;
        }
    }
    throwError(state, "unexpected end of the stream within a single quoted scalar");
}
function readDoubleQuotedScalar(state, nodeIndent) {
    var captureStart, captureEnd, hexLength, hexResult, tmp, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 0x22 /* " */ ) {
        return false;
    }
    state.kind = "scalar";
    state.result = "";
    state.position++;
    captureStart = captureEnd = state.position;
    while((ch = state.input.charCodeAt(state.position)) !== 0){
        if (ch === 0x22 /* " */ ) {
            captureSegment(state, captureStart, state.position, true);
            state.position++;
            return true;
        } else if (ch === 0x5C /* \ */ ) {
            captureSegment(state, captureStart, state.position, true);
            ch = state.input.charCodeAt(++state.position);
            if (is_EOL(ch)) {
                skipSeparationSpace(state, false, nodeIndent);
            // TODO: rework to inline fn with no type cast?
            } else if (ch < 256 && simpleEscapeCheck[ch]) {
                state.result += simpleEscapeMap[ch];
                state.position++;
            } else if ((tmp = escapedHexLen(ch)) > 0) {
                hexLength = tmp;
                hexResult = 0;
                for(; hexLength > 0; hexLength--){
                    ch = state.input.charCodeAt(++state.position);
                    if ((tmp = fromHexCode(ch)) >= 0) {
                        hexResult = (hexResult << 4) + tmp;
                    } else {
                        throwError(state, "expected hexadecimal character");
                    }
                }
                state.result += charFromCodepoint(hexResult);
                state.position++;
            } else {
                throwError(state, "unknown escape sequence");
            }
            captureStart = captureEnd = state.position;
        } else if (is_EOL(ch)) {
            captureSegment(state, captureStart, captureEnd, true);
            writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
            captureStart = captureEnd = state.position;
        } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
            throwError(state, "unexpected end of the document within a double quoted scalar");
        } else {
            state.position++;
            captureEnd = state.position;
        }
    }
    throwError(state, "unexpected end of the stream within a double quoted scalar");
}
function readFlowCollection(state, nodeIndent) {
    var readNext = true, _line, _lineStart, _pos, _tag = state.tag, _result, _anchor = state.anchor, following, terminator, isPair, isExplicitPair, isMapping, overridableKeys = Object.create(null), keyNode, keyTag, valueNode, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch === 0x5B /* [ */ ) {
        terminator = 0x5D; /* ] */ 
        isMapping = false;
        _result = [];
    } else if (ch === 0x7B /* { */ ) {
        terminator = 0x7D; /* } */ 
        isMapping = true;
        _result = {};
    } else {
        return false;
    }
    if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
    }
    ch = state.input.charCodeAt(++state.position);
    while(ch !== 0){
        skipSeparationSpace(state, true, nodeIndent);
        ch = state.input.charCodeAt(state.position);
        if (ch === terminator) {
            state.position++;
            state.tag = _tag;
            state.anchor = _anchor;
            state.kind = isMapping ? "mapping" : "sequence";
            state.result = _result;
            return true;
        } else if (!readNext) {
            throwError(state, "missed comma between flow collection entries");
        } else if (ch === 0x2C /* , */ ) {
            // "flow collection entries can never be completely empty", as per YAML 1.2, section 7.4
            throwError(state, "expected the node content, but found ','");
        }
        keyTag = keyNode = valueNode = null;
        isPair = isExplicitPair = false;
        if (ch === 0x3F /* ? */ ) {
            following = state.input.charCodeAt(state.position + 1);
            if (is_WS_OR_EOL(following)) {
                isPair = isExplicitPair = true;
                state.position++;
                skipSeparationSpace(state, true, nodeIndent);
            }
        }
        _line = state.line; // Save the current line.
        _lineStart = state.lineStart;
        _pos = state.position;
        composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
        keyTag = state.tag;
        keyNode = state.result;
        skipSeparationSpace(state, true, nodeIndent);
        ch = state.input.charCodeAt(state.position);
        if ((isExplicitPair || state.line === _line) && ch === 0x3A /* : */ ) {
            isPair = true;
            ch = state.input.charCodeAt(++state.position);
            skipSeparationSpace(state, true, nodeIndent);
            composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
            valueNode = state.result;
        }
        if (isMapping) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos);
        } else if (isPair) {
            _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos));
        } else {
            _result.push(keyNode);
        }
        skipSeparationSpace(state, true, nodeIndent);
        ch = state.input.charCodeAt(state.position);
        if (ch === 0x2C /* , */ ) {
            readNext = true;
            ch = state.input.charCodeAt(++state.position);
        } else {
            readNext = false;
        }
    }
    throwError(state, "unexpected end of the stream within a flow collection");
}
function readBlockScalar(state, nodeIndent) {
    var captureStart, folding, chomping = CHOMPING_CLIP, didReadContent = false, detectedIndent = false, textIndent = nodeIndent, emptyLines = 0, atMoreIndented = false, tmp, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch === 0x7C /* | */ ) {
        folding = false;
    } else if (ch === 0x3E /* > */ ) {
        folding = true;
    } else {
        return false;
    }
    state.kind = "scalar";
    state.result = "";
    while(ch !== 0){
        ch = state.input.charCodeAt(++state.position);
        if (ch === 0x2B /* + */  || ch === 0x2D /* - */ ) {
            if (CHOMPING_CLIP === chomping) {
                chomping = ch === 0x2B /* + */  ? CHOMPING_KEEP : CHOMPING_STRIP;
            } else {
                throwError(state, "repeat of a chomping mode identifier");
            }
        } else if ((tmp = fromDecimalCode(ch)) >= 0) {
            if (tmp === 0) {
                throwError(state, "bad explicit indentation width of a block scalar; it cannot be less than one");
            } else if (!detectedIndent) {
                textIndent = nodeIndent + tmp - 1;
                detectedIndent = true;
            } else {
                throwError(state, "repeat of an indentation width identifier");
            }
        } else {
            break;
        }
    }
    if (is_WHITE_SPACE(ch)) {
        do {
            ch = state.input.charCodeAt(++state.position);
        }while (is_WHITE_SPACE(ch));
        if (ch === 0x23 /* # */ ) {
            do {
                ch = state.input.charCodeAt(++state.position);
            }while (!is_EOL(ch) && ch !== 0);
        }
    }
    while(ch !== 0){
        readLineBreak(state);
        state.lineIndent = 0;
        ch = state.input.charCodeAt(state.position);
        while((!detectedIndent || state.lineIndent < textIndent) && ch === 0x20 /* Space */ ){
            state.lineIndent++;
            ch = state.input.charCodeAt(++state.position);
        }
        if (!detectedIndent && state.lineIndent > textIndent) {
            textIndent = state.lineIndent;
        }
        if (is_EOL(ch)) {
            emptyLines++;
            continue;
        }
        // End of the scalar.
        if (state.lineIndent < textIndent) {
            // Perform the chomping.
            if (chomping === CHOMPING_KEEP) {
                state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
            } else if (chomping === CHOMPING_CLIP) {
                if (didReadContent) {
                    state.result += "\n";
                }
            }
            break;
        }
        // Folded style: use fancy rules to handle line breaks.
        if (folding) {
            // Lines starting with white space characters (more-indented lines) are not folded.
            if (is_WHITE_SPACE(ch)) {
                atMoreIndented = true;
                // except for the first content line (cf. Example 8.1)
                state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
            // End of more-indented block.
            } else if (atMoreIndented) {
                atMoreIndented = false;
                state.result += common.repeat("\n", emptyLines + 1);
            // Just one line break - perceive as the same line.
            } else if (emptyLines === 0) {
                if (didReadContent) {
                    state.result += " ";
                }
            // Several line breaks - perceive as different lines.
            } else {
                state.result += common.repeat("\n", emptyLines);
            }
        // Literal style: just add exact number of line breaks between content lines.
        } else {
            // Keep all line breaks except the header line break.
            state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
        }
        didReadContent = true;
        detectedIndent = true;
        emptyLines = 0;
        captureStart = state.position;
        while(!is_EOL(ch) && ch !== 0){
            ch = state.input.charCodeAt(++state.position);
        }
        captureSegment(state, captureStart, state.position, false);
    }
    return true;
}
function readBlockSequence(state, nodeIndent) {
    var _line, _tag = state.tag, _anchor = state.anchor, _result = [], following, detected = false, ch;
    // there is a leading tab before this token, so it can't be a block sequence/mapping;
    // it can still be flow sequence/mapping or a scalar
    if (state.firstTabInLine !== -1) return false;
    if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
    }
    ch = state.input.charCodeAt(state.position);
    while(ch !== 0){
        if (state.firstTabInLine !== -1) {
            state.position = state.firstTabInLine;
            throwError(state, "tab characters must not be used in indentation");
        }
        if (ch !== 0x2D /* - */ ) {
            break;
        }
        following = state.input.charCodeAt(state.position + 1);
        if (!is_WS_OR_EOL(following)) {
            break;
        }
        detected = true;
        state.position++;
        if (skipSeparationSpace(state, true, -1)) {
            if (state.lineIndent <= nodeIndent) {
                _result.push(null);
                ch = state.input.charCodeAt(state.position);
                continue;
            }
        }
        _line = state.line;
        composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
        _result.push(state.result);
        skipSeparationSpace(state, true, -1);
        ch = state.input.charCodeAt(state.position);
        if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
            throwError(state, "bad indentation of a sequence entry");
        } else if (state.lineIndent < nodeIndent) {
            break;
        }
    }
    if (detected) {
        state.tag = _tag;
        state.anchor = _anchor;
        state.kind = "sequence";
        state.result = _result;
        return true;
    }
    return false;
}
function readBlockMapping(state, nodeIndent, flowIndent) {
    var following, allowCompact, _line, _keyLine, _keyLineStart, _keyPos, _tag = state.tag, _anchor = state.anchor, _result = {}, overridableKeys = Object.create(null), keyTag = null, keyNode = null, valueNode = null, atExplicitKey = false, detected = false, ch;
    // there is a leading tab before this token, so it can't be a block sequence/mapping;
    // it can still be flow sequence/mapping or a scalar
    if (state.firstTabInLine !== -1) return false;
    if (state.anchor !== null) {
        state.anchorMap[state.anchor] = _result;
    }
    ch = state.input.charCodeAt(state.position);
    while(ch !== 0){
        if (!atExplicitKey && state.firstTabInLine !== -1) {
            state.position = state.firstTabInLine;
            throwError(state, "tab characters must not be used in indentation");
        }
        following = state.input.charCodeAt(state.position + 1);
        _line = state.line; // Save the current line.
        //
        // Explicit notation case. There are two separate blocks:
        // first for the key (denoted by "?") and second for the value (denoted by ":")
        //
        if ((ch === 0x3F /* ? */  || ch === 0x3A /* : */ ) && is_WS_OR_EOL(following)) {
            if (ch === 0x3F /* ? */ ) {
                if (atExplicitKey) {
                    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
                    keyTag = keyNode = valueNode = null;
                }
                detected = true;
                atExplicitKey = true;
                allowCompact = true;
            } else if (atExplicitKey) {
                // i.e. 0x3A/* : */ === character after the explicit key.
                atExplicitKey = false;
                allowCompact = true;
            } else {
                throwError(state, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line");
            }
            state.position += 1;
            ch = following;
        //
        // Implicit notation case. Flow-style node as the key first, then ":", and the value.
        //
        } else {
            _keyLine = state.line;
            _keyLineStart = state.lineStart;
            _keyPos = state.position;
            if (!composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
                break;
            }
            if (state.line === _line) {
                ch = state.input.charCodeAt(state.position);
                while(is_WHITE_SPACE(ch)){
                    ch = state.input.charCodeAt(++state.position);
                }
                if (ch === 0x3A /* : */ ) {
                    ch = state.input.charCodeAt(++state.position);
                    if (!is_WS_OR_EOL(ch)) {
                        throwError(state, "a whitespace character is expected after the key-value separator within a block mapping");
                    }
                    if (atExplicitKey) {
                        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
                        keyTag = keyNode = valueNode = null;
                    }
                    detected = true;
                    atExplicitKey = false;
                    allowCompact = false;
                    keyTag = state.tag;
                    keyNode = state.result;
                } else if (detected) {
                    throwError(state, "can not read an implicit mapping pair; a colon is missed");
                } else {
                    state.tag = _tag;
                    state.anchor = _anchor;
                    return true; // Keep the result of `composeNode`.
                }
            } else if (detected) {
                throwError(state, "can not read a block mapping entry; a multiline key may not be an implicit key");
            } else {
                state.tag = _tag;
                state.anchor = _anchor;
                return true; // Keep the result of `composeNode`.
            }
        }
        //
        // Common reading code for both explicit and implicit notations.
        //
        if (state.line === _line || state.lineIndent > nodeIndent) {
            if (atExplicitKey) {
                _keyLine = state.line;
                _keyLineStart = state.lineStart;
                _keyPos = state.position;
            }
            if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
                if (atExplicitKey) {
                    keyNode = state.result;
                } else {
                    valueNode = state.result;
                }
            }
            if (!atExplicitKey) {
                storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _keyLine, _keyLineStart, _keyPos);
                keyTag = keyNode = valueNode = null;
            }
            skipSeparationSpace(state, true, -1);
            ch = state.input.charCodeAt(state.position);
        }
        if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
            throwError(state, "bad indentation of a mapping entry");
        } else if (state.lineIndent < nodeIndent) {
            break;
        }
    }
    //
    // Epilogue.
    //
    // Special case: last mapping's node contains only the key in explicit notation.
    if (atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
    }
    // Expose the resulting mapping.
    if (detected) {
        state.tag = _tag;
        state.anchor = _anchor;
        state.kind = "mapping";
        state.result = _result;
    }
    return detected;
}
function readTagProperty(state) {
    var _position, isVerbatim = false, isNamed = false, tagHandle, tagName, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 0x21 /* ! */ ) return false;
    if (state.tag !== null) {
        throwError(state, "duplication of a tag property");
    }
    ch = state.input.charCodeAt(++state.position);
    if (ch === 0x3C /* < */ ) {
        isVerbatim = true;
        ch = state.input.charCodeAt(++state.position);
    } else if (ch === 0x21 /* ! */ ) {
        isNamed = true;
        tagHandle = "!!";
        ch = state.input.charCodeAt(++state.position);
    } else {
        tagHandle = "!";
    }
    _position = state.position;
    if (isVerbatim) {
        do {
            ch = state.input.charCodeAt(++state.position);
        }while (ch !== 0 && ch !== 0x3E /* > */ );
        if (state.position < state.length) {
            tagName = state.input.slice(_position, state.position);
            ch = state.input.charCodeAt(++state.position);
        } else {
            throwError(state, "unexpected end of the stream within a verbatim tag");
        }
    } else {
        while(ch !== 0 && !is_WS_OR_EOL(ch)){
            if (ch === 0x21 /* ! */ ) {
                if (!isNamed) {
                    tagHandle = state.input.slice(_position - 1, state.position + 1);
                    if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
                        throwError(state, "named tag handle cannot contain such characters");
                    }
                    isNamed = true;
                    _position = state.position + 1;
                } else {
                    throwError(state, "tag suffix cannot contain exclamation marks");
                }
            }
            ch = state.input.charCodeAt(++state.position);
        }
        tagName = state.input.slice(_position, state.position);
        if (PATTERN_FLOW_INDICATORS.test(tagName)) {
            throwError(state, "tag suffix cannot contain flow indicator characters");
        }
    }
    if (tagName && !PATTERN_TAG_URI.test(tagName)) {
        throwError(state, "tag name cannot contain such characters: " + tagName);
    }
    try {
        tagName = decodeURIComponent(tagName);
    } catch (err) {
        throwError(state, "tag name is malformed: " + tagName);
    }
    if (isVerbatim) {
        state.tag = tagName;
    } else if (_hasOwnProperty$1.call(state.tagMap, tagHandle)) {
        state.tag = state.tagMap[tagHandle] + tagName;
    } else if (tagHandle === "!") {
        state.tag = "!" + tagName;
    } else if (tagHandle === "!!") {
        state.tag = "tag:yaml.org,2002:" + tagName;
    } else {
        throwError(state, 'undeclared tag handle "' + tagHandle + '"');
    }
    return true;
}
function readAnchorProperty(state) {
    var _position, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 0x26 /* & */ ) return false;
    if (state.anchor !== null) {
        throwError(state, "duplication of an anchor property");
    }
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;
    while(ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)){
        ch = state.input.charCodeAt(++state.position);
    }
    if (state.position === _position) {
        throwError(state, "name of an anchor node must contain at least one character");
    }
    state.anchor = state.input.slice(_position, state.position);
    return true;
}
function readAlias(state) {
    var _position, alias, ch;
    ch = state.input.charCodeAt(state.position);
    if (ch !== 0x2A /* * */ ) return false;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;
    while(ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)){
        ch = state.input.charCodeAt(++state.position);
    }
    if (state.position === _position) {
        throwError(state, "name of an alias node must contain at least one character");
    }
    alias = state.input.slice(_position, state.position);
    if (!_hasOwnProperty$1.call(state.anchorMap, alias)) {
        throwError(state, 'unidentified alias "' + alias + '"');
    }
    state.result = state.anchorMap[alias];
    skipSeparationSpace(state, true, -1);
    return true;
}
function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
    var allowBlockStyles, allowBlockScalars, allowBlockCollections, indentStatus = 1, atNewLine = false, hasContent = false, typeIndex, typeQuantity, typeList, type, flowIndent, blockIndent;
    if (state.listener !== null) {
        state.listener("open", state);
    }
    state.tag = null;
    state.anchor = null;
    state.kind = null;
    state.result = null;
    allowBlockStyles = allowBlockScalars = allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext;
    if (allowToSeek) {
        if (skipSeparationSpace(state, true, -1)) {
            atNewLine = true;
            if (state.lineIndent > parentIndent) {
                indentStatus = 1;
            } else if (state.lineIndent === parentIndent) {
                indentStatus = 0;
            } else if (state.lineIndent < parentIndent) {
                indentStatus = -1;
            }
        }
    }
    if (indentStatus === 1) {
        while(readTagProperty(state) || readAnchorProperty(state)){
            if (skipSeparationSpace(state, true, -1)) {
                atNewLine = true;
                allowBlockCollections = allowBlockStyles;
                if (state.lineIndent > parentIndent) {
                    indentStatus = 1;
                } else if (state.lineIndent === parentIndent) {
                    indentStatus = 0;
                } else if (state.lineIndent < parentIndent) {
                    indentStatus = -1;
                }
            } else {
                allowBlockCollections = false;
            }
        }
    }
    if (allowBlockCollections) {
        allowBlockCollections = atNewLine || allowCompact;
    }
    if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
        if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
            flowIndent = parentIndent;
        } else {
            flowIndent = parentIndent + 1;
        }
        blockIndent = state.position - state.lineStart;
        if (indentStatus === 1) {
            if (allowBlockCollections && (readBlockSequence(state, blockIndent) || readBlockMapping(state, blockIndent, flowIndent)) || readFlowCollection(state, flowIndent)) {
                hasContent = true;
            } else {
                if (allowBlockScalars && readBlockScalar(state, flowIndent) || readSingleQuotedScalar(state, flowIndent) || readDoubleQuotedScalar(state, flowIndent)) {
                    hasContent = true;
                } else if (readAlias(state)) {
                    hasContent = true;
                    if (state.tag !== null || state.anchor !== null) {
                        throwError(state, "alias node should not have any properties");
                    }
                } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
                    hasContent = true;
                    if (state.tag === null) {
                        state.tag = "?";
                    }
                }
                if (state.anchor !== null) {
                    state.anchorMap[state.anchor] = state.result;
                }
            }
        } else if (indentStatus === 0) {
            // Special case: block sequences are allowed to have same indentation level as the parent.
            // http://www.yaml.org/spec/1.2/spec.html#id2799784
            hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
        }
    }
    if (state.tag === null) {
        if (state.anchor !== null) {
            state.anchorMap[state.anchor] = state.result;
        }
    } else if (state.tag === "?") {
        // Implicit resolving is not allowed for non-scalar types, and '?'
        // non-specific tag is only automatically assigned to plain scalars.
        //
        // We only need to check kind conformity in case user explicitly assigns '?'
        // tag, for example like this: "!<?> [0]"
        //
        if (state.result !== null && state.kind !== "scalar") {
            throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
        }
        for(typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1){
            type = state.implicitTypes[typeIndex];
            if (type.resolve(state.result)) {
                state.result = type.construct(state.result);
                state.tag = type.tag;
                if (state.anchor !== null) {
                    state.anchorMap[state.anchor] = state.result;
                }
                break;
            }
        }
    } else if (state.tag !== "!") {
        if (_hasOwnProperty$1.call(state.typeMap[state.kind || "fallback"], state.tag)) {
            type = state.typeMap[state.kind || "fallback"][state.tag];
        } else {
            // looking for multi type
            type = null;
            typeList = state.typeMap.multi[state.kind || "fallback"];
            for(typeIndex = 0, typeQuantity = typeList.length; typeIndex < typeQuantity; typeIndex += 1){
                if (state.tag.slice(0, typeList[typeIndex].tag.length) === typeList[typeIndex].tag) {
                    type = typeList[typeIndex];
                    break;
                }
            }
        }
        if (!type) {
            throwError(state, "unknown tag !<" + state.tag + ">");
        }
        if (state.result !== null && type.kind !== state.kind) {
            throwError(state, "unacceptable node kind for !<" + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"');
        }
        if (!type.resolve(state.result, state.tag)) {
            throwError(state, "cannot resolve a node with !<" + state.tag + "> explicit tag");
        } else {
            state.result = type.construct(state.result, state.tag);
            if (state.anchor !== null) {
                state.anchorMap[state.anchor] = state.result;
            }
        }
    }
    if (state.listener !== null) {
        state.listener("close", state);
    }
    return state.tag !== null || state.anchor !== null || hasContent;
}
function readDocument(state) {
    var documentStart = state.position, _position, directiveName, directiveArgs, hasDirectives = false, ch;
    state.version = null;
    state.checkLineBreaks = state.legacy;
    state.tagMap = Object.create(null);
    state.anchorMap = Object.create(null);
    while((ch = state.input.charCodeAt(state.position)) !== 0){
        skipSeparationSpace(state, true, -1);
        ch = state.input.charCodeAt(state.position);
        if (state.lineIndent > 0 || ch !== 0x25 /* % */ ) {
            break;
        }
        hasDirectives = true;
        ch = state.input.charCodeAt(++state.position);
        _position = state.position;
        while(ch !== 0 && !is_WS_OR_EOL(ch)){
            ch = state.input.charCodeAt(++state.position);
        }
        directiveName = state.input.slice(_position, state.position);
        directiveArgs = [];
        if (directiveName.length < 1) {
            throwError(state, "directive name must not be less than one character in length");
        }
        while(ch !== 0){
            while(is_WHITE_SPACE(ch)){
                ch = state.input.charCodeAt(++state.position);
            }
            if (ch === 0x23 /* # */ ) {
                do {
                    ch = state.input.charCodeAt(++state.position);
                }while (ch !== 0 && !is_EOL(ch));
                break;
            }
            if (is_EOL(ch)) break;
            _position = state.position;
            while(ch !== 0 && !is_WS_OR_EOL(ch)){
                ch = state.input.charCodeAt(++state.position);
            }
            directiveArgs.push(state.input.slice(_position, state.position));
        }
        if (ch !== 0) readLineBreak(state);
        if (_hasOwnProperty$1.call(directiveHandlers, directiveName)) {
            directiveHandlers[directiveName](state, directiveName, directiveArgs);
        } else {
            throwWarning(state, 'unknown document directive "' + directiveName + '"');
        }
    }
    skipSeparationSpace(state, true, -1);
    if (state.lineIndent === 0 && state.input.charCodeAt(state.position) === 0x2D /* - */  && state.input.charCodeAt(state.position + 1) === 0x2D /* - */  && state.input.charCodeAt(state.position + 2) === 0x2D /* - */ ) {
        state.position += 3;
        skipSeparationSpace(state, true, -1);
    } else if (hasDirectives) {
        throwError(state, "directives end mark is expected");
    }
    composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
    skipSeparationSpace(state, true, -1);
    if (state.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
        throwWarning(state, "non-ASCII line breaks are interpreted as content");
    }
    state.documents.push(state.result);
    if (state.position === state.lineStart && testDocumentSeparator(state)) {
        if (state.input.charCodeAt(state.position) === 0x2E /* . */ ) {
            state.position += 3;
            skipSeparationSpace(state, true, -1);
        }
        return;
    }
    if (state.position < state.length - 1) {
        throwError(state, "end of the stream or a document separator is expected");
    } else {
        return;
    }
}
function loadDocuments(input, options) {
    input = String(input);
    options = options || {};
    if (input.length !== 0) {
        // Add tailing `\n` if not exists
        if (input.charCodeAt(input.length - 1) !== 0x0A /* LF */  && input.charCodeAt(input.length - 1) !== 0x0D /* CR */ ) {
            input += "\n";
        }
        // Strip BOM
        if (input.charCodeAt(0) === 0xFEFF) {
            input = input.slice(1);
        }
    }
    var state = new State$1(input, options);
    var nullpos = input.indexOf("\x00");
    if (nullpos !== -1) {
        state.position = nullpos;
        throwError(state, "null byte is not allowed in input");
    }
    // Use 0 as string terminator. That significantly simplifies bounds check.
    state.input += "\x00";
    while(state.input.charCodeAt(state.position) === 0x20 /* Space */ ){
        state.lineIndent += 1;
        state.position += 1;
    }
    while(state.position < state.length - 1){
        readDocument(state);
    }
    return state.documents;
}
function loadAll$1(input, iterator, options) {
    if (iterator !== null && typeof iterator === "object" && typeof options === "undefined") {
        options = iterator;
        iterator = null;
    }
    var documents = loadDocuments(input, options);
    if (typeof iterator !== "function") {
        return documents;
    }
    for(var index = 0, length = documents.length; index < length; index += 1){
        iterator(documents[index]);
    }
}
function load$1(input, options) {
    var documents = loadDocuments(input, options);
    if (documents.length === 0) {
        /*eslint-disable no-undefined*/ return undefined;
    } else if (documents.length === 1) {
        return documents[0];
    }
    throw new exception("expected a single document in the stream, but found more");
}
var loadAll_1 = loadAll$1;
var load_1 = load$1;
var loader = {
    loadAll: loadAll_1,
    load: load_1
};
/*eslint-disable no-use-before-define*/ var _toString = Object.prototype.toString;
var _hasOwnProperty = Object.prototype.hasOwnProperty;
var CHAR_BOM = 0xFEFF;
var CHAR_TAB = 0x09; /* Tab */ 
var CHAR_LINE_FEED = 0x0A; /* LF */ 
var CHAR_CARRIAGE_RETURN = 0x0D; /* CR */ 
var CHAR_SPACE = 0x20; /* Space */ 
var CHAR_EXCLAMATION = 0x21; /* ! */ 
var CHAR_DOUBLE_QUOTE = 0x22; /* " */ 
var CHAR_SHARP = 0x23; /* # */ 
var CHAR_PERCENT = 0x25; /* % */ 
var CHAR_AMPERSAND = 0x26; /* & */ 
var CHAR_SINGLE_QUOTE = 0x27; /* ' */ 
var CHAR_ASTERISK = 0x2A; /* * */ 
var CHAR_COMMA = 0x2C; /* , */ 
var CHAR_MINUS = 0x2D; /* - */ 
var CHAR_COLON = 0x3A; /* : */ 
var CHAR_EQUALS = 0x3D; /* = */ 
var CHAR_GREATER_THAN = 0x3E; /* > */ 
var CHAR_QUESTION = 0x3F; /* ? */ 
var CHAR_COMMERCIAL_AT = 0x40; /* @ */ 
var CHAR_LEFT_SQUARE_BRACKET = 0x5B; /* [ */ 
var CHAR_RIGHT_SQUARE_BRACKET = 0x5D; /* ] */ 
var CHAR_GRAVE_ACCENT = 0x60; /* ` */ 
var CHAR_LEFT_CURLY_BRACKET = 0x7B; /* { */ 
var CHAR_VERTICAL_LINE = 0x7C; /* | */ 
var CHAR_RIGHT_CURLY_BRACKET = 0x7D; /* } */ 
var ESCAPE_SEQUENCES = {};
ESCAPE_SEQUENCES[0x00] = "\\0";
ESCAPE_SEQUENCES[0x07] = "\\a";
ESCAPE_SEQUENCES[0x08] = "\\b";
ESCAPE_SEQUENCES[0x09] = "\\t";
ESCAPE_SEQUENCES[0x0A] = "\\n";
ESCAPE_SEQUENCES[0x0B] = "\\v";
ESCAPE_SEQUENCES[0x0C] = "\\f";
ESCAPE_SEQUENCES[0x0D] = "\\r";
ESCAPE_SEQUENCES[0x1B] = "\\e";
ESCAPE_SEQUENCES[0x22] = '\\"';
ESCAPE_SEQUENCES[0x5C] = "\\\\";
ESCAPE_SEQUENCES[0x85] = "\\N";
ESCAPE_SEQUENCES[0xA0] = "\\_";
ESCAPE_SEQUENCES[0x2028] = "\\L";
ESCAPE_SEQUENCES[0x2029] = "\\P";
var DEPRECATED_BOOLEANS_SYNTAX = [
    "y",
    "Y",
    "yes",
    "Yes",
    "YES",
    "on",
    "On",
    "ON",
    "n",
    "N",
    "no",
    "No",
    "NO",
    "off",
    "Off",
    "OFF"
];
var DEPRECATED_BASE60_SYNTAX = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function compileStyleMap(schema, map) {
    var result, keys, index, length, tag, style, type;
    if (map === null) return {};
    result = {};
    keys = Object.keys(map);
    for(index = 0, length = keys.length; index < length; index += 1){
        tag = keys[index];
        style = String(map[tag]);
        if (tag.slice(0, 2) === "!!") {
            tag = "tag:yaml.org,2002:" + tag.slice(2);
        }
        type = schema.compiledTypeMap["fallback"][tag];
        if (type && _hasOwnProperty.call(type.styleAliases, style)) {
            style = type.styleAliases[style];
        }
        result[tag] = style;
    }
    return result;
}
function encodeHex(character) {
    var string, handle, length;
    string = character.toString(16).toUpperCase();
    if (character <= 0xFF) {
        handle = "x";
        length = 2;
    } else if (character <= 0xFFFF) {
        handle = "u";
        length = 4;
    } else if (character <= 0xFFFFFFFF) {
        handle = "U";
        length = 8;
    } else {
        throw new exception("code point within a string may not be greater than 0xFFFFFFFF");
    }
    return "\\" + handle + common.repeat("0", length - string.length) + string;
}
var QUOTING_TYPE_SINGLE = 1, QUOTING_TYPE_DOUBLE = 2;
function State(options) {
    this.schema = options["schema"] || _default;
    this.indent = Math.max(1, options["indent"] || 2);
    this.noArrayIndent = options["noArrayIndent"] || false;
    this.skipInvalid = options["skipInvalid"] || false;
    this.flowLevel = common.isNothing(options["flowLevel"]) ? -1 : options["flowLevel"];
    this.styleMap = compileStyleMap(this.schema, options["styles"] || null);
    this.sortKeys = options["sortKeys"] || false;
    this.lineWidth = options["lineWidth"] || 80;
    this.noRefs = options["noRefs"] || false;
    this.noCompatMode = options["noCompatMode"] || false;
    this.condenseFlow = options["condenseFlow"] || false;
    this.quotingType = options["quotingType"] === '"' ? QUOTING_TYPE_DOUBLE : QUOTING_TYPE_SINGLE;
    this.forceQuotes = options["forceQuotes"] || false;
    this.replacer = typeof options["replacer"] === "function" ? options["replacer"] : null;
    this.implicitTypes = this.schema.compiledImplicit;
    this.explicitTypes = this.schema.compiledExplicit;
    this.tag = null;
    this.result = "";
    this.duplicates = [];
    this.usedDuplicates = null;
}
// Indents every line in a string. Empty lines (\n only) are not indented.
function indentString(string, spaces) {
    var ind = common.repeat(" ", spaces), position = 0, next = -1, result = "", line, length = string.length;
    while(position < length){
        next = string.indexOf("\n", position);
        if (next === -1) {
            line = string.slice(position);
            position = length;
        } else {
            line = string.slice(position, next + 1);
            position = next + 1;
        }
        if (line.length && line !== "\n") result += ind;
        result += line;
    }
    return result;
}
function generateNextLine(state, level) {
    return "\n" + common.repeat(" ", state.indent * level);
}
function testImplicitResolving(state, str) {
    var index, length, type;
    for(index = 0, length = state.implicitTypes.length; index < length; index += 1){
        type = state.implicitTypes[index];
        if (type.resolve(str)) {
            return true;
        }
    }
    return false;
}
// [33] s-white ::= s-space | s-tab
function isWhitespace(c) {
    return c === CHAR_SPACE || c === CHAR_TAB;
}
// Returns true if the character can be printed without escaping.
// From YAML 1.2: "any allowed characters known to be non-printable
// should also be escaped. [However,] This isn’t mandatory"
// Derived from nb-char - \t - #x85 - #xA0 - #x2028 - #x2029.
function isPrintable(c) {
    return 0x00020 <= c && c <= 0x00007E || 0x000A1 <= c && c <= 0x00D7FF && c !== 0x2028 && c !== 0x2029 || 0x0E000 <= c && c <= 0x00FFFD && c !== CHAR_BOM || 0x10000 <= c && c <= 0x10FFFF;
}
// [34] ns-char ::= nb-char - s-white
// [27] nb-char ::= c-printable - b-char - c-byte-order-mark
// [26] b-char  ::= b-line-feed | b-carriage-return
// Including s-white (for some reason, examples doesn't match specs in this aspect)
// ns-char ::= c-printable - b-line-feed - b-carriage-return - c-byte-order-mark
function isNsCharOrWhitespace(c) {
    return isPrintable(c) && c !== CHAR_BOM && c !== CHAR_CARRIAGE_RETURN && c !== CHAR_LINE_FEED;
}
// [127]  ns-plain-safe(c) ::= c = flow-out  ⇒ ns-plain-safe-out
//                             c = flow-in   ⇒ ns-plain-safe-in
//                             c = block-key ⇒ ns-plain-safe-out
//                             c = flow-key  ⇒ ns-plain-safe-in
// [128] ns-plain-safe-out ::= ns-char
// [129]  ns-plain-safe-in ::= ns-char - c-flow-indicator
// [130]  ns-plain-char(c) ::=  ( ns-plain-safe(c) - “:” - “#” )
//                            | ( /* An ns-char preceding */ “#” )
//                            | ( “:” /* Followed by an ns-plain-safe(c) */ )
function isPlainSafe(c, prev, inblock) {
    var cIsNsCharOrWhitespace = isNsCharOrWhitespace(c);
    var cIsNsChar = cIsNsCharOrWhitespace && !isWhitespace(c);
    return(// ns-plain-safe
    (inblock ? cIsNsCharOrWhitespace : cIsNsCharOrWhitespace && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET) && c !== CHAR_SHARP // false on '#'
     && !(prev === CHAR_COLON && !cIsNsChar // false on ': '
    ) || isNsCharOrWhitespace(prev) && !isWhitespace(prev) && c === CHAR_SHARP // change to true on '[^ ]#'
     || prev === CHAR_COLON && cIsNsChar); // change to true on ':[^ ]'
}
// Simplified test for values allowed as the first character in plain style.
function isPlainSafeFirst(c) {
    // Uses a subset of ns-char - c-indicator
    // where ns-char = nb-char - s-white.
    // No support of ( ( “?” | “:” | “-” ) /* Followed by an ns-plain-safe(c)) */ ) part
    return isPrintable(c) && c !== CHAR_BOM && !isWhitespace(c) // - s-white
     && c !== CHAR_MINUS && c !== CHAR_QUESTION && c !== CHAR_COLON && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_SHARP && c !== CHAR_AMPERSAND && c !== CHAR_ASTERISK && c !== CHAR_EXCLAMATION && c !== CHAR_VERTICAL_LINE && c !== CHAR_EQUALS && c !== CHAR_GREATER_THAN && c !== CHAR_SINGLE_QUOTE && c !== CHAR_DOUBLE_QUOTE && c !== CHAR_PERCENT && c !== CHAR_COMMERCIAL_AT && c !== CHAR_GRAVE_ACCENT;
}
// Simplified test for values allowed as the last character in plain style.
function isPlainSafeLast(c) {
    // just not whitespace or colon, it will be checked to be plain character later
    return !isWhitespace(c) && c !== CHAR_COLON;
}
// Same as 'string'.codePointAt(pos), but works in older browsers.
function codePointAt(string, pos) {
    var first = string.charCodeAt(pos), second;
    if (first >= 0xD800 && first <= 0xDBFF && pos + 1 < string.length) {
        second = string.charCodeAt(pos + 1);
        if (second >= 0xDC00 && second <= 0xDFFF) {
            // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
            return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
        }
    }
    return first;
}
// Determines whether block indentation indicator is required.
function needIndentIndicator(string) {
    var leadingSpaceRe = /^\n* /;
    return leadingSpaceRe.test(string);
}
var STYLE_PLAIN = 1, STYLE_SINGLE = 2, STYLE_LITERAL = 3, STYLE_FOLDED = 4, STYLE_DOUBLE = 5;
// Determines which scalar styles are possible and returns the preferred style.
// lineWidth = -1 => no limit.
// Pre-conditions: str.length > 0.
// Post-conditions:
//    STYLE_PLAIN or STYLE_SINGLE => no \n are in the string.
//    STYLE_LITERAL => no lines are suitable for folding (or lineWidth is -1).
//    STYLE_FOLDED => a line > lineWidth and can be folded (and lineWidth != -1).
function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType, quotingType, forceQuotes, inblock) {
    var i;
    var char = 0;
    var prevChar = null;
    var hasLineBreak = false;
    var hasFoldableLine = false; // only checked if shouldTrackWidth
    var shouldTrackWidth = lineWidth !== -1;
    var previousLineBreak = -1; // count the first line correctly
    var plain = isPlainSafeFirst(codePointAt(string, 0)) && isPlainSafeLast(codePointAt(string, string.length - 1));
    if (singleLineOnly || forceQuotes) {
        // Case: no block styles.
        // Check for disallowed characters to rule out plain and single.
        for(i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++){
            char = codePointAt(string, i);
            if (!isPrintable(char)) {
                return STYLE_DOUBLE;
            }
            plain = plain && isPlainSafe(char, prevChar, inblock);
            prevChar = char;
        }
    } else {
        // Case: block styles permitted.
        for(i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++){
            char = codePointAt(string, i);
            if (char === CHAR_LINE_FEED) {
                hasLineBreak = true;
                // Check if any line can be folded.
                if (shouldTrackWidth) {
                    hasFoldableLine = hasFoldableLine || // Foldable line = too long, and not more-indented.
                    i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ";
                    previousLineBreak = i;
                }
            } else if (!isPrintable(char)) {
                return STYLE_DOUBLE;
            }
            plain = plain && isPlainSafe(char, prevChar, inblock);
            prevChar = char;
        }
        // in case the end is missing a \n
        hasFoldableLine = hasFoldableLine || shouldTrackWidth && i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ";
    }
    // Although every style can represent \n without escaping, prefer block styles
    // for multiline, since they're more readable and they don't add empty lines.
    // Also prefer folding a super-long line.
    if (!hasLineBreak && !hasFoldableLine) {
        // Strings interpretable as another type have to be quoted;
        // e.g. the string 'true' vs. the boolean true.
        if (plain && !forceQuotes && !testAmbiguousType(string)) {
            return STYLE_PLAIN;
        }
        return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
    }
    // Edge case: block indentation indicator can only have one digit.
    if (indentPerLevel > 9 && needIndentIndicator(string)) {
        return STYLE_DOUBLE;
    }
    // At this point we know block styles are valid.
    // Prefer literal style unless we want to fold.
    if (!forceQuotes) {
        return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
    }
    return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
}
// Note: line breaking/folding is implemented for only the folded style.
// NB. We drop the last trailing newline (if any) of a returned block scalar
//  since the dumper adds its own newline. This always works:
//    • No ending newline => unaffected; already using strip "-" chomping.
//    • Ending newline    => removed then restored.
//  Importantly, this keeps the "+" chomp indicator from gaining an extra line.
function writeScalar(state, string, level, iskey, inblock) {
    state.dump = function() {
        if (string.length === 0) {
            return state.quotingType === QUOTING_TYPE_DOUBLE ? '""' : "''";
        }
        if (!state.noCompatMode) {
            if (DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1 || DEPRECATED_BASE60_SYNTAX.test(string)) {
                return state.quotingType === QUOTING_TYPE_DOUBLE ? '"' + string + '"' : "'" + string + "'";
            }
        }
        var indent = state.indent * Math.max(1, level); // no 0-indent scalars
        // As indentation gets deeper, let the width decrease monotonically
        // to the lower bound min(state.lineWidth, 40).
        // Note that this implies
        //  state.lineWidth ≤ 40 + state.indent: width is fixed at the lower bound.
        //  state.lineWidth > 40 + state.indent: width decreases until the lower bound.
        // This behaves better than a constant minimum width which disallows narrower options,
        // or an indent threshold which causes the width to suddenly increase.
        var lineWidth = state.lineWidth === -1 ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);
        // Without knowing if keys are implicit/explicit, assume implicit for safety.
        var singleLineOnly = iskey || state.flowLevel > -1 && level >= state.flowLevel;
        function testAmbiguity(string) {
            return testImplicitResolving(state, string);
        }
        switch(chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth, testAmbiguity, state.quotingType, state.forceQuotes && !iskey, inblock)){
            case STYLE_PLAIN:
                return string;
            case STYLE_SINGLE:
                return "'" + string.replace(/'/g, "''") + "'";
            case STYLE_LITERAL:
                return "|" + blockHeader(string, state.indent) + dropEndingNewline(indentString(string, indent));
            case STYLE_FOLDED:
                return ">" + blockHeader(string, state.indent) + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
            case STYLE_DOUBLE:
                return '"' + escapeString(string) + '"';
            default:
                throw new exception("impossible error: invalid scalar style");
        }
    }();
}
// Pre-conditions: string is valid for a block scalar, 1 <= indentPerLevel <= 9.
function blockHeader(string, indentPerLevel) {
    var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : "";
    // note the special case: the string '\n' counts as a "trailing" empty line.
    var clip = string[string.length - 1] === "\n";
    var keep = clip && (string[string.length - 2] === "\n" || string === "\n");
    var chomp = keep ? "+" : clip ? "" : "-";
    return indentIndicator + chomp + "\n";
}
// (See the note for writeScalar.)
function dropEndingNewline(string) {
    return string[string.length - 1] === "\n" ? string.slice(0, -1) : string;
}
// Note: a long line without a suitable break point will exceed the width limit.
// Pre-conditions: every char in str isPrintable, str.length > 0, width > 0.
function foldString(string, width) {
    // In folded style, $k$ consecutive newlines output as $k+1$ newlines—
    // unless they're before or after a more-indented line, or at the very
    // beginning or end, in which case $k$ maps to $k$.
    // Therefore, parse each chunk as newline(s) followed by a content line.
    var lineRe = /(\n+)([^\n]*)/g;
    // first line (possibly an empty line)
    var result = function() {
        var nextLF = string.indexOf("\n");
        nextLF = nextLF !== -1 ? nextLF : string.length;
        lineRe.lastIndex = nextLF;
        return foldLine(string.slice(0, nextLF), width);
    }();
    // If we haven't reached the first content line yet, don't add an extra \n.
    var prevMoreIndented = string[0] === "\n" || string[0] === " ";
    var moreIndented;
    // rest of the lines
    var match;
    while(match = lineRe.exec(string)){
        var prefix = match[1], line = match[2];
        moreIndented = line[0] === " ";
        result += prefix + (!prevMoreIndented && !moreIndented && line !== "" ? "\n" : "") + foldLine(line, width);
        prevMoreIndented = moreIndented;
    }
    return result;
}
// Greedy line breaking.
// Picks the longest line under the limit each time,
// otherwise settles for the shortest line over the limit.
// NB. More-indented lines *cannot* be folded, as that would add an extra \n.
function foldLine(line, width) {
    if (line === "" || line[0] === " ") return line;
    // Since a more-indented line adds a \n, breaks can't be followed by a space.
    var breakRe = / [^ ]/g; // note: the match index will always be <= length-2.
    var match;
    // start is an inclusive index. end, curr, and next are exclusive.
    var start = 0, end, curr = 0, next = 0;
    var result = "";
    // Invariants: 0 <= start <= length-1.
    //   0 <= curr <= next <= max(0, length-2). curr - start <= width.
    // Inside the loop:
    //   A match implies length >= 2, so curr and next are <= length-2.
    while(match = breakRe.exec(line)){
        next = match.index;
        // maintain invariant: curr - start <= width
        if (next - start > width) {
            end = curr > start ? curr : next; // derive end <= length-2
            result += "\n" + line.slice(start, end);
            // skip the space that was output as \n
            start = end + 1; // derive start <= length-1
        }
        curr = next;
    }
    // By the invariants, start <= length-1, so there is something left over.
    // It is either the whole string or a part starting from non-whitespace.
    result += "\n";
    // Insert a break if the remainder is too long and there is a break available.
    if (line.length - start > width && curr > start) {
        result += line.slice(start, curr) + "\n" + line.slice(curr + 1);
    } else {
        result += line.slice(start);
    }
    return result.slice(1); // drop extra \n joiner
}
// Escapes a double-quoted string.
function escapeString(string) {
    var result = "";
    var char = 0;
    var escapeSeq;
    for(var i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++){
        char = codePointAt(string, i);
        escapeSeq = ESCAPE_SEQUENCES[char];
        if (!escapeSeq && isPrintable(char)) {
            result += string[i];
            if (char >= 0x10000) result += string[i + 1];
        } else {
            result += escapeSeq || encodeHex(char);
        }
    }
    return result;
}
function writeFlowSequence(state, level, object) {
    var _result = "", _tag = state.tag, index, length, value;
    for(index = 0, length = object.length; index < length; index += 1){
        value = object[index];
        if (state.replacer) {
            value = state.replacer.call(object, String(index), value);
        }
        // Write only valid elements, put null instead of invalid elements.
        if (writeNode(state, level, value, false, false) || typeof value === "undefined" && writeNode(state, level, null, false, false)) {
            if (_result !== "") _result += "," + (!state.condenseFlow ? " " : "");
            _result += state.dump;
        }
    }
    state.tag = _tag;
    state.dump = "[" + _result + "]";
}
function writeBlockSequence(state, level, object, compact) {
    var _result = "", _tag = state.tag, index, length, value;
    for(index = 0, length = object.length; index < length; index += 1){
        value = object[index];
        if (state.replacer) {
            value = state.replacer.call(object, String(index), value);
        }
        // Write only valid elements, put null instead of invalid elements.
        if (writeNode(state, level + 1, value, true, true, false, true) || typeof value === "undefined" && writeNode(state, level + 1, null, true, true, false, true)) {
            if (!compact || _result !== "") {
                _result += generateNextLine(state, level);
            }
            if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
                _result += "-";
            } else {
                _result += "- ";
            }
            _result += state.dump;
        }
    }
    state.tag = _tag;
    state.dump = _result || "[]"; // Empty sequence if no valid values.
}
function writeFlowMapping(state, level, object) {
    var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, pairBuffer;
    for(index = 0, length = objectKeyList.length; index < length; index += 1){
        pairBuffer = "";
        if (_result !== "") pairBuffer += ", ";
        if (state.condenseFlow) pairBuffer += '"';
        objectKey = objectKeyList[index];
        objectValue = object[objectKey];
        if (state.replacer) {
            objectValue = state.replacer.call(object, objectKey, objectValue);
        }
        if (!writeNode(state, level, objectKey, false, false)) {
            continue; // Skip this pair because of invalid key;
        }
        if (state.dump.length > 1024) pairBuffer += "? ";
        pairBuffer += state.dump + (state.condenseFlow ? '"' : "") + ":" + (state.condenseFlow ? "" : " ");
        if (!writeNode(state, level, objectValue, false, false)) {
            continue; // Skip this pair because of invalid value.
        }
        pairBuffer += state.dump;
        // Both key and value are valid.
        _result += pairBuffer;
    }
    state.tag = _tag;
    state.dump = "{" + _result + "}";
}
function writeBlockMapping(state, level, object, compact) {
    var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, explicitPair, pairBuffer;
    // Allow sorting keys so that the output file is deterministic
    if (state.sortKeys === true) {
        // Default sorting
        objectKeyList.sort();
    } else if (typeof state.sortKeys === "function") {
        // Custom sort function
        objectKeyList.sort(state.sortKeys);
    } else if (state.sortKeys) {
        // Something is wrong
        throw new exception("sortKeys must be a boolean or a function");
    }
    for(index = 0, length = objectKeyList.length; index < length; index += 1){
        pairBuffer = "";
        if (!compact || _result !== "") {
            pairBuffer += generateNextLine(state, level);
        }
        objectKey = objectKeyList[index];
        objectValue = object[objectKey];
        if (state.replacer) {
            objectValue = state.replacer.call(object, objectKey, objectValue);
        }
        if (!writeNode(state, level + 1, objectKey, true, true, true)) {
            continue; // Skip this pair because of invalid key.
        }
        explicitPair = state.tag !== null && state.tag !== "?" || state.dump && state.dump.length > 1024;
        if (explicitPair) {
            if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
                pairBuffer += "?";
            } else {
                pairBuffer += "? ";
            }
        }
        pairBuffer += state.dump;
        if (explicitPair) {
            pairBuffer += generateNextLine(state, level);
        }
        if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
            continue; // Skip this pair because of invalid value.
        }
        if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
            pairBuffer += ":";
        } else {
            pairBuffer += ": ";
        }
        pairBuffer += state.dump;
        // Both key and value are valid.
        _result += pairBuffer;
    }
    state.tag = _tag;
    state.dump = _result || "{}"; // Empty mapping if no valid pairs.
}
function detectType(state, object, explicit) {
    var _result, typeList, index, length, type, style;
    typeList = explicit ? state.explicitTypes : state.implicitTypes;
    for(index = 0, length = typeList.length; index < length; index += 1){
        type = typeList[index];
        if ((type.instanceOf || type.predicate) && (!type.instanceOf || typeof object === "object" && object instanceof type.instanceOf) && (!type.predicate || type.predicate(object))) {
            if (explicit) {
                if (type.multi && type.representName) {
                    state.tag = type.representName(object);
                } else {
                    state.tag = type.tag;
                }
            } else {
                state.tag = "?";
            }
            if (type.represent) {
                style = state.styleMap[type.tag] || type.defaultStyle;
                if (_toString.call(type.represent) === "[object Function]") {
                    _result = type.represent(object, style);
                } else if (_hasOwnProperty.call(type.represent, style)) {
                    _result = type.represent[style](object, style);
                } else {
                    throw new exception("!<" + type.tag + '> tag resolver accepts not "' + style + '" style');
                }
                state.dump = _result;
            }
            return true;
        }
    }
    return false;
}
// Serializes `object` and writes it to global `result`.
// Returns true on success, or false on invalid object.
//
function writeNode(state, level, object, block, compact, iskey, isblockseq) {
    state.tag = null;
    state.dump = object;
    if (!detectType(state, object, false)) {
        detectType(state, object, true);
    }
    var type = _toString.call(state.dump);
    var inblock = block;
    var tagStr;
    if (block) {
        block = state.flowLevel < 0 || state.flowLevel > level;
    }
    var objectOrArray = type === "[object Object]" || type === "[object Array]", duplicateIndex, duplicate;
    if (objectOrArray) {
        duplicateIndex = state.duplicates.indexOf(object);
        duplicate = duplicateIndex !== -1;
    }
    if (state.tag !== null && state.tag !== "?" || duplicate || state.indent !== 2 && level > 0) {
        compact = false;
    }
    if (duplicate && state.usedDuplicates[duplicateIndex]) {
        state.dump = "*ref_" + duplicateIndex;
    } else {
        if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
            state.usedDuplicates[duplicateIndex] = true;
        }
        if (type === "[object Object]") {
            if (block && Object.keys(state.dump).length !== 0) {
                writeBlockMapping(state, level, state.dump, compact);
                if (duplicate) {
                    state.dump = "&ref_" + duplicateIndex + state.dump;
                }
            } else {
                writeFlowMapping(state, level, state.dump);
                if (duplicate) {
                    state.dump = "&ref_" + duplicateIndex + " " + state.dump;
                }
            }
        } else if (type === "[object Array]") {
            if (block && state.dump.length !== 0) {
                if (state.noArrayIndent && !isblockseq && level > 0) {
                    writeBlockSequence(state, level - 1, state.dump, compact);
                } else {
                    writeBlockSequence(state, level, state.dump, compact);
                }
                if (duplicate) {
                    state.dump = "&ref_" + duplicateIndex + state.dump;
                }
            } else {
                writeFlowSequence(state, level, state.dump);
                if (duplicate) {
                    state.dump = "&ref_" + duplicateIndex + " " + state.dump;
                }
            }
        } else if (type === "[object String]") {
            if (state.tag !== "?") {
                writeScalar(state, state.dump, level, iskey, inblock);
            }
        } else if (type === "[object Undefined]") {
            return false;
        } else {
            if (state.skipInvalid) return false;
            throw new exception("unacceptable kind of an object to dump " + type);
        }
        if (state.tag !== null && state.tag !== "?") {
            // Need to encode all characters except those allowed by the spec:
            //
            // [35] ns-dec-digit    ::=  [#x30-#x39] /* 0-9 */
            // [36] ns-hex-digit    ::=  ns-dec-digit
            //                         | [#x41-#x46] /* A-F */ | [#x61-#x66] /* a-f */
            // [37] ns-ascii-letter ::=  [#x41-#x5A] /* A-Z */ | [#x61-#x7A] /* a-z */
            // [38] ns-word-char    ::=  ns-dec-digit | ns-ascii-letter | “-”
            // [39] ns-uri-char     ::=  “%” ns-hex-digit ns-hex-digit | ns-word-char | “#”
            //                         | “;” | “/” | “?” | “:” | “@” | “&” | “=” | “+” | “$” | “,”
            //                         | “_” | “.” | “!” | “~” | “*” | “'” | “(” | “)” | “[” | “]”
            //
            // Also need to encode '!' because it has special meaning (end of tag prefix).
            //
            tagStr = encodeURI(state.tag[0] === "!" ? state.tag.slice(1) : state.tag).replace(/!/g, "%21");
            if (state.tag[0] === "!") {
                tagStr = "!" + tagStr;
            } else if (tagStr.slice(0, 18) === "tag:yaml.org,2002:") {
                tagStr = "!!" + tagStr.slice(18);
            } else {
                tagStr = "!<" + tagStr + ">";
            }
            state.dump = tagStr + " " + state.dump;
        }
    }
    return true;
}
function getDuplicateReferences(object, state) {
    var objects = [], duplicatesIndexes = [], index, length;
    inspectNode(object, objects, duplicatesIndexes);
    for(index = 0, length = duplicatesIndexes.length; index < length; index += 1){
        state.duplicates.push(objects[duplicatesIndexes[index]]);
    }
    state.usedDuplicates = new Array(length);
}
function inspectNode(object, objects, duplicatesIndexes) {
    var objectKeyList, index, length;
    if (object !== null && typeof object === "object") {
        index = objects.indexOf(object);
        if (index !== -1) {
            if (duplicatesIndexes.indexOf(index) === -1) {
                duplicatesIndexes.push(index);
            }
        } else {
            objects.push(object);
            if (Array.isArray(object)) {
                for(index = 0, length = object.length; index < length; index += 1){
                    inspectNode(object[index], objects, duplicatesIndexes);
                }
            } else {
                objectKeyList = Object.keys(object);
                for(index = 0, length = objectKeyList.length; index < length; index += 1){
                    inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
                }
            }
        }
    }
}
function dump$1(input, options) {
    options = options || {};
    var state = new State(options);
    if (!state.noRefs) getDuplicateReferences(input, state);
    var value = input;
    if (state.replacer) {
        value = state.replacer.call({
            "": value
        }, "", value);
    }
    if (writeNode(state, 0, value, true, true)) return state.dump + "\n";
    return "";
}
var dump_1 = dump$1;
var dumper = {
    dump: dump_1
};
function renamed(from, to) {
    return function() {
        throw new Error("Function yaml." + from + " is removed in js-yaml 4. " + "Use yaml." + to + " instead, which is now safe by default.");
    };
}
var Type = type;
var Schema = schema;
var FAILSAFE_SCHEMA = failsafe;
var JSON_SCHEMA = json;
var CORE_SCHEMA = core;
var DEFAULT_SCHEMA = _default;
var load = loader.load;
var loadAll = loader.loadAll;
var dump = dumper.dump;
var YAMLException = exception;
// Re-export all types in case user wants to create custom schema
var types = {
    binary: binary,
    float: float,
    map: map,
    null: _null,
    pairs: pairs,
    set: set,
    timestamp: timestamp,
    bool: bool,
    int: int,
    merge: merge,
    omap: omap,
    seq: seq,
    str: str
};
// Removed functions from JS-YAML 3.0.x
var safeLoad = renamed("safeLoad", "load");
var safeLoadAll = renamed("safeLoadAll", "loadAll");
var safeDump = renamed("safeDump", "dump");
var jsYaml = {
    Type: Type,
    Schema: Schema,
    FAILSAFE_SCHEMA: FAILSAFE_SCHEMA,
    JSON_SCHEMA: JSON_SCHEMA,
    CORE_SCHEMA: CORE_SCHEMA,
    DEFAULT_SCHEMA: DEFAULT_SCHEMA,
    load: load,
    loadAll: loadAll,
    dump: dump,
    YAMLException: YAMLException,
    types: types,
    safeLoad: safeLoad,
    safeLoadAll: safeLoadAll,
    safeDump: safeDump
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (jsYaml)));



/***/ })

};
;