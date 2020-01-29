import { Test, TestingModule } from '@nestjs/testing';
import { HocaController } from './hoca.controller';

describe('Hoca Controller', () => {
  let controller: HocaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HocaController],
    }).compile();

    controller = module.get<HocaController>(HocaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
