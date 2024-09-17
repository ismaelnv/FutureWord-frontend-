
export const shopifyUrls = {

    products: {

        'all': `http://localhost:8080/products`,
        'mainProducts': `http://localhost:8080/collections/1`,
        'search':(title: string) => `http://localhost:8080/products/search/product?title=${title}`
    }, 

    collections:{

        'all': `http://localhost:8080/collections`,
        'products': (id: string) => `http://localhost:8080/collections/${id}`
    }
}