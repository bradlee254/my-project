//define the list of lessons for the juniour
const lessons =[
    " HTML basics"," CSS fundamentals"," JavaScript basics"," DOM manipulation",
    " Git and GitHub", " Introduction to react", " API fetching",
    " Final planning"
];
const lessonList = document.getElementById("lessonList");
const progressBar = document.getElementById("progressBar");
// load saved state  from local storage or use empty object if none
const savedState= JSON.parse(localStorage.getItem("lessonState")) || {};


// loops thruou each lesson  and creat a list item
 lessons.forEach((lesson, index)=>{
    const li = document.createElement("li");
    li.className='bg-blue-100 mb-[20px] p-[10px] block justify-around '
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = savedState[index] || false;
//if the lesson was previously marked complete, add "completed" class
    if(checkbox.checked)
        li.classList.add("completed ");
        

        const span = document.createElement("span");
        
        span.textContent = lesson;
        span.className = "lesson-text";

    checkbox.addEventListener("change",() =>{

        li.classList.toggle("completed");
                savedState[index] = checkbox.checked;
        localStorage.setItem("lesssonState",JSON.stringify(savedState));
                updateProgress();
    });
    li.appendChild(checkbox);
    li.appendChild(span);
    lessonList.appendChild(li);
 })
 //update the progress bar
function updateProgress(){
    const total = lessons.length;
    const completed = document.querySelectorAll(".completed").length;
    const percent = Math.round((completed /  total)* 100);

    progressBar.style.width = percent + "%";
    progressBar.textContent = percent + "%";}
 updateProgress()