import React from "react";
import { userInfo } from "../../services/userInfo";
import style from "./style.module.css";

export const Header = () => {
    return (
        <header className={`d-flex justify-content-between position-sticky ${style.header}`}>
            <div className={`align-self-center ${style.containerTxtBtn}`}>

                <h1 className="text-white display-3">{userInfo.fullName.split(" ")[0]} {userInfo.fullName.split(" ")[1]}</h1>

                <h2 className={`text-white display-5 ${style.subtitle}`}>{userInfo.occupation.name}<span id="underscore" className="visible">_</span></h2>

                <div className="list-group list-group-horizontal gap-4">
                    <a href={userInfo.url.github} target="_blank"><i data-title="Acesse meu GitHub!" className={`text-white fa-brands fa-square-github fa-3x ${style.icon}`}></i></a>

                    <a href={userInfo.url.linkedin} target="_blank"><i data-title="Acesse meu LinkedIn!" className={`text-white fa-brands fa-linkedin fa-3x ${style.icon}`}></i></a>

                    <a href={userInfo.url.resume} target="_blank"><i data-title="Baixe meu currículo!" id="resumeDownload" className={`text-white fa-solid fa-file-arrow-down fa-3x ${style.icon}`}></i></a>

                </div>
            </div>
            <div className="">

                <img className={`img-fluid ${style.photo}`} src={userInfo.url.photo} alt="User photo" />
            </div>
        </header>
    )
}