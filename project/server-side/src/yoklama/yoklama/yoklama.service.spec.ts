import { Test, TestingModule } from '@nestjs/testing';
import { YoklamaService } from './yoklama.service';

describe('YoklamaService', () => {
  let service: YoklamaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YoklamaService],
    }).compile();

    service = module.get<YoklamaService>(YoklamaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
