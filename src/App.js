import './App.css';
import Signup from './components/Signup';
import Login from './components/Login'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './components/Home';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>    
    </>
  );
}

export default App;
