const loginLink = "https://www.instagram.com/";
const puppeteer = require("puppeteer");

console.log("Before");

let username = "akashkarn45";
let password = "akash1999";

(async function () {
  let browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });
  let allpages = await browser.pages();
  let tab = allpages[0];

  await tab.goto(loginLink);
  await tab.waitForSelector("input[name='password']", { visible: true });
  await tab.type("input[name='username']", username, "name", {
    delay: 300,
  });
  await tab.type("input[name='password']", password, { delay: 300 });
  await tab.click(".sqdOP.L3NKy.y3zKF");
  await tab.waitForTimeout(3000);
  await tab.waitForSelector(".XTCLo.d_djL.DljaH", {
    visible: true,
  });
  await tab.type(".XTCLo.d_djL.DljaH", "marvel", {
    delay: 50,
  });
  await tab.goto("https://www.instagram.com/marvel/", { delay: 500 });
  await tab.evaluate(() => {
    window.scrollTo({ top: 1000, behavior: "smooth" });
  });
  await tab.waitForTimeout(3000);
  await tab.evaluate(() => {
    window.scrollTo({ top: 2000, behavior: "smooth" });
  });
  await tab.waitForTimeout(3000);
  await tab.evaluate(() => {
    window.scrollTo({ top: 3000, behavior: "smooth" });
  });
  await tab.waitForTimeout(3000);
  await tab.evaluate(() => {
    window.scrollTo({ top: 3000, behavior: "smooth" });
  });
  await tab.waitForTimeout(3000);
  await tab.evaluate(() => {
    window.scrollTo(1000, 0);
  });
  await tab.waitForTimeout(3000);

  let a = await tab.$$(".CzVzU");
  console.log(a.length);

 // await tab.click("._5f5mN.jIbKX._6VtSN.yZn4P ._7UhW9.xLCgt.qyrsm.uL8Hv.T0kll" ,{ delay: 1000 } ) //for follow
  await tab.click(".CzVzU", { delay: 1000 });

  for (let i = 0; i < a.length / 4; i++) {
    await wait(tab);
    await savePost(tab);
    await wait(tab);
    await Comment(tab);
  }
  await tab.click("[aria-label='Close']", { delay: 1000 });
  await console.log("over the program");
})();

let wait = async (tab) => {
  await tab.waitForTimeout(3000);
};
let savePost = async (tab) => {
  await tab.click('.QBdPU.rrUvL [aria-label="Save"]', {
    delay: 500,
  });
};

let Comment = async function (tab) {
  await tab.waitForSelector("[aria-label = 'Add a comment…']", {
    visible: true,
  });
  await tab.type("[aria-label = 'Add a comment…']", "This is awesome", {
    delay: 50,
  });
  await tab
    .click("._7UhW9.xLCgt.qyrsm.gtFbE.uL8Hv.T0kll", {
      delay: 50,
    })
    .then(function () {
      return tab.click("[aria-label='Next']", { delay: 500 });
    });
};
