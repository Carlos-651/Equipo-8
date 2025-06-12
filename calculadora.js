class Calculadora{

    suma(var1,var2)
    {
        let resultado = var1 + var2 ;
        console.log ("El resultado de la suma es " + resultado);   
    }  

    resta(var1,var2)
    {
        let resultado = var1 - var2 ;
        console.log ("El resultado de la resta es " + resultado);
    }

    mulplicacion(var1,var2)
    {
        let resultado = var1 * var2 ;
        console.log ("El resultado de la multiplicación es " + resultado);
    }

    division(var1,var2)
    {
        if (var2==0){
            console.log ("El divisor no debe ser 0");
            return;
        }
        let resultado = var1 / var2 ;
        console.log ("El resultado de la división es " + resultado);
    }
}

const calculadora1 = new Calculadora();
const var1 =2;
const var2=10;

calculadora1.division(var1,var2);
