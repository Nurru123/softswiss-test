import LearnMoreBtn from '../learMoreBtn/LearnMoreBtn';
import './OfferItem.scss';

export default function OfferItem(props) {

    const { title, subtitle, background, url } = props;

    return (
        <div className='offer' style={{ backgroundImage: `linear-gradient(to right, rgba(15, 20, 32, 0.79) 0%, rgba(0, 0, 0, 0) 100%), url(${background})` }}>
            <div className='offer__container'>
                <div className='offer__title' dangerouslySetInnerHTML={{ __html: title }}></div>
                <div className='offer__subtitle' dangerouslySetInnerHTML={{ __html: subtitle }}></div>
                <LearnMoreBtn url={url} />
            </div>
        </div>
    );
}