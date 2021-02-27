import React from 'react';

const ToBuy = ({shoppingList, setShoppingList, text, itemToBuy}) =>{
    const deleteHandler = () =>{
        setShoppingList(shoppingList.filter((el) => el.text !== itemToBuy.text))
    }
    const completeHandler = () => {
        setShoppingList(shoppingList.map((item) =>{
            if(item.text === itemToBuy.text){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    return(
        <div className="tobuy">
            <li className={`${itemToBuy.completed ? "completed" : ""}`} >{text}</li>
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    )
}

export default ToBuy;