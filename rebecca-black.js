const isFriday = (date) => {
    return new Date(date).getDay() === 5
}

const isWeekend = (date) => {
    return new Date(date).getDay() === 6 || new Date(date).getDay() === 0
}

const isLeapYear = (date) => {
    let year = new Date(date).getFullYear()
    return new Date(year, 1, 29).getDate() === 29
}

const isLastDayOfMonth = (date) => {
    let day = new Date(date).getDate()
    let month = new Date(date).getMonth() + 1
    let year = new Date(date).getFullYear()
    console.log(new Date(year, month, 0).getDate(), day)
    return new Date(year, month, 0).getDate() === day
}

console.log(isLastDayOfMonth('2025-04-30'))
