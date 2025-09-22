const input = document.querySelector("#todoInput"); // 입력창 DOM 가져오기
const addBtn = document.querySelector("#addBtn"); // 추가 버튼 DOM 가져오기
const list = document.querySelector("#todoList"); // 할 일 리스트 DOM 가져오기

let todos = []; // 할 일을 저장할 배열

// ----------------------
// 📦 todos 저장 함수
// ----------------------
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos)); // todos 배열을 JSON 문자열로 변환해 localStorage에 저장
}

// ----------------------
// 📦 todos 불러오기 함수
// ----------------------
function loadTodos() {
  const saved = localStorage.getItem("todos"); // localStorage에서 데이터 꺼내오기
  if (saved) {
    todos = JSON.parse(saved); // JSON 문자열을 다시 JS 배열로 변환
    render(); // 불러온 후 화면에 렌더링
  }
}

// ----------------------
// 🎨 렌더링 함수
// ----------------------
function render(filter = "all") {
  list.innerHTML = ""; // 리스트 비우기 (중복 방지)

  let filtered = []; // 필터링된 배열 담을 변수
  if (filter === "all") {
    filtered = todos; // 전체 보기
  } else if (filter === "done") {
    filtered = todos.filter((t) => t.done); // 완료만 보기
  } else if (filter === "undone") {
    filtered = todos.filter((t) => !t.done); // 미완료만 보기
  }

  // 필터링된 배열을 하나씩 돌면서 <li> 생성
  filtered.forEach((item, index) => {
    const li = document.createElement("li"); // li 요소 생성

    // ✅ 체크박스 생성
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox"; // 체크박스로 지정
    checkbox.checked = item.done; // 완료 여부 반영

    // 체크박스 클릭 이벤트 → 완료 상태 반영
    checkbox.addEventListener("click", () => {
      const realIndex = todos.findIndex((t) => t.text === item.text); // todos 배열에서 해당 요소 위치 찾기
      todos[realIndex].done = checkbox.checked; // 완료 상태 업데이트
      saveTodos(); // 로컬스토리지 저장
      render(filter); // 현재 필터 유지하면서 새로 그림
    });

    // 📝 텍스트(span)
    const text = document.createElement("span");
    text.textContent = item.text; // 할 일 내용 표시
    if (item.done) text.classList.add("done"); // done이면 CSS 효과 적용 (예: 줄 긋기)

    // ❌ 삭제 버튼 생성
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌"; // X 표시

    // 삭제 버튼 클릭 이벤트 → 해당 todo 삭제
    deleteBtn.addEventListener("click", () => {
      const realIndex = todos.findIndex((t) => t.text === item.text); // 실제 배열에서 위치 찾기
      todos.splice(realIndex, 1); // 해당 요소 삭제
      saveTodos(); // 저장
      render(filter); // 다시 렌더링
    });

    // li에 요소들 추가
    li.appendChild(checkbox); // 체크박스 추가
    li.appendChild(text); // 텍스트 추가
    li.appendChild(deleteBtn); // 삭제 버튼 추가

    // 최종 li를 리스트에 붙이기
    list.appendChild(li);
  });
}

// ----------------------
// ➕ 추가 버튼 이벤트
// ----------------------
addBtn.addEventListener("click", () => {
  const value = input.value.trim(); // 입력값 가져오기 + 앞뒤 공백 제거
  if (value === "") return; // 비어 있으면 추가 안 함

  todos.push({ text: value, done: false }); // 새로운 todo 객체 배열에 추가
  input.value = ""; // 입력창 비우기
  saveTodos(); // 저장
  render(); // 다시 렌더링
});

// ----------------------
// 🔍 필터 버튼 이벤트
// ----------------------
const filterButtons = document.querySelectorAll("#filterButtons button");
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filterType = btn.dataset.filter; // 버튼의 data-filter 값 읽기
    render(filterType); // 해당 필터로 렌더링
  });
});

// ----------------------
// 🚀 초기 실행
// ----------------------
loadTodos(); // 페이지 로드 시 localStorage에서 데이터 불러오기
