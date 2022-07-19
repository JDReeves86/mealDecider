// ev.preventDefault(); prevents default action of buttons to reload the page.
// document.forms[0]; identifies form elements in HTML file. first form element is [0] and each subsequent one is [1], [2] etc.
//      Form elements must be at the same level as each other for this numbering system to work at grabbing proper ones. 
//      Adding the .reset() method resets the form upon calling, adding the id() method will pull the id tagged in HTML.
//      Line 19 logs the form id to console.

let restaurants = [ ]
const mealForm = document.getElementById("mealDecider")
const submit = document.getElementById("submit")
const decide = document.getElementById("decide")
const result = document.getElementById("result")
const options = document.getElementById("options")
const added = document.getElementById("added")
const food = document.getElementById("food")
const freeTextOption = document.getElementById("food2")
const startOver = document.getElementById("blank")

submit.addEventListener("click", buildArr)
decide.addEventListener("click", mealDecider)
//startOver.addEventListener("click", clearOptions)/## Resets the entire form and clears the array to start over.
console.log(document.forms[0].id)
console.log(mealForm.id)

// retuns true if response is only white space or empty - all white space gets trimmed down to a length of 0, by including the ! before it changes the value from a number to true/false.
// can function without by changing the if statement calling isEmpty to "if (isEmpty(place) == 0) { etc etc. }" Current if statement in buildArr triggers based on tre/false return values.
function isEmpty(str) {                                                         
    return !str.trim().length
};

// builds the array by taking the value from the text input, if input is empty or trims down to 0, input is rejected by popping it from the array.
// otherwise, user receives the message that option is added.
function buildArr(ev) {
    ev.preventDefault()
    const place = food.value;
    restaurants.push(place);
    // const freeText = freeTextOption.value
    // restaurants.push(place, freeText);
    console.log(document.forms[0].id)
    if (isEmpty(place)) {
            alert("Don't blank me, bro.")
            restaurants.pop()
            // restaurants.pop()
        }
    else {
        added.innerHTML = "Option added!"
        options.innerText =`Your options are: ${restaurants.join(", ")}` 
    }
    food.value=""

    console.log(restaurants);
    // document.forms[0].reset(); resets the form while preserving the array. 
    //
    //*** WHY DOES this only clear the text box when placed inside the function, but clear the entire form when
    // @ the global scope? Is it because when placed in the fuinction the clear forms command only affect the text field?? Has same id value at the global and local scope. ***
    //
    //
    // document.querySelector("form").reset();
}

// Once array is built by submitting options, this will iterate over the built array populated with the options
// If the submission results as null or undefined it will display text prompting user to input text.
function mealDecider(ev) {
    ev.preventDefault();
    for (i=0; i<1; i++) {
        meal = restaurants[Math.floor(Math.random() * restaurants.length)]
    };
    result.innerHTML = `I have decided you want ${meal}`;
    console.log(restaurants)
    document.forms[0].reset();
    if (meal === undefined || null) {
        alert("You need to input some stuff my dude.")
        result.innerHTML = " "
    };
}

// Function that clears array and starts the process over. effectively useless and verbose compared to other methods, but I can do it, so I did.
// function clearOptions(ev) {
//     ev.preventDefault();
//     // restaurants = [ ];
//     // result.innerHTML = " "
//     // added.innerHTML = " "
//     // options.innerHTML = " "
//     document.querySelector("form").reset();
// }
