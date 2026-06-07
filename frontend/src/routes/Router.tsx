import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";
import RouteErrorBoundary from "./RouterErrorBoundary";
import FallBackErrorUI from "./FallBackErrorUI";
import { APP_URLS } from "@/helpers";

const router = createBrowserRouter([
    {
        errorElement: <RouteErrorBoundary fallback={<FallBackErrorUI />} />,
        children: [
            {
                path: APP_URLS.home,
                element: <Home />,
            },
        ],
    },
]);

export default router;