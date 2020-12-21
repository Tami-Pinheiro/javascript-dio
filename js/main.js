//Primeira aula

//var nome = "Tamires Pinheiro";
//var idade = 30;
//var idade2 = 10;
//var frase = "chocolate é o doce mais gostoso"
//alert("Bem vindo" + ", " + nome + "!" + "Você tem " + idade + " anos.");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);

//console.log(frase.toLowerCase());letra minuscula

//console.log(frase.toUpperCase());letra maiuscula 

//console.log(frase.replace("chocolate", "pudim"));
//alert(frase.replace("chocolate", "mousse"));


//Segunda aula - Arrays

//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva"); adicionar uva
//lista.pop();elimina a laranja
//console.log(lista);mostra todos os itens da lista

//console.log(lista.length);mostra quantidade de itens da lista
//console.log(lista.reverse()); mostrar a ordem ao contrario 

//console.log(lista);
//console.log(lista.join(" - "));mostrar string com - 
//console.log(lista.toString());mostra no formato string


//console.log(lista); imprimir todas as frutas
//console.log(lista[1]);imprimir só a pêra
//alert(lista[1]); só a pêra também

//var fruta = {nome:"maça", cor:"vermelha"} dicionário da fruta maça
//console.log(fruta.nome);mostrar só o nome da fruta
//alert(fruta.cor);mostrar a cor da fruta

//var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}] lista de dicionários, parece um arquivo json
//console.log(frutas);
//alert(frutas[1].nome);mostrar o nome uva


//Terceira aula - Condicionais

//Estrutura se 
/*
var idade = prompt("Qual sua idade?"); vai perguntar a idade e vai guardar na variável idade
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/

//Estrutura enquanto
/*var count = 0
while(count <= 5){
    console.log(count);
    //alert(count);caixa na tela mostrando numeros de 0 a 5
    count = count + 1;
};
*/

//Estrutura para
/*var count;
for(count = 0; count <= 5; count ++){
   alert(count) 
};
*/

//Estrutura data
//var d = new Date();mostrar data atual completa
//alert(d);

//var d = new Date();mostrar mês, ex: estamos em dezembro, então mostrou 12
//alert(d.getMonth()+1);

//var d = new Date();mostrar minutos, ex: são 00:23, então mostrou só 23 minutos
//alert(d.getMinutes());

//var d = new Date();mostrar a data
//alert(d.getHours());


//Quarta aula - tipos de variáveis
/*function soma(n1, n2){
    return n1 + n2;
}
alert(soma(5, 10));
*/

/*function validaIdade(idade){
    var validar; variável local
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Quantos anos você tem?");
console.log(validaIdade(idade));
*/

/*var validar = 0; variaável global
function validaIdade(idade){
    validar;
    if(idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade =  prompt("quantos anos você tem?");
validaIdade(idade)
console.log(validar);
*/


//Quinta aula - manipulando página
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar</b>";/*injetar html no js*/
    /*console.log(document.getElementById("agradecimento"));localizar esse id*/
    /*alert("Obrigada por clicar");com o popup*/
}

function redirecionar(){
    window.open("https://digitalinnovation.one/");/*abre na outra página*/
    /*window.location.href = "https://digitalinnovation.one/";abre na mesma página*/
}

function trocar(elemento){
    /*document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";*/
    elemento.innerHTML = "Obrigado por passar o mouse";
    /*alert("trocar texto");*/
}

function voltar(elemento){
    /*document.getElementById("mousemove").innerHTML = "passe mais uma vez o mouse aqui";*/  
    elemento.innerHTML = "passe mais uma vez o mouse aqui";
}

function load(){
    alert("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}










