/*function greet(name){
    console.log("hello ",name);
}
function print(greetfn){   //greetfn is an callback function and print is higher order function
    const name="hell1";
    greetfn(name);
}
print(greet);
*/
let number=[1,2,3,4,5,6,7,8,5];
number.sort((a,b)=>a-b)
number.filter( n=> n%2 ===0)

number.map(n =>n/2)