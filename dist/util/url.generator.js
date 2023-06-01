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
exports.OembedUrlGenerator = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let OembedUrlGenerator = class OembedUrlGenerator {
    constructor(configService) {
        this.configService = configService;
    }
    createOembedUrl(url) {
        if (url.includes('youtube')) {
            return `https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`;
        }
        else if (url.includes('twitter')) {
            return `https://publish.twitter.com/oembed?url=${encodeURIComponent(url)}`;
        }
        else if (url.includes('instagram')) {
            const instagram_access_token = this.configService.get('INSTAGRAM_ACCESS_TOKEN');
            return `https://graph.facebook.com/v17.0/instagram_oembed?url=${encodeURIComponent(url)}&access_token=${instagram_access_token}`;
        }
        else if (url.includes('vimeo')) {
            return `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(url)}`;
        }
        else {
            throw new common_1.ForbiddenException('유효하지 않은 도메인 url입니다.');
        }
    }
};
OembedUrlGenerator = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], OembedUrlGenerator);
exports.OembedUrlGenerator = OembedUrlGenerator;
//# sourceMappingURL=url.generator.js.map