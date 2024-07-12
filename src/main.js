// 1.Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).
function isPalindromeString(stringToValidate) {
  const reversedString = stringToValidate.split("").reverse().join("");
  return stringToValidate.toLowerCase() === reversedString.toLowerCase();
}

function checkPalindromeString() {
  console.log("Is Palindrome = " + isPalindromeString("Malayalam"));
  console.log("Is Palindrome = " + isPalindromeString("test"));
}

//2.find Vowels and Consonants
function filterChars(code) {
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}
function numberSearch(num) {
  return num >= 0 || num <= 100;
}
function findVowelsAndConsonants() {
  const sampleString = "TEST123ANM345SQUARE%$%$%@#@FDF";
  const vowelsString = "AEIOU";

  const onlyStrings = sampleString.split("").filter((char, index) => {
    return filterChars(sampleString.charCodeAt(index));
  });
  const numbers = sampleString.split("").filter((char) => {
    return numberSearch(char);
  });

  const vowels = onlyStrings.filter(
    (char) => vowelsString.indexOf(char) !== -1
  );

  const consonants = onlyStrings.filter(
    (char) => vowelsString.indexOf(char) === -1
  );

  console.log("String to be validated =  " + sampleString);
  console.log("No of chars = " + sampleString.length);
  console.log("No of vowels = " + vowels.length);
  console.log("No of consonants = " + consonants.length);
  console.log(
    "Other characters = " +
      (sampleString.length - (vowels.length + consonants.length))
  );
  console.log("No of Numbers: ", numbers);
  console.log("No of Numbers: ", numbers.length);
}

//3.Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
function filterEvenNumber() {
  const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 3, 14, 15, 16, 17, 18, 19, 20,
  ];
  const newArray = numbers.filter((num) => {
    return num % 2 == 0;
  });
  console.log(newArray);
}
//4.Write a JavaScript program to calculate the factorial of a given number.
//Ex - 5! is 5x4x3x2x1 which is 120

function findFactorial() {
  console.log("5 factorial = " + factorial(5));
  console.log("10 factorial = " + factorial(10));
}

function factorial(num) {
  return num > 1 ? num * factorial(num - 1) : num;
}
//5.Prime Check

function validatePrimeNo() {
  console.log("05 is prime = " + isPrime(5));
  console.log("10 is prime = " + isPrime(10));
  console.log("07 is prime = " + isPrime(7));
  console.log("12 is prime = " + isPrime(12));
  console.log("13 is prime = " + isPrime(13));
}

function isPrime(num) {
  let isPrime = true;
  for (let count = 2; count < num / 2; count++) {
    if (num % count === 0 && isPrime) {
      isPrime = false;
    }
  }
  return isPrime;
}
//Starting letters to uppercase.
function convertToSentenceCase(inputString) {
  const stringArray = inputString.split(" ");
  const returnOutput = stringArray.reduce((pV, cV) => {
    pV =
      pV +
      cV.charAt(0).toUpperCase() +
      cV.substring(1, cV.length).toLowerCase() +
      " ";
    return pV;
  }, "");
  return returnOutput.trim();
}
//Write a JavaScript program to reverse a given string without using reverse method
function reversedString() {
  const string = "Loading";
  let reverse = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverse = reverse + string[i];
  }
  console.log(reverse);
}
//students details
const studentList = [
  { name: "Mark", mark1: 67, mark2: 67, mark3: 35, mark4: 94 },
  { name: "Stephen", mark1: 78, mark2: 78, mark3: 89, mark4: 94 },
  { name: "Ron", mark1: 99, mark2: 54, mark3: 90, mark4: 94 },
  { name: "David", mark1: 99, mark2: 99, mark3: 99, mark4: 94 },
];

function addTotalToAllStudents() {
  const updatedList = studentList.map((studentDetails) => {
    studentDetails.total = getTotal(studentDetails);
    return studentDetails;
  });
  console.log(updatedList);
}

function findPassPercentage() {
  const passedMembersList = studentList.filter((studentDetails) => {
    return isPassed(studentDetails);
  });

  const passedMembers = passedMembersList.length;
  const failedMembers = studentList.length - passedMembers;

  const passPercentage = (passedMembers / studentList.length) * 100;
  console.log("Passed members = " + passedMembers);
  console.log("Failed members = " + failedMembers);
  console.log("Pass percentage = " + passPercentage + "%");
}

function displayTopThreeRanks() {
  const updatedStudentList = studentList.map((studentDetails) => {
    studentDetails.total = getTotal(studentDetails);
    return studentDetails;
  });

  const passedMembers = updatedStudentList.filter((studentDetails) => {
    return isPassed(studentDetails);
  });

  console.log("Passed count = " + passedMembers.length);
  const sortedRanks = passedMembers.sort(function (x, y) {
    if (x.total < y.total) {
      return -1;
    }
    if (x.total > y.total) {
      return 1;
    }
    return 0;
  });

  printRank(sortedRanks, 1);
  printRank(sortedRanks, 2);
  printRank(sortedRanks, 3);
}

