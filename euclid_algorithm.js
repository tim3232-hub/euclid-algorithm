const Submit = document.querySelector('#Submit')
function gcd(a, b) {
    a = Number(integer_a.value);
    b = Number(integer_b.value);
    a1 = Number(integer_a.value);
    b1 = Number(integer_b.value);
    a = Math.abs(a);
    b = Math.abs(b);
    let r;
    if (a % 1 !==0 || b % 1 !==0 || isNaN(a)) {
        alert('a oder b ist keine ganze Zahl')
        return false;
    }
    else if (a === b) {
        document.getElementById("a1").innerHTML = a1;
        document.getElementById("b1").innerHTML = b1;
        document.getElementById("gcd").innerHTML = a;
        return a;
    }
    else if (a === 0) {
        document.getElementById("a1").innerHTML = a1;
        document.getElementById("b1").innerHTML = b1;
        document.getElementById("gcd").innerHTML = b;
          return b;  
    }
    else if (b === 0) {
        document.getElementById("a1").innerHTML = a1;
        document.getElementById("b1").innerHTML = b1;
        document.getElementById("gcd").innerHTML = a;
        return a;
    }
    else {
        while ((a % b) >0 ) {
            r = a % b;
            a = b;
            b = r;
        }
        document.getElementById("a1").innerHTML = a1;
        document.getElementById("b1").innerHTML = b1;
        document.getElementById("gcd").innerHTML = b;
        return b;
    }  
}
Submit.addEventListener('click', gcd)
