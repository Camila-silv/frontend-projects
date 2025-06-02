const postsContainer = document.getElementById("posts-container");

const publicationCard = (textPost, datePost) => {
  const cardPost = `<div class="card bg-body-tertiary border border-0">
            <div class="card-body">
              <div class="d-flex gap-3 align-items-center mb-4">
                <img
                  src="https://unsplash.it/48"
                  alt=""
                  class="rounded-circle"
                />
                <div>
                  <h3 class="fs-5 mb-1 fw-semibold">Jane Smith</h3>
                  <span class="fs-6">${datePost}</span>
                </div>
              </div>
              <p class="my-4">
                ${textPost}
              </p>

              <hr />

              <div class="d-flex justify-content-around">
                <button
                  type="button"
                  class="btn btn-secondary bg-transparent border border-0"
                >
                  <i class="bi bi-hand-thumbs-up"></i> Curtir
                </button>
                <button
                  type="button"
                  class="btn btn-secondary bg-transparent border border-0"
                >
                  <i class="bi bi-chat"></i> Comentar
                </button>
                <button
                  type="button"
                  class="btn btn-secondary bg-transparent border border-0"
                >
                  <i class="bi bi-share"></i> Compartilhar
                </button>
              </div>
            </div>
          </div>`;

  postsContainer.innerHTML += cardPost;
};

export default publicationCard;
