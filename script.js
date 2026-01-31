          // -------- Task No : 1 ---------
let heading = document.getElementById("heading");
heading.innerText = "Welcome to JavaScript DOM"
// console.log(heading);


          //  ------- Task No : 2 ---------
let para = document.getElementById("para");
let button = document.getElementById("button");

function  changeTxtBtn(){
    para.innerText = "Paragraph text changed!"
}

         // ------- Task No : 3 ----------
function changebgBtn(){
   document.body.style.backgroundColor = "lightblue"    
}


        //  ------- Task No : 4 --------------
function alertBtn(){
    alert("DOM is working!")
}


        // -------- Task No : 5 ----------------
let input = document.getElementById("myInput")
let para2 = document.getElementById("para2")
function updateBtn(){
    para2.textContent = input.value
}

