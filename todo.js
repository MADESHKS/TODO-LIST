const inputbox = document.getElementById("textbox")
const listcontainer = document.getElementById("options")
function maddy()
{
    if(inputbox.value === ''){
        alert("you must write somethings");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML="\u00d7";
        li.appendChild(span)

    }
    inputbox.value = "";
}
listcontainer.addEventListener("click",function(event){
   (event.target.tagName === "span")
        event.target.parentElement.remove();
    
})