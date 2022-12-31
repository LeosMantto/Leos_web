import React from 'react';
import { FaUserAlt} from 'react-icons/fa';
import Loading from '../loading/loading';
import './cards.style.css';
const Card = (props) => {
    return (
        <div class="card">
        <div class="box">
            <h1>{(props.count === "" || props.count === undefined || props.count === null) ? <Loading /> : props.count}</h1>
            <h3>{(props.name !== "") ? props.name : <Loading /> }</h3>
        </div>
        <div class="icon-case">
            <FaUserAlt style={{fontSize: '46px'}} />
        </div>
    </div>
    );
};

export default Card;