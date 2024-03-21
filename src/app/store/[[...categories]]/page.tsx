interface CategoryProps {
    
    params: {

        categories: string[],

        searchParams?: string

    }
}

export default function category(props: CategoryProps){

    const { categories } = props.params

    //throw new Error('Error: Boom!')

    return (

        <h1> Categoria dinamica: {categories} </h1>

    )
}