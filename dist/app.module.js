"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const permutation_service_1 = require("./permutation/permutation.service");
const permutation_controller_1 = require("./permutation/permutation.controller");
const find_odd_int_service_1 = require("./find-odd-int/find-odd-int.service");
const find_odd_int_controller_1 = require("./find-odd-int/find-odd-int.controller");
const smiley_controller_1 = require("./smiley/smiley.controller");
const smiley_service_1 = require("./smiley/smiley.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [app_controller_1.AppController, permutation_controller_1.PermutationController, find_odd_int_controller_1.FindOddIntController, smiley_controller_1.SmileyController],
        providers: [app_service_1.AppService, permutation_service_1.PermutationService, find_odd_int_service_1.FindOddIntService, smiley_service_1.SmileyService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map