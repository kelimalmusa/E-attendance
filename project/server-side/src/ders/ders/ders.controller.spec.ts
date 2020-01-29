import { Test, TestingModule } from '@nestjs/testing';
import { DersController } from './ders.controller';

describe('Ders Controller', () => {
  let controller: DersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DersController],
    }).compile();

    controller = module.get<DersController>(DersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
