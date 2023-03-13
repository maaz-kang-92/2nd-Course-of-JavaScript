let myStr1 =" I am a \"double quoted\" string inside \'double quotes\' "
let myStr2 = 'I am a "double quoted" string inside "double quotes" '
let myStr3 = `I am a "double quoted" string inside 'double quotes' `
console.log(myStr1)
console.log(myStr2)
console.log(myStr3)
  
/*  
\'   single quotes
\"   double quotes
\\   backslash
\n   newline
\r   carriage return
\t   tab
\b   backspace
\f   from feed
*/

let myStr4 = "FirstLine \n \t \\SecondLine \rThirdLine \rForthLine \bFifthLine \fSix"
console.log(myStr4)

//..................................Concatinate...........................................
let ourStr = "I come first"
ourStr  += " I come second"
console.log(ourStr)

//...........................Concatinate with varible..............................
let myName = "maaz" , fatherName = "hafeez"
ourStr = "My name is " + myName + " My father name is " + fatherName
console.log(ourStr)

//append varible to Strings 
 //variable += "string"

//find the length of string.
 // stringVar.length
 myName = "MuhammadMaazAhmad"
 myNameLength = myName.length
 console.log(myNameLength)
 console.log(myName[0]);

//string immutability......
  myName = "MuhammadMaazAhmad"
  console.log(myName)
  myName[0] = "m"       //cannot change individual like that.
  console.log(myName)

// bracket notation to find nth character in String.
 console.log(myName[9])

// how to find the lastCharacter of the String.
  let lastLetterofString = myName[ myName.length - 1 ]
  console.log(lastLetterofString)

// word blanks...
 function wordBlanks (myNoun, myAdjective, myVerb, myAdverb) {
    let result = " ";
    result += "The " + myAdjective+ " " + myNoun+ " " + myVerb+ " " 
    + myAdverb + " in the home town! "
    return result
 }

 let fun = wordBlanks( "dog", "big", "ran", "quickly")
 console.log(fun)

//Nested Arrays..
let myArray = [["maaz", 4, "karachi"], ["abdullah", 42, "lahore"], ["qasim", 5]]
console.log(myArray)
console.log(myArray[1])
console.log(myArray[1][0])

//Modify Array data with indexes....
let arr = [11, 22, 5, 44, 55]
console.log(arr)
//change the indexes value.
arr[2] = 33
console.log(arr)

//Access Multi-Dimensional Array with Indexes....
let multi = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 85] ]

document.write(multi)
console.log (multi[3][2])

multi[3][2] = 12;
console.log (multi[3][2])
console.log (multi)

// push into Array...multi_dimensional
let multiPush = [ ["dog", 2], ["cat", 5] ]

multiPush.push(["crow", 7, "chill"])
console.log(multiPush[2])

// pop from the Array...
multiPush.pop();
console.log(multiPush[2])  //remove from the array...

// shift and unshift from the array at front.....

// local and global variable and their scope...

// local variable inside the function and global outside of the function...

// inside the function local has more priority than global with the same name...

// stand in line...........convert values...............
let testArr = [1, 2, 3, 4, 5]
document.write("<br>", testArr)
console.log("Before: " + testArr )

let result = JSON.stringify(testArr); //into string.
document.write("<br>", result)
console.log("After: "+ result)

let intoArr = JSON.parse(result)   //again into array.
document.write("<br>", intoArr, "<br>")
console.log(intoArr)

// boolean value, true (on) or fasle (off).

// if else if statement to fulfill condition.
let num = 5
  
  if (num < 5) {
    console.log("Tiny!")
  } else if (num < 10 ) {
    console.log("Small!")
  } else if (num < 15) {
    console.log("Medium!")
  } else if (num < 20 ) {
    console.log ("Large!")
  } else if (num >= 20) {
    console.log("Huge!")
  }

  // like this we can use Array and return them.....
  // global variable...
  let names = ["maaz", "ahmad", "ali", "hassan", "aqib", "arslan", "afnan"]

  function Name(indexValue, totalValue ) {
    if(indexValue < totalValue - 90) {
        return names[0]
    } else if (indexValue < totalValue - 30) {  //10
        return names [1]
    } else if (indexValue < totalValue - 20) {  //20
        return names [2]
    } else if (indexValue < totalValue - 10) {  //30
        return names [3]
    } else if (indexValue < totalValue - 00) {  //40
        return names [4]
    } else if (indexValue < totalValue + 10) {   //50
        return names [5]
    } else {
        return names[6]
    }

  }
  console.log(Name(12, 40))

  // switch case.. more than one case can be used just for one condition....
  function switchOfStuff(val) {
    switch(val) {
        case "a":
        return "alpha"
        break;

        case "b":
        return "beta"
        break;

        case "c":
        return "cat"
        break;

        case "d":
        return "dog"
        break;

        case "e":
        return  "elephant"
        break;

        case "f":
        return "fan" 
        break;
        default:
        return "Nothing Return OK!"
    }
  }
  result = switchOfStuff("c")
  console.log(result)

