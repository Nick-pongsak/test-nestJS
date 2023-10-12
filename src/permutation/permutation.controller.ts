import { Controller, Get, Param } from '@nestjs/common';
import { PermutationService } from './permutation.service';

@Controller('permutation')
export class PermutationController {
  constructor(private readonly permutationService: PermutationService) {}

  @Get(':input')
  getPermutations(@Param('input') input: string): string[] {
    return this.permutationService.generatePermutations(input);
  }
}
