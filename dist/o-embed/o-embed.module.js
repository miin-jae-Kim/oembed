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
exports.OEmbedModule = void 0;
const common_1 = require("@nestjs/common");
const o_embed_controller_1 = require("./o-embed.controller");
const o_embed_service_1 = require("./o-embed.service");
const axios_1 = require("@nestjs/axios");
const o_embed_factory_1 = require("../interface/o-embed.factory");
const url_generator_1 = require("../util/url.generator");
const config_1 = require("@nestjs/config");
let OEmbedModule = class OEmbedModule {
    constructor(oembedService) {
        this.oembedService = oembedService;
    }
    onModuleInit() {
        this.oembedService.onInit();
    }
};
OEmbedModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule],
        controllers: [o_embed_controller_1.OEmbedController],
        providers: [
            o_embed_service_1.OEmbedService,
            o_embed_factory_1.LinkOembedFormatFactory,
            o_embed_factory_1.PhotoOembedFormatFactory,
            o_embed_factory_1.RichOembedFormatFactory,
            o_embed_factory_1.VideoOembedFormatFactory,
            config_1.ConfigService,
            url_generator_1.OembedUrlGenerator,
        ],
    }),
    __metadata("design:paramtypes", [o_embed_service_1.OEmbedService])
], OEmbedModule);
exports.OEmbedModule = OEmbedModule;
//# sourceMappingURL=o-embed.module.js.map