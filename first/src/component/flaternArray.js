// const flattenArray = (arr) => {
//     return arr.reduce((acc, val) =>
//         Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val)
//     , []);
// };

// export default flattenArray;
function flattenArray(arr) {
    // Your implementation
    const result = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            result.push(...flattenArray(item));
        } else {
            result.push(item)
        }
    }
    return result;
}

//For the purpose of user debugging.
flattenArray([1, [2, [3, 4], 5], 6]);