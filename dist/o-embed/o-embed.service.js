"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OEmbedService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const oembed_enum_1 = require("../enum/oembed.enum");
const o_embed_factory_1 = require("../interface/o-embed.factory");
const url_generator_1 = require("../util/url.generator");
let OEmbedService = class OEmbedService {
    constructor(httpService, photoOembedFormatFactory, videoOembedFormatFactory, linkOembedFormatFactory, richOembedFormatFactory, urlFactory) {
        this.httpService = httpService;
        this.photoOembedFormatFactory = photoOembedFormatFactory;
        this.videoOembedFormatFactory = videoOembedFormatFactory;
        this.linkOembedFormatFactory = linkOembedFormatFactory;
        this.richOembedFormatFactory = richOembedFormatFactory;
        this.urlFactory = urlFactory;
    }
    onInit() {
        this.responseFactories = new Map([
            [oembed_enum_1.OEMBED_TYPE.PHOTO, this.photoOembedFormatFactory],
            [oembed_enum_1.OEMBED_TYPE.VIDEO, this.videoOembedFormatFactory],
            [oembed_enum_1.OEMBED_TYPE.LINK, this.linkOembedFormatFactory],
            [oembed_enum_1.OEMBED_TYPE.RICH, this.richOembedFormatFactory],
        ]);
    }
    async getVideo(url) {
        try {
            const oEmbedUrl = this.urlFactory.createOembedUrl(url);
            const { data } = await this.httpService
                .get(oEmbedUrl)
                .toPromise();
            if (this.responseFactories.has(data.type)) {
                const responseFactory = this.responseFactories.get(data.type);
                return responseFactory.createResponseFormat(data);
            }
            else if (!data) {
                throw new common_1.NotFoundException("해당 url을 찾을 수 없습니다.");
            }
            else {
                throw new common_1.ForbiddenException("유효하지 않은 데이터 타입입니다.");
            }
        }
        catch (error) {
            throw error;
        }
    }
};
OEmbedService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService,
        o_embed_factory_1.PhotoOembedFormatFactory,
        o_embed_factory_1.VideoOembedFormatFactory,
        o_embed_factory_1.LinkOembedFormatFactory,
        o_embed_factory_1.RichOembedFormatFactory,
        url_generator_1.OembedUrlGenerator])
], OEmbedService);
exports.OEmbedService = OEmbedService;
//# sourceMappingURL=o-embed.service.js.map