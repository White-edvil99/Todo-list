const inpbox = document.getElementById("input-box");
const listcont = document.getElementById("list-container");

function addtask() {
    if (inpbox.value === "") {
        alert("You must write something!");
    }
    else {
       let  li = document.createElement("li");
        li.innerHTML = inpbox.value;
        listcont.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&times";
        li.appendChild(span);
    }
    inpbox.value="";
    save();
}

listcont.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        save();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save();
    }
}, false);

function save(){
    localStorage.setItem("data",listcont.innerHTML);
}
function showtask(){
    listcont.innerHTML = localStorage.getItem("data");
}
showtask();