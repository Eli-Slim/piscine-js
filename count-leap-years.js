const countLeapYears = (date) => {
    let count = 0;
    let year = new Date(date).getFullYear()
    for (let i = year-1; i > 0; i--) {
        if (new Date(i, 1, 29).getDate() === 29) {
            count++;
        }
    }
    return count;
    
}

console.log(countLeapYears('0001-12-01'))
console.log(countLeapYears('1664-08-09'))
console.log(countLeapYears('2020-01-01'))
console.log(countLeapYears('2048-12-08'))