let readingtimenode = document.querySelector (".readingtime")
const timebutton = document.querySelector (".time-setter")
const timebuttonn = document.querySelector(".time-setter1")
const timebuttonnn = document.querySelector(".time-setter2");
// const partynode = document.querySelector(".party")
// const sectwonode = document.querySelector(".sectwo")
const d = new Date(04:00am-10:00am);
timebutton.innerHTML = d.toLocaleTimeString();
setInterval(() =>{
    let time =new Date();
    readingtimenode.innerHTML = time.toLocaleTimeString();

}, 1000)

// for the party button
function changeImg(){
    var sectwonode = document.getElementById("sectwo")
    sectwonode.style.backgroundImage = " url(image/bengal-cat-8012976_1280.webp)"
}

