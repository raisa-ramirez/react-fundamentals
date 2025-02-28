import { useEffect, useRef } from 'react';

export default function MyInput({ value, onChange }) {
  const ref = useRef(null);

  useEffect(()=>{
    ref.current.focus()
  },[])  

  return (
    <>
        <h3>Challenge #1</h3>
        <p>Focus</p>   
        <input
        ref={ref}
        value={value}
        onChange={onChange}
        />
    </>
  );
}
