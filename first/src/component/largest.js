const Largest = () => {
    let firstHightes = -Infinity;
let secondHightes = -Infinity;
let arr = [4, 9, 0, 2,12, 8, 7, 1];
const getLargest = (array) => {

    for (let i = 0; i < arr.length; i++){
    if (arr[i] > firstHightes) {
        secondHightes = firstHightes;
        firstHightes = arr[i];
    } else if (arr[i] >secondHightes) {
        secondHightes = arr[i];
    }
    return { firstHightes, secondHightes };
};
    const { firstHightes, secondHightes } = getLargest(arr);
}
    return <div>First Hightes: {firstHightes}, Second Hightes: {secondHightes}</div>;  

};

export default Largest;