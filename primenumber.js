const number = parseInt(prompt("Enter a number: "));
let d = 1;
 if(number > 1) {

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
           d = 0;
        }
    }

    if (d == 1) {
        console.log("is a prime number",number);
    } else {
        console.log("is a not prime number",number);
    }
}
