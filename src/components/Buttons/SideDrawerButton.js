import { HashLink } from "react-router-hash-link";
import "./SideDrawerButton.scss";

export const SideDrawerButton = ({
    name,
    to,
    close,
    textColor = "white",
}) =>  (
    <HashLink smooth to={`/#${to}`} onClick={close}>
        <button
            className={`sideDrawer-button ${to === 'home' ? 'home-button' : null}`}
            style={{ color: textColor }}
        >
            {name}
        </button>
    </HashLink>
);
