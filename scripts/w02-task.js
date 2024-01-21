/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Spencer Damiano";
let currentYear = 2024;
let profilePicture = "./images/me.JPG";


/* Step 3 - Element Variables */

let nameElement = document.getElementById("name");
let foodElement = document.getElementById("food");
let yearElement = document.querySelector("#year");
let imgElement = document.querySelector("img");



/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imgElement.setAttribute("src", profilePicture);




/* Step 5 - Array */

// step 5.1 - 5.3
let myFavoriteFoods = ["Cheese Steak", "Hamburger", "French Fries", "Tacos", "Thai Red Curry"];
foodElement.innerHTML = `${myFavoriteFoods}`;

// step 5.4 - 5.5
let myMostFavorite = "Medium Rare Stake";
myFavoriteFoods.push(myMostFavorite);
foodElement.innerHTML += `<br> ${myFavoriteFoods}`

// step 5.6 - 5.7
myFavoriteFoods.shift();
foodElement.innerHTML += `<br> ${myFavoriteFoods}`;

// step 5.8 - 5.9
myFavoriteFoods.pop();
foodElement.innerHTML += `<br> ${myFavoriteFoods}`;






