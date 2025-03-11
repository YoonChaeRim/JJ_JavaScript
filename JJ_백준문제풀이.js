const fs = require('fs'); //node.js 에서 시작을 알려주는 코드드
const input = fs.readFileSync('/dev/stdin').toString().split('');
/* Sync : 동기화 
/dev/stdin : 입력 받기 ( 파이썬에서 input 역할 ) */

const A = parseInt(input[0]); //parseInt() : 정수형으로 변환
const B = parseInt(input[1]);

console.log(A+B); //출력 