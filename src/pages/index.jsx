import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./home";
import Layout from "../components/layout";
import Recipe from "./recipie";
import Category from "./category";
import CreateCategory from "./category/createCategory";
import CreateRecipe from "./recipie/createRecipe";
import Order from "./order";
import CreateOrder from "./order/createOrder";
import Delivery from "./delivery";
import CreateDelivery from "./delivery/createDelivery";

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/add-category" element={<CreateCategory />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/add-recipe" element={<CreateRecipe />} />
          <Route path="/order" element={<Order />} />
          <Route path="/add-order" element={<CreateOrder />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/add-delivery" element={<CreateDelivery />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default Main;
