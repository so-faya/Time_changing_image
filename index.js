// for the time reading on the screen
let readingtimenode = document.querySelector (".readingtime")
setInterval(() =>{
    let time =new Date();
    readingtimenode.innerHTML = time.toLocaleTimeString();

}, 1000)


// for the images to change to the time allocated to them
document.addEventListener("DOMContentLoaded", function() {

    let timeRanges = {
        wakeUp: [
            { start: "04:00", end: "06:00", image: "image/wakeup.jpg"}
        ],
        lunch: [
            { start: "11:05", end: "12:00", image: "image/bengal-cat-8012976_1280.webp"  }
        ],
        bed: [
            { start: "18:00", end: "20:00", image: "image/cat-8130334_1280.webp" }
        ],
        party: [
            { start: "00:00", end: "03:30", image: "image/cat-7688749_1280.webp" }
        ]
    };

    // Set the initial time range to 'wakeUp'
    let currentRange = timeRanges.wakeUp;

    // Helper function to parse a time string into hours and minutes
    function parseTime(time) {
        const [hours, minutes] = time.split(':').map(Number);
        return { hours, minutes };
    }

    // Function to check if the current time is within a specified range
    function isWithinTimeRange(now, range) {
        const start = parseTime(range.start);
        const end = parseTime(range.end);

        const startMinutes = start.hours * 60 + start.minutes;
        const endMinutes = end.hours * 60 + end.minutes;
        const nowMinutes = now.getHours() * 60 + now.getMinutes();

        if (startMinutes <= endMinutes) {
            return nowMinutes >= startMinutes && nowMinutes <= endMinutes;
        } else {
            // Handle time ranges that wrap around midnight
            return nowMinutes >= startMinutes || nowMinutes <= endMinutes;
        }
    }


    function updateImage() {
        sectwonode = document.querySelector(".secttwo")
        if (!sectwonode) {
            console.error("Element with ID 'sectwonode' not found.");
            return;
        }

        const now = new Date();
        let imageSet = false;

        for (const range of currentRange) {
            if (isWithinTimeRange(now, range)) {
                sectwonode.style.backgroundImage = `url("${range.image}")`;
                imageSet = true;
                break;
            }
        }

        if (!imageSet) {
            sectwonode.style.backgroundImage = 'url("image/img.jpg")';  // Replace with your default image path
        }
    }

    function setTimeRanges(rangeName) {
        if (timeRanges[rangeName]) {
            currentRange = timeRanges[rangeName];
            updateImage();  // Immediately update the image
        } else {
            console.error("Invalid time range rangeName.");
        }
    }

    // Expose setTimeRanges to the global scope
    window.setTimeRanges = setTimeRanges;

    setTimeRanges('wakeUp');  // Set initial time range
    setInterval(updateImage, 60000);  // Check every minute

    
});

// for the party button
function changeImg(){
    var sectwonode = document.getElementById("sectwo")
    sectwonode.style.backgroundImage = " url(image/cat-7688749_1280.webp)"
}

