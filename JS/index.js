let btn = document.getElementsByTagName("Button");
console.log(btn);
let But = document.getElementsByName("Bouton");
console.log(But);

let valeur = btn.textContent;


function displayNumber(){
    for (let i = 0; i < But.length; i++){
        if(but[i] == valeur ){
            this.textContent;
        }
    }
}

btn.addEventListener("click", displayNumber);

function add(a, b){
    console.log(a+b);
}