// javascript
// java -(s) cript = javacript
// javacript
// avascript

function remove_character(str, char_pos) {

    // pegar a primeira parte
    part1 = str.substring(0, char_pos);
    // console.log(part1);

    // pegar a segunda parte
    part2 = str.substring(char_pos + 1,str.length);
    // console.log(part2);

    return (part1 + part2);

}


console.log(remove_character("JavaScript", 8));