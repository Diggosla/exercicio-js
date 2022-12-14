function Tabuada() {
    let contador = 0
    let n1 = 8
    document.getElementById("resposta").innerHTML = ""
    while (contador <= 10) {
        document.getElementById("resposta").innerHTML += n1 + "x" + contador + "=" + contador * n1 + "<br>"
        contador = contador + 1
    }
}