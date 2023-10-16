import React from 'react'
// import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../src/pages/home/Home.jsx"
import Gigs from "../src/pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Login from "../src/pages/login/Login";
import Register from "../src/pages/register/Register";
import Add from "../src/pages/add/Add";
import Orders from "../src/pages/orders/Orders";
import Messages from "../src/pages/messages/Messages";
import Message from "../src/pages/message/Message";
import MyGigs from "../src/pages/myGigs/MyGigs";
import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/gigs' element={ <Gigs/>} />
        <Route path='/gig/:id' element={ <Gig/>} />
        <Route path='/orders' element={ <Orders/>} />
        <Route path='/mygigs' element={ <MyGigs/>} />
        <Route path='/add' element={ <Add/>} />
        <Route path='/messages' element={ <Messages/>} />
        <Route path='/message/:id' element={ <Message/>} />
        <Route path='/login' element={ <Login/>} />
        <Route path='/register' element={ <Register/>} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
