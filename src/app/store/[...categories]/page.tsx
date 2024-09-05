
interface CategoryProps{

    params:{

        categories: string[],
        searhParams?: string
    }
}

export default function Category(props:CategoryProps){
    console.log("ismael")
    const {categories} = props.params

    return(

        <h1>Categoria dinamica: {categories}</h1>
    )
}