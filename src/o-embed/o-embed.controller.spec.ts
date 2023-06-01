import { Test, TestingModule } from '@nestjs/testing';
import { OEmbedController } from './o-embed.controller';

describe('OEmbedController', () => {
  let controller: OEmbedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OEmbedController],
    }).compile();

    controller = module.get<OEmbedController>(OEmbedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
