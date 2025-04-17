// *******************Leap year find out*******************

// function isLeapYear(year) {

//     if (year % 4 === 0) {
//         console.log(year + ' is a leap year');
//         return true;
//     } else {
//         console.log(year + ' is not a leap year');
//         return false;
//     }
// }

// let thisYear = isLeapYear(2027);
// console.log('Is this year a leap year?', thisYear);




// *******************Leap year find out/2*******************


// function isLeapYear(year) {

//     if (year % 100 !== 0 && year % 4 === 0) {
//         console.log(year + [" "], "This is a leap year")
//         return true;
//     } else {
//         console.log(year + [" "], "This is not a leap year")
//         return false;
//     }
// }


// let aiBocor = isLeapYear(2052);
// console.log("Is this year a leap year?", aiBocor);



function isLeapYear(year) {

    if (year % 4 === 0 && year % 100 !== 0) {
        console.log(year + " This is a leap year")
        return true;
    } else {
        console.log(year + " This is not a leap year")
    }
}


let leapYearKi = isLeapYear(2024);
let leapYearki2 = isLeapYear(2025)
console.log("Is this year a leap year?", leapYearKi);