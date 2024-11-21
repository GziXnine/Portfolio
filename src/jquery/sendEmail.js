/** @format */

// !Initialize EmailJS with your user ID
emailjs.init("p3wVWaiD4N8cQo05V");

// !Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("button");
  const form = document.getElementById("contactForm");
  const sentMess = document.querySelector(".sent");

  if (form && btn) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      let btnVal = btn.innerText;
      btn.innerText = "Sending...";

      const serviceID = "service_ys8nks8"; //? Your EmailJS service ID
      const templateID = "template_e57p2pc"; //? Your EmailJS template ID

      // !Send the form data using EmailJS
      emailjs.sendForm(serviceID, templateID, this).then(
        () => {
          btn.innerText = btnVal;
          if (sentMess) {
            sentMess.classList.add("active"); // Show the success message
          }

          // *Clear the form fields
          form.reset();
        },
        (err) => {
          btn.innerText = btnVal;
          alert(JSON.stringify(err));
        }
      );
    });
  }
});
