const n = 10000, p = 257, len = 40;
let x, y, z1, z2, z3, z4, z00, mas1 = [], mas2, mas3;
let a = 1119, b = 131;
let s = "Polotsk State University 1234567890";
let mas;

for(let i = 1; i < len; i++) {
    mas[i] = s[i];
}

for(let i = 1; i < len; i++) {
    console.log(`i=${i}`);
    y = mas[i]
    f1(x,y, n, p, a, b, z2)
    if(z2 === 0) {
        z1 = (x + y) % p;
        console.log("****************************************************** zero *********");
        z2 = (y - x) % p;
        if(z1 < 0) {
            z1 = z1 + p;
        } else if(z2 < 0) {
            z2 = z2 + p
        }
        console.log(z1, z2);
        f3(2, p, z3);
        z4 = ((z1 + z2) * z3) % p;
        mas1[i] = z4;
        mas2[i] = 0;
    } else if(z2 !== 0) {
        f3(z2, p, z3);
        f2(x, y, n, p, a, b, z00)
        z4= (z3*z00+x) % p;
        if(z4 < 0) {
            z4 = z4 + p;
        }
        mas1[i] = 0;
        mas2[i] = z4;
        console.log(z2, z00);
    }

    mas3[i]=mas1[i]+mas2[i];
    console.log(`i=${i}, ${mas3[i]}, char${mas3[i]}`)
}

const f1: (x:number,y: number, n: number, p: number, a: number, b: number, z2: number) => void = (x,y, n, p, a, b, z2) => {
    let d = 1;
    let i, j;
    let z1, z, z0 = 0;
    for(let i=1; i< b; i++) {
        d = (d*a) % p;
    }
    for(let i =0; i< n-1; i++) {
        z1 = 1;
        z=1;
        for (let j = 1; j < i; j++) {
            z = z * x % p;
        }
        for(let j = 1; j < n-i-1;j++) {
            z1 = z1*y%p;
        }
        z0=(z0+z*z1) % p;
    }
    z2=z0*d%p;
    if(z2 < 0) {
        z2 = z2 + p;
    }
}
// TODO: finish f2;
