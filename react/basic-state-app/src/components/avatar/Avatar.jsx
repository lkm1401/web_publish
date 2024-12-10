
export default function Avatar({img, name, isNew}) {
    return (
        <div className="container">
            <img src={img} />
            <p>{name}</p>
            {isNew && <span className="new">New</span>}
        </div>
    );
}