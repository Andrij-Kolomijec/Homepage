/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
}

:root {
  --shadows: 0px 0px 5px 2px rgba(50, 50, 0, 0.5);
}

body {
  font-family: 'Times New Roman', Times, serif;
  background-color: rgb(255, 248, 239);
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 10vw;
  gap: 10vh;
  position: relative;
}

.trapezoid-container {
  position: absolute;
  filter: drop-shadow(0px 2px 5px rgba(50, 50, 0, 0.5));
  z-index: -1;
}

.trapezoid-background {
  clip-path: polygon(0 0, 100% 0, 100% 55%, 0 100%);
  background: linear-gradient(80deg,rgb(15, 112, 153), rgb(250, 149, 41),   rgb(3, 169, 94));
  top: 0;
  height: 65vh;
  width: 100vw;
}

header {
  position: relative;
}

.header-photo {
  background:radial-gradient(grey, rgb(255, 248, 239));;
  min-height: 460px;
  min-width: 400px;
  margin: 10vh 20px 0 -1vw;
  box-shadow: var(--shadows);
  float: left;
}

.name {
  font-size: 3rem;
  font-weight: bold;
  position: absolute;
  bottom: 0;
  width: 365px;
}

.about {
  min-height: 330px;
  min-width: 200px;
  margin: 17vh -1vw 0 0;
  background-color: rgb(255, 248, 239);
  box-shadow: var(--shadows);
  font-size: 1rem;
}

.about > h3 {
  font-size: 2rem;
}
.about > * {
  padding: 1rem;
}

a {
  text-decoration: none;
}

.links {
  text-align: end;
}

.links img {
  height: 35px;
  transition: transform 0.3s ease-in-out;
}

.links img:hover,
.project-links img:hover {
  transform: scale(1.2);
  cursor: pointer;
}

main {
  width: 80vw;
}

main > h2 {
  font-size: 2rem;
  margin-bottom: 2vw;
} 

.projects {
  display: grid;
  grid-template: repeat(auto-fit, minmax(200px, 400px)) / repeat(auto-fit, minmax(250px, 300px));
  grid-auto-rows: 400px;
  gap: 6vw;
  justify-content: space-evenly;
}

.project {
  box-shadow: var(--shadows);
  background: linear-gradient(45deg, rgb(250, 149, 41), rgb(15, 112, 153),  rgb(3, 169, 94));
}

.project h3 {
  text-align: center;
}

li {
  margin-left: 30px;
}

.project > img {
  width: 100%;
  height: 47%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
}

.project > img:hover {
  transform: scale(1.5);
  object-fit: contain;
}

.project-headline {
  display: flex;
  justify-content: space-between;
  margin: 1rem;
}

.project-links{
  display: flex;
  gap: 20px;
  justify-content: center;
  height: 10%;
}

.project-links img {
  transition: transform 0.3s ease-in-out;
  height: 30px;
}

footer {
  align-self: flex-end;
  margin-top: 7vw;
  margin-bottom: 3vw;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1vw;
}

.contact-info img {
  height: 50px;
}

.contact-info > p {
  display: flex;
  align-items: center;
}

.trapezoid-container-footer {
  position: absolute;
  bottom: 0;
  filter: drop-shadow(0px 2px 5px rgba(50, 50, 0, 0.5));
  z-index: -1;
}

.trapezoid-background-footer {
  clip-path: polygon(0 45%, 100% 0, 100% 100%, 0 100%);
  background: linear-gradient(80deg,rgb(15, 112, 153), rgb(250, 149, 41),   rgb(3, 169, 94));
  bottom: 0;
  height: 65vh;
  width: 100vw;
}

.icons-source {
  padding: 15px;
}

/* for tablets  */
@media (max-width: 900px) {
  .header-photo {
    min-height: 230px;
    min-width: 200px;
    margin-left: 0;
  }

  .name {
    left: 0;
    right: 0;
    margin: auto;
    top: 10vh;
  }
  
  .about {
    font-size: 1rem;
    margin-right: 7vw;
    margin-left: 7vw;
  }
}