// Returning Boolean Values form Function.....
function isLess(a, b) {
    if (a < b) {
        return true
    } else {
        return false
    }
}
result = isLess(22, 54)
console.log(result)

function cc(val) {
    switch(val) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        return "Card value is between 1-to-6"
            break;
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        return "Cards value is between 7-to-12"
            break;
    }
}
result = cc(10)
console.log(result)

// javaScript Object.....
   let objects = {
    name: "Maaz", 
    no: 23,
    deptt: "CS/IT",
    friends: ["Everythings! "]
   }

//access value with dots
   let nameValue = objects.name
   console.log(nameValue)
   let noValue = objects.no
   console.log(noValue)
   let friendsValue = objects.friends
   console.log(friendsValue)

//access value with brackets
   console.log(objects.deptt)
   console.log(objects["no"])
   console.log(objects["deptt"])

objects.deptt = "computer science and information technology!"
console.log(objects.deptt)

//add new value into objects...
objects.myJob = "Dawlance accountant! "
console.log(objects["myJob"])
console.log(objects.myJob)

//delete the object properties form object.
delete objects.myJob
console.log(objects.myJob)

function fun_1(val) {
  let lookup = {
    name: "maaz",
    fathername: "xyz",
    mothername: "abc",
    universityname: "uos",
    cityname: "sargodha",
    countryname: "pakistan",
    villagename: "92",
    houseno: "53-shrif-town"

  }
  return lookup[val]
  
}
 result = fun_1("fathername")
 console.log(result)

 let object = {
    name: "Maaz", 
    no: 23,
    deptt: "CS/IT",
    friends: ["Everythings! "]
   }

   // check the property of the Object.........Available or Not....
 function checkObj (checkProperty) {
    if(object.hasOwnProperty(checkProperty)) {  //hasOwnProperty is reserved word...
        return object[checkProperty]
    } else {
        return "Not Found!"
    }
 }
 result = checkObj("deptt")
 console.log(result)

 // Objects or all types of data_type into Array......
 let myValues = [
    {
        name: "maazAhmad",
        number: "233",
        fathername: "xyz",
        mothername: "abc",
        array: [
        "AB", "CD", "EF", "GH"
        ],
        gold: true
    },
   {
        "name": "afnan",
        number: "133",
        "fathername": "xyz",
        mothername: "abc",
        "array": [
        "AB", "CD", "EF", "GH"
        ],
        gold: false
   }
 ]
result = myValues[0].array[3]
console.log(result)
result = myValues[1].gold
console.log(result)

// Accessing Nested Objects.....objects within a object.

let wheel = {
    car: {
        inside: {
            seats: "sofa",
            ac: "inverter"
        },
        outside: {
            number: 5430,
            color: ["red", "green", 
              { combination:"White & Green",
              nothing: "No Color" }
            ]
        }

    }
}
result = wheel.car.inside.seats
console.log(result)

result = wheel.car.outside.color[2].nothing
console.log(result)

result = wheel.car["outside"]["color"][2].combination
console.log(result)

