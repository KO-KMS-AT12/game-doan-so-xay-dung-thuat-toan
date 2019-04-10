function createArr(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(i);
    }
    return arr;
}

function linearSearch(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (n === arr[i]) {
            console.log("BINGO");
        }
    }
}

function binarySearch(arr, n) {
    arr.sort(function (a, b) {
        return a - b;
    });

    let min = 0;
    let max = arr.length - 1;
    let mid = 0;

    while (min <= max) {
        mid = Math.round((min + max) / 2);
        if (arr[mid] === n) {
            return arr[mid] + " BINGO";
        } else if (arr[mid] < n) {
            min = mid + 1;
        } else {
            max = mid - 1;
        }
    }
    return -1;
}

console.time("LinearSearch");
linearSearch(createArr(100), 88);
console.timeEnd("LinearSearch");

console.time("BinarySearch");
binarySearch(createArr(100), 88);
console.timeEnd("BinarySearch");