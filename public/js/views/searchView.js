import { elements } from './base';


// Data from the user
export const getInput = () => elements.inputField.value;


// Clear input from the box
export const clearInput = () => {
    elements.inputField.value = '';
}

// Clear data from document
export const clearData = () => {
    elements.mainField.innerHTML = '';
}

// Calculate current date.
const calculateDate = (d) => { 
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September', 'October', 'November', 'December'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month}, ${year}`;
}




// Render results to the UI.
export const renderResults = (data) => {

    // For date
    let now = new Date();

    const markup = `
        <section class="location">
            <div class="city-name">${data.city},${data.country}</div>
            <div class="date">${calculateDate(now)}</div>
        </section>
        <div class="current">
            <div class="temp">${Math.round(data.temp)}<span>°c</span></div>
            <img src="./public/img/${data.icon}.png" class="image"><div class="weather">${data.description}</div>
            <div class="High-Low">${Math.round(data.temp_maxi)}°c / ${Math.round(data.temp_mini)}°c</div>
            <div class="humidity">Humidity : ${data.humidity}%</div>
        </div>
    `;


    elements.mainField.insertAdjacentHTML('beforeend', markup);
}