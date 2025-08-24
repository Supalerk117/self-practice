export function sum(arr){
    return arr.reduce((a,b)=>a+b,0)
}

export function max(arr){
    let maxNum = 0
    for (let i of arr){
        if(i > maxNum){
            maxNum = i
        }
    }
    return maxNum
}