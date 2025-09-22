// ✅ HTML 요소 선택
const input = document.querySelector("#todoInput"); // 입력창
const addBtn = document.querySelector("#addBtn"); // 추가 버튼
const list = document.querySelector("#todoList"); // 할 일 목록 출력 영역

let todos = []; // 🗂 할 일 배열 (문자열만 저장)

// 💾 저장 함수
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// 📥 불러오기 함수
function loadTodos() {
  const saved = localStorage.getItem("todos");
  if (saved) {
    todos = JSON.parse(saved); // 문자열 → 배열
    render(); // 렌더링
  }
}

// 🖼 화면 출력 함수
function render() {
  list.innerHTML = ""; // 기존 리스트 초기화

  todos.forEach((item, index) => {
    const li = document.createElement("li");

    // ✅ 체크박스 생성
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // ✔️ 체크 시 항목 삭제
    checkbox.addEventListener("click", () => {
      todos.splice(index, 1); // 배열에서 제거
      saveTodos(); // 저장소 갱신
      render(); // 다시 출력
    });

    const text = document.createElement("span");
    text.textContent = item; // 할 일 텍스트 표시

    li.appendChild(checkbox); // 체크박스 추가
    li.appendChild(text); // 텍스트 추가
    list.appendChild(li); // 최종 li 삽입
  });
}

// ➕ 추가 버튼 이벤트
addBtn.addEventListener("click", () => {
  const value = input.value.trim();
  if (value === "") return;

  todos.push(value); // 배열에 추가
  input.value = ""; // 입력창 초기화
  saveTodos(); // 저장
  render(); // 출력
});

// 🌐 페이지 로드시 데이터 불러오기
loadTodos();
