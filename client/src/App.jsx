import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MilanMorning from './components/panel-chart-record/MilanMorning';
import Sridevi from './components/panel-chart-record/Sridevi';
import KalyanMorning from './components/panel-chart-record/KalyanMorning';
import Padmavati from './components/panel-chart-record/Padmavati';
import Madhuri from './components/panel-chart-record/Madhuri';
import SrideviMorning from './components/panel-chart-record/SrideviMorning';
import Maharani from './components/panel-chart-record/Maharani';
import Prabhat from './components/panel-chart-record/Prabhat';
import KarnatakDay from './components/panel-chart-record/KarnatakDay';
import TimeBazarMorning from './components/panel-chart-record/TimeBazarMorning';
import TimeBazar from './components/panel-chart-record/TimeBazar';
import Diamond from './components/panel-chart-record/Diamond';
import TaraMumbaiDay from './components/panel-chart-record/TaraMumbaiDay';
import MainKalyan from './components/panel-chart-record/MainKalyan';
import TimeBazarDay from './components/panel-chart-record/TimeBazarDay';
import MilanDay from './components/panel-chart-record/MilanDay';
import MainBazarDay from './components/panel-chart-record/MainBazarDay';
import PunaBazar from './components/panel-chart-record/PunaBazar';
import Kalyan from './components/panel-chart-record/Kalyan';
import SrideviNight from './components/panel-chart-record/SrideviNight';
import DiamondNight from './components/panel-chart-record/DiamondNight';
import MadhuriNight from './components/panel-chart-record/MadhuriNight';
import NightTimeBazar from './components/panel-chart-record/NightTimeBazar';
import TaraMumbaiNight from './components/panel-chart-record/TaraMumbaiNight';
import MainBazarNight from './components/panel-chart-record/MainBazarNight';
import MilanNight from './components/panel-chart-record/MilanNight';
import RajdhaniNight from './components/panel-chart-record/RajdhaniNight';
import MainBazar from './components/panel-chart-record/MainBazar';
import MaharaniDay from './components/panel-chart-record/MaharaniDay';
import SrideviDay from './components/panel-chart-record/SrideviDay';
import Dhanashree from './components/panel-chart-record/Dhanshree';
import KalyanNight from './components/panel-chart-record/KalyanNight';
import KalyanPro from './components/panel-chart-record/KalyanPro';
import Gujrat from './components/panel-chart-record/Gujrat';
import OldMainMumbai from './components/panel-chart-record/OldMainMumbai';
import Rajlaxmi from './components/panel-chart-record/Rajlaxmi';
import MadhurMorning from './components/panel-chart-record/MadhurMorning';
import MadhurDay from './components/panel-chart-record/MadhurDay';
import MadhurNight from './components/panel-chart-record/MadhurNight.jsx';
import RatanKhatri from './components/panel-chart-record/RatanKhatri';
import MaharaniNight from './components/panel-chart-record/MaharaniNight';
import PadmavatiNight from './components/panel-chart-record/PadmavatiNight';
import JayShreeDay from './components/panel-chart-record/JayShreeDay';
import SriDhanalaxmi from './components/panel-chart-record/SriDhanalaxmi';
import DhanshreeDay from './components/panel-chart-record/DhanshreeDay';
import MainBombay from './components/panel-chart-record/MainBombay';
import SundayBazar from './components/panel-chart-record/SundayBazar';
import SundayBazarNight from './components/panel-chart-record/SundayBazarNight';
import SuperGoaDay from './components/panel-chart-record/SuperGoaDay';
import PunaNightMain from './components/panel-chart-record/PunaNightMain';
import Khajana from './components/panel-chart-record/Khajana';
import SrideviMain from './components/panel-chart-record/SrideviMain';
import SrideviMainNight from './components/panel-chart-record/SrideviMainNight';
import SupremeMorning from './components/panel-chart-record/SupremeMorning';
import SupremeDay from './components/panel-chart-record/SupremeDay';
import SupremeNight from './components/panel-chart-record/SupremeNight';
import GujratNight from './components/panel-chart-record/GujratNight';
import DhanashreeNight from './components/panel-chart-record/DhanashreeNight';
import BsfBazar from './components/panel-chart-record/BsfBazar';
import SitaMorning from './components/panel-chart-record/SitaMorning';
import KalyanGoldNight from './components/panel-chart-record/KalyanGoldNight';
import BombayDay from './components/panel-chart-record/BombayDay';
import Srilakshmi from './components/panel-chart-record/Srilakshmi';
import MilanBazar from './components/panel-chart-record/MilanBazar';
import RatanDay from './components/panel-chart-record/RatanDay';
import Chandan from './components/panel-chart-record/Chandan';
import Maharashtra from './components/panel-chart-record/Maharashtra';
import Worli from './components/panel-chart-record/Worli';
import WorliMumbaiDay from './components/panel-chart-record/WorliMumbaiDay';
import MainMumbaiRK from './components/panel-chart-record/MainMumbaiRK';
import WorliMumbai from './components/panel-chart-record/WorliMumbai';
import SitaDay from './components/panel-chart-record/SitaDay';
import SatyamMumbai from './components/panel-chart-record/SatyamMumbai';
import CountryBazar from './components/panel-chart-record/CountryBazar';
import RoseBazarDay from './components/panel-chart-record/RoseBazarDay';
import RoseBazarNight from './components/panel-chart-record/RoseBazarNight';
import JantaMorning from './components/panel-chart-record/JantaMorning';
import CentralBombay from './components/panel-chart-record/CentralBombay';
import TeenPatti from './components/panel-chart-record/TeenPatti';
import SuperTime from './components/panel-chart-record/SuperTime';
import Bhagyalaxmi from './components/panel-chart-record/Bhagyalaxmi';
import Kaali from './components/panel-chart-record/Kaali';
import MainMumbaiNight from './components/panel-chart-record/MainMumbaiNight';
import SuperMatka from './components/panel-chart-record/SuperMatka';
import MaharajTime from './components/panel-chart-record/MaharajTime';
import MaharajDay from './components/panel-chart-record/MaharajDay';
import MaharajNight from './components/panel-chart-record/MaharajNight';
import BazarDay from './components/panel-chart-record/BazarDay';
import BazarNight from './components/panel-chart-record/BazarNight';
import RajdhaniDay from './components/panel-chart-record/RajdhaniDay';
import PunaNight from './components/panel-chart-record/PunaNight';
import TimeNight from './components/panel-chart-record/TimeNight';
import Mohini from './components/panel-chart-record/Mohini';
import MumbaiStar from './components/panel-chart-record/MumbaiStar';
import KalyanBazar from './components/panel-chart-record/KalyanBazar';
import Mahadevi from './components/panel-chart-record/Mahadevi';
import SatyamMumbaiEvening from './components/panel-chart-record/SatyamMumbaiEvening';
import KalyanGold from './components/panel-chart-record/KalyanGold';
import SitaNight from './components/panel-chart-record/SitaNight';
import KamalMorning from './components/panel-chart-record/KamalMorning';
import KamalDay from './components/panel-chart-record/KamalDay';
import KamalNight from './components/panel-chart-record/KamalNight';
import RajdhaniSunday from './components/panel-chart-record/RajdhaniSunday';
import AndhraMorning from './components/panel-chart-record/AndhraMorning';
import AndhraDay from './components/panel-chart-record/AndhraDay';
import AndhraNight from './components/panel-chart-record/AndhraNight';
import BombayRajshreeDay from './components/panel-chart-record/BombayRajshreeDay';
import BombayRajshreeNight from './components/panel-chart-record/BombayRajshreeNight';
import MilanBazarMorning from './components/panel-chart-record/MilanBazarMorning';
import MilanBazarDay from './components/panel-chart-record/MilanBazarDay';
import MilanBazarNight from './components/panel-chart-record/MilanBazarNight';
import MahadeviMorning from './components/panel-chart-record/MahadeviMorning';
import MahadeviNight from './components/panel-chart-record/MahadeviNight';
import RajyogDay from './components/panel-chart-record/RajyogDay';
import RajyogNight from './components/panel-chart-record/RajyogNight';
import Gowa from './components/panel-chart-record/Gowa';
import RoyalDay from './components/panel-chart-record/RoyalDay';
import MumbaiStarMain from './components/panel-chart-record/MumbaiStartMain';




