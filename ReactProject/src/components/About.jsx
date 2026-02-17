import React from "react";
import './About.css';

function About() {
  return (
    <section id="about">
      <h2><i className="fa-solid fa-address-card"></i> About</h2>
      
      <p className="Titel">Wie ben ik?</p>
      <p className="Paragraf">
        Ik ben geboren in Turkije en heb daar 22 jaar gewoond. Mijn middelbare schooltijd begon op een
      militaire school, waarna ik verschillende openbare scholen heb gevolgd.
      In 2020 begon ik met softwareontwikkeling aan de Çankaya Universiteit. Na een jaar vol universitaire ervaringen
      besloot ik naar Nederland te verhuizen.
      In 2022 kwam ik naar Nederland en volgde ik drie jaar lang taalcursussen. In 2025 begon ik opnieuw met een
      opleiding softwareontwikkeling aan het Deltion College.

      <p className="Titel">Wat is mijn hobby?</p>
      <ul>
        <li>Voetbal</li>
        <li>Zwemmen</li>
        <li>Boeken lezen</li>
        <li>Boksen</li>
        <li>Traditioneel Turkse boogschieten (ik ben instructeur)</li>
        <li>Hardlopen</li>
        <li>Films kijken</li>
      </ul>

      <p className="Paragraf">Mijn sportcarrière begon met voetbal. Vijf jaar lang speelde ik in het schoolteam. Toen we naar
      een nieuwe stad verhuisden, was er geen mogelijkheid om voetbal te spelen. Daarom begon ik met Ottomaans
      traditioneel boogschieten. Na een tijdje gaf ik les als instructeur in de boogschietcursus waar ik trainde. Toen
      we opnieuw verhuisden, moest ik helaas stoppen met boogschieten en begon ik met boksen. Drie jaar lang deed ik aan
      boksen, totdat ik naar Nederland verhuisde en daar ook mee moest stoppen. Op dit moment speel ik actief voetbal
      bij het dorpsteam van Ruinerwold.
      </p>
      </p>
    <p className="Titel">Mijn vaardigheden</p>
    <ul>
      <li>HTML & CSS</li>
      <li>JavaScript</li>
      <li>Python</li>
      <li>React</li>
      <li>Probleemoplossend denken</li>
      <li>Teamwerk</li>
      <li>Communicatie (Ik spreek Turks, Engels en Nederlands)</li>
      <li>Creativiteit</li>

    </ul>

    </section>
  );
}

export default About;
