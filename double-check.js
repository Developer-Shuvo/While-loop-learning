// **************************Double check **********************************

// let manList = ['Karim', 'Karim', 'Rahim', 'Salam', 'Rahim', 'Salam', 'Jamal', 'Shakib', 'Shakib'];
// let womanList = ['Sakina', 'Rokeya', 'Sakina', 'Fatema', 'Fatema', 'Jahanara', 'Shabana', 'Shirin'];
// let moneyAmount = [100, 100, 100, 1500, 1500, 150, 200, 300, 150, 400, 550, 550, 400];

// function doubleCheck(name) {
//     // console.log(name);
//     let nameHolder = [];
//     for (let item of name) {
//         if (nameHolder.includes(item) === false) {
//             nameHolder.push(item);
//         }
//     }
//     return nameHolder;
// }

// let uniqueList = doubleCheck(moneyAmount);
// console.log(uniqueList);



// ***********************************************************************

// let location = ['Dhaka', 'Dhaka', 'Chittagong', 'Chittagong', 'Khulna', 'Rajshahi', 'Khulna', 'Barisal', 'Sylhet', 'Rangpur', 'Sylhet',
//     'Mymensingh'
// ];
// let bikes = ['Hero', 'Bajaj', 'Yamaha', 'Honda', 'Suzuki', 'TVS', 'Hero', 'Bajaj', 'Yamaha', 'Honda', 'Suzuki', 'TVS'];

// function doubleCheckLocation(location) {
//     let blank = [];
//     for (let item of location) {
//         if (blank.includes(item) === false) {
//             blank.push(item);
//         }
//     }
//     return blank;
// }


// let uniqueLocation = doubleCheckLocation(bikes);
// console.log(uniqueLocation);





// ***********************************************************************

let products = ['shampo', 'soap', 'toothpaste', 'toothbrush', 'shampo', 'soap', 'toothpaste', 'toothbrush', 'shampo', 'soap', 'toothpaste', 'toothbrush'];

let fruits = ['banana', 'apple', 'orange', 'banana', 'apple', 'orange', 'banana', 'apple', 'orange', 'banana', 'apple', 'orange'];



function doubleCheckProducts(products) {

    let blank = [];
    for (let item of products) {
        if (blank.includes(item) === false) {
            blank.push(item);
        }

    }
    return blank;



}


let differentProducts = doubleCheckProducts(fruits);
console.log(differentProducts);
console.log(differentProducts = doubleCheckProducts(products)); // different Console log ***