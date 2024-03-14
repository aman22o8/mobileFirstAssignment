import React,{ useState } from 'react'
import {useNavigate} from 'react-router-dom'






const LoginForm = () => {
    const [validated, setValidated] = useState(true);
    const [myvalues, setmyvalues] = useState({email:"",password:""})
    const navigate=useNavigate()

    const handleOnchange=(event)=>{
        const {name,value}=event.target
        setmyvalues((prevState)=>{
          return {...prevState,[name]:value}
        })
        // console.log(myvalues)
    }

  const handleOnSubmit=(event)=>{
      event.preventDefault();
      console.log(myvalues)
      const {email,password}=myvalues
      if((email==="" || password==="")){
        setValidated(false)
      }
      if ((email!=="aman@gmail.com") || (password!=='1234')) {
        setValidated(false)
      } 
     
        if(email==="aman.na@gmail.com" && password==="1234"){
          console.log("password is corrct")
          setValidated(true)
          navigate('/')

        }
    
   
  }
  return (<>
    <div className='my-5'>
        <div className='d-flex flex-column align-items-center '>
        <h1 className=''>LoginForm</h1>
        <div className='my-5 h-100 p-3 border border-primary rounded-2'>
          <p className=' fw-bold'>MailId : aman.na@gmail.com</p>
          <p className='fw-bold'>Password : 1234</p>
        </div>
 
        <form onSubmit={handleOnSubmit}  className='w-50 ' >
      <div className="mb-3 " >
        <label className='form-label' htmlFor='email'>Email address</label>
        <input className='form-control' id='email' onChange={handleOnchange}  value={myvalues.email} name="email" type="email" placeholder="Enter email" /> 

        <p className="text-muted">
          We'll never share your email with anyone else.
        </p>
      </div>

      <div className="mb-3" >
        <label className='form-label' htmlFor='password'>Password</label>
        <input className='form-control' id="password" onChange={handleOnchange}  value={myvalues.password} name="password" type="text" placeholder="Password" />

      </div>
      <div className='d-flex justify-content-center'>
      <button className="btn btn-primary" type="submit">Submit form</button>
      </div>
    </form>
      {validated===false ? <p className='text-center text-danger font-weight-bold'>*Please choose a valid crediential.</p>: ""}
    </div>
    </div>
    </>

  )
}

export default LoginForm