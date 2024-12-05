
export default function HeaderTopMenu({href, src, name}) {
    return (
        <a href={href} 
            target="_parent"
            className="header-menu-icon">
            <img src={src} alt=""/>    
            <span>&nbsp;&nbsp;{name}</span>
        </a>
    );
}