import axios from 'axios'
import Chart from 'react-apexcharts'
import * as types from '../../types/types'
import { BASE_URL } from 'utils/requests'
import { useEffect, useState } from 'react'
export default function DonutsChart (){
    const [chartData, setChartData] = useState<types.ChartData>({labels:[], series:[]})
    const options = {
        legend: {
            show: true
        }
    }
    useEffect(() => {
        axios.get(`${BASE_URL}/sales/amount-by-seller`).then((response) => {
            const data = response.data as types.SaleSum[];
            const myLabels = data.map((item) => item.sellerName);
            const mySeries = data.map((item) => item.sum);
            setChartData({labels: myLabels, series: mySeries});
        })
    }, [])

    
    return(
            <Chart 
            options={{...options,labels:chartData.labels}}
            series={chartData.series}
            type='donut'
            height = "240"
            />
    )
}