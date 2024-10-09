function firstDayWeek(number, string) {
    let firstDayYear = new Date("01-01-0000")
    firstDayYear.setFullYear(parseInt(string))
    
    let yearDays = (number*7)-6
    firstDayYear.setDate(yearDays)
    let weekStart = new Date(firstDayYear)    
    
    while (weekStart.getDay() !== 1 && weekStart.getDate()!== 1) {
       weekStart.setDate(weekStart.getDate() - 1)
    }
    
    if (weekStart.getFullYear() < string) {
        return `01-01-${string}`
    }
    
    let dd = String(weekStart.getDate()).padStart(2, '0')
    let mm = String(weekStart.getMonth() + 1).padStart(2, '0')
 
    return `${dd}-${mm}-${string}`
}

console.log(firstDayWeek(1, '1000'));  // '01-01-1000'
console.log(firstDayWeek(52, '1000')); // '22-12-1000'
console.log(firstDayWeek(2, '0001'));  // '08-01-0001'
console.log(firstDayWeek(43, '1983')); // '17-10-1983'
console.log(firstDayWeek(23, '0091')); // '04-06-0091'
console.log(firstDayWeek(2, '2017'));  // '02-01-2017'
