function change() {
    const titleDoc= document.querySelectorAll(".titleName");
  
    titleDoc.textContent = "Hola caracola";

 // por que no me cambia todos cuando es una clase?? Por que devuelve un array.
 for ( let element of titleDoc){
      element.titleDoc = "hola caracola"
 }
}