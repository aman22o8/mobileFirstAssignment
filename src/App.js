
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import LoginForm from './Component/LoginForm';
import JokeData from './Component/JokeData';

const  App=()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/loginform" element={<LoginForm/>}/>
        <Route path="/" element={<JokeData/>}/>
      </Routes>
    </BrowserRouter>
    // <div className="App "style={{height:'100vh'}}>
      

    // </div>
  );
}

export default App;
