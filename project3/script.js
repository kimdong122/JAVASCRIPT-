// 1) 순수 함수: 점수 → 등급 (화면 변경 없음)
function getGrade(score) {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  return "F";
}

// 2) 화면 변경 함수: 입력 읽기 → 검증(가드 절) → 표시
function showGrade() {
  const input = document.getElementById("score");
  const text = document.getElementById("gradeText");

  const raw = (input.value || "").trim();
  if (raw === "") {
    text.innerText = "값을 입력하세요.";
    text.style.color = "crimson";
    return;
  }

  const num = Number(raw);
  if (Number.isNaN(num) || num < 0 || num > 100) {
    text.innerText = "0~100 사이의 숫자를 입력하세요.";
    text.style.color = "crimson";
    return;
  }

  const g = getGrade(num);
  text.innerText = `등급: ${g}`; // ← ${g}로 수정
  text.style.color =
    g === "A" || g === "B"
      ? "green"
      : g === "C" || g === "D"
      ? "royalblue"
      : "gray";
}

// Enter로도 실행 (함수 밖에서 '한 번만' 등록)
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") showGrade();
});

console.log("✅ 3일차 로딩 OK");
