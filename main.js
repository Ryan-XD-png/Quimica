const imagens= ["imgs/sistemas-agroflorestais.jpg","imgs/sistemas-agroflorestais22.jpeg","imgs/2021115_00_sistema_agroflorestal.jpg","imgs/agrofloresta.jpg","imgs/sistema-agroflorestal.jpg","imgs/mm.jpg","imgs/flore.png"];
let botaoMenos = document.getElementById('menosfoto');
let botaoMais = document.getElementById('maisfoto');
let imagemP = document.getElementById('fotoPrincipal');
let posi = 3;

botaoMenos.addEventListener('click',()=>{
    posi-=1;
    if(posi>=0){
        imagemP.src = imagens[posi];
    }else{
        posi=6;
        imagemP.src = imagens[posi]
    }
    return posi;
})

botaoMais.addEventListener('click',()=>{
    posi+=1;
    if(posi<=6){
        imagemP.src = imagens[posi];
    }else{
        posi=0;
        imagemP.src = imagens[posi]
    }
    return posi;
})

function fixedMenu(){

}
document.addEventListener('click', fixedMenu);