// please update the value of the seats.........
let beforeUpdate = wheel.car.inside.seats
console.log(beforeUpdate)
let afterUpdate = wheel.car.inside.seats = "Sofa and Chairs"
 console.log(afterUpdate)

 // object with the id.......
 let obj = {
  12: "My roll No. is Tweleve",
  "10": "My roll No. is Ten",
  "44": "My roll No. fortyFour",
  45: "My roll No. fortyFive",
  "43": "My roll No. fortythree",
  41: "My roll No. fortyone",
  "42": "My roll No. fortytwo",
  47: "My roll No. fortySeven",
  "48": "My roll No. fortyeight"
 }
 // how to pic the property value of object....
 result = obj[12]
 console.log(result)
 result = obj[10]
 console.log(result)
 result = obj[44]
 console.log(result)
 result = obj[47]
 console.log(result)
 result = obj[43]
 console.log(result)
 result = obj[45]
 console.log(result)
 result = obj[41]
 console.log(result)
 result = obj[42]
 console.log(result)

 // put the value of 44 with the null...
 result = obj[44] = true
 console.log(result)
 result = obj[44] = null
 console.log(result)
 
 delete obj[12]
 console.log(obj[12])

 // iterate with while loop.............
 let myArr = []
 let i=0;

 while(i < 7) {
 // myArr[i] = i + 2 
  myArr.push(i ** 3)   // number multiple with 3 times.
  console.log(myArr[i])
  i++
 }

 myArr = []
 // iteration with for loop....
  for (i=0; i < 7; i+=1) {
    myArr[i] = i
    console.log(myArr[i])
  }
  console.log(myArr)

  // iterate Odd Numbers with a for loop
  console.log("Iteration with the Odd Numbers")
 myArr = []
 for (i=1; i <= 13; i+=2) {
  myArr[i] = i
  console.log(myArr[i])
}

  // Count backwards with a for Loop...
  console.log("Backwards Iteration with the Odd Numbers")

  myArr = []
  for (i=13; i >= 1; i -= 2) {
    myArr[i] = i
    console.log(myArr[i])
  }

  //myArr length........
  console.log("display the value of Array according to Length!")

  let findTotal = 0;
  let ourArr = [1, 6, 4, 8, 4, 8, 9, 0, 3, 2, 1, 7]

  for(i = 0; i < ourArr.length; i++) {
    console.log(ourArr[i])
    findTotal += ourArr[i]
  } 
  console.log("This is Total! " + findTotal)

// Nesting for_loop.....
for (i = 1;  i <= 7; i++) {
    for (j = 1; j <= i; j++) {
     document.write("* ")
    }
  document.write("<br>")
  }
   document.write("----Reverse Mode -----<br>")
  for (i = 1;  i <= 7; i++) {
    for (j = 7; j >= i; j--) {
     document.write("* ")
    }
  document.write("<br>")
  }
  
let arr1 = [ [2, 2, 2], [2, 2], [2, 2], [2, 2, 2] ]

  console.log(arr1[3][0])

  let multiply = 1

  for (let i = 0;   i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {

     result += arr1[i][j]  //add all the value...
    
     multiply *= arr1[i][j]  //multiple all value
    }
   
  }
console.log("Total of 2d " +result)
document.write(multiply)

// do while loop............
console.log("--------do while loop--------")
let array1 = []
let k = 0
let add = 0
do {
  array1.push (k)
  add += array1[k]
  console.log(array1[k])
  k++
} while(k < 9);

 console.log("Addition of values: " + add)

//.........................................................................................
    // lookup values 2D
let contacts = [
  {
   "firstName": "Maaz",
   "lastName":  "Ahmad",
   "number": "9314332",
   "likes": ["Pizza", "Coding", "Tea"]
  },
  
  {
    "firstName": "Waleed",
    "lastName":  "Hassan",
    "number": "9470632",
    "likes": ["Pizza", "Bloging", "Tea"]

  },

  {
    "firstName": "Talha",
    "lastName":  "Nasir",
    "number": "0470152",
    "likes": ["Shawama", "Equations", "Milk"]

  },

  {
    "firstName": "Gul",
    "lastName":  "Ahmad",
    "number": "9390470",
    "likes": ["Burger", "Coding", "Drinking"]

  }
]
  function lookupProfile(firstName, prop) {

    for (let i= 0; i < contacts.length; i++) {
      if (contacts[i].firstName === firstName) {
        return contacts[i].prop || "No such Property"    //if property not exist...No such Property
      } 
    }
    
  }

  //calling of the function...
  result = lookupProfile("Maaz", "likes")
  console.log("Show me the likes  : " + result)
  result = lookupProfile("Waleed", "number")
  console.log("Show me the number  : " + result)
  result = lookupProfile("Talha", "likes")
  console.log("Show me the likes  : " + result)
  result = lookupProfile("Gul", "lastName")
  console.log("Show me the lastName  : " + result)
  result = lookupProfile("Waleed", "mangoes")   //no such property......
  console.log("Is mangoes property of Contact! " + result)

  // Math.random operation........
  function range(min, max) {
    let randomNo = Math.random()
    let rangeNo = Math.floor(randomNo * max) + min  //included between 1-6
    return rangeNo;  
  }
  console.log(range(1, 6))

  // praseInt function.....
  function convertIntoInt(str) {
     return parseInt(str) + 12
  }
  console.log(convertIntoInt("56"))

  // use the praseInt with the Radix...
  //the no. has base 2, 8, 10 default is 10
  function radix(str) {
  return parseInt(str, 2)        //2 is used for binary number....
  }
  console.log( "This \"1100011\" is the Binary of " + radix("1100011"))       // this is the binary of 99...

  //ternary Operator.....
  function ternary(a, b) {
    return a < b? true : false
  }
  console.log(ternary(3,6))

