export default function HeaderBottomMenu({name}) {
    return (
        <>
            <a href="#">{name}</a>
            <dl>
                <dt>영화</dt>
                <dd>무비차트</dd>
                <dd>아트하우스</dd>
                <dd>ICECON</dd>
            </dl>
        </>
    );
}