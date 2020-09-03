
// Builds the tabs for the conversion that take place in each one 
function tabs(evt, math) {
    var i, tabLinks, tabContent;
    tabContent = document.getElementsByClassName("tab-content")   // the content to each tab
    for(i = 0; i < tabContent.length; i++) {      // all of the elements with tab-content class
        tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tablinks");       // The links/buttons to each tab
    for(i = 0; i < tabLinks.length; i++) {        // all of the elements with tablinks class
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(math).style.display = "block";        // Making the current link content visiable
    evt.currentTarget.className += " active";     // Changing the current link button color

}

// Deleting the input they have entered
function clear() {
    let inputs = document.getElementsByClassName("inputs");
    let results = document.getElementsByClassName("results");
}

// calculating inches to feet and inches
function inch () {
    let inputInch = document.getElementById("input-inch").value;
    let feet = Math.floor(inputInch / 12);
    let inches = inputInch % 12;
    inches = inches.toFixed(2)
    document.getElementById("result-inch").innerHTML =
    inputInch + " is " + feet + " feet and " + inches + " inches.";
}

// calculating feet and inches to inches
function feet () {
    let inputInch = document.getElementById("input-feet-inch").value;
    let inputFeet = document.getElementById("input-feet").value;
    let inches = (+inputFeet * 12) + +inputInch;
    inches = inches.toFixed(2)
    document.getElementById("result-feet").innerHTML =
    inputFeet + " feet and " + inputInch + " inches is " + inches + " inches.";
}

function angle () {
    let adjacent = document.getElementById("side-adj").value
    let opposite = document.getElementById("side-opp").value
    let sides = Math.pow(adjacent, 2) + Math.pow(opposite, 2)
    let finalSide = Math.sqrt(sides)
    finalSide = finalSide.toFixed(2)
    document.getElementById("result-angle").innerHTML =
    "The hypotenuse side of the right triangle is " + finalSide;
}