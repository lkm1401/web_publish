import React, { useState, useEffect } from 'react';
import Book from './Book.jsx';

export default function BookList() {
    const [books, setBooks] = useState([]);
    const [category, setCategory] = useState([]);
    const [type, setType] = useState('total');
    const [selectCategory, setSelectCategory] = useState('선택');
    

    useEffect(()=>{        
        fetch("/data/aladin.json")
        .then(data => data.json())
        .then(jsonData => {
                setCategory(jsonData.category);
                if(type === 'total') {
                    setBooks(jsonData.books);                
                } else {
                    const filterBooks = jsonData.books.filter((book) => book.type === type);
                    setBooks(filterBooks);
                }               
                
            })
            .catch(error => console.log(error));
    }, [type]);

    useEffect(()=>{        
        fetch("/data/aladin.json")
        .then(data => data.json())
        .then(jsonData => {
                setCategory(jsonData.category);
                if(selectCategory === '선택') {
                    setBooks(jsonData.books);                
                } else {
                    const filterBooks = jsonData.books.filter((book) => book.category === selectCategory);
                    setBooks(filterBooks);
                }               
                
            })
            .catch(error => console.log(error));
    }, [selectCategory]);

    const handleClick = (event) => {
        setType(event.target.value);
    }

    const handleChangeCategory = (event) => {
        setSelectCategory(event.target.value);        
    }

    return (
        <>
            <div>
                <input type="radio" name="type" value="total" onClick={handleClick}/> 전체도서
                <input type="radio" name="type" value="domestic" onClick={handleClick}/> 국내도서
                <input type="radio" name="type" value="overseas" onClick={handleClick}/> 국외도서
                
                <select onChange={handleChangeCategory}>
                    <option value='선택'>선택</option>
                    {category && category.map((item) => 
                        <option value={item.name}>{item.name}</option>
                    )}
                </select>
            </div>            
            <ul style={{'display':'grid', 'grid-template-columns': 'repeat(4, 1fr)'}}>
                {books && books.map(book => 
                    <li style={{'list-style-type':'none'}}>
                        <Book img={book.img} title={book.title}/>
                    </li>
                )}
            </ul>
        </>
    );
}

