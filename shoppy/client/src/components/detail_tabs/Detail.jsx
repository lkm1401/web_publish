import React from 'react';
import DetailImages from './DetailImages.jsx';
import DetailInfo from './DetailInfo.jsx';
import DetailInfoNotice from './DetailInfoNotice.jsx';

export default function Detail({imgList}) {
    return (
        <div>
            <DetailImages imgList={imgList} />
            <DetailInfo />
            <DetailInfoNotice />
        </div>
    );
}

