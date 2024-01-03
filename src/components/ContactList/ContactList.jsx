import React from 'react';

function ContactList({ sortedList, onDelete }) {
  const handleDelete = e => {
    onDelete(e.target.id);
  };
  return (
    <>
      <ul>
        {sortedList.map(el => (
          <li key={el.id}>
            {el.name}: {el.number}
            <button id={el.id} type="button" onClick={handleDelete}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ContactList;
