//Print odd numbers in an array

var y=[1,2,3,4,5,6,7]

var odd=(array)=>{
   let arr=[];
   for(let i=0; i<array.length; i++)
   {
     if(array[i]%2!==0)
     {
      arr.push(array[i]);
     }
   }
   return arr;
}
console.log(odd(y));

//Convert all the strings to title caps in a string array

var str="my name is ayesha";
let def= (str)=>{
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
}
console.log(def(str));


//Sum of all numbers in an array

var a=[1,2,3,4,5,6,7,8,9,10];
var sum=0;
let value=(a)=>
{
   for(let i=0; i<a.length; i++)
   {
     sum=sum+a[i];
   }
   return sum;
}
console.log(value(a));

//Return all the prime numbers in an array

let number=100;
let l=(n)=>
{
   for(let i=2; i<=number; i++)
   {
      let sum=0;
      for(let j=2; j<i; j++)
      {
         if(i%j==0)
         {
            sum=1;
            break;
         }
      }
      if(sum==0)
      {
         console.log(i);
      }
   }
}
console.log(l(number));

//Return all the palindromes in an array
const Palindromes = (words) => 
words.filter((word) => 
word.split("").reverse().join("") === word);

console.log(Palindromes(["hello", "noon","121"]));
  