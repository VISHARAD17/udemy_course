import '../index.css';

const Card = (props) => {
    return ( 
        <div>
            <h1> Card title is {props.cardTitle} </h1>
            <p> this is card content {props.content} </p>
        </div>
     );
}
 
export default Card;