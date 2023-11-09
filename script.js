function calculadora(){
    let saida_valor_total = document.getElementById("valorTotal")
    let saida_valor_gorjeta = document.getElementById("tipoConta")
    let valor_conta = document.getElementById("valorConta").value
    let gorjeta = document.getElementById("tipoConta").value

    if (valortotal === "" || gorjeta === "") {
        alert("Preencha todos os campos!");
        return;
    }

    var gorjeta_total = valor_conta * gorjeta
    var valor_final = gorjeta_total(Number) + valor_conta(Number)

    saida_valor_total.innerHTML = valor_final
    saida_valor_gorjeta.innerHTML = gorjeta_total

}
