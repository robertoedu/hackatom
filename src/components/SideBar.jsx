import React, { useState } from 'react'
import {
  FaShoppingBag,
  FaShoppingCart,
  FaBars
} from 'react-icons/fa'
import styles from'../styles/SideBar.module.scss';
import { NavLink } from 'react-router-dom'

const SideBar = ({children}) => {
  const [isOpen, setisOpen] = useState(false)
  const toggle = () => setisOpen (!isOpen)

  const menuItem = [

    {
      path:"/list",
      name:"Lista de compras",
      icon:<FaShoppingCart/>
    },
    {
      path:"/produtos",
      name:"Produtos",
      icon:<FaShoppingBag/>
    }
  ]

  return (
    <div className={styles.container}>
      <div style={{width: isOpen ? "250px" : "50px"}} className={styles.sidebar}>
        <div className={styles.topSection}>
          <h1 style={{display: isOpen ? "block" : "none"}}  className={styles.logo}> Logo</h1>
          <div style={{marginLeft: isOpen ? "50px" : "0px"}} className={styles.bars}>
            <FaBars onClick={toggle}/>
          </div>
        </div>
        {
          menuItem.map((item, index) =>( 
            <NavLink to={item.path} key={index} className={styles.link} activeclassname={styles.active}>
              <div className={styles.icon}>{item.icon}</div>
              <div style={{display: isOpen ? "block" : "none"}} className={styles.linkTest}>{item.name}</div>
            </NavLink>
          ))
        }
      </div>
      <main>{children}</main>
    </div>
  )
}

export default SideBar