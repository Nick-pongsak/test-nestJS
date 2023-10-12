import { Injectable } from '@nestjs/common';

@Injectable()
export class SmileyService {
  countSmileys(arr: string[]): number {
    const validSmiley = /^[:;][-~]?[)D]$/;
    return arr.filter((smiley) => validSmiley.test(smiley)).length;
  }
}
