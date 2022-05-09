// DO NOT DELETE
import * as React from 'react'
export function DogImage(props){
  return(
    <div>
        <p>犬の画像を表示するサイトです。</p>
        <img src={props.url} alt="" />
      </div>
  );
}

