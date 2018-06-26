import React from 'react';
import Item from './item';

export default props => {


    const listElements = props.data.map((item, index) => {
        return <Item key={item._id} title={item.title} delete={props.delete.bind(this, item._id)} />
    });

    return (
        <ul className="collection">
            {listElements}
        </ul>
    )
};
