const sw = document.getElementById("lightSwitch");
const text = document.getElementById("lightText");

sw.addEventListener("click", function () {
  sw.classList.toggle("off");
  document.body.classList.toggle("light-off");

  if (document.body.classList.contains("light-off")) {
    text.textContent = "불을 켜보세요";
  } else {
    text.textContent = "불을 꺼보세요";
  }
});