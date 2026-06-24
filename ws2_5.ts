let products: [string, number, number][] = [
    ["Laptop", 999.99, 10],
    ["Mouse", 19.99, 50],
    ["Keyboard", 49.99, 30]
];

for (let product of products) {
    console.log(
        "Product:", product[0],
        ", Price:", product[1],
        ", Quantity:", product[2]
    );
}