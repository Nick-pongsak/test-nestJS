import { Test, TestingModule } from '@nestjs/testing';
import { PermutationService } from './permutation.service';

describe('PermutationService', () => {
  let service: PermutationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PermutationService],
    }).compile();

    service = module.get<PermutationService>(PermutationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
