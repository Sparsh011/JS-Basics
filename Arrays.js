var arr = [1, 2, 3, 4, 5]
console.log(arr);
console.log(arr[8]);
arr[8] = 10
// arr[7] = undefined
// console.log(arr)

arr.sort((a, b) => b - a) // Sorts in descending order
console.log(arr.toString);


console.log("Normal iteration : ");

for (var index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
}

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

console.log("For Each : ");

arr.forEach(element => {
    console.log(element);
});