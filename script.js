document.querySelectorAll(".circular-progress").forEach((el) => {
  const value = parseInt(el.getAttribute("data-progress"));
  let color = "#0d6efd";

  if (value >= 75) {
    color = "#28a745";  
  } else if (value >= 50) {
    color = "#fd7e14";  
  } else {
    color = "#dc3545";  
  }

  el.style.setProperty("--progress", value);
  el.style.setProperty("--progress-color", color);
});

function sentmail() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  emailjs.send("service_pxalay6", "template_qgwt0a2", parms).then(() => {
    alert("Your message has been sent successfully!");

  })
    .catch((error) => {
      console.error("Error sending email:", error);
      alert("There was an error sending your message. Please try again later.");
    });
}
