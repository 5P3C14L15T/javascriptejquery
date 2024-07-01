// definir função para checar os números
function checar_numeros(a,b) {
    if ((a >= 50 && a <=99) || (b >= 50 && b <= 99)) {
        
        // se for verdadeiro, retorna true
        return true;
    } else {
        // se for falso retorna false
        return false;
    }
    
}

console.log(checar_numeros(10,101));
console.log(checar_numeros(50,900));
console.log(checar_numeros(55,99));