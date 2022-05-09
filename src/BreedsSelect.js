// DO NOT DELETE
import * as React from 'react'




export function BreedSelect(props){
  return (
    <select
      onChange={props.change}>
        {
          Object.keys(props.breeds).map(breed => {
            return (
              <option key={breed} value={breed}>
                {breed}
              </option>
            )
          })
        }
    </select>
)
}