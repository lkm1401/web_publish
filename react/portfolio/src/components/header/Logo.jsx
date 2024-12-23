import React from 'react';

export default function Logo({img, name}) {
    return (
        <div className="header__logo">
            <img className="header__logo__img" src={img} alt="logo" />
            <h1 className="header__logo__title">{name}</h1>
        </div>
    );
}

