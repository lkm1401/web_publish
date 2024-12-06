export default function PackageContentTitle({title}) {
    return (
        <div>
            <span className="package-title-font">{title}</span>
            <button className="package-title-button">더보기</button>
        </div>
    );
}