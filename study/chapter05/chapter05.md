Chapter05. 웹 서버 만들기

05-1. 간단한 웹 서버 만들기

1. http모듈 : 노드에서 기본으로 제공하는 서버 객체
- ceateSever() : 서버 객체 반환
- listen(port, [hostname], [backlog], [callback]) : 서버를 열 포트와 콜백을 전달하면 서버가 시작됨
- close() : 서버를 종료

2. 클라이언트가 웹 서버에 요청할 때 발생하는 이벤트 처리
- connection : 클라이언트가 접속하여 연결이 만들어질 때 발생하는 이벤트
- request    : 클라이언트가 요청할 때 발생하는 이벤트
- close      : 서버를 종료할 때 발생하는 이벤트
- res로 페이지를 리턴해줄 경우 MIME Type을 지정해서 리턴해줘야 함
- MIME Type
  text/plane : 일반 텍스트
  text/html  : HTML 문서
  text/css   : CSS 문서
  text/xml   : XML 문서
  image/jpeg, PNG : JPEG, PNG파일
  video/mpeg, audio/mp3 : MPEG 비디오파일, mp3음악파일
  application/zip : 압축 ZIP 파일  
>> 예제 ./example/p138.js

3. 서버에서 다른 웹사이트 데이터 가져와서 응답하기
- http 모듈을 사용해 GET|POST 방식으로 다른 웹서버에 데이터 요청 가능
>> 예제 ./example/p147.js

05-2. 익스프레스로 웹 서버 만들기

1. 새로운 익스프레스 서버 만들기
- express : http모듈을 이용해서 직접 구현해야 할 부분을 구현해 놓은 모듈
- 미들웨어와 라우터 제공
>> 예제 ./example/p151.js

2. 미들웨어로 클라이언트에 응답보내기
- 미들웨어 : 하나의 독립된기능을 가진 함수(중간 처리)
- 라우터   : 미들웨어 중 하나
- 클라이언트 요청 → 미들웨어(필요한 기능을 순차적으로 처리) → 라우터 → 클라이언트 응답
- next()함수로 그 다음 미들웨어를 호출
>> 예제 ./example/p155-157.js

3. 익스프레스의 요청 객체와 응답 객체
- send([body]) : 클라이언트에 응답 객체를 보냄(html | JSON | Buffer객체)
  satus(code)  : HTTP 상태코드 반환, end()나 send()함수를 추가로 호출해야 전송가능
  sendStatus(statusCode) : HTTP 상태코드와 상태메시지 전달
  redirect([status], path) : 웹 페이지 경로를 강제로 이동
  render(view, [,locals][,callback]) : 뷰 엔진을 사용해 문서를 만든 후 전송

05-3. 미들웨어 사용하기
1. static 미들웨어
- 특정 폴더의 파일들을 특정 패스로 접근할 수 있도록 만들어주는 미들웨어
- path를 static으로 지정하면 웹 서버의 루트패스로 지정 가능
>> 예제 ./example/p164.js
  
2. body-parser 미들웨어
- POST로 요청했을 때 파라미터를 확인하기 위해 만들어진 미들웨어
- 주소 문자열에 요청값이 들어가는 GET방식과 파싱방법이 다름
>> 예제 ./example/p167.js

05-4. 요청 라우팅하기
- 라우팅 미들웨어 : use()로 설정한 미들웨어는 다른 요청에도 호출되기때문에 일일이 요청 URL을 확인해야하는 번거로움이 있음
                   이러한 문제를 해결하는 미들웨어
- get(callback)    : GET방식 요청을 처리하기 위해 사용
  post(callback)   : POST방식 요청을 처리하기 위해 사용
  put(callback)    : PUT방식 요청을 처리하기 위해 사용
  delete(callback) : DELETE방식 요청을 처리하기 위해 사용
  all(callback)    : 모든방식 요청을 처리하기 위해 사용
- 오류페이지 보여주기
  라우팅은 위에서부터 순차적으로 읽기때문에 all() 함수를 이용해서 * 로 404 경로를 잡아주면 설정된 경로 외에는 404 처리 가능
>> 예제 ./example/p171-175.js
- express-error-handler 미들웨어로 오류 페이지 보내기
  해당 에러와 페이지를 매핑해서 사용하므로 좀 더 권장하는 에러 페이지 처리 방식
>> 예제 ./example/p176.js

05-5. 쿠키와 세션 관리하기
- 쿠키 : 클라이언트 영역에 저장되며 cookie-parser 미들웨어를 이용
  쿠키 생성 
    res.cookie('쿠키명',{
        key : value
    });
   쿠키 삭제
   res.clearCookie('쿠키명');
  개발자도구-application-Cookies 확인가능
>> 예제 ./example/p180.js
- 세션 : 서버 영역에 저장되며, express-session 모듈 이용
  세션 생성
    req.session.세션명 = {
        key : value
    };
  세션 삭제
    req.session.destory([callback]);  
>> 예제 ./example/p183.js

05-6. 파일 업로드 기능 만들기
- multer 미들웨어 이용 (multipart 포맷으로 된 파일 업로드 기능)
- 속성
  destination : 업로드한 파일이 저장될 폴더
  filename    : 업로드한 파일의 이름
  limits      : 파일 크기나 개수등의 제한








