import { Route, Routes } from "react-router-dom"
import NavBar from "./components/Navbar"
import LandingPage from "./pages/LandingPage"

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
            </Routes>
        </>
    )
}

export default App
