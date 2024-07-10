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
                        element={isLoggedIn ? <Navigate to="/product" /> : <Login />}
                    />
                    <Route path="/product" element={isLoggedIn ? <Product/> :  <Navigate to="/login" />} />
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
