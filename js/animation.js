const el = document.querySelector('#text_animation');
const text = 'Habilidades Sócio Emocionais';
const interval = 300;
const int = interval * text.length + 550

function showtext(el, text, interval) {

    const char = text.split("").reverse();

    const typer = setInterval(() => {

        if(!char.length){
            return clearInterval(typer)
        }
        const next = char.pop();
        el.innerHTML += next;
        
    }, interval)

    
    setInterval(() => {
    el.classList.add('active')
     }, int)
}
showtext(el, text, interval);

setInterval(() => {
   if (el.classList == 'active'){
    el.style.display = 'none';
    } 
}, int)
