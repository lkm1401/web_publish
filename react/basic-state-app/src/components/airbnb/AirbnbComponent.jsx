
export default function AirbnbComponent(props) {
    return (  
        <div className="container">
            <div className="img">
                <img src={props.img} />
                {props.isGood && <span className="isgood">게스트 선호</span>}
                <span className="isheart" 
                        style={{color:props.color}}>❤</span>
            </div>
            <div className="description">
                <p className="d1">{props.d1}</p>
                <p className="d2">{props.d2}</p>
                <p className="d3">{props.d3}</p>
                <p className="d4">{props.d4} /박</p>
            </div>
        </div>
    );
}