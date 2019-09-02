'use strict'
/*var b = document.getElementById("oso");
var genero = prompt("Es usted un oso?");
if(genero == "si"){
    b.innerHTML="Hola Oso";
}*/
var numero = "";
var resultado = 0;
var temp = "";
var realizar = "";
function resetear(){
    $("#resultado").val("");
    numero = "";
    resultado = 0;
    temp = "";
    realizar = "";
}
function calcular(){
    switch(realizar){
        case "+" :
            resultado = resultado + parseFloat(numero);
            break;
        case "-" :
            resultado = resultado - parseFloat(numero);
            break;
        case "*" :
            resultado = resultado * parseFloat(numero);
            break;
        case "/" :
            resultado = resultado / parseFloat(numero);
            break;
        
    }
    numero = parseFloat(resultado);
    temp = "";     
}
function operacion(valor){
    realizar = valor;
    resultado = parseFloat(numero);
    $("#resultado").val("");
    temp = "";
}
function resul(){
    $("#resultado").val("");
    $("#resultado").val(resultado);
    if(isNaN(numero)){
        $("#resultado").val("Indeterminado");
    }
    texto = "";
}
function numeros(num){
        temp = temp + num;
        numero = temp;
        $("#resultado").val(numero);  
        if(realizar != ""){
            calcular();
        }          
    }

