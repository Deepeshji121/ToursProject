import { useState } from "react";

function Card({id,name,info,image,price,removeTour}) {
    const[readmore,setReadMore]=useState(false)
    const description= readmore ? info:`${info.substring(0,200)}.....`
    function readmoreHandeler(){
        setReadMore(!readmore);
    }
    function removeTourHandeler() {
        removeTour(id);
    }
   
    return(
        <div className="card">
            <img src={image} className="image"></img>
            <div className="tour-info">
                <div className="tour-details">
                    <h2 className="tour-price"><span>&#8377;</span>{price}</h2>
                    <h3 className="tour-name">{name}</h3>
                </div>
                <div className="description">{description}<span className="read-more" onClick={readmoreHandeler}>{readmore? 'show less':'read more'}</span></div>
            </div>
            <button className="btn-red" onClick={removeTourHandeler}>Not Interested</button>
        </div>
    )
}
export default Card;