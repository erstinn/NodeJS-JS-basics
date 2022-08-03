// to get the type of a variable
//TODO typeof AND DECLARING VARIABLES
console.log(typeof undefined); // returns undefined
console.log(typeof null); // returns object just bc it is a bug and cannot fix
console.log(typeof {age: 39});

//      alternative variable declaration
otherstring = 'xd';

var ducksarray=['yellowduck', 'whietduck', 'cutedyuck'];
num++; num +=1;
console.log(num);

//TODO     ifelse: SAME SYNTAX W/ C++ WHERE ENCLOSED IN CURLIES
//TODO     forloop/while
for (let i = 0; i < 2; i++) {
    //
}
for (let d of ducksarray){ //foreach of an array etc.
    //
}
while(num<1){
    //

}
//TODO        functions
function greetduck(){
    //return something if you like


}
//TODO          USING new
// USE ON: Object(), Array(), Function(), Date(), RegExp(), Error()
// DONOT USE ON: string()number()boolean()

var yesterday = new Date("April 3, 2000");
//TODO              coercion: WAY TO CONVERT FROM ONE TYPE TO ANOTHER
// using backticks so you can call variables inside a string
//number + string = string
console.log(`There are ${num+""} students`)

Number(somestring.value); //Number() to convert a string to number
//TODO             boolean values: falsy and truthy; can convert almost everything to boolean
// Falsy: "", 0, -0, null, NaN, false, undefined
// Truthy: "notempty", 8, {a:1}, [1.3], true, function(){...}
//basically make if statements easier:
if("ahiru"){
    //
}
if (ducksarray.length){
    //since .lentgh is a number, if it gives anything other than 0, assumes true
}
// todo                CASTING TO boolean USING "!!"
if (!!somestring.value){
    //

}
//todo                  IMPLICIT CASTING, BUT DO NOT USE OFTEN; GOOD TO USE IF IT IS CLEAR IT IS A NUMBER
//non implicit vs explicit:
if (Number(somestring)<Number(otherstring)){}
if(somestring<otherstring){} //SHOULD BE CLEAR THAT IT IS A NUMBER E.G. AN OBVIOUS NAME :)

