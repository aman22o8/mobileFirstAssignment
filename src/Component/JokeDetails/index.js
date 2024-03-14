import React from 'react'


const JokeDetails = (props) => {
    const {myData}=props
    const {joke}=myData
  return (
    <li className='list-group-item my-4 border border-2 border-primary-subtle rounded-2  '>
        <p className='text-bold'>{joke}</p>
    </li>
  )
}

export default JokeDetails