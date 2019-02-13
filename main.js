(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/experience/experience.component */ "./src/app/components/experience/experience.component.ts");
/* harmony import */ var _components_education_education_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/education/education.component */ "./src/app/components/education/education.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pagenotfound/pagenotfound.component */ "./src/app/components/pagenotfound/pagenotfound.component.ts");









var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"] },
    { path: 'education', component: _components_education_education_component__WEBPACK_IMPORTED_MODULE_6__["EducationComponent"] },
    { path: 'experience', component: _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_5__["ExperienceComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: '**', component: _components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_8__["PagenotfoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<nav class=\"navbar\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\"  (click)=\"collaps = !collaps\"  class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>                        \n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Siva</a>\n    </div>\n    <div class=\"collapse navbar-collapse\" [ngClass]=\"{ collapse : collaps }\" id=\"myNavbar\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a routerLink ='/home' routerLinkActive = 'active'><span class=\"glyphicon glyphicon-home\"></span> Home</a></li>\n        <li><a routerLink ='/about' routerLinkActive = 'active'><span class=\"glyphicon glyphicon-user\"></span> About</a></li>\n        <li><a routerLink ='/education' routerLinkActive = 'active'><span class=\"glyphicon glyphicon-education\"></span> Education</a></li>\n        <li><a routerLink ='/experience' routerLinkActive = 'active'><span class=\"glyphicon glyphicon-file\"></span> Experience</a></li>\n        <li><a routerLink ='/contact' routerLinkActive = 'active'><span class=\"glyphicon glyphicon-envelope\"></span> Contact</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Portfolio';
        this.collaps = true;
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_education_education_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/education/education.component */ "./src/app/components/education/education.component.ts");
/* harmony import */ var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/experience/experience.component */ "./src/app/components/experience/experience.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pagenotfound/pagenotfound.component */ "./src/app/components/pagenotfound/pagenotfound.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _components_education_education_component__WEBPACK_IMPORTED_MODULE_8__["EducationComponent"],
                _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_9__["ExperienceComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
                _components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_11__["PagenotfoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile{\r\n    text-align: center;\r\n}\r\n.details .col-md-9 span{\r\n    font-size: 16px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxnQkFBZ0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZGV0YWlscyAuY29sLW1kLTkgc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 class=\"fancy2a\">About</h1>\n   <div class=\"row\">\n    <div class=\"col-md-8\">     \n        <h3> About Me </h3>\n        <hr/>\n        <p>A self-motivated IT professional with good knowledge and proficiency in HTML, CSS, JavaScript, Angular and mobile responsive web development, as well as strong skills and ability in writing clean and efficient code</p>\n        <br>\n        <h3> Personal Information</h3>\n        <hr/>\n        <br>  \n        <div class=\"details\">\n        <div class=\"col-md-3\">\n          <b> Name</b>\n        </div>\n        <div class=\"col-md-9\">\n          <span>Sivarajan A</span>\n        </div>\n        <div class=\"col-md-3\">\n          <b> Age </b>\n        </div>\n        <div class=\"col-md-9\">\n          <span>21 Years</span>\n        </div>\n        <div class=\"col-md-3\">\n            <b> Address </b>\n          </div>\n          <div class=\"col-md-9\">\n            <span>2/106, Odakkara Street, <br> Vilangudi, Thiruvaiyaru, <br> Thanjavur - 613204 </span>\n          </div>\n          <div class=\"col-md-3\">\n              <b> Nationality </b>\n            </div>\n            <div class=\"col-md-9\">\n              <span>Indian</span>\n            </div>\n          </div>\n      </div>\n      <div class=\"col-md-4 profile\">\n          <div class =\"col-md-12 profile_image\">\n              <img src=\"../../../assets/images/user.png\"  width=\"100%\"  >\n        </div>\n        <a href=\"../../../assets/siva_resume.docx\" class=\"btn btn-primary btn-large download\" download><span class=\"glyphicon glyphicon-download\"></span>  Download Resume</a>\n      </div>\n   </div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.title = "About";
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"fancy2a\">Contact</h1>\n <div class=\"row\">\n\n  <div class=\"col-md-6\">\n    <div class =\"col-md-12 profile_image\">\n          <img src=\"../../../assets/images/user.png\"  width=\"150px\" height=\"150px\" >\n    </div>\n    <br><br>\n    <div class=\"mt-2 personal\">\n      <div class=\"col-md-3\">\n        <b><span class=\"glyphicon glyphicon-envelope\"></span> Email</b>\n      </div>\n      <div class=\"col-md-9\">\n        <span>asivarajan55@gmail.com</span>\n      </div>\n      <div class=\"col-md-3\">\n        <b> <span class=\"glyphicon glyphicon-phone\"></span> Phone</b>\n      </div>\n      <div class=\"col-md-9\">\n        <span>8973087316</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6\">     \n      <form class=\"mbr-form\" [formGroup]=\"form\" (ngSubmit)=\"OnSubmit()\">\n        <div class=\"row row-sm-offset\">\n            <div class=\"col-md-12 multi-horizontal\" data-for=\"name\">\n                <div class=\"form-group\">\n                    <label class=\"form-control-label mbr-fonts-style display-7\" for=\"name-form1-2w\">Name</label>\n                    <input type=\"text\" formControlName=\"name\" class=\"form-control\">\n                    <p class=\"alert alert-danger\" *ngIf=\"form.get('name').hasError('required') && (form.get('name').touched || submitted )\">\n                      Oops, please provide a name!\n                    </p>\n                    <p class=\"alert alert-danger\" *ngIf=\"form.get('name').touched && (form.get('name').hasError('minlength') || submitted )\">\n                      Name is too short ! minimum 3 characters required \n                    </p>\n                  </div>\n\n            </div>\n            <div class=\"col-md-12 multi-horizontal\" data-for=\"email\">\n                <div class=\"form-group\">\n                    <label class=\"form-control-label mbr-fonts-style display-7\" for=\"email-form1-2w\">Email</label>\n                    <input type=\"email\" formControlName=\"email\" class=\"form-control\">\n                    <p class=\"alert alert-danger\" *ngIf=\"form.get('email').hasError('required') &&  (form.get('email').touched || submitted)\">\n                      Email Required!\n                    </p>\n                    <p class=\"alert alert-danger\" *ngIf=\"form.get('email').hasError('email') && ( form.get('email').touched || submitted )\">\n                      Invalid email!\n                    </p>\n                </div>\n            </div>\n            <div class=\"col-md-12 multi-horizontal\" data-for=\"phone\">\n                <div class=\"form-group\">\n                    <label class=\"form-control-label mbr-fonts-style display-7\" for=\"phone-form1-2w\">Phone</label>\n                    <input type=\"tel\" formControlName=\"tel\" class=\"form-control\" >\n                    <p class=\"alert alert-danger\" *ngIf=\"  form.get('tel').hasError('required') &&  (form.get('tel').touched || submitted )\">\n                      Phone No Required!\n                    </p>\n                    \n                    <p class=\"alert alert-danger\" *ngIf=\" form.get('tel').hasError('pattern')\">\n                      invalid number\n                    </p>\n                </div>\n            </div>\n        </div>\n        <div class=\"form-group\"  data-for=\"message\">\n            <label class=\"form-control-label mbr-fonts-style display-7\" for=\"message-form1-2w\">Message</label>\n            <textarea type=\"text\" class=\"form-control\" formControlName=\"message\"  rows=\"7\" ></textarea>\n            <p class=\"alert alert-danger\" *ngIf=\"form.get('message').hasError('reqired') && (form.get('message').touched || submitted)\">\n              Write something  please!\n            </p>\n              <p  class=\"alert alert-danger\" *ngIf=\"form.get('message').hasError('minlength') &&  (form.get('message').touched || submitted)\">\n                Write something longer please!\n              </p>\n        </div>\n        <span class=\"input-group-btn\">\n            <button href=\"\" type=\"submit\" class=\"btn btn-primary btn-form display-4\">SEND</button>\n        </span>\n      </form>\n  </div>\n </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ContactComponent = /** @class */ (function () {
    function ContactComponent(fb) {
        this.fb = fb;
        this.submitted = false;
        this.title = "Contact";
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            tel: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[6789][0-9]{9}')]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(15)]]
        });
    };
    ContactComponent.prototype.OnSubmit = function () {
        this.submitted = true;
        if (this.form.valid) {
            console.log("sbmitted");
            this.form.reset();
            this.submitted = false;
        }
        else {
            console.log("error");
        }
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/education/education.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/education/education.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".progress-label {\r\n    float: left;\r\n    margin-right: 1em;\r\n    width:100px;\r\n  }\r\n  .progress{\r\n      height:30px;\r\n  }\r\n  .education{\r\n      margin-bottom:10px;\r\n      font-weight:700;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7R0FDYjtFQUNEO01BQ0ksWUFBWTtHQUNmO0VBQ0Q7TUFDSSxtQkFBbUI7TUFDbkIsZ0JBQWdCO0dBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZ3Jlc3MtbGFiZWwge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICAgIHdpZHRoOjEwMHB4O1xyXG4gIH1cclxuICAucHJvZ3Jlc3N7XHJcbiAgICAgIGhlaWdodDozMHB4O1xyXG4gIH1cclxuICAuZWR1Y2F0aW9ue1xyXG4gICAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OjcwMDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/education/education.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/education/education.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    \n    <h1 class=\"fancy2a\">Skills</h1>\n    <strong class=\"progress-label\">\n      HTML\n    </strong >\n    <div class=\"progress\" id=\"prog1\">\n      <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%\">\n        <span class=\"sr-only\">20% Complete</span>\n      </div>\n    </div>\n    <strong class=\"progress-label\">\n      CSS\n    </strong >\n    <div class=\"progress\" id=\"prog1\">\n      <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 78%\">\n        <span class=\"sr-only\">20% Complete</span>\n      </div>\n    </div>\n\n    <strong class=\"progress-label\">\n        JavaScript\n      </strong >\n      <div class=\"progress\" id=\"prog1\">\n        <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 70%\">\n          <span class=\"sr-only\">20% Complete</span>\n        </div>\n      </div>\n\n\n      <strong class=\"progress-label\">\n          Jquery\n        </strong >\n        <div class=\"progress\" id=\"prog1\">\n          <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 70%\">\n            <span class=\"sr-only\">20% Complete</span>\n          </div>\n        </div>\n\n\n        <strong class=\"progress-label\">\n            Angular\n          </strong >\n          <div class=\"progress\" id=\"prog1\">\n            <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 65%\">\n              <span class=\"sr-only\">20% Complete</span>\n            </div>\n          </div>\n\n          <strong class=\"progress-label\">\n              Bootstrap\n            </strong >\n            <div class=\"progress\" id=\"prog1\">\n              <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 50%\">\n                <span class=\"sr-only\">20% Complete</span>\n              </div>\n            </div>\n            <h1 class=\"fancy2a\">Education</h1>\n            <div class=\"education\">\n                BCA - Bharathidasan University  - Bharath College of Science and Management - 2014-2017  \n            </div>\n              <div class=\"progress\" id=\"prog1\">\n                <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 73%\">\n                  <span class=\"\">73%</span>\n                </div>\n              </div>\n            <div class=\"education\">\n                HSC - State Board  - Srinivasa Rao Higher Secondary school - 2012-2014 \n            </div>\n              <div class=\"progress\" id=\"prog1\">\n                <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 69%\">\n                  <span class=\"\">69%</span>\n                </div>\n              </div>\n              <div class=\"education\">\n                  SSLC - State Board  - ST.Joseph High school - 2010-2012  \n              </div>\n                <div class=\"progress\" id=\"prog1\">\n                  <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 81%\">\n                    <span class=\"\">81%</span>\n                  </div>\n                </div>\n                \n  \n  </div>\n  \n"

/***/ }),

