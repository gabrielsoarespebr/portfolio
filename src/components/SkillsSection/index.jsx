import React from "react";
import { userInfo } from "../../services/userInfo";
import style from "./style.module.css";

export const SkillsSection = () => {
    return (
        <section className={`d-flex py-1 px-5 ${style.section}`}>
            <div id="skills" className={`col-6 ${style.skills}`}>
                <h3 className="text-white">Tecnologias</h3>

                <h4 className="text-white">Tenho experiência</h4>
                <ul id="skillsExp" className="list-unstyled d-flex gap-2">
                </ul>

                <h4 className="text-white">Estou estudando</h4>
                <ul id="skillsLearn" className="list-unstyled d-flex gap-2">
                </ul>

                <h4 className="text-white">Tenho interesse</h4>
                <ul id="skillsInt" className="list-unstyled d-flex gap-2">
                </ul>
            </div>
            <form id="certificates" className="col-6">
                <h3 className="text-white">Certificados</h3>
                <div className="input-group">

                    <input className="form-control" type="search" name="" id="" />
                    <div className="input-group-append"><button className="btn btn-outline-secondary" type="button"><i className="fa-solid fa-magnifying-glass"></i></button></div>
                </div>
                <ul>
                </ul>
            </form>


        </section>
    )
}