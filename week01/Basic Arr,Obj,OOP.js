// 1.กรองข้อมูลจาก API และจัดรูปแบบใหม่
// - กรองสินค้าที่ stock มากกว่า 0
// - แปลงให้เหลือเฉพาะชื่อสินค้าและราคา
// - ราคาควรมีรูปแบบเป็น "35,000 บาท" (ใช้ toLocaleString)

// AI Generate
const products = [
  { id: 1, name: "Laptop", price: 35000, stock: 4 },
  { id: 2, name: "Mouse", price: 500, stock: 0 },
  { id: 3, name: "Keyboard", price: 1500, stock: 0 },
  { id: 4, name: "Monitor", price: 1100, stock: 6 },
  { id: 5, name: "Headphone", price: 1500, stock: 0 },
  { id: 6, name: "Speaker", price: 1500, stock: 5 },
]; 
// เขียนเอง
function HaveInstock(){
    return products.filter(i => (i.stock > 0)).map(i => ({name:i.name, price:i.price.toLocaleString() + " Bath"}))
}








// 2. รวมข้อมูลจาก 2 Array ของ Object ตาม id
// - สร้าง array ใหม่ที่รวม name และ score ไว้ด้วยกัน
// - Output ตัวอย่าง: [{ name: "Poom", score: 85 }, { name: "Mook", score: 92 }]

// AI Generate
const users = [
  { id: 1, name: "Poom" },
  { id: 2, name: "Tarn" },
  { id: 3, name: "Lucky" },
];
const scores = [
  { userId: 1, score: 85 },
  { userId: 2, score: 92 },
];
// เขียนเอง
const merged = users.map(user => {const scoreObj = scores.find(s => s.userId == user.id)
    return {
        name: user.name,
        score: scoreObj ? scoreObj.score : null
    }
})









// 3.สร้างคลาส OOP สำหรับจัดการตะกร้าสินค้า
// สร้างคลาสชื่อ Cart ที่มี
// - addItem(name, price)
// - removeItem(name)
// - getTotal() => คืนราคารวม
// ลองเพิ่มสินค้า 3 ชิ้น ลบ 1 ชิ้น และดูราคารวม

// เขียนเอง
class Cart {
    constructor(){
        this.items = []
    }
    addItem(name,price){
        this.items.push({name,price})
    }
    removeItem(name){
        this.items = this.items.filter(n => n.name !== name)
    }
    getTotal(){
        console.log(this.items.reduce((sum,item) => sum + item.price,0));
    }
}
const cart = new Cart()
cart.addItem("สบู่",30)
cart.addItem("แป้ง",10)
cart.addItem("แชมพู",20)
cart.removeItem("สบู่")








// 4.นับจำนวนคำซ้ำใน Array และแปลงเป็น Object
// แปลงเป็น object ที่นับจำนวน เช่น
// { react: 3, vue: 2, angular: 1 }

// AI Generate
const tags = ["react", "vue", "react", "angular", "vue", "react"];
// เขียนเอง
function countArr(arr){
  return arr.reduce((a, b) => {
    a[b] = (a[b] || 0) + 1; 
    return a;
  }, {});
}









// 5.ฟังก์ชันค้นหาสินค้า (Case-insensitive)
// เขียนฟังก์ชัน searchProducts(keyword) ให้ค้นหาแบบไม่สนตัวพิมพ์ใหญ่/เล็ก
// ตัวอย่าง searchProducts("ipad") => [{ id: 3, name: "iPad Air" }]

// AI Generate
const productsList = [
  { id: 1, name: "iPhone 15" },
  { id: 2, name: "Samsung Galaxy" },
  { id: 3, name: "iPad Air" },
];
// AI Generate
function searchProducts(keyword) {
  const lowerKeyword = keyword.toLowerCase();
  return productsList.filter(product =>
    product.name.toLowerCase().includes(lowerKeyword)
  );
}