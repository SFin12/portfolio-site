import { HashLink } from "react-router-hash-link";
import "./SideDrawerButton.scss";

export const SideDrawerButton = ({
    name,
    to,
    close,
    background = "black",
    textColor = "white",
}) => (
    <HashLink smooth to={`/#${to}`} onClick={close}>
        <button
            className="sideDrawer-button"
            style={{ background: background, color: textColor }}
        >
            {name}
        </button>
    </HashLink>
);
