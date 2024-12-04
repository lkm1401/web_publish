import './App.css';
import Profile from '../components/Profile';
import {useState, useEffect} from 'react';

export default function AppProfile() { 
  const [profiles, setProfiles] = useState([]);
  useEffect(()=>{
    fetch('data/profile.json')
    .then((res) => res.json())
    .then((data) => setProfiles(data));

  },[]);


  return (
    <>
      <h1>Profile List</h1>
      {profiles.map((profile)=>(
        <Profile 
          image={profile.image}
          name = {profile.name}
          title = {profile.title}
          isNew = {profile.isNew}
        />
      ))}      
    </>
  );
}


