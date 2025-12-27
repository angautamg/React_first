const StarPattern = ({ rating }) => {
    function printStar(n) {
        /*
                *
                **
                ***
                ****
        */
        for (let i = 0; i < n; i++) {
            let row = "";
            for (let j = 0; j <= i; j++) {
                row = row + "*";
            }
            console.log(row);
        }
    }

    function printNum(n) {
        /*
                    1
                    22
                    333
                    4444
                    55555
        */
       // Changed loop to start from 0 to n-1
        for (let i = 0; i < n; i++) {
            let row = "";
            for (let j = 0; j <= i; j++) {
                row = row + (i + 1);
            }
            console.log(row);
        }
    }
       function printNumbers(n) {
        /*      1
                22
                333
                4444
                55555
        */
       // Changed loop to start from 1 to n
        for (let i = 1; i <= n; i++) {
            let row = "";
            for (let j = 1; j <= i; j++) {
                row = row + (i);
            }
            console.log(row);
        }
    }

    return <div>Check the console for the star pattern.</div>;
};

export default StarPattern;