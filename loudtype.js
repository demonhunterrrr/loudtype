function keyDecTemplate(kind) {
  document.addEventListener(kind, function(e) {
    if (e.code != 'Space' && e.code != 'Enter' && e.code != 'Backspace') {
      const keysound = new Audio(`http://demon--hunter.com/loudtype/holypanda/${kind}/GENERIC.mp3`);
        keysound.addEventListener('canplay', () =>{
          keysound.play();
        });
    }
    else {
      const keysound = new Audio(`http://demon--hunter.com/loudtype/holypanda/${kind}/${e.code}.mp3`);
      keysound.addEventListener('canplay', () =>{
        keysound.play();
      });
    }
  });
}
keyDecTemplate('keypress');
keyDecTemplate('keyup');
