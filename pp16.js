/** p1
 * Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to 
help Harry calculate how much money the shopkeeper will return.
Input:
The first line of the input is the taka Harry’s mom gave him.
The second line is the cost of 1 kg of oranges and 1 kg of apples.
Output:
Print the result. 
Practice Problem 1
Sample Input:
1000
700
Output:
300
*/

//01
var oranges = 400;
var apples = 300;
var totalPrice = apples + oranges;
var givenMoney = 1000;
console.log(givenMoney - totalPrice);


/**p2
 * Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and 
Bangla of a student.
Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.
Output:
Print the result in 2 decimal places.
Practice Problem 2
Sample Input:
75.25, 65, 80, 35.45, 99.50
Output:
71.04
*/

//02
var math = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.50;

var totalMark = math+biology+chemistry+physics+bangla;
var averageMark = totalMark/5;
var averageMark2DecimalPlaces = averageMark.toFixed(2);

console.log(averageMark2DecimalPlaces);


/**p3
 * John’s teacher gave him two variables. Each variable contains a string. John’s teacher asked him to 
combine these two strings and print them in one line. Help John write the program.
Input:
The first and the second lines of the input contain the strings.
Output:
Print the result in one line.
Practice Problem 3
Sample Input:
I am going to be
an awesome web developer
Output:
I am going to be an awesome web developer
*/

//03
var one = "I am going to be";
var two = "an awesome web developer";

var full = one + ' ' + two;
console.log(full);


/**p4
 * Sarah’s mother is teaching her mathematics. She gave Sarah a number and asked her what the 
remainder would be if she divided the number by 5. Help Sarah write the program.
Input:
The first line of the input contains the number.
Output:
Print the remainder.
Practice Problem 4
Sample Input:
119
Output:
4
*/

//04
var number = 119;
var remainder = 119%5;
console.log(remainder);

