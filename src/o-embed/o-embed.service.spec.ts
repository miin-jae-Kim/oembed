import { Test, TestingModule } from '@nestjs/testing';
import { OEmbedService } from './o-embed.service';

describe('OEmbedService', () => {
  let service: OEmbedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OEmbedService],
    }).compile();

    service = module.get<OEmbedService>(OEmbedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
