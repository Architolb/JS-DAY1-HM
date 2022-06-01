//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords()
    const match = dog_names.find(element => {
        if (element.includes(dog_string)) {
          return 'Matched dog_name';
        }
    });
      
    console.log(match);

    if (match !== 'No Matches')

        

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

// function replaceEvens(arr){
    //code goes here
// }

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]




//1.  This code does not execute properly. Try to figure out why.

// function multiply(a, b){
//   a * b
// }

function multiply(a, b){
    a * b
    return a * b
  }


//   2. In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

/*Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
  
}
*/

function makeNegative(num) {
    return num < 0 ? num : -num;
  }