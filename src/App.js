// DO NOT DELETE

import * as React from 'react'
import './App.css'
import {Header} from './Header.js'
import {Description} from './Description.js'
import {DogListContainer} from './DogListContainer'
import {BreedSelect} from './BreedsSelect'

/**
 * 
 * @type {React.FC}
 */

async function fetchImages() {
  const response = await fetch(
    "https://dog.ceo/api/breeds/image/random"
  );
  const data = await response.json();
  return data.message;
}

export const App = () => {
  return (
    <main>
      <Header/>
      <DogListContainer/>
      <Description />
    </main>
  )
}

