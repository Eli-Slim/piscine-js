const matchCron = (cronPattern, date) => {
    const minute = date.getUTCMinutes()
    const hour = date.getUTCHours()
    const dayOfMonth = date.getUTCDate()
    const month = date.getUTCMonth() + 1
    const dayOfWeek = (date.getUTCDay() + 1) % 7 || 7
    const [cronMinute, cronHour, cronDayOfMonth, cronMonth, cronDayOfWeek] = cronPattern.split(' ')
    
    const match = (cronPart, value) => cronPart === '*' || parseInt(cronPart) === value
    
    return (
        match(cronMinute, minute) &&
        match(cronHour, hour) &&
        match(cronDayOfMonth, dayOfMonth) &&
        match(cronMonth, month) &&
        match(cronDayOfWeek, dayOfWeek)
    )
}
    
    // Example usage:
    console.log(matchCron('9 * * * *', new Date('2020-05-30 18:09:00'))); // -> true
    console.log(matchCron('9 * * * *', new Date('2020-05-30 19:09:00'))); // -> true
    console.log(matchCron('9 * * * *', new Date('2020-05-30 19:21:00'))); // -> false
