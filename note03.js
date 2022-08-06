/***
 * CONDITIONALS
 * 
 * 1. meaning of: >, <, >=, <=, ==, !=, ===, !==
 * 2. Meaning of &&
 * 3. Meaning of ||
 * 4. Let's say you have x amount of money. If you have more than 80,000, then you will buy a MAC,
 * if more than 60,000 then you will by gaming laptop
 * if yo have more than 20,000 then you will buy a used laptop
 * otherwise, you will use your mobile phone.
 * 
 * 
 * LOOP
 * 
 * 1. Dispaly "ajke amr mon valo nei" for 39 times
 * 2. Display numbers between 58 to 98
 * 3. Show all even numbers from 412 to 456
 * 4. Show all odd numbers from 581 to 623
 * 5. Difference between while loop and for loop 
 * 6. Declare an array for all the topics that you have learned last few days
 * display them as output
 * 7. Create an array for all the mobile phones. Display all the elements of the array by using the while loop
 * 8. Run a loop from 30 to 86. this loop will stop if the values get higher than 44.
 * 9. Write the price of the books that you have. Display the prices if the price is lower than 200.  
 * 
 * 
 */



 //1. meaning of: >, <, >=, <=, ==, !=, ===, !==
 /**
  * == equal to
    === equal value and equal type
    != not equal
    !== not equal value or not equal type
    greater than >
    < less than
    greater than or equal to >=
    <= less than or equal to
    ? ternary operator
  * 
  */


  //2. Meaning of &&
 /**
  * && logical and
  * 
  */


  //3. Meaning of ||
 /**
  *  || logical or
  * 
  */


/* 4. Let's say you have x amount of money. If you have more than 80,000, then you will buy a MAC,
 if more than 60,000 then you will by gaming laptop
if yo have more than 20,000 then you will buy a used laptop
otherwise, you will use your mobile phone.
 /**
 */
  var money = 30000;
  if (money > 800000){
      console.log("I will by a Mackbook");
  }else if (money > 60000){
      console.log("I will by a Gaming Laptop");
  }else if (money > 40000){
      console.log("I will by a Lenovo Yoga");
  }else if (money > 20000){
      console.log("I will by a used laptop");
  }else{
      console.log("I will use Mobile Phone");
  }


//----------------------------------------------------
//LOOP
//--------------------------------------------------

//1. Dispaly "ajke amr mon valo nei" for 39 times
    for(i = 1; i <= 39; i++){
        console.log(i + ". Ajke amr mon valo nei");
}


//2. Display numbers between 58 to 98
    
    for(i = 58; i <= 98; i++){
        console.log(i);
}


//3. Show all even numbers from 412 to 456
    for(i = 412; i <= 456; i+=2){
        console.log(i);
}


  //4. Show all odd numbers from 581 to 623
    for(i = 581; i <= 623; i+=2){
        console.log(i);
}

//5. Difference between while loop and for loop
 /**
  * While loop will continue to loop forever as long as the statement is met
    For loops have a fixed number of loops which are determined by the user
  * 
  */


//6. Declare an array for all the topics that you have learned last few days display them as output
    var topics = ["HTMl","CSS","GitHub","Bootstrap","Tailwind CSS","Learning Javascript"];
    for (i = 0; i < topics.length; i++) {
        console.log(topics[i]);
    }


//7. Create an array for all the mobile phones. Display all the elements of the array by using the while loop
    var mobileUse = ["Nokia","Samsung","Oppo"];
    var i = 0;
    while(i < mobileUse.length){
        console.log(mobileUse[i]);
        i++;
    }

//8. Run a loop from 30 to 86. this loop will stop if the values get higher than 44.

    for(i = 30; i <= 86; i++){
        console.log(i);
        if( i > 44){
            break;
        }
    }


//9. Write the price of the books that you have. Display the prices if the price is lower than 200. 

    var bookPrice = [120, 200, 300, 420, 150, 180, 79];
    for(var i = 0; i < bookPrice.length; i++){
        var priceList = bookPrice[i];
        if(priceList > 200){
            continue;
        }
        console.log(priceList);
    }