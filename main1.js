let boutonCouleur=document.getElementById("changerCouleur")
let div = document.querySelectorAll("div")
let body = document.querySelectorAll("body")
let header = document.querySelectorAll("header")


boutonCouleur.addEventListener('click',function(){
    div.forEach(div => div.classList.toggle('dark1'))
    body.forEach(body => body.classList.toggle('dark'))
    header.forEach(header => header.classList.toggle('dark'))
})