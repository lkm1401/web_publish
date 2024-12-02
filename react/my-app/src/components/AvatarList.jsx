import Avatar from "./Avatar";


export default function AvatarList({list}) {
    
    return (
        <ul>
            {list.map((object) => 
                <li>
                    <Avatar img={object.img} 
                            name={object.name} 
                            age={object.age} />
                </li>
            )}
        </ul>
    );
}