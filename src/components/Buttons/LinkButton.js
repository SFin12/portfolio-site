import { HashLink } from "react-router-hash-link";
import "./LinkButton.scss";

export const LinkButton = ({ name, to }) => (
    <HashLink smooth to={`/#${to}`}>
        <button className="link-button">{name}</button>
    </HashLink>
);
