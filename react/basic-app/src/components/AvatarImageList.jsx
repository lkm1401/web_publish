import AvatarImage from './AvatarImage.jsx';

export default function AvatarImageList({list}) {
    return (
        <ul>
            { list.map((item) => <li><AvatarImage img={item.img} /></li> ) }
        </ul>
    );
}
