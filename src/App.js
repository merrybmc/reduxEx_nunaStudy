import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const [num, setNum] = useState(0);
  const { count } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onChangeNum = (e) => {
    setNum(e.target.value);
  };

  const increase = () => {
    dispatch({ type: 'INCREASE', payload: num });
  };

  const decrease = () => {
    dispatch({ type: 'DECREASE', payload: num });
  };

  const multiple = () => {
    dispatch({ type: 'MULTIPLE', payload: num });
  };

  const divide = () => {
    dispatch({ type: 'DIVIDE', payload: num });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <>
      <h1>{count}</h1>
      입력 : <input onChange={(e) => onChangeNum(e)} />
      <br />
      <br />
      <button onClick={increase}>더하기</button> &nbsp;
      <button onClick={decrease}>빼기</button> &nbsp;
      <button onClick={multiple}>곱하기</button> &nbsp;
      <button onClick={divide}>나누기</button> &nbsp;
      <button onClick={reset}>초기화</button>
    </>
  );
}

export default App;
