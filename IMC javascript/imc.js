function calcula_imc(){
    altura = document.imcform.altura.value;
    peso = document.imcform.peso.value;


    calculo =(peso/(altura*altura));


    if (calculo<18.5){
        alert("você está abaixo do peso, índice:" + calculo)


    }
    else if (calculo >= 18.5 && calculo<=24.9){
        alert("você está com o peso ideal do índice:" + calculo)
    }

    else if (calculo >= 25.0 && calculo <= 29.9){
        alert("você está com sobrepeso:" + calculo)
    }

    else if (calculo >= 30.0 && calculo <=39.9){
        alert("você está obeso:" + calculo)
    }

    else if (calculo >= 40.0){
        alert("você está com obesidade mórbida:" + calculo)
    }
}