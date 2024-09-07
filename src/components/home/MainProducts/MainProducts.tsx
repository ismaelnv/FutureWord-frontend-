import styles from "./MainProducts.module.sass";
import Image from "next/image";
import { getMainProducts } from "app/services/shopify/products"; 

export const MainProducts = async () => {

    const products = await getMainProducts()
    console.log(products)
    
    return (
        <section className={styles.MainProducts}>
          <h3>✨ New products released!</h3>
          <div className={styles.MainProducts__grid}>
            {products?.map((product) => {
              const imageSrc = product.image;
              return (
                <article key={product.id}>
                  <p>{product.title}</p>
                  <Image src={imageSrc} fill alt={product.title} loading="eager"/>
                </article>
              )
            })}
          </div>
        </section>
  )
}