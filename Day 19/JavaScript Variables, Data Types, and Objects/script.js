document.getElementById('displayInfoBtn').addEventListener('click', function() {
    // JavaScript Variables & Data Types
    let name = "Deven Mane";
    let age = 20;
    let isStudent = true;

    // JavaScript Object
    let person = {
        name: name,
        age: age,
        isStudent: isStudent,
        greet: function() {
            return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
        }
    };

    // Displaying Information
    const info = `<p>${person.greet()}</p><p>Student Status: ${person.isStudent ? 'Yes' : 'No'}</p>`;
    document.getElementById('info').innerHTML = info;
});
