import { Test, TestingModule } from '@nestjs/testing';
import { FindOddIntController } from './find-odd-int.controller';

describe('FindOddIntController', () => {
  let controller: FindOddIntController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindOddIntController],
    }).compile();

    controller = module.get<FindOddIntController>(FindOddIntController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
