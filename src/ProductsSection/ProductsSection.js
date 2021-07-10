import React from 'react';
import './ProductsSection.css'
import got from './Images/got-books.jpg'
import kingkiller from './Images/kingkiller.jpg'
import kings from './Images/way-of-kings.jpg'
import lord from './Images/lord-ring.jpg'

function ProductsSection() {
    return (
        <section className='ProductsSection'>
            <div className='TextContainer'>
                <h4>Our Products</h4>
                <h5>Check out our member-exclusive, limited edition, leather-bound volumes:</h5>
            </div>
            <div className='ProductsContainer'>
                <div className='Product'>
                    <img src={got} alt='got book'></img>
                    <h6>A Game of Thrones by George R.R. Martin.</h6>
                </div>
                <div className='Product'>
                    <img src={kingkiller} alt='kingkiller books'></img>
                    <h6>The Kingkiller Chronicles by Patrick Rothfuss.</h6>
                </div>
                <div className='Product'>
                    <img src={kings} alt='way of kings books'></img>
                    <h6>The Way of Kings by Brandon Sanderson.</h6>
                </div>
                <div className='Product lastProduct'>
                    <img src={lord} alt='lord of the rings books'></img>
                    <h6>The Lord of the Rings by J.R.R. Tolkien.</h6>
                </div>
            </div>
        </section>
    )
}

export default ProductsSection;