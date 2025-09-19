import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "../pages"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element = {<Login/>} path="/"/>
            </Routes>
        </BrowserRouter>
    )
}