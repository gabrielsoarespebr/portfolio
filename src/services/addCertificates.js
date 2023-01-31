import { userInfo } from "./userInfo.js";
import style from "../components/SkillsSection/style.module.css"

window.addEventListener("load", function () {
    // Add tag's amount
    const searchTags = document.querySelectorAll("#searchTags>li");

    searchTags.forEach(tag => {
        const amount = userInfo.certificates.reduce((acc, cur) => {
            if (cur.tags.includes(tag.id)) {
                acc++;
            }
            return acc;
        }, 0);
        tag.innerHTML += ` (${amount})`;
    })

    // Add certificate's list when the page load
    const certificatesList = document.getElementById("certificatesList");

    userInfo.certificates.forEach(certificate => {
        certificatesList.innerHTML += `<li class="list-group-item ${certificate.tags}">${certificate.title}<p class="${style.orgName}">${certificate.org}</p></li>`
    })

    // Add tag button's event and style on click
    const searchTagBtns = document.querySelectorAll("#searchTags>li");

    searchTagBtns.forEach(tagBtn => {
        tagBtn.addEventListener("click", selectedTagBtn => {

            searchTagBtns.forEach(e => {
                e.setAttribute("style", "background-color: white");
            })

            selectedTagBtn.target.style.backgroundColor = "gray";
            selectedTagBtn.target.style.color = "white";

            certificatesList.innerHTML = "";

            const selectedCertificates = userInfo.certificates.filter(certificate => certificate.tags.includes(selectedTagBtn.target.id));

            selectedCertificates.forEach(certificate => {
                certificatesList.innerHTML += `<li class="list-group-item ${certificate.tags}">${certificate.title}<p class="${style.orgName}">${certificate.org}</p></li>`
            });


        })
    })

    // const searchTagBtns = document.querySelectorAll("#searchTags>li");
    // const certificates = document.querySelectorAll("#certificatesList>li");

    // searchTagBtns.forEach(button => {
    //     button.addEventListener("click", selected => {
    //         certificates.forEach(certificate => {
    //             certificate.classList.toggle("d-none");
    //             button.classList.toggle("bg-secondary");
    //             button.classList.toggle("text-white");

    //             if (certificate.className.includes(selected.target.id)) {
    //                 certificate.classList.toggle("d-none");
    //             }
    //         })
    //     })
    // })

})

