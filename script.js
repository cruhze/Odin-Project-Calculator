function add(a,b){
    return a + b
}

function subtract(a,b){
    return a - b
}

function multiply(a,b){
    return a*b
}

function divide(a,b){
    if(b===0){
        return 'Cannot be divided by zero'
    }else{
        return a / b
    }
}

console.log(add(1,4))