import { ProductView } from "app/components/product/ProductView"
import { getProducts } from "app/services/shopify/products";
import { redirect } from "next/navigation";

interface ProductPageProps{

    searchParams:{

        id: string
    }
}

export default async function ProductPage({searchParams}: ProductPageProps) {
    
    const id = searchParams.id;
    const product = await getProducts(id);

    if(!id){

        redirect('/store')
    }

    return <ProductView product = {product}/>
}