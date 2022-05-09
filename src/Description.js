// DO NOT DELETE
import * as React from 'react'
import {useState } from "react";
import DogImage from './DogImage';

function Description(){
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/terrier-norwich/n02094258_1106.jpg");

  return (
    <div>
      <DogImage url={dogUrl}/>
      <button type="button" onClick={()=>{
      }
      }>更新</button>
    </div>
  );
}

export default Description;