import { Test, TestingModule } from '@nestjs/testing';
import { DevamsizlikController } from './devamsizlik.controller';

describe('Devamsizlik Controller', () => {
  let controller: DevamsizlikController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DevamsizlikController],
    }).compile();

    controller = module.get<DevamsizlikController>(DevamsizlikController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
