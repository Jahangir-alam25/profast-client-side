import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Coverage from "../Pages/Coverage/Coverage";
import PrivateRoute from "./PrivateRoute";
import SendParcel from "../Pages/SendParcel/SendParcel";
import MyParcels from "../Pages/Dashboard/MyParcels/MyParcels";
import DashboardLayout from "../Layouts/DashboardLayout";
import Payment from "../Pages/Dashboard/MyParcels/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import TrackParcel from "../Pages/Dashboard/TrackParcel/TrackParcel";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "coverage",
        loader: () => fetch('warehouses.json'),
        Component: Coverage,
      },
      {
        path: "sendParcel",
        loader: () => fetch('warehouses.json'),
        element: <PrivateRoute><SendParcel></SendParcel></PrivateRoute>,
      }
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      }
    ],
  },
   {
    path: '/dashboard',
    element: <PrivateRoute>
      <DashboardLayout></DashboardLayout>
    </PrivateRoute>,
    children: [
      {
        path: 'myParcels',
        Component: MyParcels
      },
        {
        path: 'payment/:parcelId',
        Component: Payment
      },
        {
        path: 'paymentHistory',
        Component: PaymentHistory
      },
      {
        path: 'track',
        Component: TrackParcel
      }
    ]
  }
]);

export default router;
