import { Test, TestingModule } from '@nestjs/testing';
import { SmileyService } from './smiley.service';

describe('SmileyService', () => {
  let service: SmileyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SmileyService],
    }).compile();

    service = module.get<SmileyService>(SmileyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
