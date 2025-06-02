// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import { pushPost, getPosts, publicationCard } from "./index.js";

const modalFocus = document.querySelector("[data-modal]");
const inputPost = document.querySelector("[data-post]");

modalFocus.addEventListener("click", () => {
  setTimeout(() => {
    inputPost.focus();
  }, 500);
});

const BtnPublishPost = document.getElementById("publish-post");
const months = [
  "Jan",
  "Fev",
  "Març",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];
const modal = new bootstrap.Modal(document.getElementById("modal"));

BtnPublishPost.addEventListener("click", () => {
  //acao de publicar aqui

  const message = document.getElementById("message");
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();
  const datePublish = `${day}/${months[month]}/${year}`;

  const post = {
    post: message.value,
    date: datePublish,
  };

  pushPost(post);

  message.value = "";
  modal.hide();

  publicationCard(post["post"], post["date"]);
});

getPosts();
