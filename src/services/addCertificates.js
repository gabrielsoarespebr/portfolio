import { data } from "./puppeteer.js";

console.log(data);

const listCertificates = document.getElementById("listCertificates");
data.map(e => {
    listCertificates.innerHTML += `<li>${e.title}</li>`
})