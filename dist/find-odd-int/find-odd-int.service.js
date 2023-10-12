"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOddIntService = void 0;
const common_1 = require("@nestjs/common");
let FindOddIntService = class FindOddIntService {
    findOddInteger(arr) {
        const counts = new Map();
        for (const num of arr) {
            if (counts.has(num)) {
                counts.set(num, counts.get(num) + 1);
            }
            else {
                counts.set(num, 1);
            }
        }
        for (const [num, count] of counts) {
            if (count % 2 !== 0) {
                return num;
            }
        }
        throw new Error('No odd number in the array');
    }
};
exports.FindOddIntService = FindOddIntService;
exports.FindOddIntService = FindOddIntService = __decorate([
    (0, common_1.Injectable)()
], FindOddIntService);
//# sourceMappingURL=find-odd-int.service.js.map