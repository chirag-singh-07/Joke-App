const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single";


const getJoke = () => {
  jokeContainer.classList.remove("fade");
  fetch(url)
  .then(data => data.json())
  .then(item => {
    // console.log(item);
    jokeContainer.textContent = `${item.joke}`;
    jokeContainer.classList.add("fade");
  })
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  getJoke();
})

