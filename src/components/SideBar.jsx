import React from 'react'
import {
  FaShoppingBag,
  FaBars
} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const SideBar = ({children}) => {
  const menuItem = [
    {
      path:"/cadProdutos",
      name:"Produtos",
      Icon:<FaShoppingBag/>
    },
  ]

  return (
    <div className='container'>
      <div className='sidebar'>
        <div className='topSection'>
          <h1 className='logo'> Logo</h1>
          <div className='bars'>
            <FaBars/>
          </div>
        </div>
        {
          menuItem.mao((item, index)=>{
            <NavLink to={item.path} key={index} className='link' activeClassNmae='active'>
              <div className='icon'>{item.icon}</div>
              <div className='linkTest'>{item.name}</div>
            </NavLink>
          })
        }
      </div>
      <main>{children}</main>
    </div>
  )
}

export default SideBar