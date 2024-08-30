const PanelOne = require('../models/panelOneModel');
const PanelTwo = require('../models/panelTwoModel');
const PanelThree = require('../models/panelThreeModel');
const PanelFour = require('../models/panelFourModel');
const startScraping = require('../api/scrap');
const zlib = require('zlib');

//Store data in redis
const redis = require('../config/redisConfig')


let homeDocument, homeDocumentTwo, homeDocumentThree, homeDocumentFour;

const groupOneFields = ['Home', 'MilanMorning', 'Sridevi', 'KalyanMorning', 'Padmavati',
  'Madhuri', 'SrideviMorning', 'Maharani', 'Prabhat', 'KarnatakDay', 'TimeBazarMorning',
  'TimeBazar', 'Diamond', 'TaraMumbaiDay', 'MainKalyan', 'TimeBazarDay', 'MilanDay',
  'MainBazarDay', 'PunaBazar', 'Kalyan', 'SrideviNight', 'DiamondNight', 'MadhuriNight',
  'NightTimeBazar', 'TaraMumbaiNight', 'MainBazarNight', 'MilanNight', 'RajdhaniNight',
  'MainBazar', 'MaharaniDay', 'SrideviDay', 'Dhanashree', 'KalyanNight', 'KalyanPro',
  'Gujarat', 'OldMainMumbai', 'RajLaxmi', 'MadhurMorning', 'MadhurDay', 'MadhurNight',
  'RatanKhatri', 'MaharaniNight', 'PadmavatiNight', 'JayShreeDay', 'SriDhanalaxmi', 'DhanshreeDay',
  'MainBombay', 'SundayBazar', 'SundayBazarNight', 'SuperGoaDay', 'PunaNightMain', 'Khajana',
  'SrideviMain', 'SrideviMainNight', 'SupremeMorning', 'SupremeDay', 'SupremeNight',
  'GujratNight', 'DhanaShreeNight'];

const groupTwoFields = ['BSFBazar', 'SitaMorning', 'KalyanGoldNight', 'BombayDay',
  'Srilakshmi', 'MilanBazar', 'RatanDay', 'Chandan', 'Maharashtra', 'Worli', 'WorliMumbaiDay',
  'MainMumbaiRK', 'WorliMumbai', 'SitaDay', 'SatyamMumbai', 'CountryBazar', 'RoseBazarDay',
  'RoseBazarNight', 'JantaMorning', 'CentralBombay', 'TeenPatti', 'SuperTime', 'Bhagyalaxmi',
  'kaali', 'MainMumbaiNight', 'SuperMatka', 'MaharajTime', 'MaharajDay', 'MaharajNight',
  'BazarDay', 'BazarNight', 'RajdhaniDay', 'PunaNight', 'TimeNight', 'Mohini', 'MumbaiStar',
  'kalyanBazar', 'MainBazarMumbai', 'Mahadevi', 'SatyamMumbaiEvening', 'KalyanGold', 'SitaNight',
  'KamalMorning', 'KamalDay', 'KamalNight', 'RajdhaniSunday', 'AndhraMorning', 'AndhraDay', 'AndhraNight',
  'BombayRajshreeDay', 'BombayRajshreeNight', 'MilanBazarMorning', 'MilanBazarDay', 'MilanBazarNight',
  'MahadeviMorning', 'MahadeviNight', 'RajyogDay', 'RajyogNight', 'Gowa', 'RoyalDay', 'MumbaiStarMain'];

