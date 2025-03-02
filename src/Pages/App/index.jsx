import './index.css'
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "../../Routes"
import NavBar from '../../Components/NavBar'

const App = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <AppRoutes/>
        </BrowserRouter>
    )
}
export default App