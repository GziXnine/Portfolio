/** @format */

// !Initialize EmailJS with your user ID
emailjs.init("p3wVWaiD4N8cQo05V");

// !Generate a random 5-digit number
function generateVerificationCode() {
  return Math.floor(10000 + Math.random() * 90000); // Ensures a 5-digit number
}

// !Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("button");
  const form = document.getElementById("contactForm");
  const sentMess = document.querySelector(".sent");
  const verificationCodeElement = document.getElementById("basic-addon1");

  // Generate and display the verification code
  let verificationCode = generateVerificationCode();
  verificationCodeElement.textContent = verificationCode;

  if (form && btn) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      // Get the user's entered verification code
      const verificationInput = document.getElementById("verification").value;

      // Validate the verification code
      if (verificationInput !== verificationCode.toString()) {
        alert("Verification code is incorrect.");
        return;
      }

      const serviceID = "service_sc7q2mg"; //? Your EmailJS service ID
      const templateID = "template_5fk5ua8"; //? Your EmailJS template ID

      // !Send the form data using EmailJS
      emailjs.sendForm(serviceID, templateID, this).then(
        () => {
          if (sentMess) {
            sentMess.classList.add("active"); // Show the success message
          }

          // *Clear the form fields
          form.reset();

          // *Generate a new verification code for the next submission
          verificationCode = generateVerificationCode();
          verificationCodeElement.textContent = verificationCode;
        },
        (err) => {
          alert(JSON.stringify(err));
        }
      );
    });
  }
});
