import axios from "axios";
import { useReducer } from "react"
import CharacterContext from './CharacterContext'
import CharacterReducer from './CharacterReducer'

export default function CharacterState(props) {

    const initialState = {
        characters: [],
        characterDetail:{}
    }

    const [state, dispatch] = useReducer(CharacterReducer, initialState)


    const getCharacters = async () =>{
        const url = 'https://rickandmortyapi.com/api/character';
        const data = await axios.get(url)
        const res = data.data.results
        // console.log(res);
        dispatch({
            type: 'ADD_CHARACTERS',
            payload: res
        })
    }

    const getCharacterById = async (id) =>{
        // console.log(id);
        const url = 'https://rickandmortyapi.com/api/character/'+id;
        const data = await axios.get(url)
        // console.log(data.data);
        dispatch({
            type: 'ADD_CHARACTER_BY_ID',
            payload: data.data
        })
    }

    const getCharacterByName = async (name) =>{
        // console.log(`buscando ${name}`);
        const url = 'https://rickandmortyapi.com/api/character/?name='+name;
        const data = await axios.get(url)
        const results = data.data.results;
        // console.log(results);
        dispatch({
            type:'SEARCH_CHARACTER_BY_NAME',
            payload:results
        })
    }

    const filterCharacterByStatus = async (status) =>{
        // console.log(`buscando ${name}`);
        const url = 'https://rickandmortyapi.com/api/character/?status='+status;
        const data = await axios.get(url)
        const results = data.data.results;
        // console.log(results);
        dispatch({
            type:'FILTER_CHARACTER_BY_STATUS',
            payload:results
        })
    }

    const filterCharacterByGender = async (gender) =>{
        // console.log(`buscando ${gender}`);
        const url = 'https://rickandmortyapi.com/api/character/?gender='+gender;
        const data = await axios.get(url)
        const results = data.data.results;
        // console.log(results);
        dispatch({
            type:'FILTER_CHARACTER_BY_GENDER',
            payload:results
        })
    }

    const filterCharacterBySpecies = async (specie) =>{
        // console.log(`buscando ${gender}`);
        const url = 'https://rickandmortyapi.com/api/character/?species='+specie;
        const data = await axios.get(url)
        const results = data.data.results;
        // console.log(results);
        dispatch({
            type:'FILTER_CHARACTER_BY_SPECIES',
            payload:results
        })
    }

    const selectPage = async (page) =>{
        console.log(page);
        // recibo el numero de pagina por la variable page
        // obtengo el endpoint de la siguiente pagina
        const url = 'https://rickandmortyapi.com/api/character?page='+page;
        const data = await axios.get(url)
        const results = data.data.info.next;
        console.log(results);

        // hago un get del nuevo endpoint, que es la pagina siguiente
        const nuevoGetChar = await axios.get(results);
        // console.log(nuevoGetChar.data.results);
        // almaceno los nuevos personajes en un array
        const nuevoArrCharacters = nuevoGetChar.data.results;
        // envio el nuevo array de personajes

        dispatch({
            type:'SELECT_PAGE_CHARACTERS',
            payload: nuevoArrCharacters
        })
    }

    return (
        <CharacterContext.Provider value={{
            characters: state.characters,
            characterDetail: state.characterDetail,
            getCharacters,
            getCharacterById,
            getCharacterByName,
            filterCharacterByStatus,
            filterCharacterByGender,
            filterCharacterBySpecies,
            selectPage
        }}>
            {props.children}
        </CharacterContext.Provider>
    )
}
