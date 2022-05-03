// this keyword and prototype system


//todo      here, the `this` will point to the object `workshop`
var workshop = {
    teacher: 'erin',
    ask(question){
        console.log(this.teacher, question); // `this` makes this a `this` aware function
    },
};
//erin, what is implicit binding?
workshop.ask('what is implicit binding?');

// ===================================================================================

function ask(question)
    {
    console.log(this.teacher,question);
}
function otherClass(){
    var myContext={ //this is an object `myContext`
        teacher: 'ahiryu'
    };
    ask.call(myContext,"why cute?") // ahiryu why cute?
    //TODO  `ask.call` invokes function `ask` then pass and use myContext object as the `this` keyword
}
// ===================================================================================
                        //THE CODE BELOW ISNT USUALLY USED BUT
                        //IMPLICITLY, WHAT THE CLASS KEYWORD IS ACTUALLY DOING
// ===================================================================================
function Workshop(teacher){ // TODO ACT AS A CONSTRUCTOR FOR THE INSTANCES OF Workshop CLASS
    this.teacher = teacher;
}
Workshop.prototype.ask = function(question){
    console.log(this.teacher, question);
};
//invokes the Workshop() and the object that gets creates is going to be
//TODO linked to Workshop.prototype
var deepJS = new Workshop('ahirusensei');
var reactJS = new Workshop('duckteacher');

deepJS.ask('is "prottype" a class?');
//delegates one level up the prototype chain from deepJS up to workshop.prototype
reactJS.ask('isn;t prottype blabla?');

// ===================================================================================
