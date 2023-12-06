
import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import './CardDetail.css'
import CharacterContext from '../../Context/CharacterContext';

export default function CardDetail() {


    const { idCharacter } = useParams();
    const navigate = useNavigate();
    const {getCharacterById, characterDetail} = useContext(CharacterContext)

    useEffect(() => {
        getCharacterById(idCharacter)
    }, [])
    // console.log(characterDetail);

    const handkeBack = () => {
        navigate(`/`)
    }

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div className='container_detail'>
            <button className='input_option btn_back' onClick={handkeBack}>Back</button>
            <div className='card_detail__container'>
                <div className="subcontainer">
                    {characterDetail.name ? <h2>{capitalizeFirstLetter(characterDetail.name)}</h2> : ''}
                    {characterDetail.gender ? <h3>Gender: {capitalizeFirstLetter(characterDetail.gender)}</h3> : ''}
                    {characterDetail.status ? <h3>Status: {capitalizeFirstLetter(characterDetail.status)}</h3> : ''}
                    {characterDetail.type ? <h3>Type: {capitalizeFirstLetter(characterDetail.type)}</h3> : ''}
                    {characterDetail.location?.name ? <h3>Location: {capitalizeFirstLetter(characterDetail.location?.name)}</h3> : ''}
                </div>
                <div className="subcontainer">
                    <img src={characterDetail.image} alt={characterDetail.name} />
                </div>

            </div>
        </div>
    )
}
