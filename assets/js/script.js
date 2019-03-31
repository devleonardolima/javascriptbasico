// Este linha esta comentada
/* Este bloco esta comendao
Como você pode ver !!
*/

//var nome = "Camila";
var nome = "Leonardo";

function Redirecionar(){
    window.location.href = 'https://alunos.b7web.com.br/';
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
