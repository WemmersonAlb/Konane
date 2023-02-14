/*
IFPE
Aluno: Wemmerson Felipi Albuquerque de Lima
Disciplina: Desenvolvimento WEB 1
Prova da Segunda Unidade
Data de entrega: 08/02/2023
*/
const dimensoes = document.querySelector('#dimensoes');
const restart = document.querySelector('#restart');
const alternador = document.querySelector('#img');


let jogador = 1;
let corAliada = 'azul';
let corInimiga = 'vermelha';
let linhaC = [], casaC = [];
let indiceClick1=[];
let tema = 'claro'

alternador.addEventListener('click', ()=>{
    const imagem = document.querySelector("#img");
    if(tema == 'claro'){
        document.body.style= 'color: white; background-color:rgb(31, 30, 30)';
        imagem.setAttribute('src', './sol.png');
        trocadorDeCores();        
        tema = 'escuro';
    }else{
        document.body.style= 'color: black;background-color: white';
        imagem.setAttribute('src', './lua.png');        
        trocadorDeCores();        
        tema='claro';
    }
});
function trocadorDeCores(){
    const largura = parseInt(document.querySelector('#dimensoes').value);
    for(let i = 0; i<largura;i++){
        for(let j = 0; j<largura;j++){
            const casa = document.querySelector(`#casa${i}-${j}`);
            const peca = document.querySelector(`#casa${i}-${j}>div`);
            if(tema == 'claro'){
                if(casa.classList.contains("white")){
                    casa.setAttribute('class', 'casa black');
                }
                if(casa.classList.contains("red")){
                    casa.setAttribute('class', 'casa purple');
                }
                if(casa.classList.contains("blue")){
                    casa.setAttribute('class', 'casa green');
                }
                if(peca.classList.contains("branco")){
                    peca.setAttribute('class', 'peca preto');
                }
                if(peca.classList.contains("vermelha")){
                    peca.setAttribute('class', 'peca roxa');
                }
                if(peca.classList.contains("azul")){
                    peca.setAttribute('class', 'peca verde');
                }
            }else{
                if(casa.classList.contains("black")){
                    casa.setAttribute('class', 'casa white');
                }
                if(casa.classList.contains("purple")){
                    casa.setAttribute('class', 'casa red');
                }
                if(casa.classList.contains("green")){
                    casa.setAttribute('class', 'casa blue');
                }
                if(peca.classList.contains("preto")){
                    peca.setAttribute('class', 'peca branco');
                }
                if(peca.classList.contains("roxa")){
                    peca.setAttribute('class', 'peca vermelha');
                }
                if(peca.classList.contains("verde")){
                    peca.setAttribute('class', 'peca azul');
                }  
            }
        }
    }
}


restart.addEventListener('click', ()=>{
    excluirCasas();
    const largura = parseInt(document.querySelector('#dimensoes').value);
    if(largura>=4){
        construirCasas(largura);
    }else{
        construirCasas(4);
        document.querySelector('#dimensoes').setAttribute('value', 4);
    }
    document.querySelector('#dimensoes').value = `${largura}`;
    jogador = 1;
    deQuemEAVez(jogador, 0);
})



window.addEventListener('load', () =>{
    construirCasas(6);
    const mensagem = document.querySelector('#mensagem>p');
    if(tema == 'claro'){
        mensagem.innerHTML = "É a vez da cor Azul!";
    }else{
        mensagem.innerHTML = "É a vez da cor Verde!";
    }
});

dimensoes.addEventListener('change', () =>{
    excluirCasas();
    //jogador = 1;
    jogador = 0;
    deQuemEAVez(jogador, 0);
    const largura = parseInt(document.querySelector('#dimensoes').value);

    if(largura>=4){
        construirCasas(largura);
    }else{
        construirCasas(4);
        document.querySelector('#dimensoes').setAttribute('value', 4);
    }
    const mensagem = document.querySelector('#mensagem>p');
    mensagem.innerHTML = "É a vez da cor Verde!";
});



