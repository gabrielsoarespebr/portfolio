// import puppeteer from 'puppeteer';
import puppeteer from 'puppeteer-web';

const allOriginsCORS = "https://api.allorigins.win/get?url=";
const target = "https://br.linkedin.com/in/gabrielsoarespebr/";


export const data = (async () => {
  // const browser = await puppeteer.launch({ headless: false });
  const browserBase = await puppeteer.launch();

  const browser = await puppeteer.connect({
    browserWSEndpoint: browserBase.wsEndpoint(),
    ignoreHTTPSErrors: true
  });

  const page = await browser.newPage();

  // await page.setViewport({ width: 1280, height: 800 });
  await page.goto(`${allOriginsCORS}${target}`, {
    waitUntil: "domcontentloaded",
  });

  await page.waitForSelector('.profile-section-card');

  let selector = '.certifications__list .profile-section-card';
  const certificatesArray = await page.evaluate(selector => {
    return [...document.querySelectorAll(selector)].map(item => {
      const titleHTMLCollection = item.getElementsByTagName("h3");
      const titleArray = Array.from(titleHTMLCollection);

      const orgHTMLCollection = item.getElementsByTagName("h4");
      const orgArray = Array.from(orgHTMLCollection);

      const certicateObj = {
        title: titleArray[0].innerText,
        org: orgArray[0].innerText
      }

      return `${certicateObj.title}`;
    });
  }, selector);

  await browser.close();
  return await certificatesArray;
})();

setInterval((e=>console.log(data)),1000);
