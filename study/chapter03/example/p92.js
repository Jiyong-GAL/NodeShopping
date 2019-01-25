/* 
    p92.자바스크립트 배열
*/

var fruits =[{kor:'사과',eng:'apple'}
            ,{kor:'바나나',eng:'banana'}
            ,{kor:'포도',eng:'grape'}
];

console.log('과일 총 개수 == ',fruits.length);
// 배열 값 추가
fruits.push({kor:'멜론',eng:'melon'});
fruits.push({kor:'오렌지',eng:'orange'});
fruits.splice(1,0,{kor:"수박",eng:'waterMelon'}); // 1번째 인덱스 자리에 추가

// 배열 복사
var myFruits = fruits.slice(2,3); 
console.log("내 과일 == \n",myFruits);

// 배열 값 삭제
fruits.pop(); // 가장 마지막 요소(마지막)
fruits.shift(); // 가장 안쪽 요소(첫번째)
fruits.splice(1,2); // 1번째 인데스부터 2개 데이터 삭제


// forEach함수를 이용해서 for문처럼 이용 가능
fruits.forEach(function(item,index){
    console.log(item,index);
})

