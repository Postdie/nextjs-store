import { getProducts } from "app/services/shopify"

export async function Get(){
    const products = await getProducts()
    return Response.json({products})
}