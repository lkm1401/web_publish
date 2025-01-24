import React from 'react';
import ImageList from '../commons/ImageList.jsx';

export default function DetailImages({imgList}) {
    return (
        <div className="detail-images">
            <img className="detail-images holidays-notice"
                    src="/images/holidays_notice.jpg" 
                    alt="holidays notice"  />
            {/* {
                imgList && imgList.map(image => (
                    <div>
                        <img src={image} className={className} />
                    </div>
                ))
            } */}
            
            <ImageList className="detail-images-list"
                                imgList={imgList}/>
        </div>
    );
}

