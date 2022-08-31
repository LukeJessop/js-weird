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




// let a = ''
// let b = '0'
// let c = 'hello'
// let d = 1
// let e = false
// let f = true
// let g = 0

// function equalsZero(arg){
//     if(arg == 0){
//         return arg + ' loose = zero!'
//     }else{
//         return arg + ' not'
//     }
// }
// function strictEqualsZero(arg){
//     if(arg === 0){
//         return arg + ' strict = zero!'
//     }else{
//         return arg + ' not'
//     }
// }

// COERSION IS WHY STRICT EQUALS EXISTS

//you can create an object like this apparently vv I did not know this
//i created an object "person" that has 3 values: firstname, lastname, and another object "creditcard" that also has 2 values: securitycode, and number.
//i can see this process would be much more robust/reusable than just declaring a function with all of the variables 
//in dev mountain i learned this as "dot notation" and "bracket notation" dot notation is the one more used im pretty sure

// var person = new Object()
// var creditCard = new Object()
// person['firstname'] = 'tony'
// person['lastname'] = 'bozos'
// person['creditcard'] = creditCard
// creditCard['securitycode'] = 323
// creditCard['number'] = 1092839382729376

// var firstnameProperty = 'firstname'

// // console.log(person)
// // console.log(person[firstnameProperty])
// console.log(person.creditcard)
// //^^^

//ABOVE THIS LINE IS AN OBJECT CREATION MUCH MORE LINES OF CODE
//BELOW THIS LINE IS AN OBJECT LITERAL CREATION WHICH IS MUCH FASTER
// var person = {
//     firstname: 'tony',
//     lastname: 'bozos',
//     creditcard: {
//         number: 1234129012701,
//         security: 801,
//         exp: '12/01/29'
//     }
// }
// console.log(person)



//faking namespaces

// var greeting = 'hello'
// var greeting = 'hola'

// console.log(greeting) //this will return 'hola'

// //we can seperate them by using a fake namespace

// var english = {greeting: 'hello'}
// var spanish = {greeting: 'hola'}

// console.log(english.greeting)
// console.log(spanish.greeting)


//FUNCTIONS ARE OBJECTS

// function greet() {
//     console.log('hi')
// }

// greet.language = 'english'

// console.log(greet.language)

//this is crazy vv 
// function log(a){ // "a" is now the function we passed inside the invocation so we can now invoke "a" as if it were a function
//     a()
// }

// log(function(){
//     console.log('hello')
// })




// assigning variables by value
// using primative types, the value that is assigned is given a new space in memory that is allowed to be mutated without changing the previous value 
// var a = 3
// var b

// b = a
// a = 2
// console.log(b)
// console.log(a)

// //assigning variables by reference
// //Variables that are assigned by reference are pointing to the same memeory space, so any mutations you do to one value will change the other
// //only happens with objects (so functions and arrays also)
// var c = {greeting: 'hello'}
// var d

// d = c
// c.greeting = 'hi'

// console.log(d)
// console.log(c)

// var f = [1, 2, 3]
// var l

// l = f
// l.reverse()

// console.log(l)
// console.log(f)



