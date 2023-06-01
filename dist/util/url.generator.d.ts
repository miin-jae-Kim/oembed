import { ConfigService } from "@nestjs/config";
export declare class OembedUrlGenerator {
    private configService;
    constructor(configService: ConfigService);
    createOembedUrl(url: string): string;
}
