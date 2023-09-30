//Solicitar al usuario que elija una operación
var operación = prompt("Elija una operacion:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División");

//Convertimos la entrada del usuario en un numero entero
operación = parseInt(operación);

//Validamos la entrada del usuario para asegurarnos que sea un numero valido entre 1 y 4
if (isNaN(operación || operación < 1 || operación > 4 )){
    document.write("Operacion invalida")
} else {
    var numero1 = parseFloat(prompt("Ingrese el primer numero:"));
    var numero2 = parseFloat(prompt("Ingrese el segundo numero:"));

    //Realizamos la operacion elejida para mostrar el resultado
    var resultado;
        //OPREACION SUMA
    if (operación === 1) {
        resultado = numero1 + numero2;
        document.write("El resultado de la suma es:" + resultado);
        //OPERACION RESTA
    } else if (operación === 2) {
        resultado = numero1 - numero2;
        document.write("El resultado de la resta es:" +resultado);
        //OPERACION MULTIPLICACION
    } else if (operación === 3) {
        resultado = numero1 * numero2;
        document.write("El resultado de la multiplicacion es:" + resultado);
        //OPERACION DIVISION
    } else {
        
        resultado = numero1 / numero2;
        document.write("El resultado de la division es:" + resultado);

        }
    }

 
