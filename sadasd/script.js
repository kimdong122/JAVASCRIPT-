// function showFruits(arr) {
//   arr.forEach(function (fruit, index) {
//     console.log(index + 1 + "번째 과일: " + fruit);
//   });
// }

// let myFruits = ["포도", "복숭아", "망고"];
// showFruits(myFruits);

// 추가 및 삭제
// let todos = [];

// function addTodo(task) {
//   if (task.trim() === "") return;
//   todos.push(task);
//   console.log("추가:", todos);
// }

// function deleteTodo(index) {
//   todos.splice(index, 1);
//   console.log("삭제:", todos);
// }

// addTodo("공부하기");
// addTodo("운동하기");
// deleteTodo(1);

let todos = [];

function showTodo() {
  console.log("현재 할일 목록");
  todos.forEach((item, index) => {
    console.log(index + 1 + "." + item);
  });
}
// 공백란에 추가 해주는 작업
function addTodo(task) {
  if (task.trim() === "") return;
  todos.push(task);
  showTodo();
}
// 배열안에 있는 문장 지우기
function deleteTodo(index) {
  todos.splice(index, 1);
  showTodo();
}

addTodo("공부하기");
addTodo("딸치기");
addTodo("똥싸기");

deleteTodo(1);
