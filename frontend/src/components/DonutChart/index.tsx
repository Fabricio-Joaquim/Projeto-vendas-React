import axios from 'axios'
import Chart from 'react-apexcharts'
import * as types from '../../types/types'
import { BASE_URL } from 'utils/requests'
export default function DonutsChart (){
    let charData:types.ChartData = {labels:[], series:[]}
    const options = {
        legend: {
            show: true
        }
    }
    axios.get(`${BASE_URL}/sales/amount-by-seller`).then((response) => {
        const data = response.data as types.SaleSum[];
        const myLabels = data.map((item) => item.sellerName);
        const mySeries = data.map((item) => item.sum);
        charData = {labels: myLabels, series: mySeries};
    })
    
    return(
            <Chart 
            options={{...options,labels:mockData.labels}}
            series={mockData.series}
            type='donut'
            height = "240"
            />
    )
}