import OfferItem from '../offerItem/OfferItem';
import './Offers.scss';

const offersList = [
    {
        id: 1,
        title: 'Move the borders </br>of reality!',
        subtitle: `Go on a space adventure <span>- it's possible with us!</span>`,
        background: '/img/bg-space1.png',
        url: '#'
    },
    {
        id: 2,
        title: 'Space is not just stars and planets',
        subtitle: 'Go on a space adventure',
        background: '/img/bg-space3.png',
        url: '#'
    },
    {
        id: 3,
        title: 'For those who dream of stars',
        subtitle: 'Our offer: make your dream come true',
        background: '/img/bg-space4.png',
        url: '#'
    },
    {
        id: 4,
        title: 'Fulfill your fantastic dreams',
        subtitle: 'Space has never been so close',
        background: '/img/bg-space2.png',
        url: '#'
    },
]

export default function Offers() {

    return (
        <section className='offers'>
            <div className='wrapper'>
                <div className='offers__title'>Offers</div>
                <div className='offers__container'>
                    {offersList && offersList.map(item => <OfferItem key={item.id} {...item} />)}
                </div>
            </div>
        </section>
    )
}