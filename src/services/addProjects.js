import axios from "axios";
import style from "../components/ProjectsSection/style.module.css"

function updateGallery(id) {
    // galleryProject.innerHTML += chosenRepos.filter(e => e.id === id);
    console.log("arroz");
}
const chosenRepos = [];

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
                    let projId = eachProj.id ?? "Sem ID";
                    let projDescription = eachProj.description ?? "Sem descrição";
                    let projGitUrl = eachProj.html_url ?? "#";
                    let projSiteUrl = eachProj.homepage ?? "Em breve";

                    let separatorIndex = projDescription.search("{");
                    let projImgsObj = JSON.parse(projDescription.substring(separatorIndex, projDescription.length));

                    projDescription = projDescription.substring(0, (separatorIndex - 1));

                    const repoObj = {
                        name: projName,
                        id: projId,
                        description: projDescription,
                        url: {
                            git: projGitUrl,
                            site: projSiteUrl
                        },
                        imgs: projImgsObj
                    }

                    chosenRepos.push(repoObj);

                    listProjects.innerHTML += `
                    <div id="${projId}" onclick="updateGallery(${projId})" title="${projName.toUpperCase()}" class="d-flex p-2 rounded ${style.projIcon}">

                    <img class="align-self-center" src="${projImgsObj.icon}" alt="${projName}"/>
                    
                    </div>
                    `;

                }
            })
        })
        .catch(err => console.error(err));
});

