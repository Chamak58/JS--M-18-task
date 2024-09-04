/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

//--------if/else-if/else----------

let fare = 500;
let children = false;
let age = 68;
let students = false;
let seniorCitizens = false;

if(children === true && age <= 10){
    console.log('Free')
}
else if(students === true){
    console.log(fare - [fare * 50 / 100])
}
else if(seniorCitizens === true && age >= 60){
    console.log(fare - [fare * 15 / 100])
}
else{
    console.log(fare)
}
//------------ternary---------

// let children = true;
// let age = 8;
// fare = children === true && age <= 10? 'Free' : fare;
// console.log(fare)

// let student = true;
// fare = student === true ? fare * 50 / 100 : fare;
// console.log(fare)

// let seniorCitizens = true;
// let age = 75;
// fare = seniorCitizens === true && age >= 60 ? fare - [fare * 15 / 100] : fare;
// console.log(fare)
