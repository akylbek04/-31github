import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import App from "./components/App";
import { About } from "./pages/About";
import { Shop } from "./pages/Shop";
import { Suspense } from "react";

const root = document.getElementById("root");
if (!root) {
  throw new Error("root not found");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={<p>...Loading</p>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/shop",

        element: (
          <Suspense fallback={<p>...Loading</p>}>
            <Shop />
          </Suspense>
        ),
      },
    ],
  },
]);

const container = createRoot(root);

container.render(<RouterProvider router={router} />);
