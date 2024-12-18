import React from 'react';

export default function BestBookContent(props) {
    return (
        <div className='container-content'>
            <div className='container-content-tags'>
                { props.suggest && <span>강력추천</span> }
                { props.today && <span>오늘의책</span> }
            </div>
            <div>
                <span>[{props.type}]</span>
                <span>{props.title}</span>
            </div>
            <div>
                <span>{props.author} 저 | </span>
                <span>{props.company} | </span>
                <span>{props.pubDate}</span>
            </div>
            <div>
                <span>{props.price}원 </span>
                <span>({props.perSale}% 할인)</span>
                <span>p {props.point}원</span>
            </div>
        </div>
    );
}

