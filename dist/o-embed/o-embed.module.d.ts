import { OnModuleInit } from '@nestjs/common';
import { OEmbedService } from './o-embed.service';
export declare class OEmbedModule implements OnModuleInit {
    private readonly oembedService;
    constructor(oembedService: OEmbedService);
    onModuleInit(): void;
}
