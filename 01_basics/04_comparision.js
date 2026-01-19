console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2<=1);
console.log(2==1);
console.log(2!=1);
console.log("Different dataType");
console.log("2">1);
console.log("02">1);
// upper are good con

console.log(null>0); //false
console.log(null==0);//false
console.log(null>=0);//true
/* the reason is that an equality check == and comparisons >< >= <= work differently.
comparisons convert null to a number, treating it as 0.
that's why (3) null >= 0 is true and (1)null > 0 is false.*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//equality check and comparision are differnt 

// strick check ===