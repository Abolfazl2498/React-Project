import {  Route,  Routes } from "react-router-dom"
import Login from './features/identify/component/Login';
import Register, { RegisterAction } from './features/identify/component/Register';



function App() {
  return (
    
      <Routes>
        <Route path="/login" element={<Login />} action={RegisterAction} />
        <Route path="/register" element={<Register />} />


      </Routes>

    
  )
}

export default App
