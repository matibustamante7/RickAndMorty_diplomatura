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
                <label className="input_label">Status </label>
                <select name="status" onChange={handleChangeStatus} className="input_select">
                    <option value="" className="input_option"></option>
                    <option value="alive" className="input_option">Alive</option>
                    <option value="dead" className="input_option">Dead</option>
                    <option value="unknown" className="input_option">Unknown</option>
                </select>
            </div>
            <div className="filter_subcontainer">
                <label className="input_label">Gender </label>
                <select name="status" onChange={handleChangeGender} className="input_select">
                    <option value="" className="input_option"></option>
                    <option value="Male" className="input_option">Male</option>
                    <option value="Female" className="input_option">Female</option>
                    <option value="genderless" className="input_option">Genderless</option>
                    <option value="unknown" className="input_option">Unknown</option>
                </select>
            </div>
            <div className="filter_subcontainer">
                <label className="input_label">Species </label>
                <select name="status" onChange={handleChangeSpecies} className="input_select">
                    <option value="" className="input_option"></option>
                    <option value="Human" className="input_option">Human</option>
                    <option value="Humanoid" className="input_option">Humanoid</option>
                    <option value="Alien" className="input_option">Alien</option>
                </select>
            </div>
        </div>
    )
}
