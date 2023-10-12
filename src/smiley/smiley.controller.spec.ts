import { Test, TestingModule } from '@nestjs/testing';
import { SmileyController } from './smiley.controller';

describe('SmileyController', () => {
  let controller: SmileyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SmileyController],
    }).compile();

    controller = module.get<SmileyController>(SmileyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
