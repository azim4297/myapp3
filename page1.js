function isEven(number){
    if(number%2==0){
        console.log(`${number} is even`)
    }else{
        console.log(`${number} is not even`)
    }

}
isEven(10)
isEven(11)

function isOdd(number){
    if(number%2!=0){
        console.log(`${number} is odd`)
    }else{
        console.log(`${number} is not odd`)
    }

}
isOdd(9)
isOdd(8)

function subtract(p1,p2){
    console.log(`${p1}-${p2}=${p1-p2}`)
}
subtract(10,6)