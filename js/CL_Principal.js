import CL_contratado from "./CL_Contratado.js";
import CL_fijo from "./CL_Fijo.js";

let profFijo= new CL_fijo("Carlos",25,100)

let salida=document.getElementById("salida")

salida.innerHTML=`
Nombre del profesor fijo:${profFijo.nombre}
<br>Monto del Bono:$${profFijo.bono}
<br>Monto del Sueldo:$${profFijo.sueldoFijo}
<br>Ingreso total del profesor ${profFijo.nombre}:$${profFijo.ingresoTotal()}`