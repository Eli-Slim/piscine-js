const { underscoredIf } = require("sequelize/lib/utils")

const fusion = (obj1, obj2) => {
    let nobj = {}
    for(let [key, value] of Object.entries(obj1)){
        nobj[key] = value
    }
    for(let [key, value] of Object.entries(obj2)){
        if(nobj.hasOwnProperty(key)){
            if(typeof value === 'string'){
                nobj[key] = nobj[key].concat(value)
            }else if (typeof value === Array.isArray(value)){
                nobj[key] = nobj[key].concat(value)
            }else if(typeof value === 'Number'){
                nobj[key] += value
            }else if(typeof value === 'Object'){
                nobj[key] = fusion(nobj[key], value)
            }
        }else{
            nobj[key] = value
        }
    }
    return nobj
}