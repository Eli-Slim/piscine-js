const RNA = (str) => {
    let arr = [...str]
    let arr1 = []
    if(arr.length > 0){
        arr.forEach(e => {
            if(e === 'G'){
                arr1.push('C')
            }else if(e === 'C'){
                arr1.push('G')
            }else if(e === 'T'){
                arr1.push('A')
            }else if(e === 'A'){
                arr1.push('U')
            }
        })
    }
    return arr1.join("")
}

console.log(RNA('TAGC'))