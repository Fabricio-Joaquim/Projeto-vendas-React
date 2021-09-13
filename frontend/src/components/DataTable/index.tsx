import axios from "axios"
import Pagination from "components/Pagination"
import { useEffect, useState } from "react"
import { formatLocalDate } from "utils/format"
import { BASE_URL } from "utils/requests"
import * as types from "../../types/sale"
export default function DataTable(){
    const [Page, setPage] = useState<types.SalePage>({
        content: [],
        last: true,
        totalElements: 0,
        totalPages: 0,
        size: 0,
        number: 0,
        frist: true,
        numberOfElements: 0,
        empty: true
    })
    const [activePage, setActivePage] = useState(0)
    useEffect(() => {
        axios.get(`${BASE_URL}/sales?page=${activePage}&size=20&sort=date,desc`).then((response) => {
            setPage(response.data);
        })
    }, [activePage])
const onPageChange = (index: number) => {
    setActivePage(index)
}
    return(<>
        <Pagination page={Page} onPageChange={onPageChange}/>
        <div className="table-responsive">
    <table className="table table-striped table-sm">
        <thead>
            <tr>
                <th>Data</th>
                <th>Vendedor</th>
                <th>Clientes visitados</th>
                <th>Negócios fechados</th>
                <th>Valor</th>
            </tr>
        </thead>
        <tbody>{
            Page.content?.map(item => (
            <tr key={item.id}>
                <td>{formatLocalDate(item.date,"dd/MM/yyyy")}</td>
                <td>{item.seller.name}</td>
                <td>{item.visited}</td>
                <td>{item.deals}</td>
                <td>{item.amount.toFixed(2)}</td>
            </tr>
            ))
            }
        </tbody>
    </table>
</div>
</>)
}