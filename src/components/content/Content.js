import Main from '../../pages/mainPage/MainPage'
import { Routes, Route } from 'react-router-dom';

import './Content.scss';

const Products = () => <h1>Products</h1>;
const Cart = () => <h1>Cart</h1>;

export default function Content() {

    return (
        <main className='content'>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </main>
    )
}