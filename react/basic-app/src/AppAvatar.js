import './App.css';
import Avatar from './components/Avatar.jsx';
import AvatarImage from './components/AvatarImage.jsx';
import AvatarImageList from './components/AvatarImageList.jsx';
import AvatarList from './components/AvatarList.jsx';

import { useState, useEffect } from 'react';

export default function App() {
  const [imgList, setImgList] = useState([]);
  const [avatarList, setAvatarList] = useState([]);

  useEffect(()=>{
      fetch("data/avatar.json")
        .then(result => result.json())
        .then(jsonData => {
            setImgList(jsonData.imageList);
            setAvatarList(jsonData.avatarList);
        } )
        .catch();
  }, []);

  return (
    <div className="App">
      <div className="App-container">
        <Avatar img="/images/people1.webp"  name="smith"/>
        <Avatar img="/images/people2.webp"  name="james"/>
        <Avatar img="/images/people3.webp"  name="kelly"/>
      </div>
      <div className="App-container">
        <AvatarImage img="/images/people1.webp" />
        <AvatarImage img="/images/people2.webp" />
        <AvatarImage img="/images/people3.webp" />
      </div>
      <div className="App-container">
        <AvatarImageList list={imgList} />
      </div>
      <div className="App-container">
        <AvatarList list={avatarList} />
      </div>
    </div>
  );
}


