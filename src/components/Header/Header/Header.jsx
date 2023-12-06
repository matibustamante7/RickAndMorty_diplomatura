// import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { useContext } from 'react'
import CharacterContext from '../../../Context/CharacterContext'
export default function Header() {

    const {getCharacterByName} = useContext(CharacterContext);

    const searchCharacterByName = (e) =>{
        const name = e.target.value;
        getCharacterByName(name)
    }

    return (
        <div className="container">

            <nav className="container_nav">
                <div className="container_logo">
                    <Link to={'/'}>
                        <img src="https://hbomax-images.warnermediacdn.com/2022-08/tt.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com" className='img_logo' alt="logo_rickandmorty" />
                    </Link>
                </div>

                <div className="searchbar">
                    <input type="search" name="input_searchbar" id="input_searchbar" onChange={searchCharacterByName}/>
                    <button className='input_option btn_header'>Buscar</button>
                </div>

            </nav>
        </div>

    )
}
