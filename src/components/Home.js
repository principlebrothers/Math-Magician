import React from 'react';
import './style/Home.css';

function Home() {
  return (
    <div className="homeContainer">
      <header>
        <h1>Welcome to Maths magicians</h1>
      </header>
      <p>
        Math teaches us multiple problem-solving abilities like equations,
        computations, or algorithms which help us
        {' '}
        <br />
        further in multiple aspects of life. The most famous saying in math must be,
        “Everything around you is numbers, everything around you is mathematics”.
        <br />
        With math magicians calculation is simple and fast
      </p>
    </div>
  );
}

export default Home;
