let fahrenheit = 32;

let celsius = Number(((fahrenheit - 32) * 5 / 9).toFixed());

let kelvin = Number((celsius + 273.15).toFixed());

console.log('Celsius: ' + celsius + '\n' + 'kelvin: ' + kelvin);
