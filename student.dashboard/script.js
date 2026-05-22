// Constructor Function
function Student(name, age, course){

    this.name = name;
    this.age = age;
    this.course = course;

    // Object Method
    this.introduce = function(){
        return "Hi, my name is " + this.name;
    };

    this.courseDetail = function(){
        return "I am studying " + this.course;
    };
}

// Add Student Function
function addStudent(){

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;

    if(name === "" || age === "" || course === ""){
        alert("Please fill all fields");
        return;
    }

    // Create Student Object
    let student = new Student(name, age, course);

    // Create Card
    let card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `
        <h3>${student.name}</h3>
        <p><strong>Age:</strong> ${student.age}</p>
        <p><strong>Course:</strong> ${student.course}</p>
        <p>${student.introduce()}</p>
        <p>${student.courseDetail()}</p>
    `;

    // Display Student
    document.getElementById("studentList").appendChild(card);

    // Clear Inputs
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";
}

// Digital Clock using setInterval()
function updateClock(){

    let now = new Date();

    let time = now.toLocaleTimeString();

    document.getElementById("clock").innerHTML = time;
}

setInterval(updateClock, 1000);