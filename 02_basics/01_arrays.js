 //Array
 // note [ read shallow copy and deep copy] ***important***
 const myArr = [0, 1, 2, 3, 4, 5]
 const MyHeros = ["ironman", "thor", "spiderman"]

 const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[0]); // 0
console.log(myArr[1]); // 1

 // Array methods

 myArr.push(6)
 console.log(myArr); //[0, 1, 2, 3, 4, 5, 6]


 
 myArr.push(7)
 console.log(myArr);//[0, 2, 3, 4, 5, 6, 7]



 myArr.pop()
 console.log(myArr); //[0, 1, 2, 3, 4, 5, 6]


 myArr.unshift(8)
 console.log(myArr); //[8, 0, 1, 2, 3, 4, 5, 6]




 myArr.shift()
 console.log(myArr); //[0, 1, 2, 3, 4, 5, 6]





 console.log(myArr.includes(8)); // false
 console.log(myArr.indexOf(9)); // -1
 console.log(myArr.indexOf(19)); // -1
 console.log(myArr.indexOf(3)); // 3



 const newArr = myArr.join()
 console.log(myArr);
 console.log(newArr); // 0,1,2,3,4,5
 console.log(typeof newArr); // string





// Slice, Splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

