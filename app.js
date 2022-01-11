

//console.log("Hello World")

/*setTimeout(function () { 
    console.log(" Time setting executing after 3 seconds")
},3000)*/


/*setInterval(() => { // work as loop without ending
    console.log(" loop the code after 2 seconds")
}, 2000);*/

 /*var time=0;
var timer = setInterval(() => { // work as loop with ending time
    time+=2;
  console.log(" loop the code")  
  if(time>10){
      clearInterval(timer)
  }
}, 2000);

*/

/*

console.log(__filename); // get correct file path

console.log(__dirname); // get folder path

*/


/*
function nameYou(){
    console.log(" Hello Thilini");
}

nameYou(); // calling function




myfunc=function(){
    console.log("function expression");
}

function callingFunction(call){
    call();
}

callingFunction(myfunc);


*/



/*

counterModule=require('./counter')

console.log(counterModule(['Thilini', 'madushani', 'Abesekara', 'Gampaha']));

*/


/////////////////////////////////////////////


/* var mystaff =require('./staff')


console.log(mystaff.length(['Thilini', 'madushani', 'Abesekara', 'Gampaha']));

console.log(mystaff.birthday(20,02,1998));

console.log(mystaff.myName('Thilini'));

*/


var events=require('events');

var myemitter=  new events.EventEmitter();

myemitter.on('someEvents',function(msg){
    console.log(msg)
})

myemitter.emit('someEvents', 'I am in the home');










