import { IsUrl } from 'class-validator';

export class RequestFormat {
  @IsUrl()
  url: string;
}
