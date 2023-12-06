import { useContext } from "react"
import CharacterContext from "../../Context/CharacterContext"
import './Filters.css'
export default function Filters() {

    const { filterCharacterByStatus, filterCharacterByGender, filterCharacterBySpecies } = useContext(CharacterContext)

    const handleChangeStatus = (e) => {
        const status = e.target.value;
        filterCharacterByStatus(status)
    }
    const handleChangeGender = (e) => {
        const gender = e.target.value;
        filterCharacterByGender(gender)
    }
    const handleChangeSpecies = (e) => {
        const specie = e.target.value;
        filterCharacterBySpecies(specie)
    }

    return (
        <div className="filters_container">
            <div className="filter_subcontainer">
                <label>Status </label>
                <select name="status" onChange={handleChangeStatus}>
                    <option value="alive">Alive</option>
                    <option value="dead">Dead</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
            <div className="filter_subcontainer">
                <label>Gender </label>
                <select name="status" onChange={handleChangeGender}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
            <div className="filter_subcontainer">
                <label>Species </label>
                <select name="status" onChange={handleChangeSpecies}>
                    <option value="Human">Human</option>
                    <option value="Humanoid">Humanoid</option>
                    <option value="Alien">Alien</option>
                </select>
            </div>
        </div>
    )
}
