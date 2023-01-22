import React from "react";
import { userInfo } from "../../services/userInfo";
import style from "./style.module.css";

export const OccupationSection = () => {
    return (
        <section className={`d-flex justify-content-around align-items-center p-5 ${style.section}`}>
            <img className={`rounded-4 col-4 ${style.image}`} src={userInfo.url.otherImages[0][1]} alt={userInfo.url.otherImages[0][0]} />
            <div className="text-white col-7 ps-2">
                <h3>O que faz um {userInfo.occupation.name}?</h3>
                <p className="fs-5">{userInfo.occupation.description}</p>
            </div>

        </section>
    )
}