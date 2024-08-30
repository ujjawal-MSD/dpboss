const puppeteer = require('puppeteer');

// var a = 'DPBOSS dpboss dp boss DP Boss dpbossss.services';
// a = a.replace(/DPBOSS|dpboss|dp|boss|DP|Boss|dpbossss\.services|DP\sBOSS|DPBOSS\.Services/gi, 'WOLF247 ');
// console.log(a);


// var b = 'https://dpbossss.services/guessing-forum.php https://dpbossss.services/All-22-Card-Panna-Penal-Patti-Chart.php  https://dpbossss.services/penal-count-chart.php'
// b = b.replaceAll('https://dpbossss.services', 'http://localhost:5173')
// console.log(b);



// const groupOneFields = ['Home', 'MilanMorning', 'Sridevi', 'KalyanMorning', 'Padmavati',
//     'Madhuri', 'SrideviMorning', 'Maharani', 'Prabhat', 'KarnatakDay', 'TimeBazarMorning',
//     'TimeBazar', 'Diamond', 'TaraMumbaiDay', 'MainKalyan', 'TimeBazarDay', 'MilanDay',
//     'MainBazarDay', 'PunaBazar', 'Kalyan', 'SrideviNight', 'DiamondNight', 'MadhuriNight',
//     'NightTimeBazar', 'TaraMumbaiNight', 'MainBazarNight', 'MilanNight', 'RajdhaniNight',
//     'MainBazar', 'MaharaniDay', 'SrideviDay', 'Dhanashree', 'KalyanNight', 'KalyanPro',
//     'Gujarat', 'OldMainMumbai', 'RajLaxmi', 'MadhurMorning', 'MadhurDay', 'MadhurNight',
//     'RatanKhatri', 'MaharaniNight', 'PadmavatiNight', 'JayShreeDay', 'SriDhanalaxmi', 'DhanshreeDay',
//     'MainBombay', 'SundayBazar', 'SundayBazarNight', 'SuperGoaDay', 'PunaNightMain', 'Khajana',
//     'SrideviMain', 'SrideviMainNight', 'SupremeMorning', 'SupremeDay', 'SupremeNight',
//     'GujratNight', 'DhanaShreeNight'];

// const groupTwoFields = ['BSFBazar', 'SitaMorning', 'KalyanGoldNight', 'BombayDay',
//     'Srilakshmi', 'MilanBazar', 'RatanDay', 'Chandan', 'Maharashtra', 'Worli', 'WorliMumbaiDay',
//     'MainMumbaiRK', 'WorliMumbai', 'SitaDay', 'SatyamMumbai', 'CountryBazar', 'RoseBazarDay',
//     'RoseBazarNight', 'JantaMorning', 'CentralBombay', 'TeenPatti', 'SuperTime', 'Bhagyalaxmi',
//     'kaali', 'MainMumbaiNight', 'SuperMatka', 'MaharajTime', 'MaharajDay', 'MaharajNight',
//     'BazarDay', 'BazarNight', 'RajdhaniDay', 'PunaNight', 'TimeNight', 'Mohini', 'MumbaiStar',
//     'kalyanBazar', 'MainBazarMumbai', 'Mahadevi', 'SatyamMumbaiEvening', 'KalyanGold', 'SitaNight',
//     'KamalMorning', 'KamalDay', 'KamalNight', 'RajdhaniSunday', 'AndhraMorning', 'AndhraDay', 'AndhraNight',
//     'BombayRajshreeDay', 'BombayRajshreeNight', 'MilanBazarMorning', 'MilanBazarDay', 'MilanBazarNight',
//     'MahadeviMorning', 'MahadeviNight', 'RajyogDay', 'RajyogNight', 'Gowa', 'RoyalDay', 'MumbaiStarMain'];


