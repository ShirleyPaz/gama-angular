(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../cep/cep.module": [
		"./src/cep/cep.module.ts",
		"cep-cep-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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

module.exports = "<h1>Hello World</h1>\r\n\r\n<div>\r\n  <a routerLink=\"/\">Home</a> |\r\n  <a routerLink=\"/todos\">Todos</a> |\r\n  <a routerLink=\"/todos/add\">Adicionar todo</a> |\r\n  <a routerLink=\"/cep\">CEP</a>\r\n\r\n  <div *ngIf=\"!(loggedUser$ | async); else dadosDoUsuario\">\r\n    <a routerLink=\"/login\">Login</a> |\r\n    <a routerLink=\"/cadastro\">Cadastrar</a>\r\n  </div>\r\n\r\n  <ng-template #dadosDoUsuario>\r\n    <div>\r\n      Olá {{ (loggedUser$ | async).email }}\r\n      <br>\r\n      <button (click)=\"sair()\">Sair</button>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n\r\n<!-- app.component.html: {{ valorAtual }}\r\n\r\n<app-contador></app-contador> -->\r\n\r\n<!-- <app-todo-list></app-todo-list> -->\r\n\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(store, authService) {
        var _this = this;
        this.store = store;
        this.authService = authService;
        this.title = 'aula2';
        this.loggedUser$ = store
            .select('auth')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('user'));
        var userToken = localStorage.getItem('userToken');
        if (userToken) {
            authService.checkToken(userToken).subscribe(function (v) {
                _this.store.dispatch({
                    type: 'SET_USER',
                    payload: {
                        user: {
                            email: v.users[0].email,
                            localId: v.users[0].localId,
                        },
                        token: userToken,
                    }
                });
            }, function (error) {
                localStorage.removeItem('userToken');
            });
        }
    }
    AppComponent.prototype.sair = function () {
        localStorage.removeItem('userToken');
        this.store.dispatch({
            type: 'LOGOUT',
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _contador_contador_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contador/contador.component */ "./src/app/contador/contador.component.ts");
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-list/todo-list.component */ "./src/app/todo-list/todo-list.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo-item/todo-item.component */ "./src/app/todo-item/todo-item.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./todo-form/todo-form.component */ "./src/app/todo-form/todo-form.component.ts");
/* harmony import */ var _bool_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bool.pipe */ "./src/app/bool.pipe.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "./src/app/cadastro/cadastro.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./store/reducers/auth.reducer */ "./src/app/store/reducers/auth.reducer.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [{
        path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
    }, {
        path: 'todos', component: _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_4__["TodoListComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
    }, {
        path: 'todos/add',
        component: _todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_10__["TodoFormComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
    }, {
        path: 'todos/:id/edit',
        component: _todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_10__["TodoFormComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
    }, {
        path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"]
    }, {
        path: 'cadastro', component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__["CadastroComponent"]
    }, {
        path: 'cep', loadChildren: '../cep/cep.module#CepModule'
    }, {
        path: '**', redirectTo: ''
    }];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _contador_contador_component__WEBPACK_IMPORTED_MODULE_3__["ContadorComponent"],
                _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_4__["TodoListComponent"],
                _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_6__["TodoItemComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_10__["TodoFormComponent"],
                _bool_pipe__WEBPACK_IMPORTED_MODULE_11__["BoolPipe"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_13__["CadastroComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_14__["StoreModule"].forRoot({
                    auth: _store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_15__["authReducer"],
                }),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.store.select('auth').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (v) {
            console.log(next);
            console.log(state);
            if (v.user == null) {
                _this.router.navigateByUrl('/');
                return false;
            }
            return true;
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.signUp = function (email, senha) {
        return this.http.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBN0U7i3YTYFjVs_vLxdSWtAmJkSL16gpc', {
            email: email,
            password: senha,
        });
    };
    AuthService.prototype.logIn = function (email, senha) {
        return this.http.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBN0U7i3YTYFjVs_vLxdSWtAmJkSL16gpc', {
            email: email,
            password: senha,
        });
    };
    AuthService.prototype.checkToken = function (idToken) {
        return this.http.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=AIzaSyBN0U7i3YTYFjVs_vLxdSWtAmJkSL16gpc', {
            idToken: idToken,
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/bool.pipe.ts":
/*!******************************!*\
  !*** ./src/app/bool.pipe.ts ***!
  \******************************/
/*! exports provided: BoolPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoolPipe", function() { return BoolPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BoolPipe = /** @class */ (function () {
    function BoolPipe() {
    }
    BoolPipe.prototype.transform = function (value, args) {
        return value ? 'Sim' : 'Não';
    };
    BoolPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'bool'
        })
    ], BoolPipe);
    return BoolPipe;
}());



