const form = document.querySelector("#search-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  //   const input = document.querySelector("input");
  //   const value = input.value;
  // cara lain dengan langsng
  const keyword = form.elements.query.value;
  //   untuk merefresh pencarian
  document.querySelectorAll("img").forEach((image) => image.remove());
  try {
    const config = {
      params: { q: keyword },
    };
    const res = await axios.get(`https://api.tvmaze.com/search/shows/`, config);
    form.elements.query.value = "";
    getImages(res.data);
  } catch (error) {
    return error;
  }
});

const getImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const image = document.createElement("img");
      image.src = result.show.image.medium;
      document.body.append(image);
    }
  }
};
