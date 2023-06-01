import {
  LinkResponseFormat,
  PhotoResponseFormat,
  ResponseFormat,
  RichResponseFormat,
  VideoResponseFormat,
} from './response.format';

export interface OembedFormatFactory {
  createResponseFormat(data: any): ResponseFormat;
}

export class PhotoOembedFormatFactory implements OembedFormatFactory {
  createResponseFormat(data: any): ResponseFormat {
    return data as PhotoResponseFormat;
  }
}

export class VideoOembedFormatFactory implements OembedFormatFactory {
  createResponseFormat(data: any): ResponseFormat {
    return data as VideoResponseFormat;
  }
}

export class LinkOembedFormatFactory implements OembedFormatFactory {
  createResponseFormat(data: any): ResponseFormat {
    return data as LinkResponseFormat;
  }
}

export class RichOembedFormatFactory implements OembedFormatFactory {
  createResponseFormat(data: any): ResponseFormat {
    return data as RichResponseFormat;
  }
}
