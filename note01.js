/**------------------------
 * Variable 
 * ------------------------
 * 1. What is JavaScript?
 * 2. How does JS work?
 * 3. What is variable?
 * 4. Declare a variable
 * 5. Type of variable? How can you find out type of a variable?
 * 6. Primitive and non-primitive data types
 * 7. Naming Convention of JS variables
 * 8. Math operation +, -, *, /, %
 * 9. Short hand: +=, -=, *=, /=
 * 10. ++, --
 * 11. parseInt, ParseFloat
 * 12. toFixed 
 * ----------------------------------
 */


//1. What is JavaScript?
/**
 * JavaScript is the Programming Language for the Web.
 * JavaScript can update and change both HTML and CSS.
 * JavaScript can calculate, manipulate and validate data.
 * 
 * JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.
 * JavaScript has dynamic typing, prototype-based object-orientation, and first-class functions. 
 * JavaScript is multi-paradigm, supporting event-driven, functional, and imperative programming styles. 
 * JavaScript has application programming interfaces (APIs) for working with text, dates, regular expressions, 
 *  standard data structures, and the Document Object Model (DOM).
 */


//2. How does JS work?
 /**
  * 
  */


//3. What is variable?
 /**
  * Variable means anything that can vary. 
  * In JavaScript, a variable stores the data value that can be changed later on.
  * Use the reserved keyword "var" to declare a variable in JavaScript.
  * 4 Ways to Declare a JavaScript Variable:
  *  Using var
  *  Using let
  *  Using const
  *  Using nothing
  */


//4. Declare a variable
 /** 
  * 4 Ways to Declare a JavaScript Variable:
  *  Using var
  *  Using let
  *  Using const
  *  Using nothing
  * 
  * Syntax:
  *  var <variable-name>;
  *  var <variable-name> = <value>;
  */


//5. Type of variable? How can you find out type of a variable?
 /** 
  * In JavaScript there are 5 different data types that can contain values:
        string
        number
        boolean
        object
        function
  * "typeof" is a JavaScript keyword that will return the type of a variable when you call it. 
  *  You can use this to validate function parameters or check if variables are defined.
  *     var x = 12345; 
        console.log(typeof x) // number
        x = 'string'; 
        console.log(typeof x) // string
        x = { key: 'value' };
        console.log(typeof x) // object
  */


//6. Primitive and non-primitive data types
 /**
  * Data Types: Every Variable has a data type that tells what kind of data is being stored in a variable. 
  * There are two types of data types in JavaScript namely Primitive data types and Non-primitive data types.

        Primitive data types: The predefined data types provided by JavaScript language are known as primitive data 
            types. Primitive data types are also known as in-built data types.

        Non-primitive data types: The data types that are derived from primitive data types of the JavaScript language
            are known as non-primitive data types. It is also known as derived data types or reference data types.

    There are five types of primitive data types in Javascript.

        1. Number: Number data type in javascript can be used to hold decimal values as well as values without 
                   decimals.
        2. String: The string data type in javascript represents a sequence of characters that are surrounded by 
                   single or double quotes.
        3. Undefined: The meaning of undefined is ‘value is not assigned’.
        4. Boolean: The boolean data type can accept only two values i.e. true and false.
        5. Null: This data type can hold only one possible value that is null.

    The non-primitive data types are as follows:

        1. Object: Object in Javascript is an entity having properties and methods. Everything is an object in 
                  javascript.
        2. Array: With the help of an array, we can store more than one element under a single name.
                  JavaScript does not support two-dimensional arrays. but we can do this by creating an array of 
                  an array.
  */


//7. Naming Convention of JS variables
 /**
  * A variable name should accurately identify your variable. When you create good variable names, your 
  * JavaScript code becomes easier to understand and easier to work with. 
  * Properly naming variables is really important! Here are rules JavaScript has for naming variables:

        Variable names cannot contain spaces.

        Variable names must begin with a letter, an underscore (_) or a dollar sign ($).

        Variable names can only contain letters, numbers, underscores, or dollar signs.

        Variable names are case-sensitive.

    
    Certain words may not be used as variable names, because they have other meanings within JavaScript. 
    Check out the complete list of the reserved words.
  * Many professional programmers agree that there are best practices to keep in mind when naming your variables:

        Don’t use names that are too short. Simple one-letter names or names that don’t make sense are not a 
        good option when naming variables.

        Use more than one word to name your variable. This will ensure your variable name is precise.

        When using more than one word in your variable names, always put the adjective to the left. For example, 
        this is correct: var greenGrass.

        Pick a style for names with more than one word, and stick to it. The two most common ways to join words to 
        create a name are camelCase and using an underscore (_). JavaScript is flexible — either method works.
  */


//8. Math operation +, -, *, /, %
 /**
  * Adding
    The addition operator (+) adds numbers:

        Example
        let x = 5;
        let y = 2;
        let z = x + y;

    Subtracting
    The subtraction operator (-) subtracts numbers.

        Example
        let x = 5;
        let y = 2;
        let z = x - y;
    
    Multiplying
    The multiplication operator (*) multiplies numbers.

        Example
        let x = 5;
        let y = 2;
        let z = x * y;

    Dividing
    The division operator (/) divides numbers.

        Example
        let x = 5;
        let y = 2;
        let z = x / y;

    Remainder
    The modulus operator (%) returns the division remainder.

        Example
        let x = 5;
        let y = 2;
        let z = x % y;
  */


//9. Short hand: +=, -=, *=, /=
 /**
  * Assignment operators assign values to JavaScript variables.

        Operator	Example	    Same As
        =	        x = y	    x = y
        +=	        x += y	    x = x + y
        -=	        x -= y	    x = x - y
        *=	        x *= y	    x = x * y
        /=	        x /= y	    x = x / y
        %=	        x %= y	    x = x % y
        **=	        x **= y	    x = x ** y
    The addition assignment operator (+=) adds a value to a variable.

        Assignment
        let x = 10;
        x += 5;
  * 
  */

//10. ++, --
 /**
  * Incrementing
    The increment operator (++) increments numbers.

        Example
        let x = 5;
        x++;
        let z = x;

    Decrementing
    The decrement operator (--) decrements numbers.

        Example
        let x = 5;
        x--;
        let z = x;
  */


//11. parseInt, ParseFloat
 /**
  * In short answer, with parseInt() you can parses a string into Integer Number, and with parseFloat() you can parses a string into Floating Number.
    Syntax
        parseFloat(value)
    Syntax
        parseInt(string, radix)
            
  */


//12. toFixed
 /**
  * The toFixed() method converts a number to a string.
    The toFixed() method rounds the string to a specified number of decimals.
    Examples
        let num = 5.56789;
        let n = num.toFixed();

        let num = 5.56789;
        let n = num.toFixed(2); 
  */

