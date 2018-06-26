import React from 'react';

export default props => {
    console.log('Item Props:', props);
    return (
        <li className="collection-item row">
            <div className="col s10">
                {props.title}
            </div>
            <div className="col s2 right-align">
                <button className="btn red">Delete</button>
            </div>
        </li>
    )
}
