const array = [1, 2, 3, 4, 5, 6, 7]

// console.log(array.concat().reverse()) // из-за concat() не переворачивается оригенал
// console.log(array)

function reverse(arr) {
    const copy = arr.concat()
    for (let i = 0; i < arr.length; i++) {
        arr[i] = copy[arr.length - 1 - i]
        console.log('arr[i]', arr[4])
        // 0 -> 7 - 1 - 0 = 6 (6 это  индекс цифры 7)
        // 1 -> 7 - 1 - 1 = 5 (6 это  индекс цифры 6)
        // 2 -> 7 - 1 - 2 = 4 (6 это  индекс цифры 5)
    }
    return arr

  }
    


console.log(reverse(array))
console.log(array)



