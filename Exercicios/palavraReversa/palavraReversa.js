var palavra1 = "Abacate";
var palavra2;

function palindromo(palavra1) {
    palavra2 = palavra1.split("").reverse().join("");
    if(palavra1.toLowerCase() == reverse(palavra1).toLowerCase()){
        console.log("Palindromo");
    }
    else{
        console.log("Não é palindromo");
    }
}

