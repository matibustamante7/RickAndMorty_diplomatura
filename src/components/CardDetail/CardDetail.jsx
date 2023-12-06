
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import './CardDetail.css'

export default function CardDetail() {

    const [character, setCharacter] = useState({})

    const { idCharacter } = useParams();

    const getCharacterById = async () => {

        const urlApi = `https://rickandmortyapi.com/api/character/${idCharacter}`

        const response = await axios.get(urlApi)
        const data = response.data
        setCharacter(data)
    }

    useEffect(() => {
        getCharacterById()
    }, [])
    // console.log(character);

    return (
        <div className='card_detail__container'>
            <div className="subcontainer">
                {character.name ? <h2>{character.name}</h2> : ''}
                {character.gender ? <h3>Gender: {character.gender}</h3>: ''}
                {character.status ? <h3>Status: {character.status}</h3> : ''}
                {character.type ? <h3>Type: {character.type}</h3> : ''}
                {character.location?.name ? <h3>Location: {character.location?.name}</h3> : ''}
            </div>
            <div className="subcontainer">
                <img src={character.image} alt={character.name} />
            </div>

        </div>
    )
}
