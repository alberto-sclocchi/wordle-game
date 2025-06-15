import React from 'react'

export default function Keyboard(props) {
  const { letter, backgroundColor } = props;
//   console.log(letter, backgroundColor)

  return (
    <div className='letter-tile' style={{backgroundColor: backgroundColor}}>{letter}</div>
  )
}
