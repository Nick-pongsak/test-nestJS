"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermutationService = void 0;
const common_1 = require("@nestjs/common");
let PermutationService = class PermutationService {
    generatePermutations(input) {
        const result = [];
        function generatePermutations(input, index) {
            if (index === input.length) {
                result.push(input);
                return;
            }
            for (let i = index; i < input.length; i++) {
                input = swap(input, index, i);
                generatePermutations(input, index + 1);
                input = swap(input, index, i);
            }
        }
        function swap(str, i, j) {
            const arr = str.split('');
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            return arr.join('');
        }
        generatePermutations(input, 0);
        return result;
    }
};
exports.PermutationService = PermutationService;
exports.PermutationService = PermutationService = __decorate([
    (0, common_1.Injectable)()
], PermutationService);
//# sourceMappingURL=permutation.service.js.map