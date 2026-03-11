let simbolos = ["🍒","🍀","💎","⭐","7️⃣"]

function girar(){

let r1 = document.getElementById("r1")
let r2 = document.getElementById("r2")
let r3 = document.getElementById("r3")

let i = 0

let animacao = setInterval(()=>{

r1.innerText = simbolos[Math.floor(Math.random()*simbolos.length)]
r2.innerText = simbolos[Math.floor(Math.random()*simbolos.length)]
r3.innerText = simbolos[Math.floor(Math.random()*simbolos.length)]

i++

if(i > 15){

clearInterval(animacao)

if(r1.innerText === r2.innerText && r2.innerText === r3.innerText){
document.getElementById("resultado").innerText = "🎉 VOCÊ GANHOU!"
}else{
document.getElementById("resultado").innerText = "Tente novamente"
}

}

},100)

}