import "./style.css";

// navbar
const navbarUlEl = document.querySelector<HTMLElement>("#nav-bar-ul")!;
// about section
const aboutSectionEl = document.querySelector<HTMLElement>("#about-section")!;
// contact section

const contactSectionEl =
  document.querySelector<HTMLElement>("#contact-section")!;

// create function to toggle popup-section windows
// add eventlistener to navbar ul

navbarUlEl.addEventListener("click", (e: MouseEvent) => {
  console.log("you clicked ul");
  if ((e.target as HTMLElement).innerText === "About") {
    aboutSectionEl.classList.remove("hide");
    console.log("you clicked about link");
  } else if ((e.target as HTMLElement).innerText === "Contact") {
    contactSectionEl.classList.remove("hide");
    console.log("you clicked contact link");
  }
});
