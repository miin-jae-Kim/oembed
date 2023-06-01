import { Controller, Get, Query } from '@nestjs/common';
import { OEmbedService } from './o-embed.service';
import { ResponseFormat } from 'src/interface/response.format';
import { RequestFormat } from 'src/interface/request.format';

@Controller('oembed')
export class OEmbedController {
  constructor(private readonly oEmebedService: OEmbedService) {}

  @Get()
  getHello(@Query() queryParams: RequestFormat): Promise<ResponseFormat> {
    const { url } = queryParams;
    return this.oEmebedService.getVideo(url);
  }
}
