import { Injectable } from '@nestjs/common';

@Injectable()
export class FindOddIntService {
  findOddInteger(arr: number[]): number {
    const counts = new Map<number, number>();

    for (const num of arr) {
      if (counts.has(num)) {
        counts.set(num, counts.get(num) + 1);
      } else {
        counts.set(num, 1);
      }
    }

    for (const [num, count] of counts) { // count number of array check odd
      if (count % 2 !== 0) {
        return num; // return number count == odd
      }
    }

    throw new Error('No odd number in the array'); // retrun error massage
  }
}
