import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { ProductsPage } from "./pages/Products";
import { RootLayout } from "./pages/Root";
import { ErrorPage } from "./pages/Error";
import { ProductDetailPage } from "./pages/ProductDetail";

const routeDefinitions = createRoutesFromElements(
  <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<ProductsPage />} />
    <Route path="/products/:productId" element={<ProductDetailPage />} />
  </Route>
);

const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
