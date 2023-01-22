import puppeteer from 'puppeteer';

export let data = [];

(async () => {
  // const browser = await puppeteer.launch({ headless: false });
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({ width: 1280, height: 800 });
  await page.goto('https://br.linkedin.com/in/gabrielsoarespebr/', {
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


  data = [...certificatesArray];

  await browser.close();
})()
  .then(function () { console.log(data) })