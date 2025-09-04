// 1.Write a function addProperty(obj, key, value) that adds a new
// property to an object and returns the updated object.
function addProperty(obj, key, value){
    obj[key] = value
    return obj
}
// console.log(addProperty({ name: 'John' }, 'age', 25))
// { name: 'John', age: 25 }
// console.log(addProperty({},"city","New York"));
// { city: 'New York' }






// 2.Write a function mergeObject(obj1, obj2) and return merges two
// objects.
function mergeObject(obj1, obj2){
    return {...obj1,...obj2}
}
// console.log(mergeObject({ name: 'John', age: 25 }, { city: 'New York' }))
//{ name: 'John', age: 25, city: 'New York' }
// console.log(mergeObject({ name: 'Jane' }, { age: 30, country: 'USA' }))
//{ name: 'Jane', age: 30, country: 'USA' }








// 3.Write a function getFreqOfWords(sentence) that returns an object with keys representing
// unique words in lowercase and values representing the frequency of occurrences of each
// word with ignore case in the sentence. If the input string is null or undefined, return undefined.
function getFreqOfWords(sentence){
    if (sentence !== Array){
        return sentence
    }
    return sentence.toLowerCase().split(" ").filter(a => a !== "")
    .reduce((a,b) => {a[b] =  (a[b] || 0) +1
    return a},{})
}
// console.log(getFreqOfWords('Today is present and present is your gift'))
// { today: 1, is: 2, present: 2, and: 1, your: 1, gift: 1 }
// console.log(getFreqOfWords('Do you best just do it’))
// { do: 2, you: 1, best: 1, just: 1, it: 1 }
// console.log(getFreqOfWords(null)) //undefined
// console.log(getFreqOfWords(undefined)) //undefined







// 4.นับจำนวนตัวอักษรที่ซ้ำในประโยค
// ให้เขียนฟังก์ชัน
// function getCharFrequency(sentence) { ... }
// โดยจะต้องแปลง string เป็นตัวพิมพ์เล็กทั้งหมด และคืนค่าเป็น object ที่บอกว่าตัวอักษรแต่ละตัว (a–z) 
// ปรากฏกี่ครั้ง โดย ไม่ต้องนับช่องว่างและเครื่องหมายวรรคตอน
const msg = "Hello WorldW!"
// { h:1, e:1, l:3, o:2, w:1, r:1, d:1 }
function getCharFrequency(sentence) {
    if (sentence !== Array){
        return sentence
    }
    return sentence.toLowerCase().split("").filter(a => a !== " " && /[a-z]/i.test(a))
    .reduce((a,b)=> {a[b] = (a[b] || 0) + 1
        return a
    },{})
}
// console.log(getCharFrequency(msg));

function getCharFrequency2(sentence) {
    if (sentence !== Array){
        return sentence
    }
    return sentence.toLowerCase().match(/[a-z]/g)
    .reduce((a,b)=> {a[b] = (a[b] || 0) + 1
        return a
    },{})
}
// console.log(getCharFrequency2(msg));








// 5.Write a function mergeAndDestructure(obj1, obj2) that merges two
// objects using the spread operator, and then destructures the merged
// object to extract specific properties. Return an object with the extracted properties.
function mergeAndDestructure(obj1, obj2){
    const mergedObj = { ...obj1,...obj2}
    const {name ,age } = mergedObj
    return {name,age}
}
// console.log(mergeAndDestructure({ name: 'John', age: 25 }, { city: 'New York' }))
// { name: 'John', age: 25 }
// console.log(mergeAndDestructure({ name: 'Jane' }, { age: 30, country: 'USA' }))
// { name: 'Jane', age: 30 }







// 6.Write a function extractAndRename(obj) that extracts properties
// name and age from an object, renames them to fullName and
// yearsOld, and returns a new object with these properties.
function extractAndRename(obj){
    const { name , age } = obj
    return {fullName : name , yearsOld : age}
}
// console.log(extractAndRename({ name: 'John', age: 25, city: 'New York' }))
// { fullName: 'John', yearsOld: 25 }
// console.log(extractAndRename({ name: 'Jane', age: 30 }))
// { fullName: 'Jane', yearsOld: 30 }

function justRename(obj){
    return { "fullName": obj.name , "yearsOld" : obj.age }
}
// console.log(justRename({ name: 'John', age: 25, city: 'New York' }))







// 7.Destructure User Info
const user = {
  id: 101,
  name: "Alice",
  contact: {
    email: "alice@mail.com",
    phone: "123-4567"
  }
}
// ให้ใช้ destructuring เพื่อดึงค่า name, email มาเก็บในตัวแปร และพิมพ์ออกว่า:
// "Alice can be reached at alice@mail.com"
function destructureInfo(obj){
    const {name, contact :{email}} = obj
    return `${name} can be reached at ${email}`
}
// console.log(destructureInfo(user));








// 8.Rename Key from parameter
const product = { id: 101, price: 500 };
// อยากเปลี่ยน key price → cost โดยไม่แก้ค่าข้างใน
// ผลลัพธ์ควรเป็น { id: 101, cost: 500 }
function renameKey(obj,oldkey,newkey){
    const {[oldkey]:value,...rest} = obj
    return {...rest,[newkey]: value }
}
// console.log(renameKey(product,"price","cost"));








