const input = document.querySelector("#todoInput");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#todoList");

let todos = []; // 🗂 할 일 목록을 담을 배열 (초기엔 비어 있음)

function saveTodos() {
  // 💾 현재 todos 배열을 문자열로 바꿔서 localStorage에 저장
  localStorage.setItem("todos", JSON.stringify(todos));
  // localStorage에는 문자열만 저장 가능하므로 JSON.stringify 사용
}

function loadTodos() {
  // 📦 저장된 할 일 목록 데이터를 localStorage에서 불러옴
  const saved = localStorage.getItem("todos");

  // ❓ 만약 저장된 값이 있다면
  if (saved) {
    // 🔁 문자열을 다시 배열로 변환해서 todos 배열에 저장
    todos = JSON.parse(saved);

    // 🔄 화면에 todos 배열을 기반으로 리스트를 다시 그림
    render();
  }
}
function render() {
  list.innerHTML = ""; // 1. 기존 목록 초기화 (새로 그리기 위해 비움)

  todos.forEach((item, index) => {
    const li = document.createElement("li"); // 2. <li> 하나 생성
    li.textContent = item; // 3. 배열의 값(item)을 텍스트로 삽입

    const deleteBtn = document.createElement("button"); // 4. 삭제 버튼 만들고
    deleteBtn.textContent = "❌"; // 5. X 표시
    deleteBtn.classList.add("delete"); // (스타일 적용용 클래스)

    deleteBtn.addEventListener("click", () => {
      todos.splice(index, 1); // 6. 배열에서 해당 항목 제거
      saveTodos(); // 7. 변경된 배열 localStorage에 저장
      render(); // 8. 다시 렌더링 (화면 갱신)
    });

    li.appendChild(deleteBtn); // 9. li 안에 버튼 추가
    list.appendChild(li); // 10. 최종 li를 ul(#todoList)에 추가 (→ 화면 출력)
  });
}
addBtn.addEventListener("click", () => {
  const value = input.value.trim(); // 1. 입력창에서 값을 가져오고, 공백 제거
  if (value === "") return; // 2. 아무것도 없으면 중단 (추가하지 않음)

  todos.push(value); // 3. 입력한 값(value)을 배열(todos)에 추가
  input.value = ""; // 4. 입력창 초기화 (다시 빈칸으로 만듦)
  saveTodos(); // 5. localStorage에 배열 저장
  render(); // 6. 화면에 리스트 다시 출력 (업데이트됨)
});

loadTodos();
