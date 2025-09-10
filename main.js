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


let menu = document.getElementById('menuLateral');
let header = document.getElementById('headerMenu');
let botaoMenu = document.querySelector('.botaoMenu');  
let aberto = false;
let links = document.querySelectorAll('.aLateral');
let ulH = document.getElementById('lateralMenu');
let sair = document.getElementById('sair');
let icone = document.getElementById('icone');
let fundo = document.getElementById('fundo');
const textMenu = ["Introdução","Tecnologias","Automação"];

function saida() {
    menu.style.display = 'none';
    header.style.display = 'none';
    botaoMenu.style.display = 'block';
    aberto = false;
    fundo.style.display = 'none';    
    
}

if(window.innerWidth <= 480){
    
    header.style.display = 'none';
    botaoMenu.addEventListener('click',()=>{
        
        links.forEach((link, index) => {
        link.textContent = textMenu[index];
        link.style.color = 'white';
        link.style.fontSize = '25px';
        link.style.textDecoration ='none';
        link.style.fontWeight = 'bold';
        link.style.listStyle = 'none';
        link.style.margin = '0';
        link.style.padding = '0';
        link.style.cursor = 'pointer';
        link.addEventListener('click',saida);
        },);
        fundo.style.position = 'fixed';
        fundo.style.display = 'block';
        fundo.style.width = '100vw';
        fundo.style.height = '100vh';   
        fundo.style.top = '0';
        fundo.style.left = '0';
        fundo.style.backgroundColor = 'rgba(0, 0, 0, 0.41)';
        fundo.style.zIndex = '50';
        sair.style.backgroundImage = "url('imgs/sair.svg')";
        sair.style.width = '24px';
        sair.style.height = '24px';
        sair.style.position = 'absolute';
        sair.style.top = '20px';
        sair.style.left = '10px';
        sair.style.cursor = 'pointer';
        ulH.style.display = 'flex';
        ulH.style.flexDirection = 'column';
        ulH.style.alignItems = 'center';
        ulH.style.height = '400px' ;
        ulH.style.gap = '20px';
        menu.style.display = 'flex';
        menu.style.flexDirection = 'column';
        menu.style.alignItems = 'center';
        menu.style.paddingTop = '50px';
        menu.style.gap = '20px';    
        menu.style.position = 'absolute';
        menu.style.top = '1rem';
        menu.style.right = '0';
        menu.style.borderRadius = '10px 0 0 10px';
        menu.style.backgroundColor = '#004225';
        menu.style.width = '200px';
        menu.style.height = '250px';
        menu.style.zIndex = '100';
    });

}
sair.addEventListener('click',saida);