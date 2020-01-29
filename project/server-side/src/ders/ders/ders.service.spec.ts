import { Test, TestingModule } from '@nestjs/testing';
import { DersService } from './ders.service';

describe('DersService', () => {
  let service: DersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DersService],
    }).compile();

    service = module.get<DersService>(DersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
