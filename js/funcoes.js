function calcular() {
    var formulario = document.getElementById("imcForm");
    var peso = formulario.peso.value;
    var altura = formulario.altura.value / 100;
    var imc = peso / (altura * altura);

    formulario.imc.value = imc.toFixed(2);
    
    if (isNaN(imc))
        formulario.situacao.value = "Dados inválidos";
    else if (imc < 17)
        formulario.situacao.value = "Você se encontra muito abaixo do peso.";
    else if (imc >= 17 && imc < 18.49)
        formulario.situacao.value = "Você se encontra abaixo do peso.";
    else if (imc >= 18.5 && imc < 24.99)
        formulario.situacao.value = "Você se encontra no peso normal.";
    else if (imc >= 25 && imc < 29.99)
        formulario.situacao.value = "Você se encontra acima do peso.";
    else if (imc >= 30 && imc < 34.99)
        formulario.situacao.value = "Você se encontra em obesidade I.";
    else if (imc >= 35 && imc < 39.99)
        formulario.situacao.value = "Você se encontra em obesidade II (Severa).";
    else if (imc > 40)
        formulario.situacao.value = "Você se encontra em obesidade III (Mórbida).";

}