// Importing Jodi Routes 
import JodiMilanMorning from './components/jodi-chart-record/JodiMilanMorning';
import JodiSridevi from './components/jodi-chart-record/JodiSridevi';
import JodiKalyanMorning from './components/jodi-chart-record/JodiKalyanMorning';
import JodiPadmavati from './components/jodi-chart-record/JodiPadmavati';
import JodiMadhuri from './components/jodi-chart-record/JodiMadhuri';
import JodiSrideviMorning from './components/jodi-chart-record/JodiSrideviMorning';
import JodiMaharani from './components/jodi-chart-record/JodiMaharani';
import JodiPrabhat from './components/jodi-chart-record/JodiPrabhat';
import JodiKarnatakDay from './components/jodi-chart-record/JodiKarnatakDay';
import JodiTimeBazarMorning from './components/jodi-chart-record/JodiTimeBazarMorning';
import JodiTimeBazar from './components/jodi-chart-record/JodiTimeBazar';
import JodiDiamond from './components/jodi-chart-record/JodiDiamond';
import JodiTaraMumbaiDay from './components/jodi-chart-record/JodiTaraMumbaiDay';
import JodiMainKalyan from './components/jodi-chart-record/JodiMainKalyan';
import JodiTimeBazarDay from './components/jodi-chart-record/JodiTimeBazarDay';
import JodiMilanDay from './components/jodi-chart-record/JodiMilanDay';
import JodiMainBazarDay from './components/jodi-chart-record/JodiMainBazarDay';
import JodiPunaBazar from './components/jodi-chart-record/JodiPunaBazar';
import JodiKalyan from './components/jodi-chart-record/JodiKalyan';
import JodiSrideviNight from './components/jodi-chart-record/JodiSrideviNight';
import JodiDiamondNight from './components/jodi-chart-record/JodiDiamondNight';
import JodiMadhuriNight from './components/jodi-chart-record/JodiMadhuriNight';
import JodiNightTimeBazar from './components/jodi-chart-record/JodiNightTimeBazar';
import JodiTaraMumbaiNight from './components/jodi-chart-record/JodiTaraMumbaiNight';
import JodiMainBazarNight from './components/jodi-chart-record/JodiMainBazarNight';
import JodiMilanNight from './components/jodi-chart-record/JodiMilanNight';
import JodiRajdhaniNight from './components/jodi-chart-record/JodiRajdhaniNight';
import JodiMainBazar from './components/jodi-chart-record/JodiMainBazar';
import JodiMaharaniDay from './components/jodi-chart-record/JodiMaharaniDay';
import JodiSrideviDay from './components/jodi-chart-record/JodiSrideviDay';
import JodiDhanashree from './components/jodi-chart-record/JodiDhanshree';
import JodiKalyanNight from './components/jodi-chart-record/JodiKalyanNight';
import JodiKalyanPro from './components/jodi-chart-record/JodiKalyanPro';
import JodiGujrat from './components/jodi-chart-record/JodiGujrat';
import JodiOldMainMumbai from './components/jodi-chart-record/JodiOldMainMumbai';
import JodiRajlaxmi from './components/jodi-chart-record/JodiRajlaxmi';
import JodiMadhurMorning from './components/jodi-chart-record/JodiMadhurMorning';
import JodiMadhurDay from './components/jodi-chart-record/JodiMadhurDay';
import JodiMadhurNight from './components/jodi-chart-record/JodiMadhurNight.jsx';
import JodiRatanKhatri from './components/jodi-chart-record/JodiRatanKhatri';
import JodiMaharaniNight from './components/jodi-chart-record/JodiMaharaniNight';
import JodiPadmavatiNight from './components/jodi-chart-record/JodiPadmavatiNight';
import JodiJayShreeDay from './components/jodi-chart-record/JodiJayShreeDay';
import JodiSriDhanalaxmi from './components/jodi-chart-record/JodiSriDhanalaxmi';
import JodiDhanshreeDay from './components/jodi-chart-record/JodiDhanshreeDay';
import JodiMainBombay from './components/jodi-chart-record/JodiMainBombay';
import JodiSundayBazar from './components/jodi-chart-record/JodiSundayBazar';
import JodiSundayBazarNight from './components/jodi-chart-record/JodiSundayBazarNight';
import JodiSuperGoaDay from './components/jodi-chart-record/JodiSuperGoaDay';
import JodiPunaNightMain from './components/jodi-chart-record/JodiPunaNightMain';
import JodiKhajana from './components/jodi-chart-record/JodiKhajana';
import JodiSrideviMain from './components/jodi-chart-record/JodiSrideviMain';
import JodiSrideviMainNight from './components/jodi-chart-record/JodiSrideviMainNight';
import JodiSupremeMorning from './components/jodi-chart-record/JodiSupremeMorning';
import JodiSupremeDay from './components/jodi-chart-record/JodiSupremeDay';
import JodiSupremeNight from './components/jodi-chart-record/JodiSupremeNight';
import JodiGujratNight from './components/jodi-chart-record/JodiGujratNight';
import JodiDhanashreeNight from './components/jodi-chart-record/JodiDhanashreeNight';
import JodiBsfBazar from './components/jodi-chart-record/JodiBsfBazar';
import JodiSitaMorning from './components/jodi-chart-record/JodiSitaMorning';
import JodiKalyanGoldNight from './components/jodi-chart-record/JodiKalyanGoldNight';
import JodiBombayDay from './components/jodi-chart-record/JodiBombayDay';
import JodiSrilakshmi from './components/jodi-chart-record/JodiSrilakshmi';
import JodiMilanBazar from './components/jodi-chart-record/JodiMilanBazar';
import JodiRatanDay from './components/jodi-chart-record/JodiRatanDay';
import JodiChandan from './components/jodi-chart-record/JodiChandan';
import JodiMaharashtra from './components/jodi-chart-record/JodiMaharashtra';
import JodiWorli from './components/jodi-chart-record/JodiWorli';
import JodiWorliMumbaiDay from './components/jodi-chart-record/JodiWorliMumbaiDay';
import JodiMainMumbaiRK from './components/jodi-chart-record/JodiMainMumbaiRK';
import JodiWorliMumbai from './components/jodi-chart-record/JodiWorliMumbai';
import JodiSitaDay from './components/jodi-chart-record/JodiSitaDay';
import JodiSatyamMumbai from './components/jodi-chart-record/JodiSatyamMumbai';
import JodiCountryBazar from './components/jodi-chart-record/JodiCountryBazar';
import JodiRoseBazarDay from './components/jodi-chart-record/JodiRoseBazarDay';
import JodiRoseBazarNight from './components/jodi-chart-record/JodiRoseBazarNight';
import JodiJantaMorning from './components/jodi-chart-record/JodiJantaMorning';
import JodiCentralBombay from './components/jodi-chart-record/JodiCentralBombay';
import JodiTeenPatti from './components/jodi-chart-record/JodiTeenPatti';
import JodiSuperTime from './components/jodi-chart-record/JodiSuperTime';
import JodiBhagyalaxmi from './components/jodi-chart-record/JodiBhagyalaxmi';
import JodiKaali from './components/jodi-chart-record/JodiKaali';
import JodiMainMumbaiNight from './components/jodi-chart-record/JodiMainMumbaiNight';
import JodiSuperMatka from './components/jodi-chart-record/JodiSuperMatka';
import JodiMaharajTime from './components/jodi-chart-record/JodiMaharajTime';
import JodiMaharajDay from './components/jodi-chart-record/JodiMaharajDay';
import JodiMaharajNight from './components/jodi-chart-record/JodiMaharajNight';
import JodiBazarDay from './components/jodi-chart-record/JodiBazarDay';
import JodiBazarNight from './components/jodi-chart-record/JodiBazarNight';
import JodiRajdhaniDay from './components/jodi-chart-record/JodiRajdhaniDay';
import JodiPunaNight from './components/jodi-chart-record/JodiPunaNight';
import JodiTimeNight from './components/jodi-chart-record/JodiTimeNight';
import JodiMohini from './components/jodi-chart-record/JodiMohini';
import JodiMumbaiStar from './components/jodi-chart-record/JodiMumbaiStar';
import JodiKalyanBazar from './components/jodi-chart-record/JodiKalyanBazar';
import JodiMahadevi from './components/jodi-chart-record/JodiMahadevi';
import JodiSatyamMumbaiEvening from './components/jodi-chart-record/JodiSatyamMumbaiEvening';
import JodiKalyanGold from './components/jodi-chart-record/JodiKalyanGold';
import JodiSitaNight from './components/jodi-chart-record/JodiSitaNight';
import JodiKamalMorning from './components/jodi-chart-record/JodiKamalMorning';
import JodiKamalDay from './components/jodi-chart-record/JodiKamalDay';
import JodiKamalNight from './components/jodi-chart-record/JodiKamalNight';
import JodiRajdhaniSunday from './components/jodi-chart-record/JodiRajdhaniSunday';
import JodiAndhraMorning from './components/jodi-chart-record/JodiAndhraMorning';
import JodiAndhraDay from './components/jodi-chart-record/JodiAndhraDay';
import JodiAndhraNight from './components/jodi-chart-record/JodiAndhraNight';
import JodiBombayRajshreeDay from './components/jodi-chart-record/JodiBombayRajshreeDay';
import JodiBombayRajshreeNight from './components/jodi-chart-record/JodiBombayRajshreeNight';
import JodiMilanBazarMorning from './components/jodi-chart-record/JodiMilanBazarMorning';
import JodiMilanBazarDay from './components/jodi-chart-record/JodiMilanBazarDay';
import JodiMilanBazarNight from './components/jodi-chart-record/JodiMilanBazarNight';
import JodiMahadeviMorning from './components/jodi-chart-record/JodiMahadeviMorning';
import JodiMahadeviNight from './components/jodi-chart-record/JodiMahadeviNight';
import JodiRajyogDay from './components/jodi-chart-record/JodiRajyogDay';
import JodiRajyogNight from './components/jodi-chart-record/JodiRajyogNight';
import JodiGowa from './components/jodi-chart-record/JodiGowa';
import JodiRoyalDay from './components/jodi-chart-record/JodiRoyalDay';
import JodiMumbaiStarMain from './components/jodi-chart-record/JodiMumbaiStartMain';
import NotFoundPage from './components/NotFoundPage';