// const groupThreeFields = ['JodiHome', 'JodiMilanMorning', 'JodiSridevi', 'JodiKalyanMorning', 'JodiPadmavati',
//     'JodiMadhuri', 'JodiSrideviMorning', 'JodiMaharani', 'JodiPrabhat', 'JodiKarnatakDay', 'JodiTimeBazarMorning', 'JodiTimeBazar',
//     'JodiDiamond', 'JodiTaraMumbaiDay', 'JodiMainKalyan', 'JodiTimeBazarDay', 'JodiMilanDay', 'JodiMainBazarDay',
//     'JodiPunaBazar', 'JodiKalyan', 'JodiSrideviNight', 'JodiDiamondNight', 'JodiMadhuriNight', 'JodiNightTimeBazar',
//     'JodiTaraMumbaiNight', 'JodiMainBazarNight', 'JodiMilanNight', 'JodiRajdhaniNight', 'JodiMainBazar', 'JodiMaharaniDay',
//     'JodiSrideviDay', 'JodiDhanashree', 'JodiKalyanNight', 'JodiKalyanPro', 'JodiGujarat', 'JodiOldMainMumbai',
//     'JodiRajLaxmi', 'JodiMadhurMorning', 'JodiMadhurDay', 'JodiMadhurNight', 'JodiRatanKhatri', 'JodiMaharaniNight',
//     'JodiPadmavatiNight', 'JodiJayShreeDay', 'JodiSriDhanalaxmi', 'JodiDhanshreeDay', 'JodiMainBombay', 'JodiSundayBazar',
//     'JodiSundayBazarNight', 'JodiSuperGoaDay', 'JodiPunaNightMain', 'JodiKhajana', 'JodiSrideviMain', 'JodiSrideviMainNight',
//     'JodiSupremeMorning', 'JodiSupremeDay', 'JodiSupremeNight', 'JodiGujratNight', 'JodiDhanaShreeNight'
// ]


// const groupFourFields = ['JodiBSFBazar', 'JodiSitaMorning', 'JodiKalyanGoldNight', 'JodiBombayDay',
//     'JodiSrilakshmi', 'JodiMilanBazar', 'JodiRatanDay', 'JodiChandan', 'JodiMaharashtra', 'JodiWorli',
//     'JodiWorliMumbaiDay', 'JodiMainMumbaiRK', 'JodiWorliMumbai', 'JodiSitaDay', 'JodiSatyamMumbai',
//     'JodiCountryBazar', 'JodiRoseBazarDay', 'JodiRoseBazarNight', 'JodiJantaMorning', 'JodiCentralBombay',
//     'JodiTeenPatti', 'JodiSuperTime', 'JodiBhagyalaxmi', 'Jodikaali', 'JodiMainMumbaiNight', 'JodiSuperMatka',
//     'JodiMaharajTime', 'JodiMaharajDay', 'JodiMaharajNight', 'JodiBazarDay', 'JodiBazarNight', 'JodiRajdhaniDay',
//     'JodiPunaNight', 'JodiTimeNight', 'JodiMohini', 'JodiMumbaiStar', 'JodikalyanBazar', 'JodiMainBazarMumbai',
//     'JodiMahadevi', 'JodiSatyamMumbaiEvening', 'JodiKalyanGold', 'JodiSitaNight', 'JodiKamalMorning', 'JodiKamalDay',
//     'JodiKamalNight', 'JodiRajdhaniSunday', 'JodiAndhraMorning', 'JodiAndhraDay', 'JodiAndhraNight', 'JodiBombayRajshreeDay',
//     'JodiBombayRajshreeNight', 'JodiMilanBazarMorning', 'JodiMilanBazarDay', 'JodiMilanBazarNight', 'JodiMahadeviMorning',
//     'JodiMahadeviNight', 'JodiRajyogDay', 'JodiRajyogNight', 'JodiGowa', 'JodiRoyalDay', 'JodiMumbaiStarMain'
// ]



// // Update groupOneFields
// const updatedGroupOneFields = groupOneFields.map(field => `Jodi${field}`);

// // Update groupTwoFields
// const updatedGroupTwoFields = groupTwoFields.map(field => `Jodi${field}`);

// console.log(updatedGroupOneFields);
// console.log(updatedGroupTwoFields);







