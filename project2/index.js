// // 1. if/else 맛보기
// let score = 75;
// if (score >= 60) {
//   console.log("통과!");
// } else {
//   console.log("재도전!");
// }

// function passOrFail(score) {
//   if (score >= 60) return "통과!";
//   return "재도전!";
// }
// console.log(passOrFail(75)); // "통과!"

function passOrFail(score) {
  if (score >= 60) return "통과";
  return "재도전!";
}

function showResult() {
  const input = document.getElementById("score");
  const result = document.getElementById("result");

  const num = Number(input.value);
  if (Number.isNaN(num) || num < 0 || num > 100) {
    result.innerText = "점수를 0~100 사이로 입력하세요";
    return;
  }

  result.innerText = passOrFail(num);
}
