/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/copy-button-group-content/block.json":
/*!**************************************************!*\
  !*** ./src/copy-button-group-content/block.json ***!
  \**************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"copy-button/copy-button-group-content","version":"0.1.1","title":"Copy Group Content","category":"widgets","icon":"clipboard","description":"Copys the content thats inside this block","example":{},"supports":{"html":false,"interactivity":true},"textdomain":"copy-button","editorScript":"file:./index.js","editorStyle":"file:./editor.css","style":"file:./view.css","viewScriptModule":"file:./view.js","render":"file:./render.php"}');

/***/ }),

/***/ "./src/copy-button-group-content/copy.js":
/*!***********************************************!*\
  !*** ./src/copy-button-group-content/copy.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyGroupContent: () => (/* binding */ copyGroupContent)
/* harmony export */ });
/**
 * Copy the content of the block.
 *
 * @param {HTMLDivElement} el The parent element of the .copy-button-group__content element.
 */
async function copyGroupContent(el) {
  const text = el.querySelector(".copy-button-group__content")?.textContent;
  await navigator.clipboard.writeText(text);
  return new Promise(res => {
    setTimeout(res, 2000);
  });
}

/***/ }),

/***/ "./src/copy-button-group-content/edit.js":
/*!***********************************************!*\
  !*** ./src/copy-button-group-content/edit.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/copy-button-group-content/editor.scss");
/* harmony import */ var _view_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view.scss */ "./src/copy-button-group-content/view.scss");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons */ "./src/copy-button-group-content/icons.js");
/* harmony import */ var _copy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./copy */ "./src/copy-button-group-content/copy.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








const TEMPLATE = [["core/paragraph", {
  placeholder: "Place the content here that you would like copied"
}]];
function Edit() {
  const wrapperRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const [isCopying, setIsCopying] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const copy = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async function copy(e) {
    e.preventDefault();
    setIsCopying(true);
    await (0,_copy__WEBPACK_IMPORTED_MODULE_6__.copyGroupContent)(wrapperRef.current);
    setIsCopying(false);
  }, [wrapperRef, setIsCopying]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(/*{ref:wrapperRef}*/),
    className: "wp-block-copy-button-copy-button-group-content",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      class: "copy-button-group__header",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button", {
        className: "copy-button-group__button",
        onClick: copy,
        children: isCopying ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_5__.CheckIcon, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_5__.CopyIcon, {})
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      class: "copy-button-group__content",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
        allowedBlocks: ["core/paragraph", "core/heading"],
        template: TEMPLATE
      })
    })]
  });
}

/***/ }),

/***/ "./src/copy-button-group-content/editor.scss":
/*!***************************************************!*\
  !*** ./src/copy-button-group-content/editor.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/copy-button-group-content/icons.js":
/*!************************************************!*\
  !*** ./src/copy-button-group-content/icons.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckIcon: () => (/* binding */ CheckIcon),
/* harmony export */   CopyIcon: () => (/* binding */ CopyIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function CopyIcon() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 384 512",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M192 0c-41.8 0-77.4 26.7-90.5 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-37.5 0C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 192l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
    })
  });
}
function CheckIcon() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
    })
  });
}

/***/ }),

/***/ "./src/copy-button-group-content/save.js":
/*!***********************************************!*\
  !*** ./src/copy-button-group-content/save.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function save() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, {})
  });
}

/***/ }),

/***/ "./src/copy-button-group-content/view.scss":
/*!*************************************************!*\
  !*** ./src/copy-button-group-content/view.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************************************!*\
  !*** ./src/copy-button-group-content/index.js ***!
  \************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/copy-button-group-content/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/copy-button-group-content/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/copy-button-group-content/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  attributes: _block_json__WEBPACK_IMPORTED_MODULE_3__.attributes,
  category: _block_json__WEBPACK_IMPORTED_MODULE_3__.category,
  title: _block_json__WEBPACK_IMPORTED_MODULE_3__.title,
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map