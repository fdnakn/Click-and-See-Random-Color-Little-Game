const divs = document.querySelectorAll("div");
console.log(divs);

function randomrenk(){
    const x = Math.floor(Math.random()*255);
    const xx = Math.floor(Math.random()*255);
    const xxx = Math.floor(Math.random()*255);
    return `rgb(${x},${xxx},${xxx})`;
    
}

function renkcalis(){
    this.style.backgroundColor = randomrenk();
}

  divs.forEach(div =>{
      div.addEventListener("click",renkcalis)
  })