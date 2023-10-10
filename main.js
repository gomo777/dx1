function compararTamanhos() {
    var palavra1 = document.getElementById("palavra1").value;
    var palavra2 = document.getElementById("palavra2").value;

    if (palavra1.length > palavra2.length) {
        document.getElementById("resultado").innerHTML = "A primeira palavra é maior, e tem " + palavra1.length + " caracteres.";
    }
    else if (palavra2.length > palavra1.length) {
        document.getElementById("resultado").innerHTML = "A segunda palavra é maior, e tem " + palavra2.length + " caracteres.";
    }
    else {
        document.getElementById("resultado").innerHTML = "As duas palavras têm o mesmo tamanho, com " + palavra1.length + " caracteres cada.";
    }
}