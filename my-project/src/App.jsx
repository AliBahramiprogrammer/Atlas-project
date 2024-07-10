import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./page/Login";
import Product from "./page/Product";
import NotFound from "./page/NotFound";
function App() {
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/login"
                        element={isLoggedIn ? <Navigate to="/" /> : <Login />}
                    />
                    <Route path="/product" element={<Product />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
