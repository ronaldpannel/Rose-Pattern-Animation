/**@type{HTMLCanvasElement} */

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 400;

 let k = 0;
 let hue = 0;

  function drawRose(){
   
    k+= 0.005
    hue++
    
    for(let a = 0; a < Math.PI * 2 * 5; a += 0.005){
    let r = Math.cos(k * a) * 200
    let x = r * Math.cos(a)
    let y = r * Math.sin(a)
    ctx.beginPath()
    ctx.fillStyle = `hsl(${hue}, 50%, 50%)`
    ctx.arc(x, y, 2, 0, Math.PI * 2)
    ctx.fill()
    }
  }



function animate() {
 
  ctx.clearRect(0, 0, canvas.width, canvas.height);
   ctx.save();
   ctx.translate(canvas.width / 2, canvas.height / 2);
  drawRose();
  ctx.restore()
  requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize", () => {
  canvas.width = canvas.width;
  canvas.height = canvas.height;
});
