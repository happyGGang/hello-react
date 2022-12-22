import React from 'react';

const EventPractice = () => {
  const names =  ['a', 'b', 'c'];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  return (
    <ul>
      {nameList}
    </ul>
  );
};

export default EventPractice;