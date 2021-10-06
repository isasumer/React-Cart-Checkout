import { BrowserRouter as Router, Route } from "react-router-dom";
import Products from "./components/Products";
import Cart from "./components/Cart";

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Alışveriş Sepeti Yapımı</h1>
        <Route exact path="/" component={Products} />
        <Route path="/cart" component={Cart} />
      </div>
    </Router>
  );
};

export default App;
