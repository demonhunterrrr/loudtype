function random(min,max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function makeListeners(kind) {
  const generic = [];
  const space = [];
  const enter = [];
  const backspace = [];

  for (let x = 0;x < 3;x++) {
    generic.push(new Audio(`http://demon--hunter.com/loudtype/cream/${kind}/GENERIC.mp3`));
    space.push(new Audio(`http://demon--hunter.com/loudtype/cream/${kind}/Space.mp3`));
    enter.push(new Audio(`http://demon--hunter.com/loudtype/cream/${kind}/Enter.mp3`));
    backspace.push(new Audio(`http://demon--hunter.com/loudtype/cream/${kind}/Backspace.mp3`));
  }
  document.addEventListener(kind, function(e) {
    if (e.code != 'Space' && e.code != 'Enter' && e.code !='Backspace') {
      generic[random(0,2)].play();
    }
    else {
      eval(e.code.toLowerCase())[random(0,2)].play();
    }
  });
}

makeListeners('keydown');
makeListeners('keyup');
