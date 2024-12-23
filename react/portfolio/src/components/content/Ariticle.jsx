import React from 'react';

export default function Ariticle({type}) {
    const data = {
        "tools": [
            "Visual Studio Code",
            "IntelliJ",
            "Android Studio Code",
            "iOS development tools",
            "Eclipse"
        ],
        "etc":[
            "Git",
            "Scrum Master",
            "SVN"
        ]
    }; 

    return (
        <article class="skills__tools">
            <h3 class="skill__title">{type}</h3>
            <ul>
                {type === 'Tools' ? 
                    data.tools.map(item =>
                        <li>{item}</li>
                    )
                    : data.etc.map(item => 
                        <li>{item}</li>
                    )
                }                
            </ul>
        </article>
    );
}

