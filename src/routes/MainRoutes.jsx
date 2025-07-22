import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/LoginPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ProductPage from "../pages/ProductPage";
import RegisterPage from "../pages/RegisterPage"


const MainRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/product" element={<ProductPage />} />
                <Route path="/productDetail" element={<ProductDetailPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </AnimatePresence>
    )
}

export default MainRoutes
