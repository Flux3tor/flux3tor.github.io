let clicks = 0;
document.querySelector(".logo").addEventListener("click", () => {
  clicks++;
  if (clicks === 5) {
    alert("Dev mode unlocked 😈");
    document.body.classList.toggle("dev");
  }
});
