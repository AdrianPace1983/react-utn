

import './Ejemplo.css';
export default function Ejemplo () {
const vida = 42;
 //Si el sentido de la vida es 42 usar "correcto" como clase    
 //Si no usar "incorrecto"
     
 
 let clase = ""; 
    if (vida === 42) {         
               
        clase = "correcto";
        } else {                   
            clase = "incorrecto";
           }
           return (
        <p className={clase}>El sentido de la vida es {vida}</p>
        
        )}