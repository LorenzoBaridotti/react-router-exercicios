import { BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "../pages/HomePage"
import ProfilePage from "../pages/ProfilePage"
import ErrorPage from "../pages/ErrorPage"
import ProductPage from "../pages/ProductPage"
//o route precisa de duas informações
//a primeira é o caminho (path) e a segunda é o componente
//a ser renderizado 


const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="/profile/:id" element={<ProfilePage/>}/>
            <Route path="*" element={<ErrorPage/>}/>
            <Route path="/product/:id" element={<ProductPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Router