function construirCasas(n){
    const tabuleiro = document.querySelector('#tabuleiro');
    const conglomerado = document.createElement('div');
    conglomerado.setAttribute('id', 'conglomerado')
    for(i = 0;i<n;i++){
        let linha = document.createElement('div');
        linha.setAttribute('class', 'linhas')
        if(i%2==0){
            for(j = 0;j<n;j++){
                let casa = document.createElement('div');
                let peca = document.createElement('div');
                if(j%2==0){
                    if((i==parseInt(n/2)&&j==parseInt(n/2-1))||(i==parseInt(n/2)&&j==parseInt(n/2))){
                        if(tema == 'claro'){
                            casa.setAttribute('class', `casa white`);
                            peca.setAttribute('class', 'peca branco');
                        }else{
                            casa.setAttribute('class', `casa black`);
                            peca.setAttribute('class', 'peca preto');
                        }   
                        casa.appendChild(peca);
                        casaC.push(0);
                    }else{
                        if(tema == 'claro'){
                            casa.setAttribute('class', `casa red`);
                            peca.setAttribute('class', 'peca vermelha');
                        }else{
                            casa.setAttribute('class', `casa purple`);
                            peca.setAttribute('class', 'peca roxa');
                        }
                        casa.appendChild(peca);
                        casaC.push(2);
                    }
                }else{
                    if((i==parseInt(n/2)&&j==parseInt(n/2-1))||(i==parseInt(n/2)&&j==parseInt(n/2))){
                        if(tema == 'claro'){
                            casa.setAttribute('class', `casa white`);
                            peca.setAttribute('class', 'peca branco');
                        }else{
                            casa.setAttribute('class', `casa black`);
                            peca.setAttribute('class', 'peca preto');
                        }
                        casa.appendChild(peca);
                        casaC.push(0);
                    }else{
                        if(tema == 'claro'){
                            casa.setAttribute('class', `casa blue`);
                            peca.setAttribute('class', 'peca azul');
                        }else{
                            casa.setAttribute('class', `casa green`);
                            peca.setAttribute('class', 'peca verde');
                        }
                        casa.appendChild(peca);
                        casaC.push(1);

                    }
                }
                casa.setAttribute('id', `casa${i}-${j}`);
                linha.appendChild(casa);

            }
        }else{
            for(j = 0;j<n;j++){
                let casa = document.createElement('div');
                let peca = document.createElement('div');
                if(j%2==0){
                    if((i==parseInt(n/2)&&j==parseInt(n/2-1))||(i==parseInt(n/2)&&j==parseInt(n/2))){
                        if(tema == 'claro'){
                            casa.setAttribute('class', `casa white`);
                            peca.setAttribute('class', 'peca branco');
                        }else{
                            casa.setAttribute('class', `casa black`);
                            peca.setAttribute('class', 'peca preto');
                        }
                        casa.appendChild(peca);
                        casaC.push(0);
                    }else{
                        if(tema == 'claro'){
                            casa.setAttribute('class', `casa blue`);
                            peca.setAttribute('class', 'peca azul');
                        }else{
                            casa.setAttribute('class', `casa green`);
                            peca.setAttribute('class', 'peca verde');
                        }
                        casa.appendChild(peca);
                        casaC.push(1);
                    }
                }else{
                    if((i==parseInt(n/2)&&j==parseInt(n/2-1))||(i==parseInt(n/2)&&j==parseInt(n/2))){
                        if(tema == 'claro'){
                            casa.setAttribute('class', `casa white`);
                            peca.setAttribute('class', 'peca branco');
                        }else{
                            casa.setAttribute('class', `casa black`);
                            peca.setAttribute('class', 'peca preto');
                        }   
                        casa.appendChild(peca);
                        casaC.push(0);
                    }else{
                        if(tema == 'claro'){
                            casa.setAttribute('class', `casa red`);
                            peca.setAttribute('class', 'peca vermelha');
                        }else{
                            casa.setAttribute('class', `casa purple`);
                            peca.setAttribute('class', 'peca roxa');
                        }
                        casa.appendChild(peca);
                        casaC.push(2);

                    }
                }
                casa.setAttribute('id', `casa${i}-${j}`);
                linha.appendChild(casa);
            }
        }
        conglomerado.appendChild(linha);
        linhaC.push(casaC);
        casaC = [];

    }

    tabuleiro.appendChild(conglomerado);
    console.log(linhaC.length);
    doisCliques();
}

