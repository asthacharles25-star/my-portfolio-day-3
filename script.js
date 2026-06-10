/* Mobile Menu */

const menuBtn =
document.getElementById("menuBtn");

const menu =
document.getElementById("menu");

menuBtn.addEventListener("click",()=>{

    menu.classList.toggle("show");

});


/* Smooth Scrolling */

document
.querySelectorAll('a[href^="#"]')
.forEach(link=>{

    link.addEventListener(
        "click",
        function(e){

            e.preventDefault();

            document
            .querySelector(
                this.getAttribute("href")
            )
            .scrollIntoView({
                behavior:"smooth"
            });

        }
    );

});


/* Typewriter Effect */

const text = "Web Developer";

let i = 0;

function typeWriter(){

    if(i < text.length){

        document
        .getElementById("typing")
        .innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter,150);
    }
}

typeWriter();


/* Live Clock */

function updateClock(){

    const now = new Date();

    document
    .getElementById("clock")
    .textContent =
    now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();


/* Form Validation */

const form =
document.getElementById(
    "contactForm"
);

form.addEventListener(
    "submit",
    function(e){

        e.preventDefault();

        const name =
        document.getElementById(
            "name"
        ).value;

        const email =
        document.getElementById(
            "email"
        ).value;

        const message =
        document.getElementById(
            "message"
        ).value;

        if(
            name === "" ||
            email === "" ||
            message === ""
        ){

            alert(
                "Please fill all fields"
            );

        }

        else{
            console.log({
                name:name,
                email:email,
                message:message
            });

            alert(
                "Form submitted successfully"
            );

            form.reset();

        }

    }
);


/* Dark Mode */

const themeBtn =
document.getElementById(
    "themeBtn"
);

themeBtn.addEventListener(
    "click",
    ()=>{

        document
        .documentElement
        .classList
        .toggle("dark");

    }
);
/* Project Filter */

const filterButtons =
document.querySelectorAll(
".filter-btn"
);

const projects =
document.querySelectorAll(
".project"
);

filterButtons.forEach(btn=>{

btn.addEventListener(
"click",
()=>{

const filter =
btn.dataset.filter;

projects.forEach(project=>{

if(
filter==="all" ||
project.classList.contains(filter)
){
project.style.display="block";
}
else{
project.style.display="none";
}

});

});

});


/* Skill Animation */

window.addEventListener(
"scroll",
()=>{

const skills =
document.getElementById(
"skills"
);

const position =
skills.getBoundingClientRect()
.top;

if(position < 400){

document
.getElementById(
"htmlBar"
)
.style.width="90%";

document
.getElementById(
"cssBar"
)
.style.width="85%";

document
.getElementById(
"jsBar"
)
.style.width="75%";

}

});


/* Back To Top */

const topBtn =
document.getElementById(
"topBtn"
);

window.addEventListener(
"scroll",
()=>{

if(
window.scrollY > 200
){
topBtn.style.display=
"block";
}
else{
topBtn.style.display=
"none";
}

});

topBtn.addEventListener(
"click",
()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});





/* Todo List */

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

let tasks = JSON.parse(
localStorage.getItem(
"tasks"
)
) || [];

const saveTasks = ()=>{

localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);

};

const renderTasks = ()=>{

taskList.innerHTML="";

tasks.forEach(
(task,index)=>{

const li =
document.createElement(
"li"
);

li.innerHTML=
`
<input
type="checkbox"
${task.completed ?
"checked" : ""}>

<span class="${
task.completed ?
"completed" : ""
}">
${task.text}
</span>

<button>
Delete
</button>
`;

const checkbox =
li.querySelector(
"input"
);

checkbox.addEventListener(
"change",
()=>{

tasks[index]
.completed =
checkbox.checked;

saveTasks();

renderTasks();

});

const deleteBtn =
li.querySelector(
"button"
);

deleteBtn.addEventListener(
"click",
()=>{

tasks.splice(
index,
1
);

saveTasks();

renderTasks();

});

taskList.appendChild(li);

});

const remaining =
tasks.filter(
task=>
!task.completed
).length;

taskCount.textContent=
`${remaining}
tasks remaining`;

};

addTaskBtn
.addEventListener(
"click",
()=>{

if(
taskInput.value.trim()
!== ""
){

tasks.push({

text:
taskInput.value,

completed:false

});

taskInput.value="";

saveTasks();

renderTasks();

}

});

renderTasks();