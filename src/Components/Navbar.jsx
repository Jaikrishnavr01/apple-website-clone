import React from 'react'
import logo from '../assets/images/logo.svg'
import search from '../assets/images/search.svg'
import store from '../assets/images/store.svg'

function Navbar() {
    return (
        <nav className='nav-wrapper'>
            <div className='nav-content'>
                <ul className="list-styled">
                    <li><img src={logo} alt="Apple" /></li>
                    <li className='link-styled'><a>Store</a></li>
                    <li className='link-styled'><a>Mac</a></li>
                    <li className='link-styled'><a>Ipad</a></li>
                    <li className='link-styled'><a>Watch</a></li>
                    <li className='link-styled'><a>Airpods</a></li>
                    <li className='link-styled'><a>Tv & Home</a></li>
                    <li className='link-styled'><a>Entertainment</a></li>
                    <li className='link-styled'><a>Accessories</a></li>
                    <li className='link-styled'><a>support</a></li>
                    <li>
                        <img src={search} alt="search" />
                    </li>
                    <li>
                        <img src={store} alt="search" />
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar
