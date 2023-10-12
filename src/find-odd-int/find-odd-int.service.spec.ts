import { Test, TestingModule } from '@nestjs/testing';
import { FindOddIntService } from './find-odd-int.service';

describe('FindOddIntService', () => {
  let service: FindOddIntService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindOddIntService],
    }).compile();

    service = module.get<FindOddIntService>(FindOddIntService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
