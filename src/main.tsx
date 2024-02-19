import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "normalize.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import ErrorPage from "./components/erorrPage/erorrPage.tsx";
import Admin from "./components/admin/admin.tsx";
import Header from "./components/header/header.tsx";
import App from "./App.tsx";
import AdminProduct from "./components/AdminProduct/adminProduct.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <App />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: (
      <>
        <Header />
        <Admin />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "admin/:idProduct",
    element: (
      <>
        <Header />
        <AdminProduct />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
