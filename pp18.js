var roastGiven = 0;
while(roastGiven <7) {
    console.log('Roast Den, Please!');
    console.log(roastGiven);
    roastGiven++;
}

//even number
var number = 0;
while(number <=20) {
    
    console.log(number);
    number = number+2;
}

//odd number

var number = 1;
while(number <=20) {
    
    console.log(number);
    number = number+2;
}

//even number using for loop
console.log('Even Number');
for ( var i= 0; i <=20; i+= 2){
    
    console.log(i);
}

//odd number using for loop
console.log('Odd Number');
for ( var i= 1; i <=20; i+= 2){
    
    console.log(i);
}

//for array
console.log('Number of array elements');
var numbers = [45, 78, 84, 65, 43, 51, 21];
for (var i =0; i< numbers.length; i++){
    var number = numbers[i];
    console.log(number);
}

//break in loop

for (var i = 1; i <= 20; i++) {
    console.log(i)
        if(i > 5) {
            break;
        }
    }


//break in loop for array
console.log('Number of array elements');
var numbers = [45, 78, 84, 65, 93, 51, 21];
for (var i =0; i< numbers.length; i++){
    var number = numbers[i];
    if(number > 90){
        break;
    }
    console.log(number);
}

//continue in loop for array
console.log('Number of array elements');
var numbers = [45, 78, 84, 65, 93, 51, 21];
for (var i =0; i< numbers.length; i++){
    var number = numbers[i];
    if(number > 80){
        continue;
    }
    console.log(number);
}
//while loop in  a reverse way
var number = 10;
while(number => 1) {
    
    console.log(number);
    number--;
}