// "/jodi-chart-record/milan-morning.php",
// "/jodi-chart-record/sridevi.php",
// "/jodi-chart-record/kalyan-morning.php",
// "/jodi-chart-record/padmavati.php",
// "/jodi-chart-record/madhuri.php",
// "/jodi-chart-record/sridevi-morning.php",
// "/jodi-chart-record/maharani.php",
// "/jodi-chart-record/prabhat.php",
// "/jodi-chart-record/karnataka-day.php",
// "/jodi-chart-record/time-bazar-morning.php",
// "/jodi-chart-record/time-bazar.php",
// "/jodi-chart-record/diamond.php",
// "/jodi-chart-record/tara-mumbai-day.php",
// "/jodi-chart-record/main-kalyan.php",
// "/jodi-chart-record/time-bazar-day.php",
// "/jodi-chart-record/milan-day.php",
// "/jodi-chart-record/main-bazar-day.php",
// "/jodi-chart-record/puna-bazar.php",
// "/jodi-chart-record/kalyan.php",
// "/jodi-chart-record/sridevi-night.php",
// "/jodi-chart-record/diamond-night.php",
// "/jodi-chart-record/madhuri-night.php",
// "/jodi-chart-record/night-time-bazar.php",
// "/jodi-chart-record/tara-mumbai-night.php",
// "/jodi-chart-record/main-bazar-night.php",
// "/jodi-chart-record/milan-night.php",
// "/jodi-chart-record/rajdhani-night.php",
// "/jodi-chart-record/main-bazar.php",
// "/jodi-chart-record/maharani-day.php",
// "/jodi-chart-record/sridevi-day.php",
// "/jodi-chart-record/dhanshree.php",
// "/jodi-chart-record/kalyan-night.php",
// "/jodi-chart-record/kalyan-pro.php",
// "/jodi-chart-record/gujrat.php",
// "/jodi-chart-record/old-main-mumbai.php",
// "/jodi-chart-record/rajlaxmi.php",
// "/jodi-chart-record/madhur-morning.php",
// "/jodi-chart-record/madhur-day.php",
// "/jodi-chart-record/madhur-night.php",
// "/jodi-chart-record/ratan-khatri.php",
// "/jodi-chart-record/maharani-night.php",
// "/jodi-chart-record/padmavati-night.php",
// "/jodi-chart-record/jay-shree-day.php",
// "/jodi-chart-record/sri-dhanalaxmi.php",
// "/jodi-chart-record/dhanshree-day.php",
// "/jodi-chart-record/main-bombay.php",
// "/jodi-chart-record/sunday-bazar.php",
// "/jodi-chart-record/sunday-bazar-night.php",
// "/jodi-chart-record/super-goa-day.php",
// "/jodi-chart-record/puna-night-main.php",
// "/jodi-chart-record/khajana.php",
// "/jodi-chart-record/sridevi-main.php",
// "/jodi-chart-record/sridevi-main-night.php",
// "/jodi-chart-record/supreme-morning.php",
// "/jodi-chart-record/supreme-day.php",
// "/jodi-chart-record/supreme-night.php",
// "/jodi-chart-record/gujrat-night.php",
// "/jodi-chart-record/dhanshree-night.php",
// "/jodi-chart-record/bsf-bazar.php",
// "/jodi-chart-record/sita-morning.php",
// "/jodi-chart-record/kalyan-gold-night.php",
// "/jodi-chart-record/bombay-day.php",
// "/jodi-chart-record/srilakshmi.php",
// "/jodi-chart-record/milan-bazar.php",
// "/jodi-chart-record/ratan-day.php",
// "/jodi-chart-record/chandan.php",
// "/jodi-chart-record/maharashtra.php",
// "/jodi-chart-record/worli.php",
// "/jodi-chart-record/worli-mumbai-day.php",
// "/jodi-chart-record/main-mumbai-rk.php",
// "/jodi-chart-record/worli-mumbai.php",
// "/jodi-chart-record/sita-day.php",
// "/jodi-chart-record/satyam-mumbai.php",
// "jodi-chart-record/country-bazar.php",
// "/jodi-chart-record/rose-bazar-day.php",
// "/jodi-chart-record/rose-bazar-night.php",
// "/jodi-chart-record/janta-morning.php",
// "/jodi-chart-record/central-bombay.php",
// "/jodi-chart-record/teen-patti.php",
// "/jodi-chart-record/super-time.php",
// "/jodi-chart-record/bhagyalaxmi.php",
// "/jodi-chart-record/kaali.php",
// "/jodi-chart-record/main-mumbai-night.php",
// "/jodi-chart-record/super-matka.php",
// "/jodi-chart-record/maharaj-time.php",
// "/jodi-chart-record/maharaj-day.php",
// "/jodi-chart-record/maharaj-night.php",
// "/jodi-chart-record/bazar-day.php",
// "/jodi-chart-record/bazar-night.php",
// "/jodi-chart-record/rajdhani-day.php",
// "/jodi-chart-record/puna-night.php",
// "/jodi-chart-record/time-night.php",
// "/jodi-chart-record/mohini.php",
// "/jodi-chart-record/mumbai-star.php",
// "/jodi-chart-record/kalyan-bazar.php",
// "/jodi-chart-record/main-bazar-morning.php",
// "/jodi-chart-record/mahadevi.php",
// "/jodi-chart-record/satyam-mumbai-evening.php",
// "/jodi-chart-record/kalyan-gold.php",
// "/jodi-chart-record/sita-night.php",
// "/jodi-chart-record/kamal-morning.php",
// "/jodi-chart-record/kamal-day.php",
// "/jodi-chart-record/kamal-night.php",
// "/jodi-chart-record/rajdhani-sunday.php",
// "/jodi-chart-record/andhra-morning.php",
// "/jodi-chart-record/andhra-day.php",
// "/jodi-chart-record/andhra-night.php",
// "/jodi-chart-record/bombay-rajshree-day.php",
// "/jodi-chart-record/bombay-rajshree-night.php",
// "/jodi-chart-record/bombay-rajshree-morning.php",
// "/jodi-chart-record/milan-bazar-day.php",
// "/jodi-chart-record/milan-bazar-night.php",
// "/jodi-chart-record/mahadevi-morning.php",
// "/jodi-chart-record/mahadevi-night.php",
// "/jodi-chart-record/rajyog-day.php",
// "/jodi-chart-record/rajyog-night.php",
// "/jodi-chart-record/gowa.php",
// "/jodi-chart-record/royal-day.php",
// "/jodi-chart-record/mumbai-star-main.php"









