import Image from "next/image";
import { ProductViewItemsOrder } from "./ProductViewItemsOrder";
import styles from './ProductView.module.sass'
import { SanitizeHTML } from "app/components/SanitizeHTML";
import { Product } from "app/model/product";

interface ProductViewProps {

  product: Product
}

export const ProductView = ({ product }: ProductViewProps) => {

  return (
    <main className={styles.ProductView}>
      <section className={styles.ProductView__images}>
        <Image
          loading="eager"
          src={product.images[0].urlStatica}
          width={500}
          height={500}
          quality={80}
          alt={product.title}
        />
      </section>
      <section className={styles.ProductView__info}>
        <h1 className={styles.ProductView__info__title}>{product.title}</h1>
        <p className={styles.ProductView__info__category}>{product.tags}</p>
        <SanitizeHTML className={styles.ProductView__info__description} tag="div">
          {product.description}
        </SanitizeHTML>
        <span className={styles.ProductView__info__price}>
          $ {product.price}
        </span>
        <ProductViewItemsOrder maxQuantity={product.quantity=0} />
      </section>
    </main>
  )
};