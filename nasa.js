const nasa = (N) => {
    let arr = []
    for(let i=1; i<=N; i++){
        if(i%5===0 && i%3===0){
            arr.push("NASA")
        }else if(i%3===0){
            arr.push("NA")
        }else if(i%5===0){
            arr.push("SA")
        }else{
            arr.push(i)
        }
    }
    return arr.join(" ")
}

console.log(nasa(20))