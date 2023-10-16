import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import "./Messages.scss"
import { Link } from "react-router-dom";
function Messages() {
   const currentUser = {
    id: 1,
    username: "Ahmed Fawzy",
    isSeller: true,
  };
    const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
  maxime cum corporis esse aspernatur laborum dolorum? Animi
  molestias aliquam, cum nesciunt, aut, ut quam vitae saepe repellat
  nobis praesentium placeat.`;
  return (
   <>
      <Navbar/>
      <div className='messages'>
        <div className="container">
          <div className="title">
            <h1>Messages</h1>
           
          </div>
          <table>
            <tr>
              <th>Buyer</th>
              <th>Last Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
            <tr className='active'>
              <td>
            Ahmed Fawzy
              </td>
              <td><Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link></td>
              <td>1 day ago</td>
              <td><button>Mark as Read</button></td>
              
            </tr>
            <tr className='active'>
              <td>
            Ahmed Fawzy
              </td>
              <td><Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link></td>
              <td>1 day ago</td>
              <td><button>Mark as Read</button></td>
              
            </tr>
            <tr>
              <td>
            Ahmed Fawzy
              </td>
              <td><Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link></td>
              <td>1 day ago</td>
              <td></td>
              
            </tr>
            <tr>
              <td>
            Ahmed Fawzy
              </td>
              <td><Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link></td>
              <td>1 day ago</td>
              <td></td>
              
            </tr>
            <tr>
              <td>
            Ahmed Fawzy
              </td>
              <td><Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link></td>
              <td>1 day ago</td>
              <td></td>
              
            </tr>
            <tr>
              <td>
            Ahmed Fawzy
              </td>
              <td><Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link></td>
              <td>1 day ago</td>
              <td></td>
              
            </tr>
           
          </table>
           </div>
      </div>
      <Footer/><Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
      </>
  )
}

export default Messages