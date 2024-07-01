
// function check_script(str) {

//     if(str.length < 6) {
//         return str;
//     }

//     let return_str = str;

//     // javascript

//     if (str.substring(4,10) == 'Script')
//     {
//         return_str = str.substring(0,4) + str.substring(10,str.length);
//     }

//     return return_str;

// }

// console.log(check_script('TypeScript'))

function check_script(str) {

    if (str.length < 6) {
        return str;
    }

    var result_str = str.indexOf('script');

    console.log(result_str);

    return str.substring(0,result_str);
}

console.log(check_script('Coffeescriptaaaaaa'));
