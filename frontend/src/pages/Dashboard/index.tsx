import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutsChart from "components/DonutChart";
import NavBar from "components/NavBar";
import Footer from "components/Footer";

export default function Dashboard(){
    return(
<div className="container">
          <NavBar/>
          <div className="row px-3">     
            <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucesso(%)</h5>
            <BarChart/>
            </div>
            <div className="col-sm-6">
            <h5 className="text-center text-secondary">Todas as Vendas</h5>
            <DonutsChart/>
            </div>
          </div>
          <div className="py-3">
            <h2 className="text-primary">Todas as vendas </h2>
          </div>
      <DataTable/>
  <Footer/>
    </div>
    )
}