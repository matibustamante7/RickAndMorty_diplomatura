import { useContext, useState } from "react";
import CharacterContext from "../../Context/CharacterContext";

export default function Pagination() {

    const {selectPage} = useContext(CharacterContext)

    // cre un estado para ir actualizando la pagina
    // empieza en 1 porque es la pagina 1 y no hay ninguna antes
    const [page, setPage] = useState(1)

    const handlePrevPage = ()=>{
        setPage(page-1)
        selectPage(page);
    }
    const handleNextPage = ()=>{
        // console.log(`pagina siguiente`);
        // actualizo la pagina para enviarla al contexto y
        // ahi hacer un get a la nueva pagina
        setPage(page+1)
        selectPage(page);
    }

    return (
        <div>
            <button onClick={handlePrevPage}>prev</button>
            <button onClick={handleNextPage}>next</button>
        </div>
    )
}
