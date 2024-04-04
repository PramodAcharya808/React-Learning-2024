import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from "./components/ErrorMessage";
import Items from "./components/Items";
import Container from "./components/Container.jsx";
import { useState } from "react";
import Input from "./components/Input.jsx";

let App = () => {
  let [cartItems, setCartItems] = useState([]);

  let handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      let newItem = event.target.value;
      setCartItems([...cartItems, newItem]);
      event.target.value = "";
    }
  };

  let btnOnClick = (event) => {
    console.log("clicked");
    event.preventDefault();
  };

  return (
    <>
      <Container>
        <div className="container text-center my-5">
          <h1>My Shoping Cart</h1>
          <Input handleOnKeyDown={handleOnKeyDown}></Input>

          {/* Error Message Display */}
          <ErrorMessage allItems={cartItems} />
          {cartItems.map((data) => (
            <Items key={data} items={data} btnOnClick={btnOnClick} />
          ))}
        </div>
      </Container>

      {/* <Container>
        <p className="text-center">Above is your shoping basket</p>
      </Container> */}
    </>
  );
};

export default App;
