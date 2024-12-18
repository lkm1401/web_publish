
export default function Menu({name, href, bg, color}) {
    return (
        <a  href={href}
            className="menu-item"
            style={{backgroundColor: bg, color: color}}>{name}</a>        
    );
}