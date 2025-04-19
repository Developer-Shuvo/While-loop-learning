// ****Double check ******

let manList = ['Karim', 'Karim', 'Rahim', 'Salam', 'Rahim', 'Salam', 'Jamal', 'Shakib', 'Shakib'];
let womanList = ['Sakina', 'Rokeya', 'Sakina', 'Fatema', 'Fatema', 'Jahanara', 'Shabana', 'Shirin'];
let moneyAmount = [100, 100, 100, 1500, 1500, 150, 200, 300, 150, 400, 550, 550, 400];

function doubleCheck(name) {
    // console.log(name);
    let nameHolder = [];
    for (let item of name) {
        if (nameHolder.includes(item) === false) {
            nameHolder.push(item);
        }
    }
    return nameHolder;
}

let uniqueList = doubleCheck(moneyAmount);
console.log(uniqueList);



// ***********************************************************************

let location = ['Dhaka', 'Dhaka', 'Chittagong', 'Chittagong', 'Khulna', 'Rajshahi', 'Khulna', 'Barisal', 'Sylhet', 'Rangpur', 'Sylhet',
    'Mymensingh'
];

function doubleCheckLocation(location) {
    let blank = [];
    for (let item of location) {
        if (blank.includes(item) === false) {
            blank.push(item);
        }
    }
    return blank;
}





let uniqueLocation = doubleCheckLocation(location);
console.log(uniqueLocation);