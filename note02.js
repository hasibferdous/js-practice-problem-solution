/**
 * --------------------------------------------------------------------------------
 * ARRAY
 * --------------------------------------------------------------------------------
 * 1. What is the purpose of array?
 * 2. How to declare an array in JS?
 * 3. Number of elements in an array
 * 4. What is index?
 * 5. Find the value of an element by index
 * 6. Change an element by index
 * 7. Get the index of an element by the value
 * 8. What does it mean when get undefined while getting the value of an element
 * 9. How can you add an element to an array at the last positon
 * 10. How can you remove the last element from array
 * 11. Add an element at the first position of an array
 * 12. Remove the first element of an array 
 * --------------------------------------------------------------------------------
 */


//1. What is the purpose of array?
 /**
  * In JavaScript, array is a single variable that is used to store different elements. It is often used when we 
  * want to store list of elements and access them by a single variable. Unlike most languages where array is a 
  * reference to the multiple variable, in JavaScript array is a single variable that stores multiple elements.
    
    Declaration of an Array 
    There are basically two ways to declare an array. 
    Example: 
            var House = [ ]; // method 1 
            var House = new Array(); // method 2 
        But generally method 1 is preferred over the method 2. Let us understand the reason for this. 
  */


//2. How to declare an array in JS?
 /**
  * Declaration of an Array 
    There are basically two ways to declare an array. 
    Example: 
            var House = [ ]; // method 1 
            var House = new Array(); // method 2 
        But generally method 1 is preferred over the method 2. Let us understand the reason for this. 
  */


//3. Number of elements in an array
 /**
  * var variableName = [elements];
  */


// 4. What is index?
 /**
  * The 'index' is the postion of the values in an array.
  * 
  * The indexOf() method returns the first index (position) of a specified value.

    The indexOf() method returns -1 if the value is not found.

    The indexOf() method starts at a specified index and searches from left to right.

    By default the search starts at the first element and ends at the last.

    Negative start values counts from the last element (but still searches from left to right).
  */


//5. Find the value of an element by index
 /**
  * The indexOf() method returns the position of a specified value or element.
  */
  var fruits = [ 'apple', 'banana', 'orange', 'watermelon'];
  var index = fruits.indexOf('watermelon')
    console.log(index);


//6. Change an element by index
 /**
  * 
  */
  var fruits =['Apple','Banana','Orange'];
  var positionIndexBanana = fruits.indexOf('Banana');
  console.log(positionIndexBanana);
  fruits[positionIndexBanana] = 'Mango'
  //fruits.splice(positionIndexBanana, 1, 'Mangoo');
  console.log(fruits);


//7. Get the index of an element by the value

  var fruits =['Apple','Banana','Orange'];
  var positionIndexBanana = fruits.indexOf('Banana');
  console.log(positionIndexBanana);
  


//8. What does it mean when get undefined while getting the value of an element
 /**
  * Array index মোট উপাদান এর চেয়ে বেশি মান দিলে undefined দেখাবে।
  * 
  */
  var number = [10, 20, 50];
  console.log(number[5]);
  //If Array value is not there, then indexOf will be -1
  var number = [10, 20, 50];
  console.log(number.indexOf(30));


//9. How can you add an element to an array at the last positon
  var fruits =['Apple','Banana','Orange'];
  fruits.push('Watermelon');
  console.log(fruits);
 

//10. How can you remove the last element from array
  var fruits =['Apple','Banana','Orange'];
  fruits.pop('Orange');
  console.log(fruits);


//11. Add an element at the first position of an array
  var fruits =['Apple','Banana','Orange'];
  fruits.unshift('Watermelon');
  console.log(fruits);


//12. Remove the first element of an array
  var fruits =['Apple','Banana','Orange'];
  fruits.shift();
  console.log(fruits);
   