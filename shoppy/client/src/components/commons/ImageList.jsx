import React from 'react';
import { FaPlus } from "react-icons/fa6";

export default function ImageList({imgList, className}) { 
    // console.log('name==>> ', className.substring(0,6));
    const name = className.substring(0,6);  //review 이미지 
    
    return (
        <ul className={className}>
            {   name !== 'review' ?
                        imgList && imgList.map( image => 
                                <li><img src={image} alt="" className={name=== 'detail'? 'detail-images-list img' : ''} /></li>
                            )
                    :  imgList && imgList.map((image, i) =>                             
                            <li className="review-top-img-metadata">
                                <img src={image} alt="" />
                                { i === 6 && 
                                    <>
                                        <p className="review-top-imglist-metadata"></p>
                                        <p className="review-top-imglist-metadata2"><span><FaPlus /></span> <span>더보기</span> </p>
                                    </>    }                                
                            </li>)
            }
        </ul>
    );
}