/* for mobile phones  */
@media (max-width: 510px) {
  .header-photo {
    min-width: 0vw;
    min-height: 90vw;
    margin-left: 0;
    margin-right: 0;
    float: none;
  }

  .name {
    font-size: 2rem;
    width: 150px;
    top: 84vw;
    text-align: center;
  }
  
  .about {
    font-size: 1rem;
    margin-top: 5vh;
    margin-left: 0;
    margin-right: 0;
    box-shadow: none;
    background-color: transparent;
  }

  .about > h3 {
    font-size: 1.5rem;
    text-align: center;
  }

  footer {
    flex-direction: column;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,+CAA+C;AACjD;;AAEA;EACE,4CAA4C;EAC5C,oCAAoC;EACpC,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,cAAc;EACd,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,qDAAqD;EACrD,WAAW;AACb;;AAEA;EACE,iDAAiD;EACjD,0FAA0F;EAC1F,MAAM;EACN,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,oDAAoD;EACpD,iBAAiB;EACjB,gBAAgB;EAChB,wBAAwB;EACxB,0BAA0B;EAC1B,WAAW;AACb;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,SAAS;EACT,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,qBAAqB;EACrB,oCAAoC;EACpC,0BAA0B;EAC1B,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;AACA;EACE,aAAa;AACf;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,sCAAsC;AACxC;;AAEA;;EAEE,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8FAA8F;EAC9F,qBAAqB;EACrB,QAAQ;EACR,6BAA6B;AAC/B;;AAEA;EACE,0BAA0B;EAC1B,0FAA0F;AAC5F;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,WAAW;EACX,iBAAiB;EACjB,sCAAsC;AACxC;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,aAAa;EACb,SAAS;EACT,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,sCAAsC;EACtC,YAAY;AACd;;AAEA;EACE,oBAAoB;EACpB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,qDAAqD;EACrD,WAAW;AACb;;AAEA;EACE,oDAAoD;EACpD,0FAA0F;EAC1F,SAAS;EACT,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA,iBAAiB;AACjB;EACE;IACE,iBAAiB;IACjB,gBAAgB;IAChB,cAAc;EAChB;;EAEA;IACE,OAAO;IACP,QAAQ;IACR,YAAY;IACZ,SAAS;EACX;;EAEA;IACE,eAAe;IACf,iBAAiB;IACjB,gBAAgB;EAClB;AACF;;AAEA,uBAAuB;AACvB;EACE;IACE,cAAc;IACd,gBAAgB;IAChB,cAAc;IACd,eAAe;IACf,WAAW;EACb;;EAEA;IACE,eAAe;IACf,YAAY;IACZ,SAAS;IACT,kBAAkB;EACpB;;EAEA;IACE,eAAe;IACf,eAAe;IACf,cAAc;IACd,eAAe;IACf,gBAAgB;IAChB,6BAA6B;EAC/B;;EAEA;IACE,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA;IACE,sBAAsB;EACxB;AACF","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n}\n\n:root {\n  --shadows: 0px 0px 5px 2px rgba(50, 50, 0, 0.5);\n}\n\nbody {\n  font-family: 'Times New Roman', Times, serif;\n  background-color: rgb(255, 248, 239);\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  margin: 0 10vw;\n  gap: 10vh;\n  position: relative;\n}\n\n.trapezoid-container {\n  position: absolute;\n  filter: drop-shadow(0px 2px 5px rgba(50, 50, 0, 0.5));\n  z-index: -1;\n}\n\n.trapezoid-background {\n  clip-path: polygon(0 0, 100% 0, 100% 55%, 0 100%);\n  background: linear-gradient(80deg,rgb(15, 112, 153), rgb(250, 149, 41),   rgb(3, 169, 94));\n  top: 0;\n  height: 65vh;\n  width: 100vw;\n}\n\nheader {\n  position: relative;\n}\n\n.header-photo {\n  background:radial-gradient(grey, rgb(255, 248, 239));;\n  min-height: 460px;\n  min-width: 400px;\n  margin: 10vh 20px 0 -1vw;\n  box-shadow: var(--shadows);\n  float: left;\n}\n\n.name {\n  font-size: 3rem;\n  font-weight: bold;\n  position: absolute;\n  bottom: 0;\n  width: 365px;\n}\n\n.about {\n  min-height: 330px;\n  min-width: 200px;\n  margin: 17vh -1vw 0 0;\n  background-color: rgb(255, 248, 239);\n  box-shadow: var(--shadows);\n  font-size: 1rem;\n}\n\n.about > h3 {\n  font-size: 2rem;\n}\n.about > * {\n  padding: 1rem;\n}\n\na {\n  text-decoration: none;\n}\n\n.links {\n  text-align: end;\n}\n\n.links img {\n  height: 35px;\n  transition: transform 0.3s ease-in-out;\n}\n\n.links img:hover,\n.project-links img:hover {\n  transform: scale(1.2);\n  cursor: pointer;\n}\n\nmain {\n  width: 80vw;\n}\n\nmain > h2 {\n  font-size: 2rem;\n  margin-bottom: 2vw;\n} \n\n.projects {\n  display: grid;\n  grid-template: repeat(auto-fit, minmax(200px, 400px)) / repeat(auto-fit, minmax(250px, 300px));\n  grid-auto-rows: 400px;\n  gap: 6vw;\n  justify-content: space-evenly;\n}\n\n.project {\n  box-shadow: var(--shadows);\n  background: linear-gradient(45deg, rgb(250, 149, 41), rgb(15, 112, 153),  rgb(3, 169, 94));\n}\n\n.project h3 {\n  text-align: center;\n}\n\nli {\n  margin-left: 30px;\n}\n\n.project > img {\n  width: 100%;\n  height: 47%;\n  object-fit: cover;\n  transition: transform 0.3s ease-in-out;\n}\n\n.project > img:hover {\n  transform: scale(1.5);\n  object-fit: contain;\n}\n\n.project-headline {\n  display: flex;\n  justify-content: space-between;\n  margin: 1rem;\n}\n\n.project-links{\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n  height: 10%;\n}\n\n.project-links img {\n  transition: transform 0.3s ease-in-out;\n  height: 30px;\n}\n\nfooter {\n  align-self: flex-end;\n  margin-top: 7vw;\n  margin-bottom: 3vw;\n}\n\n.contact-info {\n  display: flex;\n  flex-direction: column;\n  gap: 1vw;\n}\n\n.contact-info img {\n  height: 50px;\n}\n\n.contact-info > p {\n  display: flex;\n  align-items: center;\n}\n\n.trapezoid-container-footer {\n  position: absolute;\n  bottom: 0;\n  filter: drop-shadow(0px 2px 5px rgba(50, 50, 0, 0.5));\n  z-index: -1;\n}\n\n.trapezoid-background-footer {\n  clip-path: polygon(0 45%, 100% 0, 100% 100%, 0 100%);\n  background: linear-gradient(80deg,rgb(15, 112, 153), rgb(250, 149, 41),   rgb(3, 169, 94));\n  bottom: 0;\n  height: 65vh;\n  width: 100vw;\n}\n\n.icons-source {\n  padding: 15px;\n}\n\n/* for tablets  */\n@media (max-width: 900px) {\n  .header-photo {\n    min-height: 230px;\n    min-width: 200px;\n    margin-left: 0;\n  }\n\n  .name {\n    left: 0;\n    right: 0;\n    margin: auto;\n    top: 10vh;\n  }\n  \n  .about {\n    font-size: 1rem;\n    margin-right: 7vw;\n    margin-left: 7vw;\n  }\n}\n\n/* for mobile phones  */\n@media (max-width: 510px) {\n  .header-photo {\n    min-width: 0vw;\n    min-height: 90vw;\n    margin-left: 0;\n    margin-right: 0;\n    float: none;\n  }\n\n  .name {\n    font-size: 2rem;\n    width: 150px;\n    top: 84vw;\n    text-align: center;\n  }\n  \n  .about {\n    font-size: 1rem;\n    margin-top: 5vh;\n    margin-left: 0;\n    margin-right: 0;\n    box-shadow: none;\n    background-color: transparent;\n  }\n\n  .about > h3 {\n    font-size: 1.5rem;\n    text-align: center;\n  }\n\n  footer {\n    flex-direction: column;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Icons/email-outline.svg":
/*!*************************************!*\
  !*** ./src/Icons/email-outline.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ffe24abaeb56c6af70c1.svg";

/***/ }),

/***/ "./src/Icons/github.svg":
/*!******************************!*\
  !*** ./src/Icons/github.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "550985caaa8859d4b95f.svg";

/***/ }),

