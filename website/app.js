
// Personal API Key for OpenWeatherMap API
const apiKey = '13ef4f33a6c23dd9a4e0bc19a332e2ec&units=imperial';

// Event listener to add function to existing HTML DOM element
let btn = document.getElementById('generate');

/* Function called by event listener */
btn.addEventListener('click', () => {
  let zipCode = document.getElementById('zip').value;
  let url = `http://api.openweathermap.org/data/2.5/forecast?id=${zipCode}&appid=${apiKey}`;
  // Retrieve data from openWeatherApi
  weatherData(url)
  .then(data => {
    let temp = data.list[0].main.temp;
    let date = data.list[0].dt_txt;
    let feelings = document.getElementById("feelings").value;

    // Post data to the backend
    
    postData(
      "/",
      {
        temp: temp,
        date: date,
        feel: feelings
      }
    )
    .then(res => {
      retrieveData();
    });
  });
});

/* Function to GET Web API Data*/
const weatherData = async (url) =>{
  // retrieve data from open weather api
  const res = await fetch(url);
  return res.json();
}

/* Function to POST data */
const postData = async (path, data) =>{
  // send data to the backend
  await fetch(
    path,
    {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        temp: data.temp,
        date: data.date,
        feel: data.feel
      })
    }
  );
}

/* Function to GET Project Data */
const retrieveData = async () =>{
  const request = await fetch('/all');
  try {
  // Transform into JSON
  const allData = await request.json()
  console.log(allData)
  // Write updated data to DOM elements
  document.getElementById('temp').innerHTML = Math.round(allData.temp) + 'degrees';
  document.getElementById('content').innerHTML = allData.feel;
  document.getElementById("date").innerHTML = allData.date;
  }
  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
 }