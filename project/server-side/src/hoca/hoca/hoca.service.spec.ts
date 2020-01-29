import { Test, TestingModule } from '@nestjs/testing';
import { HocaService } from './hoca.service';

describe('HocaService', () => {
  let service: HocaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HocaService],
    }).compile();

    service = module.get<HocaService>(HocaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
