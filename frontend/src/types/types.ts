export type SaleSum = {
    sellerName: string,
    sum: number
}

export type ChartData = {
    labels: string[],
    series: number[],
}

export type SaleSuccess = {
    sellerName: string,
    visited: number,
    deals:number
}

export type SeriesData={
   name:string,
   data:number[], 
}

export type CharData2 ={
    labels:{categories: string[]},
    series: [   
        {name:string,
        data:number[]}
    ];
}