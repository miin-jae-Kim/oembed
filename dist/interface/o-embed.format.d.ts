import { OEMBED_TYPE } from 'src/enum/oembed.enum';
export declare class OembedFormat {
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
export declare class PhotoOembedFormat extends OembedFormat {
    url: string;
    width: number;
    height: number;
}
export declare class VideoOembedFormat extends OembedFormat {
    html: string;
    width: number;
    height: number;
}
export declare class LinkOembedFormat extends OembedFormat {
}
export declare class RichOembedFormat extends OembedFormat {
    html: string;
    width: number;
    height: number;
}
