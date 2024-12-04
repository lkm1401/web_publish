import Avata from "./Avata";

export default function Profile({image, name, title, isNew}){
  return (
    <div className='profile'>
      <Avata image = {image}  isNew = {isNew} />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}

