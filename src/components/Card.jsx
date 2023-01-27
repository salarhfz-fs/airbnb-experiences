function Card(props) {
    return (
        <div className="card">
            <section className="card__img" style={{ backgroundImage: `url(${props.img})` }}>
                <span className="card__img__status">
                    {props.openSpots > 0 ? 'ONLINE' : 'SOLD OUT'}
                </span>
            </section>
            <section className="card__details">
                <img className="card__details__rating-star" alt="rating star" src="/star.png" />
                <span className="card__details__rating">{props.stats.rating}</span>
                <span className="card__details__review-count">({props.stats.reviewCount})</span>
                <span>.</span>
                <span className="card__details__location">{props.location}</span>
            </section>
            <p className="card__title">{props.title}</p>
            <p className="card__pricing">
                <strong>From ${props.price}</strong> / person
            </p>
        </div>
    )
}

export default Card
