function myMove() {
    let id = null;
    const elem = document.getElementById("mover");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 100);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
        elem.style.left = 0 + 'px';
      } else {
        pos+=10;
        elem.style.left = pos + 'px';
      }
    }
  } 