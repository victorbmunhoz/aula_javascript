/* Gravando o número do elento escolhido no console.
function Change(elemento){
    console.log(elemento.value);
}
*/

/*Criar um alerta ou qualquer outra coisa após a página carregar (ONLOAD)
function load(){
    alert("Página carregada")
}
*/

/*Passar o Mouse e voltar
function trocar(elemento){
    elemento.innerHTML = "Boa"
    //document.getElementById("mouseover").innerHTML = "Boa"
    //alert("trocar texto")

}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui!"
    //document.getElementById("mouseover").innerHTML = "Passe o mouse aqui!"
}
*/

/*Redirecionando para outra página na web
function redirecionar(){
    // OUTRA ABA = window.open("https://github.com/victorbmunhoz/aula_javascript");
    // MESMA PÁGINA = window.location.href =  "https://github.com/victorbmunhoz/aula_javascript"
}
*/

/*Manipulando elementos da página - Acrescentando um texto 
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar!")
}
*/

/*Variável GLOBAL e LOCAL
var validar ; Variável GLOBAL (Na linha de código, fora de qualquer função/operação)

function validaIdade(idade){
    var validar; Variável LOCAL (Dentro da função/operaçao)
    if (idade >=18){
        validar = true
    }else{
            validar = false
    }
    return validar; 
}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
*/

/*Datas
var d = new Date();
alert(d.getHours());
alert(d.getSeconds());
alert(d.getMinutes())
alert(d.getMonth() + 1)
*/

/*Estrutura de repetição 2 - FOR
var count; 
for(count=0; count <=5; count++){
    alert(count);
}
*/ 

/*Estrutura de repetição 1 - WHILE
var count = 0;
while(count <= 5){
    console.log(count);
    count++;
}
*/

/*Condicionais

var idade = prompt("Qual a sua idade?");
if (idade >= 18){
    alert("Maior de idade!");
}else{
    alert("Menor de idade!");
}
*/

/*Lista de dicionários
var frutas = [{nome: "uva", cor: "roxo"}, {nome: "abacate", cor: "verde"}]
console.log (frutas)
alert(frutas[1].nome)
*/

/*Dicionários
var fruta = {nome: "uva", cor: "roxo"};
console.log(fruta.nome);
alert(fruta.cor)
*/

/*Lista
var lista = ["maça","pera","banana","uva"];
//lista.pop();
lista.push("abacate")
console.log(lista);
console.log(lista.toString());
console.log(lista.join("-"))
*/

/*Variável
var nome = "Victor Munhoz"
var idade = 22
var idade2 = 16
var frase = "Japão é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2)
console.log(nome);
console.log(idade);
console.log(frase.toUpperCase());
console.log(frase.replace("Japão","Brasil"));
//alert(frase.replace("Japão" , "Brasil"));
*/