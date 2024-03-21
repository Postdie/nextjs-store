import { getProducts } from "app/services/shopify/products"

export async function Get(){
    const products = await getProducts()
    return Response.json({products})
}