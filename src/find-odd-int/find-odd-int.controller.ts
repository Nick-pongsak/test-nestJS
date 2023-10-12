import { Controller, Get, Param } from '@nestjs/common';
import { FindOddIntService } from './find-odd-int.service';

@Controller('find-odd-int')
export class FindOddIntController {
  constructor(private readonly oddIntService: FindOddIntService) {}

  @Get(':arr')
  findOddInteger(@Param('arr') arr: string): number {
    const intArray = arr.split(',').map(Number); // Convert comma-separated string to an array of numbers
    return this.oddIntService.findOddInteger(intArray);
  }
}
