import axios from "axios";
import style from "../components/ProjectsSection/style.module.css"

window.addEventListener("load", function () {
    const url = "https://api.github.com/users/gabrielsoarespebr/repos";

    const listProjects = document.getElementById("listProjects");
    const galleryProject = document.getElementById("galleryProject");

    axios
        .get(url)
        .then(projRepoArray => {
            projRepoArray.data.filter(eachProj => {
                if (eachProj.topics.includes("portfolio")) {
                    let projName = eachProj.name ?? "Sem nome";
                    let projDescription = eachProj.description ?? "Sem descrição";
                    let projUrl = eachProj.html_url ?? "#";

                    listProjects.innerHTML += `
                    <div class="p-2 rounded ${style.folder}"><i class="fa-solid fa-folder-open"></i> ${projName.toUpperCase()}</div>
                    `;

                    galleryProject.innerHTML += `
                    <div>${projDescription}</div>
                    `
                }
            })
        })
        .catch(err => console.error(err));
})