function excluirCasas(){
    const tabuleiro = document.querySelector('#tabuleiro');
    const conglomerado = document.querySelector('#conglomerado');
    tabuleiro.removeChild(conglomerado);
    casasOcupadas = [];
    linhaC= [];
    casaC=[];
}
function deQuemEAVez(n, m){
    const mensagem = document.querySelector('#mensagem>p');
    if(n === 1){
        if(tema == 'claro'){
            mensagem.innerHTML = "É a vez da cor Vermelha!";
            mensagem.style.color='black;';
            
        }else{
            mensagem.innerHTML = "É a vez da cor Roxa!";
            mensagem.style.color='white;';
        }
        if(m===1){
            corAliada = 'vermelha';
            corInimiga = 'azul';
            jogador = 0;            
        }
    }else{
        if(tema == 'claro'){
            mensagem.innerHTML = "É a vez da cor Azul!";
            mensagem.style.color='black;';
            
        }else{
            mensagem.innerHTML = "É a vez da cor Verde!";
            mensagem.style.color='white;';
        }
        if(m===1){
            corAliada = 'azul';
            corInimiga = 'vermelha';
            jogador = 1;
        }
    }
}

function getID(id){
    let iMatriz = id.slice(id.indexOf("a",2) + 1, id.indexOf("-"));
    let jMatriz = id.slice(id.indexOf("-") + 1);
    let indice = [iMatriz, jMatriz];
    return indice;
}
function setID(indice){
    return document.getElementById(`casa${indice[0]}-${indice[1]}`);
}



function doisCliques(){
    let a=false;
    const largura = parseInt(document.querySelector("#dimensoes").value);
    for(i = 0;i<largura;i++){
        for(j = 0; j<largura; j++){
            const casa = document.querySelector(`#casa${i}-${j}`);

                casa.addEventListener('click', (event)=>{
                    if(a==false){
                        let casaAssist = casa.getAttribute('id');
                        let indiceOrigem = getID(casaAssist);
                        let a0 = indiceOrigem[0];
                        let b0 = indiceOrigem[1];
                        casa.style = 'background-color: rgba(225,48 , 34, 0.7)'
                        primeiroClick(a0, b0);
                        a=true;
                    }else if(a==true){
                        let casaAssist = casa.getAttribute('id');
                        let indiceOrigem = getID(casaAssist);
                        let a0 = indiceOrigem[0];
                        let b0 = indiceOrigem[1];
                        segundoClick(a0, b0);
                        a=false;
                    }
                });
        }
    }

}
function primeiroClick(i, j){
    indiceClick1 = [i, j];
    console.log('Primeiro Click'+indiceClick1);
}
function segundoClick(x, y){
    const casa = setID(indiceClick1);
    casa.style = 'background-color: rgba(225, 48, 34, 0)';
    jogadaValida(indiceClick1[0], indiceClick1[1], x, y);
    indiceClick1 = [];
    console.log('Segundo Click'+x+y)
}


function clicaArrasta(){
    const largura = parseInt(document.querySelector("#dimensoes").value);
    for(i = 0;i<largura;i++){
        for(j = 0; j<largura; j++){
            const casa = document.querySelector(`#casa${i}-${j}`);
            casa.addEventListener('ondrag', event=>{
                tatata.addEventListener('drop', event=>{
                    let indice = getID(event.target.id)
                    jogadaValida(this.indice);
                });
            })
        }
    }
}


