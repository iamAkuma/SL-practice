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
