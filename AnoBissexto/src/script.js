const btn = document.querySelector(".botao");
const titulo = document.querySelector(".titulo");
const escreve = document.querySelector(".escreve");


function anoBissexto(ano){
    if(ano % 4 === 0 && ano % 100 !== 0){
        return "é bissexto";
    }else if(ano % 4 === 0 && ano % 100 === 0 && ano % 400 === 0){
        return "é bissexto e divisível por todos";
    }else{
        return "não é bissexto"
    }
}

btn.onclick = () => {
    const ano = Number(prompt("Qual é o ano que você quer verificar?"));
    titulo.innerHTML = `Analisando o ano de ${ano}...`
    const bissexto = anoBissexto(ano);
    escreve.innerHTML = `O ano de ${ano} ${bissexto} `;
}
