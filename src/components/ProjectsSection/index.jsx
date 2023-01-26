import React from "react";
import { userInfo } from "../../services/userInfo";
import style from "./style.module.css";

export const ProjectsSection = () => {
    return (
        <section className={`py-1 px-5 ${style.section}`}>
            <h3 className="text-white">Projetos</h3>
            <div className="text-white d-flex">
                <div id="listProjects" className="overflow-auto d-flex flex-column gap-2 col-3">
                </div>
                <div id="galleryProject" className="container-fluid"></div>
            </div>

        </section>
    )
}