/***/ "./src/Icons/home-account.svg":
/*!************************************!*\
  !*** ./src/Icons/home-account.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27a3c07e75d39646d5df.svg";

/***/ }),

/***/ "./src/Icons/linkedin.svg":
/*!********************************!*\
  !*** ./src/Icons/linkedin.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eaccfc4b453ff94aff73.svg";

/***/ }),

/***/ "./src/Icons/open-in-new.svg":
/*!***********************************!*\
  !*** ./src/Icons/open-in-new.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3ede19ed228086e87d89.svg";

/***/ }),

/***/ "./src/Icons/phone-outline.svg":
/*!*************************************!*\
  !*** ./src/Icons/phone-outline.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "04d357205b0858045638.svg";

/***/ }),

/***/ "./src/Images/battleship.jpg":
/*!***********************************!*\
  !*** ./src/Images/battleship.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e9a2b8d88a361999f70f.jpg";

/***/ }),

/***/ "./src/Images/calculator.jpg":
/*!***********************************!*\
  !*** ./src/Images/calculator.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ec25ea54ff6e7d93a0cb.jpg";

/***/ }),

/***/ "./src/Images/etch-and-sketch.jpg":
/*!****************************************!*\
  !*** ./src/Images/etch-and-sketch.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1e871c78df96291e0634.jpg";

/***/ }),

