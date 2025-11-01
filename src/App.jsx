import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './users/pages/Home'
import Preloader from './components/Preloader' 
import Auth from './pages/Auth'
import ViewBook from './users/pages/ViewBook'
import Profile from './users/pages/Profile'
import Careers from './users/pages/Careers'
import Contact from './users/pages/Contact'
import DashboardAdmin from './admin/pages/DashboardAdmin'
import ResourceAdmin from './admin/pages/ResourceAdmin'
import CareerAdmin from './admin/pages/CareerAdmin'
import SettingAdmin from './admin/pages/SettingAdmin'
import AllBooks from './users/pages/AllBooks'
import Pnf from './pages/Pnf'
import { userAuthContext } from './contextAPI/AuthContext'

function App() {

  const {role,setRole,authorisedUser,setAuthorisedUser} = useContext(userAuthContext)
  
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },7000)
  },[])

  return (
    <>
    <Routes>
      <Route path='/' element={loading?<Preloader/>:<Home/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth register/>}/>
      <Route path='/allbooks' element={<AllBooks/>}/>
      <Route path='/careers' element={<Careers/>}/>
      <Route path='/contact' element={<Contact/>}/>

      {
        role == "user" && 
       <>
          <Route path='/books/:id/view' element={<ViewBook/>}/>
        <Route path='/profile' element={<Profile/>}/>
       </>}

      { role == "admin" && 
        <>
          <Route path='/admin-dashboard' element={loading?<Preloader/>:<DashboardAdmin/>}/>
        <Route path='/admin-resources' element={<ResourceAdmin/>}/>
        <Route path='/admin-careers' element={<CareerAdmin/>}/>
        <Route path='/admin-settings' element={<SettingAdmin/>}/>
        </>}

      <Route path='/*' element={<Pnf/>}/>
    </Routes>
    </>
  )
}

export default App