function jogadaValida(i, j, x, y){
    console.log('entrou na funcao');
    if( i==x && j<y ){
        abstracaoJogadaValida1(i, j, x, y);
    }
    if( i==x && j>y ){
        abstracaoJogadaValida2(i, j , x, y);
    }
    if( i<x && j==y){
        abstracaoJogadaValida3(i, j, x, y);
    }
    if( i>x && j==y){
        abstracaoJogadaValida4(i,j,x, y);
    }
    console.log(linhaC)
}
function abstracaoJogadaValida1(a,b,c,d){

    let c1, c2, c3;
    (d-b)%2!=0 ? c1 = 0 : c1 = 1;

    for(let m = 1; m<=(d-b); m = m+2){
        let forLinha= parseInt(a);
        let forColuna = parseInt(m)+parseInt(b);
        if(corInimiga == "vermelha"){
            if(linhaC[forLinha][forColuna]==2){
                c2 = 1;
            }else{
                break;
            }
        }else{
            if(linhaC[forLinha][forColuna]==1){
                c2 = 1;
            }else{
                break;
            }
        }
    }

    for(let m = 2; m<=(d-b); m = m+2){
        let forLinha = parseInt(a);
        let forColuna = parseInt(m)+parseInt(b);
        if(linhaC[forLinha][forColuna]==0){
            c3 =1;
        }else{
            break;
        }
    }
    if(c1==1 && c2==1 && c3==1){
        let casa = document.querySelector(`#casa${a}-${b}`);
        let peca = document.querySelector(`#casa${a}-${b}>div`);
        if(tema == 'claro'){
            casa.setAttribute('class', `casa white`);
            peca.setAttribute('class', 'peca branco');
        }else{
            casa.setAttribute('class', `casa black`);
            peca.setAttribute('class', 'peca preto');
        }
        let ifLinha = parseInt(a);
        let ifColuna = parseInt(b);
        linhaC[ifLinha][ifColuna] = 0;

        casa = document.querySelector(`#casa${c}-${d}`);
        peca = document.querySelector(`#casa${c}-${d}>div`);
        ifLinha = parseInt(c);
        ifColuna = parseInt(d);
        if(corAliada == "azul"){
            if(tema == 'claro'){
                casa.setAttribute('class', `casa blue`);
                peca.setAttribute('class', 'peca azul');
            }else{
                casa.setAttribute('class', `casa green`);
                peca.setAttribute('class', 'peca verde');
            }
            linhaC[ifLinha][ifColuna] = 1;
        }else{
            if(tema == 'claro'){
                casa.setAttribute('class', `casa red`);
                peca.setAttribute('class', 'peca vermelha');
            }else{
                casa.setAttribute('class', `casa purple`);
                peca.setAttribute('class', 'peca roxa');
            }   
            casa.setAttribute('class', `casa red`);
            peca.setAttribute('class', 'vermelha');
            linhaC[ifLinha][ifColuna] = 2;
        }

        for(let m = 1; m<(d-b); m = m+2){
            let forLinha = parseInt(a);
            let forColuna = parseInt(m)+parseInt(b);
            // casa = document.querySelector(`#casa${a}-${ifColuna}`);
            // peca = document.querySelector(`#casa${a}-${ifColuna}>div`)
            casa = document.querySelector(`#casa${forLinha}-${forColuna}`);
            peca = document.querySelector(`#casa${forLinha}-${forColuna}>div`);
            if(tema == 'claro'){
                casa.setAttribute('class', `casa white`);
                peca.setAttribute('class', 'peca branco');
            }else{
                casa.setAttribute('class', `casa black`);
                peca.setAttribute('class', 'peca preto');
            }   
            linhaC[forLinha][forColuna] = 0;
        }
        deQuemEAVez(jogador, 1);
        endGame();
    }


}
function abstracaoJogadaValida2(a,b,c,d){

    let c1, c2, c3;
    (b-d)%2!=0 ? c1 = 0 : c1 = 1;

    for(let m = -1 ; m > (d-b) ; m = m-2 ){
        let forLinha= parseInt(a);
        let forColuna = parseInt(b)-(parseInt(m)*-1);
        if(corInimiga == "vermelha"){
            if(linhaC[forLinha][forColuna]==2){
                c2 = 1;
            }else{
                break;
            }
        }else{
            if(linhaC[forLinha][forColuna]){
                c2 = 1;
            }else{
                break;
            }
        }
    }
    for(let m = -2; m>=(d-b); m = m-2){
        let forLinha= parseInt(a);
        let forColuna = parseInt(b)-(parseInt(m)*-1);
        if(linhaC[forLinha][forColuna]==0){
            c3 = 1;
        }else{
            break;
        }
    }
    console.log(c1, c2, c3)
    if(c1==1 && c2==1 && c3==1){
        let casa = document.querySelector(`#casa${a}-${b}`);
        let peca = document.querySelector(`#casa${a}-${b}>div`);
        if(tema == 'claro'){
            casa.setAttribute('class', `casa white`);
            peca.setAttribute('class', 'peca branco');
        }else{
            casa.setAttribute('class', `casa black`);
            peca.setAttribute('class', 'peca preto');
        }   
        let ifLinha = parseInt(a);
        let ifColuna = parseInt(b);
        linhaC[ifLinha][ifColuna] = 0;
        casa = document.querySelector(`#casa${c}-${d}`);
        peca = document.querySelector(`#casa${c}-${d}>div`);
        ifLinha = parseInt(c);
        ifColuna = parseInt(d);

        if(corAliada == "azul"){
            if(tema == 'claro'){
                casa.setAttribute('class', `casa blue`);
                peca.setAttribute('class', 'peca azul');
            }else{
                casa.setAttribute('class', `casa green`);
                peca.setAttribute('class', 'peca verde');
            }
            linhaC[ifLinha][ifColuna] = 1;
        }else{
            if(tema == 'claro'){
                casa.setAttribute('class', `casa red`);
                peca.setAttribute('class', 'peca vermelha');
            }else{
                casa.setAttribute('class', `casa purple`);
                peca.setAttribute('class', 'peca roxa');
            }
            linhaC[ifLinha][ifColuna] = 2;
        }

        for(let m = -1 ; m > (d-b) ; m = m-2 ){
            let forLinha= parseInt(a);
            let forColuna = parseInt(b)-(parseInt(m)*-1);
            // casa = document.querySelector(`#casa${ifLinha}-${b}`);
            // peca = document.querySelector(`#casa${ifLinha}-${b}>div`);
            casa = document.querySelector(`#casa${forLinha}-${forColuna}`);
            peca = document.querySelector(`#casa${forLinha}-${forColuna}>div`);
            if(tema == 'claro'){
                casa.setAttribute('class', `casa white`);
                peca.setAttribute('class', 'peca branco');
            }else{
                casa.setAttribute('class', `casa black`);
                peca.setAttribute('class', 'peca preto');
            }   
            linhaC[forLinha][forColuna] = 0;
        }
        deQuemEAVez(jogador, 1);
        endGame();
    }


}
function abstracaoJogadaValida3(a,b,c,d){
    if( a<c && b==d ){
        let c1, c2, c3;
        (c-a)%2!=0 ? c1 = 0 : c1 = 1;

        for(let m = 1; m<=(c-a); m = m+2){
            let forColuna= parseInt(b);
            let forLinha = parseInt(m)+parseInt(a);
            if(corInimiga == "vermelha"){
                if(linhaC[forLinha][forColuna]==2){
                    c2 = 1;
                }else{
                    break;
                }
            }else{
                if(linhaC[forLinha][forColuna]==1){
                    c2 = 1;
                }else{
                    break;
                }
            }
        }
        for(let m = 2; m<=(c-a); m = m+2){
            let forColuna = parseInt(b);
            let forLinha = parseInt(m)+parseInt(a);
            if(linhaC[forLinha][forColuna]==0){
                c3 =1;
            }else{
                break;
            }
        }
        if(c1==1 && c2==1 && c3==1){
            let casa = document.querySelector(`#casa${a}-${b}`);
            let peca = document.querySelector(`#casa${a}-${b}>div`)
            if(tema == 'claro'){
                casa.setAttribute('class', `casa white`);
                peca.setAttribute('class', 'peca branco');
            }else{
                casa.setAttribute('class', `casa black`);
                peca.setAttribute('class', 'peca preto');
            }   
            let ifLinha = parseInt(a);
            let ifColuna = parseInt(b);
            linhaC[ifLinha][ifColuna] = 0;

            casa = document.querySelector(`#casa${c}-${d}`);
            peca = document.querySelector(`#casa${c}-${d}>div`);
            ifLinha = parseInt(c);
            ifColuna = parseInt(d);
            if(corAliada == "azul"){
                if(tema == 'claro'){
                    casa.setAttribute('class', `casa blue`);
                    peca.setAttribute('class', 'peca azul');
                }else{
                    casa.setAttribute('class', `casa green`);
                    peca.setAttribute('class', 'peca verde');
                }   
                linhaC[ifLinha][ifColuna] = 1;
            }else{
                if(tema == 'claro'){
                    casa.setAttribute('class', `casa red`);
                    peca.setAttribute('class', 'peca vermelha');
                }else{
                    casa.setAttribute('class', `casa purple`);
                    peca.setAttribute('class', 'peca roxa');
                }   
                linhaC[ifLinha][ifColuna] = 2;
            }

            for(let m = 1; m<(c-a); m = m+2){
                let forColuna = parseInt(b);
                let forLinha = parseInt(m)+parseInt(a);
                casa = document.querySelector(`#casa${forLinha}-${forColuna}`);
                peca = document.querySelector(`#casa${forLinha}-${forColuna}>div`)
                if(tema == 'claro'){
                    casa.setAttribute('class', `casa white`);
                    peca.setAttribute('class', 'peca branco');
                }else{
                    casa.setAttribute('class', `casa black`);
                    peca.setAttribute('class', 'peca preto');
                }   
                linhaC[forLinha][forColuna] = 0;
            }
            deQuemEAVez(jogador, 1);
            endGame();
        }

    }
}
function abstracaoJogadaValida4(a,b,c,d){
    if( a>c && b==d ){
        let c1, c2, c3;
        (a-c)%2!=0 ? c1 = 0 : c1 = 1;

        for(let m = -1; m>(c-a); m = m-2){
            let forLinha = parseInt(a)-(parseInt(m)*-1);
            let forColuna = parseInt(b);
            if(corInimiga == "vermelha"){
                if(linhaC[forLinha][forColuna]==2){
                    c2 = 1;
                }else{
                    break;
                }
            }else{
                if(linhaC[forLinha][forColuna]==1){
                    c2 = 1;
                }else{
                    break;
                }
            }
        }
        for(let m = -2; m>=(c-a); m = m-2){
            console.log('verifica c3')
            let forLinha = parseInt(a)-(parseInt(m)*-1);
            let forColuna = parseInt(b);
            console.log(linhaC[forLinha][forColuna]==0)
            if(linhaC[forLinha][forColuna]==0){
                c3 = 1;
            }else{
                break;
            }
        }
        console.log(c1, c2, c3);
        if(c1==1 && c2==1 && c3==1){
            let casa = document.querySelector(`#casa${a}-${b}`);
            let peca = document.querySelector(`#casa${a}-${b}>div`);
            if(tema == 'claro'){
                casa.setAttribute('class', `casa white`);
                peca.setAttribute('class', 'peca branco');
            }else{
                casa.setAttribute('class', `casa black`);
                peca.setAttribute('class', 'peca preto');
            }   
            let ifLinha = parseInt(a);
            let ifColuna = parseInt(b);
            linhaC[ifLinha][ifColuna] = 0;
            casa = document.querySelector(`#casa${c}-${d}`);
            peca = document.querySelector(`#casa${c}-${d}>div`);
            ifLinha = parseInt(c);
            ifColuna = parseInt(d);

            if(corAliada == "azul"){
                if(tema == 'claro'){
                    casa.setAttribute('class', `casa blue`);
                    peca.setAttribute('class', 'peca azul');
                }else{
                    casa.setAttribute('class', `casa green`);
                    peca.setAttribute('class', 'peca verde');
                }   
                linhaC[ifLinha][ifColuna] = 1;
            }else{
                if(tema == 'claro'){
                    casa.setAttribute('class', `casa red`);
                    peca.setAttribute('class', 'peca vermelha');
                }else{
                    casa.setAttribute('class', `casa purple`);
                    peca.setAttribute('class', 'peca roxa');
                }   
                linhaC[ifLinha][ifColuna] = 2;
            }

            for(let m = -1; m>(c-a); m = m-2){
                let forLinha = parseInt(a)-(parseInt(m)*-1);
                let forColuna = parseInt(b);
                casa = document.querySelector(`#casa${forLinha}-${forColuna}`);
                peca = document.querySelector(`#casa${forLinha}-${forColuna}>div`);
                if(tema == 'claro'){
                    casa.setAttribute('class', `casa white`);
                    peca.setAttribute('class', 'peca branco');
                }else{
                    casa.setAttribute('class', `casa black`);
                    peca.setAttribute('class', 'peca preto');
                }   
                linhaC[forLinha][forColuna] = 0;


            }
            deQuemEAVez(jogador, 1);
            endGame();
        }

    }
}

