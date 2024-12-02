import './App2.css';
import Avatar from './components/Avatar.jsx';
import AvatarList from './components/AvatarList.jsx';

export default function App2() {
    const list = [
        { "img":"/images/people1.webp", "name": "Smith", "age": "20"},
        { "img":"/images/people2.webp", "name": "James", "age": "30"},
        { "img":"/images/people3.webp", "name": "Kelly", "age": "19"}
    ];

    return (
        <>
            <div className='container'>
                <Avatar img="/images/people1.webp" name="Smith" age="20" />
                <Avatar img="/images/people2.webp" name="James" age="30" />
                <Avatar img="/images/people3.webp" name="Kelly" age="19" />
            </div>
            <AvatarList list = {list}  />
        </>
    );
}




