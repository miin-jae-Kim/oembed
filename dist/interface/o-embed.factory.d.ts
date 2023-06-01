import { ResponseFormat } from './response.format';
export interface OembedFormatFactory {
    createResponseFormat(data: any): ResponseFormat;
}
export declare class PhotoOembedFormatFactory implements OembedFormatFactory {
    createResponseFormat(data: any): ResponseFormat;
}
export declare class VideoOembedFormatFactory implements OembedFormatFactory {
    createResponseFormat(data: any): ResponseFormat;
}
export declare class LinkOembedFormatFactory implements OembedFormatFactory {
    createResponseFormat(data: any): ResponseFormat;
}
export declare class RichOembedFormatFactory implements OembedFormatFactory {
    createResponseFormat(data: any): ResponseFormat;
}
