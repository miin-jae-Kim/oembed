import { Module, OnModuleInit } from '@nestjs/common';
import { OEmbedController } from './o-embed.controller';
import { OEmbedService } from './o-embed.service';
import { HttpModule } from '@nestjs/axios';
import {
  LinkOembedFormatFactory,
  PhotoOembedFormatFactory,
  RichOembedFormatFactory,
  VideoOembedFormatFactory,
} from 'src/interface/o-embed.factory';
import { OembedUrlGenerator } from 'src/util/url.generator';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [HttpModule],
  controllers: [OEmbedController],
  providers: [
    OEmbedService,
    LinkOembedFormatFactory,
    PhotoOembedFormatFactory,
    RichOembedFormatFactory,
    VideoOembedFormatFactory,
    ConfigService,
    OembedUrlGenerator,
  ],
})
export class OEmbedModule implements OnModuleInit {
  constructor(private readonly oembedService: OEmbedService) {}

  onModuleInit() {
    this.oembedService.onInit();
  }
}