/***/ }),

/***/ "./src/app/cadastro/cadastro.component.css":
/*!*************************************************!*\
  !*** ./src/app/cadastro/cadastro.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/cadastro/cadastro.component.html":
/*!**************************************************!*\
  !*** ./src/app/cadastro/cadastro.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n  <div>\r\n    <label for=\"email\">E-mail</label>\r\n    <input type=\"text\" id=\"email\" [(ngModel)]=\"email\">\r\n  </div>\r\n\r\n  <div>\r\n    <label for=\"senha\">Senha</label>\r\n    <input type=\"password\" id=\"senha\" [(ngModel)]=\"senha\">\r\n  </div>\r\n\r\n  <div>\r\n    <label for=\"confirmar-senha\">Confirmar senha</label>\r\n    <input type=\"password\" id=\"confirmar-senha\" [(ngModel)]=\"confirmPassword\">\r\n  </div>\r\n\r\n  <button (click)=\"onSubmitClick()\">\r\n    Enviar\r\n  </button>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/cadastro/cadastro.component.ts":
/*!************************************************!*\
  !*** ./src/app/cadastro/cadastro.component.ts ***!
  \************************************************/
/*! exports provided: CadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroComponent", function() { return CadastroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CadastroComponent = /** @class */ (function () {
    function CadastroComponent(authService, store) {
        this.authService = authService;
        this.store = store;
        this.email = '';
        this.senha = '';
        this.confirmPassword = '';
    }
    CadastroComponent.prototype.ngOnInit = function () {
    };
    CadastroComponent.prototype.onSubmitClick = function () {
        var _this = this;
        if (this.senha !== this.confirmPassword) {
            alert('Senhas não coincidem');
            return;
        }
        this.authService.signUp(this.email, this.senha)
            .subscribe(function (v) {
            console.log(v);
            localStorage.setItem('userToken', v.idToken);
            _this.store.dispatch({
                type: 'SET_USER',
                payload: {
                    token: v.idToken,
                    user: {
                        email: v.email,
                        localId: v.localId,
                    }
                },
            });
        }, function (error) {
            console.log(error);
            switch (error.error.error.message) {
                case 'EMAIL_EXISTS':
                    alert('E-mail já existente');
                    break;
                case 'TOO_MANY_ATTEMPTS_TRY_LATER':
                    alert('Muitas tentativas, tente novamente mais tarde');
                    break;
                case 'WEAK_PASSWORD':
                    alert('A senha deve ter no mínimo 6 caracteres');
                    break;
                default:
                    alert('Houve um erro');
                    break;
            }
        });
    };
    CadastroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cadastro',
            template: __webpack_require__(/*! ./cadastro.component.html */ "./src/app/cadastro/cadastro.component.html"),
            styles: [__webpack_require__(/*! ./cadastro.component.css */ "./src/app/cadastro/cadastro.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], CadastroComponent);
    return CadastroComponent;
}());



/***/ }),

/***/ "./src/app/contador/contador.component.css":
/*!*************************************************!*\
  !*** ./src/app/contador/contador.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhZG9yL2NvbnRhZG9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/contador/contador.component.html":
/*!**************************************************!*\
  !*** ./src/app/contador/contador.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  contador.component.html: {{ valor$ | async }}\r\n</p>\r\n\r\n<button (click)=\"aumentarContador()\">Aumentar</button>\r\n<button (click)=\"diminuirContador()\">Diminuir</button>\r\n\r\n<button (click)=\"onUnsubscribeClick()\">Desinscrever</button>\r\n"

/***/ }),

/***/ "./src/app/contador/contador.component.ts":
/*!************************************************!*\
  !*** ./src/app/contador/contador.component.ts ***!
  \************************************************/
