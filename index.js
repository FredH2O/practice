// create a welcoming message via form/input tags

let fName = document.getElementById("firstName");
let lName = document.getElementById("lastName");
let contactNumber = document.getElementById("contactNumber");
let county = document.getElementById("county");
const date = new Date(); // try to get current time value
const hour = date.getHours(); // Convert current Date into Hours

function welcomeGuest() {
    const name = [fName.value, lName.value, contactNumber.value, county.value]; // array to store all information

    if (hour <= 12) {
        document.getElementById("textOutcome").innerHTML = "Good Morning! Thank you for the inquiry " + name[0] + " " + name[1] + " " + "we will ring you on " + name[2] + " and check if the location " + "' " + name[3] + " '" + " is available!";
    }
    else if (hour <= 18) {
        document.getElementById("textOutcome").innerHTML = "Good Afternoon! Thank you for the inquiry " + name[0] + " " + name[1] + " " + "we will ring you on " + name[2] + " and check if the location " + "' " + name[3] + " '" + " is available!";
    }
    else if (hour <= 24) {
        document.getElementById("textOutcome").innerHTML = "Good Evening! Thank you for the inquiry " + name[0] + " " + name[1] + " " + "we will ring you on " + name[2] + " and check if the location " + "' " + name[3] + " '" + " is available!";
    }
}

function faveCuisine(){
    let text;
    let favouriteFood = document.getElementById("favouriteFood").value;
    switch (favouriteFood) {
        case "italian":
        case "italy":
        case "Italian":
            text = "Our Lasagne alla Bolognese and Fattucine al Pomodoro recipe are highly requested by our Customers !!";
            break;
        case "chinese":
        case "china":
        case "Chinese":
            text = "One of our chef's specialty are Kung Pao Chicken and Cantonese Spring Rolls!"
            break;
        case "mexican":
        case "mexico":
        case "Mexican":
            text = "Our favourite are Fajitas and Tacos al pastor!!"
            break;
        case "japanese":
        case "japan":
        case "hapon":
        case "Japanese":
            text = "Our Sushi and Raman range are top tier in Ireland?!"
            break;
        case "indian":
        case "india":
        case "Indian":
            text = "We make Samosas and Bhelpuri taste like you are in India!";
            break;
        case "spanish":
        case "spain":
        case "Spanish":
            text = "Our Seafood Paella range are the fresh from the sea! We also do Chicken and Pork Paella!!";
            break;
        case "greek":
        case "greece":
        case "Greek":
            text = "We make Taramasalata and Souvlaki with passion!!"
            break;
        case "french":
        case "france":
        case "French":
            text = "Our Chefs have studied French Cuisines and love making Bouillabaisse and Salmon en Papillote!!";
            break;
        case "filipino":
        case "pinoy":
        case "philippines":
        case "tagalog":
        case "Filipino":
            text = "Most of our Chefs are Filipino and have passion for entertainment while cooking in front of an audience!";
            break;
        case "thai":
        case "thailand":
        case "Thailand":
            text = "Our Pad Thai have been rank top 10 in Ireland!!";
            break;
        case "germany":
        case "german":
        case "German":
            text = "Our specialty dish is the Sauerbraten and we have a broad range of dishes from Germany";
            break;
        default:
            text = "We're sorry but the cuisine you have chosen is Unavailable.";
            break;
    }
    document.getElementById("textOutcome2").innerHTML = text;
}