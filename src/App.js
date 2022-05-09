// DO NOT DELETE

import * as React from 'react'
import './App.css'
import Header from './Header.js'
import Description from './Description.js'


/**
 * 
 * @type {React.FC}
 */

async function fetchImages() {
  const response = await fetch(
    "https://dog.ceo/api/breeds/image/random"
  );
  const data = await response.json();
  console.log(data.message);
  return data.message;
}

export const App = () => {
  
  return (
    <main>
      <Header props=""/>
      <Description props=""/>
    </main>
  )
}