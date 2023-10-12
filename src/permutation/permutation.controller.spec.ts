import { Test, TestingModule } from '@nestjs/testing';
import { PermutationController } from './permutation.controller';

describe('PermutationController', () => {
  let controller: PermutationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PermutationController],
    }).compile();

    controller = module.get<PermutationController>(PermutationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
