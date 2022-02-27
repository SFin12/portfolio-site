import { HashLink } from "react-router-hash-link";
import "./LinkButton.scss";

export const LinkButton = ({ name, to, close }) => (
    <HashLink smooth to={`/#${to}`} onClick={close}>
        <button className="link-button">{name}</button>
    </HashLink>
);
