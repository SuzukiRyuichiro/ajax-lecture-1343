import Swal from "sweetalert2";

const signUp = () => {
  // get email and password user typed
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  // make a request to the API with those values
  const url = "https://reqres.in/api/register";

  const user = {
    email: email,
    password: password,
  };

  const requestOption = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  fetch(url, requestOption).then((response) => {
    if (response.status === 200) {
      Swal.fire({
        title: "Success",
        text: "You are connected",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Oups! Something went wrong",
        icon: "error",
      });
    }
  });
};

// get the form element
const form = document.querySelector("#form");
// add an event listener for submit
form.addEventListener("submit", (event) => {
  // when submit, call the sign up function
  event.preventDefault();
  signUp();
});
