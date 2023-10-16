import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'
import './Orders.scss'
function Orders() {
  const currentUser = {
    id: 1,
    username: "Ahmed Fawzy",
    isSeller: true,
  };
  return (
      <>
      <Navbar/>
      <div className='orders'>
        <div className="container">
          <div className="title">
            <h1>Orders</h1>
           
          </div>
          <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>{currentUser?.isSeller?"Buyer":"Sales"}</th>
              <th>Contact</th>
            </tr>
            <tr>
              <td>
                 <img
                className="img"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              </td>
              <td>Order1</td>
              <td>88</td>
              <td>A.Fawzy</td>
               <td>
              <img className="delete" src="./img/message.png" alt="" />
               </td>
            </tr>
            <tr>
              <td>
                 <img
                className="img"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              </td>
              <td>Order1</td>
              <td>88</td>
              <td>A.Fawzy</td>
               <td>
              <img className="delete" src="./img/message.png" alt="" />
               </td>
            </tr>
            <tr>
              <td>
                 <img
                className="img"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              </td>
              <td>Order1</td>
              <td>88</td>
              <td>A.Fawzy</td>
               <td>
              <img className="delete" src="./img/message.png" alt="" />
               </td>
            </tr>
            <tr>
              <td>
                 <img
                className="img"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              </td>
              <td>Order1</td>
              <td>88</td>
              <td>A.Fawzy</td>
               <td>
              <img className="delete" src="./img/message.png" alt="" />
               </td>
            </tr>
            <tr>
              <td>
                 <img
                className="img"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              </td>
              <td>Order1</td>
              <td>88</td>
              <td>A.Fawzy</td>
               <td>
              <img className="delete" src="./img/message.png" alt="" />
               </td>
            </tr>
            <tr>
              <td>
                 <img
                className="img"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              </td>
              <td>Order1</td>
              <td>88</td>
              <td>A.Fawzy</td>
               <td>
              <img className="delete" src="./img/message.png" alt="" />
               </td>
            </tr>
          </table>
           </div>
      </div>
      <Footer/>
      </>
  )
}

export default Orders