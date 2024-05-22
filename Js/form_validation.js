// Validation form

const btnEnviar = document.querySelector(".btnForm");
const inputName = document.querySelector("#name");
const inputLastName = document.querySelector("#lastName");
const inputPhone = document.querySelector("#phone");
const inputQuantity = document.querySelector("#quantity");
const inputDate = document.querySelector("#date");
const inputEmail = document.querySelector("#email");
const inputIssue = document.querySelector("#issue");
const inputComment = document.querySelector("#comment");


const setErrors = (message, field, isError = true) => {
  if (isError) {
    field.classList.add("invalid");
    field.nextElementSibling.classList.add("error");
    field.nextElementSibling.innerText = message;
  } else {
    field.classList.remove("invalid");
    field.nextElementSibling.classList.remove("error");
    field.nextElementSibling.innerText = "";
  }
}

const validateEmptyField = (message, e) => {
  const field = e.target;
  const fieldValue = e.target.value;
  if (fieldValue.trim().length === 0) {
    setErrors(message, field);
  } else {
    setErrors("", field, false);
  }
}

const validateEmailFormat = e => {
  const field = e.target;
  const fieldValue = e.target.value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(fieldValue)) {
    setErrors("Por favor, ingrese un correo electrónico válido", field);
  } else {
    setErrors("", field, false);
  }
}

inputEmail.addEventListener("input", validateEmailFormat);

inputName.addEventListener("blur", (e) => validateEmptyField("Complete tu nombre", e));
inputLastName.addEventListener("blur", (e) => validateEmptyField("Complete tu apellido", e));
inputPhone.addEventListener("blur", (e) => validateEmptyField("Complete tu número de contacto", e));
inputQuantity.addEventListener("blur", (e) => validateEmptyField("Complete la cantidad de niños", e));
inputDate.addEventListener("blur", (e) => validateEmptyField("Complete la fecha del evento", e));
inputEmail.addEventListener("blur", (e) => validateEmptyField("Complete con tu correo", e));
inputIssue.addEventListener("blur", (e) => validateEmptyField("complete el asunto", e));
inputComment.addEventListener("blur", (e) => validateEmptyField("Complete el motivo de contacto", e));

const form = document.getElementById("form");
const formError = document.querySelector(".formError");
const formSuccess = document.querySelector(".formSuccess");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (
    inputName.value.trim() === "" ||
    inputLastName.value.trim() === "" ||
    inputPhone.value.trim() === "" ||
    inputQuantity.value.trim() === "" ||
    inputDate.value.trim() === "" ||
    inputEmail.value.trim() === "" ||
    inputIssue.value.trim() === "" ||
    inputComment.value.trim() === ""
  ) {
    formError.innerText = "Por favor, complete todos los campos antes de enviar el formulario.";
    return;
  }


  formSuccess.innerText = "El formulario se envió con éxito.";
  setTimeout(() => {
    formSuccess.innerText = "";
  }, 40000);
  this.submit();
});
