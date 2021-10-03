import type { NextPage } from 'next'
import React from 'react';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  // Here is where the flight data is pulled from; check it out sometime
  // https://test-flight-data.herokuapp.com/flights?date=2020-01-01
  const [flights, setFlights] = React.useState<any[]>([]);
  const [weather, setWeather] = React.useState<any[]>([]);

  // American Airlines uses typescript instead of Javascript, so I have no idea what's happening
  React.useEffect(() => { // adds the flight data to the program
    const fetchFlights = async () => {
      const res = await fetch('https://test-flight-data.herokuapp.com/flights?date=2020-01-01');

      const data = await res.json();

      setFlights(data);
    }
    
    fetchFlights();
  }, []);
  React.useEffect(() => {
    const fetchWeather = async () => { //if everything crashes, this is suspect 1
      const res = await fetch('https://api.weather.gov/gridpoints/TOP/31,80/forecast');

      const data = await res.json();

      setWeather(data);
    }

    fetchWeather();
  }, []);

  function input() { // functions to determine user input
  const num = (document.getElementById("inputField") as HTMLFormElement).value;
  //alert(num); //test if working properly

  // filter by user input
  const results = flights.filter(flight => flight.flightNumber === num);

  (document.getElementById("airline") as HTMLFormElement).innerHTML = "Flight number: " + num;
  (document.getElementById("start") as HTMLFormElement).innerHTML = "Origin: " + results[0].origin.city;
  (document.getElementById("end") as HTMLFormElement).innerHTML = "Destination: " + results[0].destination.city;
  (document.getElementById("departure") as HTMLFormElement).innerHTML = "Departure time: " + results[0].departureTime;
  (document.getElementById("weatherStart") as HTMLFormElement).innerHTML = "Weather: 87 f";
  (document.getElementById("weatherEnd") as HTMLFormElement).innerHTML = "Weather: 92 f";

  // animation :)
  (document.getElementById('arrow1') as HTMLFormElement).animate([
    // keyframes
    {transform: 'translateX(0px)'},
    {transform: 'translatex(75px)'}
  ], {
    // timing options
    duration: 2000,
    iterations: Infinity
  });
  (document.getElementById('arrow2') as HTMLFormElement).animate([
    // keyframes
    {transform: 'translateX(0px)'},
    {transform: 'translatex(75px)'}
  ], {
    // timing options
    duration: 2000,
    delay: 200,
    iterations: Infinity
  });
  (document.getElementById('arrow3') as HTMLFormElement).animate([
    // keyframes
    {transform: 'translateX(0px)'},
    {transform: 'translatex(75px)'}
  ], {
    // timing options
    duration: 2000,
    delay: 400,
    iterations: Infinity
  });

  //console.log(results[0].origin.code); //prints origin code to console

  /** unused code
  {flights[0]?.origin.code}
      
  {flights.map((flight) => (
    <p key={flight.flightNumber}>{flight.flightNumber} - {flight.origin.code}</p>
      ))}
  */
}
  

  return <div>
    <head>
      <title>Webpage</title>
    </head>    
    <main className={styles.main}>
      <h1 className={styles.title}>
        <p>TITLE</p>
      </h1>

      <div>
        
          <label id="inputLable">Enter flight number:&emsp;</label>
          <input id="inputField" type="text"></input>
          <button onClick={input}>button</button>
      </div>

      <p className={styles.description}>
        <code className={styles.code}>Numbers to try out: 3949, 4858, 6276</code>
      </p>

      <div className={styles.results}>
        <div className={styles.spacer}>
        <div className={styles.card2}>
          <p id="airline">Flight number:&emsp;</p>
          <p id="start">Origin:&emsp;</p>
          <p id="weatherStart">Weather:&emsp;</p>
         </div>
        </div>
        <div>
          <div className={styles.spacer2}>
          <div className={styles.card3}>
            <h1 id='arrow1'>✈</h1>
            <h1 id='arrow2'>✈</h1>
            <h1 id='arrow3'>✈</h1>
          </div>
          </div>
        </div>
        <div className={styles.spacer1}>
        <div className={styles.card2}>
          <p id="end">Destination:&emsp;</p>
          <p id="departure">Departure time:<br></br></p>
          <p id="weatherEnd">Weather:&emsp;</p>
        </div>
        </div>
      </div>    
    </main>
    <footer>Sunhacks 2021 | Made by: Craig Grande</footer>
  </div>; // Put your names here
};

export default Home;