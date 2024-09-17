import { Product } from "./product";

export interface Collection{

    id: number;
    title: string;
    handle: string;
    products: Product[]
}