/***/ "./src/Images/library.jpg":
/*!********************************!*\
  !*** ./src/Images/library.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9edd72bb1109a03905d2.jpg";

/***/ }),

/***/ "./src/Images/signup-form.jpg":
/*!************************************!*\
  !*** ./src/Images/signup-form.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6e918a68121493dc3eaf.jpg";

/***/ }),

/***/ "./src/Images/tic-tac-toe.jpg":
/*!************************************!*\
  !*** ./src/Images/tic-tac-toe.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b1b38338011abf36ccb2.jpg";

/***/ }),

/***/ "./src/Images/todo-list.jpg":
/*!**********************************!*\
  !*** ./src/Images/todo-list.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2ab2e4b80502fd70b1f0.jpg";

/***/ }),

/***/ "./src/Images/weather-app.jpg":
/*!************************************!*\
  !*** ./src/Images/weather-app.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "013fb96e08755d391ab3.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _Icons_email_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icons/email-outline.svg */ "./src/Icons/email-outline.svg");
/* harmony import */ var _Icons_github_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icons/github.svg */ "./src/Icons/github.svg");
/* harmony import */ var _Icons_home_account_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icons/home-account.svg */ "./src/Icons/home-account.svg");
/* harmony import */ var _Icons_linkedin_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Icons/linkedin.svg */ "./src/Icons/linkedin.svg");
/* harmony import */ var _Icons_open_in_new_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icons/open-in-new.svg */ "./src/Icons/open-in-new.svg");
/* harmony import */ var _Icons_phone_outline_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Icons/phone-outline.svg */ "./src/Icons/phone-outline.svg");
/* harmony import */ var _Images_battleship_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Images/battleship.jpg */ "./src/Images/battleship.jpg");
/* harmony import */ var _Images_calculator_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Images/calculator.jpg */ "./src/Images/calculator.jpg");
/* harmony import */ var _Images_etch_and_sketch_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Images/etch-and-sketch.jpg */ "./src/Images/etch-and-sketch.jpg");
/* harmony import */ var _Images_library_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Images/library.jpg */ "./src/Images/library.jpg");
/* harmony import */ var _Images_signup_form_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Images/signup-form.jpg */ "./src/Images/signup-form.jpg");
/* harmony import */ var _Images_tic_tac_toe_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Images/tic-tac-toe.jpg */ "./src/Images/tic-tac-toe.jpg");
/* harmony import */ var _Images_todo_list_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Images/todo-list.jpg */ "./src/Images/todo-list.jpg");
/* harmony import */ var _Images_weather_app_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Images/weather-app.jpg */ "./src/Images/weather-app.jpg");
















