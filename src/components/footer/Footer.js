import RocketIcon from '../../img/rocket.png';
import './Footer.scss';

export default function Footer() {

    return (
        <footer className='footer'>
            <div className='footer__container'>
                <img className='footer__icon' src={RocketIcon} alt='icon' />
                <div>Exciting space adventure!</div>
            </div>
        </footer>
    )
}
