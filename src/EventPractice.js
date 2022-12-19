import React, {useState} from 'react';

const EventPractice = () => {
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');

  const handleUsername = (e) => {
    setUsername(e.target.value);
  }

  const handleMessage = (e) => {
    setMessage(e.target.value);

  }

  const handleClick = () => {
    alert(username + ': ' + message);
    setMessage('');
    setUsername('');
  }

  const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      handleClick();
    }
  }

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={handleUsername}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        onChange={handleMessage}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleClick}>확인</button>
    </div>
  );
};

export default EventPractice;