export interface FaqEntry {
  title: string;
  /** HTML body. Will be rendered with `set:html`. Keep markup conservative. */
  body: string;
  defaultOpen?: boolean;
}

export interface FaqLetter {
  letter: string;
  id: string;
  entries: FaqEntry[];
}

const tc = "color: var(--color-terracotta);";

export const faqData: FaqLetter[] = [
  {
    letter: "A",
    id: "a",
    entries: [
      {
        title: "Adresse",
        defaultOpen: true,
        body: `
          <p>Hvis adressen bruges i elektronisk vejvisning:</p>
          <p><strong>Santa Libera-regionen 45</strong><br />14053 Canelli — Asti (AT), Italien</p>
          <p>Vores nabo er <a href="https://vinibocchino.it/" target="_blank" rel="noopener noreferrer" style="${tc}">vinibocchino.it</a> — de hjælper gerne med at finde vores hus.</p>
        `,
      },
      {
        title: "Affald",
        body: `
          <p>Affald skal sorteres i papir, plastic- og køkkenaffald. Der skal bruges poser der kan lukkes.</p>
          <p><strong>Mandag og torsdag</strong> afhentes køkkenaffald, hvis poserne sættes op ved vejen.</p>
          <p><strong>Onsdag</strong> er det plastic.</p>
          <p><strong>Torsdag</strong> er det papir.</p>
          <p>Glasflasker og andet glasaffald skal i glascontaineren — der er flere af dem rundt i byen.</p>
        `,
      },
      {
        title: "Afrejse",
        body: `
          <p>Tjekliste når I forlader huset:</p>
          <ul>
            <li>Tøm køleskab og fryser, tør over med en klud. <strong>Sluk IKKE.</strong></li>
            <li>Aftør alle flader i køkkenet.</li>
            <li>Ryd op inde og ude.</li>
            <li>Vask op og sæt alt på plads — på hylder, i skabe og skuffer.</li>
            <li>Alt brugt linned, viskestykker og håndklæder lægges i baggangen ved vaskemaskinen.</li>
            <li>Grillen rengøres, hvis I har brugt den.</li>
            <li>Tøm opvaskemaskinen.</li>
            <li>Aske fjernes fra pizzaovnen, hvis I har brugt den.</li>
            <li>Sæt cyklerne på plads — husk at betale <strong>30 euro pr. dag</strong> I har brugt dem.</li>
            <li><strong>Skodder:</strong> Husk at lukke alle skodder før huset forlades.</li>
          </ul>
          <p>Vi håber, I passer på vores hus, som var det jeres eget. Skulle der ske skader indenfor eller udenfor i løbet af jeres ophold, beder vi jer meddele det til <strong>Lars</strong> eller <strong>Hans</strong> på:</p>
          <p>E-mail: <a href="mailto:Lbejendomme@gmail.com" style="${tc}">Lbejendomme@gmail.com</a> eller <a href="mailto:info@flytteboxen.dk" style="${tc}">info@flytteboxen.dk</a><br />Mobil: <strong>28 70 87 81</strong> eller <strong>30 95 18 48</strong></p>
          <p>Er der ikke registreret nogen skader på ejendommen eller på ting, tilbageføres jeres depositum indenfor 2 uger.</p>
        `,
      },
      {
        title: "Ambulance",
        body: `<p><strong>112</strong></p>`,
      },
      {
        title: "Apotek",
        body: `<p>I Canelli på det store torv finder I apoteket.</p>`,
      },
    ],
  },
  {
    letter: "C",
    id: "c",
    entries: [
      {
        title: "Caféer",
        body: `
          <p><strong>Follia</strong> — den første café, når I kommer ind i byen fra huset. Den ligger til venstre i en lille gård med masser af stole udenfor. Supergode til kaffe, croissanter, frokost og et godt glas spumante/vin/øl om eftermiddagen. Der er mulighed for at sidde inde og ude. Det er borgmesteren, der ofte står i køkkenet og laver lokal mad — typiske håndværkere kommer til frokost, da det er billig og simpel mad. I samme café er den lille lokale købmand, hvor man kan købe dagligvarer som frisk pasta, skinker, salat, mælk, mel, vand og friskbagt brød.</p>
          <p><strong>Faccio</strong> — Café/Isbaren ligger længere nede på det store torv og bruges som café. Åbent næsten hver dag med en ugentlig fridag.</p>
          <p><strong>La Bottega di Camilla</strong> — Pizzeriaet er også café fra morgenstunden. Lukket hele tirsdagen. Her kan I også nyde en pasta til frokost. Take-away pizza fredag, lørdag og søndag.</p>
          <p>Alle stederne kan I nyde cappuccino, americano eller espresso sammen med en nybagt croissant. I Italien er croissanten typisk fyldt med abrikosmarmelade, Nutella, creme — eller naturel.</p>
          <p>Om eftermiddagen kan I nyde en dejlig cocktail eller vin som aperitivo med små hapsere til.</p>
        `,
      },
      {
        title: "Cykel & cykeludlejning",
        body: `
          <p>I huset finder I <strong>2 mountainbikes og 2 hjelme</strong>. Pas på dem og rengør dem efter brug. Der betales <strong>30 euro pr. dag</strong>, man bruger dem.</p>
          <p>I Canelli kan I også leje cykler:</p>
          <ul>
            <li><strong>Ebiking</strong> (e-bikes) — Via Giovanni Battista Giuliani 48, 14053 Canelli</li>
            <li><strong>D.O.C Bike Di Leardi</strong> (alm. cykler og racercykler) — Viale Indipendenza 25, 14053 Canelli</li>
          </ul>
        `,
      },
    ],
  },
  {
    letter: "F",
    id: "f",
    entries: [
      {
        title: "Fartkontrol",
        body: `<p>Der er rigtig mange kameraer i området, men det er smart indrettet — på skilte bliver man løbende advaret 200–1000 m før kameraet kommer. Hold godt øje med dem. Det er ret dyrt, kan koste fra 150 euro og opefter.</p>`,
      },
      {
        title: "Forretninger i nærområdet",
        body: `
          <p><strong>Bager:</strong> Der findes flere hyggelige bagerier i Canelli. Husk at brødet i Italien er bedst samme dag.</p>
          <p>Til små lækre kager og god kaffe anbefaler vi <strong>Pasticceria Sergio Bosca</strong>, Piazza Amedeo d'Aosta 3, Canelli.</p>
        `,
      },
    ],
  },
  {
    letter: "H",
    id: "h",
    entries: [
      {
        title: "Hospital",
        body: `
          <p>Det nærmeste hospital ligger i Nizza Monferrato — ca. 15 km fra Casa Santa Libera.</p>
          <p><strong>Ospedale Santo Spirito</strong><br />P.za Giuseppe Garibaldi 16, 14049 Nizza Monferrato<br />Tlf.: <a href="tel:+3901417821" style="${tc}">+39 0141 7821</a></p>
        `,
      },
    ],
  },
  {
    letter: "L",
    id: "l",
    entries: [
      {
        title: "Læge / Dottore",
        body: `
          <p><strong>Dr. Ezio Robino</strong>, Via San Giuseppe<br />Tlf.: <a href="tel:+393398587966" style="${tc}">+39 339 858 7966</a></p>
          <p><strong>Konsultationstider:</strong></p>
          <ul>
            <li><em>Cassinasco:</em> mandag, onsdag, fredag kl. 08.30–10.00</li>
            <li><em>Canelli</em>, Via Riccadonna Ottavio 4: mandag, onsdag, fredag kl. 17–19 og tirsdag og torsdag kl. 08.30–10.00</li>
          </ul>
        `,
      },
    ],
  },
  {
    letter: "M",
    id: "m",
    entries: [
      {
        title: "Markeder",
        body: `
          <p><strong>Canelli</strong> — marked tirsdag og fredag formiddag til kl. 12.30. Masser af lækker mad: grøntsager, frugt, slagtervarer og oste. Ligeledes masser af boder med tøj, sko og tasker.</p>
          <p><strong>Acqui Terme</strong> — marked tirsdag og fredag, primært mad, tøj og tasker. Ikke et typisk turistmarked — italienerne handler her. Markedet er i centrum, på gågaden og på flere torve. Kun om formiddagen.</p>
          <p><strong>Antikmarkeder:</strong></p>
          <ul>
            <li><strong>Acqui Terme</strong> — fjerde søndag i måneden, på hovedgaden Corso Bagni. Et mindre marked.</li>
            <li><strong>Nizza Monferrato</strong> — antikmarked med ca. 300 boder, tredje søndag i måneden, på Piazza Giuseppe Garibaldi. Mange brugbare ting til billige penge — her kan I bruge en del tid.</li>
          </ul>
        `,
      },
      {
        title: "Myg",
        body: `<p><strong>Husk altid myggespray.</strong></p>`,
      },
    ],
  },
  {
    letter: "P",
    id: "p",
    entries: [
      {
        title: "Parasoller",
        body: `<p>Husk at slå parasollerne sammen før natten og når huset forlades. Det kan blæse en del.</p>`,
      },
      {
        title: "Pizzaovn",
        body: `
          <p>Casa Santa Libera har sin egen pizzaovn — der er ikke noget, der slår egne pizzaer.</p>
          <p>Frisk pizzadej (det gør det noget nemmere) kan I købe i <strong>SPAR</strong> i Canelli, <strong>Bennet</strong> i Acqui Terme eller <strong>Il Gigante</strong> i Nizza.</p>
          <p>Der er masser af træ, som I skal tænde op med <strong>1 time før</strong> pizzaovnen bruges.</p>
        `,
      },
      {
        title: "Pizzarestauranter",
        body: `
          <p>I <strong>Cassinasco</strong> ligger der en lokal pizzarestaurant på torvet. Her kan I spise ude om sommeren — der er også mulighed for take-away. De laver udmærkede pizzaer og pasta. Børn er meget velkomne. Husk at booke bord, der er ofte udsolgt.</p>
          <p>Vores favorit-pizzarestaurant ligger lige uden for Canelli:</p>
          <p><strong>Cascina Vecchia</strong>, Fraz. Case Vecchie 1, 14042 Calamandrana<br />Tlf.: <a href="tel:+390141180 8115" style="${tc}">+39 0141 180 8115</a></p>
          <p>Fantastiske pizzaer, mange pladser — især udenfor som er superhyggeligt om aftenen. Masser af stemning og maden kommer hurtigt. Prøv deres favoritter med burrata. Husk myggespray.</p>
        `,
      },
      {
        title: "Politi",
        body: `<p>Canelli — tlf.: <a href="tel:+390141821200" style="${tc}">+39 0141 821 200</a></p>`,
      },
    ],
  },
  {
    letter: "R",
    id: "r",
    entries: [
      {
        title: "Restauranter",
        body: `
          <p><strong>I Canelli:</strong></p>
          <ul>
            <li><strong>Bar Roma</strong> — ligger ved rundkørslen, ikke det mest charmerende sted, men gudedejlige cocktails, god vin og masser af Martini Rosso (områdets specialitet) samt Spumante.</li>
            <li><strong>Ristorante Enoteca di Canelli — Casa Crippa</strong>, Corso della Liberta 65 · tlf. <a href="tel:+390141832182" style="${tc}">+39 0141 832 182</a> (lækker mad med moderne tvist).</li>
            <li><strong>San Marco Ristorante</strong>, Via Alba 136 · tlf. <a href="tel:+390141823544" style="${tc}">+39 0141 823 544</a> (tidligere Michelin).</li>
            <li><strong>Osteria Dei Meravigliati</strong>, Via Giovanni Battista Giuliani · tlf. <a href="tel:+393922224171" style="${tc}">+39 392 222 4171</a> (mulighed for at sidde udenfor om sommeren, lækker fisk).</li>
            <li><strong>Ristorante Civico15</strong>, Piazzale San Leonardo 10, Centro Storico · tlf. <a href="tel:+393294379547" style="${tc}">+39 329 437 9547</a> (gourmet italiensk mad med moderne udtryk — ikke typisk piemontesisk. Mulighed for at sidde ude. Hils fra Niels &amp; Jeanette).</li>
          </ul>
          <p><strong>I Cassinasco:</strong></p>
          <ul>
            <li><strong>Follia</strong> — lokal bar og købmand med en lille gård, hvor man kan sidde og få morgenkaffe og croissant.</li>
          </ul>
          <p><strong>Lidt længere væk:</strong></p>
          <ul>
            <li><strong>Ristorante La Stazione</strong>, Piazzale G. Manzo 6, Santo Stefano Belbo · tlf. <a href="tel:+390141844233" style="${tc}">+39 0141 844 233</a> (typisk italiensk mad for området, altid super kvalitet, mulighed for at sidde ude).</li>
            <li><strong>Ape Wine Bar og Restaurant</strong>, Via XX Settembre 4, Santo Stefano Belbo · tlf. <a href="tel:+390141844218" style="${tc}">+39 0141 844 218</a> (lækker italiensk mad med fisk og salat, moderne ung stil, mulighed for at sidde ude).</li>
            <li><strong>Ristorante Belbo da Bardon</strong>, Via Valle Asinari 25, San Marzano Oliveto · tlf. <a href="tel:+390141831340" style="${tc}">+39 0141 831 340</a> (meget populær, typisk italiensk med masser af lækkert kød, en af Italiens største vinkældre, skøn terrasse).</li>
            <li><strong>Le Due Lanterne</strong>, Piazza Giuseppe Garibaldi 52, Nizza Monferrato · tlf. <a href="tel:+390141702480" style="${tc}">+39 0141 702 480</a> (populær restaurant, typisk for området, høj service og rimelige priser).</li>
            <li><strong>Restaurant I Caffi</strong>, Acqui Terme · tlf. <a href="tel:+390144325206" style="${tc}">+39 0144 325 206</a> (eksklusiv mad i flotte omgivelser — ikke mulighed for at sidde ude).</li>
            <li><strong>Ristorante Enoteca La Curia</strong>, Acqui Terme · tlf. <a href="tel:+390144356049" style="${tc}">+39 0144 356 049</a> (skøn vinbar før middagen, gårdhave på varme dage — meget populært, bestil i god tid).</li>
            <li><strong>Borghetto La Radice</strong>, Reg. Caramello Piandonne 23, Roccaverano · tlf. <a href="tel:+390144722311" style="${tc}">+39 0144 722 311</a> (super sted ca. 45 min. fra huset — husk at bestille bord).</li>
          </ul>
        `,
      },
    ],
  },
  {
    letter: "S",
    id: "s",
    entries: [
      {
        title: "Skadestue / Ospedale",
        body: `
          <ul>
            <li><strong>Nizza Monferrato</strong> — Piazza Garibaldi 17, 14049 Nizza Monferrato (AT)</li>
            <li><strong>Acqui Terme</strong> — Via Gatebenefratelli 1, 15011 Acqui Terme (AL) · tlf. <a href="tel:+390144777111" style="${tc}">+39 0144 777 111</a></li>
            <li><strong>Asti</strong> — Corso Dante Alighieri 202, 14100 Asti (AT) · tlf. <a href="tel:+390141481111" style="${tc}">+39 0141 481 111</a></li>
          </ul>
        `,
      },
      {
        title: "Supermarkeder / Købmænd",
        body: `
          <p>I <strong>Canelli</strong> er der mange supermarkeder: Lidl, Eurospin, Gulliver. Vi anbefaler <strong>EuroSpar</strong>, hvor der både er slagter, bager og delikatesseafdeling.</p>
          <p>Vil I have en stor oplevelse med et noget større udvalg, skal turen gå til <strong>Nizza</strong>, hvor <strong>Il Gigante</strong> ligger i starten af byen — Strada Canelli 10, 14049 Nizza.</p>
          <p>Alternativt i <strong>Acqui Terme</strong>, hvor <strong>Bennet</strong> ligger. Det er toplækkert med masser af lækkerier.</p>
        `,
      },
    ],
  },
  {
    letter: "T",
    id: "t",
    entries: [
      {
        title: "Temperatur",
        body: `
          <p>Huset er varmt i juni, juli og august, så sørg for at holde en rar temperatur.</p>
          <p>Indenfor åbner vi vinduerne om natten — men husk at sætte noget fast ved dørene, så de ikke smækker. Vi laver masser af gennemtræk. Behold skodderne på om aftenen.</p>
          <p>Om dagen holder vi alle døre og vinduer lukket. I underetagen er skodderne lukkede.</p>
        `,
      },
    ],
  },
  {
    letter: "V",
    id: "v",
    entries: [
      {
        title: "Vinproducenter",
        body: `
          <p><strong>Beppe Bocchino — vores nabo</strong><br />Santa Libera-regionen 43, 14053 Canelli — Asti (AT)<br />Tlf.: <a href="tel:+390141831144" style="${tc}">+39 0141 831 144</a> · Mobil: <a href="tel:+393492229503" style="${tc}">+39 349 222 95 03</a><br />E-mail: <a href="mailto:info@vinibocchino.it" style="${tc}">info@vinibocchino.it</a> · <a href="https://vinibocchino.it/" target="_blank" rel="noopener noreferrer" style="${tc}">vinibocchino.it</a></p>
          <p>Det er vores nabo — utrolig søde mennesker. Det er et must at besøge dem.</p>
          <p><strong>Contratto</strong> — Spumante-producent i Canelli med en helt fantastisk kælder, hvor der ligger over 1.000.000 flasker. Bestil endelig en rundvisning.<br />Via Giovanni Battista Giuliani 56, 14053 Canelli<br />Tlf.: <a href="tel:+390141823349" style="${tc}">+39 0141 823 349</a></p>
          <p><strong>Borgo Maragliano</strong> — en superdejlig spumante-producent i Loazzolo, tæt på Casa Santa Libera. Silvia er ejer og værtinde — hun lever og ånder for stedet. Rig lejlighed til at købe gode flasker med hjem.</p>
          <p><strong>Cascina Cerutti</strong> — på bakken på vej ned til Canelli.<br />Via Canelli 205, 14050 Cassinasco<br />Tlf.: <a href="tel:+390141851286" style="${tc}">+39 0141 851 286</a></p>
          <p><strong>Forteto della Luja</strong> — den eneste producent, der ikke bruger maskiner til indsamling af druerne, men heste.<br />Regione Candelette 4, 14051 Loazzolo<br />Tlf.: <a href="tel:+390141831596" style="${tc}">+39 0141 831 596</a></p>
        `,
      },
    ],
  },
];
