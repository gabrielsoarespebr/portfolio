import { userInfo } from "./userInfo.js";

window.addEventListener("load", function () {

    const expSkillsElement = document.getElementById("skillsExp");

    userInfo.url.skillsImages.hardSkills.experience.forEach(skill => {
        expSkillsElement.innerHTML += `<li class="col-2"><img title="${skill[0]}" src="${skill[1]}" alt="${skill[0]}"><p class="text-white my-0">${skill[0]}</p></li>`;
    });

    const learnSkillsElement = document.getElementById("skillsLearn");

    userInfo.url.skillsImages.hardSkills.learning.forEach(skill => {
        learnSkillsElement.innerHTML += `<li class="col-2"><img title="${skill[0]}" src="${skill[1]}" alt="${skill[0]}"><p class="text-white my-0">${skill[0]}</p></li>`;
    });

    const intSkillsElement = document.getElementById("skillsInt");

    userInfo.url.skillsImages.hardSkills.interest.forEach(skill => {
        intSkillsElement.innerHTML += `<li class="col-2"><img title="${skill[0]}" src="${skill[1]}" alt="${skill[0]}"><p class="text-white my-0">${skill[0]}</p></li>`;
    });

})

