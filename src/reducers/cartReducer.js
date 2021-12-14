const initialState = {
    products: []
}
const CartReducer = (state = initialState, action) => {
    let itemIndex = -1;
    switch (action.type) {
        case 'ADD_PRODUCT':
            itemIndex = state.products.findIndex(item => item.id === action.product.id);
            if (itemIndex >= 0) {
                const product = state.products.map((item, index) => {
                    if (index === itemIndex) {
                        const quan = item.quantity;
                        return Object.assign({}, item, {
                            quantity: quan + 1
                        })
                    }
                    return item;
                })
                return {
                    ...state,
                    products: product
                }
            } else {
                return {
                    ...state,
                    products: [
                        ...state.products,
                        action.product
                    ]
                }
            }
        case 'DELETE_ITEM':
            itemIndex = state.products.findIndex(item => item.id === action.product.id);
            let product = [];
            if (state.products[itemIndex].quantity === 1) {
                product = state.products.filter((item, index) => index !== itemIndex);
            } else {
                product = state.products.map((item, index) => {
                    if (index === itemIndex) {
                        const quan = item.quantity;
                        return Object.assign({}, item, {
                            quantity: quan - 1
                        });
                    }
                    return item;
                })
            }
            return {
                ...state,
                products: product
            }
        case 'CLEAR_CART':
            return {
                ...state,
                products: []
            };
        default:
            return state;
    }

}
export default CartReducer;