// const puppeteer = require('puppeteer');

// const fxurl = "/panel-chart-record/";
// const fxurl2 = "/jodi-chart-record/";
// let urls = ["/jodi-chart-record/milan-morning.php", "/jodi-chart-record/sridevi.php", "/jodi-chart-record/kalyan-morning.php", "/jodi-chart-record/padmavati.php"];
// let urls1 = ["milan-morning.php", "sridevi.php", "kalyan-morning.php", "padmavati.php"];
// let urlNew = [
//   '/jodi-chart-record/mahadevi-night.php',
//   '/jodi-chart-record/mahadevi-night.php',
//   '/jodi-chart-record/mahadevi-night.php',
//   '/jodi-chart-record/mahadevi-night.php',
//   '/jodi-chart-record/mahadevi-night.php',
//   '/jodi-chart-record/mahadevi-night.php',
//   '/jodi-chart-record/mahadevi-night.php',
//   '/jodi-chart-record/mahadevi-night.php',
//   '/jodi-chart-record/mahadevi-night.php',
//   '/jodi-chart-record/mahadevi-night.php',
//   '/jodi-chart-record/mahadevi-night.php',
//   '/jodi-chart-record/mahadevi-night.php',
//   '/jodi-chart-record/mahadevi-night.php',
//   '/jodi-chart-record/mahadevi-night.php',
//   '/jodi-chart-record/mahadevi-night.php',
//   '/jodi-chart-record/mahadevi-night.php',
//   '/jodi-chart-record/mahadevi-night.php',
// ]
// getHtmlTags(false, '/jodi-chart-record/mahadevi-night.php')

// async function getHtmlTags() {
//     try {
//         const browser = await puppeteer.launch(headerless = false);
//         const page = await browser.newPage();
//         await page.goto('https://dpbossss.services', { waitUntil: 'networkidle0' });

//         const selector = 'html';
//         const htmlContent = await page.$eval(selector, element => element.outerHTML);
//         const modifiedHtmlContent = htmlContent
//             .replaceAll(/DPBOSS|dpboss|dp|boss|DP|Boss|dpbossss.services|DP\sBOSS|DpBossss\.services|DPBOSS\.Services/gi, 'WOLF247')
//             .replaceAll('https://dpbossss.services/', 'http://localhost:5173/');

//         await browser.close();

//         return modifiedHtmlContent;
//     } catch (error) {
//         console.error('An error occurred:', error);
//         throw error;
//     }
// }

// getHtmlTags();


// async function getPanelsHtmlTags() {
//     try {
//         const browser = await puppeteer.launch(headerless = false);
//         const page = await browser.newPage();

