import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        {/* <Route path='/private' element={<RequireAuth></RequireAuth>}></Route> */}
        
        <Route path='/*' element={<RequireAuth/>}>
          <Route path='appointment' element={<Appointment></Appointment>}></Route>
          <Route path='dashboard/*' element={<Dashboard></Dashboard>}>
            {/* <Route path={`makeAdmin`} element={<MakeAdmin></MakeAdmin>}></Route> */}
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
