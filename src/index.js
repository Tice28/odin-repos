const todoBtn = document.getElementById('add-btn');
const content = document.getElementById("content");

console.log(todoBtn);
console.log(content);

todoBtn.addEventListener("click" , () =>{
    const temp = document.createElement("div");
    temp.innerText = "Test";
    content.appendChild(temp);

})