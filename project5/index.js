// 배열
// 인덱스는 0부터 시작

// let fruits = ["사과", "바나나", "딸기"];

// 반복문 - 같은 작업을 계속 할 때 사용

// for (let i = 0; i < 3; i++) {
//   console.log("안녕!", i);
// }

// 📌 배열을 반복해서 출력하기

// let fruits = ["사과", "바나나", "딸기"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// ✨ 3. forEach – 더 쉬운 배열 반복

// let fruits = ["사과", "바나나", "딸기"];

// fruits.forEach(function (item, index) {
//   console.log(index + ":" + item);
// });

let numbers = [10, 20, 30, 40];
let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

numbers.forEach(function (num) {
  sum += num;
});
console.log("총합:", sum);
