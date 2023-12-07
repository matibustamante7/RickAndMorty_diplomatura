
import { useContext, useEffect } from 'react'
import CardCharacter from '../CardCharacter/CardCharacter';
import './CardsContainer.css'
import CharacterContext from '../../Context/CharacterContext';
import Filters from '../Filters/Filters';
// import Pagination from '../Pagination/Pagination';
export default function CardsContainer() {

    const {getCharacters, characters} = useContext(CharacterContext)

    useEffect(() => {
        getCharacters()
    }, [])
    // console.log(characters);

    return (
        <div className='cards_container_container'>
            <Filters/>
            <div className='cards_container'>
                
                {
                    characters?.map((character) => (
                        <CardCharacter key={character.id} characterData={character} />
                    ))
                }
            </div>
            {/* <Pagination/> */}
        </div>
    )
}
