let spans = document.querySelectorAll("span");
let img = document.querySelectorAll("img");
let arrows = document.querySelector("#arrows");
let counter = 0;
move = (x) => {
  let time = Number(x.id) * 1700;
  let time2 = 14;

  setTimeout(() => {
    x.style.display = "block";
    let bottom = -10;
    let size = 0.9;

    measures();

    function measures() {
      bottom += 0.1;
      size -= 0.0007;
      let opacity = 1;
      if (bottom <= 100) {
        setTimeout(() => {
          measures();
          x.style.bottom = bottom + "%";
          x.style.transform = `scale(${size})`;
          time2 += 0.03;

          if (bottom >= 80) {
            console.log("blig");
            opacity -= 0.15;
            x.style.color = `rgba(0, 0, 0, ${opacity})`;
          }
        }, time2);
      } else {
        x.style.display = "none";
        counter++;
        if (counter > 1) {
          img.forEach((e) => {
            e.style.display = "inline-block";
          });
        }
      }
    }
  }, time);
};

for (let i = 0; i < spans.length; i++) {
  spans[i].id = i;
}
spans.forEach((e) => {
  move(e);
});
document.body.addEventListener("click", () => {
  img.forEach((e) => {
    e.style.display = "inline-block";
  });
});

/*zmizení textu na konci obrazovky*/
/*plynulost přechodu*/
