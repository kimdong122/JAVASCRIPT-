// 입력창, 버튼, 리스트 영역 요소 선택
const input = document.querySelector("#todoInput");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#todoList");

// '추가' 버튼 클릭 시 실행되는 이벤트
addBtn.addEventListener("click", function () {
  // 입력된 값을 가져와서 양옆 공백 제거
  const value = input.value.trim();

  // 아무것도 입력하지 않았으면 함수 종료
  if (value === "") return;

  // 새로운 <li> 요소 생성 (할 일 항목)
  const li = document.createElement("li");
  li.textContent = value; // 입력값을 li에 넣기

  // 삭제 버튼 생성
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌"; // 버튼에 X 표시
  deleteBtn.classList.add("delete"); // 클래스명 추가 (스타일 줄 수 있음)

  // 삭제 버튼 클릭 시 해당 li 삭제
  deleteBtn.addEventListener("click", function () {
    li.remove(); // li 요소 제거
  });

  // 버튼을 li 내부에 추가
  li.appendChild(deleteBtn);

  // 최종 완성된 li를 리스트(ul)에 추가
  list.appendChild(li);

  // 입력창 초기화
  input.value = "";
});