/*! exports provided: ContadorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContadorComponent", function() { return ContadorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _counter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../counter.service */ "./src/app/counter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContadorComponent = /** @class */ (function () {
    function ContadorComponent(counterService) {
        this.counterService = counterService;
        this.contadorSubscription = null;
        this.valor$ = counterService
            .valorDoContador;
    }
    ContadorComponent.prototype.onUnsubscribeClick = function () {
        // this.valor.;
    };
    ContadorComponent.prototype.ngOnInit = function () {
    };
    ContadorComponent.prototype.aumentarContador = function () {
        this.counterService.aumentar();
    };
    ContadorComponent.prototype.diminuirContador = function () {
        this.counterService.diminuir();
    };
    ContadorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contador',
            template: __webpack_require__(/*! ./contador.component.html */ "./src/app/contador/contador.component.html"),
            styles: [__webpack_require__(/*! ./contador.component.css */ "./src/app/contador/contador.component.css")]
        }),
        __metadata("design:paramtypes", [_counter_service__WEBPACK_IMPORTED_MODULE_1__["CounterService"]])
    ], ContadorComponent);
    return ContadorComponent;
}());



/***/ }),

/***/ "./src/app/counter.service.ts":
/*!************************************!*\
  !*** ./src/app/counter.service.ts ***!
  \************************************/
