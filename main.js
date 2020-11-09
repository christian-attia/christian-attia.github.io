(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/cattia/Documents/Perso/test_cv_angular/cv-attia/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./summary/summary.component */ "XqP2");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeline/timeline.component */ "WpLk");
/* harmony import */ var _world_map_world_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./world-map/world-map.component */ "mJqa");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");







class AppComponent {
    constructor() {
        this.title = 'cv-attia';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-world-map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _summary_summary_component__WEBPACK_IMPORTED_MODULE_2__["SummaryComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_3__["TimelineComponent"], _world_map_world_map_component__WEBPACK_IMPORTED_MODULE_4__["WorldMapComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "WpLk":
/*!************************************************!*\
  !*** ./src/app/timeline/timeline.component.ts ***!
  \************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TimelineComponent {
    constructor() { }
    ngOnInit() {
    }
}
TimelineComponent.ɵfac = function TimelineComponent_Factory(t) { return new (t || TimelineComponent)(); };
TimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimelineComponent, selectors: [["app-timeline"]], decls: 78, vars: 0, consts: [[1, "allPage"], [1, "timeline"], ["href", "https://techso.ca/"], ["src", "../../assets/techso-logo.png", "width", "200", "alt", ""], ["href", "https://www.st-hubert.com/fr.html"], ["src", "../../assets/sthub-logo.png", "width", "200", "alt", ""], ["href", "https://www.uqac.ca/"], ["src", "../../assets/UQAC-logo.png", "width", "200", "alt", ""], ["href", "https://www.cgi.fr/fr-fr"], ["src", "../../assets/CGI-logo.png", "width", "200", "alt", ""], ["href", "https://www.3il-ingenieurs.fr/"], ["src", "../../assets/3il-logo.svg", "width", "200", "alt", ""], ["href", "https://www.ville-castelsarrasin.fr/environnement-et-territoire/territoire/le-31-rg/"], ["src", "../../assets/logo-armee-de-terre.png", "width", "200", "alt", ""]], template: function TimelineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Septembre 2020 - F\u00E9vrier 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Stage de fin d'\u00E9tude. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "T\u00E2ches r\u00E9alis\u00E9es : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Application iOs application PHP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Technologies utilis\u00E9es :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " PHP, Jquery, Flutter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, iste iusto quas eligendi corporis id eius corrupti temporibus velit? Molestias harum voluptatibus veritatis explicabo ut velit deserunt, saepe sit commodi? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Septembre 2019 - Juin 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Job \u00E9tudiant de fin d'\u00E9tude. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "T\u00E2ches r\u00E9alis\u00E9es :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Employ\u00E9 polyvalent ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Technologies utilis\u00E9es :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Autonomie, travail d'\u00E9quipe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, iste iusto quas eligendi corporis id eius corrupti temporibus velit? Molestias harum voluptatibus veritatis explicabo ut velit deserunt, saepe sit commodi? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Septembre 2019 - Ao\u00FBt 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Maitrise en informatique. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, iste iusto quas eligendi corporis id eius corrupti temporibus velit? Molestias harum voluptatibus veritatis explicabo ut velit deserunt, saepe sit commodi? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Septembre 2017 - Ao\u00FBt 2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Analyste-programmeur en alternance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "T\u00E2ches r\u00E9alis\u00E9es :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Gestion de flux de donn\u00E9es, g\u00E9n\u00E9ration de rapports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Technologies utilis\u00E9es :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Java, Talend, SpagoBI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, iste iusto quas eligendi corporis id eius corrupti temporibus velit? Molestias harum voluptatibus veritatis explicabo ut velit deserunt, saepe sit commodi? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Septembre 2015 - Ao\u00FBt 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Maitrise en informatique ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, iste iusto quas eligendi corporis id eius corrupti temporibus velit? Molestias harum voluptatibus veritatis explicabo ut velit deserunt, saepe sit commodi? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Septembre 2012 - Ao\u00FBt 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " R\u00E9serviste militaire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, iste iusto quas eligendi corporis id eius corrupti temporibus velit? Molestias harum voluptatibus veritatis explicabo ut velit deserunt, saepe sit commodi? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\n  font-family: Helvetica;\n}\n\n.timeline[_ngcontent-%COMP%] {\n  width: 300px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\np[_ngcontent-%COMP%] {\n  border-top: 2px dashed;\n  border-color: blue !important;\n  margin: 0;\n  padding: 30px;\n}\n\np[_ngcontent-%COMP%]:nth-child(even) {\n  border-left: 2px dashed;\n  border-top-left-radius: 30px;\n  border-bottom-left-radius: 30px;\n  margin-right: 30px;\n  padding-right: 0;\n}\n\np[_ngcontent-%COMP%]:nth-child(odd) {\n  border-right: 2px dashed;\n  border-top-right-radius: 30px;\n  border-bottom-right-radius: 30px;\n  margin-left: 30px;\n  padding-left: 0;\n}\n\np[_ngcontent-%COMP%]:first-child {\n  border-top: 0;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\np[_ngcontent-%COMP%]:last-child {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.allPage[_ngcontent-%COMP%] {\n  background-image: linear-gradient(\n    to bottom,\n    #ffffff,\n    #f0f0fc,\n    #e0e1f9,\n    #cdd3f6,\n    #b8c6f4,\n    #adc0f3,\n    #a1bbf1,\n    #95b5f0,\n    #94b4ef,\n    #92b4ee,\n    #91b3ed,\n    #90b2ec\n  );\n  \n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsU0FBUztFQUNULGFBQWE7QUFDZjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qiw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLDRCQUE0QjtBQUM5Qjs7QUFDQTtFQUNFOzs7Ozs7Ozs7Ozs7OztHQWNDO0VBQ0QsaUlBQWlJO0VBQ2pJLGtJQUFrSTtBQUNwSSIsImZpbGUiOiJzcmMvYXBwL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcbn1cblxuLnRpbWVsaW5lIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxucCB7XG4gIGJvcmRlci10b3A6IDJweCBkYXNoZWQ7XG4gIGJvcmRlci1jb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbnA6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBkYXNoZWQ7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cblxucDpudGgtY2hpbGQob2RkKSB7XG4gIGJvcmRlci1yaWdodDogMnB4IGRhc2hlZDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG5wOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcDogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG59XG5cbnA6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufVxuLmFsbFBhZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gYm90dG9tLFxuICAgICNmZmZmZmYsXG4gICAgI2YwZjBmYyxcbiAgICAjZTBlMWY5LFxuICAgICNjZGQzZjYsXG4gICAgI2I4YzZmNCxcbiAgICAjYWRjMGYzLFxuICAgICNhMWJiZjEsXG4gICAgIzk1YjVmMCxcbiAgICAjOTRiNGVmLFxuICAgICM5MmI0ZWUsXG4gICAgIzkxYjNlZCxcbiAgICAjOTBiMmVjXG4gICk7XG4gIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDFkZWcsIHJnYmEoMjQwLDI0MCwyNDksMSkgMCUsIHJnYmEoMzAsODUsMTA3LDAuOTYyNjIyNTQ5MDE5NjA3OSkgNTElLCByZ2JhKDQ0LDE1MywxNzUsMSkgNzUlKTsgKi9cbiAgLyogYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI0MCwyNDAsMjQ5LDEpIDEzJSwgcmdiYSgzMCw4NSwxMDcsMC45NjI2MjI1NDkwMTk2MDc5KSA0NiUsIHJnYmEoNDQsMTUzLDE3NSwxKSAxMDAlKTsgKi9cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-timeline',
                templateUrl: './timeline.component.html',
                styleUrls: ['./timeline.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "XqP2":
/*!**********************************************!*\
  !*** ./src/app/summary/summary.component.ts ***!
  \**********************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typed.js */ "ELNm");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");




class SummaryComponent {
    constructor() {
        this.faCoffee = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCoffee"];
    }
    ngOnInit() {
        const options = {
            strings: ['', 'Java', 'C', 'Web', 'Python', 'Mobile'],
            typeSpeed: 100,
            backSpeed: 50,
            showCursor: true,
            cursorChar: '|',
            loop: true
        };
        const hobbies = {
            strings: [
                '',
                'passioné de course',
                'un amoureux des voyages',
                'cross fitteur',
                'amateur de café'
            ],
            typeSpeed: 100,
            backSpeed: 50,
            showCursor: true,
            cursorChar: '|',
            loop: true
        };
        const typedLanguages = new typed_js__WEBPACK_IMPORTED_MODULE_1___default.a('.typed-element', options);
        const typedHobbies = new typed_js__WEBPACK_IMPORTED_MODULE_1___default.a('.typed-hobbies', hobbies);
    }
}
SummaryComponent.ɵfac = function SummaryComponent_Factory(t) { return new (t || SummaryComponent)(); };
SummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SummaryComponent, selectors: [["app-summary"]], decls: 32, vars: 0, consts: [[1, "bg"], [1, "row", "pt-5"], [1, "col-sm-5", "pt-2"], ["size", "50", 2, "height", "1px", "border", "none", "color", "#333", "background-color", "#333"], [1, "col-sm-2"], [1, "text-center"], [2, "width", "100%", "height", "1px", "border", "none", "color", "#333", "background-color", "#333"], [2, "font-family", "courier"], [1, "typed-element"], [1, "typed-hobbies"], [1, "salut"], [1, "row", "text-white"], [1, "col-1"], [1, "col-11"], [1, "", 2, "font-family", "verdana"], [1, "pl-2", "text-left", 2, "font-family", "courier"], [1, "bg-white"], [1, "text-dark", "text-center"]], template: function SummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Christian Attia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Je suis d\u00E9veloppeur ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Mais aussi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Bonjour !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Je suis Christian Attia ! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " La programmation me passionne, j'aime aussi beaucoup le sport, dont la course et apprendre de nouvelles choses !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " N'h\u00E9sitez pas \u00E0 me contacter ou \u00E0 jeter un \u0153il \u00E0 mon profil. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h1", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Chronologie ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".bg[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-image: url('place_iceland.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.salut[_ngcontent-%COMP%] {\n  background-color: #261a19;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VtbWFyeS9zdW1tYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsMENBQXVEO0VBQ3ZELDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQSxnQkFBZ0I7QUFFaEIsc0NBQXNDIiwiZmlsZSI6InNyYy9hcHAvc3VtbWFyeS9zdW1tYXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmcge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvcGxhY2VfaWNlbGFuZC5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5zYWx1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjFhMTk7XG59XG5cbi8qIEZ1bGwgaGVpZ2h0ICovXG5cbi8qIENlbnRlciBhbmQgc2NhbGUgdGhlIGltYWdlIG5pY2VseSAqL1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SummaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-summary',
                templateUrl: './summary.component.html',
                styleUrls: ['./summary.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts3-angular */ "Z7g2");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./summary/summary.component */ "XqP2");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./timeline/timeline.component */ "WpLk");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _world_map_world_map_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./world-map/world-map.component */ "mJqa");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_2__["AmChartsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _summary_summary_component__WEBPACK_IMPORTED_MODULE_6__["SummaryComponent"],
        _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_8__["TimelineComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
        _world_map_world_map_component__WEBPACK_IMPORTED_MODULE_10__["WorldMapComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_2__["AmChartsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _summary_summary_component__WEBPACK_IMPORTED_MODULE_6__["SummaryComponent"],
                    _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_8__["TimelineComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                    _world_map_world_map_component__WEBPACK_IMPORTED_MODULE_10__["WorldMapComponent"]
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_2__["AmChartsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HeaderComponent {
    constructor() {
        this.clickedFace = false;
        this.clickedPic = false;
        this.fruits = [
            "J'aime énormément le café",
            "J'ai fait mon premier semi marathon (Run In Lyon) en 1h42",
            "Lors d'une course de 20km (Marseille-Cassis), j'en ai couru une partie sans chaussures",
            "J'ai vécu 14 ans en Égypte",
            'Je suis Franco-Égyptien',
            "J'adore le cross-fit mais je trouve ça trop cher",
            'Mon plat préféré est la pizza',
            'Ma série préférée est The Office',
            'Mon autre série préférée est Breaking Bad',
            "J'ai dormi lors d'un road-trip en Islande sur un matelas troué le premier soir",
            "J'ai dormi lors d'un road-trip au Québec dans ma voiture car il faisait trop froid dehors",
            'Mon endroit préféré est Fourvière',
            'Avoir une Tesla est sur ma Bucket-List'
        ];
    }
    ngOnInit() { }
    clickFace(event) {
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var value = idAttr.nodeValue;
        var faceDiv = document.getElementById('FacePicture');
        var divsImg = faceDiv.getElementsByTagName('img');
        for (let index = 0; index < divsImg.length; index++) {
            divsImg[index].className = '';
        }
        document.getElementById(value).className = ' target';
        this.clickedFace = true;
        if (this.clickedFace && this.clickedPic) {
            this.onclickBoth();
        }
    }
    clickPic(event) {
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var value = idAttr.nodeValue;
        var faceDiv = document.getElementById('landscapePic');
        var divsImg = faceDiv.getElementsByTagName('img');
        for (let index = 0; index < divsImg.length; index++) {
            divsImg[index].className = 'img-thumbnail';
        }
        document.getElementById(value).className = 'img-thumbnail target';
        this.clickedPic = true;
        if (this.clickedFace && this.clickedPic) {
            this.onclickBoth();
        }
    }
    onclickBoth() {
        var LandsDiv = document.getElementById('landscapePic');
        var divsImgL = LandsDiv.getElementsByTagName('img');
        for (let index = 0; index < divsImgL.length; index++) {
            divsImgL[index].className = 'img-thumbnail';
        }
        var faceDiv = document.getElementById('FacePicture');
        var divsImg = faceDiv.getElementsByTagName('img');
        for (let index = 0; index < divsImg.length; index++) {
            divsImg[index].className = '';
        }
        this.clickedPic = false;
        this.clickedFace = false;
        document.getElementById('anecdote').innerHTML = this.fruits[Math.floor(Math.random() * this.fruits.length)];
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 64, vars: 0, consts: [[1, "pos-f-t"], ["id", "navbarToggleExternalContent", 1, "collapse"], [1, "bg-dark", "p-4"], [1, "row"], ["id", "FacePicture", 1, "col-6"], [1, "text-white"], [1, "col-sm-2"], ["src", "../../assets/bald_christian.ico", "id", "Bald", 3, "click"], ["src", "../../assets/happy_christian.ico", "id", "Happy", 3, "click"], ["src", "../../assets/victorious_christian.ico", "id", "Victorious", 3, "click"], ["src", "../../assets/hairy_christian.ico", "id", "Hairy", 3, "click"], ["id", "landscapePic", 1, "col-6"], ["src", "../../assets/place_egypt.jpg", "id", "placeEgypt", "width", "200", "height", "200", 1, "img-thumbnail", 3, "click"], ["src", "../../assets/place_iceland.jpg", "id", "placeIceland", "width", "300", "height", "200", 1, "img-thumbnail", 3, "click"], ["src", "../../assets/place_egypt.jpg", "id", "placeIrland", "width", "200", "height", "200", 1, "img-thumbnail", 3, "click"], ["src", "../../assets/place_egypt.jpg", "id", "placeCanada", "width", "200", "height", "200", 1, "img-thumbnail", 3, "click"], ["src", "../../assets/place_egypt.jpg", "id", "placePortugal", "width", "200", "height", "200", 1, "img-thumbnail", 3, "click"], ["id", "anecdote", 1, "text-white"], [1, "navbar", "navbar-dark", "bg-dark"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarToggleExternalContent", "aria-controls", "navbarToggleExternalContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Choose your character : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_img_click_10_listener($event) { return ctx.clickFace($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "figcaption", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Bald Christian");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_img_click_15_listener($event) { return ctx.clickFace($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "figcaption", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Happy Christian");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_img_click_20_listener($event) { return ctx.clickFace($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "figcaption", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Victorious Christian");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_img_click_25_listener($event) { return ctx.clickFace($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "figcaption", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Hairy Christian");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Choose your favorite place : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_img_click_34_listener($event) { return ctx.clickPic($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Egypt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_img_click_39_listener($event) { return ctx.clickPic($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Iceland");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_img_click_44_listener($event) { return ctx.clickPic($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Iceland");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_img_click_49_listener($event) { return ctx.clickPic($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Canada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_img_click_54_listener($event) { return ctx.clickPic($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Canada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Cliquez sur un Christian et sur une des images pour avoir une anecdote ! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "nav", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "CA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["img[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.selected[_ngcontent-%COMP%] {\n  box-shadow: 0px 12px 22px 1px #fff;\n}\n\nimg[_ngcontent-%COMP%] {\n  margin: 3px;\n  width: 100px;\n}\n\nimg[_ngcontent-%COMP%]:hover, img[_ngcontent-%COMP%]:target {\n  border: 3px solid #fff;\n  margin: 0;\n}\n\n.target[_ngcontent-%COMP%] {\n  border: 3px solid #fff;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBQ0E7O0VBRUUsc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZWxlY3RlZCB7XG4gIGJveC1zaGFkb3c6IDBweCAxMnB4IDIycHggMXB4ICNmZmY7XG59XG5pbWcge1xuICBtYXJnaW46IDNweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuaW1nOmhvdmVyLFxuaW1nOnRhcmdldCB7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XG4gIG1hcmdpbjogMDtcbn1cbi50YXJnZXQge1xuICBib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xuICBtYXJnaW46IDA7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 21, vars: 0, consts: [[1, ""], [1, "row"], [1, "col-6"], [1, "col-sm-3"], [1, "mt-3"], [1, "col-sm-1", "mt-2"], ["href", "https://www.linkedin.com/in/christian-attia/"], ["aria-hidden", "true", 1, "fa", "fa-linkedin-square", "fa-3x"], [1, "col-sm-1", "text-left"], ["href", "mailto:christian_attia@hotmail.com"], ["aria-hidden", "true", 1, "fa", "fa-envelope-o", "fa-2x", "mt-3"], ["href", "href=tel:+33761585776"], ["aria-hidden", "true", 1, "fa", "fa-phone", "fa-2x", "mt-3"], [1, "text-right", "mt-4", "mr-4"], ["aria-hidden", "true", 1, "fa", "fa-id-card-o"], ["href", "../../assets/CV_Christian_ATTIA.pdf", "download", ""]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A9 2020 Christian ATTIA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " T\u00E9l\u00E9charger mon cv d\u00E9taill\u00E9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "mJqa":
/*!**************************************************!*\
  !*** ./src/app/world-map/world-map.component.ts ***!
  \**************************************************/
/*! exports provided: WorldMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldMapComponent", function() { return WorldMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts3-angular */ "Z7g2");



class WorldMapComponent {
    constructor(AmCharts) {
        this.AmCharts = AmCharts;
    }
    ngAfterViewInit() {
        this.chart = this.AmCharts.makeChart('map', {
            type: 'map',
            pathToImages: 'http://www.amcharts.com/lib/3/images/',
            addClassNames: true,
            fontSize: 15,
            color: '#000000',
            projection: 'miller',
            backgroundAlpha: 1,
            backgroundColor: 'rgba(144,178,236,1)',
            dataProvider: {
                map: 'worldLow',
                getAreasFromMap: false,
                images: [
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -86.0652,
                        latitude: 82.4335,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -80.4961,
                        latitude: 82.4335,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -74.927,
                        latitude: 82.4335,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -69.3579,
                        latitude: 82.4335,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -63.7888,
                        latitude: 82.4335,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -41.5123,
                        latitude: 82.4335,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -35.9432,
                        latitude: 82.4335,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -30.3741,
                        latitude: 82.4335,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -24.805,
                        latitude: 82.4335,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -94.4188,
                        latitude: 80.4247,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -88.8497,
                        latitude: 80.4247,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -77.7115,
                        latitude: 80.4247,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -72.1424,
                        latitude: 80.4247,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -66.5733,
                        latitude: 80.4247,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -61.0042,
                        latitude: 80.4247,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -55.4351,
                        latitude: 80.4247,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -49.866,
                        latitude: 80.4247,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -44.2969,
                        latitude: 80.4247,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -38.7278,
                        latitude: 80.4247,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -33.1587,
                        latitude: 80.4247,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -27.5896,
                        latitude: 80.4247,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -22.0204,
                        latitude: 80.4247,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Svalbard and Jan Mayen',
                        longitude: 22.5324,
                        latitude: 80.4247,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 94.9308,
                        latitude: 80.4247,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -102.7725,
                        latitude: 78.2913,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -97.2034,
                        latitude: 78.2913,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -91.6343,
                        latitude: 78.2913,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -86.0652,
                        latitude: 78.2913,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -80.4961,
                        latitude: 78.2913,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -69.3579,
                        latitude: 78.2913,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -63.7888,
                        latitude: 78.2913,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -58.2196,
                        latitude: 78.2913,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -52.6505,
                        latitude: 78.2913,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -47.0814,
                        latitude: 78.2913,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -41.5123,
                        latitude: 78.2913,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -35.9432,
                        latitude: 78.2913,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -30.3741,
                        latitude: 78.2913,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -24.805,
                        latitude: 78.2913,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Svalbard and Jan Mayen',
                        longitude: 14.1787,
                        latitude: 78.2913,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 103.2845,
                        latitude: 78.2913,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -122.2644,
                        latitude: 76.0277,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -116.6953,
                        latitude: 76.0277,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -99.9879,
                        latitude: 76.0277,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -61.0042,
                        latitude: 76.0277,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -55.4351,
                        latitude: 76.0277,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -49.866,
                        latitude: 76.0277,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -44.2969,
                        latitude: 76.0277,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -38.7278,
                        latitude: 76.0277,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -33.1587,
                        latitude: 76.0277,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -27.5896,
                        latitude: 76.0277,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -22.0204,
                        latitude: 76.0277,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 61.5162,
                        latitude: 76.0277,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 94.9308,
                        latitude: 76.0277,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 100.4999,
                        latitude: 76.0277,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 106.069,
                        latitude: 76.0277,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 111.6381,
                        latitude: 76.0277,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 139.4837,
                        latitude: 76.0277,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -119.4798,
                        latitude: 73.6283,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -97.2034,
                        latitude: 73.6283,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -91.6343,
                        latitude: 73.6283,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -86.0652,
                        latitude: 73.6283,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -80.4961,
                        latitude: 73.6283,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -52.6505,
                        latitude: 73.6283,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -47.0814,
                        latitude: 73.6283,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -41.5123,
                        latitude: 73.6283,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -35.9432,
                        latitude: 73.6283,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -30.3741,
                        latitude: 73.6283,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -24.805,
                        latitude: 73.6283,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 81.008,
                        latitude: 73.6283,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 86.5771,
                        latitude: 73.6283,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 92.1462,
                        latitude: 73.6283,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 97.7154,
                        latitude: 73.6283,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 103.2845,
                        latitude: 73.6283,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 108.8536,
                        latitude: 73.6283,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 114.4227,
                        latitude: 73.6283,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 125.5609,
                        latitude: 73.6283,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 142.2682,
                        latitude: 73.6283,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -155.679,
                        latitude: 71.0878,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -122.2644,
                        latitude: 71.0878,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -116.6953,
                        latitude: 71.0878,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -111.1262,
                        latitude: 71.0878,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -105.5571,
                        latitude: 71.0878,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -94.4188,
                        latitude: 71.0878,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -88.8497,
                        latitude: 71.0878,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -83.2806,
                        latitude: 71.0878,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -77.7115,
                        latitude: 71.0878,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -72.1424,
                        latitude: 71.0878,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -49.866,
                        latitude: 71.0878,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -44.2969,
                        latitude: 71.0878,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -38.7278,
                        latitude: 71.0878,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -33.1587,
                        latitude: 71.0878,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -27.5896,
                        latitude: 71.0878,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -22.0204,
                        latitude: 71.0878,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Norway',
                        longitude: 28.1015,
                        latitude: 71.0878,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 55.9471,
                        latitude: 71.0878,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 67.0853,
                        latitude: 71.0878,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 72.6544,
                        latitude: 71.0878,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 78.2235,
                        latitude: 71.0878,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 83.7926,
                        latitude: 71.0878,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 89.3617,
                        latitude: 71.0878,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 94.9308,
                        latitude: 71.0878,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 100.4999,
                        latitude: 71.0878,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 106.069,
                        latitude: 71.0878,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 111.6381,
                        latitude: 71.0878,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 117.2072,
                        latitude: 71.0878,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 122.7763,
                        latitude: 71.0878,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 128.3454,
                        latitude: 71.0878,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 133.9146,
                        latitude: 71.0878,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 139.4837,
                        latitude: 71.0878,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 145.0528,
                        latitude: 71.0878,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 150.6219,
                        latitude: 71.0878,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -164.0327,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -158.4636,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -152.8945,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -147.3254,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -141.7563,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -136.1871,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -130.618,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -125.0489,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -119.4798,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -113.9107,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -108.3416,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -97.2034,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -91.6343,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -86.0652,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -69.3579,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -52.6505,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -47.0814,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -41.5123,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -35.9432,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -30.3741,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Sweden',
                        longitude: 19.7479,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Finland',
                        longitude: 25.317,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 30.8861,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 36.4552,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 53.1625,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 58.7316,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 64.3007,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 69.8698,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 75.4389,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 81.008,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 86.5771,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 92.1462,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 97.7154,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 103.2845,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 108.8536,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 114.4227,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 119.9918,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 125.5609,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 131.13,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 136.6991,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 142.2682,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 147.8373,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 153.4064,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 158.9755,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 164.5446,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 170.1137,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 175.6829,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 181.252,
                        latitude: 68.4013,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -166.8172,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -161.2481,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -155.679,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -150.1099,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -144.5408,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -138.9717,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -133.4026,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -127.8335,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -122.2644,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -116.6953,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -111.1262,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -105.5571,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -99.9879,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -94.4188,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -88.8497,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -72.1424,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -49.866,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -44.2969,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Iceland',
                        longitude: -22.0204,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Iceland',
                        longitude: -16.4513,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Sweden',
                        longitude: 16.9633,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Finland',
                        longitude: 28.1015,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 33.6706,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 44.8088,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 50.3779,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 55.9471,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 61.5162,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 67.0853,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 72.6544,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 78.2235,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 83.7926,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 89.3617,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 94.9308,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 100.4999,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 106.069,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 111.6381,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 117.2072,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 122.7763,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 128.3454,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 133.9146,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 139.4837,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 145.0528,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 150.6219,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 156.191,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 161.7601,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 167.3292,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 172.8983,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 178.4674,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 184.0365,
                        latitude: 65.5644,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -164.0327,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -158.4636,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -152.8945,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -147.3254,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -141.7563,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -136.1871,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -130.618,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -125.0489,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -119.4798,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -113.9107,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -108.3416,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -102.7725,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -97.2034,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -69.3579,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greenland',
                        longitude: -47.0814,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Norway',
                        longitude: 8.6096,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Sweden',
                        longitude: 14.1787,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Finland',
                        longitude: 25.317,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Finland',
                        longitude: 30.8861,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 36.4552,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 42.0243,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 47.5934,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 53.1625,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 58.7316,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 64.3007,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 69.8698,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 75.4389,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 81.008,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 86.5771,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 92.1462,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 97.7154,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 103.2845,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 108.8536,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 114.4227,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 119.9918,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 125.5609,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 131.13,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 136.6991,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 142.2682,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 147.8373,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 153.4064,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 158.9755,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 164.5446,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 170.1137,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 175.6829,
                        latitude: 62.5734,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -161.2481,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -155.679,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -138.9717,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -133.4026,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -127.8335,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -122.2644,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -116.6953,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -111.1262,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -105.5571,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -99.9879,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -77.7115,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -72.1424,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Norway',
                        longitude: 5.8251,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Sweden',
                        longitude: 11.3942,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Sweden',
                        longitude: 16.9633,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 28.1015,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 33.6706,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 39.2397,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 44.8088,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 50.3779,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 55.9471,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 61.5162,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 67.0853,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 72.6544,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 78.2235,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 83.7926,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 89.3617,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 94.9308,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 100.4999,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 106.069,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 111.6381,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 117.2072,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 122.7763,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 128.3454,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 133.9146,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 139.4837,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 145.0528,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 161.7601,
                        latitude: 59.4254,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -158.4636,
                        latitude: 56.1186,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -130.618,
                        latitude: 56.1186,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -125.0489,
                        latitude: 56.1186,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -119.4798,
                        latitude: 56.1186,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -113.9107,
                        latitude: 56.1186,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -108.3416,
                        latitude: 56.1186,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -102.7725,
                        latitude: 56.1186,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -97.2034,
                        latitude: 56.1186,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -91.6343,
                        latitude: 56.1186,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -74.927,
                        latitude: 56.1186,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -69.3579,
                        latitude: 56.1186,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -63.7888,
                        latitude: 56.1186,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Denmark',
                        longitude: 8.6096,
                        latitude: 56.1186,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Sweden',
                        longitude: 14.1787,
                        latitude: 56.1186,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Latvia',
                        longitude: 25.317,
                        latitude: 56.1186,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 30.8861,
                        latitude: 56.1186,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 36.4552,
                        latitude: 56.1186,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 42.0243,
                        latitude: 56.1186,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 47.5934,
                        latitude: 56.1186,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 53.1625,
                        latitude: 56.1186,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 58.7316,
                        latitude: 56.1186,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 64.3007,
                        latitude: 56.1186,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 69.8698,
                        latitude: 56.1186,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 75.4389,
                        latitude: 56.1186,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 81.008,
                        latitude: 56.1186,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 86.5771,
                        latitude: 56.1186,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 92.1462,
                        latitude: 56.1186,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 97.7154,
                        latitude: 56.1186,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 103.2845,
                        latitude: 56.1186,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 108.8536,
                        latitude: 56.1186,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 114.4227,
                        latitude: 56.1186,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 119.9918,
                        latitude: 56.1186,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 125.5609,
                        latitude: 56.1186,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 131.13,
                        latitude: 56.1186,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 136.6991,
                        latitude: 56.1186,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 158.9755,
                        latitude: 56.1186,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -127.8335,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -122.2644,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -116.6953,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -111.1262,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -105.5571,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -99.9879,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -94.4188,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -88.8497,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -83.2806,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -77.7115,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -72.1424,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -66.5733,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -61.0042,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United Kingdom',
                        longitude: 0.256,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Netherlands',
                        longitude: 5.8251,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Germany',
                        longitude: 11.3942,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Poland',
                        longitude: 16.9633,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Poland',
                        longitude: 22.5324,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Belarus',
                        longitude: 28.1015,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 33.6706,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 39.2397,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 44.8088,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 50.3779,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 55.9471,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Kazakhstan',
                        longitude: 61.5162,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Kazakhstan',
                        longitude: 67.0853,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Kazakhstan',
                        longitude: 72.6544,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Kazakhstan',
                        longitude: 78.2235,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 83.7926,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 89.3617,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 94.9308,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 100.4999,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 106.069,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 111.6381,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 117.2072,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 122.7763,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 128.3454,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 133.9146,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 139.4837,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 156.191,
                        latitude: 52.6524,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -125.0489,
                        latitude: 49.0275,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -119.4798,
                        latitude: 49.0275,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -113.9107,
                        latitude: 49.0275,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -108.3416,
                        latitude: 49.0275,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -102.7725,
                        latitude: 49.0275,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -97.2034,
                        latitude: 49.0275,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -91.6343,
                        latitude: 49.0275,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -86.0652,
                        latitude: 49.0275,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -80.4961,
                        latitude: 49.0275,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -74.927,
                        latitude: 49.0275,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -69.3579,
                        latitude: 49.0275,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -58.2196,
                        latitude: 49.0275,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'France',
                        longitude: 3.2547,
                        latitude: 48.2687,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Germany',
                        longitude: 8.6096,
                        latitude: 49.0275,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Czechia',
                        longitude: 14.1787,
                        latitude: 49.0275,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Slovakia',
                        longitude: 19.7479,
                        latitude: 49.0275,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Ukraine',
                        longitude: 25.317,
                        latitude: 49.0275,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Ukraine',
                        longitude: 30.8861,
                        latitude: 49.0275,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Ukraine',
                        longitude: 36.4552,
                        latitude: 49.0275,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 42.0243,
                        latitude: 49.0275,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Kazakhstan',
                        longitude: 47.5934,
                        latitude: 49.0275,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Kazakhstan',
                        longitude: 53.1625,
                        latitude: 49.0275,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Kazakhstan',
                        longitude: 58.7316,
                        latitude: 49.0275,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Kazakhstan',
                        longitude: 64.3007,
                        latitude: 49.0275,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Kazakhstan',
                        longitude: 69.8698,
                        latitude: 49.0275,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Kazakhstan',
                        longitude: 75.4389,
                        latitude: 49.0275,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Kazakhstan',
                        longitude: 81.008,
                        latitude: 49.0275,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Kazakhstan',
                        longitude: 86.5771,
                        latitude: 49.0275,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Mongolia',
                        longitude: 92.1462,
                        latitude: 49.0275,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Mongolia',
                        longitude: 97.7154,
                        latitude: 49.0275,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Mongolia',
                        longitude: 103.2845,
                        latitude: 49.0275,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Mongolia',
                        longitude: 108.8536,
                        latitude: 49.0275,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Mongolia',
                        longitude: 114.4227,
                        latitude: 49.0275,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 119.9918,
                        latitude: 49.0275,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 125.5609,
                        latitude: 49.0275,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 131.13,
                        latitude: 49.0275,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 136.6991,
                        latitude: 49.0275,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 142.2682,
                        latitude: 49.0275,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -122.2644,
                        latitude: 45.2465,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -116.6953,
                        latitude: 45.2465,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -111.1262,
                        latitude: 45.2465,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -105.5571,
                        latitude: 45.2465,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -99.9879,
                        latitude: 45.2465,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -94.4188,
                        latitude: 45.2465,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -88.8497,
                        latitude: 45.2465,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -77.7115,
                        latitude: 45.2465,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -72.1424,
                        latitude: 45.2465,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -66.5733,
                        latitude: 45.2465,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Canada',
                        longitude: -61.0042,
                        latitude: 45.2465,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'France',
                        longitude: 0.256,
                        latitude: 45.2465,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'France',
                        longitude: 5.8251,
                        latitude: 45.2465,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Italy',
                        longitude: 11.3942,
                        latitude: 45.2465,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Croatia',
                        longitude: 16.9633,
                        latitude: 45.2465,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Romania',
                        longitude: 22.5324,
                        latitude: 45.2465,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Romania',
                        longitude: 28.1015,
                        latitude: 45.2465,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Ukraine',
                        longitude: 33.6706,
                        latitude: 45.2465,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 39.2397,
                        latitude: 45.2465,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 44.8088,
                        latitude: 45.2465,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Kazakhstan',
                        longitude: 55.9471,
                        latitude: 45.2465,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Kazakhstan',
                        longitude: 61.5162,
                        latitude: 45.2465,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Kazakhstan',
                        longitude: 67.0853,
                        latitude: 45.2465,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Kazakhstan',
                        longitude: 72.6544,
                        latitude: 45.2465,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Kazakhstan',
                        longitude: 78.2235,
                        latitude: 45.2465,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 83.7926,
                        latitude: 45.2465,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 89.3617,
                        latitude: 45.2465,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Mongolia',
                        longitude: 94.9308,
                        latitude: 45.2465,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Mongolia',
                        longitude: 100.4999,
                        latitude: 45.2465,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Mongolia',
                        longitude: 106.069,
                        latitude: 45.2465,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Mongolia',
                        longitude: 111.6381,
                        latitude: 45.2465,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 117.2072,
                        latitude: 45.2465,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 122.7763,
                        latitude: 45.2465,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 128.3454,
                        latitude: 45.2465,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 133.9146,
                        latitude: 45.2465,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -119.4798,
                        latitude: 41.3136,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -113.9107,
                        latitude: 41.3136,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -108.3416,
                        latitude: 41.3136,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -102.7725,
                        latitude: 41.3136,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -97.2034,
                        latitude: 41.3136,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -91.6343,
                        latitude: 41.3136,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -86.0652,
                        latitude: 41.3136,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -80.4961,
                        latitude: 41.3136,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -74.927,
                        latitude: 41.3136,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Portugal',
                        longitude: -8.0977,
                        latitude: 41.3136,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Spain',
                        longitude: -2.5286,
                        latitude: 41.3136,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Italy',
                        longitude: 14.1787,
                        latitude: 41.3136,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Albania',
                        longitude: 19.7479,
                        latitude: 41.3136,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greece',
                        longitude: 25.317,
                        latitude: 41.3136,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Turkey',
                        longitude: 36.4552,
                        latitude: 41.3136,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Turkey',
                        longitude: 42.0243,
                        latitude: 41.3136,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Russia',
                        longitude: 47.5934,
                        latitude: 41.3136,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Turkmenistan',
                        longitude: 58.7316,
                        latitude: 41.3136,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Uzbekistan',
                        longitude: 64.3007,
                        latitude: 41.3136,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Uzbekistan',
                        longitude: 69.8698,
                        latitude: 41.3136,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Kyrgyzstan',
                        longitude: 75.4389,
                        latitude: 41.3136,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 81.008,
                        latitude: 41.3136,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 86.5771,
                        latitude: 41.3136,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 92.1462,
                        latitude: 41.3136,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 97.7154,
                        latitude: 41.3136,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 103.2845,
                        latitude: 41.3136,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 108.8536,
                        latitude: 41.3136,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 114.4227,
                        latitude: 41.3136,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 119.9918,
                        latitude: 41.3136,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 125.5609,
                        latitude: 41.3136,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -122.2644,
                        latitude: 37.235,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -116.6953,
                        latitude: 37.235,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -111.1262,
                        latitude: 37.235,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -105.5571,
                        latitude: 37.235,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -99.9879,
                        latitude: 37.235,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -94.4188,
                        latitude: 37.235,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -88.8497,
                        latitude: 37.235,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -83.2806,
                        latitude: 37.235,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -77.7115,
                        latitude: 37.235,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Spain',
                        longitude: -5.3131,
                        latitude: 37.235,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Greece',
                        longitude: 22.5324,
                        latitude: 37.235,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Turkey',
                        longitude: 28.1015,
                        latitude: 37.235,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Turkey',
                        longitude: 33.6706,
                        latitude: 37.235,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Turkey',
                        longitude: 39.2397,
                        latitude: 37.235,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Turkey',
                        longitude: 44.8088,
                        latitude: 37.235,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Iran',
                        longitude: 50.3779,
                        latitude: 37.235,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Iran',
                        longitude: 55.9471,
                        latitude: 37.235,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Turkmenistan',
                        longitude: 61.5162,
                        latitude: 37.235,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Afghanistan',
                        longitude: 67.0853,
                        latitude: 37.235,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Tajikistan',
                        longitude: 72.6544,
                        latitude: 37.235,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 78.2235,
                        latitude: 37.235,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 83.7926,
                        latitude: 37.235,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 89.3617,
                        latitude: 37.235,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 94.9308,
                        latitude: 37.235,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 100.4999,
                        latitude: 37.235,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 106.069,
                        latitude: 37.235,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 111.6381,
                        latitude: 37.235,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 117.2072,
                        latitude: 37.235,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'South Korea',
                        longitude: 128.3454,
                        latitude: 37.235,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Japan',
                        longitude: 139.4837,
                        latitude: 37.235,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -113.9107,
                        latitude: 33.019,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -108.3416,
                        latitude: 33.019,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -102.7725,
                        latitude: 33.019,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -97.2034,
                        latitude: 33.019,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -91.6343,
                        latitude: 33.019,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -86.0652,
                        latitude: 33.019,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -80.4961,
                        latitude: 33.019,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Morocco',
                        longitude: -8.0977,
                        latitude: 33.019,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Morocco',
                        longitude: -2.5286,
                        latitude: 33.019,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Algeria',
                        longitude: 3.0405,
                        latitude: 33.019,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Tunisia',
                        longitude: 8.6096,
                        latitude: 33.019,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Syria',
                        longitude: 36.4552,
                        latitude: 33.019,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Iraq',
                        longitude: 42.0243,
                        latitude: 33.019,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Iran',
                        longitude: 47.5934,
                        latitude: 33.019,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Iran',
                        longitude: 53.1625,
                        latitude: 33.019,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Iran',
                        longitude: 58.7316,
                        latitude: 33.019,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Afghanistan',
                        longitude: 64.3007,
                        latitude: 33.019,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Pakistan',
                        longitude: 69.8698,
                        latitude: 33.019,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'India',
                        longitude: 75.4389,
                        latitude: 33.019,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 81.008,
                        latitude: 33.019,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 86.5771,
                        latitude: 33.019,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 92.1462,
                        latitude: 33.019,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 97.7154,
                        latitude: 33.019,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 103.2845,
                        latitude: 33.019,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 108.8536,
                        latitude: 33.019,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 114.4227,
                        latitude: 33.019,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 119.9918,
                        latitude: 33.019,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Japan',
                        longitude: 131.13,
                        latitude: 33.019,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Mexico',
                        longitude: -111.1262,
                        latitude: 28.6761,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Mexico',
                        longitude: -105.5571,
                        latitude: 28.6761,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -99.9879,
                        latitude: 28.6761,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Morocco',
                        longitude: -10.8822,
                        latitude: 28.6761,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Algeria',
                        longitude: -5.3131,
                        latitude: 28.6761,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Algeria',
                        longitude: 0.256,
                        latitude: 28.6761,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Algeria',
                        longitude: 5.8251,
                        latitude: 28.6761,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Libya',
                        longitude: 11.3942,
                        latitude: 28.6761,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Libya',
                        longitude: 16.9633,
                        latitude: 28.6761,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Libya',
                        longitude: 22.5324,
                        latitude: 28.6761,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Egypt',
                        longitude: 28.1015,
                        latitude: 28.6761,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Egypt',
                        longitude: 33.6706,
                        latitude: 28.6761,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Saudi Arabia',
                        longitude: 39.2397,
                        latitude: 28.6761,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Saudi Arabia',
                        longitude: 44.8088,
                        latitude: 28.6761,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Iran',
                        longitude: 55.9471,
                        latitude: 28.6761,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Iran',
                        longitude: 61.5162,
                        latitude: 28.6761,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Pakistan',
                        longitude: 67.0853,
                        latitude: 28.6761,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Pakistan',
                        longitude: 72.6544,
                        latitude: 28.6761,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'India',
                        longitude: 78.2235,
                        latitude: 28.6761,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Nepal',
                        longitude: 83.7926,
                        latitude: 28.6761,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 89.3617,
                        latitude: 28.6761,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'India',
                        longitude: 94.9308,
                        latitude: 28.6761,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 100.4999,
                        latitude: 28.6761,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 106.069,
                        latitude: 28.6761,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 111.6381,
                        latitude: 28.6761,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 117.2072,
                        latitude: 28.6761,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Mexico',
                        longitude: -102.7725,
                        latitude: 24.2188,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Western Sahara',
                        longitude: -13.6668,
                        latitude: 24.2188,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Mauritania',
                        longitude: -8.0977,
                        latitude: 24.2188,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Algeria',
                        longitude: -2.5286,
                        latitude: 24.2188,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Algeria',
                        longitude: 3.0405,
                        latitude: 24.2188,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Algeria',
                        longitude: 8.6096,
                        latitude: 24.2188,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Libya',
                        longitude: 14.1787,
                        latitude: 24.2188,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Libya',
                        longitude: 19.7479,
                        latitude: 24.2188,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Egypt',
                        longitude: 25.317,
                        latitude: 24.2188,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Egypt',
                        longitude: 30.8861,
                        latitude: 24.2188,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Saudi Arabia',
                        longitude: 42.0243,
                        latitude: 24.2188,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Saudi Arabia',
                        longitude: 47.5934,
                        latitude: 24.2188,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United Arab Emirates',
                        longitude: 53.1625,
                        latitude: 24.2188,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'India',
                        longitude: 69.8698,
                        latitude: 24.2188,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'India',
                        longitude: 75.4389,
                        latitude: 24.2188,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'India',
                        longitude: 81.008,
                        latitude: 24.2188,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'India',
                        longitude: 86.5771,
                        latitude: 24.2188,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'India',
                        longitude: 92.1462,
                        latitude: 24.2188,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Myanmar',
                        longitude: 97.7154,
                        latitude: 24.2188,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 103.2845,
                        latitude: 24.2188,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 108.8536,
                        latitude: 24.2188,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'China',
                        longitude: 114.4227,
                        latitude: 24.2188,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'United States',
                        longitude: -155.679,
                        latitude: 19.6618,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Mexico',
                        longitude: -99.9879,
                        latitude: 19.6618,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Mexico',
                        longitude: -88.8497,
                        latitude: 19.6618,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Haiti',
                        longitude: -72.1424,
                        latitude: 19.6618,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Mauritania',
                        longitude: -16.4513,
                        latitude: 19.6618,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Mauritania',
                        longitude: -10.8822,
                        latitude: 19.6618,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Mali',
                        longitude: -5.3131,
                        latitude: 19.6618,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Mali',
                        longitude: 0.256,
                        latitude: 19.6618,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Niger',
                        longitude: 5.8251,
                        latitude: 19.6618,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Niger',
                        longitude: 11.3942,
                        latitude: 19.6618,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Chad',
                        longitude: 16.9633,
                        latitude: 19.6618,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Chad',
                        longitude: 22.5324,
                        latitude: 19.6618,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Sudan',
                        longitude: 28.1015,
                        latitude: 19.6618,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Sudan',
                        longitude: 33.6706,
                        latitude: 19.6618,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Saudi Arabia',
                        longitude: 44.8088,
                        latitude: 19.6618,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Saudi Arabia',
                        longitude: 50.3779,
                        latitude: 19.6618,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Oman',
                        longitude: 55.9471,
                        latitude: 19.6618,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'India',
                        longitude: 78.2235,
                        latitude: 19.6618,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'India',
                        longitude: 83.7926,
                        latitude: 19.6618,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Myanmar',
                        longitude: 94.9308,
                        latitude: 19.6618,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Thailand',
                        longitude: 100.4999,
                        latitude: 19.6618,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Guatemala',
                        longitude: -91.6343,
                        latitude: 15.0216,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Honduras',
                        longitude: -86.0652,
                        latitude: 15.0216,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Senegal',
                        longitude: -13.6668,
                        latitude: 15.0216,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Mali',
                        longitude: -8.0977,
                        latitude: 15.0216,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Mali',
                        longitude: -2.5286,
                        latitude: 15.0216,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Niger',
                        longitude: 3.0405,
                        latitude: 15.0216,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Niger',
                        longitude: 8.6096,
                        latitude: 15.0216,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Chad',
                        longitude: 14.1787,
                        latitude: 15.0216,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Chad',
                        longitude: 19.7479,
                        latitude: 15.0216,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Sudan',
                        longitude: 25.317,
                        latitude: 15.0216,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Sudan',
                        longitude: 30.8861,
                        latitude: 15.0216,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Sudan',
                        longitude: 36.4552,
                        latitude: 15.0216,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Yemen',
                        longitude: 47.5934,
                        latitude: 15.0216,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'India',
                        longitude: 75.4389,
                        latitude: 15.0216,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Thailand',
                        longitude: 103.2845,
                        latitude: 15.0216,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Vietnam',
                        longitude: 107.3542,
                        latitude: 12.795,
                        type: 'hexagon',
                        color: 'rgba(127,107,107,0.8)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Costa Rica',
                        longitude: -83.2806,
                        latitude: 10.3166,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Venezuela',
                        longitude: -72.1424,
                        latitude: 10.3166,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Venezuela',
                        longitude: -66.5733,
                        latitude: 10.3166,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Trinidad and Tobago',
                        longitude: -61.0042,
                        latitude: 10.3166,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Guinea',
                        longitude: -10.8822,
                        latitude: 10.3166,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Mali',
                        longitude: -5.3131,
                        latitude: 10.3166,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Togo',
                        longitude: 0.256,
                        latitude: 10.3166,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Nigeria',
                        longitude: 5.8251,
                        latitude: 10.3166,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Nigeria',
                        longitude: 11.3942,
                        latitude: 10.3166,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Chad',
                        longitude: 16.9633,
                        latitude: 10.3166,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Central African Republic',
                        longitude: 22.5324,
                        latitude: 10.3166,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Sudan',
                        longitude: 28.1015,
                        latitude: 10.3166,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'South Sudan',
                        longitude: 33.6706,
                        latitude: 10.3166,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Ethiopia',
                        longitude: 39.2397,
                        latitude: 10.3166,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Somalia',
                        longitude: 44.8088,
                        latitude: 10.3166,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Somalia',
                        longitude: 50.3779,
                        latitude: 10.3166,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'India',
                        longitude: 78.2235,
                        latitude: 10.3166,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Colombia',
                        longitude: -74.927,
                        latitude: 5.5663,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Colombia',
                        longitude: -69.3579,
                        latitude: 5.5663,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Venezuela',
                        longitude: -63.7888,
                        latitude: 5.5663,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Guyana',
                        longitude: -58.2196,
                        latitude: 5.5663,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Liberia',
                        longitude: -8.0977,
                        latitude: 5.5663,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Ghana',
                        longitude: -2.5286,
                        latitude: 5.5663,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Nigeria',
                        longitude: 8.6096,
                        latitude: 5.5663,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Cameroon',
                        longitude: 14.1787,
                        latitude: 5.5663,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Central African Republic',
                        longitude: 19.7479,
                        latitude: 5.5663,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Central African Republic',
                        longitude: 25.317,
                        latitude: 5.5663,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'South Sudan',
                        longitude: 30.8861,
                        latitude: 5.5663,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Ethiopia',
                        longitude: 36.4552,
                        latitude: 5.5663,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Ethiopia',
                        longitude: 42.0243,
                        latitude: 5.5663,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Somalia',
                        longitude: 47.5934,
                        latitude: 5.5663,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Philippines',
                        longitude: 125.5609,
                        latitude: 5.5663,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Ecuador',
                        longitude: -77.7115,
                        latitude: 0.7914,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Colombia',
                        longitude: -72.1424,
                        latitude: 0.7914,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Brazil',
                        longitude: -66.5733,
                        latitude: 0.7914,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Brazil',
                        longitude: -61.0042,
                        latitude: 0.7914,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Brazil',
                        longitude: -55.4351,
                        latitude: 0.7914,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Gabon',
                        longitude: 11.3942,
                        latitude: 0.7914,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Republic of Congo',
                        longitude: 16.9633,
                        latitude: 0.7914,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Democratic Republic of Congo',
                        longitude: 22.5324,
                        latitude: 0.7914,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Democratic Republic of Congo',
                        longitude: 28.1015,
                        latitude: 0.7914,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Uganda',
                        longitude: 33.6706,
                        latitude: 0.7914,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Kenya',
                        longitude: 39.2397,
                        latitude: 0.7914,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Indonesia',
                        longitude: 100.4999,
                        latitude: 0.7914,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Indonesia',
                        longitude: 111.6381,
                        latitude: 0.7914,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Indonesia',
                        longitude: 117.2072,
                        latitude: 0.7914,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Indonesia',
                        longitude: 122.7763,
                        latitude: 0.7914,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Indonesia',
                        longitude: 128.3454,
                        latitude: 0.7914,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Peru',
                        longitude: -80.4961,
                        latitude: -3.987,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Peru',
                        longitude: -74.927,
                        latitude: -3.987,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Brazil',
                        longitude: -69.3579,
                        latitude: -3.987,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Brazil',
                        longitude: -63.7888,
                        latitude: -3.987,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Brazil',
                        longitude: -58.2196,
                        latitude: -3.987,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Brazil',
                        longitude: -52.6505,
                        latitude: -3.987,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Brazil',
                        longitude: -47.0814,
                        latitude: -3.987,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Brazil',
                        longitude: -41.5123,
                        latitude: -3.987,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Republic of Congo',
                        longitude: 14.1787,
                        latitude: -3.987,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Democratic Republic of Congo',
                        longitude: 19.7479,
                        latitude: -3.987,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Democratic Republic of Congo',
                        longitude: 25.317,
                        latitude: -3.987,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Tanzania',
                        longitude: 30.8861,
                        latitude: -3.987,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Tanzania',
                        longitude: 36.4552,
                        latitude: -3.987,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Indonesia',
                        longitude: 103.2845,
                        latitude: -3.987,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Indonesia',
                        longitude: 119.9918,
                        latitude: -3.987,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Indonesia',
                        longitude: 131.13,
                        latitude: -3.987,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Indonesia',
                        longitude: 136.6991,
                        latitude: -3.987,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Papua New Guinea',
                        longitude: 142.2682,
                        latitude: -3.987,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Peru',
                        longitude: -77.7115,
                        latitude: -8.7477,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Brazil',
                        longitude: -72.1424,
                        latitude: -8.7477,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Brazil',
                        longitude: -66.5733,
                        latitude: -8.7477,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Brazil',
                        longitude: -61.0042,
                        latitude: -8.7477,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Brazil',
                        longitude: -55.4351,
                        latitude: -8.7477,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Brazil',
                        longitude: -49.866,
                        latitude: -8.7477,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Brazil',
                        longitude: -44.2969,
                        latitude: -8.7477,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Brazil',
                        longitude: -38.7278,
                        latitude: -8.7477,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Angola',
                        longitude: 16.9633,
                        latitude: -8.7477,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Democratic Republic of Congo',
                        longitude: 22.5324,
                        latitude: -8.7477,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Democratic Republic of Congo',
                        longitude: 28.1015,
                        latitude: -8.7477,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Tanzania',
                        longitude: 33.6706,
                        latitude: -8.7477,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Tanzania',
                        longitude: 39.2397,
                        latitude: -8.7477,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Indonesia',
                        longitude: 117.2072,
                        latitude: -8.7477,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Peru',
                        longitude: -74.927,
                        latitude: -13.47,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Peru',
                        longitude: -69.3579,
                        latitude: -13.47,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Bolivia',
                        longitude: -63.7888,
                        latitude: -13.47,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Brazil',
                        longitude: -58.2196,
                        latitude: -13.47,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Brazil',
                        longitude: -52.6505,
                        latitude: -13.47,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Brazil',
                        longitude: -47.0814,
                        latitude: -13.47,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Brazil',
                        longitude: -41.5123,
                        latitude: -13.47,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Angola',
                        longitude: 14.1787,
                        latitude: -13.47,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Angola',
                        longitude: 19.7479,
                        latitude: -13.47,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Zambia',
                        longitude: 25.317,
                        latitude: -13.47,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Zambia',
                        longitude: 30.8861,
                        latitude: -13.47,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Mozambique',
                        longitude: 36.4552,
                        latitude: -13.47,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Australia',
                        longitude: 131.13,
                        latitude: -13.47,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Australia',
                        longitude: 142.2682,
                        latitude: -13.47,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Bolivia',
                        longitude: -66.5733,
                        latitude: -18.1337,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Bolivia',
                        longitude: -61.0042,
                        latitude: -18.1337,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Brazil',
                        longitude: -55.4351,
                        latitude: -18.1337,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Brazil',
                        longitude: -49.866,
                        latitude: -18.1337,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Brazil',
                        longitude: -44.2969,
                        latitude: -18.1337,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Namibia',
                        longitude: 16.9633,
                        latitude: -18.1337,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Botswana',
                        longitude: 22.5324,
                        latitude: -18.1337,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Zimbabwe',
                        longitude: 28.1015,
                        latitude: -18.1337,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Mozambique',
                        longitude: 33.6706,
                        latitude: -18.1337,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Madagascar',
                        longitude: 44.8088,
                        latitude: -18.1337,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Australia',
                        longitude: 122.7763,
                        latitude: -18.1337,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Australia',
                        longitude: 128.3454,
                        latitude: -18.1337,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Australia',
                        longitude: 133.9146,
                        latitude: -18.1337,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Australia',
                        longitude: 139.4837,
                        latitude: -18.1337,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Australia',
                        longitude: 145.0528,
                        latitude: -18.1337,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Fiji',
                        longitude: 178.4674,
                        latitude: -18.1337,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Chile',
                        longitude: -69.3579,
                        latitude: -22.7201,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Argentina',
                        longitude: -63.7888,
                        latitude: -22.7201,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Paraguay',
                        longitude: -58.2196,
                        latitude: -22.7201,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Brazil',
                        longitude: -52.6505,
                        latitude: -22.7201,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Brazil',
                        longitude: -47.0814,
                        latitude: -22.7201,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Namibia',
                        longitude: 19.7479,
                        latitude: -22.7201,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Botswana',
                        longitude: 25.317,
                        latitude: -22.7201,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'South Africa',
                        longitude: 30.8861,
                        latitude: -22.7201,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Madagascar',
                        longitude: 47.5934,
                        latitude: -22.7201,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Australia',
                        longitude: 114.4227,
                        latitude: -22.7201,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Australia',
                        longitude: 119.9918,
                        latitude: -22.7201,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Australia',
                        longitude: 125.5609,
                        latitude: -22.7201,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Australia',
                        longitude: 131.13,
                        latitude: -22.7201,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Australia',
                        longitude: 136.6991,
                        latitude: -22.7201,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Australia',
                        longitude: 142.2682,
                        latitude: -22.7201,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Australia',
                        longitude: 147.8373,
                        latitude: -22.7201,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Argentina',
                        longitude: -66.5733,
                        latitude: -27.2122,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Argentina',
                        longitude: -61.0042,
                        latitude: -27.2122,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Argentina',
                        longitude: -55.4351,
                        latitude: -27.2122,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Brazil',
                        longitude: -49.866,
                        latitude: -27.2122,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Namibia',
                        longitude: 16.9633,
                        latitude: -27.2122,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'South Africa',
                        longitude: 22.5324,
                        latitude: -27.2122,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'South Africa',
                        longitude: 28.1015,
                        latitude: -27.2122,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Australia',
                        longitude: 117.2072,
                        latitude: -27.2122,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Australia',
                        longitude: 122.7763,
                        latitude: -27.2122,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Australia',
                        longitude: 128.3454,
                        latitude: -27.2122,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Australia',
                        longitude: 133.9146,
                        latitude: -27.2122,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Australia',
                        longitude: 139.4837,
                        latitude: -27.2122,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Australia',
                        longitude: 145.0528,
                        latitude: -27.2122,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Australia',
                        longitude: 150.6219,
                        latitude: -27.2122,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Argentina',
                        longitude: -69.3579,
                        latitude: -31.5945,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Argentina',
                        longitude: -63.7888,
                        latitude: -31.5945,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Argentina',
                        longitude: -58.2196,
                        latitude: -31.5945,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Brazil',
                        longitude: -52.6505,
                        latitude: -31.5945,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'South Africa',
                        longitude: 19.7479,
                        latitude: -31.5945,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'South Africa',
                        longitude: 25.317,
                        latitude: -31.5945,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Australia',
                        longitude: 119.9918,
                        latitude: -31.5945,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Australia',
                        longitude: 125.5609,
                        latitude: -31.5945,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Australia',
                        longitude: 136.6991,
                        latitude: -31.5945,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Australia',
                        longitude: 142.2682,
                        latitude: -31.5945,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Australia',
                        longitude: 147.8373,
                        latitude: -31.5945,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Chile',
                        longitude: -72.1424,
                        latitude: -35.8538,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Argentina',
                        longitude: -66.5733,
                        latitude: -35.8538,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Argentina',
                        longitude: -61.0042,
                        latitude: -35.8538,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Australia',
                        longitude: 139.4837,
                        latitude: -35.8538,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Australia',
                        longitude: 145.0528,
                        latitude: -35.8538,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Argentina',
                        longitude: -69.3579,
                        latitude: -39.9789,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Argentina',
                        longitude: -63.7888,
                        latitude: -39.9789,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'New Zealand',
                        longitude: 175.6829,
                        latitude: -39.9789,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Chile',
                        longitude: -72.1424,
                        latitude: -43.9609,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Argentina',
                        longitude: -66.5733,
                        latitude: -43.9609,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Chile',
                        longitude: -74.927,
                        latitude: -47.7927,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Argentina',
                        longitude: -69.3579,
                        latitude: -47.7927,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Argentina',
                        longitude: -72.1424,
                        latitude: -51.4696,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    },
                    {
                        selectable: true,
                        title: 'Chile',
                        longitude: -69.3579,
                        latitude: -54.9885,
                        type: 'hexagon',
                        color: 'rgba(255,255,255,1)',
                        width: 16,
                        height: 16,
                        scale: 1,
                        fixedSize: false
                    }
                ]
            },
            balloon: {
                horizontalPadding: 15,
                borderAlpha: 0,
                borderThickness: 1,
                verticalPadding: 15
            },
            areasSettings: {
                color: 'rgba(255,255,255,1)',
                outlineColor: 'rgba(144,178,236,1)',
                rollOverOutlineColor: 'rgba(144,178,236,1)',
                rollOverBrightness: 20,
                selectedBrightness: 20,
                selectable: true,
                unlistedAreasAlpha: 0,
                unlistedAreasOutlineAlpha: 0,
                alpha: 0,
                outlineAlpha: 0
            },
            imagesSettings: {
                alpha: 1,
                color: 'rgba(255,255,255,1)',
                outlineAlpha: 0,
                rollOverOutlineAlpha: 0,
                outlineColor: 'rgba(144,178,236,1)',
                rollOverBrightness: 20,
                selectedBrightness: 20,
                selectable: true
            },
            linesSettings: {
                color: 'rgba(255,255,255,1)',
                selectable: true,
                rollOverBrightness: 20,
                selectedBrightness: 20
            },
            zoomControl: {
                zoomControlEnabled: true,
                homeButtonEnabled: false,
                panControlEnabled: false,
                right: 38,
                bottom: 30,
                minZoomLevel: 0.25,
                gridHeight: 100,
                gridAlpha: 0.1,
                gridBackgroundAlpha: 0,
                gridColor: '#FFFFFF',
                draggerAlpha: 1,
                buttonCornerRadius: 2
            }
        });
    }
    ngOnDestroy() {
        if (this.chart) {
            this.AmCharts.destroyChart(this.chart);
        }
    }
}
WorldMapComponent.ɵfac = function WorldMapComponent_Factory(t) { return new (t || WorldMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_1__["AmChartsService"])); };
WorldMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorldMapComponent, selectors: [["app-world-map"]], decls: 5, vars: 0, consts: [[2, "margin", "0", "background-color", "rgba(144,178,236,1)"], [1, "bg-dark"], [1, "text-center", "text-white", 2, "width", "300px"], ["id", "map", 2, "width", "100%", "height", "879px"]], template: function WorldMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Voyages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvcmxkLW1hcC93b3JsZC1tYXAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorldMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-world-map',
                templateUrl: './world-map.component.html',
                // template: `<amCharts id="chartdiv" [options]="options" [style.width.%]="100" [style.height.px]="500"></amCharts>`,
                styleUrls: ['./world-map.component.css']
            }]
    }], function () { return [{ type: _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_1__["AmChartsService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map