// import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
export default function Header() {
    return (
        <div className="container">

            <nav className="container_nav">
                <div className="container_logo">
                    <Link to={'/'}>
                        <img src="https://hbomax-images.warnermediacdn.com/2022-08/tt.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com" className='img_logo' alt="logo_rickandmorty" />
                    </Link>
                </div>

                <div className="searchbar">
                    <input type="search" name="input_searchbar" id="input_searchbar" />
                    <button>Buscar</button>
                </div>

                <div className="container_buttons">
                    <button>Button 1</button>
                    <button>Button 2</button>
                </div>
            </nav>
        </div>

    )
}
