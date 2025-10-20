// Dates

let myDate = new Date() 
// console.log(myDate); // 2025-10-20T10:05:59.848Z
// console.log(myDate.toString()); // Mon Oct 20 2025 10:05:59 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Mon Oct 20 2025
// console.log(myDate.toLocaleString()); // 10/20/2025, 10:05:59 AM
// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 9, 24)
let myCreatedDate = new Date(2023, 0, 24, 5, 3)
// console.log(myCreatedDate);   // 2023-10-24T00:00:00.000Z
// console.log(myCreatedDate.toDateString()); // Tue Oct 24 2023
// console.log(myCreatedDate.toLocaleString()); // 1/24/2023, 5:03:00 AM

let myTimeStamp = Date.now
// console.log(myTimeStamp()); // 1760955378779
// console.log(myCreatedDate.getTime()); // 1674536580000

// console.log(Math.floor(Date.now()/1000)); // 1760955606

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: ''
})
