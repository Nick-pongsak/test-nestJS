import { Controller, Get, Param } from '@nestjs/common';
import { SmileyService } from './smiley.service';

@Controller('smiley')
export class SmileyController {
  constructor(private readonly smileyService: SmileyService) {}

  @Get('count/:smileys')
  countSmileys(@Param('smileys') smileys: string): number {
    const arr = smileys.split(',');
    return this.smileyService.countSmileys(arr);
  }
}
