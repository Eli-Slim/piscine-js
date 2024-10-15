const pick = (obj, arr) => {
    let nobj = {}
    if(typeof arr === 'string'){
        arr = arr.split(' ')
    }
    for(let [key, value] of Object.entries(obj)){
        if(arr.includes(key)){
            nobj[key] = value
        }
    }
    return nobj
}

const omit = (obj, arr) => {
    let nobj = {}
    if(typeof arr === 'string'){
        arr = arr.split(' ')
    }
    for(let [key, value] of Object.entries(obj)){
        if(!arr.includes(key)){
            nobj[key] = value
        }
    }
    return nobj
}