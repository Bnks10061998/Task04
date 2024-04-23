//Print odd number in an array
//Anonymous
var array=[1,2,3,4,5,6,7,8,9,];
let odd=function(array){
    for(var i = 0 ; i< array.length ; i++){
          if(array[i]%2!=0){
              console.log(array[i]);
          } 
     }
  }
odd(array);
//IIFE
var array=[1,2,3,4,5,6,7,8,9];
 (function (array)
 {
    for(var i=0; i<array.length; i++)
    {
      if(array[i]%2!==0)
      {
         console.log(array[i]);
      }
    }
 })(array);

//Title Caps string in an array
//Anonymous
var str="my name is kaviya";
let def=function(str) {
   str = str.toLowerCase().split(' ');
   
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' '); 
} 
console.log(def(str));
//IIFE
var str="my name is kaviya";
(function (str) {
   
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   }
   console.log(str.join(' '));
   
})(str);

// Sum of all numbers in an array
//Anonymous

var arr=[1,2,3,4,5,6,7,8,9];
var sum=0;
let value=function (arr)
{
   for(let i=0; i<arr.length; i++)
   {
     sum=sum+arr[i];
   }
   
   console.log(sum);
}
value(arr);
//IIFE
var arr=[1,2,3,4,5,6,7,8,9,10];
var sum=0;
(function (arr)
{
   for(let i=0; i<arr.length; i++)
   {
     sum=sum+arr[i];
   }
   console.log(sum);
})(arr);

// Return all the prime number in an array
//Anonymous

let num=100;
let prime=function (n)
{
   for(let i=2; i<=num; i++)
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
prime(num);

//IIFE
let num=100;
(function (num)
{
   for(let i=2; i<=num; i++)
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
})(num);

// Return all the palindromes in an array
//Anonymous

let arr = ['121','amma'];
let palin = function(arr) {
let c = [];
for (let i = 0; i < arr.length; i++) {
let strarr = arr[i]
let revstr = strarr.split('').reverse().join('');
if (strarr == revstr) {
c.push(strarr);
}
}
console.log(c);
}
palin(arr);

//IIFE

( function () {
    var myArray = ['viicc', 'racecar', 'honda', 'malayalam'];
    var arr = myArray.filter(function (c, d) {
      var palindrome = c.split('').reverse().join('');
      if (c == palindrome) {
        console.log(myArray[d]);
      }
    });
  })()

//Return median of two sorted arrays of the same size.
//Anonymous
let arr1=[1,5,9,12,15]
let arr2=[3,4,7,10,11]


let n = arr1.length;

let median = function(arr1, arr2, n) {

    let i=0;
    let j=0;
    let value1 =0;
    let value2 =0;

    for(let count=0; count<=n; count++) {
       
      if(arr1[i]<arr2[j])
      {
        value1=arr1[i];
        i++;
      }
      else if(arr1[i]>arr2[j])
      {
        value2=arr2[j];
        j++;
      }
      else if(arr1[i] === arr2[j])
      {
        value1=arr1[i];
        i++;
      }
    }
   
    return (value1+value2)/2;
}

if(arr1.length === arr2.length)
{
    console.log('Median is',median(arr1,arr2,n))
}
else
{
  console.log('Array size should be equal for programm run')
}

//IIFE
function Solution(arr, n)
{
     if (n % 2 == 0) 
     {
       var z = n / 2;
       var e = arr[z];
       var q = arr[z - 1];
       var ans = (e + q) / 2;
       return ans;
     }
    else
     {
       var z = Math.floor(n / 2);
       return arr[z];
     }
}
var arr1 = [ -5, 3, 6, 12, 15 ];
var arr2 = [ -12, -10, -6, -3, 4, 10 ]; 
var i =  arr1.length;
var j =  arr2.length;
var l =  i+j;
const arr3 = arr1.concat(arr2);
arr3.sort(function(a, b) {
  return a - b;
});
console.log("Median = " + Solution(arr3, l));

//Remove duplicates from an array
//Anonymous
var array=[1,1,2,3,4,5];
let arr=function (array){
   let dup = [...new Set(array)];
   console.log(dup);
 }
 arr(array);

//IIFE
var array=[1,1,2,3,4,5];
(function (array){
   let dup = [...new Set(array)];
   console.log(dup);
 })
 (array);



// Rotate an array by k times
//Anonymous

  let Arr=function (a, n, k)
{
    k = k % n;
  
    for (let i = 0; i < n; i++) {
        if (i < k) {
  
           
            console.log(a[n + i - k] + " ");
        }
        else {
  
            
            console.log((a[i - k]) + " ");
        }
    }
   
}
  let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 1;
Arr(Array, N, K);


//IIFE
var Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var N = Arr.length;
var K = 1;
(function (a, n, k)
{
    k = k % n;
  
    for (let i = 0; i < n; i++) {
        if (i < k) {
  
           
            console.log(a[n + i - k] + " ");
        }
        else {
  
            
            console.log((a[i - k]) + " ");
        }
    }
   
})
(Arr, N, K);
