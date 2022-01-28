import React from "react";
import Card from "../../components/Card/Card";

function ProjectsPage() {
    return (
        <React.Fragment>
            <div className="d-flex flex-wrap flex-md-nowrap justify-content-center">
                <Card image={"peClipboardMobile.png"} />
                <Card image={"sonicOne copy.png"} />
            </div>
        </React.Fragment>
    );
}

export default ProjectsPage;
