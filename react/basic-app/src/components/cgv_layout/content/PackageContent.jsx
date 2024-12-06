import PackageContentItem from "./PackageContentItem";
import PackageContentTitle from "./PackageContentTitle";

export default function PackageContent({title, list}) {
    return (
        <div className="package-content-border">
            <PackageContentTitle title={title} />
            <ul>
                {list && list.map(item => 
                    <li>
                        <PackageContentItem 
                                src={item.src}
                                alt={item.alt}
                                text={item.text}
                                price={item.price}
                        />
                    </li> 
                )}
            </ul>
    </div>
    );
}