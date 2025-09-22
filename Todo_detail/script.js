// 할 일 저장 배열
let todos = [];

// 요소 선택
const input = document.querySelector("#todoInput");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#todoList");

// 저장 함수
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// 불러오기 함수
function loadTodos() {
  const saved = localStorage.getItem("todos");
  if (saved) {
    todos = JSON.parse(saved);
    render();
  }
}

// 화면 렌더링 함수
function render() {
  list.innerHTML = "";

  todos.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete");

    deleteBtn.addEventListener("click", () => {
      todos.splice(index, 1);
      saveTodos();
      render();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

// 추가 버튼 클릭 이벤트
addBtn.addEventListener("click", () => {
  const value = input.value.trim();
  if (value === "") return;

  todos.push(value);
  input.value = "";
  saveTodos();
  render();
});

// 시작 시 불러오기
loadTodos();
