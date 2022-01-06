function makeListeners(kind,key) {
  const audio = new Audio(`http://demon--hunter.com/loudtype/holypanda/${kind}/${key}.mp3`);
  document.addEventListener(kind, function(e) {
    audio.addEventListener('canplay', () =>{
      audio.play()
    })
  });
}

makeListeners('keypress','Space');
makeListeners('keypress','Enter');
makeListeners('keypress','Backspace');
makeListeners('keypress','GENERIC');

makeListeners('keyup','Space');
makeListeners('keyup','Enter');
makeListeners('keyup','Backspace');
makeListeners('keyup','GENERIC');
