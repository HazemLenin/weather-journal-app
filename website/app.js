
// Personal API Key for OpenWeatherMap API
const apiKey = '13ef4f33a6c23dd9a4e0bc19a332e2ec&units=imperial';

// Event listener to add function to existing HTML DOM element
let btn = document.getElementById('generate');

/* Function called by event listener */
btn.addEventListener('click', () => {
  retrieveData()
  .then(res => {
    postData()
    .then(res => {
      
    });
  });
});

/* Function to GET Web API Data*/
const retrieveData = async () =>{
  // retrieve data from open weather api
}

/* Function to POST data */
const postData = async () =>{
    // send data to the backend
}

/* Function to GET Project Data */