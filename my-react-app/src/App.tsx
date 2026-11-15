import { useEffect } from 'react'
import './App.css'
import { HealthCheck } from './api/health-check';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/authentication/login';

function App() {
 useEffect(() => {
  const getHealthfunc = async() => {
    const resp = await HealthCheck()
    console.log(resp)
  }
  getHealthfunc()
 }, [])
  return (
   <Routes>
    <Route path='/' element={ <Login /> } />
   </Routes>
  )
}

export default App
