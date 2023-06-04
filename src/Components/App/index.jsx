import "../../scss/app.scss";
import Header from "../Header";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import NotFound from "../Pages/NotFound";
import Epic from "../../reliz/epic";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/cart" element={<Cart />}/>
          <Route exact path="/epic" element={<Epic />}/>
          <Route exact path="*" element={<NotFound />}/>
        </Routes>
    </div>
  );
};

export default App;
