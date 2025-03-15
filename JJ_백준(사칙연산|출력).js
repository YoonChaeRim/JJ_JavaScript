//2557번
const fs = require('fs'); //node.js 에서 시작을 알려주는 코드드
console.log("Hello World!"); //출력 


//1000번
const fs = require('fs'); //node.js 에서 시작을 알려주는 코드드
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
/* Sync : 동기화 
/dev/stdin : 입력 받기 ( 파이썬에서 input 역할 ) */

const A = parseInt(input[0]); //parseInt() : 정수형으로 변환
const B = parseInt(input[1]);

console.log(A+B); //출력 


//1001번
const fs = require('fs'); //node.js 에서 시작을 알려주는 코드드
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
/* Sync : 동기화 
/dev/stdin : 입력 받기 ( 파이썬에서 input 역할 ) */

const A = parseInt(input[0]); //parseInt() : 정수형으로 변환
const B = parseInt(input[1]);

console.log(A-B); //출력 


//10998번
const fs = require('fs'); //node.js 에서 시작을 알려주는 코드드
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
/* Sync : 동기화 
/dev/stdin : 입력 받기 ( 파이썬에서 input 역할 ) */

const A = parseInt(input[0]); //parseInt() : 정수형으로 변환
const B = parseInt(input[1]);

console.log(A*B); //출력 


//1008번
const fs = require('fs'); //node.js 에서 시작을 알려주는 코드드
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
/* Sync : 동기화 
/dev/stdin : 입력 받기 ( 파이썬에서 input 역할 ) */

const A = parseInt(input[0]); //parseInt() : 정수형으로 변환
const B = parseInt(input[1]);

console.log(A/B); //출력 


//10869번 
const fs = require('fs'); //node.js 에서 시작을 알려주는 코드드
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
/* Sync : 동기화 
/dev/stdin : 입력 받기 ( 파이썬에서 input 역할 ) */

const A = parseInt(input[0]); //parseInt() : 정수형으로 변환
const B = parseInt(input[1]);

console.log(A+B);//출력
console.log(A-B);
console.log(A*B);
console.log(Math.floor(A/B)); //답에서 몫만 나오기를 바랬으니까 소수점 아래를 짤라야함
console.log(A%B);


//10926번
const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim();
//trim : 앞뒤 공백 제거
console.log(input,"??!"); //출력 


//18108번
const fs = require('fs')
const input = fs.readFileSync('/dev/stdin');

console.log(input-543);


//10430번
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);
const C = parseInt(input[2]);

console.log((A+B)%C);
console.log(((A%C)+(B%C))%C);
console.log((A*B)%C);
console.log(((A%C)*(B%C))%C);


//2588번
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const A = parseInt(input[0]);
const B = parseInt(input[1]);
const B1 = Math.floor(B/100); //백의자리
const B2 = Math.floor((B%100)/10); //십의자리
const B3 = Math.floor(B%10); //일의자리

console.log(A*B3);
console.log(A*B2);
console.log(A*B1);
console.log(A*B);


//11382번
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);
const C = parseInt(input[2]);

console.log(A+B+C);


//10171번
console.log("\\    /\\");
console.log(" )  ( ')");
console.log("(  /  )");
console.log(" \\(__)|");


//107172번
console.log("|\\_/|");
console.log("|q p|   /}");
console.log("( 0 )\"\"\"\\");
console.log("|\"^\"`    |");
console.log("||_/=\\\\__|");
