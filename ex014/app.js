function Idade() {
    let idade = document.getElementById("idade").value

    if(idade >=18 ){
        document.getElementById("resposta").innerHTML = "vc é maior de idade"
    } else {
        document.getElementById("resposta").innerHTML = "vc é menor de idade"
    }
}
