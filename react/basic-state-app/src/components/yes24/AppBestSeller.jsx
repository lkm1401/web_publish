import React, {useState, useEffect} from 'react';
import BestBook from './BestBook.jsx';
import './BestBook.css';
import './Menu.css';
import MenuList from './MenuList.jsx';

export default function AppBestSeller() {
    const [menuList, setMenuList] = useState([]);
    const [bookList, setBookList] = useState([]);
    const [category, setCategory] = useState('total');

    useEffect(()=>{
        fetch("/data/yes24.json")
            .then(data => data.json())
            .then(jsonData => {
                setMenuList(jsonData.menuList);

                if(category === 'total') {
                    setBookList(jsonData.bookList);
                } else {
                    //category 값에 따라 필터링 처리 후 setBookList에 추가
                    const filterBooks = 
                        jsonData.bookList.filter((book) => book.category === category);
                    setBookList(filterBooks);
                }

            })
            .catch(error => console.log(error));
    }, [category]);

    //AppBestSeller <-- MenuList <-- Menu
    const handleMenuClickReq2 = (category) => {
        setCategory(category);     
    }

    return (
        <div className='container'>
            <MenuList list={menuList} click={handleMenuClickReq2} />
            <BestBook list={bookList}/>
        </div>
    );
}

