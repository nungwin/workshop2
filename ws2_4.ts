let scores: number[] = [75, 85, 95, 64, 35];

let student: [number, string] = [1, "John Doe"];

console.log("Score:", scores.join(","));

console.log(`Student ID: ${student[0]}, Name: ${student[1]}`);

let total: number = 0;

for (let i = 0; i < scores.length; i++) {
    console.log(`Test ${i + 1} Score: ${scores[i]}`);
    total += scores[i];
}

let average: number = total / scores.length;

console.log(`Total Score: ${total}`);
console.log(`Average Score: ${average}`);
