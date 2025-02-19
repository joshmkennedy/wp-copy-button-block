import * as __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__ from "@wordpress/interactivity";
/******/ var __webpack_modules__ = ({

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

/***/ "./src/copy-button-group-content/view.scss":
/*!*************************************************!*\
  !*** ./src/copy-button-group-content/view.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/interactivity":
/*!*******************************************!*\
  !*** external "@wordpress/interactivity" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__;

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***********************************************!*\
  !*** ./src/copy-button-group-content/view.js ***!
  \***********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.scss */ "./src/copy-button-group-content/view.scss");
/* harmony import */ var _copy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./copy */ "./src/copy-button-group-content/copy.js");
/* harmony import */ var _wordpress_interactivity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/interactivity */ "@wordpress/interactivity");



(0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_2__.store)("copy-button", {
  actions: {
    copy: async () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_2__.getContext)();
      context.copying = true;
      const {
        ref
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_2__.getElement)();
      await (0,_copy__WEBPACK_IMPORTED_MODULE_1__.copyGroupContent)(ref);
      console.log("copied");
      context.copying = false;
    }
  }
});
})();


//# sourceMappingURL=view.js.map