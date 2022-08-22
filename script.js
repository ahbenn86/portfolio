const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");
const submitButton = document.getElementById("submit-button");
const form = document.getElementById('form');
const inputs = document.querySelectorAll('input');
const message = document.querySelector('textarea');

window.addEventListener("scroll", () => {
  mainFn();
});

const mainFn = () => {
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 10) {
      navbarLinks.forEach((navbarLink) => {
        navbarLink.classList.remove("change");
      });
      navbarLinks[i].classList.add("change");
    }
  });
};

mainFn();

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  const serviceID = "default_service";
  const templateID = "template_x13eepf";

  emailjs.sendForm(serviceID, templateID, form).then(
    () => {
      submitButton.value = "Send Email";
      alert("Message sent!");
    },
    (err) => {
      submitButton.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );

  inputs.forEach(input => input.value = '');
  message.value = '';
});

// window.addEventListener('resize', () => {
//     window.location.reload();
// })
