import { useState } from 'react';

export default function Clock(props) {
const initialColor = props.color
  return (
    <>
        <h3>Challenge #1</h3>
        <h1 style={{ color: initialColor }}>
        {props.time}
        </h1>
    </>
  );
}
