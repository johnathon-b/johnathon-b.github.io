webpackJsonp([1,4],{

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 144:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <app-secrets></app-secrets>\n\n</div>"

/***/ }),

/***/ 145:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-static-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\"><span class=\"glyphicon glyphicon-lock\" aria-hidden=\"true\"></span> Secrets</a>\n    </div>\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n    </div><!--/.nav-collapse -->\n  </div>\n</nav>"

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group input-group-lg\">\n  <span class=\"input-group-addon\" id=\"sizing-addon1\">Key</span>\n  <input type=\"text\" class=\"form-control\" placeholder=\"{{templateKey}}\" aria-describedby=\"sizing-addon2\" disabled>\n</div>\n<br>\n\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">Enter your secret message</div>\n  <div class=\"panel-body\">\n    <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"message\"></textarea>\n  </div>\n</div>\n\n<div class=\"input-group input-group-lg\" *ngIf=\"show\">\n  <span class=\"input-group-addon\" id=\"sizing-addon1\">Secrets</span>\n  <input type=\"text\" class=\"form-control\" placeholder=\"{{secret}}\" aria-describedby=\"sizing-addon2\" disabled>\n</div>\n<br>\n\n<p><a class=\"btn btn-block btn-success btn-lg\" role=\"button\" (click)=\"msgCheck()\">Kazaam!</a></p>\n  <div class=\"row\" *ngIf=\"show\">\n    <div *ngFor=\"let key of formTemplates; let i = index\">\n      <div class=\"col-md-1\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\" align=\"center\"><h4>{{ key }}</h4></div>\n            <div class=\"panel-body\">\n               <div align=\"center\">\n                 <h4>\n                    {{ b[i] }}\n                    </h4>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n  </div>"

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(72);


/***/ }),

/***/ 71:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 71;


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(84);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(144),
        styles: [__webpack_require__(139)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_secrets_secrets_component__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_secrets_secrets_component__["a" /* SecretsComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__(145),
        styles: [__webpack_require__(140)]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecretsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SecretsComponent = (function () {
    function SecretsComponent() {
        this.templateKey = "abcdefghijklmnopqrstuvwxyz_";
        this.formTemplates = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '_'];
        this.templates = [];
        this.message = " ";
        this.show = "";
        this.b = [];
        this.secret = "";
    }
    SecretsComponent.prototype.msgCheck = function () {
        //Lets reset all the variables
        // Set arrays to nothing
        for (var y = 0; y < this.templateKey.length; ++y) {
            this.b[y] = 0;
        }
        //set the rest to nothing
        this.secret = "";
        this.show = "";
        // Check message length
        var mlength;
        if (this.message.length < 26) {
            mlength = 26;
        }
        else {
            mlength = this.message.length;
        }
        // Lets figure out how many times each character repeats
        for (var i = 0; i < mlength; ++i) {
            for (var h = 0; h < this.formTemplates.length; ++h) {
                if ((this.message.charAt(i)) == (this.formTemplates[h])) {
                    this.b[h] = (this.b[h]) + 1;
                    //  console.log(this.b[h]);
                }
            }
        }
        // Copy array
        var copy = this.b.slice().sort();
        console.log(copy);
        // Lets figure out what the secret code is
        // First, since I can't sort, lets find the greatest value.
        for (var x = 0; x < this.formTemplates.length; ++x) {
            for (var g = 0; g < copy.length; ++g) {
                if (copy[x] == this.b[g]) {
                    if (this.secret == "") {
                        this.secret = this.secret.concat(this.formTemplates[g]);
                    }
                }
            }
        }
        // Now, lets find the rest of the values
        //Variable for our loop to stop once it find the underscore
        var no = 0;
        for (var t = 26; t > 0; --t) {
            for (var e = 0; e < 27; ++e) {
                if (copy[t] == this.b[e]) {
                    // If we find an underscore, stop the loop
                    if (this.formTemplates[e] == "_") {
                        no = 1;
                    }
                    // If we haven't found the underscore, lets find the code
                    if (no == 0) {
                        this.secret = this.secret.concat(this.formTemplates[e]);
                    }
                }
            }
        }
        //      console.log(x + " (" + this.formTemplates[x] + " )" + " " + this.b[x]);
        this.show = "True";
    };
    return SecretsComponent;
}());
SecretsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-secrets',
        template: __webpack_require__(146),
        styles: [__webpack_require__(141)]
    }),
    __metadata("design:paramtypes", [])
], SecretsComponent);

//# sourceMappingURL=secrets.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[174]);
//# sourceMappingURL=main.bundle.js.map