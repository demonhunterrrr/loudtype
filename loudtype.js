function random(min, max) {
  return Math.round((max - min) * Math.random());
}
// Key detection template function
function keyDecTemplate(kind) {
  document.addEventListener(kind, function(e) {
    if (e.code != 'Space' && e.code != 'Enter' && e.code != 'Backspace') {
      const keysound = new Audio('GENERIC.mp3');
      keysound.play();
    }
    else {
      const keysound = new Audio(`${e.code}.mp3`);
      keysound.play();
    }
  });
}
// Adding keypress event listener
keyDecTemplate('keypress');
// Adding keyup event event listener
keyDecTemplate('keyup');
