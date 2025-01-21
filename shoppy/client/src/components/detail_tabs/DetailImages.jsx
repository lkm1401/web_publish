import React from 'react';

export default function DetailImages() {
    const images = ["/images/1.webp", "/images/1.webp", "/images/1.webp"];
    return (
        <div className="detail-images">
            <img className="detail-images holidays-notice"
                    src="/images/holidays_notice.jpg" 
                    alt="holidays notice"  />
            {
                images.map(image => (
                    <div>
                        <img src={image} className="detail-images img" />
                    </div>
                ))
            }
        </div>
    );
}

