/** Lógica para la página de contacto */

const names = document.getElementById("txtName");
const email = document.getElementById("txtEmail");
const subject = document.getElementById("txtSubject");
const message = document.getElementById("txtMessage");
const form = document.getElementById("form");
const modal_alert = document.getElementById("modal-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function validate() {
  // Alertas del formulario
  const alert_name = document.getElementById("alert-name");
  const alert_email = document.getElementById("alert-email");
  const alert_subject = document.getElementById("alert-subject");
  const alert_message = document.getElementById("alert-message");
  const alert_form = document.getElementById("alert-form");
  const alert_success = document.getElementById("alert-success");
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (names.value && email.value) {
    alert_success.style.display = "none";

    if (names.value.length < 6) {
      alert_name.style.display = "grid";
    } else if (!regex.test(email.value)) {
      alert_email.style.display = "grid";
    } else if (subject.value.length < 6) {
      alert_subject.style.display = "grid";
    } else if (message.value.length < 6) {
      alert_message.style.display = "grid";
    } else {
      hideAlerts();
      alert_success.style.display = "grid";
    }
  } else {
    alert_form.style.display = "grid";
  }
}

function hideAlerts() {
  const alerts = document.querySelectorAll(".alert-text");
  alerts.forEach((alert) => (alert.style.display = "none"));
}