// multi_condition into ternary Operator....
function ternary1(num) {
  return num > 0? "Positive" : num < 0? "Nagative": "Zero"
}
console.log(ternary1(5))
console.log(ternary1(-5))
console.log(ternary1(0))

// different between var , let and const(cannot reassign)
let a;              // within a block of function
var b;              //globally used..
const c = 4;
console.log(c)
a = 32;
console.log(a)
b =2;
console.log(b)
b = a;
console.log(b)  // var can hold the value of let
a = b;
console.log(a)  // but let cannot hold the value of var
b = c;
console.log(b)  // var also hold the value of const

// mutate an Array declare with the const....
const ar = [3, 5, 7, 1, 9, 4]
console.log(ar)
// we cannot update the value of const variable...but can change the indexes value....
ar[0] = 0;
ar[1] = 1
ar[2] = 2
ar[3] = 3
ar[4] = 4
ar[5] = 5
console.log(ar)
 
// prevent Object Mutation.....try and catch Later..
function freezObj() {
  //object
  const math_constant  = {
   PI: 3.1417
  }

  // to prevent const object assign.
  Object.freeze(math_constant)

  try {
    math_constant.PI = 44  //change the value of PI or property value....
  }  
  catch(ex) {
    console.log(ex)
  }
  
  return math_constant.PI
}

const PI = freezObj()
console.log(PI)

// Use Arrow Function to write Concise Anonymous Functions....
let magic1 = function() {
  return new Date()
}
console.log(magic1)

// if we want to return only one value don't need to curly brackets and keyword return
let magic2 = () => new Date()
console.log(magic2)

// Write Arrow Functions with Parameters.....
let myConcat  = function(arr1, arr2) {
  return arr1.concat(arr2)  //concatinate both......
}
console.log( myConcat([1, 4], [6, 4, 8]) )

let myConcat1 = (arr1, arr2) => arr1.concat(arr2)  //concatinate both......
console.log( myConcat1([1, 4], [6, 4, 8]) )

//Write Higher Order Arrow Functions.....remove {} and return just for single line.
const squareList = (arr) => {
  const passingArr = arr
  return passingArr
}
const passingArr = [4, -6.4, 8, 2.2, 6, -2, +9, 11, 17.4]
 console.log(passingArr)
                                      //Arror Function
// // filtering the values into Array .........
//  const squareList1 = (arr1) => {
//   const passingArr1 = arr1.filter(num => Number.isInteger(num) && num > 0).map(x => x*x)
//   return passingArr1
// }
// const passingArr1 = [4, -6.4, 8, -2.2, 6, -2, +9, 11, 17.4]
//  console.log(passingArr1)
 
// Write Higher Order Arrow Functions....
const increment = function() {
   return function increase(number, value = 1) {
    return number + value
   }

} ()
console.log(increment(5, 4))  // both value will add...
console.log(increment(33))   //number is 33 and value is 1...

// Use the Rest Operator(...args) with Function Parameters.....
const sum = function() {
  return function sum(x, y, z) {
    const args = [x, y, z]
    return args.reduce((x,y) => x-y)     // it is used to add/sub/divide/multiple array values..
   
    // return args.reduce((x,y) => x-y, 0)     // , 0 used from 11 to -11...put negative
  }
} ()                                           //() it's necessary........
console.log(sum( 4, 4, 3))