const groupThreeFields = ['JodiMilanMorning', 'JodiSridevi', 'JodiKalyanMorning', 'JodiPadmavati',
  'JodiMadhuri', 'JodiSrideviMorning', 'JodiMaharani', 'JodiPrabhat', 'JodiKarnatakDay', 'JodiTimeBazarMorning', 'JodiTimeBazar',
  'JodiDiamond', 'JodiTaraMumbaiDay', 'JodiMainKalyan', 'JodiTimeBazarDay', 'JodiMilanDay', 'JodiMainBazarDay',
  'JodiPunaBazar', 'JodiKalyan', 'JodiSrideviNight', 'JodiDiamondNight', 'JodiMadhuriNight', 'JodiNightTimeBazar',
  'JodiTaraMumbaiNight', 'JodiMainBazarNight', 'JodiMilanNight', 'JodiRajdhaniNight', 'JodiMainBazar', 'JodiMaharaniDay',
  'JodiSrideviDay', 'JodiDhanashree', 'JodiKalyanNight', 'JodiKalyanPro', 'JodiGujarat', 'JodiOldMainMumbai',
  'JodiRajLaxmi', 'JodiMadhurMorning', 'JodiMadhurDay', 'JodiMadhurNight', 'JodiRatanKhatri', 'JodiMaharaniNight',
  'JodiPadmavatiNight', 'JodiJayShreeDay', 'JodiSriDhanalaxmi', 'JodiDhanshreeDay', 'JodiMainBombay', 'JodiSundayBazar',
  'JodiSundayBazarNight', 'JodiSuperGoaDay', 'JodiPunaNightMain', 'JodiKhajana', 'JodiSrideviMain', 'JodiSrideviMainNight',
  'JodiSupremeMorning', 'JodiSupremeDay', 'JodiSupremeNight', 'JodiGujratNight', 'JodiDhanaShreeNight']

const groupFourFields = ['JodiBSFBazar', 'JodiSitaMorning', 'JodiKalyanGoldNight', 'JodiBombayDay',
  'JodiSrilakshmi', 'JodiMilanBazar', 'JodiRatanDay', 'JodiChandan', 'JodiMaharashtra', 'JodiWorli',
  'JodiWorliMumbaiDay', 'JodiMainMumbaiRK', 'JodiWorliMumbai', 'JodiSitaDay', 'JodiSatyamMumbai',
  'JodiCountryBazar', 'JodiRoseBazarDay', 'JodiRoseBazarNight', 'JodiJantaMorning', 'JodiCentralBombay',
  'JodiTeenPatti', 'JodiSuperTime', 'JodiBhagyalaxmi', 'Jodikaali', 'JodiMainMumbaiNight', 'JodiSuperMatka',
  'JodiMaharajTime', 'JodiMaharajDay', 'JodiMaharajNight', 'JodiBazarDay', 'JodiBazarNight', 'JodiRajdhaniDay',
  'JodiPunaNight', 'JodiTimeNight', 'JodiMohini', 'JodiMumbaiStar', 'JodikalyanBazar', 'JodiMainBazarMumbai',
  'JodiMahadevi', 'JodiSatyamMumbaiEvening', 'JodiKalyanGold', 'JodiSitaNight', 'JodiKamalMorning', 'JodiKamalDay',
  'JodiKamalNight', 'JodiRajdhaniSunday', 'JodiAndhraMorning', 'JodiAndhraDay', 'JodiAndhraNight', 'JodiBombayRajshreeDay',
  'JodiBombayRajshreeNight', 'JodiMilanBazarMorning', 'JodiMilanBazarDay', 'JodiMilanBazarNight', 'JodiMahadeviMorning',
  'JodiMahadeviNight', 'JodiRajyogDay', 'JodiRajyogNight', 'JodiGowa', 'JodiRoyalDay', 'JodiMumbaiStarMain'
]

