// score.ts

// 1. Create an Array of 5 numbers representing test scores
let scores: number[] = [75, 85, 95, 64, 35];

// 2. Create a Tuple to store student's ID and Name
let student: [number, string] = [1, "John Doe"];

// Display scores array
console.log("Score:", scores.join(","));

// Display student information
console.log(`Student ID: ${student[0]}, Name: ${student[1]}`);

// 3. Use a loop to print all scores from the array
let total: number = 0;

for (let i = 0; i < scores.length; i++) {
    console.log(`Test ${i + 1} Score: ${scores[i]}`);
    total += scores[i];
}

// Calculate total and average
let average: number = total / scores.length;

console.log(`Total Score: ${total}`);
console.log(`Average Score: ${average}`);