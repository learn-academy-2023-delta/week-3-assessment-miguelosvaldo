// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe("fiboArray", () => {
  it("returns an array that length containing the numbers of the Fibonacci sequence", () => {
    const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]
    expect(fiboArray(fibLength1)).toEqual([1, 1, 2, 3, 5, 8]) // on expect we invoke the function
    const fibLength2 = 10
// / Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(fiboArray(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})
      //FIRST TEST =  ReferenceError: areYouHungry is not defined
      //SECOND TEST = Passed

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

const fiboArray = (num) => {
  let array = [1,1]
  for(let i = 2; i < num; i++ ){
    
    array.push(array[i - 2] + array[i - 1])

    //array[0] + array[1]
  }
  
  return array
}      


// Pseudo code:
  //Going to create a function called fiboArray
  //Function fiboArray will take in a paramater of a number 
  //Going to declare an array with a starting point of [1,1]
  //Going to create a for loop letting index be 2 starting point
  //Use the index to mantain relationship with previous elements
  //Going to use the push() method to push new value to array
  


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

describe("leastToGreatest", () => {
  it("returns an array of the values sorted from least to greatest", () => {
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    }
    // Expected output: [15, 15, 20, 30, 30, 60, 90]
    expect(leastToGreatest(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90]) // on expect we invoke the function
    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65
    }
    // Expected output: [10, 15, 20, 45, 60, 65, 100]
    expect(leastToGreatest(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})
            //FIRST TEST =  ReferenceError: arrayValueSorter is not defined
            //SECOND TEST = Passed

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.
 
  const leastToGreatest = (collection) => Object.values(collection).sort((a, b) => a - b)

// Pseudo code:

      //Created function leastToGreatest
      //Decided to use Object.values() to get back an array of the values (numbers)
      //Continued by implementing .sort( )to sort the numbers from least to greatest
      //I then stored Object.values(collection).sort((a, b) => a - b) into a variable and returned the variable
      //Decided to use implicit return since it was one line of code



// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("arrayAdder", () => {
  it("returns an array of the accumulating sum. An empty array should return an empty array", () => {
    const accountTransactions1 = [100, -17, -23, -9]
    // Expected output: [100, 83, 60, 51]
    expect(arrayAdder(accountTransactions1)).toEqual([100, 83, 60, 51]) // on expect we invoke the function
    const accountTransactions2 = [250, -89, 100, -96]
    // Expected output: [250, 161, 261, 165]
    expect(arrayAdder(accountTransactions2)).toEqual([250, 161, 261, 165])
    const accountTransactions3 = []
    // Expected output: []
    expect(arrayAdder(accountTransactions3)).toEqual([])

  })
})
              //FIRST TEST =  ReferenceError: sumOfArrays is not defined


const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.

const arrayAdder = (array) => {
let sum = 0

for(let i = 0; i < array.length; i++){ 
sum = array[i] + sum
array[i] = sum 

}
  return array
}


// Pseudo code:
      //Create an array named arrayAdder with a parameter that expects in an array
      //Making a variable to identify the sum of the upcoming values, we are starting with the number zero
      //Create a for loop to iterate over array
      //Reassign the current index plus the sum itself
      //return the array
  
