import React from 'react';

export default function Project({img, alt, title, description}) {
    return (
        <>
            <img className="project__img" src={img} alt={alt} />
            <div className="project__metadata">
                <h3 className="project__metadata__title">{title}</h3>
                <p>{description}</p>
            </div>
        </>
    );
}

