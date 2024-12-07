import { Link } from 'react-router-dom';
import { ReactComponent as CartIcon } from '../../img/cart.svg';
import { ReactComponent as CartHoverIcon } from '../../img/cart-hover.svg';
import './Menu.scss';

export default function Menu() {

    return (
        <div className='menu'>
            <button className="menu__burger">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav className="menu__nav">
                <ul className="menu__list">
                    <li><Link to={'/'}><span>Home</span></Link></li>
                    <li><Link to={'/products'}><span>Products</span></Link></li>
                    <li className='menu__icon'>
                        <Link to={'/cart'}>
                            <span>Cart</span>
                            <CartIcon className='cart-icon' />
                            <CartHoverIcon className='cart-icon_hover' />
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}