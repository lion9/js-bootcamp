// Global scope (convertFt0C)
  // Local scope (temp, celsius)
     // Local scope (isFreezing)

function convertFt0C(temp) {
    let celsius = Number(((temp - 32) * 5 / 9).toFixed());
    if (celsius <= 0) {
        let isFreezing = true;
    }
    return celsius;
}

console.log((convertFt0C(32)));
console.log((convertFt0C(68)));