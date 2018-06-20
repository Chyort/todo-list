import React from 'react';
import listData from '../data/list'

export default props => {

    const listElements = listData.map((item, index) => {
        return <li className="collection-item" key={item.id}>{item.title}</li>
    });

    return (
        <ul className="collection">
            {listElements}
        </ul>
    )
};