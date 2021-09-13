import * as types from "../../types/sale"
type Props = {
    page: types.SalePage
    onPageChange: Function;
}
export default function Pagination({page, onPageChange}:Props){
console.log(page.number)
    return(<div className="row d-flex justify-content-center">
    <nav>
        <ul className="pagination">
            <li className={`page-item ${page.number===0 ? 'disabled':''}`}>
                <button className="page-link" onClick={()=>onPageChange(page.number-1)}>Anterior</button>
            </li>
            <li className="page-item disabled">
                <span className="page-link" >{page.number+1}</span>
            </li>
            <li className={`page-item ${page.last ? 'disabled':''}`}>
                <button className="page-link" onClick={()=>onPageChange(page.number+1)}>Próxima</button>
            </li>
        </ul>
    </nav>
</div>)
}