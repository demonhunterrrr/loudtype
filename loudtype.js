function random(min, max) {
  return Math.round((max - min) * Math.random());
}

// Adding keypress event listener
document.addEventListener("keypress", function(e) {
  const keysound = new Audio(`${random(0,4)}.mp3`);
  keysound.play();
});
