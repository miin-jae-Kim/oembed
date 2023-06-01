import { OEMBED_TYPE } from 'src/enum/oembed.enum';

export class OembedFormat {
  // required
  type: OEMBED_TYPE; // "photo",
  version: string; // "1.0",

  // optional
  title?: string; // "ZB8T0193",
  author_name?: string; // "Bees",
  author_url?: string; // "http://www.flickr.com/photos/bees/",
  provider_name?: string; // "Flickr",
  provider_url?: string; // "http://www.flickr.com/"
  thumbnail_url?: string;
  thumbnail_width?: number;
  thumbnail_height?: number;

  // additional (부가적으로 화면에서 표현되는 것들)
  is_plus: Boolean;
  duration: number;
  description: string;
  thumbnail_url_with_play_button: string;
  updated_at: Date;
  video_id: string;
}

export class PhotoOembedFormat extends OembedFormat {
  url: string; // "http://farm4.static.flickr.com/3123/2341623661_7c99f48bbf_m.jpg",
  width: number; // 240,
  height: number; // 160,
}

export class VideoOembedFormat extends OembedFormat {
  html: string;
  width: number; // 240,
  height: number; // 160,
}

export class LinkOembedFormat extends OembedFormat {}

export class RichOembedFormat extends OembedFormat {
  html: string;
  width: number; // 240,
  height: number; // 160,
}
