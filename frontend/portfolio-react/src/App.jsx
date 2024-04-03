import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import Landing from "./routes/Landing";
import Portfolio from "./routes/Portfolio";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Landing /> },
            {path: "/portfolio", element: <Portfolio/>}
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
