interface CategoryProps {
    
    params: {

        categories: string[],

        searchParams?: string

    }
}

export default function category(props: CategoryProps){
    
    console.log(props)

    const { categories } = props.params

    console.log(categories)

    return (

        <h1> Categoria dinamica: {categories} </h1>

    )
}