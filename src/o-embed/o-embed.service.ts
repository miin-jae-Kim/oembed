import { HttpService } from "@nestjs/axios";
import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { AxiosResponse } from "axios";
import { OEMBED_TYPE } from "src/enum/oembed.enum";
import {
  LinkOembedFormatFactory,
  OembedFormatFactory,
  PhotoOembedFormatFactory,
  RichOembedFormatFactory,
  VideoOembedFormatFactory,
} from "src/interface/o-embed.factory";
import { ResponseFormat } from "src/interface/response.format";
import { OembedUrlGenerator } from "src/util/url.generator";

@Injectable()
export class OEmbedService {
  private responseFactories: Map<OEMBED_TYPE, OembedFormatFactory>;

  constructor(
    private readonly httpService: HttpService,
    private readonly photoOembedFormatFactory: PhotoOembedFormatFactory,
    private readonly videoOembedFormatFactory: VideoOembedFormatFactory,
    private readonly linkOembedFormatFactory: LinkOembedFormatFactory,
    private readonly richOembedFormatFactory: RichOembedFormatFactory,
    private readonly urlFactory: OembedUrlGenerator
  ) {}

  onInit() {
    this.responseFactories = new Map<OEMBED_TYPE, OembedFormatFactory>([
      [OEMBED_TYPE.PHOTO, this.photoOembedFormatFactory],
      [OEMBED_TYPE.VIDEO, this.videoOembedFormatFactory],
      [OEMBED_TYPE.LINK, this.linkOembedFormatFactory],
      [OEMBED_TYPE.RICH, this.richOembedFormatFactory],
    ]);
  }

  async getVideo(url: string): Promise<ResponseFormat> {
    try {
      const oEmbedUrl = this.urlFactory.createOembedUrl(url);
      const { data }: AxiosResponse<ResponseFormat> = await this.httpService
        .get(oEmbedUrl)
        .toPromise();

      if (this.responseFactories.has(data.type)) {
        const responseFactory = this.responseFactories.get(data.type);
        return responseFactory.createResponseFormat(data);
      } else if (!data) {
        throw new NotFoundException("해당 url을 찾을 수 없습니다.");
      } else {
        throw new ForbiddenException("유효하지 않은 데이터 타입입니다.");
      }
    } catch (error) {
      throw error;
    }
  }
}
