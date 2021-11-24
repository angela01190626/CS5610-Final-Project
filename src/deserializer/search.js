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
            rating: (!!item.evaluate_rate) ? item.evaluate_rate.toString().substr(0, 3) : '3'
        };
        return product;
    })
    return productList;
}
export default deserializeGetLiquorByNameData;