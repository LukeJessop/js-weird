//types

// let a //this will be undefined
// let b = 'Hello World!' //this will be a string
// let c = 1 //this will be a number
// let d = true //this will be a boolean
// let e = null //type will be null

// console.log(a, b, c, d, e)

// //operators

// console.log(c += 2) //this should equal 3 because if you read from left to right you are making 2 = c and also doing c + 2





// //coersion

// console.log('12' + 1) //js coerses 1 from a number into a string making this return the string '121'

// console.log( 3 < 2 < 1) //returns true because it starts off reading left to right and says "3 is greater than 2" creating this (false < 1)
// //when js coerses false to a numerical value, then it will return 0 making (0<1) = true


    // console.log(Number(a)) //NaN is returned because undefined is not a number
    // console.log(Number(b)) //NaN is returned because the string does not contain a numerical value that can be coersed
    // console.log(Number(c)) //1 is returned because this is already a number
    // console.log(Number(d)) //1 is returned because when true is coersed into a number it is 1
    // console.log(Number(e)) //0 is returned




let a = ''
let b = '0'
let c = 'hello'
let d = 1
let e = false
let f = true
let g = 0

function equalsZero(arg){
    if(arg == 0){
        return arg + ' loose = zero!'
    }else{
        return arg + ' not'
    }
}
function strictEqualsZero(arg){
    if(arg === 0){
        return arg + ' strict = zero!'
    }else{
        return arg + ' not'
    }
}

// COERSION IS WHY STRICT EQUALS EXISTS

