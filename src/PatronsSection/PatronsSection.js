import React from 'react';
import './PatronsSection.css'
import Martin from './Images/martin3.jpeg'
import Rothfuss from './Images/rothfuss.jpg'
import Sanderson from './Images/sanderson.jpg'

function PatronsSection() {
    return (
        <section className='PatronsSection'>
            <div className='TextContainer'>
                <h4>Our Patrons</h4>
                <h5>Meet the people that make The Good Books Club possible:</h5>
            </div>
            <div className='PatronsContainer'>
                <div className='Patron'>
                    <a href='https://georgerrmartin.com/' target='_blank' rel='noreferrer'><img src={Martin} alt='got book'></img></a>
                    <h6>George R.R. Martin</h6>
                </div>
                <div className='Patron'>
                    <a href='https://www.patrickrothfuss.com/content/index.asp' target='_blank' rel='noreferrer'><img src={Rothfuss} alt='kingkiller books'></img></a>
                    <h6>Patrick Rothfuss</h6>
                </div>
                <div className='Patron lastPatron'>
                    <a href='https://www.brandonsanderson.com/' target='_blank' rel='noreferrer'><img src={Sanderson} alt='way of kings books'></img></a>
                    <h6>Brandon Sanderson</h6>
                </div>
            </div>
        </section>
    )
}

export default PatronsSection;