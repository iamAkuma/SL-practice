// const button = document.getElementById('btn');
// button.addEventListener('click', function() {
//     console.log('Button clicked')
//     alert('Button clicked!')

// })

let todayDate = new Date()
document.write(todayDate.toDateString() + '<br>')

const naam = 'Saral';
let age = 21;
let isStudent = true;

document.write(` My name is ${naam}, I am ${age} years old!<br>` );


if(isStudent=== true) {
    document.write("Student<br>")
} else
{
    document.write("not a student")
}

const colors = ['red', 'green', 'brown']
colors.forEach( (color) => {
    document.write(color + '<br>')
})

// function sayHello() {
//     alert("Hello, World!");
// }
// sayHello();

function greet(name) {
    document.write("Hello, " + name + "!" + '<br>');
}

greet("Alice"); // Invoke the function
greet("Saral");
greet("akuma");


document.getElementById("content").innerHTML = "New content" + '<br>';
document.getElementById("content").textContent = "Updated text";


// Get references to the HTML elements
const nameField = document.getElementById("nameField");
const passwordField = document.getElementById("passwordField");
const loginButton = document.getElementById("btn");

// Add an event listener to the login button
loginButton.addEventListener("click", function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Validate the name field
    const nameValue = nameField.value.trim(); // Remove leading/trailing spaces
    if (nameValue === "") {
        alert("Name field cannot be empty");
        return; // Stop further execution
    }

    const passwordValue = passwordField.value.trim();
    if(passwordValue===""){
        alert('Password Field Cannot Be Empty');
        return;
    }

    // If the name is valid, you can proceed with your login logic here
    // For now, let's just display an alert
    alert("Login Success!")
});

// Example: Real-time password strength check
document.getElementById("passwordField").addEventListener("input", function() {
    var password = this.value;
    var strength = checkPasswordStrength(password);
    updateStrengthIndicator(strength);
});

function checkPasswordStrength(password) {
     if (password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password)) {
        return 100; // Strong
    } else if (password.length >= 6) {
        return 50; // Medium
    } else {
        return 0; // Weak
    }
}

function updateStrengthIndicator(strength) {
    var indicator = document.getElementById("strengthIndicator");
    var strengthText = "Password Strength: ";

    if (strength >= 80) {
        indicator.textContent = strengthText + "Strong";
        indicator.style.color = "green"; // Change the indicator text color for strong passwords
    } else if (strength >= 50) {
        indicator.textContent = strengthText + "Medium";
        indicator.style.color = "orange"; // Change the indicator text color for medium passwords
    } else {
        indicator.textContent = strengthText + "Weak";
        indicator.style.color = "red"; // Change the indicator text color for weak passwords
    }

    // Optionally, you can update the style of the indicator further (e.g., a progress bar).
}





