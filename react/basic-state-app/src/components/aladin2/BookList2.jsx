import React, {useState, useEffect} from 'react';
import Book from '../aladin/Book.jsx';

export default function BookList2() {
    const [books, setBooks] = useState([]);
    const [type, setType] = useState('total');

    useEffect(()=>{
        fetch("/data/aladin.json")
            .then(data => data.json())
            .then(jsonData => {
                if(type === 'total'){
                    setBooks(jsonData.books)
                } else {
                    const filterBooks 
                        = jsonData.books.filter(book => book.type === type);
                    setBooks(filterBooks);
                }
            })
            .catch(error => console.log(error));
    }, [type]);

    const handleTypeClick = (event) => {
        setType(event.target.value);        
    }


    return (
        <div>
            <div>
                [{type}]
                <input type="radio" name="type" value="total" 
                    onClick={handleTypeClick} /> 전체
                <input type="radio" name="type" value="domestic" 
                    onClick={handleTypeClick} /> 국내
                <input type="radio" name="type" value="overseas"
                    onClick={handleTypeClick}  /> 국외
            </div>
            <div style={{'display':'grid', 'grid-template-columns': 'repeat(4, 1fr)'}}>
                {books.map((book) => 
                    <Book img={book.img} title={book.title} />
                )}
            </div>
        </div>
    );
}

