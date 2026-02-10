//Singletion 
//when are create or declare with literal that time singletion is not form but declare with construction lingletion form 

// object literal
let jsUser = {
    "Full Name" : "Ayan Ahmed",
    name : "ayan",
    age : 21,
    location : "sahaspur",
    email : "ayanahmed@gogle.com"
}
console.log(jsUser.email);

console.log(jsUser.name);
console.log(jsUser["Full Name"]);

//Object.freeze(jsUser);
jsUser.email = "gpt@jsUser.com";
console.log(jsUser["email"]);

console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js User");
}
console.log(jsUser.greeting());

jsUser.greetingtwo = function(){
    console.log(`hello js User ${this.name}`);
}
console.log(jsUser.greetingtwo());





