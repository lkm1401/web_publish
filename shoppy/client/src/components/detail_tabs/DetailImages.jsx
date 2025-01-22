import React from 'react';

export default function DetailImages({imgList, className}) {
    return (
        <div className="detail-images">
            <img className="detail-images holidays-notice"
                    src="/images/holidays_notice.jpg" 
                    alt="holidays notice"  />
            {
                imgList && imgList.map(image => (
                    <div>
                        <img src={image} className={className} />
                    </div>
                ))
            }
        </div>
    );
}

