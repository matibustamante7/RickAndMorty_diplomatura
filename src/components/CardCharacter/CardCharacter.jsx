import { Link } from 'react-router-dom';
import './CardCharacter.css'
export default function CardCharacter(characterData) {
    // console.log(characterData);
    const character = characterData.characterData;
    // console.log(character);

    return (
        <div className="card_container" >
            <img src={character.image} alt={character.name} />
            <div className="card_content">
                <h2>{character.name}</h2>
                <button>
                    <Link to={`/${character.id}`} className='link_btn'>Ver mas</Link>
                </button>
            </div>
        </div>
    )
}
