let n = 10;
let str = "";

// Upper Part
for (let i = n / 2; i < n; i += 2) {
    // Leading spaces
    for (let j = 1; j < n - i; j += 2) {
        str += " ";
    }
    // First part of the star pattern
    for (let j = 1; j < i + 1; j++) {
        str += "*";
    }
    // Space in the middle
    for (let j = 1; j < (n - i) * 2; j++) {
        str += " ";
    }
    // Second part of the star pattern
    for (let j = 1; j < i + 1; j++) {
        str += "*";
    }
    str += "\n";
}

// Lower Part
for (let i = n; i > 0; i--) {
    // Leading spaces
    for (let j = 0; j < n - i; j++) {
        str += " ";
    }
    // Star pattern
    for (let j = 1; j < i * 2; j++) {
        str += "*";
    }
    str += "\n";
}

// Output the pattern
console.log(str);
