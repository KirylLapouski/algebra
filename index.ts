const n = 10000, p = 257, len = 40;
let x = 103, y, z1, z3, z4, mas1 = [], mas2 = [], mas3 = [];
let a = 1119, b = 131;
let s = "Polotsk State University 1234567890";
let mas = [];

// z2- output parameters
const f1: (x: number, y: number, n: number, p: number, a: number, b: number) => number = (x, y, n, p, a, b) => {
    let d = 1;
    let z1, z, z0 = 0;
    for (let i = 1; i < b; i++) {
        d = (d * a) % p;
    }
    for (let i = 0; i < n - 1; i++) {
        z1 = 1;
        z = 1;
        for (let j = 1; j < i; j++) {
            z = z * x % p;
        }
        for (let j = 1; j < n - i - 1; j++) {
            z1 = z1 * y % p;
        }
        z0 = (z0 + z * z1) % p;
    }
    let z2 = z0 * d % p;
    if (z2 < 0) {
        z2 = z2 + p;
    }

    return z2;
}
// TODO: finish f2;
const f2: (x: number, y: number, n: number, p: number, a: number, b: number) => number = (x, y, n, p, a, b) => {

    let d = 1;
    let z1 = 1, z2 = 1;

    for (let i = 1; i < b; i++) {
        d = d * a % p
    }

    for (let i = 1; i < n; i++) {
        z1 = z1 * x % p
        z2 = z2 * y % p
    }
    let z00 = (z2 - z1) % p;
    if (z00 < 0) {
        z00 = z00 + p
    }
    z00 = z00 * d % p;

    return z00;
}

const f3: (t: number,p: number) => number = (t,p) => {
    let z0 = 0;
    for (let i = 1; i< p-1;i++) {
        if(i*t%p==1){
            z0=i
        }
    }

    return z0;
}


for (let i = 1; i < len; i++) {
    mas[i] = s[i];
}

for (let i = 1; i < len; i++) {
    console.log(`i=${i}`);
    y = mas[i].charCodeAt(0);
    let z2 = f1(x, y, n, p, a, b)
    if (z2 === 0) {
        z1 = (x + y) % p;
        console.log("****************************************************** zero *********");
        z2 = (y - x) % p;
        if (z1 < 0) {
            z1 = z1 + p;
        } else if (z2 < 0) {
            z2 = z2 + p
        }
        console.log(z1, z2);
        z3 = f3(2, p);
        z4 = ((z1 + z2) * z3) % p;
        mas1[i] = z4;
        mas2[i] = 0;
    } else if (z2 !== 0) {
        z3 = f3(z2, p);
        let z00 = f2(x, y, n, p, a, b)
        z4 = (z3 * z00 + x) % p;
        if (z4 < 0) {
            z4 = z4 + p;
        }
        mas1[i] = 0;
        mas2[i] = z4;
        console.log(z2, z00);
    }

    mas3[i] = mas1[i] + mas2[i];
    console.log(`i=${i}, ${mas3[i]}, char${mas3[i]}`)
}

