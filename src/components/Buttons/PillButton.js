import { HashLink } from "react-router-hash-link";
import "./PillButton.scss";

export const PillButton = ({ name, to, close }) => (
    <HashLink smooth to={`/#${to}`} onClick={close}>
        <button className="pill-button">{name}</button>
    </HashLink>
);
