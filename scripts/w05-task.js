/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templeElement = document.getElementById('temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = temples => {
    console.log("temples displaying");
    temples.forEach((temple) => {
        let article = document.createElement('article');

        let h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        article.appendChild(h3);

        let image = document.createElement('img');
        image.setAttribute('src', temple.imageUrl);
        image.setAttribute('alt', `${temple.location}`);
        article.appendChild(image);

        templeElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
        const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
        templeList = await response.json();
        filterTemples(templeList);
    } catch (error) {
        console.error('Error:', error);
    }
}


/* reset Function */
const reset = () => {
    while (templeElement.firstChild) {
        templeElement.removeChild(templeElement.firstChild);
    }
};


/* filterTemples Function */
const filterTemples = (temples) => {
    reset(); // Make sure this function exists and properly clears the display

    const filter = document.getElementById('filtered').value;
    let filteredTemples;

    switch(filter) {
        case "utah":
            filteredTemples = temples.filter(temple => temple.location.includes("Utah"));
            break;
        case "notutah":
            filteredTemples = temples.filter(temple => !temple.location.includes("Utah"));
            break;
        case "older":
            filteredTemples = temples.filter(temple => {
                const year = parseInt(temple.dedicated.split(', ')[0], 10); // Extracts the year part and parses it to an integer
                return year < 1950;
            });
            break;
        case "all":
        default:
            filteredTemples = temples; // No filtering applied
            break;
    }

    displayTemples(filteredTemples); // Make sure this function is defined to handle the display logic
};



getTemples();

/* Event Listener */

document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });