import { Injectable } from '@nestjs/common';

@Injectable()
export class PermutationService {
  generatePermutations(input: string): string[] {
    const result: string[] = [];

    function generatePermutations(input: string, index: number) {
      if (index === input.length) {
        result.push(input);
        return;
      }

      for (let i = index; i < input.length; i++) {
        input = swap(input, index, i);
        generatePermutations(input, index + 1);
        input = swap(input, index, i); // Restore the original string
      }
    }

    function swap(str: string, i: number, j: number): string {
      const arr = str.split('');
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      return arr.join('');
    }

    generatePermutations(input, 0);
    return result;
  }
}
