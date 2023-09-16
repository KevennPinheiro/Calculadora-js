function inserir(num)
{
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function limpar()
{
    document.getElementById('resultado').innerHTML = "";
}

function apagar()
{
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1);
}

function calcular(){
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "0";
    }
}

function percent(){
    let reDot = /[*]/g;
    var operacao = document.getElementById('resultado').innerHTML;
    var qtd = document.getElementById('resultado').innerHTML.length;
    var pos = operacao.search(reDot);
    var porc = (document.getElementById('resultado').innerHTML.substring(pos+1,qtd))/100
    var operador = document.getElementById('resultado').innerHTML.substring(0,pos);
    console.log(operador)
    console.log(porc)
    let resultado = operador * porc
    document.getElementById('resultado').innerHTML = resultado
}

function raiz(){
    let valor = document.getElementById('resultado').innerHTML;
    let resultado = Math.sqrt(valor);
    document.getElementById('resultado').innerHTML = resultado;
}