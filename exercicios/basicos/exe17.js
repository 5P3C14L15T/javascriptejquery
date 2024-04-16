function primeiro_ultimo(palavra)
{
    if(palavra.length <= 1)
    {
        return palavra;
    }

    var meio = palavra.substring(1, palavra.length - 1);
    var inicio = palavra.charAt(0);
    var final = palavra.charAt(palavra.length - 1);

    return final + meio + inicio;


}

console.log(primeiro_ultimo('ABC'));