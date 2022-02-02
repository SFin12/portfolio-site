import "./Card.scss";

function Card({ title, image, description, link }) {
    console.log("../../assets/" + image);
    return (
        // <a href={link} style={{ "text-decoration": "none" }}>
        <div
            className="card text-center mx-md-2 mx-xl-5 my-5 custom-cards"
            id="why-us"
        >
            <div className="card-header rnd-top-corners">{title}</div>
            <a href={link}>
                <img
                    src={require("../../assets/" + image)}
                    className="card-img-top"
                    alt="Epoxy Garage"
                />
            </a>
            <div className="card-body bg-dark text-white">
                <p className="card-text mb-1">{description}</p>
            </div>
        </div>
        // </a>
    );
}

export default Card;
