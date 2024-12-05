export default function MovieChartTitle({text1, text2, text3}) {
    return (
        <article class="content-title-style">
            <div>
                <span 
                    class="content-title-style-font font-color-main">
                        {text1}</span>
                <span>&nbsp;</span>
                <span 
                    class="content-title-style-font font-color-gray">
                        {text2}</span>
            </div>
            <div>
                <button class="total-view-button">{text3} &gt;</button>
            </div>
        </article>
    );
}