import React, { useState } from 'react';
import './MainNavigation.css';
import MainHeader from './MainHeader';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import NavLinks from './NavLinks';
import SideDraw from './SideDraw';
import Backdrop from '../UIElements/Backdrop';

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const openDrawer = () => {
    setDrawerIsOpen(true);
  }
  const closeDrawer = () => {
    setDrawerIsOpen(false);
  }
  return (
    <>
    {
        drawerIsOpen && <Backdrop onClick={closeDrawer}/>
    }
     {
     drawerIsOpen && (
        <SideDraw>
        <nav className="main-navigation__drawer-nav" onClick={openDrawer}>
            <NavLinks/>
        </nav>
    </SideDraw>
     ) 
     }
      
    <MainHeader>
        <button className="main-navigation__menu-btn">
            <span />
            <span />
            <span />
        </button>
        <h1 className='main-navigation__title'>
            <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks/>
        </nav>
    </MainHeader>
    </>
   
  )
}

export default MainNavigation;