/* Problem-01
You are given an array:
 var fruits = ['Apple', 'Banana', 'Orange'];
a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
b) Remove ‘Orange’ and add ‘Watermelon’.
*/
//1.a
var fruits =['Apple','Banana','Orange'];
var positionIndexBanana = fruits.indexOf('Banana');
console.log(positionIndexBanana);
fruits.splice(positionIndexBanana, 1, 'Mangoo');
console.log(fruits);
//1.b
fruits.pop('Orange');
fruits.push('Watermelon');
console.log(fruits);

/** Problem-02
 * You and your friends Tom, Jane, Peter and John got their final exam results. Your total 
score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56
and John’s total score is 40. The grading chart is 
80 or above A grade
60 or above B grade
50 or above C grade
40 or above D grade
39 or less => F grade
Write a program to find your and your friends’ grades using if-else.
*/
var hasibTotalScore = 85;
var tomTotalScore = 66;
var janeTotalScore = 95;
var peterTotalScore = 56;
var johnTotalScore = 40;
//hasib's grade
if (hasibTotalScore >= 80){ console.log("Hasib got A grade");}
else if (hasibTotalScore >= 60){ console.log("Hasib got B grade");}
else if (hasibTotalScore >= 50){ console.log("Hasib got C grade");}
else if (hasibTotalScore >= 40){ console.log("Hasib got D grade");}
else if (hasibTotalScore <= 39){ console.log("Hasib got F grade");}
//Tom's grade
if (tomTotalScore >= 80){ console.log("Tom got A grade");}
else if (tomTotalScore >= 60){ console.log("Tom got B grade");}
else if (tomTotalScore >= 50){ console.log("Tom got C grade");}
else if (tomTotalScore >= 40){ console.log("Tom got D grade");}
else if (tomTotalScore <= 39){ console.log("Tom got F grade");}
//Jane's grade
if (janeTotalScore >= 80){ console.log("Jane got A grade");}
else if (janeTotalScore >= 60){ console.log("Jane got B grade");}
else if (janeTotalScore >= 50){ console.log("Jane got C grade");}
else if (janeTotalScore >= 40){ console.log("Jane got D grade");}
else if (janeTotalScore <= 39){ console.log("Jane got F grade");}
//Peter's grade
if (peterTotalScore >= 80){ console.log("Peter got A grade");}
else if (peterTotalScore >= 60){ console.log("Peter got B grade");}
else if (peterTotalScore >= 50){ console.log("Peter got C grade");}
else if (peterTotalScore >= 40){ console.log("Peter got D grade");}
else if (peterTotalScore <= 39){ console.log("Peter got F grade");}
//john's grade
if (johnTotalScore >= 80){ console.log("John got A grade");}
else if (johnTotalScore >= 60){ console.log("John got B grade");}
else if (johnTotalScore >= 50){ console.log("John got C grade");}
else if (johnTotalScore >= 40){ console.log("John got D grade");}
else if (johnTotalScore <= 39){ console.log("John got F grade");}

/** Problem-03
 * 1. You are given three numbers 13, 79, and 45. Write a program that will print the 
largest number using if-else.
2. You are given a triangle with the sides 9, 8, 9. Write a program to check whether a
triangle is Isosceles or not using if-else.
Isosceles => two sides are equal
 */
//p01
var num1 = 13;
var num2 = 79;
var num3 = 45;
if (num1 > num2 && num1 > num3 ){ console.log('13 is the Largest Number');}
else if (num2 > num1 && num2 > num3 ){ console.log('79 is the Largest Number');}
else if (num3 > num2 && num3 > num1 ){ console.log('45 is the Largest Number');}
//p02
var t1 = 9;
var t2 = 8;
var t3 = 9;
if(t1 == t2 || t1 == t3 || t2 == t3)
{ 
    console.log('triangle is Isosceles')
}
else {
    console.log('triangle is not Isosceles')
}