// Use the Rest Operator(...args) ...args is passing as Array
const sum1 = function() {
  return function sum1(...args1) {

    return args1.reduce((x,y) => x-y)     // it is used to add/sub/divide/multiple array values..
   
  }
} ()                                           //() it's necessary........
console.log(sum1( 4, 14, 13))

// Use the Spread Operator to Evaluate Arrays in-Place.......
// like ...rest Operator
const arr2 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY']
let arr3

(function() {
// arr3 = arr2;  
arr3 = [...arr2]       // spreed operator like rest operator
arr2[0] = 'Potato'     //value not assign if rest Operator is used uper just update when the rest operator is on bottom.....

}) ()
console.log(arr3)

// Use Destructuring Assignment to Assign Variables from Objects....
let voxel = {
  x: 3.6,
  y: 7.5,
  z: 6.54
}
// let x = voxel.x
// let y = voxel.y
// let z = voxel.z

const {x : obj1, y : obj2, z : obj3 } = voxel   //assign the value of Object into variable (obj1, obj2, obj3)..
console.log(obj1)   //3.6

//Create a function to assign value of Object to Variable...
const AVG_TEMPERATURE = {
  today: 77.5,
  tomorrow: 78,
  yesterday: 44
}

function getTempOFTomorrow(avg_temperature) {
const {tomorrow : tempTomorrow} = avg_temperature;
return tempTomorrow  // 78 is assign to tempTomorrow variable...

}

result = getTempOFTomorrow(AVG_TEMPERATURE)
console.log("Temp of Tommorow will be: "  + result)

// also Destructuring Assignment with Nested Objects.....
const local_forcast = {
  today: { 
    min: 49, 
    max: 55
  },
  tomorrow: {
    min: 44,
    max: 49
  }
}
const { today : todayTemp } = local_forcast
const { today : { min : todayMin } } = local_forcast;
console.log(todayTemp)  //object property
console.log(todayMin)   // property of object within a object..

// Use Destructuring Assignment to Assign Variables from Arrays....
const [z, x, , y] = [1, 2, 3, 4, 5, 6]  //first two indexes assign to z and x skip third and 4 is assigned to y
console.log(z, x, y)

// Use Destructuring Assignment with the Rest Operator...
  //missing the first two indexes value..
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function removeFirstTwo (list) {
  const [, , ...arr] = list
  return  arr  //is a variable that holds all the value of list Array
}

console.log(source)
result = removeFirstTwo(source)
console.log("Remove the First two indexes! " + result)

// Use Destructuring Assignment to "Pass an Object" as a Function's Parameters.....
const obj_1 = {
  max: 34.2,
  standard_deviation: 4.33,
  median: 32.76,
  mod: 23.4,
  min: -0.33,
  average: 44.43
}
function half( {max, min} ) {
  return (max + min) / 2.0
}

result = half(obj_1);  //max and min will be picked from object.......
console.log(result)

// Create String using Template Listerals.....
const person = {
  name: "maaz",
  age: 21
}

const greeting = `Hello, my name is ${person.name}! I am ${person.age } years old. `
console.log(greeting)

// also <li> tag is used in here........

// without return and function keywords passing the property of object....
const createPerson = (naam, age, gender) => ( {naam, age, gender} ) // this will return...
console.log(createPerson("Maaz", 32, "male"))

// how to Create a Class...........
function makeClass() {

  class Thermostat {
    
    Thermostat()                    // this is constructor with the same name of class...
   {   
    console.log("This is Constructor")     // _variable define this is private variable...
   }

  //to show or display the value on screen.....
  get temperature() {
    return this._temp * 4
  }

  //to change or update the value....
  set temperature (updateTemp) {
    this._temp = updateTemp
  }

  }

  return Thermostat
}

const Thermostate = makeClass()            // calling of the function into variable...
const thermos = new Thermostate()          // new variable as a dynamic....

thermos.temperature = 12
let temp = thermos.temperature  // 77 is assigned to temp
console.log(temp)               // display 77

// UnderStand the Differences between import and require.....
// export from one file and import to other file...
