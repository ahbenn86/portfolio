const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar-link');

window.addEventListener("scroll", ()=>{
    mainFn();
});

const mainFn = () => {
    if (window.pageYOffset >= navbarOffsetTop){
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }

    sections.forEach((section, i) => {
        if(window.pageYOffset >= section.offsetTop -10){
            navbarLinks.forEach((navbarLink) => {
                navbarLink.classList.remove("change");
            });
            navbarLinks[i].classList.add("change");
        }
    });
}

mainFn();

    function sendMail(params) {
        let tempParams = {
            from_name: document.getElementById("name").value,
            to_name: document.getElementById("toName").value,
            message: document.getElementById("msg").value, 
        };

      emailjs.sendForm('service_buul3eq', 'template_x13eepf', tempParams)
        .then(function(res) {
          console.log('SUCCESS!');
        }, function (error) {
          console.log('FAILED...', error);
        });
    }
  

// window.addEventListener('resize', () => {
//     window.location.reload();
// })