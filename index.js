const ingressos = []

function addRedBorder(id){
    element = document.querySelector("#" + id);
    element.style.border = "5px solid red"
   
}

function highlightCard(selector){
    let element = document.querySelector(selector);
    element.classList.toggle("card-highlight");
}
function checkKeyboardCode(){
    document.addEventListener('keydown',(event)=>{
        let name = event.key;
        let code = event.code;

        alert(`Tecla pressionada ${name} \r\n Key code value: ${code}`);
    }, false);
}

function addKeyboardEventListeners(){
    document.addEventListener('keydown',(event)=>{
        var ingresso1 = document.getElementById('card1');
        var ingresso2 = document.getElementById('card2');
        var ingresso3 = document.getElementById('card3');
        var ingresso4 = document.getElementById('card4');
        var code = event.code;

        if( code == `Digit1`){
            ingresso1.classList.toggle('card-highlight');
            ingresso2.classList.remove('card-highlight');
            ingresso3.classList.remove('card-highlight');
            ingresso4.classList.remove('card-highlight');
        }
        if( code == `Digit2`){
            ingresso1.classList.remove('card-highlight');
            ingresso2.classList.toggle('card-highlight');
            ingresso3.classList.remove('card-highlight');
            ingresso4.classList.remove('card-highlight');
        }
        if( code == `Digit3`){
            ingresso1.classList.remove('card-highlight');
            ingresso2.classList.remove('card-highlight');
            ingresso3.classList.toggle('card-highlight');
            ingresso4.classList.remove('card-highlight');
        }
        if( code == `Digit4`){
            ingresso1.classList.remove('card-highlight');
            ingresso2.classList.remove('card-highlight');
            ingresso3.classList.remove('card-highlight');
            ingresso4.classList.toggle('card-highlight');
        }
    }, false);
}
function selectCard(selector){
    var element = document.querySelector(selector)
    element.classList.toggle('card-selected')
    if (ingressos.includes(selector)) ingressos.pop(selector);
    else ingressos.push(selector)
}
function showSelectedCard(){
    if (ingressos.length > 0) alert ("Ingressos selecionados:" + ingressos)
}

addKeyboardEventListeners()