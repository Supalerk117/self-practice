// Destructure User Info
// ให้ object:
// const user = {
//   id: 101,
//   name: "Alice",
//   contact: {
//     email: "alice@mail.com",
//     phone: "123-4567"
//   }
// };
// ให้ใช้ destructuring เพื่อดึงค่า name, email มาเก็บในตัวแปร และพิมพ์ออกว่า:
// "Alice can be reached at alice@mail.com"






// Rename Key
// ให้ object:
const product = { id: 101, price: 500 };
// อยากเปลี่ยน key price → cost โดยไม่แก้ค่าข้างใน
// ผลลัพธ์ควรเป็น { id: 101, cost: 500 }
function renameKey(obj,oldkey,newkey){
    const { [oldkey]: value, ...rest } = obj;
    return { ...rest, [newkey]: value };
}
console.log(renameKey(product,"price","cost"));






// Destructure Function Params
// เขียนฟังก์ชันที่รับ object ของสินค้า เช่น:
// const product = { id: 1, title: "Laptop", price: 35000, stock: 12 };
// แล้วฟังก์ชันต้องใช้ parameter destructuring เพื่อดึงเฉพาะ title และ price ไปใช้
// เช่นฟังก์ชัน printProduct(product) จะ console.log ว่า:
// "Laptop costs 35000 Baht"


// getelementbyID การเชื่อมกับ html