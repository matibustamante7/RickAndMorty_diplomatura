
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import './CardDetail.css'
import CharacterContext from '../../Context/CharacterContext';

export default function CardDetail() {


    const { idCharacter } = useParams();

    const {getCharacterById, characterDetail} = useContext(CharacterContext)

    useEffect(() => {
        getCharacterById(idCharacter)
    }, [])
    // console.log(characterDetail);

    return (
        <div className='container_detail'>
            <div className='card_detail__container'>
                <div className="subcontainer">
                    {characterDetail.name ? <h2>{characterDetail.name}</h2> : ''}
                    {characterDetail.gender ? <h3>Gender: {characterDetail.gender}</h3> : ''}
                    {characterDetail.status ? <h3>Status: {characterDetail.status}</h3> : ''}
                    {characterDetail.type ? <h3>Type: {characterDetail.type}</h3> : ''}
                    {characterDetail.location?.name ? <h3>Location: {characterDetail.location?.name}</h3> : ''}
                </div>
                <div className="subcontainer">
                    <img src={characterDetail.image} alt={characterDetail.name} />
                </div>

            </div>
        </div>
    )
}
