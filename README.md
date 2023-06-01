### Document

실행
```
prod: npm start
development: npm run start:dev
```

검색 가능한 oembed는 youtube, twitter, viemo, instagram으로 이 중 하나도 포함되니 않은 경우 403 (유효하지 않은 링크) 예외를 던집니다.
(주의) Instagram의 경우 open API에서 access token이 필요하므로 .env 파일을 만들어 INSTAGRAM_ACCESS_TOKEN에 value를 넣어서 사용해야합니다.
-> 참고 링크 : https://developers.facebook.com/docs/instagram/oembed

아래는 API test를 위한 postman link입니다.
postman link : https://documenter.getpostman.com/view/11067871/2s93mBvdZ1


### Folder Strcuture
- src
  - o-embed : oembed controller, service가 내장된 module입니다.
  - interface : response/request format 혹은 factory와 같은 형식을 관리하는 폴더입니다.
  - util : class 로 처리하는 것이 아닌, function 형태의 기능들을 모은 폴더입니다.
  - interceptor : nest interceptor 기능 정리 폴더입니다.
  - filter : nest filter 기능 정리 폴더입니다.
  - enum : enum 관리 폴더입니다.

### 동작 원리

1. oembed controller에서 받은 로직을 service method(=getVideo)에서 실행합니다.
2. oembed의 실행 url은 youtube, twitter, instgram, vimeo 모두 다르므로 urlFactory Class에서 createOembedUrl method를 통해 생성합니다. </br>
   (다음과 같이 나눈 이유는 url생성에 있어서 별도의 로직이 생겨날 수 있음과, 코드의 복잡성을 분기가 아닌 클래스 주입방식으로 하기 위해 팩토리 방식을 사용하였습니다.)
3. axios(httpService)를 사용해 3rd-party api 요청을 수신 후 값을 ResposeFormat에 맞춰 보냅니다. ResponseFormat은 4개의 클래스로 나뉩니다. </br>
   (Photo, Video, Link, Rich -> response.format.ts file 참고)
   - 3rd-party api 의 data에서 type이 위의 네가지가 아닌 경우에는 Fobidden exception을, data가 없는 경우 NotFoundException을 리턴합니다.
   - 이때, exception은 filter를 사용해 던집니다.
   - 만약 예상치 못한 예외가 생길 수 있으므로 try catch를 통해 Exception || Error을 받을 수 있도록 처리합니다.

4. API 성공시 interceptor를 통해 데이터를 다음과 같은 형식으로 보내도록 가공 후 전달합니다. (예외를 던지는 경우도 형식은 같습니다.)</br>
   ```
   {
     statusCode: HTTP StatusCode
     message: Error || Exception의 경우 error.message를 같이 전달,
     data: API 성공 수신시 결과값
   }
   ```
