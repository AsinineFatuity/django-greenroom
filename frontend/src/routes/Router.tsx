import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";
import { APP_URLS } from "@/helpers";

const router = createBrowserRouter([
    {
        path: APP_URLS.home,
        element: <Home />,
    },
]);

export default router;