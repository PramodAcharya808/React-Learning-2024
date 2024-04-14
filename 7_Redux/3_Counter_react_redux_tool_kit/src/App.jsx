import "bootstrap/dist/css/bootstrap.css";
import Header from "./component/Header";
import Counter_Display from "./component/Counter_Display";
import Controllers from "./component/Controllers";
const App = () => {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <Header></Header>
        <div className="col-lg-6 mx-auto">
          <Counter_Display></Counter_Display>
          <Controllers></Controllers>
        </div>
      </div>
    </>
  );
};

export default App;