document.querySelector(".email").src = _Icons_email_outline_svg__WEBPACK_IMPORTED_MODULE_1__;
document.querySelectorAll(".github").forEach((i) => (i.src = _Icons_github_svg__WEBPACK_IMPORTED_MODULE_2__));
document.querySelector('link[rel="icon"]').href = _Icons_home_account_svg__WEBPACK_IMPORTED_MODULE_3__;
document.querySelectorAll(".linkedin").forEach((i) => (i.src = _Icons_linkedin_svg__WEBPACK_IMPORTED_MODULE_4__));
document.querySelectorAll(".visit").forEach((i) => (i.src = _Icons_open_in_new_svg__WEBPACK_IMPORTED_MODULE_5__));
document.querySelector(".phone").src = _Icons_phone_outline_svg__WEBPACK_IMPORTED_MODULE_6__;
document.querySelector(".battleship").src = _Images_battleship_jpg__WEBPACK_IMPORTED_MODULE_7__;
document.querySelector(".calculator").src = _Images_calculator_jpg__WEBPACK_IMPORTED_MODULE_8__;
document.querySelector(".etch").src = _Images_etch_and_sketch_jpg__WEBPACK_IMPORTED_MODULE_9__;
document.querySelector(".library").src = _Images_library_jpg__WEBPACK_IMPORTED_MODULE_10__;
document.querySelector(".signup").src = _Images_signup_form_jpg__WEBPACK_IMPORTED_MODULE_11__;
document.querySelector(".tictactoe").src = _Images_tic_tac_toe_jpg__WEBPACK_IMPORTED_MODULE_12__;
document.querySelector(".todo").src = _Images_todo_list_jpg__WEBPACK_IMPORTED_MODULE_13__;
document.querySelector(".weather").src = _Images_weather_app_jpg__WEBPACK_IMPORTED_MODULE_14__;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZ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LGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDeUI7QUFDTjtBQUNJO0FBQ0E7QUFDRDtBQUNHO0FBQ0c7QUFDQTtBQUNEO0FBQ0w7QUFDRztBQUNHO0FBQ1A7QUFDSzs7QUFFL0MsdUNBQXVDLHFEQUFLO0FBQzVDLDZEQUE2RCw4Q0FBTTtBQUNuRSxrREFBa0Qsb0RBQUk7QUFDdEQsK0RBQStELGdEQUFRO0FBQ3ZFLDREQUE0RCxtREFBSTtBQUNoRSx1Q0FBdUMscURBQUs7QUFDNUMsNENBQTRDLG1EQUFVO0FBQ3RELDRDQUE0QyxtREFBVTtBQUN0RCxzQ0FBc0Msd0RBQUk7QUFDMUMseUNBQXlDLGlEQUFPO0FBQ2hELHdDQUF3QyxxREFBTTtBQUM5QywyQ0FBMkMscURBQVM7QUFDcEQsc0NBQXNDLG1EQUFJO0FBQzFDLHlDQUF5QyxxREFBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuOnJvb3Qge1xuICAtLXNoYWRvd3M6IDBweCAwcHggNXB4IDJweCByZ2JhKDUwLCA1MCwgMCwgMC41KTtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNDgsIDIzOSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMCAxMHZ3O1xuICBnYXA6IDEwdmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRyYXBlem9pZC1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDJweCA1cHggcmdiYSg1MCwgNTAsIDAsIDAuNSkpO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLnRyYXBlem9pZC1iYWNrZ3JvdW5kIHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDU1JSwgMCAxMDAlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDgwZGVnLHJnYigxNSwgMTEyLCAxNTMpLCByZ2IoMjUwLCAxNDksIDQxKSwgICByZ2IoMywgMTY5LCA5NCkpO1xuICB0b3A6IDA7XG4gIGhlaWdodDogNjV2aDtcbiAgd2lkdGg6IDEwMHZ3O1xufVxuXG5oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5oZWFkZXItcGhvdG8ge1xuICBiYWNrZ3JvdW5kOnJhZGlhbC1ncmFkaWVudChncmV5LCByZ2IoMjU1LCAyNDgsIDIzOSkpOztcbiAgbWluLWhlaWdodDogNDYwcHg7XG4gIG1pbi13aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogMTB2aCAyMHB4IDAgLTF2dztcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93cyk7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubmFtZSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMzY1cHg7XG59XG5cbi5hYm91dCB7XG4gIG1pbi1oZWlnaHQ6IDMzMHB4O1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDE3dmggLTF2dyAwIDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI0OCwgMjM5KTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93cyk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmFib3V0ID4gaDMge1xuICBmb250LXNpemU6IDJyZW07XG59XG4uYWJvdXQgPiAqIHtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmxpbmtzIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuXG4ubGlua3MgaW1nIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmxpbmtzIGltZzpob3Zlcixcbi5wcm9qZWN0LWxpbmtzIGltZzpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5tYWluIHtcbiAgd2lkdGg6IDgwdnc7XG59XG5cbm1haW4gPiBoMiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnZ3O1xufSBcblxuLnByb2plY3RzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDQwMHB4KSkgLyByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMzAwcHgpKTtcbiAgZ3JpZC1hdXRvLXJvd3M6IDQwMHB4O1xuICBnYXA6IDZ2dztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5wcm9qZWN0IHtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93cyk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDI1MCwgMTQ5LCA0MSksIHJnYigxNSwgMTEyLCAxNTMpLCAgcmdiKDMsIDE2OSwgOTQpKTtcbn1cblxuLnByb2plY3QgaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmxpIHtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi5wcm9qZWN0ID4gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDclO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5wcm9qZWN0ID4gaW1nOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4ucHJvamVjdC1oZWFkbGluZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiAxcmVtO1xufVxuXG4ucHJvamVjdC1saW5rc3tcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMCU7XG59XG5cbi5wcm9qZWN0LWxpbmtzIGltZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbmZvb3RlciB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBtYXJnaW4tdG9wOiA3dnc7XG4gIG1hcmdpbi1ib3R0b206IDN2dztcbn1cblxuLmNvbnRhY3QtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXZ3O1xufVxuXG4uY29udGFjdC1pbmZvIGltZyB7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmNvbnRhY3QtaW5mbyA+IHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udHJhcGV6b2lkLWNvbnRhaW5lci1mb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMnB4IDVweCByZ2JhKDUwLCA1MCwgMCwgMC41KSk7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4udHJhcGV6b2lkLWJhY2tncm91bmQtZm9vdGVyIHtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgNDUlLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDgwZGVnLHJnYigxNSwgMTEyLCAxNTMpLCByZ2IoMjUwLCAxNDksIDQxKSwgICByZ2IoMywgMTY5LCA5NCkpO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogNjV2aDtcbiAgd2lkdGg6IDEwMHZ3O1xufVxuXG4uaWNvbnMtc291cmNlIHtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLyogZm9yIHRhYmxldHMgICovXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLmhlYWRlci1waG90byB7XG4gICAgbWluLWhlaWdodDogMjMwcHg7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gIC5uYW1lIHtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0b3A6IDEwdmg7XG4gIH1cbiAgXG4gIC5hYm91dCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIG1hcmdpbi1yaWdodDogN3Z3O1xuICAgIG1hcmdpbi1sZWZ0OiA3dnc7XG4gIH1cbn1cblxuLyogZm9yIG1vYmlsZSBwaG9uZXMgICovXG5AbWVkaWEgKG1heC13aWR0aDogNTEwcHgpIHtcbiAgLmhlYWRlci1waG90byB7XG4gICAgbWluLXdpZHRoOiAwdnc7XG4gICAgbWluLWhlaWdodDogOTB2dztcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cblxuICAubmFtZSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICB0b3A6IDg0dnc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAuYWJvdXQge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiA1dmg7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAuYWJvdXQgPiBoMyB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgZm9vdGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7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O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXNoYWRvd3M6IDBweCAwcHggNXB4IDJweCByZ2JhKDUwLCA1MCwgMCwgMC41KTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI0OCwgMjM5KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogMCAxMHZ3O1xcbiAgZ2FwOiAxMHZoO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udHJhcGV6b2lkLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAycHggNXB4IHJnYmEoNTAsIDUwLCAwLCAwLjUpKTtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4udHJhcGV6b2lkLWJhY2tncm91bmQge1xcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDU1JSwgMCAxMDAlKTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg4MGRlZyxyZ2IoMTUsIDExMiwgMTUzKSwgcmdiKDI1MCwgMTQ5LCA0MSksICAgcmdiKDMsIDE2OSwgOTQpKTtcXG4gIHRvcDogMDtcXG4gIGhlaWdodDogNjV2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmhlYWRlci1waG90byB7XFxuICBiYWNrZ3JvdW5kOnJhZGlhbC1ncmFkaWVudChncmV5LCByZ2IoMjU1LCAyNDgsIDIzOSkpOztcXG4gIG1pbi1oZWlnaHQ6IDQ2MHB4O1xcbiAgbWluLXdpZHRoOiA0MDBweDtcXG4gIG1hcmdpbjogMTB2aCAyMHB4IDAgLTF2dztcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvd3MpO1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbi5uYW1lIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDM2NXB4O1xcbn1cXG5cXG4uYWJvdXQge1xcbiAgbWluLWhlaWdodDogMzMwcHg7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgbWFyZ2luOiAxN3ZoIC0xdncgMCAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjQ4LCAyMzkpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93cyk7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5hYm91dCA+IGgzIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLmFib3V0ID4gKiB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmxpbmtzIHtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXFxuLmxpbmtzIGltZyB7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmxpbmtzIGltZzpob3ZlcixcXG4ucHJvamVjdC1saW5rcyBpbWc6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5tYWluIHtcXG4gIHdpZHRoOiA4MHZ3O1xcbn1cXG5cXG5tYWluID4gaDIge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnZ3O1xcbn0gXFxuXFxuLnByb2plY3RzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgNDAwcHgpKSAvIHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAzMDBweCkpO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDQwMHB4O1xcbiAgZ2FwOiA2dnc7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93cyk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYigyNTAsIDE0OSwgNDEpLCByZ2IoMTUsIDExMiwgMTUzKSwgIHJnYigzLCAxNjksIDk0KSk7XFxufVxcblxcbi5wcm9qZWN0IGgzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxubGkge1xcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxufVxcblxcbi5wcm9qZWN0ID4gaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0NyU7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ucHJvamVjdCA+IGltZzpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkbGluZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdC1saW5rc3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAlO1xcbn1cXG5cXG4ucHJvamVjdC1saW5rcyBpbWcge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbmZvb3RlciB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIG1hcmdpbi10b3A6IDd2dztcXG4gIG1hcmdpbi1ib3R0b206IDN2dztcXG59XFxuXFxuLmNvbnRhY3QtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXZ3O1xcbn1cXG5cXG4uY29udGFjdC1pbmZvIGltZyB7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5jb250YWN0LWluZm8gPiBwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udHJhcGV6b2lkLWNvbnRhaW5lci1mb290ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMnB4IDVweCByZ2JhKDUwLCA1MCwgMCwgMC41KSk7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLnRyYXBlem9pZC1iYWNrZ3JvdW5kLWZvb3RlciB7XFxuICBjbGlwLXBhdGg6IHBvbHlnb24oMCA0NSUsIDEwMCUgMCwgMTAwJSAxMDAlLCAwIDEwMCUpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDgwZGVnLHJnYigxNSwgMTEyLCAxNTMpLCByZ2IoMjUwLCAxNDksIDQxKSwgICByZ2IoMywgMTY5LCA5NCkpO1xcbiAgYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiA2NXZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4uaWNvbnMtc291cmNlIHtcXG4gIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi8qIGZvciB0YWJsZXRzICAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xcbiAgLmhlYWRlci1waG90byB7XFxuICAgIG1pbi1oZWlnaHQ6IDIzMHB4O1xcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gIH1cXG5cXG4gIC5uYW1lIHtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgdG9wOiAxMHZoO1xcbiAgfVxcbiAgXFxuICAuYWJvdXQge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG1hcmdpbi1yaWdodDogN3Z3O1xcbiAgICBtYXJnaW4tbGVmdDogN3Z3O1xcbiAgfVxcbn1cXG5cXG4vKiBmb3IgbW9iaWxlIHBob25lcyAgKi9cXG5AbWVkaWEgKG1heC13aWR0aDogNTEwcHgpIHtcXG4gIC5oZWFkZXItcGhvdG8ge1xcbiAgICBtaW4td2lkdGg6IDB2dztcXG4gICAgbWluLWhlaWdodDogOTB2dztcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgZmxvYXQ6IG5vbmU7XFxuICB9XFxuXFxuICAubmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICB0b3A6IDg0dnc7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG4gIFxcbiAgLmFib3V0IHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBtYXJnaW4tdG9wOiA1dmg7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgfVxcblxcbiAgLmFib3V0ID4gaDMge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgZm9vdGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBlbWFpbCBmcm9tIFwiLi9JY29ucy9lbWFpbC1vdXRsaW5lLnN2Z1wiO1xuaW1wb3J0IGdpdGh1YiBmcm9tIFwiLi9JY29ucy9naXRodWIuc3ZnXCI7XG5pbXBvcnQgaG9tZSBmcm9tIFwiLi9JY29ucy9ob21lLWFjY291bnQuc3ZnXCI7XG5pbXBvcnQgbGlua2VkaW4gZnJvbSBcIi4vSWNvbnMvbGlua2VkaW4uc3ZnXCI7XG5pbXBvcnQgb3BlbiBmcm9tIFwiLi9JY29ucy9vcGVuLWluLW5ldy5zdmdcIjtcbmltcG9ydCBwaG9uZSBmcm9tIFwiLi9JY29ucy9waG9uZS1vdXRsaW5lLnN2Z1wiO1xuaW1wb3J0IGJhdHRsZXNoaXAgZnJvbSBcIi4vSW1hZ2VzL2JhdHRsZXNoaXAuanBnXCI7XG5pbXBvcnQgY2FsY3VsYXRvciBmcm9tIFwiLi9JbWFnZXMvY2FsY3VsYXRvci5qcGdcIjtcbmltcG9ydCBldGNoIGZyb20gXCIuL0ltYWdlcy9ldGNoLWFuZC1za2V0Y2guanBnXCI7XG5pbXBvcnQgbGlicmFyeSBmcm9tIFwiLi9JbWFnZXMvbGlicmFyeS5qcGdcIjtcbmltcG9ydCBzaWdudXAgZnJvbSBcIi4vSW1hZ2VzL3NpZ251cC1mb3JtLmpwZ1wiO1xuaW1wb3J0IHRpY3RhY3RvZSBmcm9tIFwiLi9JbWFnZXMvdGljLXRhYy10b2UuanBnXCI7XG5pbXBvcnQgdG9kbyBmcm9tIFwiLi9JbWFnZXMvdG9kby1saXN0LmpwZ1wiO1xuaW1wb3J0IHdlYXRoZXIgZnJvbSBcIi4vSW1hZ2VzL3dlYXRoZXItYXBwLmpwZ1wiO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVtYWlsXCIpLnNyYyA9IGVtYWlsO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5naXRodWJcIikuZm9yRWFjaCgoaSkgPT4gKGkuc3JjID0gZ2l0aHViKSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaW5rW3JlbD1cImljb25cIl0nKS5ocmVmID0gaG9tZTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlua2VkaW5cIikuZm9yRWFjaCgoaSkgPT4gKGkuc3JjID0gbGlua2VkaW4pKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudmlzaXRcIikuZm9yRWFjaCgoaSkgPT4gKGkuc3JjID0gb3BlbikpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5waG9uZVwiKS5zcmMgPSBwaG9uZTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmF0dGxlc2hpcFwiKS5zcmMgPSBiYXR0bGVzaGlwO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYWxjdWxhdG9yXCIpLnNyYyA9IGNhbGN1bGF0b3I7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV0Y2hcIikuc3JjID0gZXRjaDtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlicmFyeVwiKS5zcmMgPSBsaWJyYXJ5O1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWdudXBcIikuc3JjID0gc2lnbnVwO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aWN0YWN0b2VcIikuc3JjID0gdGljdGFjdG9lO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvXCIpLnNyYyA9IHRvZG87XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXJcIikuc3JjID0gd2VhdGhlcjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==