import React, {useState} from 'react';

const EventPractice = () => {
  const [names, setName] = useState([
    {id: 1, name: 'name1'},
    {id: 2, name: 'name2'},
    {id: 3, name: 'name3'}
  ]);
  const [input, setInput] = useState('');
  const [nextId, setNextId] = useState(4);

  const nameList = names.map(name => <li key={name.id}>{name.name}</li>);

  const onChange = (e) => {
    setInput(e.target.value);
  }

  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      name: input
    })
    setNextId(nextId + 1);
    setName(nextNames);
    setInput('');
  };
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={onChange}
      />
      <button onClick={onClick}>추가</button>
      <ul>
        {nameList}
      </ul>
    </>
  );
};

export default EventPractice;