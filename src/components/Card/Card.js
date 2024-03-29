import "./Card.scss";

function Card({ title, image, description, link }) {
    return (
        
        <div
            className="card text-center mx-md-2 mx-xl-5 my-3 custom-cards"
            id="why-us"
        >
            <div className="card-header rnd-top-corners">{title}</div>
            <a href={link}>
                {/* Get image and info from .json projects.json file */}
                <img
                    src={require("../../assets/" + image)}
                    className="card-img-top"
                    alt="Epoxy Garage"
                />
            </a>
            <div className="card-body text-white">
                <p className="card-text mb-1">{description}</p>
            </div>
        </div>
        // </a>
    );
}

export default Card;
