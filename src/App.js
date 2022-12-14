import logo from './logo.svg';
import './App.css';

function App() {
  const name = '리액트';
  return (
    <>
      { name === '리액트' && <h1>리액트입니다.</h1> }
    </>
  );
}

export default App;
