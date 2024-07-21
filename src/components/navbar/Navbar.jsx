import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }
    useEffect(() => {
        window.addEventListener("scroll", isActive);

        return () => {
            window.removeEventListener("scroll",isActive) ///////
        }
    }, [])
    const currentUser = {
        id: 1,
        username: "Ahmed Fawzy",
        isSeller:true
    }
  return (
      <div className={active || pathname!== "/"? "navbar active":"navbar"}>
          <div className="container">
              <div className="logo">
              <Link to="/" className='link'> <span className="text">Fiverr</span></Link>
                  <span className="dot">.</span>
              </div>
              <div className="links">
                  <span>Fiverr Business</span>
                  <span>Explore</span>
                  <span>English</span>
                  <span>Sign in</span>
            {!currentUser?.isSeller &&  <span>Become a Seller</span>}
                  {!currentUser && <button>Join</button>}
                  {currentUser && (
                      <div className="user" onClick={()=> setOpen(!open)}>
                          <img src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                              alt="" />
                          <span>{currentUser.username}</span>
                          {open&&<div className="options">
                              {currentUser?.isSeller && (
                                  <>
                                    <Link className='link' to="/mygigs"  > <span>Gigs</span></Link>
                                     <Link className='link' to="/add"  ><span>Add New Gig</span></Link>
                                  </>
                              )}
                             <Link className='link' to="/orders" > <span>Orders</span></Link>
                             <Link className='link' to="/messages" > <span>Messages</span></Link>
                              <Link className='link' to="/"> <span>Logout</span></Link>
                          </div>}
                      </div>
                  )}
              </div>
          </div>
          {(active || pathname !=="/" )&&
              <>
              <hr />
          <div className="menu">
              <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
        </div>
        <hr/>
          </> 
          }
           
    </div>
  )
}

export default Navbar