function endGame(){
    let azulJoga = 0;
    let vermelhoJoga = 0;
    for(let i = 0;i<linhaC.length;i++){
        for(let j = 0; j<linhaC.length;j++){
            if(corAliada=="azul"){
                if((j+2)<linhaC.length){
                    if(linhaC[i][j] == 1 && linhaC[i][j+1] == 2 && linhaC[i][j+2]==0){
                        azulJoga = 1;
                    }
                }
                if((j-2)>=0){
                    if(linhaC[i][j] == 1 && linhaC[i][j-1] == 2 && linhaC[i][j-2]==0){
                        azulJoga = 1;

                    }
                }
                if((i+2)<linhaC.length){
                    if(linhaC[i][j] == 1 && linhaC[i+1][j] == 2 && linhaC[i+2][j]==0){
                        azulJoga = 1;

                    }
                }
                if((i-2)>=0){
                    if(linhaC[i][j] == 1 && linhaC[i-1][j] == 2 && linhaC[i-2][j]==0){
                        azulJoga = 1;

                    }
                }
            }else{
                if((j+2)<linhaC.length){
                    if(linhaC[i][j] == 2 && linhaC[i][j+1] == 1 && linhaC[i][j+2]==0){
                        vermelhoJoga = 1;

                    }
                }
                if((j-2)>=0){
                    if(linhaC[i][j] == 2 && linhaC[i][j-1] == 1 && linhaC[i][j-2]==0){
                        vermelhoJoga = 1;

                    }
                }
                if((i+2)<linhaC.length){
                    if(linhaC[i][j] == 2 && linhaC[i+1][j] == 1 && linhaC[i+2][j]==0){
                        vermelhoJoga = 1;

                    }
                }
                if((i-2)>=0){
                    if(linhaC[i][j] == 2 && linhaC[i-1][j] == 1 && linhaC[i-2][j]==0){
                        vermelhoJoga = 1;

                    }
                }
            }
        }
    }
    const mensagem = document.querySelector("#mensagem>p");
    if(corAliada == 'azul'&&azulJoga==0){
        mensagem.innerHTML = 'A cor roxa saiu vitoriosa !!!<br>Pressione Restart para iniciar um novo jogo =D';
    }else if(corAliada == 'vermelha'&&vermelhoJoga == 0){
        mensagem.innerHTML = 'A cor verde saiu vitoriosa !!!<br>Pressione Restart para iniciar um novo jogo =D';
    }
}



















