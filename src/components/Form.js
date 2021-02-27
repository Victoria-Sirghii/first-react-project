import React from 'react';

const Form = ({inputText, setInputText, shoppingList, setShoppingList, setSelectStatus}) =>{
    //iau textul din input
    const inputTextHandler = (e) =>{
        setInputText(e.target.value)
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        setShoppingList([
            ...shoppingList,
            {text: inputText, completed: false}
        ]);
        setInputText("");
    }

    const selectHandler = (e) =>{
        setSelectStatus(e.target.value)
    }
    return (
        <form>
            <input 
                value={inputText} 
                onChange={inputTextHandler} 
                type="text" 
                name="productName"
                className="borderActive"
            />
            <button 
                onClick={submitHandler}
                type="submit"
                className="add-button" >Add item
            </button>
            <div className="select">
                  <select onChange={selectHandler} name="" className="filter-tobuy">
                      <option value="all">All</option>
                      <option value="Completed">Bought</option>
                      <option value="Uncompleted">To be bought</option>
                  </select>
              </div>
        </form>
    )
}

export default Form;