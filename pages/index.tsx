import type { NextPage } from 'next'
import React from 'react';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  // Where the flight data is pulled from; check it out sometime
  // https://test-flight-data.herokuapp.com/flights?date=2020-01-01
  const [flights, setFlights] = React.useState<any[]>([]);

  // American Airlines uses typescript instead of Javascript, so I have no idea what's happening
  React.useEffect(() => {
    const fetchFlights = async () => {
      const res = await fetch('https://test-flight-data.herokuapp.com/flights?date=2020-01-01');

      const data = await res.json();

      setFlights(data);
    }

    fetchFlights();
  }, []);

  return <div>
    <head>
      <title>Webpage</title>
    </head>
    <div>
      <h1>Text</h1>
    </div>
    
    <main className={styles.main}>
      <h1 className={styles.title}>
        <p>TITLE</p>
      </h1>

      <div>
        <form action="asu.edu">
        <label>Enter flight number: </label>
        <input type="text"></input>
        </form>
      </div>

      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/index.js</code>
      </p>

      
      
      {flights.map((flight) => (
        <p key={flight.flightNumber}>{flight.flightNumber} - {flight.origin.code}</p>
      ))}
    
    <h1>test2</h1>
    </main>
  </div>; //this should all just be html/css coding, so we can figure something out
};

export default Home;