import { HashLink } from "react-router-hash-link";
import "./LinkButton.scss";

export const LinkButton = (props) => (
    <button className="link-button">
        <HashLink to="/#skills">{props.name}</HashLink>
    </button>
);
