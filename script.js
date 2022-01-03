let spans = document.querySelectorAll("span");
let img = document.querySelectorAll("img")
let counter = 0;
move = (x) => {
  let time = Number(x.id) * 1700; 
  let time2 = 30
  setTimeout(() => {
      x.style.display = "block"
    let bottom = -10;
    let size = 0.9;

    measures();

    function measures() {
      bottom += 0.1;
      size -= 0.0006;
      if (bottom <= 100) {
        setTimeout(() => {
          measures()
          x.style.bottom = bottom + "%"
          x.style.transform = `scale(${size})`
        }, time2);
      }else{
        x.style.display = "none"
        counter++
        if(counter > 1){
          img.forEach((e)=>{
            e.style.display = "inline-block"
          })
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
document.body.addEventListener("click", ()=>{
  img.forEach((e)=>{
    e.style.display = "inline-block"
  })
})
img.forEach((e)=>{
  e.addEventListener("click", ()=>{
    e.style.background = "red"
  })
})



