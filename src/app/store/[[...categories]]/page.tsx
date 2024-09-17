'use client'
import { ProductsWrapper } from "app/components/Store/ProductsWrapper"
import { Collection } from "app/model/collection"
import { getCollectionProducts, getCollections } from "app/services/shopify/collections"
import { getProducts } from "app/services/shopify/products" 
import { useEffect, useState } from "react"
import {useDispatch, useSelector } from "react-redux"
import { searchProducts } from "app/services/shopify/products"
import { clearSearchQuery } from "../../../redux/searchSlice"
import { Product } from "app/model/product"
import { RootStore } from "app/redux/redux"
import { Alert, AlertTitle } from "@mui/material"

interface CategoryProps{

  params:{

    categories: string,
    searhParams?: string
  }
}
export default function Category(props:CategoryProps){

  const {categories} = props.params
  const [products, setProducts] = useState<Product[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const searchQuery: string = useSelector((state: RootStore) => state.search.query);
  let fetchedProducts:Product[] = [];

  useEffect(() => {

    const fetchProducts = async () => {

      try{

        if (searchQuery) {
      
          fetchedProducts = await searchProducts(searchQuery);
  
          if (fetchedProducts && fetchedProducts.length > 0) {

            setErrorMessage('')
            setProducts(fetchedProducts);
          }else {
            setErrorMessage('No products found for your search.');
          }
        }
      }catch(error){

        const err = error as Error;
        setErrorMessage(err.message)
      }
      
    };
      
    fetchProducts();

  }, [searchQuery]);

  useEffect(() => {

    const fetchProductsByCategory = async () => {

      if (categories) { 
        const nameCategory = decodeURIComponent(categories);
        const collections = await getCollections();
        const selectedCollectionId = collections.find(
        (collection: Collection) => collection.handle === nameCategory
        )?.id;
        fetchedProducts = await getCollectionProducts(selectedCollectionId);
      }else{
        fetchedProducts = await getProducts();
      }

      setErrorMessage('')
      setProducts(fetchedProducts);
      dispatch(clearSearchQuery());
    };
  
    fetchProductsByCategory();
  }, [categories]);

  return(

    <div>
      {errorMessage ? (
        <Alert severity="warning">
          {errorMessage}
        </Alert>
      ) : (
        <ProductsWrapper products={products} />
      )}
    </div>
  )
}
