const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
inputBox.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
function addTask(){
    if(inputBox.value === ''){
        alert("You must write a task first!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        inputBox.value='';
        saveData();
    }
}
listContainer.addEventListener("click", function(x){
    if(x.target.tagName === "LI"){
        x.target.classList.toggle('check');
        saveData();
    }else if(x.target.tagName === "SPAN"){
        x.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();