### Week 1 Homework - Due 1/17/15 at 11:59pm

##### 1. Write a function that prints a word  and its reflection.

    reflection('hello'); // hello olleh
 

##### 2.  Write a function that takes 3 arguments, (start, end, spread),  and then prints out the pattern.

    pattern(2, 11, 3); // 2, 5, 8, 11


##### 3. Write a function that adds all the numbers in an array and prints the total.

    addAll([1, 3, 4, 6, 2, 0, 4, 7, 8]); // 35  


##### 4.  Write a function that prints all the numbers from 1 to 100, with three exceptions.
--- For numbers divisible by 3, print "Foo" instead of 3.
--- For numbers divisible by 7, print "Bar" instead of 7.
--- For a number divisible by BOTH 3 and 7 print FooBar.

    fooBar(); // 1, 2, Foo, 4, 5, 6, Bar...100


##### 5.  Write a function that determines the size of an object.

    var dog = {
      name: 'Snoopy',
      owner: 'Charlie Brown',
      friend: 'Woodstock'
    };
    objectSize(dog); // 3


##### 6.  Write a function that takes a dinner array and tip percent as a number. This function should calculate the total paid by applying the tip to each guest's bill and rounds to the nearest whole number. 
--- This function prints the new object with guest's name and how much they paid.
--- Additionally it creates a totalPaid key with the correct total of the entire bill (total of what all guest's paid).

    var dinner = [
      { name: 'Cyd', bill: 22.54 },
      { name: 'Andrea', bill: 18.39 },
      { name: 'Andy', bill: 15.29 },
      { name: 'Stevi', bill: 25.11 }
    ];
    tipCalculator(dinner, 20);

    //////////////////////////
    {
      totalPaid: '97.00',
      customers: [
       { name: 'Cyd', paid: '27.00' },
       { name: 'Andrea', paid: '22.00' },
       { name: 'Andy', paid: '18.00' },
       { name: 'Stevi', paid: '30.00' }
      ]
    };


##### 7.  Write a **recursive** function that will accept an arg n and return an array of the first n number of fibonacci numbers.

*Fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21, 35... where the next number  is always equal to the sum of the previous two numbers.*

    getFibonacci(4); // [1, 1, 2, 3]


