// 1
import { add , multiply as mul} from "./mathUtils.js"
// console.log(add(1,2));
// console.log(mul(1,2));



// 2
import sayHello from "./greeting.js"
// console.log(sayHello("Poom"));



// 3
import course,{courseDetails} from "./data.js"
// console.log(course);
// console.log(courseDetails);



// 4
import {toUpper,reverse} from "./stringUtils.js"
// console.log(toUpper("poom"));
// console.log(reverse("poom"));



// 5
import randomNum from "./random.js"
async function run() {
  const result = await randomNum(1,100)
  return result
}
// console.log(run(1,100));
// console.log(randomNum(1,200));



// 6
import {sum , max} from "./arrayUtils.js"
// console.log(sum([1,2,3,4,5,6]));
// console.log(max([1,2,3,4,5,6]));