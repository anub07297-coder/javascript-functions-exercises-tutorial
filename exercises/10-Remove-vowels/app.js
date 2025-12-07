// // Your code goes here
// const rapid = (givenStr)=>{
// let result ="";
//    for(let i=0; i<givenStr.length;i++)
//    {
//      if( ("aeiou").includes(givenStr[i].toLowerCase())) {         
//          continue;
//      }
//    result += givenStr[i].toUpperCase();
//    }
//    return result;
// };

// // Work above this line; do not change code below
// let str = "John";
// console.log(rapid(str));

// Your code goes here
const rapid = (givenStr)=>{
let result = givenStr.toLowerCase()
                     .split("")
                     .filter((char)=>!("aeiou").includes(char))
                     .map((element)=> element.toUpperCase())
                     .join("");
  
   return result;
};

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));


