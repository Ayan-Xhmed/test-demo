let num = 4010;
if(num%2 == 0){
    console.log("Good");
}else{
    console.log("Bad")
}

// let name = prompt("enter the name");
// let age = prompt("enter the age");
// alert(`${name} is ${age} years old`)

let quarter = 1;
switch (quarter){
    case 1 :
        console.log("January,February,March");
        break;
    case 2 :
        console.log("April,May,June");
        break;
    case 3 :
        console.log("July,August,September");
        break;
    case 4 :
        console.log("ctober,November,December")
    default:
        console.log("wrong input");

}

let str = "apple";
if((str[0] == "a" || str[0] == "A" ) && str.length >= 5){
    console.log("Golden String")
}else{
    console.log("not a Golden String")
}

let a = 10;
let b = 35;
let c = 30;
if(a>b || a>c){
    console.log("a is largest "+ a);
}else if (b>c){
    console.log("b is largest "+ b);
}else{
    console.log("c is largest "+ c)
}