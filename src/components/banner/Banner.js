import LearnMoreBtn from '../learMoreBtn/LearnMoreBtn';
import './Banner.scss';

const mainOffer =
{
    id: 1,
    title: `Discover the vast expanses of <span>space</span>`,
    subtitle: `Where the possibilities are <span>endless!</span>`,
    background: '/img/bg-banner.jpg',
    url: '#',
}

export default function Banner() {

    const { title, subtitle, background, url } = mainOffer;

    let bgStyles = 'linear-gradient(to right, rgba(15, 20, 32, 0.79) 0%, rgba(0, 0, 0, 0) 100%)';

    if (background) {
        bgStyles += `, url(${background})`;
    }

    return (
        <section className='banner' style={{ backgroundImage: bgStyles }}>
            <div className='wrapper'>
                <img src='/img/EARTH.png' alt='earth' />
                <div className='banner__container'>
                    <div className='banner__title' dangerouslySetInnerHTML={{ __html: title }}></div>
                    <div className='banner__subtitle' dangerouslySetInnerHTML={{ __html: subtitle }}></div>
                    <LearnMoreBtn url={url} primary='primary' />
                </div>
            </div>
        </section>
    )
}