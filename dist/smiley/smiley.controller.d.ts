import { SmileyService } from './smiley.service';
export declare class SmileyController {
    private readonly smileyService;
    constructor(smileyService: SmileyService);
    countSmileys(smileys: string): number;
}
