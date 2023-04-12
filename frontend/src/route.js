import { useRoutes } from 'react-router-dom';
import UserLayout from './layouts/UserLayout';
import Home from './components/user/Home';
import Products from './components/user/Products';
import Promo from './components/user/Promo';
import About from './components/user/About';
import Contact from './components/user/Contact';
import Cart from './components/user/Cart';
import SingleProduct from './components/user/SingleProduct';
import Checkout from './components/user/Checkout';
import AdminLayout from './layouts/AdminLayout';

import Login from './components/admin/Login';
import AdminProducts from './components/admin/Products';
import Order from './components/admin/Order';
import Upload from './components/admin/Upload';
import Edit from './components/admin/Edit';

import Register from './components/user/Register';
import LoginUser from './components/user/Login';
// import Login from './components/admin/Login';
// import Login from './components/admin/Login';

const UserRoutes = {
    path: '/',
    element: <UserLayout />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/login',
            element: <LoginUser />
        },
        {
            path: '/register',
            element: <Register />
        },
        {
            path: '/products',
            element: <Products />
        },
        {
            path: '/promo',
            element: <Promo />
        },
        {
            path: '/about',
            element: <About />
        },
        {
            path: '/contact',
            element: <Contact />
        },
        {
            path: '/cart',
            element: <Cart />
        },
        {
            path: '/products/:id',
            element: <SingleProduct />
        },
        {
            path: '/checkout',
            element: <Checkout />
        }
    ],
};

const AdminRoutes = {
    path: '/admin',
    element: <AdminLayout />,
    children: [
        {
            path: '/admin/login',
            element: <Login />
        },
        {
            path: '/admin/products',
            element: <AdminProducts />
        },
        {
            path: '/admin/order',
            element: <Order />
        },
        {
            path: '/admin/upload',
            element: <Upload />
        },
        {
            path: '/admin/edit/:id',
            element: <Edit />
        }
    ],
};

export default function Routes() {
    return useRoutes([UserRoutes, AdminRoutes]);
}
