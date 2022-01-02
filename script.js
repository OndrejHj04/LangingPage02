let spans = document.querySelectorAll("span");

move = (x) => {
  let time = Number(x.id) * 1400;

  setTimeout(() => {
      x.style.display = "block"
    let bottom = 0;
    let size = 60;
    measures();

    function measures() {
      bottom += 0.1;
      size -= 0.05;
      if (bottom < 100) {
        setTimeout(() => {
          measures();
          x.style.bottom = bottom + "%";
          x.style.fontSize = size + "px";
        }, 20);
      }
    }
  }, time);
};

for (let i = 0; i < spans.length; i++) {
  spans[i].id = i;
  spans[i].textContent = "Lorem ipsum dolor sit amet consectetur adipisicing eli"
}
spans.forEach((e) => {
  move(e);
});
