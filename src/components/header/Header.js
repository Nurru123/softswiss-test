import { Link } from 'react-router-dom';
import Menu from '../menu/Menu';
import { ReactComponent as Logo } from '../../img/logo.svg';
import './Header.scss';

export default function Header() {

    return (
        <header className='header'>
            <div className='wrapper'>
                <div className='header__container'>
                    <div className='header__logo'>
                        <Link to={'/'}><Logo /></ Link>
                    </div>
                    <Menu />
                </div>
            </div>
        </header >
    )
}