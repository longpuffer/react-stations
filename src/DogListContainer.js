// DO NOT DELETE
import * as React from 'react'
import {useState ,useEffect} from "react";
import { BreedSelect } from './BreedsSelect'

export function DogListContainer(){
  const [breeds,setBreeds]=useState([]);
  const [selectedBreed, setSelectedBreed] = useState("affenpinscher");
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res=>res.json())
    .then((breed) => {
      console.log()
      setBreeds(breed.message);
    })
    .catch(error =>{
      console.log("error");
    });
  }, []);
  
  return(
    <>
    <BreedSelect breeds={breeds } change={ e => setSelectedBreed(e.target.value)}/>
    </>
  );
}