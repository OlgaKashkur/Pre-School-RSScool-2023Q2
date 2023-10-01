
const API_URL = "https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo";
const API_URL_SEARCH ="https://api.unsplash.com/search/photos?query=";

const api_end_url = "&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo"

getImages(API_URL);

async function getImages(url) {
  const resp = await fetch(url);
  const respData = await resp.json();
  showImages(respData);
}

function showImages(data) {
  const imagesEl = document.querySelector(".images");

  // Очищаем предыдущие img после каждого запроса
  document.querySelector(".images").innerHTML = "";
 //results  это элементы массива 
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

const form = document.querySelector("form");
const searchWorld = document.querySelector(".search");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // что бы не было перезагрузки страницы при нажатии на поиск

  const apiSearch = `${API_URL_SEARCH}${searchWorld.value}${api_end_url}`;
  if (searchWorld.value) {
    getImages(apiSearch);

    searchWorld.value = "";// Очищаем предыдущий запрос
  }
});