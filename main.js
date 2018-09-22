// document refers to webpage
// document.body.style = "background-color: coral; font-family: 'Comic Sans MS', cursive, sans-serif;"
let imgs = document.getElementsByTagName("img");

Array.from(imgs).forEach(function(img) {
  let width = img.clientWidth
  let height = img.clientHeight
  img.src = `http://placekitten.com/${width}/${height}`;
});
