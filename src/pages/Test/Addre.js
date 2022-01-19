import {useState} from 'react';
const Adder = () => {
  const [nlk, setNlk] = useState({ggmeen: 6});
  console.log(nlk);
  return (
    <div>
      <button
        onClick={
          () => setNlk({
            ...nlk,
            ggmeen: nlk.ggmeen + 5
          })}>
        Dpu
      </button>
      <h1>{nlk.ggmeen}</h1>
      <button
        onClick={
          () => setNlk({
            ...nlk,
            ggmeen: nlk.ggmeen - 5
          })}>
        Ryuoocef
      </button>
    </div>
  )
}
export default Adder;