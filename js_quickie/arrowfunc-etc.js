
//todo WHAT THE FILE CONSISTS: ARROW FUNC. (if will use, read more from provided link), IIFE (immediately invoked func. expression),
// BLOCK SCOPING WITH: let(instead of IIFE), closure,

//  ************************* REFERENCES:****************************
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//ABOUT SCOPES:
//https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/scope-closures

//todo Traditional Anonymous Function READ BELOW

// function (a){
//     return a + 100;
// }
// Arrow Function Break Down
// // 1. Remove the word "function" and place arrow between the argument and opening body bracket
// (a) => {
//     return a + 100;
// }
// // 2. Remove the body braces and word "return" -- the return is implied.
// (a) => a + 100;
// // 3. Remove the argument parentheses:

let ahiru = a => a + 100; //the anonymous func


//todo              arrow functions w/ empty or multiple arguments
// MULTILINE STATEMENTS REQUIRE BODY BRACES AND RETURN:
const multiline = (a, b) => {
    let chuck = 42;
    return a + b + chuck;
}
const multiparam = (param1, paramN) => {
    let a = 1;
    return a + param1 + paramN;
}




//todo          IIFE: IMMEDIATELY CALLING A FUNCTION:
//good to use for scopes, such as maybe logging and then editing the var while logging before performing on a variable, etc.
( function printAhiru(){
        console.log('ahiur');
    }
)();

//todo              let vs var
// let allows you to keep a var. in scope:
var ahiru = 'ahiru';
{
    let ahiru='notahiru';
    console.log(`ahiryu inside scope ${ahiru}`);
}
console.log(`ahiru outside scope ${ahiru}`);

//todo                          closure: when a func. remembers  the variables outside of it, even if you pass the func. elsewhere
//TODO NOTE THIS ON A NON BASIC PAGE
// only closure when it both accesses an outside var. and passes the func. elsewhere    VERY HARD SO READ CAREFULLY
function ask(question){
    setTimeout(function waitASec(){
        console.log(question);
    }, 100);
}
ask("what's a closure")



//so after the function `ask()` **we expect the `question` variable to be deleted as we are done with the func.
// but because of `waitASec()` func., `question` variable stays alive as it is still..waiting :)
// BASICALLY IT ALLOWS US TO "REMEMBER" SOME VARIABLE THAT IS INSIDE THE FUNC., EVEN WHEN THE FUNC. IS DONE/