function printRank(sortedRanks, rank) {
  if (sortedRanks[rank - 1] !== undefined && sortedRanks[rank - 1]) {
    console.log(rank + " = " + sortedRanks[rank - 1].name);
  } else {
    console.log(rank + " = NA");
  }
}

function isPassed(studentDetails) {
  return (
    studentDetails.mark1 >= 40 &&
    studentDetails.mark2 >= 40 &&
    studentDetails.mark3 >= 40 &&
    studentDetails.mark4 >= 40
  );
}

function getTotal(studentDetails) {
  return (
    studentDetails.mark1 +
    studentDetails.mark2 +
    studentDetails.mark3 +
    studentDetails.mark4
  );
}

const outputArray = [];
function flatArray() {
  const sampleArray = [1, 2, [2, 3, 6, [4, 5, [5, 5, 6, 6, 6]]]];
  flattenInnerArray(sampleArray);
  console.log(outputArray);
}

function flattenInnerArray(innerArray) {
  for (let count = 0; count < innerArray.length; count++) {
    if (typeof innerArray[count] === "number") {
      outputArray.push(innerArray[count]);
    } else {
      flattenInnerArray(innerArray[count]);
    }
  }
}

//Check if two dates are equal 07/12/2024 and 12-Jun-2024.
// introduction : JavaScript Date Input
// Type	Example
// ISO Date	"2015-03-25" (The International Standard)
// Short Date	"03/25/2015"
// Long Date	"Mar 25 2015" or "25 Mar 2015"

function checkDate() {
  function areDatesEqual(dateStr1, dateStr2) {
    // Parse the first date string
    var date1 = new Date(dateStr1);

    // Parse the second date string
    var date2 = new Date(dateStr2);

    // Compare the dates
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  }

  // Example usage
  var date1 = "07/12/2024";
  var date2 = "12-Jun-2024";
  if (areDatesEqual(date1, date2)) {
    console.log("Dates are equal");
  } else {
    console.log("Dates are not equal");
  }
}
//Add n days to EXisting DAYS
function addNDays(date, daysToAdd) {
  var result = new Date(date);
  result.setDate(result.getDate() + daysToAdd);
  return result;
}
function addDays() {
  let existingDate = new Date("12/07/2024");
  let n = 5;
  let addedDays = addNDays(existingDate, n);
  console.log("Original Date: ", existingDate.toDateString());
  console.log("Added", n, "days: ", addedDays.toDateString());
}
//Write a function that takes an array of integers as input and returns a new array with only the unique elements.
function uniqueArray() {
  const array = [1, 2, 34, 56, 78, 90, 23, 34, 56];
  let duplicateArray = [];
  for (let i = 0; i < array.length; i++) {
    const filterResult = duplicateArray.filter((element) => {
      return element === array[i];
    });
    if (filterResult.length === 0) {
      duplicateArray.push(array[i]);
    }
  }
  console.log(duplicateArray);
}
// Implement a function to find the sum of all the numbers in an array.
function addArray() {
  const addArray1 = [1, 2, 34, 4, 56, 7, 8, 10];
  const addedArray = addArray1.reduce((pv, cv) => {
    return (pv = pv + cv);
  });
  console.log(addedArray);
}
//Implement a function that finds the maximum number in an array.
function maxNumber() {
  const number = [2, 4, 56, 78, 34, 67, 9, 87, 9, 9865];
  const copyNumber = Math.max(...number);
  console.log(copyNumber);
}
//Write a program to reverse a string. Ex - Write a program to reverse a string. Ex - "I am travelling to my native" should return as "native my to travelling am I" should return as "native my to travelling am I"
function reverseStr() {
  let str = "I am traveling to my native";
  let string = str.split(" ");
  let newStr = [];
  for (let i = string.length - 1; i >= 0; i--) {
    newStr.push(string[i]);
  }
  console.log(newStr);
}
//Return sum of all values  in an object ex:  {a:1,b:2,c:3} should return 1 + 2 + 3 , as 6
function addValues() {
  let obj = { a: 1, b: 2, c: 3 };
  let value = 0;
  for (x in obj) {
    value += obj[x];
  }
  console.log(value);
}
// Split a number into its digits
//ex - 910 should come as "9 - hundereds, 1 tens, o ones" and 14590 as 1 ten thousands, 4 thousands, 5 hundereds, 9 tens, 0 ones
function threeDigits() {
  let digitsNum = "910";
  let newDigits = digitsNum.split("");
  if (newDigits.length === 3) {
    console.log(newDigits[0] + "-" + " hundred");
    console.log(newDigits[1] + "-" + "tens");
    console.log(newDigits[2] + "-" + "ones");
  }
}
function fiveDigits() {
  let digitsNum = "14590";
  let newDigits = digitsNum.split("");
  if (newDigits.length === 5) {
    console.log(newDigits[0] + "-" + "ten thousands ");
    console.log(newDigits[1] + "-" + "thousands");
    console.log(newDigits[2] + "-" + "hundred");
    console.log(newDigits[3] + "-" + "tens");
    console.log(newDigits[4] + "-" + "ones");
  }
}
