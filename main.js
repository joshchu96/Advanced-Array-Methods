//forEach 
//doubleValues
//write function called doubleValues(input: array output: new array with all values doubled)
function doubleValues(array) {
    let doubledArr= [];
    array.forEach((numbers)=>{
        doubledArr.push(numbers *2);
    });
    return doubledArr;
};
doubleValues([1,2,3]) // [2,4,6]
doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

//onlyEvenValues
//write function called onlyEvenValues(INPUT:array OUTPUT:only even values are passed.)
function onlyEvenValues(array) {
    let onlyEvens = [];
    array.forEach((numbers) =>{
    if(numbers % 2  ===0 ) {
        onlyEvens.push(numbers);
        }
    });
    return onlyEvens;
}
onlyEvenValues([1,2,3]) // [2]
onlyEvenValues([5,1,2,3,10]) // [2,10]

//showFirstAndLast
//write funciton called showFirstAndLast INPUT: array of str OUTPUT: new arr with only first and last char.
function showFirstAndLast(strArray) {
    const twoChar = [];
    strArray.forEach((str)=>{
        const firstChar = str[0];
        const lastChar = str[str.length-1];
        twoChar.push (`${firstChar}${lastChar}`);
    });
    return twoChar;  
}
showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

//addKeyAndValue
//create a function called addKeyAndValue INPUT: array of Objects OUTPUT: new array,key,value
function addKeyAndValue(array,key,value){
    array.forEach((object)=> {
        object[key] = value;
    });
    return array;
}
addKeyAndValue(
    [
      {name: 'Elie'},
      {name: 'Tim'},
      {name: 'Matt'},
      {name: 'Colt'}
    ],
      'title',
      'instructor'
    )
    
    /*
      [
        {name: 'Elie', title:'instructor'},
        {name: 'Tim', title:'instructor'},
        {name: 'Matt', title:'instructor'},
        {name: 'Colt', title:'instructor'}
      ]
    */

//vowelCount
//create a function called vowelount INPUT:str OUTPUT: key is the value and value is the count.
function vowelCount(str){
    const splitArr = str.split(''); //splits the str by the spaces to for ['s','t','r']
    let obj = {};
    const vowels = 'aeiou' //reference 

    splitArr.forEach((letter) => {
        let lowerCased = letter.toLowerCase(); //make sure case-sensitvity
        if(vowels.indexOf(lowerCased) !== -1) { //compares the letter to aeiou if not inside will return -1
            if(obj[lowerCased]) { //if there is a key reference just increment by 1 to value.
                obj[lowerCased] ++;            
            }
            else {
                obj[lowerCased] = 1; //if key NOT referenced than create a obj[key] for the letter.
            }
        }
    });
    return obj; //call the new obj to return an output. 
}
vowelCount('Elie') // {e:2,i:1};
vowelCount('Tim') // {i:1};
vowelCount('Matt') // {a:1})
vowelCount('hmmm') // {};
vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1}

//MAP

//doubleValuesWithMap 
//function that accepts array values and return new array doubled. 

function doubleValuesWithMap (array) {
    return array.map((numbers)=>{
        return numbers *2;
    });
}
doubleValuesWithMap([1,2,3]) // [2,4,6]
doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]

//valTimesIndex
//create a function that will accept array and return new one multiplied by index position.

function valTimesIndex(array) {
    return array.map((number)=>{
        return number * array.indexOf(number);
    })
}
valTimesIndex([1,2,3]) // [0,2,6]
valTimesIndex([1,-2,-3]) // [0,-2,-6]

//extractKey
//create a function called extractKey accept ArrOfObj and outputs arr with just values.

function extractKey(array) {
    return array.map((object) => {
        return object.name;
    });
}
extractKey(
    [
      {name: 'Elie'},
      {name: 'Tim'},
      {name: 'Matt'},
      {name: 'Colt'}
    ],
    'name'
  )
  
    // ['Elie', 'Tim', Matt', 'Colt']

//extractFullName
//create a  function accept array of objects returns values of [first] and [last]

function extractFullName(array){
    return firstLastName = array.map((object)=>{
        const firstName = object.first;
        const lastName = object.last;

        return `${firstName} ${lastName}`
    });
}
extractFullName([
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia"},
    {first: 'Matt', last:"Lane"},
    {first: 'Colt', last:"Steele"}
  ])
  
    // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']

//filterByValue
//create function that accepts ArrOfObj & key, will return new arr with all objects that contain key.

function filterByValue(array,key){
    return array.filter((object) => {
        if(object[key]) {
            return object;
        };
    })
}
filterByValue(
    [
      {first: 'Elie', last:"Schoppik"},
      {first: 'Tim', last:"Garcia", isCatOwner: true},
      {first: 'Matt', last:"Lane"},
      {first: 'Colt', last:"Steele", isCatOwner: true}
    ],
    'isCatOwner'
    )
    
    /*
      [
        {first: 'Tim', last:"Garcia", isCatOwner: true},
        {first: 'Colt', last:"Steele", isCatOwner: true}
      ]
    */

//find
//create function that accepts an array & value, output is value if in arr else undefined.

function find(array, value) {
    return array.filter((element)=> {
        return element === value;
    })[0];//[0] extracts the value of the returned filter array. so it will show as element itself or just undefined if there is nothing.
}
find([1,2,3,4,5], 3) // 3  
//if no [0] on ln 193 it will show as [3]
find([1,2,3,4,5], 10) // undefined
//if no [0] on ln 193 it will show as []

//findInObj
//create a function that accepts an arrOfObj, key, value, and returns the first found value.

function findInObj (array,key,value) {
    return array.filter((object)=> {
        return object[key] === value;
    })[0];//[0] wil return the first value of the filtered array
}

findInObj(
    [
      {first: 'Elie', last:"Schoppik"},
      {first: 'Tim', last:"Garcia", isCatOwner: true},
      {first: 'att', last:"Lane"},
      {first: 'Colt', last:"Steele", isCatOwner: true}
    ],
    'isCatOwner',
    true
  )
  
  // {first: 'Tim', last:"Garcia", isCatOwner: true}

//removeVowels
//create a function accepting a string and return new lowercased string with vowels removed

function removeVowels(str){
    const vowels = 'aeiou';
    const lowerCasedStr = str.toLowerCase(); //lowercase all the letters in str.
    const splitArr = lowerCasedStr.split(''); //convert str to array

    const nonVowelArr =  splitArr.filter((letter)=> {
        return vowels.indexOf(letter) === -1; //if the letter is not in the vowels return it.
    });
    let nonVowelStr = nonVowelArr.join(''); //rejoin the arr into a str. 
    return nonVowelStr;
}
removeVowels('Elie') // ('l')
removeVowels('TIM') // ('tm')
removeVowels('ZZZZZZ') // ('zzzzzz')

//doubleOddNumbers
//create a function that (<- array) and (->all the odd # doubled.)(map&filter to double)(filter odd after)

function doubleOddNumbers(arr) {
    const oddNumbers = arr.filter((number)=> {
        return number % 2 !== 0;
    })
    const doubled = oddNumbers.map((odds)=> {
        return odds *2;
    })

    return doubled;
}
doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
doubleOddNumbers([4,4,4,4,4]) // []
