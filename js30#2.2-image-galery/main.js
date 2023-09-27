const API_KEY = "8c8e1a50-6322-4135-8875-5d40a5420d86";
const API_URL = "https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo";
const API_URL_SEARCH =
  "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";

getImages(API_URL);

async function getImages(url) {
  const resp = await fetch(url);
  const respData = await resp.json();
  showImages(respData);

}

function showImages(data) {
  const imagesEl = document.querySelector(".images");

  // Очищаем предыдущие фильмы
  /*document.querySelector(".images").innerHTML = "";*/
 //results  это элементы массива date
  data.results.forEach((image) => {
    const imagEl = document.createElement("div");
    imagEl.classList.add("image");
    imagEl.innerHTML = `
        <img src="${image.urls.regular}" class="img" 
        alt="${image.alt_description}"
        >
        `;
    imagesEl.appendChild(imagEl);
  });
}

/*const form = document.querySelector("form");
const search = document.querySelector(".header__search");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const apiSearchUrl = `${API_URL_SEARCH}${search.value}`;
  if (search.value) {
    getMovies(apiSearchUrl);

    search.value = "";
  }
});*/