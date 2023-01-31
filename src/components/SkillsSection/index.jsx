import React from "react";
import { userInfo } from "../../services/userInfo";
import style from "./style.module.css";

export const SkillsSection = () => {
    return (
        <section className={`d-flex py-1 px-5 ${style.section}`}>
            <div id="skills" className={`col-6 ${style.skills}`}>
                <h3 className="text-white">Tecnologias</h3>

                <h4 className="text-white">Tenho experiência</h4>
                <ul id="skillsExp" className="list-unstyled d-flex gap-4">
                </ul>

                <h4 className="text-white">Estou estudando</h4>
                <ul id="skillsLearn" className="list-unstyled d-flex gap-4">
                </ul>

                <h4 className="text-white">Tenho interesse</h4>
                <ul id="skillsInt" className="list-unstyled d-flex gap-4">
                </ul>
            </div>
            <form id="certificates" className="col-6 overflow-auto">
                <h3 className="text-white">Certificados</h3>
                <div className="input-group">
                    <input className="form-control" type="search" name="" id="" />
                    <div className="input-group-append"><button className="btn btn-outline-secondary" type="button"><i className="fa-solid fa-magnifying-glass"></i></button></div>
                </div>

                <ul id="searchTags" className={`${style.searchTags} list-unstyled d-flex justify-content-evenly flex-wrap my-1`}>
                    <li id="">Todos <span></span></li>
                    <li id="#tech">Tecnologia <span></span></li>
                    <li id="#prog">Programação <span></span></li>
                    <li id="#algo">Algoritmos <span></span></li>
                    <li id="#react">React <span></span></li>
                    <li id="#js">JavaScript <span></span></li>
                    <li id="#html">HTML <span></span></li>
                    <li id="#css">CSS <span></span></li>
                    <li id="#java">Java <span></span></li>
                    <li id="#ux">User Experience <span></span></li>
                    <li id="#cybersec">Cyber Segurança <span></span></li>
                    <li id="#eng">Inglês <span></span></li>
                    <li id="#edu">Educação <span></span></li>
                    <li id="#bus">Negócios <span></span></li>
                    <li id="#lead">Liderança <span></span></li>
                    <li id="#comm">Comunicação <span></span></li>
                    <li id="#pubspeak">Falar em público <span></span></li>
                    <li id="#persbrand">Marca pessoal <span></span></li>
                    <li id="#access">Acessibilidade <span></span></li>
                    <li id="#signlang">Língua de Sinais <span></span></li>
                    <li id="#jur">Direito <span></span></li>
                </ul>

                <ul id="certificatesList" className="text-white list-group">
                </ul>
            </form>


        </section>
    )
}