const countries = ["USA", "Pakistan", "Canada", "Australia", "India"];

const countryStateMap = {
    USA: ["New York", "California", "Texas"],
    Pakistan: ["Punjab", "Sindh", "Khyber Pakhtunkhwa"],
    Canada: ["Ontario", "Quebec", "British Columbia"],
    Australia: ["New South Wales", "Victoria", "Queensland"],
    India: ["Maharashtra", "Uttar Pradesh", "Tamil Nadu"]
};

const stateCityMap = {
    "New York": ["New York City", "Buffalo", "Rochester"],
    "California": ["Los Angeles", "San Francisco", "San Diego"],
    "Texas": ["Houston", "Austin", "Dallas"],
    "Punjab": ["Lahore", "Rawalpindi", "Faisalabad"],
    "Sindh": ["Karachi", "Hyderabad", "Sukkur"],
    "Khyber Pakhtunkhwa": ["Peshawar", "Abbottabad", "Swat"],
    "Ontario": ["Toronto", "Ottawa", "Mississauga"],
    "Quebec": ["Montreal", "Quebec City", "Laval"],
    "British Columbia": ["Vancouver", "Victoria", "Kelowna"],
    "New South Wales": ["Sydney", "Newcastle", "Wollongong"],
    "Victoria": ["Melbourne", "Geelong", "Ballarat"],
    "Queensland": ["Brisbane", "Gold Coast", "Sunshine Coast"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"]
};


const countryDropdown = document.getElementById("country");
countries.forEach(country => {
    const option = document.createElement("option");
    option.text = country;
    option.value = country; 
    countryDropdown.appendChild(option);
});

function populateStates() {
    const country = document.getElementById("country").value;
    const stateDropdown = document.getElementById("state");
    stateDropdown.innerHTML = "<option value=''>Select State</option>";
    stateDropdown.disabled = true; 
    document.getElementById("city").disabled = true;
    if (country !== "") {
        const states = countryStateMap[country];
        if (states) { 
            states.forEach(state => {
                const option = document.createElement("option");
                option.text = state;
                option.value = state;
                stateDropdown.appendChild(option);
            });
            stateDropdown.disabled = false; 
        }
    }
}

function populateCities() {
    const state = document.getElementById("state").value;
    const cityDropdown = document.getElementById("city");
    cityDropdown.innerHTML = "<option value=''>Select City</option>";
    cityDropdown.disabled = true; 
    if (state !== "") {
        const cities = stateCityMap[state];
        if (cities) { 
            cities.forEach(city => {
                const option = document.createElement("option");
                option.text = city;
                option.value = city;
                cityDropdown.appendChild(option);
            });
            cityDropdown.disabled = false;
        }
    }
}