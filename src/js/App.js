// Saving the checkboxes and texts
const checkboxes = Array.from(document.getElementsByClassName("list__checkbox"));
const texts = Array.from(document.getElementsByClassName("list__text"));

// Array to save objects with the start and end points
const tour = []; // {start: index1, end: index2}

// Add click event to each checkbox
checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("click", (e) => {
        let [stopPoint, address] = [null, null];
        [stopPoint, address] = findAddress(index);
        console.log(stopPoint, address)
        texts[index].classList.toggle("lineThrough");

    })
})

// Function to know if the we have to select the boxes from top to down, reverser or don't slect them
function findAddress(index) {
    let stopPoint = index + 1;
    console.log(stopPoint);
    for(stopPoint; stopPoint < checkboxes.length; stopPoint++) {
        if(texts[stopPoint].classList.contains("lineThrough")) {
            return [stopPoint, true];
        }
    }

    stopPoint = index - 1;
    console.log(stopPoint);
    for(stopPoint; stopPoint >= 0; stopPoint--) {
        if(texts[stopPoint].classList.contains("lineThrough")) {
            return [stopPoint, false];
        }
    }

    return [stopPoint, null];
}
