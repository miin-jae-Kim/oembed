import { OEMBED_TYPE } from 'src/enum/oembed.enum';
export declare class ResponseFormat {
    type: OEMBED_TYPE;
    version: string;
    title?: string;
    author_name?: string;
    author_url?: string;
    provider_name?: string;
    provider_url?: string;
    thumbnail_url?: string;
    thumbnail_width?: number;
    thumbnail_height?: number;
    is_plus: Boolean;
    duration: number;
    description: string;
    thumbnail_url_with_play_button: string;
    updated_at: Date;
    video_id: string;
}
export declare class PhotoResponseFormat extends ResponseFormat {
    url: string;
    width: number;
    height: number;
}
export declare class VideoResponseFormat extends ResponseFormat {
    html: string;
    width: number;
    height: number;
}
export declare class LinkResponseFormat extends ResponseFormat {
}
export declare class RichResponseFormat extends ResponseFormat {
    html: string;
    width: number;
    height: number;
}
