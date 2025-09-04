document.querySelector("#greetBtn").addEventListener("click", function () {
  let user = document.querySelector("#username").value;
  document.querySelector("#greeting").textContent = `안녕하세요, ${user}님!`;
});
