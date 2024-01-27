import "./style.css";

const navbarUlEl = document.querySelector<HTMLElement>("#nav-bar-ul")!;

// create function to toggle popup-section windows

navbarUlEl.addEventListener("click", () => {
  console.log("you clicked ul");
});
