
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import Register from './components/Register/Register';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import Services from './components/Services/Services';
import Fotter from './components/Shared/Footer/Fotter';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div>
       <Header></Header>
       <Routes>
        <Route path='/' element = {<Home></Home>}></Route>
        <Route path='/home' element = {<Home></Home>}></Route>
        <Route path='/services' element = {<Services></Services>}></Route>
        <Route path='/login' element = {<Login></Login>} ></Route>
       <Route path='/register' element = {<Register></Register>}></Route>
       <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
       <Route path="/checkout" element={
          <RequireAuth>
           <Services></Services>
          </RequireAuth>
        }></Route>
       </Routes>
       <Fotter></Fotter>
    </div>
  );
}

export default App;
