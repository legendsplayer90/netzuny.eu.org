console.log("NetZuny tiene diarrea... ¿Eres un bot o un dev?");

// Hacer que el banner cambie de color aleatoriamente al hacer click
document.querySelector('marquee').onclick = function() {
    this.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
};