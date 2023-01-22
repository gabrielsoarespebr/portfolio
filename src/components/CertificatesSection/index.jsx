import React from "react";
import { userInfo } from "../../services/userInfo";
import style from "./style.module.css";

export const CertificatesSection = () => {
    return (
        <section className={`p-5 ${style.section}`}>
            <h3 className="text-white">Certificados</h3>
            <ul id="listCertificates" className="text-white list-group">
                <li className="list-group-item"></li>
                <li className="list-group-item"></li>
                <li className="list-group-item"></li>
            </ul>

        </section>
    )
}