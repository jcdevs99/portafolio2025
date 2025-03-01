import { useRoutes } from "react-router-dom";
import Home from "../Pages/Home";

const AppRoutes = () => {
    let routes = useRoutes([
        {path: '/', element: <Home/>},
        {path: '/home', element: <Home/>},
        {path: '/*', element: <p>pagina no encontrada</p>}

    ])
    return routes;
}

export default AppRoutes;