const submitButton = document.querySelector('#submitButton')

function findGCD(IntegerA, IntegerB) {
    IntegerA = Math.abs(Number(integer_a.value));
    IntegerB = Math.abs(Number(integer_b.value));
    IntegerA1 = Number(integer_a.value);
    IntegerB1 = Number(integer_b.value);

    if (IntegerA % 1 !== 0) {
        alert(IntegerA + ' ist keine ganze Zahl');
        return false;
    }
    if (IntegerB % 1 !== 0) {
        alert(IntegerB + ' ist keine ganze Zahl');
        return false;
    }

    let remainder;
    if (IntegerA === IntegerB) {
        return GCD = IntegerA;
    }
    else if (IntegerA === 0) {
        return GCD = IntegerB;
    }
    else if (IntegerB === 0) {
        return GCD = IntegerA;
    }
    else {
        while ((IntegerA % IntegerB) > 0) {
            remainder = IntegerA % IntegerB;
            IntegerA = IntegerB;
            IntegerB = remainder;
        }
        return GCD = IntegerB;
    }
}

function updateHTML() {
    document.getElementById("IntegerA1").innerHTML = IntegerA1;
    document.getElementById("IntegerB1").innerHTML = IntegerB1;
    document.getElementById("gcd").innerHTML = GCD;
}

submitButton.addEventListener('click', () => {
    findGCD();
    updateHTML();
});
