// Saving the checkboxes and texts
const checkboxes = Array.from(document.getElementsByClassName("list__checkbox"));
const texts = Array.from(document.getElementsByClassName("list__text"));

// Array to save arrays with the start and end points
const tours = []; // [[start: index1, end: index2]]

// Add click event to each checkbox
checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("click", (e) => {
        let [stopPoint, address] = [null, null];
        
        if(!checkbox.classList.contains("lineThrough")) {
            [stopPoint, address] = findAddress(index);


            let tour = [index, stopPoint];
            tour.sort((a, b) => a - b);

            console.log(tour);
            
            checkboxesSelect(tour);
            
            tours.push(tour);
        } else {

        }
        texts[index].classList.toggle("lineThrough");
        
        console.log(tours);
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


// Function to select the respective checkboxes and line-through the respective texts
function checkboxesSelect(tour) {
    for(let index = tour[0] + 1; index < tour[1]; index++) {
        checkboxes[index].checked = true;

        texts[index].classList.add("lineThrough");
    }
}