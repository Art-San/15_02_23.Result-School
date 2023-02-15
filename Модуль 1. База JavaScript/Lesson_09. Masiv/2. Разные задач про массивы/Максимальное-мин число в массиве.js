//                 for
// ============================================================
var list = [34000, 1, 529, -78, 89.7, 1243, 2000, 300000, 22]; 
function maxElement (list){
   
    let max = list[0];
    for(let i = 0; i < list.length; i++){
        if((list[i]) > max){
            max = list[i]; 
        } 
    }
    return max;
}

console.log("maxElement(list)", maxElement(list));

//             Math.max()
// =================================================================
const goals = [8, 1, 1, 3, 2, -1, 5];
let newArr = Math.max(...goals)
console.log("newArr", newArr)  // "newArr" 8

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }
 console.log(getMaxOfArray(goals))

//               Math.min()
//==================================================================
const goals2 = [8, 1, 1, 3, 2, -1, 5];
let minGol = Math.min(...goals)
console.log("minGol", minGol)     // -1

//              min через for
const goals3 = [8, 1, 1, 3, 2, -1, 5]
let min = goals3[0]
for (let i = 0; i < goals3.length; i++) {
    if (goals3[i] > 0 && goals3[i] < min) {
        min = goals3[i]
    }
}
console.log('min', min)
