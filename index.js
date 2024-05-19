let readingtimenode = document.querySelector(".readingtime")

setInterval(() =>{
    let time =new Date();
    readingtimenode.innerHTML = time.toLocaleTimeString();

}, 1000)
