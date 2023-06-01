import { OEmbedService } from './o-embed.service';
import { ResponseFormat } from 'src/interface/response.format';
import { RequestFormat } from 'src/interface/request.format';
export declare class OEmbedController {
    private readonly oEmebedService;
    constructor(oEmebedService: OEmbedService);
    getHello(queryParams: RequestFormat): Promise<ResponseFormat>;
}
