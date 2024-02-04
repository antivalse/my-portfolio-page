import "./style.css";

// navbar
const navbarUlEl = document.querySelector<HTMLElement>("#nav-bar-ul")!;
// about section
const aboutSectionEl = document.querySelector<HTMLElement>("#about-section")!;
// contact section
const contactSectionEl =
  document.querySelector<HTMLElement>("#contact-section")!;
// contact button in about section
const aboutSectionContactBtn =
  document.querySelector<HTMLLinkElement>("#contact-button")!;
// home link-button in about section
const aboutSectionHomeBtn =
  document.querySelector<HTMLButtonElement>("#about-home-btn");
// cv button in about section

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

// add eventlistener to contact button

aboutSectionContactBtn.addEventListener("click", (e: MouseEvent) => {
  if ((e.target as HTMLElement).innerText === "CONTACT ME") {
    console.log("you want to contact me!");
    contactSectionEl.classList.remove("hide");
  }
});

// add eventlistener to home button

aboutSectionHomeBtn?.addEventListener("click", (e: MouseEvent) => {
  if ((e.target as HTMLElement).innerText === "Home") {
    aboutSectionEl.classList.add("hide");
  }
});
