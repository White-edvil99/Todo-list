document.querySelector("#btn").addEventListener("click",function(){
    document.querySelector(".magic").style.display = "block";
});

const inputext = document.getElementById("inputtext");
const listele = document.getElementById("list-container");

function addtask(){
    if(inputext.value === "") {
        alert("Enter a Task!");
    } else{
       let li = document.createElement("li");
       li.innerHTML = inputext.value;
       listele.appendChild(li);
       let span = document.createElement("span");
       span.innerHTML = "&times";
       li.appendChild(span);
    }
    inputext.value ="";
}
listele.addEventListener("click",function(a){
    if(a.target.tagName == "LI"){
        a.target.classList.toggle("checked")
    } else if(a.target.tagName == "SPAN"){
        a.target.parentElement.remove();
    }
});