// 9.Destructure Function Params
const product101 = { id: 1, title: "Laptop", price: 35000, stock: 12 };
// เขียนฟังก์ชัน printProduct(products) ที่ต้องใช้ parameter destructuring เพื่อดึงเฉพาะ title และ price ไปใช้
// output : "Laptop costs 35000 Baht"
function printProduct(product){
    const {title , price } = product
    return `${title} costs ${price} Bath`
}
// console.log(printProduct(product101));








// 10.Write a function removeDuplicateWords(sentence) that takes a string as input and returns a new
// string with all duplicate words removed, while preserving the order of the first occurrence of
// each word. The function should be case insensitive, but the output should maintain the original
// casing. If the input is null, undefined, or an empty string, return an empty string.
function removeDuplicateWords(sentence) {
    if (typeof sentence !== "string") return ""
    const seen = new Set()
    return sentence.split(" ").filter(word => {
            const lower = word.toLowerCase()
            if (seen.has(lower)) {
                return false
            }
            else{
            seen.add(lower)
            return true
            }
        })
        .join(" ")
}
// console.log(removeDuplicateWords("This is a test This test is easy."));// "This is a test easy."
// console.log(removeDuplicateWords("Hello hello HELLO world!"));// "Hello world!"
// console.log(removeDuplicateWords("One two two three three three"));// "One two three"
// console.log(removeDuplicateWords(""));// ""
// console.log(removeDuplicateWords(null));// ""









// 11.Write a function findValue(arr) that takes an array of numbers and
// returns an object with the following properties:
// min: the minimum value in the array
// max: the maximum value in the array
// sum: the sum of all the values in the array
// avg: the average of all the values in the array
// For example, given the array [1, 2, 3, 4, 5], the function should return:
// { min: 1, max: 5, sum: 15, avg: 3 }
function findValue(arr){
    return {
        min:arr.reduce((a,b)=> a > b?b:a),
        max:arr.reduce((a,b)=> a > b?a:b),
        sum:arr.reduce((a,b)=> a+b,0),
        avg:arr.reduce((a,b)=> a+b,0)/arr.length
    }
}
// console.log(findValue([1, 2, 3, 4, 5]));








// 12.Write a function convertToUppercase(arr) that takes an array of
// strings and returns a new array with all strings converted touppercase.
// convertToUppercase(['hello', 'world'])) // 
// convertToUppercase(['javascript', 'is', 'fun'])) // 
function convertToUppercase(arr){
    return arr.map(a=> a.toUpperCase())
}
// console.log(convertToUppercase(['hello', 'world'])) // ['HELLO', 'WORLD']
// console.log(convertToUppercase(['javascript', 'is', 'fun'])) // ['JAVASCRIPT', 'IS', 'FUN']






// 13.Write a function findMax(arr) that takes an array of numbers and
// returns the maximum value using the reduce method.
function findMax(arr){
    return arr.reduce((a,b)=> a>b?a:b)
}
// console.log(findMax([1, 2, 3, 4])) // 4
// console.log(findMax([10, 5, 8, 7])) // 10








// 14.Write a function removeFalsyValues(arr) that takes an array and
// returns a new array with all falsy values removed. Falsy values include
// 0, empty string, false, null, and undefined.
function removeFalsyValues(arr){
    return arr.filter(Boolean)
}
// console.log(removeFalsyValues([0, 1, false, 2, '', 3])) // [1, 2, 3]);
// console.log(removeFalsyValues(['a', '', 'b', null, 'c'])) // ['a', 'b', 'c’]);
// console.log(removeFalsyValues([null, undefined, 'A'])) // ['A']);







// 15.Write a function doubleAndFilterEvenNumbers(arr) that takes an
// array of numbers, filter out odd numbers and returns a new array with doubled numbers.
function doubleAndFilterEvenNumbers(arr){
    return arr.filter(a => a%2==0).map(a => a*2)
}
// console.log(doubleAndFilterEvenNumbers([1, 2, 3, 4]))
// console.log(doubleAndFilterEvenNumbers([5, 6, 7, 8]))







// 16.Write a function populateArray(length, value) that creates an array of
// given length and fills it with the specified value.
function populateArray(length, value){
    let result = []
    for (i = 0;i<length;i++){
        result.push(value)
    }
    return result
}
// console.log(populateArray(3, 'a')); // ['a', 'a', 'a']
// console.log(populateArray(5, 0)); // [0, 0, 0, 0, 0]







// 17.Write a function squareNumbers(arr) that takes an array of numbers
// and returns a new array with each number squared.
function squareNumbers(arr){
    return arr.map(a=> a**2)
}
// console.log(squareNumbers([1, 2, 3, 4])); // [1, 4, 9, 16]
// console.log(squareNumbers([5, 6])); // [25, 36]







// 18.Write a function processNumbers(arr) that takes an array of numbers, squares each number,
// filters out the even numbers, and returns the sum of the remaining numbers.
function processNumbers(arr){
   return arr.filter(a => a%2!==0).reduce((a,b) => a = a + b ** 2,0)
}
// console.log(processNumbers([1, 2, 3, 4])); // 10 (1^2 + 3^2)
// console.log(processNumbers([5, 6, 7, 8])); // 74 (5^2 + 7^2)