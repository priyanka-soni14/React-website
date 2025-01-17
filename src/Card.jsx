import react from 'react';
import web from '../src/images/developerimg.webp'
import { NavLink } from 'react-router-dom';
const Card=(props)=>{
    return(
        <>
        <div className="col-md-4 col-10 mx-auto">
       <div class="card">
         <img src={props.imgsrc} className="card-img-top"  height='200px' width='100px' alt={props.imgsrc}/>
         <div className="card-body">
         <h5 className="card-title font-weight-bold">{props.title}</h5>
         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
         </div>
        </div>
     </div>
        </>
    )
}
export default Card;