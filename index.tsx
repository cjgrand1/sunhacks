import type { NextPage } from 'next'
import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

//hello from the other side

const Home: NextPage = () => {
  // https://test-flight-data.herokuapp.com/flights?date=2020-01-01
  const [flights, setFlights] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchFlights = async () => {
      const res = await fetch('https://test-flight-data.herokuapp.com/flights?date=2020-01-01');

      const data = await res.json();

      setFlights(data);
    }

    fetchFlights();
  }, []);

  return <div className={styles.container}>
    {flights.map(flight => (
    <p key={flight.flightNumber}>{flight.flightNumber} - {flight.origin.code}</p>
    ))}
  </div>;
};

export default Home;
