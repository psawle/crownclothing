import { Route, Routes } from "react-router-dom"
import { Directory } from "../../components/directory/Directory"

export const PublicRoutes = (categories) => {
    const categories1 = categories
    return (
        <Routes>
            <Route path="/" element={<Directory categories={categories1}/>}></Route>
        </Routes>
    )
}