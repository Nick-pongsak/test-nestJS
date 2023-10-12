import { FindOddIntService } from './find-odd-int.service';
export declare class FindOddIntController {
    private readonly oddIntService;
    constructor(oddIntService: FindOddIntService);
    findOddInteger(arr: string): number;
}
