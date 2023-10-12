import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PermutationService } from './permutation/permutation.service';
import { PermutationController } from './permutation/permutation.controller';
import { FindOddIntService } from './find-odd-int/find-odd-int.service';
import { FindOddIntController } from './find-odd-int/find-odd-int.controller';
import { SmileyController } from './smiley/smiley.controller';
import { SmileyService } from './smiley/smiley.service';

@Module({
  imports: [],
  controllers: [AppController, PermutationController, FindOddIntController, SmileyController],
  providers: [AppService, PermutationService, FindOddIntService, SmileyService],
})
export class AppModule {}
