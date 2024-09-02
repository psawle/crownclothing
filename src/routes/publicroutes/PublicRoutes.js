import { Route, Routes } from "react-router-dom"
import { Directory } from "../../components/directory/Directory"
import {Shop,Contact, SignUpForm, Login} from "../../screens"

export const PublicRoutes = (categories) => {
    const categories1 = categories
    return (
        <Routes>
            <Route path="/" element={<Directory categories={categories1}/>}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/signup" element={<SignUpForm />}></Route>
            <Route path="/login" element={<Login />}></Route>
        </Routes>
    )
}