// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

const modalFocus = document.querySelector("[data-modal]");
const inputPost = document.querySelector("[data-post]");

modalFocus.addEventListener("click", () => {
  setTimeout(() => {
    inputPost.focus();
  }, 500);
});



