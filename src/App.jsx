import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import NearestStore from "./components/shop/NearestStore";
import BestProductView from "./views/BestProductView";
import CartView from './views/CartView'
import LoginView from './views/LoginView'
import SignUpView from "./views/SignUpView";
import ProductDetailView from "@/views/ProductDetailView";
import Mac from '@/components/mac/Card.jsx'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/nearest-store" element={<NearestStore />}></Route>
            <Route path="/apple" element={<BestProductView />}></Route>
            <Route path="/cart" element={<CartView />}></Route>
            <Route path="/login" element={<LoginView/>}></Route>
            <Route path="/Sign_up" element={<SignUpView />} />
            <Route path="/15pro" element={<ProductDetailView />} />
            <Route path="/mac" element={<Mac/>}></Route>
        </Routes>
    );
}

export default App;
