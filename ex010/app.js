   function par(){
   let contador = 0
    while (contador <= 100) {
        if(contador % 2 == 0){
        document.getElementById("resposta").innerHTML += contador +"  ,  "
        } 
        contador++ 
    }
}

