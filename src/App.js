import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import CreatePost from './components/CreatePost';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div className="">
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/create' element={<CreatePost/>} />
        <Route path='/viewall' element={<ViewAll/>} />
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
