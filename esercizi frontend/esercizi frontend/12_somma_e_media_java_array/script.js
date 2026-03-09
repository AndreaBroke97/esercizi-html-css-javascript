var array = [20, 50, 10, 64, 80];
var sum = 0;

array.forEach(function(number) {
    sum += number;
}
);
console.log(sum);

// 2. Calcolo della media
var media = sum / array.length;

console.log("Somma: " + sum); // Output: 224
console.log("Media: " + media); // Output: 44.8