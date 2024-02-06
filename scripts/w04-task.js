/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Spencer",
    photo: "./images/me.JPG",
    favoriteFoods: [
        " Cheese Steak", 
        " Hamburger", 
        " French Fries", 
        " Tacos", 
        " Thai Red Curry"
    ],
    hobbies: [
        "Weight Lifting ",
        "Yoga ",
        "Reading ",
        "Chess ",
        "Chilling "
    ],
    placesLived: []
} 


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({place: "Rexburg Id", length: "3 Years"});
myProfile.placesLived.push({place: "Cumming Ga", length: "7 Years"});
myProfile.placesLived.push({place: "Waconia Mn", length: "4 Years"});
myProfile.placesLived.push({place: "Gernee Il", length: "3 Years"});



/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;


/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});


/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby.trim(); // Trim to remove any leading/trailing spaces
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(placeLived => {
    let dt = document.createElement('dt');
    dt.textContent = placeLived.place;
    let dd = document.createElement('dd');
    dd.textContent = placeLived.length;
    const dl = document.querySelector('#places-lived');
    dl.appendChild(dt);
    dl.appendChild(dd);
});


