import { ForbiddenException, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class OembedUrlGenerator {
  constructor(private configService: ConfigService) {}

  createOembedUrl(url: string) {
    if (url.includes("youtube")) {
      return `https://www.youtube.com/oembed?url=${encodeURIComponent(
        url
      )}&format=json`;
    } else if (url.includes("twitter")) {
      return `https://publish.twitter.com/oembed?url=${encodeURIComponent(
        url
      )}`;
    } else if (url.includes("instagram")) {
      const instagram_access_token = this.configService.get<string>(
        "INSTAGRAM_ACCESS_TOKEN"
      );

      return `https://graph.facebook.com/v17.0/instagram_oembed?url=${encodeURIComponent(
        url
      )}&access_token=${instagram_access_token}`;
    } else if (url.includes("vimeo")) {
      return `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(url)}`;
    } else {
      throw new ForbiddenException("유효하지 않은 도메인 url입니다.");
    }
  }
}
