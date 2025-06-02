import {publicationCard} from "./index";

const getPosts = async () => {
  const response = await fetch("http://localhost:3000/posts").then((data) =>
    data.json()
  );

  response.forEach((post) => {
    publicationCard(post["post"], post["date"]);
  });
};

export default getPosts;
