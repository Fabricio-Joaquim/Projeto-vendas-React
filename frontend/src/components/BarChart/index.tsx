import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'
import * as types from '../../types/sale'
import { round } from 'utils/format';
import { BASE_URL } from 'utils/requests';
export default function BarChart(){
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    const [chartData, setChartData] = useState<types.CharData2>({
        labels:{
            categories: []},
        series: [   
            {name:"% Sucesso",
            data: [],}
        ]
    })

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/sucess-by-seller`).then((response) => {
            const data = response.data as types.SaleSuccess[]
            const myLabels = data.map((item) => item.sellerName);
            const mySeries = data.map((item) => round(100*item.deals / item.visited, 1));
            setChartData({
                labels:{
                    categories: myLabels},
                series: [   
                    {name:"% Sucesso",
                    data: mySeries,}
                ]
            });
        })
    }, [])

    return(
        <Chart 
        options={{...options,xaxis:chartData.labels}}
        series={chartData.series}
        type='bar'
        height = "240"
        />
    )
}