

import { ADD_CHARACTERS, ADD_CHARACTER_BY_ID, SEARCH_CHARACTER_BY_NAME, FILTER_CHARACTER_BY_STATUS,FILTER_CHARACTER_BY_GENDER, FILTER_CHARACTER_BY_SPECIES, SELECT_PAGE_CHARACTERS} from "./Types";

export default (state, action) =>{
    const {payload, type} = action;

    switch (type) {
        case ADD_CHARACTERS:
            return {
                ...state,
                characters: payload
            }
            
        case ADD_CHARACTER_BY_ID:
            // console.log(payload);
            return {
                ...state,
                characterDetail: payload
            }
        case SEARCH_CHARACTER_BY_NAME:
            // console.log(payload);
            return {
                ...state,
                characters: payload
            }
            
        case FILTER_CHARACTER_BY_STATUS:
            return {
                ...state,
                characters: payload
            }
        case FILTER_CHARACTER_BY_GENDER:
            return {
                ...state,
                characters: payload
            }
        case FILTER_CHARACTER_BY_SPECIES:
            return {
                ...state,
                characters: payload
            }
        case SELECT_PAGE_CHARACTERS:
            return {
                ...state,
                characters: payload
            }
            
        default:
            break;
    }
}