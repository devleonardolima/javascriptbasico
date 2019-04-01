// Este linha esta comentada
/* Este bloco esta comendao
Como você pode !!
*/

//var nome = "Camila";
var lista = Array();
var nome = "Leonardo";

function RedirecionarHome(){
    window.location.href = 'index.html';
}

function RedirecionarCurso(){
    window.location.href = 'https://alunos.b7web.com.br/';
}

function RedirecionarJogo(){
    window.location.href = 'jogo.html';
}

function RedirecionarReceita(){
    window.location.href = 'receita.html';
}

function RedirecionarCalculadora(){
    window.location.href = 'calculadora.html';
}


function MudarNome(){
    var antigonome = nome;
    var novonome = prompt("Qual é o seu nome agora ?");

    if(novonome == ''){
        while(novonome == ''){
            novonome = prompt("Por favor qual é o seu nome agora ?");
            if(novonome == null){
                alert("O seu nome não foi modificado");
                document.getElementById('area').innerHTML = antigonome;
            }else if(nome != '' && nome != null){
                document.getElementById('area').innerHTML = novonome;
            }
        }
    }else if(novonome == null){
        alert("O seu nome não foi modificado");
        document.getElementById('area').innerHTML = antigonome;
    }else{
        document.getElementById('area').innerHTML = novonome;
        nome = novonome;
    }
}

function AdicionarIngrediente(){
    var ingrediente = document.getElementById('ingrediente').value;
    var receita = document.getElementById('ingredientes').innerHTML;
    
    receita = receita + "<li>"+ingrediente+"<li>";

    document.getElementById('ingredientes').innerHTML = receita;
    document.getElementById('ingrediente').value = "";
}

function Somar(){
    var valor1 = parseFloat(document.getElementById('valor1').value);
    var valor2 = parseFloat(document.getElementById('valor2').value);

    var resultado = valor1 + valor2;
    alert(resultado);
}

function Subtrair(){
    var valor1 = parseFloat(document.getElementById('valor1').value);
    var valor2 = parseFloat(document.getElementById('valor2').value);

    var resultado = valor1 - valor2;
    alert(resultado);
}

function Multiplicar(){
    var valor1 = parseFloat(document.getElementById('valor1').value);
    var valor2 = parseFloat(document.getElementById('valor2').value);

    var resultado = valor1 * valor2;
    alert(resultado);
}

function Dividir(){
    var valor1 = parseFloat(document.getElementById('valor1').value);
    var valor2 = parseFloat(document.getElementById('valor2').value);

    var resultado = valor1 / valor2;
    alert(resultado);
}

function Verificar(){
    var num1 = document.getElementById('num1').innerHTML;
    var num2 = document.getElementById('num2').value;

    if(num1 == num2){
        alert("Você acertou! os numeros são iguais");
    }else{
        alert("Você errou! os numeros são diferentes");
    }

    Resetar();
}

function Resetar(){
    var x = Math.floor(Math.random() * 10);
    document.getElementById('num1').innerHTML = x;
    document.getElementById('num2').value = '';
}
