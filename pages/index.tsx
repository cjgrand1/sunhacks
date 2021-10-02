import type { NextPage } from 'next'
import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
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

  return <div className={styles.container}>
    <head>
      
      <p>test</p>
    </head>
    <main className={styles.main}>
      <h1 className={styles.title}>
        <p>TITLE</p>
      </h1>
      {flights[0]?.flightNumber}
    
    <h1>test2</h1>
    </main>
  </div>; //this should all just be html/css coding, so we can figure something out
};

export default Home;