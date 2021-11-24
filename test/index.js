// require("./test0726.js");

// const fs = require("fs");
// const path = require('path');
// const readDir = (entry) => {
// 	const dirInfo = fs.readdirSync(entry);
//   console.log('dirInfo', dirInfo)
// 	dirInfo.forEach(item=>{
// 		const location = path.join(entry,item);
// 		const info = fs.statSync(location);
// 		if(info.isDirectory()){
// 			console.log(`dir:${location}`);
// 			readDir(location);
// 		}else{
// 			console.log(`file:${location}`);
// 		}
// 	})
// }
// readDir(__dirname);

// function Foo() {
//   for (let x = 0; x < 3; x++) {
//     for (let y = 0; y < 3; y++) {
//       for (let m = 0; m < 25; m++) {
//         for (let n = 0; n < 40; n++) {
//           const a = 80.92 * x + 61.99 * y + 41.03 * n + 3725.81 - 28.03 * m
//           const b = x + y
//           if (a >= 3760.5 && a < 3760.6 && b === 2) {
//             console.log(`a=${a},x=${x},y=${y},m=${m},n=${n}, b=${b}`)
//           }
//         }
//       }
//     }
//   }
// }
// Foo()
