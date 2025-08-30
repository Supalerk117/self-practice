//Shallow Equality
let book1 = {
    isbn: 123456789,
    title: "JavaScript",
}
 
let book2 = {
    isbn: 123456789,
    title: "JavaScript",
}
function shallowEquality(object1, object2) {
    const keys1 = Object.keys(object1) 
    const keys2 = Object.keys(object2)
 
    if (keys1.length !== keys2.length) {
        return false // ถ้ามี length ไม่เท่ากัน return false
    }
    for (let key of keys1) {
        if (object1[key] !== object2[key]) {
            return false // loop เช็คทีละ key ว่ามี value ไหนไม่เหมือนกันไหม ถ้ามี return false
        }
    }
    return true // ถ้าไม่เป็นตามเงื่อนไขและ loop = มี value เหมือนกันทุกตัว
}
// console.log(shallowEquality(book1,book2));

class Book{
    constructor(isbn,title){
        this.isbn = isbn
        this.title = title
    }
    getISBN(){
        return `ISBN : ${this.isbn}`
    }
    getTitle(){
        return `Name : ${this.title}`
    }
    isShallowEquality(otherObj){
        let thisKeys = Object.keys(this)
        let otherKeys = Object.keys(otherObj)
        
        if(thisKeys.length !== otherKeys.length) {return false}
        for (let key of thisKeys){
            if(this[key] !== otherObj[key]){
                return false
            }
        }
    }
}
const BookA = new Book(123456789,"JavaScript");
const BookB = new Book(123456789,"JavaScript");
const BookC = new Book(987654321,"Python");
// console.log(BookA.isShallowEquality(BookB));







// โจทย์ 1: นับจำนวนตัวเลขซ้ำใน array
// สร้าง object ที่เก็บจำนวนครั้งที่แต่ละตัวเลขปรากฏ
// ผลลัพธ์: {1: 2, 2: 2, 3: 3, 4: 1}

const numbers = [1, 3, 2, 3, 4, 1, 2, 3];

function countNumber(arr){
    return arr.reduce((a,b) => {a[b] = (a[b] || 0) +1
    return a
    },{})
}
// console.log(countNumber(numbers));






// โจทย์ 2: กรอง array ของ object ตามเงื่อนไขหลายตัว
// สร้าง array ใหม่ที่มีเฉพาะสินค้าที่ stock > 0 และ price < 10000
// ผลลัพธ์: [{name: "Keyboard", price:1500,...},{name:"Monitor", price:7000,...}]

const products = [
  { name: "Laptop", price: 35000, stock: 4 },
  { name: "Mouse", price: 500, stock: 0 },
  { name: "Keyboard", price: 1500, stock: 10 },
  { name: "Monitor", price: 7000, stock: 3 }
];

function filterObj(obj){
    return obj.filter(a => a.price<10000 && a.stock > 0)
}
// console.log(filterObj(products));








// โจทย์ 3: ใช้ JSON.stringify() แปลง object เป็น string
// แปลง cart เป็น string ด้วย JSON.stringify() แล้ว console.log
// Output จะเป็น string: 
// '{"items":[{"name":"Laptop","price":35000},{"name":"Mouse","price":500}],"total":35500}'

const cart = {
  items: [
    { name: "Laptop", price: 35000 },
    { name: "Mouse", price: 500 }
  ],
  total: 35500
};

function stringifyConvert(obj){
    return JSON.stringify(obj)
}
// console.log(stringifyConvert(cart));







// โจทย์ 4: แปลง array ของ string เป็น object แยกตัวอักษร
// ให้ผลลัพธ์เป็น object ที่ key = ตัวอักษรตัวแรก
// value = array ของคำที่ขึ้นต้นด้วยตัวอักษรนั้น
// output:
// {
//   a: ["apple", "apricot"],
//   b: ["banana"]
// }

const words = ["apple", "banana", "apricot"];

// เขียนเอง
function groupByFirstLetter(arr){
    let firstLetters = []
    let result = {}
    for (i of arr){
        if(!firstLetters.includes(i[0])){
            firstLetters.push(i[0])
        }
    }
    for (i of firstLetters){
        result[i] = []
    }
    for(i of arr){
        for(o of firstLetters){
            if(i[0] === o){
            result[o].push(i)
            }
        }
    }
    return result
}   
// console.log(groupByFirstLetter(words));

// AI Generate
function groupByFirstLetterAI(words){
    let grouped = words.reduce((acc, word) => {
    const first = word[0];
    acc[first] = acc[first] || [];
    acc[first].push(word);
    return acc;
    }, {});
    return grouped
}
// console.log(groupByFirstLetterAI(words));








// โจทย์ 5: สร้างคลาส Student และคำนวณเกรด
// สร้าง class Student ที่มี properties: name, scores (array ของตัวเลข)
// สร้าง method getAverage() → คืนค่าเฉลี่ยของ scores
// สร้าง method getGrade() → คืนค่าเกรดตามเกณฑ์
// 80+ → "A"
// 70–79 → "B"
// 60–69 → "C"
// ต่ำกว่า 60 → "F"

class Student{
    constructor(name,scores){
        this.name = name
        this.scores = scores
    }
    getAverage(){
        return this.scores.reduce((sum,b)=>sum+b,0)/this.scores.length
    }
    getGrade(){
        let avgscore = this.getAverage()
        console.log(avgscore);
        return avgscore<60?"F":avgscore<70?"C":avgscore<80?"B":"A"
    }
}

const s1 = new Student("Poom", [90, 80, 70]);
const s2 = new Student("Tarn", [100, 30, 20]);
// console.log(s1.getGrade());