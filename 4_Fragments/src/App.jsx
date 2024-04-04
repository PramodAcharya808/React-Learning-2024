import "bootstrap/dist/css/bootstrap.min.css";
let App = () => {
  let foodItems = ["Apple", "Banana", "Orange", "Mangoo", "Pineapple"];

  return (
    <>
      <h1>Healthy</h1>
      {foodItems.length === 0 ? <h5>No items in cart</h5> : null}
      <ul className="list-group">
        {foodItems.map((items) => (
          <li key={items} className="list-group-item">
            {items}
          </li>
        ))}
      </ul>
    </>
  );
};
export default App;
