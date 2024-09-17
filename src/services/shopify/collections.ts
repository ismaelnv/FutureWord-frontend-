import { shopifyUrls } from "./urls";

export const getCollections = async () => {

    try{

        const response =  await fetch(shopifyUrls.collections.all)
        const smart_collections = await response.json();
        return smart_collections;
        
    }catch (error){

        console.log(error)
    }
    
}

export const getCollectionProducts = async (id: string) =>{

    try {

        const response = await fetch(shopifyUrls.collections.products(id))
        const { products } = await response.json()
        console.log(products)
        return products

    } catch (error) {
        
        console.log(error)
    }
}