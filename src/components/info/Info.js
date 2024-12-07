import './Info.scss';

export default function Info() {

    return (
        <section className='info'>
            <div className='wrapper'>
                <div className='info__title'>Embark on a space journey</div>
                <input type="checkbox" id="read-more-toggle" />
                <div className='info__text'>
                    Travelling into space is one of the most exciting and unforgettable adventures that can change your life forever.
                    And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize
                    this dream. We offer a unique experience that will allow you to go on a space journey and see all the secrets of
                    the universe. We guarantee that every moment in space will be filled with incredible impressions, excitement and
                    new discoveries. Our team of professionals takes care of your safety and comfort so that you can fully enjoy your
                    adventure in space. We offer various options for space excursions.
                    <div className='info__text_more'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus,
                        nisl at tempor ultrices, urna turpis feugiat est, ut efficitur purus
                        tortor vel nisl. Proin id augue nec arcu cursus tincidunt non vel felis.
                        Maecenas pharetra, risus non pharetra bibendum, nisl augue aliquet enim,
                        nec vehicula risus arcu at justo.
                    </div>
                </div>
                <label htmlFor="read-more-toggle" className="info__btn"></label>
            </div>
        </section>
    )
}