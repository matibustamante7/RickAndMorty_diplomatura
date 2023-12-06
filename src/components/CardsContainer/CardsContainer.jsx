import axios from 'axios';
import { useEffect, useState } from 'react'
import CardCharacter from '../CardCharacter/CardCharacter';
import './CardsContainer.css'
export default function CardsContainer() {

    // en este estado vamos a almacenar la data traida en la peticion a la api
    // le pongo [] porque los voy a almacenar en un array
    const [characters, setCharacters] = useState([])


    const urlApi = 'https://rickandmortyapi.com/api/character';

    const requestApi = async () => {
        const response = await axios.get(urlApi);
        // console.log(response.data.results);
        const arrCharacters = response.data.results;
        setCharacters(arrCharacters)
    }

    useEffect(() => {

        requestApi();

    }, [])
    // console.log(characters);

    return (
        <div className='cards_container_container'>
            <h1>Lista de personajes</h1>
            <div className='cards_container'>
                {
                    characters?.map((character) => (
                        <CardCharacter key={character.id} characterData={character} />
                    ))
                }
            </div>

        </div>
    )
}
