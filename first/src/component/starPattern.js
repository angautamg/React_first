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
 function printReverseNum(n) {
        /*
                    *
                   **
                  ***
                 ****
                *****
        */
     for (let i = 0; i < n; i++) {
         let row = "";

         for (let k = 0; k < n - (i + 1); k++){
             row = row + " ";
         }
         for (let j = 0; j <= i; j++) {
             row = row + "*";
         }
         console.log(row);
     }
 }
printReverseNum(5) 
 function printSwitchNum(n) {
        /*
        1
        101
        101
        1010
        10101
        */
     for (let i = 0; i < n; i++) {
         let row = ""; let switchs = 1;
         
        //  for (let k = 0; k < n - (i + 1); k++){
        //      row = row + " ";
        //  }
         for (let j = 0; j <= i; j++) {
             row = row + switchs;
             if (switchs === 1) switchs = 0;
             else
                 switchs = 1;
         }
         console.log(row);
     }
 }
printReverseNum(5) 
function printZeroOne(n) {
        /*
        1
        01
        010
        1010
        10101
        */
        let toggle = 1;
     for (let i = 0; i < n; i++) {
         let row = ""; 
         
        //  for (let k = 0; k < n - (i + 1); k++){
        //      row = row + " ";
        //  }
         for (let j = 0; j <= i; j++) {
             row = row + toggle;
             if (toggle === 1) toggle = 0;
             else
                 toggle = 1;
         }
         console.log(row);
     }
 }
printZeroOne(5) 
    return <div>Check the console for the star pattern.</div>;
};

export default StarPattern;