/*! exports provided: CounterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterService", function() { return CounterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CounterService = /** @class */ (function () {
    function CounterService() {
        this._valorDoContador = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.valorDoContador = this._valorDoContador.asObservable();
    }
    CounterService.prototype.aumentar = function () {
        this._valorDoContador.next(this._valorDoContador.value + 1);
    };
    CounterService.prototype.diminuir = function () {
        this._valorDoContador.next(this._valorDoContador.value - 1);
    };
    CounterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CounterService);
    return CounterService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Bem-vindo ao meu app.\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n  <div>\r\n    <label for=\"email\">E-mail</label>\r\n    <input type=\"text\" id=\"email\" [(ngModel)]=\"email\">\r\n  </div>\r\n\r\n  <div>\r\n    <label for=\"senha\">Senha</label>\r\n    <input type=\"password\" id=\"senha\" [(ngModel)]=\"senha\">\r\n  </div>\r\n\r\n  <button (click)=\"onSubmitClick()\">\r\n    Enviar\r\n  </button>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, store) {
        this.authService = authService;
        this.store = store;
        this.email = '';
        this.senha = '';
        store.select('auth').subscribe(function (v) {
            console.log(v);
        });
    }
    LoginComponent.prototype.onSubmitClick = function () {
        var _this = this;
        this.authService.logIn(this.email, this.senha)
            .subscribe(function (v) {
            localStorage.setItem('userToken', v.idToken);
            _this.store.dispatch({
                type: 'SET_USER',
                payload: {
                    token: v.idToken,
                    user: {
                        email: v.email,
                        localId: v.localId,
                    }
                },
            });
            alert('Usuário logado com sucesso');
        }, function (error) {
            console.log(error);
            switch (error.error.error.message) {
                case 'EMAIL_NOT_FOUND':
                    alert('E-mail não encontrado');
                    break;
                case 'INVALID_PASSWORD':
                    alert('Senha inválida');
                    break;
                case 'USER_DISABLED':
                    alert('Usuário desabilitado');
                    break;
                default:
                    alert('Houve um erro');
                    break;
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/store/reducers/auth.reducer.ts":
/*!************************************************!*\
  !*** ./src/app/store/reducers/auth.reducer.ts ***!
  \************************************************/
/*! exports provided: authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var initialState = {
    user: null,
    token: null,
};
var authReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case 'SET_USER':
            state = __assign({}, state, action.payload);
            break;
        case 'LOGOUT':
            state = {
                user: null,
                token: null,
            };
            break;
    }
    return state;
};


/***/ }),

/***/ "./src/app/todo-form/todo-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/todo-form/todo-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-touched.ng-valid {\r\n  border: 1px solid green;\r\n}\r\n\r\ninput.ng-touched.ng-invalid {\r\n  border: 1px solid red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby1mb3JtL3RvZG8tZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0NBQ3pCOztBQUVEO0VBQ0Usc0JBQXNCO0NBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvdG9kby1mb3JtL3RvZG8tZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQubmctdG91Y2hlZC5uZy12YWxpZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbn1cclxuXHJcbmlucHV0Lm5nLXRvdWNoZWQubmctaW52YWxpZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/todo-form/todo-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/todo-form/todo-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <!-- {{ todo | json }} -->\r\n  <form #form=\"ngForm\">\r\n    <div>\r\n      <label for=\"title\">Título</label><br>\r\n      <input\r\n        type=\"text\"\r\n        id=\"title\"\r\n        name=\"title\"\r\n        [(ngModel)]=\"todo.title\"\r\n        #title=\"ngModel\"\r\n        minlength=\"5\"\r\n        required\r\n      >\r\n\r\n      <div *ngIf=\"title?.touched\">\r\n        <div *ngIf=\"title?.errors?.required\">\r\n          O campo título é obrigatório.\r\n        </div>\r\n\r\n        <div *ngIf=\"title?.errors?.minlength\">\r\n          O campo título tem que ter no mínimo 5 caracteres.\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div>\r\n        <label for=\"description\">Descrição</label><br>\r\n        <input\r\n          type=\"text\"\r\n          id=\"description\"\r\n          name=\"description\"\r\n          [(ngModel)]=\"todo.description\"\r\n          #description=\"ngModel\"\r\n          minlength=\"5\"\r\n          required\r\n        >\r\n\r\n        <div *ngIf=\"description?.touched\">\r\n          <div *ngIf=\"description?.errors?.required\">\r\n            O campo descrição é obrigatório.\r\n          </div>\r\n\r\n          <div *ngIf=\"description?.errors?.minlength\">\r\n            O campo descrição tem que ter no mínimo 5 caracteres.\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div>\r\n          <label for=\"date\">Data</label><br>\r\n          <input\r\n            type=\"date\"\r\n            id=\"date\"\r\n            name=\"date\"\r\n            [(ngModel)]=\"todo.date\"\r\n            #date=\"ngModel\"\r\n            minlength=\"5\"\r\n            required\r\n          >\r\n\r\n          <div *ngIf=\"date?.touched\">\r\n            <div *ngIf=\"date?.errors?.required\">\r\n              O campo data é obrigatório.\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n    <div>\r\n      <label for=\"finished\">Finalizado?</label>\r\n    <input name=\"finished\" id=\"finished\" type=\"checkbox\" [(ngModel)]=\"todo.finished\">\r\n    </div>\r\n\r\n    <button type=\"submit\" [disabled]=\"form.invalid\" (click)=\"onFormSend()\">Enviar</button>\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/todo-form/todo-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/todo-form/todo-form.component.ts ***!
  \**************************************************/
/*! exports provided: TodoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoFormComponent", function() { return TodoFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo.service */ "./src/app/todo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoFormComponent = /** @class */ (function () {
    function TodoFormComponent(todoService, state, router, activatedRoute) {
        var _this = this;
        this.todoService = todoService;
        this.state = state;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.todo = {
            id: 0,
            finished: false,
            title: '',
            description: '',
            date: '',
            userId: '',
        };
        this.isAdding = true;
        state.select('auth').subscribe(function (v) {
            if (v.user) {
                _this.todo.userId = v.user.localId;
            }
        });
        activatedRoute.params.subscribe(function (params) {
            if (params.id) {
                _this.isAdding = false;
                _this.todoService.getTodo(params.id).subscribe(function (todo) {
                    _this.todo = todo;
                });
            }
        });
    }
    TodoFormComponent.prototype.ngOnInit = function () {
    };
    TodoFormComponent.prototype.onFormSend = function () {
        var _this = this;
        if (this.isAdding) {
            this.todoService.addTodo(this.todo)
                .subscribe(function (valor) {
                console.log(valor);
                alert('To-Do adicionado com sucesso');
                _this.router.navigateByUrl('/todos');
            }, function (error) {
                alert('Erro ao adicionar');
            });
        }
        else {
            this.todoService.updateTodo(this.todo)
                .subscribe(function (valor) {
                console.log(valor);
                alert('To-Do atualizado com sucesso');
                _this.router.navigateByUrl('/todos/:id');
            }, function (error) {
                alert('Erro ao atualizar');
            });
        }
    };
    TodoFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-form',
            template: __webpack_require__(/*! ./todo-form.component.html */ "./src/app/todo-form/todo-form.component.html"),
            styles: [__webpack_require__(/*! ./todo-form.component.css */ "./src/app/todo-form/todo-form.component.css")]
        }),
        __metadata("design:paramtypes", [_todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TodoFormComponent);
    return TodoFormComponent;
}());



/***/ }),

