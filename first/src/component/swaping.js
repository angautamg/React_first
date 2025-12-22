const Swaping = () => {
    let a = 5;
    let b = 10;
    // Swapping values using destructuring assignment
    [a, b] = [b, a];
    //swaping using temp variable
    let temp = a;
    a = b;
    b = temp;
    //swaping without third variable using arithmetic operations
    a = a + b;
    b = a - b;
    a = a - b;
    //swaping without third variable using bitwise XOR operator
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    //swaping using array method
    const arr = [a, b];
    a = arr[1];
    b = arr[0];
    //swaping using object method
    const obj = { first: a, second: b };
    a = obj.second;
    b = obj.first;
    //swaping using multiplication and division approach
    a = a * b;
    b = a / b;
    a = a / b;

    return (
        <div>
            <h1>Swaping Component</h1>
        </div>
    );
};

export default Swaping;