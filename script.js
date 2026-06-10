// Mobile Menu Toggle

const menuBtn =
document.getElementById("menuBtn");

const menu =
document.getElementById("menu");

menuBtn.addEventListener("click", () => {
menu.classList.toggle("show");
});


// Smooth Scrolling

document.querySelectorAll("nav a")
.forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

target.scrollIntoView({
behavior:"smooth"
});

});

});


// Typewriter Effect

const text =
"Web Developer";

let i = 0;

function typeWriter(){

if(i < text.length){

document.getElementById(
"typewriter"
).innerHTML += text.charAt(i);

i++;

setTimeout(
typeWriter,
150
);

}

}

typeWriter();


// Live Clock

function updateClock(){

const now =
new Date();

const time =
now.toLocaleTimeString();

document.getElementById(
"clock"
).textContent = time;

}

setInterval(
updateClock,
1000
);

updateClock();


// Dark Mode

const themeBtn =
document.getElementById(
"themeBtn"
);

themeBtn.addEventListener(
"click",
() => {

document.documentElement
.classList.toggle("dark");

}
);


// Skills Animation

window.addEventListener(
"scroll",
() => {

const skills =
document.getElementById(
"skills"
);

const position =
skills.getBoundingClientRect().top;

const screen =
window.innerHeight;

if(position < screen){

document.getElementById(
"htmlBar"
).style.width="90%";

document.getElementById(
"cssBar"
).style.width="85%";

document.getElementById(
"jsBar"
).style.width="80%";

document.getElementById(
"tailwindBar"
).style.width="75%";

document.getElementById(
"reactBar"
).style.width="70%";

document.getElementById(
"nodeBar"
).style.width="65%";

}

}
);


// Project Filter

const filterButtons =
document.querySelectorAll(
".filter-btn"
);

const projects =
document.querySelectorAll(
".project"
);

filterButtons.forEach(button => {

button.addEventListener(
"click",
() => {

const filter =
button.dataset.filter;

projects.forEach(project => {

if(
filter === "all" ||
project.classList.contains(filter)
){

project.style.display =
"block";

}
else{

project.style.display =
"none";

}

});

});

});


// Back To Top Button

const topBtn =
document.getElementById(
"topBtn"
);

window.addEventListener(
"scroll",
() => {

if(
window.scrollY > 300
){

topBtn.style.display =
"block";

}
else{

topBtn.style.display =
"none";

}

}
);

topBtn.addEventListener(
"click",
() => {

window.scrollTo({
top:0,
behavior:"smooth"
});

}
);


// Contact Form Validation

document.getElementById(
"contactForm"
)
.addEventListener(
"submit",
function(e){

e.preventDefault();

const name =
document.getElementById(
"name"
).value.trim();

const email =
document.getElementById(
"email"
).value.trim();

const message =
document.getElementById(
"message"
).value.trim();

if(
name === "" ||
email === "" ||
message === ""
){

alert(
"Please fill all fields"
);

return;

}

const formData = {
name,
email,
message
};

console.log(formData);

alert(
"Form submitted successfully"
);

this.reset();

}
);


// To-Do List

const taskInput =
document.getElementById(
"taskInput"
);

const addTaskBtn =
document.getElementById(
"addTaskBtn"
);

const taskList =
document.getElementById(
"taskList"
);

const taskCount =
document.getElementById(
"taskCount"
);

let tasks =
JSON.parse(
localStorage.getItem("tasks")
) || [];

function saveTasks(){

localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);

}

function updateCount(){

const remaining =
tasks.filter(
task => !task.completed
).length;

taskCount.textContent =
`${remaining} tasks remaining`;

}

function renderTasks(){

taskList.innerHTML = "";

tasks.forEach(
(task,index) => {

const li =
document.createElement(
"li"
);

const checkbox =
document.createElement(
"input"
);

checkbox.type =
"checkbox";

checkbox.checked =
task.completed;

const span =
document.createElement(
"span"
);

span.textContent =
task.text;

if(task.completed){

span.classList.add(
"completed"
);

}

checkbox.addEventListener(
"change",
() => {

tasks[index].completed =
!tasks[index].completed;

saveTasks();

renderTasks();

}
);

const deleteBtn =
document.createElement(
"button"
);

deleteBtn.textContent =
"Delete";

deleteBtn.addEventListener(
"click",
() => {

tasks.splice(
index,
1
);

saveTasks();

renderTasks();

}
);

li.appendChild(
checkbox
);

li.appendChild(
span
);

li.appendChild(
deleteBtn
);

taskList.appendChild(
li
);

}
);

updateCount();

}

function addTask(){

const text =
taskInput.value.trim();

if(text === "")
return;

tasks.push({
text:text,
completed:false
});

saveTasks();

renderTasks();

taskInput.value="";

}

addTaskBtn.addEventListener(
"click",
addTask
);

taskInput.addEventListener(
"keypress",
function(e){

if(e.key==="Enter"){

addTask();

}

}
);

renderTasks();
