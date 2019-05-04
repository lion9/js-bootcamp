function convertFt0C(temp) {
    return Number(((temp - 32) * 5 / 9).toFixed());
}

console.log((convertFt0C(32)));
console.log((convertFt0C(68)));