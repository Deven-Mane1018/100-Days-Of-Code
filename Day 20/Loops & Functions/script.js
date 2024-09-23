document.getElementById('loopButton').addEventListener('click', function () {
    let output = '';
    for (let i = 1; i <= 10; i++) {
        output += `Number: ${i}<br>`;
    }
    document.getElementById('loopOutput').innerHTML = output;
});

function calculateArea(radius) {
    if (radius <= 0) return "Radius must be positive.";
    return Math.PI * Math.pow(radius, 2);
}

document.getElementById('functionButton').addEventListener('click', function () {
    const radius = 5;
    const area = calculateArea(radius);
    document.getElementById('functionOutput').innerHTML = `Area of the circle with radius ${radius} is: ${area.toFixed(2)}`;
});

document.getElementById('calcButton').addEventListener('click', function () {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    const sum = num1 + num2 + 1;
    document.getElementById('calcOutput').innerHTML = `Sum (faulty): ${sum}`;
});
