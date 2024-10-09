function isValid(date){
    let time = new Date(date)
    if(time.toString() === 'Invalid Date'){
        return false
    }
    if(isNaN(time.getTime()) && !(time instanceof Date)){
        return false
    }
    return true
}

function isAfter(date1, date2){
    if(date1 > date2){
        return true
    }else{
        return false
    }
}

function isBefore(date1, date2){
    if(date1 < date2){
        return true
    }else{
        return false
    }
}

const isFuture = (date) => {
    if(isValid(date)){
        return isAfter(date, Date.now())
    }
}

const isPast = (date) => {
    if(isValid(date)){
        console.log('checking if %s is in the past', date)
        return isBefore(date, Date.now())
    }
}
