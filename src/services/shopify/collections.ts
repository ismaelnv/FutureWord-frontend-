import { env } from "app/config/env"
import { shopifyUrls } from "./urls";
import { collecitonDto } from "app/model/collectionDto";

export const getCollections = async () => {

    try{

        const response =  await fetch(shopifyUrls.collections.all,{
            headers: {
    
                'X-Shopify-Access-Token': env.SHOPIFY_API_KEY
            }
        })
    
        const { smart_collections } = await response.json();
        const trasformedCollections = smart_collections.map((colleciton: collecitonDto)=>{
            
            return {

                id: colleciton.id,
                title: colleciton.title,
                handle: colleciton.handle,
            }
        })

        return trasformedCollections;
    }catch (error){

        console.log(error)
    }
    
}

export const getCollectionProducts = async (id: string) =>{

    try {

        const response = await fetch(shopifyUrls.collections.products(id),{

            headers: {
        
                'X-Shopify-Access-Token': env.SHOPIFY_API_KEY
            }
        })
    
        const { products } = await response.json()
        return products

    } catch (error) {
        
        console.log(error)
    }
}