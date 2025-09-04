const input = document.querySelector("#todoInput");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#todoList");

addBtn.addEventListener("click", function () {
  const value = input.value.trim();
  if (value === "") return;

  // <li> 요소 생성
  const li = document.createElement("li");
  li.textContent = value;

  // ❌ 삭제 버튼 생성
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.classList.add("delete"); // <-- 여기가 오류였음

  // 삭제 버튼 클릭 시, li 삭제
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  // li에 삭제 버튼 붙이기
  li.appendChild(deleteBtn);

  // ul에 li 추가
  list.appendChild(li);

  // 입력창 초기화
  input.value = "";
});
