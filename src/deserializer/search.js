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
export default deserializeGetLiquorByNameData;