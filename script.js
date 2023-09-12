const button = document.getElementById('btn');
button.addEventListener('click', function() {
    console.log('Button clicked')
    alert('Button clicked!')

})

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
