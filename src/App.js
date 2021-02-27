import './App.css';
import { useState, useEffect} from "react";
import Form from "./components/Form"
import ShoppingList from "./components/ShoppingList"


function App() {

  const [inputText, setInputText] = useState("");
  const [shoppingList, setShoppingList] = useState([]);
  const [selectStatus, setSelectStatus] = useState("all");
  const [filteredTobuy, setFilteredTobuy] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, [])
  useEffect(() => {
      filterHandler();
      saveLocalTodos();
  }, [shoppingList, selectStatus])
  
  const filterHandler = () =>{
    switch (selectStatus){
      case "Completed":
        setFilteredTobuy(shoppingList.filter((itemToBuy) => itemToBuy.completed === true));
        break;
      case "Uncompleted":
        setFilteredTobuy(shoppingList.filter((itemToBuy) => itemToBuy.completed === false));
        break;
      default:
        setFilteredTobuy(shoppingList);
        break; 

    }
  };
  const saveLocalTodos = () => {
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
}
  const getLocalTodos = () => {
    if (localStorage.getItem("shoppingList") === null){
      localStorage.setItem("shoppingList", JSON.stringify([]));
    }else{
      let shoppingListLocal = JSON.parse(localStorage.getItem("shoppingList"))
      setShoppingList(shoppingListLocal)
    }
  }
  return (
    <div className="container">
        <div className="content">
            <h2>SHOPPING LIST</h2>
            <Form
                setInputText={setInputText}
                inputText={inputText}
                shoppingList={shoppingList}
                setShoppingList={setShoppingList}
                setSelectStatus = {setSelectStatus}
            ></Form>
            <ShoppingList
                setShoppingList={setShoppingList}
                shoppingList={shoppingList}
                filteredTobuy = {filteredTobuy} 
            ></ShoppingList>
        </div>
    </div>
  );
}

export default App;
