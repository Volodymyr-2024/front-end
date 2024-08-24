const container = document.querySelector(".container");
const containerItem = document.querySelector(".container_item");
const refreshBtn = document.querySelector(".refresh_btn");
const urls = {
  catApi:
    "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1%22,%20requestOptions",
  kanyeWestApi: "https://api.kanye.rest",
};

refreshBtn.addEventListener("click", () => {
  location.reload();
});
const receiveCat = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Ошибка при запросе");
    }
    const data = await res.json();
    const image = document.createElement("img");
    image.setAttribute("src", data[0].url);
    containerItem.insertAdjacentElement("afterbegin", image);

    // containerItem.appendChild(image)

    console.log(data);
  } catch (error) {
    console.log("Ошибка");
  }
};
const receiveKanye = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Ошибка");
    }
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("Ошибка", error);
  }
};
receiveCat(urls.catApi);
receiveKanye(urls.kanyeWestApi);
