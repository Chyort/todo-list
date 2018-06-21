import React from 'react';

export default props => {

    const listElements = props.data.map((item, index) => {
        return <li className="collection-item" key={index}>{item.title}</li>
    });

    return (
        <ul className="collection">
            {listElements}
        </ul>
    )
};