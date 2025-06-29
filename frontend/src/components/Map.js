const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map(square); // map allows array to search every numbers step by step
console.log("squares of number ", squares);
function square(element) {  // element can be any number 
  return Math.pow(element, 2);
}


const cubes = numbers.map(cube); // map allows array to search every numbers step by step
console.log("cubes of numbers", cubes);
function cube(element) {  // element can be any number 
  return Math.pow(element, 3);
}



const subjects = ["Degital Logic", "Programming", "numeric Method", "Statices"];
const subList = subjects.map(subjectList);
console.log(subList);
function subjectList(title) {
  return title.toUpperCase(title); // method to conveert subjets name into upper case
}


const dates = ["2025-5-25", "2022-7-23", "2024-2-15"];
const formatted = dates.map(formateDates);
console.log(formatted);

function formateDates(element) {
  const parts = element.split("-"); // split method separated the string of element
  return `${parts[1]}/${parts[2]}/${parts[0]}`; // formatted as month, Day , Year
}

