// for the time reading on the screen
let readingtimenode = document.querySelector (".readingtime")
setInterval(() =>{
    let time =new Date();
    readingtimenode.innerHTML = time.toLocaleTimeString();

}, 1000)


// for the images to change to the time allocated to them
document.addEventListener("DOMContentLoaded", function() {
    function updateImage() {
        sectwonode = document.querySelector(".secttwo")
        if (!sectwonode) {
            console.error("Element with ID 'sectwonode' not found.");
            return;
        }

        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();

        if ((hours === 4 && minutes >= 0) || (hours === 5) || (hours === 6 && minutes === 0) || (hours === 7 && minutes === 0)) {
            sectwonode.style.backgroundImage = "url(image/wakeup.jpg)";  //  wake-up time image path
        } else if ((hours === 11 && minutes >= 5) || (hours === 12 && minutes === 0)) {
            sectwonode.style.backgroundImage = "url(image/bengal-cat-8012976_1280.webp)";  //  lunch time image path
        } else if ((hours === 18 && minutes >= 0) || (hours === 19) || (hours === 20 && minutes === 0)) {
            sectwonode.style.backgroundImage = "url(image/cat-8130334_1280.webp)";  //  bed time image path
        } else if ((hours >= 0 && hours <= 3 && minutes <= 30)) {
            sectwonode.style.backgroundImage = "url(image/cat-7688749_1280.webp)";  //  party time image path
        } else {
            sectwonode.style.backgroundImage = "url(image/img.jpg)";  //  default image path
        }
    }

    updateImage();
    setInterval(updateImage, 60000); // Check every minute
});










// const partynode = document.querySelector(".party")
// const sectwonode = document.querySelector(".sectwo")



// for the party button
function changeImg(){
    var sectwonode = document.getElementById("sectwo")
    sectwonode.style.backgroundImage = " url(image/cat-7688749_1280.webp)"
}

