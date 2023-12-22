import { useContext, useState } from "react";
import CharacterContext from "../../Context/CharacterContext";
import './Pagination.css'
export default function Pagination() {

    const { selectPage } = useContext(CharacterContext)

    // cre un estado para ir actualizando la pagina
    // empieza en 1 porque es la pagina 1 y no hay ninguna antes
    const [page, setPage] = useState(1)

    const handlePrevPage = () => {
        setPage(page - 1)
        selectPage(page);
    }
    const handleNextPage = () => {
        // console.log(`pagina siguiente`);
        // actualizo la pagina para enviarla al contexto y
        // ahi hacer un get a la nueva pagina
        setPage(page + 1)
        selectPage(page);
    }

    return (
        <div className="pagination_container">
            {
                page === 1 ? '' :
                    <button onClick={handlePrevPage} className="btn_pagination">prev</button>
            }
            {/* <button onClick={handlePrevPage} className="btn_pagination">prev</button> */}
            <button onClick={handleNextPage} className="btn_pagination">next</button>
        </div>
    )
}
