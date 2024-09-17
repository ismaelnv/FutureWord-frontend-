import Link from "next/link";
import styles from "./ProductCard.module.sass";
import { Product } from "app/model/product";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';


interface ProductCardInterface {
  
  product: Product

}

export const ProductCard = ({ product }: ProductCardInterface) => {

  return (
    <Link href={`/product/${product.handle}?id=${product.id}`} className={styles.ProductCard__link}>
      <article className={styles.ProductCard}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="320"
              width="320"
              image={product.images[0].urlStatica}
              alt={product.title}
            />
          </CardActionArea>
        </Card>
        
        <span className={styles.ProductCard__priceTag}>${product.price} USD</span>
      
        <div className={styles.ProductCard__info}>
          <h3>{product.title}</h3>
        </div>
      </article>
    </Link>    
  );
}