import React,{useEffect,useState}from 'react'
import JokeDetails from '../JokeDetails'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const JokeData = () => {
  const [myArray, setmyArray] = useState([])
  const navigate=useNavigate()
  useEffect(() => {
    const options={
      
      method:'GET'
    }
      fetch('https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10',options)
      .then((response)=> response.json())
      .then((data)=> {
        console.log(data.jokes)
        setmyArray(data.jokes)
      })
  }, [])

  const handleOnClick=()=>{
    
    navigate('/loginform')
  }
  
  return (
    <div className='d-flex flex-column align-item-center px-4'>
      <h1 className='align-self-center'>JokeData</h1>
      
      <ul className='mx-3 list-group d-flex flex-wrap'>

      {myArray.map((each,index)=>{
        return <JokeDetails key={index} myData={each}/>
      })}
      </ul>

<Button className='align-self-center my-3' onClick={handleOnClick} variant="primary">Logout</Button>
      </div>

  )
}

export default JokeData