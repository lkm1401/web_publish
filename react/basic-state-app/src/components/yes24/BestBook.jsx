import React from 'react';
import BestBookButton from './BestBookButton.jsx';
import BestBookAvatar from './BestBookAvatar.jsx';
import BestBookContent from './BestBookContent.jsx';

export default function BestBook({list}) {    
    return (
        <>
            {list && list.map((book,i) => 
                <div style={{display: 'flex', 'margin-bottom': '20px'}}>            
                    <BestBookAvatar 
                            rank={i + 1}
                            img={book.img} />
                    <BestBookContent 
                            suggest={book.suggest}
                            today={book.today}
                            type={book.type}
                            title={book.title}
                            author={book.author}
                            company={book.company}
                            pubDate={book.pubDate}
                            price={book.price}
                            perSale={book.perSale}
                            point={book.point}
                    />
                    <BestBookButton />            
                </div>
            ) }
        </>
    );
}

