
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY} from './action-types/cart-actions'

//adicionar ao carrinho
export const addToCart= (productID)=>{
    return{
        type: ADD_TO_CART,
        productID
    }
}
//remover produto
export const removeItem=(productID)=>{
    return{
        type: REMOVE_ITEM,
        productID
    }
}
//subtrair quantidade de produto
export const subtractQuantity=(productID)=>{
    return{
        type: SUB_QUANTITY,
        productID
    }
}
//adicionar quantidade de produto
export const addQuantity=(productID)=>{
    return{
        type: ADD_QUANTITY,
        productID
    }
}