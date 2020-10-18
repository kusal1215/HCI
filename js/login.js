const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container1 = document.querySelector(".container1");

sign_up_btn.addEventListener("click", () => {
  container1.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container1.classList.remove("sign-up-mode");
});
