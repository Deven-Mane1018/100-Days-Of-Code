document.getElementById('checkAgeBtn').addEventListener('click', function() {
    const age = parseInt(document.getElementById('ageInput').value);
    let resultMessage = '';

    // Conditional Statements
    if (age >= 18) {
        resultMessage = 'You are an adult.';
    } else if (age >= 13) {
        resultMessage = 'You are a teenager.';
    } else {
        resultMessage = 'You are a child.';
    }

    document.getElementById('result').textContent = resultMessage;
});