const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/panel-chart-record/milan-morning.php" element={<MilanMorning />} />
          <Route path="/panel-chart-record/sridevi.php" element={<Sridevi />} />
          <Route path="/panel-chart-record/kalyan-morning.php" element={<KalyanMorning />} />
          <Route path="/panel-chart-record/padmavati.php" element={<Padmavati />} />
          <Route path="/panel-chart-record/madhuri.php" element={<Madhuri />} />
          <Route path="/panel-chart-record/sridevi-morning.php" element={<SrideviMorning />} />
          <Route path="/panel-chart-record/maharani.php" element={<Maharani />} />
          <Route path="/panel-chart-record/prabhat.php" element={<Prabhat />} />
          <Route path="/panel-chart-record/karnataka-day.php" element={<KarnatakDay />} />
          <Route path="/panel-chart-record/time-bazar-morning.php" element={<TimeBazarMorning />} />
          <Route path="/panel-chart-record/time-bazar.php" element={<TimeBazar />} />
          <Route path="/panel-chart-record/diamond.php" element={<Diamond />} />
          <Route path="/panel-chart-record/tara-mumbai-day.php" element={<TaraMumbaiDay />} />
          <Route path="/panel-chart-record/main-kalyan.php" element={<MainKalyan />} />
          <Route path="/panel-chart-record/time-bazar-day.php" element={<TimeBazarDay />} />
          <Route path="/panel-chart-record/milan-day.php" element={<MilanDay />} />
          <Route path="/panel-chart-record/main-bazar-day.php" element={<MainBazarDay />} />
          <Route path="/panel-chart-record/puna-bazar.php" element={<PunaBazar />} />
          <Route path="/panel-chart-record/kalyan.php" element={<Kalyan />} />
          <Route path="/panel-chart-record/sridevi-night.php" element={<SrideviNight />} />
          <Route path="/panel-chart-record/diamond-night.php" element={<DiamondNight />} />
          <Route path="/panel-chart-record/madhuri-night.php" element={<MadhuriNight />} />
          <Route path="/panel-chart-record/night-time-bazar.php" element={<NightTimeBazar />} />
          <Route path="/panel-chart-record/tara-mumbai-night.php" element={<TaraMumbaiNight />} />
          <Route path="/panel-chart-record/main-bazar-night.php" element={<MainBazarNight />} />
          <Route path="/panel-chart-record/milan-night.php" element={<MilanNight />} />
          <Route path="/panel-chart-record/rajdhani-night.php" element={<RajdhaniNight />} />
          <Route path="/panel-chart-record/main-bazar.php" element={<MainBazar />} />
          <Route path="/panel-chart-record/maharani-day.php" element={<MaharaniDay />} />
          <Route path="/panel-chart-record/sridevi-day.php" element={<SrideviDay />} />
          <Route path="/panel-chart-record/dhanshree.php" element={<Dhanashree />} />
          <Route path="/panel-chart-record/kalyan-night.php" element={<KalyanNight />} />
          <Route path="/panel-chart-record/kalyan-pro.php" element={<KalyanPro />} />
          <Route path="/panel-chart-record/gujrat.php" element={<Gujrat />} />
          <Route path="/panel-chart-record/old-main-mumbai.php" element={<OldMainMumbai />} />
          <Route path="/panel-chart-record/rajlaxmi.php" element={<Rajlaxmi />} />
          <Route path="/panel-chart-record/madhur-morning.php" element={<MadhurMorning />} />
          <Route path="/panel-chart-record/madhur-day.php" element={<MadhurDay />} />
          <Route path="/panel-chart-record/madhur-night.php" element={<MadhurNight />} />
          <Route path="/panel-chart-record/ratan-khatri.php" element={<RatanKhatri />} />
          <Route path="/panel-chart-record/maharani-night.php" element={<MaharaniNight />} />
          <Route path="/panel-chart-record/padmavati-night.php" element={<PadmavatiNight />} />
          <Route path="/panel-chart-record/jay-shree-day.php" element={<JayShreeDay />} />
          <Route path="/panel-chart-record/sri-dhanalaxmi.php" element={<SriDhanalaxmi />} />
          <Route path="/panel-chart-record/dhanshree-day.php" element={<DhanshreeDay />} />
          <Route path="/panel-chart-record/main-bombay.php" element={<MainBombay />} />
          <Route path="/panel-chart-record/sunday-bazar.php" element={<SundayBazar />} />
          <Route path="/panel-chart-record/sunday-bazar-night.php" element={<SundayBazarNight />} />
          <Route path="/panel-chart-record/super-goa-day.php" element={<SuperGoaDay />} />
          <Route path="/panel-chart-record/puna-night-main.php" element={<PunaNightMain />} />
          <Route path="/panel-chart-record/khajana.php" element={<Khajana />} />
          <Route path="/panel-chart-record/sridevi-main.php" element={<SrideviMain />} />
          <Route path="/panel-chart-record/sridevi-main-night.php" element={<SrideviMainNight />} />
          <Route path="/panel-chart-record/supreme-morning.php" element={<SupremeMorning />} />
          <Route path="/panel-chart-record/supreme-day.php" element={<SupremeDay />} />
          <Route path="/panel-chart-record/supreme-night.php" element={<SupremeNight />} />
          <Route path="/panel-chart-record/gujrat-night.php" element={<GujratNight />} />
          <Route path="/panel-chart-record/dhanshree-night.php" element={<DhanashreeNight />} />
          <Route path="/panel-chart-record/bsf-bazar.php" element={<BsfBazar />} />
          <Route path="/panel-chart-record/sita-morning.php" element={<SitaMorning />} />
          <Route path="/panel-chart-record/kalyan-gold-night.php" element={<KalyanGoldNight />} />
          <Route path="/panel-chart-record/bombay-day.php" element={<BombayDay />} />
          <Route path="/panel-chart-record/srilakshmi.php" element={<Srilakshmi />} />
          <Route path="/panel-chart-record/milan-bazar.php" element={<MilanBazar />} />
          <Route path="/panel-chart-record/ratan-day.php" element={<RatanDay />} />
          <Route path="/panel-chart-record/chandan.php" element={<Chandan />} />
          <Route path="/panel-chart-record/maharashtra.php" element={<Maharashtra />} />
          <Route path="/panel-chart-record/worli.php" element={<Worli />} />
          <Route path="/panel-chart-record/worli-mumbai-day.php" element={<WorliMumbaiDay />} />
          <Route path="/panel-chart-record/main-mumbai-rk.php" element={<MainMumbaiRK />} />
          <Route path="/panel-chart-record/worli-mumbai.php" element={<WorliMumbai />} />
          <Route path="/panel-chart-record/sita-day.php" element={<SitaDay />} />
          <Route path="/panel-chart-record/satyam-mumbai.php" element={<SatyamMumbai />} />
          <Route path="/panel-chart-record/country-bazar.php" element={<CountryBazar />} />
          <Route path="/panel-chart-record/rose-bazar-day.php" element={<RoseBazarDay />} />
          <Route path="/panel-chart-record/rose-bazar-night.php" element={<RoseBazarNight />} />
          <Route path="/panel-chart-record/janta-morning.php" element={<JantaMorning />} />
          <Route path="/panel-chart-record/central-bombay.php" element={<CentralBombay />} />
          <Route path="/panel-chart-record/teen-patti.php" element={<TeenPatti />} />
          <Route path="/panel-chart-record/super-time.php" element={<SuperTime />} />
          <Route path="/panel-chart-record/bhagyalaxmi.php" element={<Bhagyalaxmi />} />
          <Route path="/panel-chart-record/kaali.php" element={<Kaali />} />
          <Route path="/panel-chart-record/main-mumbai-night.php" element={<MainMumbaiNight />} />
          <Route path="/panel-chart-record/super-matka.php" element={<SuperMatka />} />
          <Route path="/panel-chart-record/maharaj-time.php" element={<MaharajTime />} />
          <Route path="/panel-chart-record/maharaj-day.php" element={<MaharajDay />} />
          <Route path="/panel-chart-record/maharaj-night.php" element={<MaharajNight />} />
          <Route path="/panel-chart-record/bazar-day.php" element={<BazarDay />} />
          <Route path="/panel-chart-record/bazar-night.php" element={<BazarNight />} />
          <Route path="/panel-chart-record/rajdhani-day.php" element={<RajdhaniDay />} />
          <Route path="/panel-chart-record/puna-night.php" element={<PunaNight />} />
          <Route path="/panel-chart-record/time-night.php" element={<TimeNight />} />
          <Route path="/panel-chart-record/mohini.php" element={<Mohini />} />
          <Route path="/panel-chart-record/mumbai-star.php" element={<MumbaiStar />} />
          <Route path="/panel-chart-record/kalyan-bazar.php" element={<KalyanBazar />} />
          <Route path="/panel-chart-record/mahadevi.php" element={<Mahadevi />} />
          <Route path="/panel-chart-record/satyam-mumbai-evening.php" element={<SatyamMumbaiEvening />} />
          <Route path="/panel-chart-record/kalyan-gold.php" element={<KalyanGold />} />
          <Route path="/panel-chart-record/sita-night.php" element={<SitaNight />} />
          <Route path="/panel-chart-record/kamal-morning.php" element={<KamalMorning />} />
          <Route path="/panel-chart-record/kamal-day.php" element={<KamalDay />} />
          <Route path="/panel-chart-record/kamal-night.php" element={<KamalNight />} />
          <Route path="/panel-chart-record/rajdhani-sunday.php" element={<RajdhaniSunday />} />
          <Route path="/panel-chart-record/andhra-morning.php" element={<AndhraMorning />} />
          <Route path="/panel-chart-record/andhra-day.php" element={<AndhraDay />} />
          <Route path="/panel-chart-record/andhra-night.php" element={<AndhraNight />} />
          <Route path="/panel-chart-record/bombay-rajshree-day.php" element={<BombayRajshreeDay />} />
          <Route path="/panel-chart-record/bombay-rajshree-night.php" element={<BombayRajshreeNight />} />
          <Route path="/panel-chart-record/milan-bazar-morning.php" element={<MilanBazarMorning />} />
          <Route path="/panel-chart-record/milan-bazar-day.php" element={<MilanBazarDay />} />
          <Route path="/panel-chart-record/milan-bazar-night.php" element={<MilanBazarNight />} />
          <Route path="/panel-chart-record/mahadevi-morning.php" element={<MahadeviMorning />} />
          <Route path="/panel-chart-record/mahadevi-night.php" element={<MahadeviNight />} />
          <Route path="/panel-chart-record/rajyog-day.php" element={<RajyogDay />} />
          <Route path="/panel-chart-record/rajyog-night.php" element={<RajyogNight />} />
          <Route path="/panel-chart-record/gowa.php" element={<Gowa />} />
          <Route path="/panel-chart-record/royal-day.php" element={<RoyalDay />} />
          <Route path="/panel-chart-record/mumbai-star-main.php" element={<MumbaiStarMain />} />






          {/* Jodi Routes  */}

          <Route path="/jodi-chart-record/milan-morning.php" element={<JodiMilanMorning />} />
          <Route path="/jodi-chart-record/sridevi.php" element={<JodiSridevi />} />
          <Route path="/jodi-chart-record/kalyan-morning.php" element={<JodiKalyanMorning />} />
          <Route path="/jodi-chart-record/padmavati.php" element={<JodiPadmavati />} />
          <Route path="/jodi-chart-record/madhuri.php" element={<JodiMadhuri />} />
          <Route path="/jodi-chart-record/sridevi-morning.php" element={<JodiSrideviMorning />} />
          <Route path="/jodi-chart-record/maharani.php" element={<JodiMaharani />} />
          <Route path="/jodi-chart-record/prabhat.php" element={<JodiPrabhat />} />
          <Route path="/jodi-chart-record/karnataka-day.php" element={<JodiKarnatakDay />} />
          <Route path="/jodi-chart-record/time-bazar-morning.php" element={<JodiTimeBazarMorning />} />
          <Route path="/jodi-chart-record/time-bazar.php" element={<JodiTimeBazar />} />
          <Route path="/jodi-chart-record/diamond.php" element={<JodiDiamond />} />
          <Route path="/jodi-chart-record/tara-mumbai-day.php" element={<JodiTaraMumbaiDay />} />
          <Route path="/jodi-chart-record/main-kalyan.php" element={<JodiMainKalyan />} />
          <Route path="/jodi-chart-record/time-bazar-day.php" element={<JodiTimeBazarDay />} />
          <Route path="/jodi-chart-record/milan-day.php" element={<JodiMilanDay />} />
          <Route path="/jodi-chart-record/main-bazar-day.php" element={<JodiMainBazarDay />} />
          <Route path="/jodi-chart-record/puna-bazar.php" element={<JodiPunaBazar />} />
          <Route path="/jodi-chart-record/kalyan.php" element={<JodiKalyan />} />
          <Route path="/jodi-chart-record/sridevi-night.php" element={<JodiSrideviNight />} />
          <Route path="/jodi-chart-record/diamond-night.php" element={<JodiDiamondNight />} />
          <Route path="/jodi-chart-record/madhuri-night.php" element={<JodiMadhuriNight />} />
          <Route path="/jodi-chart-record/night-time-bazar.php" element={<JodiNightTimeBazar />} />
          <Route path="/jodi-chart-record/tara-mumbai-night.php" element={<JodiTaraMumbaiNight />} />
          <Route path="/jodi-chart-record/main-bazar-night.php" element={<JodiMainBazarNight />} />
          <Route path="/jodi-chart-record/milan-night.php" element={<JodiMilanNight />} />
          <Route path="/jodi-chart-record/rajdhani-night.php" element={<JodiRajdhaniNight />} />
          <Route path="/jodi-chart-record/main-bazar.php" element={<JodiMainBazar />} />
          <Route path="/jodi-chart-record/maharani-day.php" element={<JodiMaharaniDay />} />
          <Route path="/jodi-chart-record/sridevi-day.php" element={<JodiSrideviDay />} />
          <Route path="/jodi-chart-record/dhanshree.php" element={<JodiDhanashree />} />
          <Route path="/jodi-chart-record/kalyan-night.php" element={<JodiKalyanNight />} />
          <Route path="/jodi-chart-record/kalyan-pro.php" element={<JodiKalyanPro />} />
          <Route path="/jodi-chart-record/gujrat.php" element={<JodiGujrat />} />
          <Route path="/jodi-chart-record/old-main-mumbai.php" element={<JodiOldMainMumbai />} />
          <Route path="/jodi-chart-record/rajlaxmi.php" element={<JodiRajlaxmi />} />
          <Route path="/jodi-chart-record/madhur-morning.php" element={<JodiMadhurMorning />} />
          <Route path="/jodi-chart-record/madhur-day.php" element={<JodiMadhurDay />} />
          <Route path="/jodi-chart-record/madhur-night.php" element={<JodiMadhurNight />} />
          <Route path="/jodi-chart-record/ratan-khatri.php" element={<JodiRatanKhatri />} />
          <Route path="/jodi-chart-record/maharani-night.php" element={<JodiMaharaniNight />} />
          <Route path="/jodi-chart-record/padmavati-night.php" element={<JodiPadmavatiNight />} />
          <Route path="/jodi-chart-record/jay-shree-day.php" element={<JodiJayShreeDay />} />
          <Route path="/jodi-chart-record/sri-dhanalaxmi.php" element={<JodiSriDhanalaxmi />} />
          <Route path="/jodi-chart-record/dhanshree-day.php" element={<JodiDhanshreeDay />} />
          <Route path="/jodi-chart-record/main-bombay.php" element={<JodiMainBombay />} />
          <Route path="/jodi-chart-record/sunday-bazar.php" element={<JodiSundayBazar />} />
          <Route path="/jodi-chart-record/sunday-bazar-night.php" element={<JodiSundayBazarNight />} />
          <Route path="/jodi-chart-record/super-goa-day.php" element={<JodiSuperGoaDay />} />
          <Route path="/jodi-chart-record/puna-night-main.php" element={<JodiPunaNightMain />} />
          <Route path="/jodi-chart-record/khajana.php" element={<JodiKhajana />} />
          <Route path="/jodi-chart-record/sridevi-main.php" element={<JodiSrideviMain />} />
          <Route path="/jodi-chart-record/sridevi-main-night.php" element={<JodiSrideviMainNight />} />
          <Route path="/jodi-chart-record/supreme-morning.php" element={<JodiSupremeMorning />} />
          <Route path="/jodi-chart-record/supreme-day.php" element={<JodiSupremeDay />} />
          <Route path="/jodi-chart-record/supreme-night.php" element={<JodiSupremeNight />} />
          <Route path="/jodi-chart-record/gujrat-night.php" element={<JodiGujratNight />} />
          <Route path="/jodi-chart-record/dhanshree-night.php" element={<JodiDhanashreeNight />} />
          <Route path="/jodi-chart-record/bsf-bazar.php" element={<JodiBsfBazar />} />
          <Route path="/jodi-chart-record/sita-morning.php" element={<JodiSitaMorning />} />
          <Route path="/jodi-chart-record/kalyan-gold-night.php" element={<JodiKalyanGoldNight />} />
          <Route path="/jodi-chart-record/bombay-day.php" element={<JodiBombayDay />} />
          <Route path="/jodi-chart-record/srilakshmi.php" element={<JodiSrilakshmi />} />
          <Route path="/jodi-chart-record/milan-bazar.php" element={<JodiMilanBazar />} />
          <Route path="/jodi-chart-record/ratan-day.php" element={<JodiRatanDay />} />
          <Route path="/jodi-chart-record/chandan.php" element={<JodiChandan />} />
          <Route path="/jodi-chart-record/maharashtra.php" element={<JodiMaharashtra />} />
          <Route path="/jodi-chart-record/worli.php" element={<JodiWorli />} />
          <Route path="/jodi-chart-record/worli-mumbai-day.php" element={<JodiWorliMumbaiDay />} />
          <Route path="/jodi-chart-record/main-mumbai-rk.php" element={<JodiMainMumbaiRK />} />
          <Route path="/jodi-chart-record/worli-mumbai.php" element={<JodiWorliMumbai />} />
          <Route path="/jodi-chart-record/sita-day.php" element={<JodiSitaDay />} />
          <Route path="/jodi-chart-record/satyam-mumbai.php" element={<JodiSatyamMumbai />} />
          <Route path="/jodi-chart-record/country-bazar.php" element={<JodiCountryBazar />} />
          <Route path="/jodi-chart-record/rose-bazar-day.php" element={<JodiRoseBazarDay />} />
          <Route path="/jodi-chart-record/rose-bazar-night.php" element={<JodiRoseBazarNight />} />
          <Route path="/jodi-chart-record/janta-morning.php" element={<JodiJantaMorning />} />
          <Route path="/jodi-chart-record/central-bombay.php" element={<JodiCentralBombay />} />
          <Route path="/jodi-chart-record/teen-patti.php" element={<JodiTeenPatti />} />
          <Route path="/jodi-chart-record/super-time.php" element={<JodiSuperTime />} />
          <Route path="/jodi-chart-record/bhagyalaxmi.php" element={<JodiBhagyalaxmi />} />
          <Route path="/jodi-chart-record/kaali.php" element={<JodiKaali />} />
          <Route path="/jodi-chart-record/main-mumbai-night.php" element={<JodiMainMumbaiNight />} />
          <Route path="/jodi-chart-record/super-matka.php" element={<JodiSuperMatka />} />
          <Route path="/jodi-chart-record/maharaj-time.php" element={<JodiMaharajTime />} />
          <Route path="/jodi-chart-record/maharaj-day.php" element={<JodiMaharajDay />} />
          <Route path="/jodi-chart-record/maharaj-night.php" element={<JodiMaharajNight />} />
          <Route path="/jodi-chart-record/bazar-day.php" element={<JodiBazarDay />} />
          <Route path="/jodi-chart-record/bazar-night.php" element={<JodiBazarNight />} />
          <Route path="/jodi-chart-record/rajdhani-day.php" element={<JodiRajdhaniDay />} />
          <Route path="/jodi-chart-record/puna-night.php" element={<JodiPunaNight />} />
          <Route path="/jodi-chart-record/time-night.php" element={<JodiTimeNight />} />
          <Route path="/jodi-chart-record/mohini.php" element={<JodiMohini />} />
          <Route path="/jodi-chart-record/mumbai-star.php" element={<JodiMumbaiStar />} />
          <Route path="/jodi-chart-record/kalyan-bazar.php" element={<JodiKalyanBazar />} />
          <Route path="/jodi-chart-record/mahadevi.php" element={<JodiMahadevi />} />
          <Route path="/jodi-chart-record/satyam-mumbai-evening.php" element={<JodiSatyamMumbaiEvening />} />
          <Route path="/jodi-chart-record/kalyan-gold.php" element={<JodiKalyanGold />} />
          <Route path="/jodi-chart-record/sita-night.php" element={<JodiSitaNight />} />
          <Route path="/jodi-chart-record/kamal-morning.php" element={<JodiKamalMorning />} />
          <Route path="/jodi-chart-record/kamal-day.php" element={<JodiKamalDay />} />
          <Route path="/jodi-chart-record/kamal-night.php" element={<JodiKamalNight />} />
          <Route path="/jodi-chart-record/rajdhani-sunday.php" element={<JodiRajdhaniSunday />} />
          <Route path="/jodi-chart-record/andhra-morning.php" element={<JodiAndhraMorning />} />
          <Route path="/jodi-chart-record/andhra-day.php" element={<JodiAndhraDay />} />
          <Route path="/jodi-chart-record/andhra-night.php" element={<JodiAndhraNight />} />
          <Route path="/jodi-chart-record/bombay-rajshree-day.php" element={<JodiBombayRajshreeDay />} />
          <Route path="/jodi-chart-record/bombay-rajshree-night.php" element={<JodiBombayRajshreeNight />} />
          <Route path="/jodi-chart-record/milan-bazar-morning.php" element={<JodiMilanBazarMorning />} />
          <Route path="/jodi-chart-record/milan-bazar-day.php" element={<JodiMilanBazarDay />} />
          <Route path="/jodi-chart-record/milan-bazar-night.php" element={<JodiMilanBazarNight />} />
          <Route path="/jodi-chart-record/mahadevi-morning.php" element={<JodiMahadeviMorning />} />
          <Route path="/jodi-chart-record/mahadevi-night.php" element={<JodiMahadeviNight />} />
          <Route path="/jodi-chart-record/rajyog-day.php" element={<JodiRajyogDay />} />
          <Route path="/jodi-chart-record/rajyog-night.php" element={<JodiRajyogNight />} />
          <Route path="/jodi-chart-record/gowa.php" element={<JodiGowa />} />
          <Route path="/jodi-chart-record/royal-day.php" element={<JodiRoyalDay />} />
          <Route path="/jodi-chart-record/mumbai-star-main.php" element={<JodiMumbaiStarMain />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
