let arr=[0,1,2,3,4,5,6,7,8,9];

//Print odd numbers in array
let odd = function () {
  let odd = arr.filter(num => num %2 != 0)
  console.log(odd)
}
// odd()

//Convert all the strings to title caps in a string array
let titleCaps = function () {
  let strArr = ["hello world", 'bigg'];
  let titlecase = strArr.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  console.log(titlecase);
}

// titleCaps();

//Sum of all numbers in an array

let sumOfArr = function (){
  let sumOfAllArr = arr.reduce(function(sum,curr){
      sum += curr;
      return sum;
  }, 0);
  console.log(sumOfAllArr);
}
// sumOfArr();

//Return all the prime numbers in an array

let prime = function () {
  return arr.filter(function(n){
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return n > 1;
  });
};

// console.log(prime());

//Return all the palindromes in an array

let pallindrome = function(){
  let palinArr = ['Malayalam', 'dad', 'mom', 'nope'];
  let palindromeArr = palinArr.filter((str) => {
     let s = str.toLowerCase();
     let i = 0;
     let j = s.length - 1;
     while(i < j){
      if(s[i] != s[j]){
        return false;
      }
      i++;
      j--;
     }
     return true;
  })
  return palindromeArr;
}
// console.log(pallindrome());

//Remove duplicates from an array
let noDuplicates = function (){
  let dupArr = [1,2,2,3];
  let noDups = new Set(dupArr);
  return noDups;
}

// console.log(noDuplicates());

//Rotate an array by k times
let rotateArray = function(A, K) {
  if (A.length === K || K === 0) {
      return A;
  }
  K = K % A.length;
  for (let i = 0; i < K; i++) {
      A.unshift(A.pop());
  }
console.log(A)
}
// rotateArray([1,2,3,4,5],1)



//Arow Functions

//Print odd numbers in an array
let oddArr = () => {
  return arr.map(x => {
    if(x % 2 != 0){
      console.log(x);
    }
  })
}
// oddArr();

//Convert all the strings to title caps in a string array
let titleCaptials = () => {
  let strArr = ["hello world", 'bigg'];
  return strArr.map(word => {
    let strCaps = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    console.log(strCaps)
    return strCaps;
  });
}
// titleCaptials();

//Sum of all numbers in an array
let sumArr = () => {
  return arr.reduce(function(sum,curr){
      sum += curr;
      return sum;
  }, 0);
}
// console.log(sumArr());

//Return all the prime numbers in an array

let primeArr =  () => {
  return arr.filter(function(n){
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return n > 1;
  });
};

// console.log(primeArr());

//Return all the palindromes in an array

let pallindromesArr = () => {
  let palinArr = ['Malayalam', 'dad', 'mom', 'nope'];
  let palindromeArr = palinArr.filter((str) => {
     let s = str.toLowerCase();
     let i = 0;
     let j = s.length - 1;
     while(i < j){
      if(s[i] != s[j]){
        return false;
      }
      i++;
      j--;
     }
     return true;
  })
  return palindromeArr;
}

// console.log(pallindromesArr());