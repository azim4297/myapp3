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

function add(p1,p2){
    console.log(`${p1} + ${p2}= ${p1 + p2}`)
}
add(10,20)

function subtract(p1,p2){
    console.log(`${p1}-${p2}=${p1-p2}`)
}
subtract(10,6)

function cube(c){
    console.log(`cube of ${c}=${c*c*c}`)
}
cube(3)