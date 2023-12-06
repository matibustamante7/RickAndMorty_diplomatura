import { Link } from 'react-router-dom';
import './CardCharacter.css'
export default function CardCharacter(characterData) {
    // console.log(characterData);
    const character = characterData.characterData;
    // console.log(character);

    return (
        <div className="card_container" >
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <h4><b>Species: </b>{character.species}</h4>
            <h4><b>Gender: </b>{character.gender}</h4>
            <button>
                <Link to={`/${character.id}`}>Ver mas...</Link>
            </button>
        </div>
    )
}
