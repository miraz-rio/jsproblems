//feetToMile
function feetToMeters(feet) {
    const conversionFactor = 0.3048;
    return feet * conversionFactor;
}

// Example usage:
const feet = 10;
const meters = feetToMeters(feet);
console.log(`${feet} feet is equal to ${meters} meters.`);


