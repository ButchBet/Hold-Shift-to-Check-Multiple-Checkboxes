// Saving the checkboxes and texts
const checkboxes = Array.from(document.getElementsByClassName("list__checkbox"));
const texts = Array.from(document.getElementsByClassName("list__text"));

// Array to save arrays with the start and end points
let tours = []; // [[start: index1, end: index2]]

// Add click event to each checkbox
checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("click", (e) => {        
        if(!texts[index].classList.contains("lineThrough")) {
            findAddress(index);
        } else {
            checkboxesUnselect(index);
            texts[index].classList.remove("lineThrough");
        }

        // texts[index].classList.toggle("lineThrough");
        
        tours.so
        console.log(tours);
    })
})

// Function to know if the we have to select the boxes from top to down, reverser or don't slect them
function findAddress(indexSelected) {
    const checkboxesClone = checkboxes;
    let tour = [null, null];

    for(let i = 0; i < checkboxesClone.length; i++) {
        if(checkboxesClone[i].checked === true && indexSelected > i) {
            console.log("first")

            // for(let j = 0; j < tours.length; j++) {
            //     if(tours[j][1] === i) {
            //         tour = [i, indexSelected];
                    
            //         checkboxesSelect(tour);
                    
            //         tours.push(tour);

            //         i = indexSelected - 1;
            //     }
            // }

            tour = [i, indexSelected];
            
            checkboxesSelect(tour);
            
            tours.push(tour);

            i = indexSelected - 1;
        } else if(checkboxesClone[i].checked === true && indexSelected < i ) {
            console.log("second");
            
            tour = [indexSelected, i];
            
            checkboxesSelect(tour);
            
            tours.push(tour);
        } else if (i === indexSelected) {
            console.log("third")

            texts[indexSelected].classList.add("lineThrough");
        } 
    }
}


// Function to select the respective checkboxes and line-through the respective texts
function checkboxesSelect(tour) {
    for(let i = tour[0] + 1; i < tour[1]; i++) {
        console.log(i);
        checkboxes[i].checked = true;

        texts[i].classList.add("lineThrough");
    }
}

// Function to unselect the respective checkboxes and line-through the respective texts
function checkboxesUnselect(indexUnselect) {
    const newTours = [];
    console.log(`Unchecked ${indexUnselect}`);

    tours.forEach((tour, index) => {
        if(tour[0] === indexUnselect || tour[1] === indexUnselect) {
            for(let i = tour[0] + 1; i < tour[1]; i++) {
                checkboxes[i].checked = false;

                texts[i].classList.remove("lineThrough");
            }
        } else {
            newTours.push(tour);
        }
    });

    tours = newTours;
}