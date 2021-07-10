import React from 'react';
import './NavBar.css'
//For some reason src doesn't work when you are working with react apps. If you don't go like this, you won't see anything displayed.
import img from './Images/logo.jpg'

function NavBar() {
    return (
        <section className='NavBar'>
            <div className='leftContainer'>
                <img src={img} alt='magical book' ></img>
                <h1>The Good Book Club</h1>
            </div>
            <div className='rightContainer'>
                <a href='#Mission'><h1>Mission</h1></a>
                <a href='#Products'><h1>Products</h1></a>
                <a href='#Patrons'><h1>Patrons</h1></a>
            </div>
        </section>
    )
}

export default NavBar;