import { userInfo } from "./userInfo.js";

window.addEventListener("load", function () {

    const expSkillsElement = document.querySelector("#skillsExp");

    userInfo.url.skillsImages.hardSkills.experience.forEach(skill => {
        expSkillsElement.innerHTML += `<li class="col-2 align-self-center"><img title="${skill[0]}" src="${skill[1]}" alt="${skill[0]}"></li>`;
    });

    const learnSkillsElement = document.querySelector("#skillsLearn");

    userInfo.url.skillsImages.hardSkills.learning.forEach(skill => {
        learnSkillsElement.innerHTML += `<li class="col-2 align-self-center"><img title="${skill[0]}" src="${skill[1]}" alt="${skill[0]}"></li>`;
    });

    const intSkillsElement = document.querySelector("#skillsInt");

    userInfo.url.skillsImages.hardSkills.interest.forEach(skill => {
        intSkillsElement.innerHTML += `<li class="col-2 align-self-center"><img title="${skill[0]}" src="${skill[1]}" alt="${skill[0]}"></li>`;
    });

})

