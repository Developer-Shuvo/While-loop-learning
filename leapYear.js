// *******************Leap year find out*******************

function isLeapYear(year) {

    if (year % 4 === 0) {
        console.log(year + ' is a leap year');
        return true;
    } else {
        console.log(year + ' is not a leap year');
        return false;
    }
}

let thisYear = isLeapYear(2027);
console.log('Is this year a leap year?', thisYear);