function inpar(){
    let contador = 0
     while (contador <= 100) {
         if(contador % 2 == 1){
         document.getElementById("resposta").innerHTML += contador +"  ,  "
         } 
         contador++ 
     }
 }
