function calculadora(){
    let saida_valor_total = document.getElementById("valorTotal")
    let saida_valor_gorjeta = document.getElementById("tipoConta")
    let valor_conta = document.getElementById("valorConta").value
    let gorjeta = document.getElementById("qualidadeServico").value

    if (valor_conta === "") {
        alert("Preencha todos os campos!");
        return;
    }

    var gorjeta_total = valor_conta * gorjeta
    var valor_final = Number(gorjeta_total) + Number(valor_conta)

    saida_valor_total.value = valor_final
    saida_valor_gorjeta.value = gorjeta_total

}
