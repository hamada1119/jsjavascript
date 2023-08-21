const form=document.getElementById("form");
const input = document.getElementById("input");
const ul =document.getElementById("ul");

form.addEventListener("submit",function(event){
    event.preventDefault();//これがないとconsoleで見た時にreloadされてみれない
    console.log(input.value);
    add();
});

function add(){
    if(input.value.length>0){
    const li =document.createElement("li");
    li.innerText=input.value;
    li.classList.add("group");
    ul.appendChild(li);
    input.value="";
    SavaData();
    }
};

function SavaData(){
    const lists=Document.querySelectorAll("li");
    console.log(lists);
}