async function storeHtmlTags() {
  try {
    // Fetch the HTML tags using the Puppeteer script
    const scraper = startScraping();

    // Try to find an existing document in the database
    homeDocument = await PanelOne.findOne();
    if (!homeDocument) {
      homeDocument = new PanelOne({
        Home: '',
        MilanMorning: '',
        Sridevi: '',
        KalyanMorning: '',
        Padmavati: '',
        Madhuri: '',
        SrideviMorning: '',
        Maharani: '',
        Prabhat: '',
        KarnatakDay: '',
        TimeBazarMorning: '',
        TimeBazar: '',
        Diamond: '',
        TaraMumbaiDay: '',
        MainKalyan: '',
        TimeBazarDay: '',
        MilanDay: '',
        MainBazarDay: '',
        PunaBazar: '',
        Kalyan: '',
        SrideviNight: '',
        DiamondNight: '',
        MadhuriNight: '',
        NightTimeBazar: '',
        TaraMumbaiNight: '',
        MainBazarNight: '',
        MilanNight: '',
        RajdhaniNight: '',
        MainBazar: '',
        MaharaniDay: '',
        SrideviDay: '',
        Dhanashree: '',
        KalyanNight: '',
        KalyanPro: '',
        Gujarat: '',
        OldMainMumbai: '',
        RajLaxmi: '',
        MadhurMorning: '',
        MadhurDay: '',
        MadhurNight: '',
        RatanKhatri: '',
        MaharaniNight: '',
        PadmavatiNight: '',
        JayShreeDay: '',
        SriDhanalaxmi: '',
        DhanshreeDay: '',
        MainBombay: '',
        SundayBazar: '',
        SundayBazarNight: '',
        SuperGoaDay: '',
        PunaNightMain: '',
        Khajana: '',
        SrideviMain: '',
        SrideviMainNight: '',
        SupremeMorning: '',
        SupremeDay: '',
        SupremeNight: '',
        GujratNight: '',
        DhanaShreeNight: ''
      });
    }

    homeDocumentTwo = await PanelTwo.findOne();
    if (!homeDocumentTwo) {
      homeDocumentTwo = new PanelTwo({
        BSFBazar: '',
        SitaMorning: '',
        KalyanGoldNight: '',
        BombayDay: '',
        Srilakshmi: '',
        MilanBazar: '',
        RatanDay: '',
        Chandan: '',
        Maharashtra: '',
        Worli: '',
        WorliMumbaiDay: '',
        MainMumbaiRK: '',
        WorliMumbai: '',
        SitaDay: '',
        SatyamMumbai: '',
        CountryBazar: '',
        RoseBazarDay: '',
        RoseBazarNight: '',
        JantaMorning: '',
        CentralBombay: '',
        TeenPatti: '',
        SuperTime: '',
        Bhagyalaxmi: '',
        kaali: '',
        MainMumbaiNight: '',
        SuperMatka: '',
        MaharajTime: '',
        MaharajDay: '',
        MaharajNight: '',
        BazarDay: '',
        BazarNight: '',
        RajdhaniDay: '',
        PunaNight: '',
        TimeNight: '',
        Mohini: '',
        MumbaiStar: '',
        kalyanBazar: '',
        MainBazarMumbai: '',
        Mahadevi: '',
        SatyamMumbaiEvening: '',
        KalyanGold: '',
        SitaNight: '',
        KamalMorning: '',
        KamalDay: '',
        KamalNight: '',
        RajdhaniSunday: '',
        AndhraMorning: '',
        AndhraDay: '',
        AndhraNight: '',
        BombayRajshreeDay: '',
        BombayRajshreeNight: '',
        MilanBazarMorning: '',
        MilanBazarDay: '',
        MilanBazarNight: '',
        MahadeviMorning: '',
        MahadeviNight: '',
        RajyogDay: '',
        RajyogNight: '',
        Gowa: '',
        RoyalDay: '',
        MumbaiStarMain: ''
      });
    }

    homeDocumentThree = await PanelThree.findOne();
    if (!homeDocumentThree) {
      // If no document exists, create a new one with initial fields
      homeDocumentThree = new PanelThree({
        JodiMilanMorning: '',
        JodiSridevi: '',
        JodiKalyanMorning: '',
        JodiPadmavati: '',
        JodiMadhuri: '',
        JodiSrideviMorning: '',
        JodiMaharani: '',
        JodiPrabhat: '',
        JodiKarnatakDay: '',
        JodiTimeBazarMorning: '',
        JodiTimeBazar: '',
        JodiDiamond: '',
        JodiTaraMumbaiDay: '',
        JodiMainKalyan: '',
        JodiTimeBazarDay: '',
        JodiMilanDay: '',
        JodiMainBazarDay: '',
        JodiPunaBazar: '',
        JodiKalyan: '',
        JodiSrideviNight: '',
        JodiDiamondNight: '',
        JodiMadhuriNight: '',
        JodiNightTimeBazar: '',
        JodiTaraMumbaiNight: '',
        JodiMainBazarNight: '',
        JodiMilanNight: '',
        JodiRajdhaniNight: '',
        JodiMainBazar: '',
        JodiMaharaniDay: '',
        JodiSrideviDay: '',
        JodiDhanashree: '',
        JodiKalyanNight: '',
        JodiKalyanPro: '',
        JodiGujarat: '',
        JodiOldMainMumbai: '',
        JodiRajLaxmi: '',
        JodiMadhurMorning: '',
        JodiMadhurDay: '',
        JodiMadhurNight: '',
        JodiRatanKhatri: '',
        JodiMaharaniNight: '',
        JodiPadmavatiNight: '',
        JodiJayShreeDay: '',
        JodiSriDhanalaxmi: '',
        JodiDhanshreeDay: '',
        JodiMainBombay: '',
        JodiSundayBazar: '',
        JodiSundayBazarNight: '',
        JodiSuperGoaDay: '',
        JodiPunaNightMain: '',
        JodiKhajana: '',
        JodiSrideviMain: '',
        JodiSrideviMainNight: '',
        JodiSupremeMorning: '',
        JodiSupremeDay: '',
        JodiSupremeNight: '',
        JodiGujratNight: '',
        JodiDhanaShreeNight: ''
      });
    }

    homeDocumentFour = await PanelFour.findOne();
    if (!homeDocumentFour) {
      homeDocumentFour = new PanelFour({
        JodiBSFBazar: '',
        JodiSitaMorning: '',
        JodiKalyanGoldNight: '',
        JodiBombayDay: '',
        JodiSrilakshmi: '',
        JodiMilanBazar: '',
        JodiRatanDay: '',
        JodiChandan: '',
        JodiMaharashtra: '',
        JodiWorli: '',
        JodiWorliMumbaiDay: '',
        JodiMainMumbaiRK: '',
        JodiWorliMumbai: '',
        JodiSitaDay: '',
        JodiSatyamMumbai: '',
        JodiCountryBazar: '',
        JodiRoseBazarDay: '',
        JodiRoseBazarNight: '',
        JodiJantaMorning: '',
        JodiCentralBombay: '',
        JodiTeenPatti: '',
        JodiSuperTime: '',
        JodiBhagyalaxmi: '',
        Jodikaali: '',
        JodiMainMumbaiNight: '',
        JodiSuperMatka: '',
        JodiMaharajTime: '',
        JodiMaharajDay: '',
        JodiMaharajNight: '',
        JodiBazarDay: '',
        JodiBazarNight: '',
        JodiRajdhaniDay: '',
        JodiPunaNight: '',
        JodiTimeNight: '',
        JodiMohini: '',
        JodiMumbaiStar: '',
        JodikalyanBazar: '',
        JodiMainBazarMumbai: '',
        JodiMahadevi: '',
        JodiSatyamMumbaiEvening: '',
        JodiKalyanGold: '',
        JodiSitaNight: '',
        JodiKamalMorning: '',
        JodiKamalDay: '',
        JodiKamalNight: '',
        JodiRajdhaniSunday: '',
        JodiAndhraMorning: '',
        JodiAndhraDay: '',
        JodiAndhraNight: '',
        JodiBombayRajshreeDay: '',
        JodiBombayRajshreeNight: '',
        JodiMilanBazarMorning: '',
        JodiMilanBazarDay: '',
        JodiMilanBazarNight: '',
        JodiMahadeviMorning: '',
        JodiMahadeviNight: '',
        JodiRajyogDay: '',
        JodiRajyogNight: '',
        JodiGowa: '',
        JodiRoyalDay: '',
        JodiMumbaiStarMain: ''
      });
    }


    let currentCollection = 1;
    let fieldIndex = 0;

    try {
      for await (const htmlTag of scraper) {
        if (htmlTag) {
          const buffer = Buffer.from(htmlTag);
          const compressedBuffer = zlib.deflateSync(buffer);
          const compressedData = compressedBuffer.toString('base64');

          // let buffer = Buffer.from(htmlTag);
          // let compressedData = zlib.deflateSync(buffer);

          switch (currentCollection) {
            case 1:
              if (fieldIndex < groupOneFields.length) {
                homeDocument[groupOneFields[fieldIndex]] = compressedData;
                await homeDocument.save();
                console.log(`${groupOneFields[fieldIndex]} data stored/updated successfully.`);



                //Store data in redis
                await redis.set(groupOneFields[fieldIndex], compressedData)
                  .then((res) => {
                    console.log(`Redis set for ${groupOneFields[fieldIndex]} `);
                  }).catch((err) => {
                    console.log(err.message);
                  });
              }
              break;
            case 2:
              if (fieldIndex < groupTwoFields.length) {
                homeDocumentTwo[groupTwoFields[fieldIndex]] = compressedData;
                await homeDocumentTwo.save();
                console.log(`${groupTwoFields[fieldIndex]} data stored/updated successfully.`);



                //Store data in redis
                await redis.set(groupTwoFields[fieldIndex], compressedData)
                  .then((res) => {
                    console.log(`Redis set for ${groupTwoFields[fieldIndex]} `);
                  }).catch((err) => {
                    console.log(err.message);
                  });
              }
              break;
            case 3:
              if (fieldIndex < groupThreeFields.length) {
                homeDocumentThree[groupThreeFields[fieldIndex]] = compressedData;
                await homeDocumentThree.save();
                console.log(`${groupThreeFields[fieldIndex]} data stored/updated successfully.`);



                //Store data in redis
                await redis.set(groupThreeFields[fieldIndex], compressedData)
                  .then((res) => {
                    console.log(`Redis set for ${groupThreeFields[fieldIndex]} `);
                  }).catch((err) => {
                    console.log(err.message);
                  });
              }
              break;
            case 4:
              if (fieldIndex < groupFourFields.length) {
                homeDocumentFour[groupFourFields[fieldIndex]] = compressedData;
                await homeDocumentFour.save();
                console.log(`${groupFourFields[fieldIndex]} data stored/updated successfully.`);



                //Store data in redis
                await redis.set(groupFourFields[fieldIndex], compressedData)
                  .then((res) => {
                    console.log(`Redis set for ${groupFourFields[fieldIndex]} `);
                  }).catch((err) => {
                    console.log(err.message);
                  });
              }
              break;
          }

          fieldIndex++;

          // Transition to the next collection if we have processed all fields in the current collection
          if (
            (currentCollection === 1 && fieldIndex >= groupOneFields.length) ||
            (currentCollection === 2 && fieldIndex >= groupTwoFields.length) ||
            (currentCollection === 3 && fieldIndex >= groupThreeFields.length) ||
            (currentCollection === 4 && fieldIndex >= groupFourFields.length)
          ) {
            currentCollection++;
            fieldIndex = 0;
          }

          // Exit if all collections have been processed
          if (currentCollection > 4) {
            await storeHtmlTags();
            break;
          }
        } else {
          console.log(`No data fetched for the current field in collection ${currentCollection}.`);
        }
      }
    } catch (error) {
      console.error('An error occurred:', error.message);
    }

  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}


module.exports = {
  storeHtmlTags
};