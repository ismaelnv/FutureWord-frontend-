
import { getCollections } from "app/services/shopify/collections"
import Link from "next/link"
import styles from './StoreLayout.module.sass'
import { Collection } from "app/model/collection"
import { Button } from "@mui/material"
import { ProductSearch } from "app/components/Store/ProductSearch"

export default async function Layout({ children }: { children: React.ReactNode }) {

  const collections = await getCollections()

  const filteredCollections = collections.filter(

    (collection: Collection, index: number) => collection.handle !== 'Main products' && index !== 0
  );
  
  return (
    <main className={styles.StoreLayout}>
      <ProductSearch/>
      <h1>Explore</h1>
      <nav>
        <ul className={styles.StoreLayout__list}>
          {
            filteredCollections.map((collection:Collection) => (
              <Link key={collection.id} href={'/store/' + collection.handle}>
                <Button className={styles.StoreLayout__chip}>{collection.title}</Button> 
              </Link>
            ))
          }
        </ul>
      </nav>
      {children}
    </main>
  )
}