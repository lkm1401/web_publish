import React from 'react';

export default function Testimonial({img, alt, description, name, company}) {
    return (
        <>
            <img className="testimonial__img" src={img} alt={alt} />
            <div className="testimonial__bubble">
                <p>{description}</p>
                <p><a href="#" className="testimonial__bubble__name">{name}</a> / {company}</p>
            </div>
        </>
    );
}


