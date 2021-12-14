import axios from "axios";
import urls from "../config/url";

export const addItemToCart = (product) => {
    return {
        type: 'ADD_PRODUCT',
        product
    }
}
export function removeItemFromCart(product) {
    return {
        type: 'DELETE_ITEM',
        product
    }
}

export function clearCartData() {
    return {
        type: 'CLEAR_CART'
    }
}
export default addItemToCart;