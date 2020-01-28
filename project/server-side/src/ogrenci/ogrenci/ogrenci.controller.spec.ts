import { Test, TestingModule } from '@nestjs/testing';
import { OgrenciController } from './ogrenci.controller';

describe('Ogrenci Controller', () => {
  let controller: OgrenciController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OgrenciController],
    }).compile();

    controller = module.get<OgrenciController>(OgrenciController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
