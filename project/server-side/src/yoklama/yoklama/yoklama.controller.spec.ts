import { Test, TestingModule } from '@nestjs/testing';
import { YoklamaController } from './yoklama.controller';

describe('Yoklama Controller', () => {
  let controller: YoklamaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YoklamaController],
    }).compile();

    controller = module.get<YoklamaController>(YoklamaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
