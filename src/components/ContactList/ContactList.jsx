import React from 'react';

function ContactList({ sortedList }) {
  return (
    <>
      <ul>
        {sortedList.map(el => (
          <li key={el.id}>
            {el.name}: {el.number}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ContactList;
