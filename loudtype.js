function random(min, max) {
  return Math.round((max - min) * Math.random());
}
function keyDecTemplate(kind) {
  document.addEventListener(kind, function(e) {
    if (e.code != 'Space' && e.code != 'Enter' && e.code != 'Backspace') {
      const keysound = new Audio(`https://github.com/demonhunterrrr/loudtype/tree/main/holypanda/${kind}/GENERIC.mp3`);
      keysound.play();
    }
    else {
      const keysound = new Audio(`https://github.com/demonhunterrrr/loudtype/tree/main/holypanda/${kind}/${e.code}.mp3`);
      keysound.play();
    }
  });
}
keyDecTemplate('keypress');
keyDecTemplate('keyup');
