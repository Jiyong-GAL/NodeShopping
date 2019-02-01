Chapter04. 노드의 기본기능 알아보기

주소 문자열과 요청 파라미터 
- url모듈 : URL관련 작업을 편하게 하기 위해 만들어논 node모듈
  nodeAPI : https://nodejs.org/dist/latest-v10.x/docs/api/url.html
  parse() : 주소 문자열 -> URL 객체
  format() : URL객체 -> 주소 문자열
- querystring모듈 : URL에서 요청파라미터만 쉽게 분리해서 사용하는 모듈
  parse() : 주소 문자열에서 요청파라미터만 파싱
  parse().query : 요청파라미터에서 query만 파싱
>> 예제 ./example/p110-111.js

이벤트
- 노드는 대부분 이벤트 기반으로하는 비동기 방식으로 처리하며, 비동기방식 처리를 위해 서로 이벤트를 전달함
- EventEmitter : 
  EventEmitter를 상속 받아서 on(), once() 메소드로 이벤트를 등록 removeListener() 메소드로 이벤트를 제거
  on(event, listener) : 지정한 이벤트의 리스너 추가
    oonce(event, listener) : 지정한 이벤트를 추가하지만, 한번 실행후 이벤트 제거
    removeListener(event, listener) : 지정한 이벤트에대한 리스너 제거
>> 예제 ./example/p114.js

파일다루기
- 노드의 파일시스템은 파일을 다루는기능, 디렉토리를 다루는 기능 두 가지가 있음
- 동기식IO와 비동기식IO기능 제공(동기식 IO에는 sync단어가 붙음)
- 파일을 직접열지않고 읽고 쓰는 메소드
  readFile(filename, [encoding],[callback]) : 비동기IO로 파일 읽기
  readFileSync(filename, [encoding]) : 동기IO로 파일 읽기
  writeFile(filename, data, encoding='utf-8',[callback]) : 비동기IO로 파일 쓰기
  writeFileSync(filename, data, encoding='utf-8') : 동기IO로 파일 쓰기
- 파일을 쓸 디렉토리가 없을 경우 다음과 같은 에러가 뜸
    파일쓰기 오류
    { [Error: ENOENT: no such file or directory, open 'D:\study\nodeStudy\chapter04\output\writeTest.txt']
    errno: -4058,
    code: 'ENOENT',
    syscall: 'open',
    path: 'D:\\study\\nodeStudy\\chapter04\\output\\writeTest.txt' }
>> 예제 ./example/p119-120.js

- 파일을 직접 열거나 닫으면서 읽고 쓰는경우 사용하는 메소드
  open(path, flags, [mode], [callback]) : 파일열기
      flags 
         r  : '읽기'
         w  : '쓰기'(파일이 이미 있는경우 기존 내용 모두 삭제)
         w+ : 읽기와 쓰기 모두 사용, 기존파일이 있는경우 기존 내용 모두 삭제
         a+ : 읽기와 추가에 모두 사용, 기존 내용에 append
  read(fd, buffer, offset, length, position, [callback]) : 지정한 부분의 파일 내용을 읽음
  write(fd, buffer, offset, length, position, [callback]) : 파일의 지정한 부분에 데이터 쓰기
  close(fd, [callback]) : 파일닫기
>> 예제 ./example/p123.js

- Buffer객체는 바이너리 데이터를 읽고 쓰는데 사용
  buffer.write('내용','인코딩') : 버퍼에 내용을 써줌
  buffer.copy(target, targetStart, sourceStart, sourceEnd) : 버퍼를 복사해서 덮어 씀
  Buffer.concat([합칠버퍼1, 합칠버퍼2]) : buffer를 합쳐줌
>> 예제 ./example/p124.js

- 스트림단위로 파일 읽고/쓰기
  스트림 : 데이터를 전달하는 통로
  스트림을 이용한 방식은 웹서버를 만들고 사용자의 요청을 처리할 때 유리
  createReadStream(path,[options])  : 파일을 읽기위한 스트림 객체 생성
  createWriteStream(path,[options]) : 파일을 쓰기위한 스트림 객체 생성
>> 예제 ./example/p126.js

- http모듈로 파일 내용읽고 응답하기
  pipe()메소드로 파일 스트림 객체와 웹서버의 스트림객체를 연결(복사) 가능
>> 예제 ./example/p127.js
  
- 폴더 다루기
  fs모듈로 폴더를 생성, 삭제가 가능
  fs.mkdir() : 폴더 생성
  fs.rmdir() : 폴더 생성
>> 예제 ./example/p128.js

로그파일 남기기
- 로그를 남기기 위한 모듈 : winston(로그 처리), winstonDaily(로그 일별 처리)
- 로그레벨
  debug(0) > info(1) > notice(2) > warnning(3) > error(4) >crit(5) > alert(6) > emerg(7)
  하위로 내려 갈 수록 상위 수준을 모두 포함하여 출력
