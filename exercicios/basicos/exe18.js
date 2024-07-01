// definir uma função para verificar se o número é múltiplo de 3 e 7
function teste_3_7(x) {

    if (x % 3 == 0 || x % 7 == 0) {
        
        return true;
    }
    else {
        return false;
    }
    
}

console.log(teste_3_7(10));
console.log(teste_3_7(12));
console.log(teste_3_7(11));
console.log(teste_3_7(14));