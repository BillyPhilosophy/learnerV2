
// class Point {
//     constructor(x, y) {
//       // ...
//     }
  
//     toString() {
//       // ...
//     }
//   }
//   console.log(Reflect.ownKeys(Point.prototype));
// function deepClone(obj) {
//     let newObj = obj.constructor === Array ? [] : {}
//     for (let key in obj) {
//         console.log(typeof obj[key] === 'object','test');
//         newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
//     }
//     return newObj
// }
Object.prototype.method=function(){
    　　console.log(this);
    }
    var myObject={
    　　a:1,
    　　b:2,
    　　c:3
    }
    for (var key in myObject) {
      console.log(key);
    }