import './LearnMoreBtn.scss';

export default function LearnMoreBtn({url, primary}) {

    return (
        <a href={url} className={`learn-more${primary ? '_primary' : ''}`}>Learn more</a>
    )
}