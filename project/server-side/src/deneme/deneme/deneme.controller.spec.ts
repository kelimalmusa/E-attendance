import { Test, TestingModule } from '@nestjs/testing';
import { DenemeController } from './deneme.controller';

describe('Deneme Controller', () => {
  let controller: DenemeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DenemeController],
    }).compile();

    controller = module.get<DenemeController>(DenemeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
