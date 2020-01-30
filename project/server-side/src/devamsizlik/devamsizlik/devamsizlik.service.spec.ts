import { Test, TestingModule } from '@nestjs/testing';
import { DevamsizlikService } from './devamsizlik.service';

describe('DevamsizlikService', () => {
  let service: DevamsizlikService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DevamsizlikService],
    }).compile();

    service = module.get<DevamsizlikService>(DevamsizlikService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
