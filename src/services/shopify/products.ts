import { shopifyUrls } from "./urls";

export const getProducts = async (id?: string) => {

    try{

        const apiUrl = id ? shopifyUrls.products.all+"/"+id : shopifyUrls.products.all
        const response =  await fetch(apiUrl)
        const products = await response.json();
        return products;

    }catch (error){

        console.log(error)
        return []
    }
    
}


export const getMainProducts = async () => {

    try{

        const response =  await fetch(shopifyUrls.products.mainProducts)
        const { products } = await response.json();
        console.log(products)
        return products;

    }catch (error){

        console.log(error)
    }
    
}

export const searchProducts = async (title: string) => {

    try{

        const response =  await fetch(shopifyUrls.products.search(title))

        if (!response.ok) {
            
            const errorResponse = await response.json();
            throw new Error(errorResponse.message);
        }

        const products = await response.json();
        return products;

    }catch (error){
        
        throw error;
    }
}

