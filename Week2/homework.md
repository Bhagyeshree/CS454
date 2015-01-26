#### Week 2 Homework - Due 1/24/15 at 11:59pm

##### 1. Write a prototype function that converts a string separated by '_' or ' ' into a camelCase string. (4 pts)

    'hello world'.toCamelCase(); // helloWorld
    'hello_world'.toCamelCase(); // helloWorld
 

##### 1. Write a prototype function that converts a 2D array into an object. (4 pts)
    var arr = [['media', 'facebook'], ['company', 'github'], ['likes', 48445]];
    arr.convertToObject(); 
    // { media: 'facebook', company: 'github', likes: '48445' }


##### 3. Write a prototype function that converts an object into a 2D array. (4 pts)

    var obj = { media: 'facebook', company: 'github', likes: '48445' }
    obj.convertToArray(); 
    // [['media', 'facebook'], ['company', 'github'], ['likes', 48445]]; 


##### 4.  Write a closure that scores a fruit ninja. (4 pts).

--- Each time the ninja slices - the score increases by 1. <br />
--- Each time the ninja misses - the score decreases by 1. <br />
--- Each time getScore is called it returns the current score of the ninja.


##### 5.  Create a Quadrilateral object (a quadrilateral is a polygon with four sides). Create a Diamond object that inherits from Quadrilateral. (4 pts)

--- Both objects should have constructors. <br />
--- Any quadrilateral object should be able to use a getArea() function. <br />
--- Any quadrilateral object should be able to use a getPerimeter() function.


##### 6.  Write a series of functins that utilize callbacks (no returns) to determine if a number is even or odd. (4 pts)

--- Function 1 - Handles printing/console.log() <br />
--- Function 2 - Applys modulo. <br />
--- Function 3 - Evaluates the modulo result into 'even' or 'odd';
      
      printAnswer(11) // odd


