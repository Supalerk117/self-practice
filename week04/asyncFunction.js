// Async Fetch User Data (async/await)
// สมมุติเรามีฟังก์ชันที่คืน promise:
function getUser() {
    return new Promise(resolve => {
        setTimeout(() => resolve({ id: 1, name: "Alice" }), 3000);
    });
}
// ให้เขียน async function ที่ใช้ await เพื่อดึง user มา แล้ว console.log ว่า "User Alice loaded!"
async function fetchUserData(){
    const user = await getUser()
    console.log("User Alice loaded!");
}
// fetchUserData()






// Async Chain API Calls (then)
// สมมุติว่า:
function getUser2() {
  return Promise.resolve({ id: 1, name: "Alice" });
}
function getOrders(userId) {
  return Promise.resolve(["Book", "Pen"]);
}
// ให้เขียนโค้ดแบบ .then() ที่ดึง user ก่อน แล้วตามด้วย orders และแสดงว่า
// "Alice has orders: Book, Pen"
async function fetchOrder(){
    getUser2()
    .then(user => getOrders(user.id))
    .then(orders => {console.log(`${user.name} has order: ${orders}`);
    })  
}
// fetchOrder()





// Profile Formatter
// ให้ object เก็บข้อมูลผู้ใช้:
const user1 = {
  name: "Alice",
  age: 23,
  email: "alice@mail.com"
};
// ให้เขียนฟังก์ชันที่รับ object นี้ แล้วคืน string ว่า
// "Name: Alice, Age: 23, Email: alice@mail.com"
// (ใช้ Object.keys() หรือ Object.entries())
function returnString(obj){
    return Object.entries(obj).map(([key,value])=> `${key[0].toUpperCase() + key.slice(1)}: ${value}`).join(", ")
}
// console.log(returnString(user1));








// Count Properties
// ให้ object เก็บ config เช่น:
const settings = { theme: "dark", notifications: true, autoSave: false };
// เขียนฟังก์ชันหาว่า object นี้มี property กี่ตัวโดยใช้ Object.keys()
function countProp(obj){
    return Object.keys(obj).length
}
// console.log(countProp(settings));









// Filter by Value
// มี object ที่เก็บชื่อกับคะแนน:
const scores = { Alice: 80, Bob: 65, John: 92, Lisa: 55 };
// ให้เขียนฟังก์ชันที่คืน object ใหม่ที่เก็บเฉพาะคนที่ได้คะแนน >= 70
// (เช่น { Alice: 80, John: 92 })
// Hint: ใช้ Object.entries() + filter() + Object.fromEntries()
function valueFilter(obj){
    return Object.fromEntries(Object.entries(obj).filter(a => a[1] >= 70 ))
}
// console.log(valueFilter(scores));









// Merge Objects
// มี user หลักและข้อมูลเสริม:
const user = { id: 1, name: "Alice" };
const extra = { age: 23, country: "Thailand" };
// เขียนฟังก์ชันที่รวม object ทั้งสองให้เป็น object เดียว (ใช้ spread operator ...)
function mergeObj(obj1,obj2){
    return {...obj1,...obj2}
}
const newObj = mergeObj(user,extra)
// console.log(newObj);
// console.log(mergeObj(user,extra));







// Sort Object by Value
// มี object เก็บยอดขายสินค้า:
const sales = { book: 120, pen: 80, notebook: 200 };
// ให้เรียงลำดับจากมากไปน้อย แล้วคืนเป็น array ของ [key, value]
// (เช่น [["notebook", 200], ["book", 120], ["pen", 80]])
function sortObjectByValue(obj){
    return Object.entries(obj).sort((a,b)=> b[1] - a[1])
}
// console.log(sortObjectByValue(sales));








// Group by First Letter
// ให้ array ของชื่อ:
const names = ["Alice", "Adam", "Bob", "Bella", "Charlie"];
// เขียนฟังก์ชันที่จัดกลุ่มชื่อโดยตัวอักษรแรก แล้วเก็บใน object เช่น:
// { A: ["Alice", "Adam"], B: ["Bob", "Bella"], C: ["Charlie"] }
function groupByFirstLetter(arr) {
    let firstLetters = []
    let result = {}
    for (let i of arr){
        if (!firstLetters.includes(i[0])){
            firstLetters.push(i[0])
        }
    }
    for (i of firstLetters){
        result[i] = []
    }
    for (i of arr){
        for (o of firstLetters){
            if(i[0] === o){
                result[o].push(i)
            }
        }
    }
    return result
}
// console.log(groupByFirstLetter(names));