const sumOfArrayRecursion = () => {
    const sumArray = (arr) => {
        if (arr.length === 0) {
            return 0;
        }
        return arr[0] + sumArray(arr.slice(1));
    };

    // Example usage:
    const array = [1, 2, 3, 4, 5];
    const result = sumArray(array);
    console.log(`Sum of array [${array}] is: ${result}`);
    // Output: Sum of array [1,2,3,4,5] is: 15
    function sum(n){
        if(n==0){
            return array[0];
        }
        return array[n] + sum(n-1);
    }
    console.log(sum(array.length - 1));
}