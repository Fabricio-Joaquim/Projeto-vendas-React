export type Sale ={
    id: number,
    visited: number,
    deals: number,
    amount: number,
    date: string,
    seller:Seller;
}
export type Seller={
    id: number,
    name:string,
}