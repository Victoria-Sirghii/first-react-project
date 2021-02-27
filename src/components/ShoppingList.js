import React from 'react';
import ToBuy from "./ToBuy"


const ShoppingList = ({shoppingList, setShoppingList, filteredTobuy}) =>{
    return(
        <div className="shopping-container">
            <ul className="shopping-list">
                {filteredTobuy.map((itemToBuy) => (
                    <ToBuy
                        itemToBuy={itemToBuy}
                        shoppingList={shoppingList}
                        setShoppingList={setShoppingList} 
                        text={itemToBuy.text} 
                    />
                ))}
            </ul>
        </div>
    )
}
export default ShoppingList;