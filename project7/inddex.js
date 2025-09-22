// 1. 할 일 데이터를 저장할 배열
let todos = [];

// 2. HTML 요소 선택 (입력창, 버튼, 목록 영역)
const input = document.querySelector("#todoInput");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#todoList");

// 3. 로컬스토리지에 todos 배열 저장
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// 4. 저장된 데이터를 불러와 todos 배열에 복구
function loadTodos() {
  const saved = localStorage.getItem("todos");
  if (saved) {
    todos = JSON.parse(saved); // 문자열 → 배열
    render(); // 화면에 출력
  }
}

// 5. todos 배열을 HTML로 렌더링 (ul > li)
function render() {
  list.innerHTML = ""; // 기존 목록 비우기

  todos.forEach((item, index) => {
    const li = document.createElement("li"); // <li> 생성
    li.textContent = item; // 텍스트 할 일 입력

    const deleteBtn = document.createElement("button"); // 삭제 버튼 만들기
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete");

    // 버튼 클릭 시 해당 항목 제거
    deleteBtn.addEventListener("click", () => {
      todos.splice(index, 1); // 배열에서 삭제
      saveTodos(); // 로컬스토리지도 반영
      render(); // 다시 화면 갱신
    });

    li.appendChild(deleteBtn); // <li>에 버튼 붙이기
    list.appendChild(li); // <ul>에 <li> 붙이기
  });
}

// 6. "추가" 버튼 클릭 시 실행
addBtn.addEventListener("click", () => {
  const value = input.value.trim(); // 공백 제거
  if (value === "") return; // 빈 값은 무시

  todos.push(value); // 배열에 추가
  input.value = ""; // 입력창 비우기
  saveTodos(); // 로컬스토리지 저장
  render(); // 화면에 출력
});

// 7. 페이지 열릴 때 실행 (기존 데이터 복원)
loadTodos();
