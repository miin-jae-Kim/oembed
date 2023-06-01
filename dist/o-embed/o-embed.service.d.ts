import { HttpService } from "@nestjs/axios";
import { LinkOembedFormatFactory, PhotoOembedFormatFactory, RichOembedFormatFactory, VideoOembedFormatFactory } from "src/interface/o-embed.factory";
import { ResponseFormat } from "src/interface/response.format";
import { OembedUrlGenerator } from "src/util/url.generator";
export declare class OEmbedService {
    private readonly httpService;
    private readonly photoOembedFormatFactory;
    private readonly videoOembedFormatFactory;
    private readonly linkOembedFormatFactory;
    private readonly richOembedFormatFactory;
    private readonly urlFactory;
    private responseFactories;
    constructor(httpService: HttpService, photoOembedFormatFactory: PhotoOembedFormatFactory, videoOembedFormatFactory: VideoOembedFormatFactory, linkOembedFormatFactory: LinkOembedFormatFactory, richOembedFormatFactory: RichOembedFormatFactory, urlFactory: OembedUrlGenerator);
    onInit(): void;
    getVideo(url: string): Promise<ResponseFormat>;
}
