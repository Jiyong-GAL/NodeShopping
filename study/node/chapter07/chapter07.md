Chapter07. 익스프레스 프로젝트를 모듈화 하기

07-1. 모듈화 방법 장세히 살펴보기

다양한 방법으로 모듈 만들기
1. exports 객체로 모듈 만들기
   - exports.객체명 = value 의 형태로 모듈 생성 가능
>> 예제 ./example/p284.js, p284Test.js
2. module.exprots를 사용해서 객체 그대로 사용하기
   - exprots 객체에는 직접 객체를 할당할 수 없어서 module.exports를 사용해야 함
   - 함수 그대로도 할당 가능
     module.exprots = function(){

     }
>> 예제 ./example/p287.js, p287Test.js
    module.exprots와 export를 함께 사용하면 module.exprots가 우선 적용되며 module.exports사용을 권장함

모듈을 분리할 떄 사용하는 전형적인 코드 패턴
- 함수를 할당하는 경우 
- 인스턴스 객체를 할당하는 경우
- 프로토타입 객체를 할당하는 경우
>> 예제 ./example/p294-299.js

07-2. 사용자 정보 관련 기능을 모듈화하기

사용자 처리 함수를 별도의 모듈 파일로 분리해보기
- module.exprots.함수명 = 함수
>> 예제 ./example/p304.js

프로젝트 진행 시 해당 예제처럼 기능 구현 후 모듈화 사용(재사용 성 증대)

07-3. 설정파일 만들기
- 서버 유지관리 측면에서 각 기능 별 모듈화 필요
- DB 설정 사용 예제
>> 예제 ./example/db/p301, p310, p311.js

설정 파일에 라우팅 정보 넣기
>> 예제 ./example/p314.js
