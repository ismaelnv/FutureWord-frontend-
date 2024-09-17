import { Image } from "./image";

export interface Product {

    id: number;
    title: string;
    description: string;
    price: string;
    quantity: number;
    handle: string;
    tags: string;
    images: Image[];
}