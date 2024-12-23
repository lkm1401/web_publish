import React from 'react';


export default function SectionWrap({id, title, description, children}) {
    return (
        <section id={id} className="section max-container">
            <h2 className="title">{title}</h2>
            {id === 'skill' && <p class="description">Skills & Attributes</p>}
            {id === 'skill' ? <p>{description}</p>
                : <p className="description">{description}</p> }
            {children}            
        </section>
    );
}