/***/ "./src/app/components/education/education.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/education/education.component.ts ***!
  \*************************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
        this.title = "Education";
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/components/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.css */ "./src/app/components/education/education.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/components/experience/experience.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/experience/experience.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".proj_details>div{\r\n    margin-bottom: 20px;\r\n}\r\n.exp_year{\r\n    font-size: 18px;\r\n    text-align: right;\r\n    float:right;\r\n}\r\n.company_logo>img{\r\n    border-radius: 100px;\r\n}\r\n.proj_details .col-md-9 span{\r\n    font-size: 16px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0NBQ2Y7QUFDRDtJQUNJLHFCQUFxQjtDQUN4QjtBQUNEO0lBQ0ksZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qX2RldGFpbHM+ZGl2e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uZXhwX3llYXJ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG59XHJcbi5jb21wYW55X2xvZ28+aW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbn1cclxuLnByb2pfZGV0YWlscyAuY29sLW1kLTkgc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/experience/experience.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/experience/experience.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1 class=\"fancy2a\">Experience</h1>\n\t<div class=\"row\">\n\t\t<div class=\"col-md-3 company_logo\">\n      <img src=\"../../../assets/images/ggs_logo.jpg\" width=\"90%\">\n    </div>\n    <div class=\"col-md-9\">\n      <h3> <span class=\"company_name\"> <a href=\"ggsinc.com\">GGS Information Services - chennai </a> </span> <span class=\"exp_year\">Nov 2017 - till</span> </h3>\n      <ul>\n        <li>Worked as UI Developer from November (2017) to Till date.</li>\n        <li>Create Web application front end as per design comps and information architecture.</li>\n        <li>Follow best practices and standards for accessibility and cross-browser compatibility.</li>\n        <li>Developing Interactive Diagnostics.</li>\n      </ul>\n      <br>\n      <h4> Project Details </h4>\n      <hr>\n        <div class=\"proj_details\">\n          <div class=\"col-md-3\">\n              <b> Project Name</b>\n            </div>\n            <div class=\"col-md-9\">\n              <span>FUSO Ascent Application.</span>\n            </div>\n            <div class=\"col-md-3\">\n              <b> Role </b>\n            </div>\n            <div class=\"col-md-9\">\n              <span>UI Developer</span>\n            </div>\n            <div class=\"col-md-3\">\n                <b> Client </b>\n              </div>\n              <div class=\"col-md-9\">\n                <span>Daimler India Commercial Vehicles.</span>\n              </div>\n              <div class=\"col-md-3\">\n                  <b> Language </b>\n                </div>\n                <div class=\"col-md-9\">\n                  <span>HTML5, CSS3, Java script, jquery </span>\n                </div>\n                <div class=\"col-md-3\">\n                    <b> Description </b>\n                  </div>\n                  <div class=\"col-md-9\">\n                    <span>Creating responsive Interactive E/E module , this module allow user to interact with vehicle part details like Sensors, meter cluster, ECU, Circuits etc.</span>\n                  </div>\n            </div>\n         </div>\n\t\t</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/experience/experience.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/experience/experience.component.ts ***!
  \***************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
        this.title = "Experience";
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/components/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.css */ "./src/app/components/experience/experience.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.overlay-section {\r\n    background: rgba(0, 0, 0, 0.7) none repeat scroll 0 0;\r\n    background:url('bg.jpg');\r\n    background-size: cover;\r\n    height: 93%;\r\n    width: 100%;\r\n  }\r\n  \r\n  \r\n  .home-inner {\r\n\r\n    padding: 57px 100px;\r\n    text-align: center;\r\n    position: relative;\r\n    top:30px;\r\n  }\r\n  \r\n  \r\n  .home-title{\r\n    color: rgb(219, 213, 213);\r\n    font-size: 72px;\r\n    font-weight: 700;\r\n    margin-bottom: 15px;\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  \r\n  .home-title>span{\r\n      color:#fff;\r\n  }\r\n  \r\n  \r\n  .home-inner>p{\r\n    color: #fff;\r\n    font-size: 18px;\r\n    font-weight: 300;\r\n    margin-bottom: 38px;\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n  \r\n  .hire-me{\r\n    background-color:#4f1558 ;\r\n    color:white;\r\n    border:none;\r\n    font-size: 22px;\r\n  }\r\n  \r\n  \r\n  .hire-me:hover{\r\n    background-color: #ba68c8;\r\n    box-shadow:2px 2px 10px white;\r\n  }\r\n  \r\n  \r\n  @media screen and (max-width:480px){\r\n    .home-title{\r\n      font-size: 30px;\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksc0RBQXNEO0lBQ3RELHlCQUFnRDtJQUNoRCx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFlBQVk7R0FDYjs7O0VBR0Q7O0lBRUUsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsU0FBUztHQUNWOzs7RUFDRDtJQUNFLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQiwwQkFBMEI7R0FDM0I7OztFQUNEO01BQ0ksV0FBVztHQUNkOzs7RUFDRDtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQiwwQkFBMEI7R0FDM0I7OztFQUNEO0lBQ0UsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0dBQ2pCOzs7RUFDRDtJQUNFLDBCQUEwQjtJQUMxQiw4QkFBOEI7R0FDL0I7OztFQUNEO0lBQ0U7TUFDRSxnQkFBZ0I7S0FDakI7R0FDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5vdmVybGF5LXNlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgICBiYWNrZ3JvdW5kOnVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZy5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDkzJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICBcclxuICAuaG9tZS1pbm5lciB7XHJcblxyXG4gICAgcGFkZGluZzogNTdweCAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDozMHB4O1xyXG4gIH1cclxuICAuaG9tZS10aXRsZXtcclxuICAgIGNvbG9yOiByZ2IoMjE5LCAyMTMsIDIxMyk7XHJcbiAgICBmb250LXNpemU6IDcycHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIC5ob21lLXRpdGxlPnNwYW57XHJcbiAgICAgIGNvbG9yOiNmZmY7XHJcbiAgfVxyXG4gIC5ob21lLWlubmVyPnB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzOHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB9XHJcbiAgLmhpcmUtbWV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0ZjE1NTggO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcbiAgLmhpcmUtbWU6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmE2OGM4O1xyXG4gICAgYm94LXNoYWRvdzoycHggMnB4IDEwcHggd2hpdGU7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDgwcHgpe1xyXG4gICAgLmhvbWUtdGl0bGV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s12\">\n        <div class=\"home-inner\">\n          <h1 class=\"home-title\">HI! I'm <span>Sivarajan</span></h1>\n          <p>I'm a UI developer. Creating a User Interface for the web applications according to the application users and application types </p>\n          <a class=\"btn btn-primary hire-me btn-large\" routerLink = \"../contact\"  >Hire Me <i class=\"glyphicon glyphicon-send\"></i>                     \n          </a>\n         \n         </div>\n      </div>  \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/pagenotfound/pagenotfound.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/pagenotfound/pagenotfound.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZW5vdGZvdW5kL3BhZ2Vub3Rmb3VuZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/pagenotfound/pagenotfound.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/pagenotfound/pagenotfound.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  pagenotfound works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/pagenotfound/pagenotfound.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/pagenotfound/pagenotfound.component.ts ***!
  \*******************************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/components/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/components/pagenotfound/pagenotfound.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\siva\portfo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map