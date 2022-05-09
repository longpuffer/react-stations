// DO NOT DELETE
import {useState } from "react";

function Description(){
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/terrier-norwich/n02094258_1106.jpg");
  return (
    <div>
      <div>
        <p>犬の画像を表示するサイトです。</p>
        <img src={dogUrl} alt="" />
      </div>
      <button type="button" onClick={()=>{
        setDogUrl(data);
      }
      }>更新</button>
    </div>
  );
}