//         for (let i of urls) {
//         await page.goto(`https://dpbossss.services${i}`, { waitUntil: 'networkidle0' })
//         .then(response => {
//             console.log('Response:', response.data);
//             console.log('htmlData:', response.data);
//         })
//         .catch(error => {
//             console.error(error);
//         });

//         const selector = 'html';
//         const htmlContent = await page.$eval(selector, element => element.outerHTML)
//         .then(response => {
//             console.log('Response:', response.data);
//             console.log('htmlData:', response.data);
//         })
//         .catch(error => {
//             console.error(error);
//         });
//         const modifiedHtmlContent = htmlContent
//             .replaceAll(/DPBOSS|dpboss|dp|boss|DP|Boss|dpbossss.services|DP\sBOSS|DpBossss\.services|DPBOSS\.Services/gi, 'WOLF247')
//             .replaceAll('https://dpbossss.services/', 'http://localhost:5173/');


//             return modifiedHtmlContent;
//         }
//         await browser.close();

//     } catch (error) {
//         console.error('An error occurred:', error);
//         throw error;
//     }
// }

// getPanelsHtmlTags();
// module.exports = getHtmlTags;







// let urls = ["/jodi-chart-record/milan-morning.php", "/jodi-chart-record/sridevi.php", "/jodi-chart-record/kalyan-morning.php", "/jodi-chart-record/padmavati.php"];
// var modifiedHtmlContent = [];

// async function getHtmlTags(page, i = 0) {
//   try {
//     if (i < urls.length) {
//       await page.goto(`https://dpbossss.services${urls[i]}`, { waitUntil: 'networkidle0' });

//       const selector = 'html';
//       const htmlContent = await page.$eval(selector, element => element.outerHTML);
//       modifiedHtmlContent[i] = htmlContent
//         .replaceAll(/dpbossss.services|DPBOSS\.Services|DPBOSS|dpboss|dp|boss|DP|Boss|DP\sBOSS|DpBossss\.services/gi, 'WOLF247')
//         .replaceAll('https://dpbossss.services/', 'http://localhost:5173/');

//       console.log(modifiedHtmlContent[i]);

//       // Use setTimeout to control the speed
//       setTimeout(() => getHtmlTags(page, i + 1), 2000); // Wait for 2 seconds before moving to the next URL
//     } else {
//       await page.browser().close();
//     }
//   } catch (error) {
//     console.error('An error occurred:', error);
//     throw error;
//   }
// }

// (async () => {
//   const browser = await puppeteer.launch({ headless: false, executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe' });
//   const page = await browser.newPage();
//   await getHtmlTags(page);
// })();

// module.exports = modifiedHtmlContent;














// const puppeteer = require('puppeteer');

// let urls = [
//   "/jodi-chart-record/milan-morning.php",
//   "/jodi-chart-record/sridevi.php",
//   "/jodi-chart-record/kalyan-morning.php",
//   "/jodi-chart-record/padmavati.php"
// ];
// let modifiedHtmlContent = [];

// async function getHtmlTags(page, i = 0) {
//   if (i < urls.length) {
//     try {
//       await page.goto(`https://dpbossss.services${urls[i]}`, { waitUntil: 'networkidle0' });

//       const htmlContent = await page.$eval('html', element => element.outerHTML);
//       const modifiedContent = htmlContent
//         .replaceAll(/dpbossss.services|DPBOSS\.Services|DPBOSS|dpboss|dp|boss|DP|Boss|DP\sBOSS|DpBossss\.services/gi, 'WOLF247')
//         .replaceAll('https://dpbossss.services/', 'http://localhost:5173/');

//       modifiedHtmlContent[i] = modifiedContent;
//       console.log(modifiedContent);

//       // Wait for 2 seconds before moving to the next URL
//       setTimeout(() => getHtmlTags(page, i + 1), 2000);
//     } catch (error) {
//       console.error('An error occurred:', error);
//       // Retry the same URL in case of an error
//       setTimeout(() => getHtmlTags(page, i), 2000);
//     }
//   } else {
//     await page.browser().close();
//     return modifiedHtmlContent;
//   }
// }

// (async () => {
//   const browser = await puppeteer.launch({
//     headless: false,
//     executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
//   });
//   const page = await browser.newPage();
//   await getHtmlTags(page);
// })();

// module.exports = modifiedHtmlContent;
