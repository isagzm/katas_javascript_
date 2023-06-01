function getAVG(arrayOfNumbers) {
    if (!Array.isArray(arrayOfNumbers) || arrayOfNumbers.length === 0) {
    return 0;
    }
    let sum = 0;
    const arrayOfRealNumbers = arrayOfNumbers.filter((number) => typeof number === 'number');
  
    arrayOfRealNumbers.forEach((number) => {
    sum += number;
    });
    return sum / arrayOfRealNumbers.length;
  
  }

  function replaceVocalWithPosition(phrase) {
    if (typeof phrase !== "string") {
      return null;
    }
    const vocals = ['a', 'e', 'i', 'o', 'u'];
    let phraseFormated = '';

    for (let i = 0; i < phrase.length; i++) {
      if (vocals.includes(phrase[i].toLowerCase())) {
        phraseFormated += i + 1;
      } else {
        phraseFormated += phrase[i];
      }
    }
    return phraseFormated;
  }

  function convertArrayStringsToArrayNumbers(arrayOfStrings) {

    if (!Array.isArray(arrayOfStrings)) {
      return [0];
    }

    const arrayOfNumbers = [];
  
    for (const string of arrayOfStrings) {
      if (typeof string === 'string') {
        const number = parseInt(string);

        if (isNaN(number)) {
          arrayOfNumbers.push(0);  
        } else {
         arrayOfNumbers.push(number);
        }
      } else {
        arrayOfNumbers.push(0);
      }
    }
    return arrayOfNumbers;
  }

  function removeValues(array1, array2) {

    if (!Array.isArray(array1)) { 
      return [];
    }
    if (!Array.isArray(array2)) { 
      return array1;
    }  
    const array = [];
    for (const element of array1) {
  
      if (!array2.includes(element)) {
        array.push(element);
      }
    }
    return array;
  }

  function findDuplicates(array) {

    if (!Array.isArray(array)) {
  
      let emptyArray = [];
  
      return emptyArray;
  
    }
  
    const uniqueItems = [];
    const duplicatedItems = [];

    array.forEach((element) => {
  
      if (!uniqueItems.includes(element)) {
        uniqueItems.push(element);
      } else if (!duplicatedItems.includes(element)){
  
        duplicatedItems.push(element);
      }
    })
    return duplicatedItems;
  
  }

  function convertNumberToStringWords(number) {

    if (typeof number !== 'number') {
  
      return '';
  
    }
  
    const numbersInString = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  
    const prefixNeg = 'neg';
  
    let numberToString = '';
  
  
    if (number < 0) {
  
      numberToString += `${prefixNeg}.`;
  
      number = Math.abs(number);
  
    }
  

    const digits = String(number).split('');
  
    const digitsToString = [];
  
    for (const digit of digits) {
  
      digitsToString.push(numbersInString[digit]);
  
    }
  
    numberToString += digitsToString.join('.');
  
    return numberToString;
  
  }

  module.exports = {getAVG,replaceVocalWithPosition, 
    convertArrayStringsToArrayNumbers, removeValues, 
    findDuplicates, convertNumberToStringWords,}