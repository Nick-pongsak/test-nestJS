import { PermutationService } from './permutation.service';
export declare class PermutationController {
    private readonly permutationService;
    constructor(permutationService: PermutationService);
    getPermutations(input: string): string[];
}
