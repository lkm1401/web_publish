
export default function Avata({image, isNew}){
  return(
    <div>
      <img src = {image}  className ='img'></img>
      { isNew && <span className='new'>New</span>}
    </div>
  );
}