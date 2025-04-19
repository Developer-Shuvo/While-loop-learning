// *****************find out the average of even numbers******************

function evenAverage(numbers) {

    let evens = [];
    let sum = 0;
    for (let number of numbers) {
        if (number % 2 === 0) {
            console.log('This is an even number :=', number);
            evens.push(number);
        }
    }

    let count = evens.length;
    console.log('length of this array is :=', count);
    console.log('listed even numbers are :=', evens);

    for (let number of evens) {
        sum = sum + number;
    }

    let avg = sum / count;

    return avg;

    return avg;


}

let numbers = [42, 23, 6, 87, 56, 98, 90, 65, 32, 15, 33, 54, 87, 99, 100];
let avg = evenAverage(numbers);
console.log("Average of the even numbers is :=", avg);