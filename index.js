const form = document.querySelector("form");
const successMessage = document.querySelector(".success");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = {
    fname: formData.get("fname"),
    lname: formData.get("lname"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  successMessage.style.display = "block";
  console.log(data);
});