/***/ "./src/app/todo-item/todo-item.component.css":
/*!***************************************************!*\
  !*** ./src/app/todo-item/todo-item.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG8taXRlbS90b2RvLWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/todo-item/todo-item.component.html":
/*!****************************************************!*\
  !*** ./src/app/todo-item/todo-item.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <b>ID: </b> {{ item.id }}<br>\r\n  <b>Título: </b> {{ item.title }}<br>\r\n  <b>Descrição: </b> {{ item.description }}<br>\r\n  <b>Finalizado: </b> {{ item.finished | bool }}<br>\r\n  <b>Data: </b> {{ item.date | date:'dd/MM/yyyy' }}\r\n  <button (click) = 'editar()'>Editar</button>\r\n  <button (click) = 'apagar()'>Apagar</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/todo-item/todo-item.component.ts":
/*!**************************************************!*\
  !*** ./src/app/todo-item/todo-item.component.ts ***!
  \**************************************************/
/*! exports provided: TodoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function() { return TodoItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoItemComponent = /** @class */ (function () {
    function TodoItemComponent() {
        this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TodoItemComponent.prototype.ngOnInit = function () {
    };
    TodoItemComponent.prototype.editar = function () {
        this.edit.emit(this.item.id);
    };
    TodoItemComponent.prototype.apagar = function () {
        this.delete.emit(this.item.id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TodoItemComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TodoItemComponent.prototype, "edit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TodoItemComponent.prototype, "delete", void 0);
    TodoItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-item',
            template: __webpack_require__(/*! ./todo-item.component.html */ "./src/app/todo-item/todo-item.component.html"),
            styles: [__webpack_require__(/*! ./todo-item.component.css */ "./src/app/todo-item/todo-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TodoItemComponent);
    return TodoItemComponent;
}());



/***/ }),

/***/ "./src/app/todo-list/todo-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/todo-list/todo-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG8tbGlzdC90b2RvLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/todo-list/todo-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/todo-list/todo-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <app-contador></app-contador>\r\n\r\n  <ul>\r\n    <li *ngFor=\"let todo of todos$ | async\">\r\n      <app-todo-item \r\n        [item]=\"todo\"\r\n        (delete)='onDeleteTodo($event)'\r\n        (edit)='onEditTodo($event)'>\r\n      </app-todo-item>\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/todo-list/todo-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/todo-list/todo-list.component.ts ***!
  \**************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo.service */ "./src/app/todo.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TodoListComponent = /** @class */ (function () {
    function TodoListComponent(todoService, store, router) {
        var _this = this;
        this.todoService = todoService;
        this.store = store;
        this.router = router;
        store.select('auth').subscribe(function (v) {
            if (v.user != null) {
                _this.todos$ = todoService.getTodos(v.user.localId);
            }
        });
    }
    TodoListComponent.prototype.ngOnInit = function () {
    };
    TodoListComponent.prototype.onEditTodo = function (id) {
        this.router.navigateByUrl('todos/' + id + '/edit');
    };
    TodoListComponent.prototype.onDeleteTodo = function (id) {
        var _this = this;
        if (!confirm('Deseja mesmo apagar este To-do?')) {
            return;
        }
        this.todoService.deleteTodo(id).subscribe(function () {
            _this.todos$ = _this.todos$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (todos) {
                return todos.filter(function (t) { return t.id !== id; });
            }));
        });
    };
    TodoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-list',
            template: __webpack_require__(/*! ./todo-list.component.html */ "./src/app/todo-list/todo-list.component.html"),
            styles: [__webpack_require__(/*! ./todo-list.component.css */ "./src/app/todo-list/todo-list.component.css")]
        }),
        __metadata("design:paramtypes", [_todo_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "./src/app/todo.service.ts":
/*!*********************************!*\
  !*** ./src/app/todo.service.ts ***!
  \*********************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoService = /** @class */ (function () {
    function TodoService(http) {
        this.http = http;
        this.URL = 'http://localhost:3000/todos';
    }
    TodoService.prototype.getTodos = function (userId) {
        return this.http.get('http://localhost:3000/users/' + userId + '/todos');
    };
    TodoService.prototype.addTodo = function (todo) {
        return this.http.post(this.URL, todo);
    };
    TodoService.prototype.getTodo = function (id) {
        return this.http.get('http://localhost:3000/todos/' + id);
    };
    TodoService.prototype.updateTodo = function (todo) {
        return this.http.put(this.URL + '/' + todo.id, todo);
    };
    TodoService.prototype.deleteTodo = function (id) {
        return this.http.delete(this.URL + '/' + id);
    };
    TodoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TodoService);
    return TodoService;
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

module.exports = __webpack_require__(/*! C:\Users\Avanade\gama-angular\aula5\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map