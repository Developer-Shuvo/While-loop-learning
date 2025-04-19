// function oddAverage(numbers) {

//     for (let number of numbers) {
//         if (number % 2 === 1) {
//             console.log(number + " is an odd number")

//         }
//     }
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let avg = oddAverage(numbers);
// console.log("Average of odd numbers is:", avg);

// function oddAverage(numbers) {

//     for (const number of numbers) {
//         if (number % 2 === 1) {
//             console.log(number);
//         }

//     }
// }


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const avg = oddAverage(numbers);
// console.log("Average of odd numbers is:", avg);



function oddAverage(numbers) {
    let odds = []; // Define the odds array

    for (let number of numbers) {

        if (number % 2 === 1) {
            console.log('This is an odd number:=', number);
            odds.push(number);
        }

    }

    // console.log('listed odd numbers are :=', odds);
    let sum = 0;
    for (let number of odds) {
        sum = sum + number;
    }

    let count = odds.length;
    console.log('length of this array is :=', count);
    console.log('Sum of odd numbers is :=', sum);


    // Calculate the average of odd numbers
    let avg = sum / count;
    console.log('Average of odd numbers is :=', avg);
    return avg;





}

let numbers = [42, 23, 6, 87, 56, 98, 90, 65, 32, 15];
let avg = oddAverage(numbers);
console.log("Average of the odd numbers is :=", avg);