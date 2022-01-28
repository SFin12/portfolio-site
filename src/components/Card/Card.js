import "./Card.scss";

function Card({ image }) {
    console.log("../../assets/" + image);
    return (
        <div
            className="card text-center mx-md-2 mx-xl-5 my-5 custom-cards"
            id="why-us"
        >
            <div className="card-header text-white rnd-top-corners">
                <h2>Why choose us?</h2>
            </div>
            <img
                src={require("../../assets/" + image)}
                className="card-img-top"
                alt="Epoxy Garage"
            />

            <div className="card-body bg-dark text-white">
                <p className="card-text mb-1">
                    At Armored Coatings, we pride ourselves on offering the best
                    service in the Idaho area. Here are some factors that set us
                    apart from similar epoxy companies:
                </p>
                <ul className="text-left list-group list-group-flush">
                    <li className="list-group-item bg-dark text-white">
                        <i className="fas fa-check"></i>
                        <span>We don't use cheap epoxy that won't last.</span>
                    </li>
                    <li className="list-group-item bg-dark text-white">
                        <i className="fas fa-check"></i>We have over 18 years of
                        experience in surface prep.
                    </li>
                    <li className="list-group-item bg-dark text-white">
                        <i className="fas fa-check"></i>We take pride in our
                        work and our work ethic.
                    </li>
                    <li className="list-group-item bg-dark text-white">
                        <i className="fas fa-check"></i>No games, we're
                        transparent with all costs.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Card;
