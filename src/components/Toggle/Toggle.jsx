import React, { useState } from 'react';

function Toggle() {
  const [toggle, setToggle] = useState('on');
  

  // const handleToggle = () => {
  //   setText(text === 'on' ? 'off' : 'on'); 
  // }
  return (
    <>
    <button onClick={() => setToggle(toggle === 'on' ? 'off' : 'on')}>{toggle}</button>
    </>
  )
}

export default Toggle
