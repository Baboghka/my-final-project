import React from 'react';
import Item from './Item';

function List() {


  const items = [...];

  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default List;