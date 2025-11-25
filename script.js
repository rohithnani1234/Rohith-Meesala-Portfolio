// Typing effect for role
const roles = ["Backend Developer","Full Stack Developer","AI Enthusiast","Power BI Analyst"]
let ridx=0, c=0, forward=true
function typeLoop(){
  const t = roles[ridx]
  const h1 = document.querySelector('.intro h1')
  if(!h1) return
  if(forward){
    c++
    if(c<=t.length){
      h1.innerHTML = `Hi, I'm <span class="name-highlight">Meesala Rohith</span> <span class="typewriter"> | ${t.slice(0,c)}</span>`
    } else { forward=false; setTimeout(typeLoop,900); return }
  } else {
    c--
    if(c>=0){
      h1.innerHTML = `Hi, I'm <span class="name-highlight">Meesala Rohith</span> <span class="typewriter"> | ${t.slice(0,c)}</span>`
    } else { forward=true; ridx=(ridx+1)%roles.length; setTimeout(typeLoop,300); return }
  }
  setTimeout(typeLoop,90)
}
document.addEventListener('DOMContentLoaded', typeLoop)

// Buttons
document.getElementById('downloadBtn') && document.getElementById('downloadBtn').addEventListener('click',()=>{
  window.open('/mnt/data/Rohith.pdf','_blank')
})

// Mobile nav toggle
const navBtn = document.getElementById('navToggle')
const mainNav = document.getElementById('mainNav')
navBtn && navBtn.addEventListener('click',()=>{
  mainNav.classList.toggle('show')
})
