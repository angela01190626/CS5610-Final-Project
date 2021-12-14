const deserializeGetLiquorByNameData = (raw) => {
    let list = [];
    raw.drinks.forEach(element => {
       list.push({
           itemName: element.strDrink,
           id: element.idDrink,
           prodImg: element.strDrinkThumb,
           cost: "10",
           originalPrice: "15",
           rating: "5"
       }) 
    });
    return list;
}

export const deserializeProductSearchResult = (raw) => {
    let productList = raw.filter(item => item.original_price && item.app_sale_price).map(item => {
        const product = {
            id: item.product_id,
            itemName: item.product_title,
            prodImg: item.product_main_image_url,
            originalPrice: item.original_price,
            cost: item.app_sale_price,
            rating: (!!item.evaluate_rate) ? parseFloat(item.evaluate_rate.toString().substr(0, 3)) : 3
        };
        return product;
    })
    return productList;
}

export const deserializeProductDetailResult = (raw) => {
        const product = {
            id: raw.product_id,
            itemName: raw.product_title,
            prodImg: raw.product_main_image_url,
            cost: raw.app_sale_price.toString(),
            rating: (!!raw.product_details &&
                      !!raw.product_details.Customer_Reviews)
                     ? parseFloat(raw.product_details.Customer_Reviews.toString().substr(0, 3)) : 3
        };
    return product;
}

export const getItemQuantity = (cart, id) => {
    const product = cart.find(prod => prod.id === id);
    if(!!product) {
        return product.quantity;
    } 
    return 0;
}

export default deserializeGetLiquorByNameData;