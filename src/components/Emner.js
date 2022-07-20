import Article from "./Article"

let article3 = {
    id: 3,
    header: "Skolebørns personlige data skal også være sikre i skyen",
    content: [
        `Datatilsynet nedlagde pr. d. 14/7-2022 et forbud for Helsingør Kommune mod at benytte sig af læringsværktøjet Google Workspace i skolerne. Det var resultatet af, at kommunens aftale med Google tillod, at elevernes data blev overført til datacentre udenfor EU. Mange ser dette som et tilbageslag for digitalisering i skolerne, der nu skal arbejde hårdt for at få rettet op på dette compliance problem, men det er vigtigt at huske på, at dette i høj grad er i elevernes bedste interesse.`,
        `Ingen elever skal i Folkeskolen tvinges til at udlevere deres personlige data til Google eller producenter af andre læringsværktøjer, der ikke er GDPR compliant. Retten til privatliv er en Grundlovssikret ret, og man skal huske på, at brugen af disse læringsværktøjer sjældent er et valg for eleven eller forældrene selv. Derfor er det strengt nødvendigt, at elevens data sikres bedst muligt for amerikanske (og andre) myndigheders lange fingre.`,
        `Digitale læringsværktøjer er tvunget nedover lærere og elever, der ikke altid selv har bedt om det på trods af manglende bevis for dets læringseffektivitet. Altså må den eneste løsning være, at elevernes data enten gemmes lokalt på skolens enheder, eller at elevernes data holder sig indenfor EU’s grænser, hvor GDPR lovgivning kan håndhæves. Hvis dette ikke er en mulighed, må man endelig huske på, at kladdehæfter og blyanter længe har fungeret upåklageligt i Folkeskolen. `,
    ],
    author: "Anton Irvold",
    time: new Date(2022, 6, 18),
}

let article1 = {
    id: 1,
    header: "Vi bliver nødt til at snakke om unges mentale sundhed",
    content: 
    [`Coronaepidemien påvirker ikke kun vores fysiske sundhed, men også i høj grad vores mentale sundhed. Unge, der er vant til at være sammen med deres venner på skolen og studiet, til fritidsaktiviteter, i foreninger, i fitness, osv. bliver tvunget til at blive hjemme og ikke ses med andre end deres nærmeste.`,
    `Dårligt mentalt helbred, depression og ensomhed har i en række år været stigende, og derfor har regeringen i deres nye finanslov lovet gratis psykologhjælp til unge, der lider af angst og depression – men en ny lockdown rammer alle unge og vil sætte længerevarende præg på mange. Derfor er det nødvendigt at udvide denne ordning.`,
    `Den mørke vinterperiode og en ny lockdown er en evident dårlig cocktail for unges mentale sundhed. Vi unge har omlagt hele vores liv for at beskytte de sårbare, men det har også påvirket os – og derfor skal I nu gøre noget for at hjælpe os.`],
    author: "Anton Irvold",
    time: new Date(2020, 11, 19),
    publisher: "Berlingske",
    link: "https://www.berlingske.dk/laesere/det-er-slemt-nok-med-regneevnerne-men-hvor-mange-boern-i-4-klasse-kan-i",
}

let references2 = [
    {
        author: "Jacobson, M.Z.",
        year: "2019",
        title: "Evaluation of Nuclear Power as a Proposed Solution to Global Warming, Air Pollution, and Energy Security",
        link: "https://web.stanford.edu/group/efmh/jacobson/Articles/I/NuclearVsWWS.pdf",
    },
    {
        author: "Breyer og Fasihi",
        year: "2020",
        title: "Baseload electricity and hydrogen supply based on hybrid PV-wind power plants",
        link: "https://www.sciencedirect.com/science/article/pii/S0959652619333360",
    },
    {
        author: "Diesendorf M.",
        year: "2011",
        title: "Renewable energy can provide baseload power - here’s how",
        link: "https://theconversation.com/renewable-energy-can-provide-baseload-power-heres-how-2221",
    },
    {
        author: "Aengenheyster M., et al.",
        year: "2018",
        title: "The point of no return for climate action: effects of climate uncertainty and risk tolerance",
        link: "https://esd.copernicus.org/articles/9/1085/2018/",
    },
    {
        author: "Rosenqvist, E.B.",
        year: "2022",
        title: "Kæmpe klimaaftale i Esbjerg kan booste dansk økonomi, men byder også på store udfordringer",
        link: "https://www.dr.dk/nyheder/penge/kaempe-klimaaftale-i-esbjerg-kan-booste-dansk-oekonomi-men-byder-ogsaa-paa-store",
    },
    {
        author: "Bjørn-Hansen, S.",
        year: "U.d.",
        title: "Atomkraft, ja tak?",
        link: "https://www.dr.dk/viden/webfeature/atomkraft-ja-nej",
    },
    {
        author: "Persson, C.P.",
        year: "2018",
        title: "Kan atomkraft redde verden?",
        link: "https://videnskab.dk/kultur-samfund/kan-atomkraft-redde-verden",
    },
]

let article2 = {
    id: 2,
    header: "Atomkraft er ikke en mirakelløsning på klimaspørgsmålet",
    content: 
    [`Frygten i befolkningen, der associerer atomkraft med emner som Tjernobyl- og Fukushima ulykkerne, atomvåben og Kold Krigstid, og radioaktivt affald, forklares ofte som værende den primære årsag til at de ”mirakuløse” atomkraftværker endnu ikke dominerer verdens energiforsyning. Det høres ofte, at kernekraft er en sikker, ren og billig energikilde, men er der i virkeligheden teknologiske begrænsninger, der gør at atomkraftværker ikke giver mening at prioritere for Danmark i energimæssigt knebne tider?`,
    `Jovist udleder atomkraftværker ikke CO2 ved produktion af strøm. Derfor kan det ifølge mange give mening at prioritere atomkraft, som en del af ”klimakampen”. Det skriver artiklen ”Kan atomkraft redde verden?” fra videnskab.dk også gennem et citat fra professor Jens Hesselbjerg Hansen fra Niels Bohr Instituttet: ”Kigger man udelukkende på atomkraft fra et klimaperspektiv, er det ikke svært at fælde en dom – isoleret set er atomkraft godt for klimaet […]”. Derudover er der også den CO2-ækvivalente udledning af vanddamp og varme som et atomkraftværk producerer under betjening, samt CO2-udledningen ved udvinding og raffinering af atombrændsel. Professor i miljøingeniørvidenskab, Mark Z. Jacobson fra Stanford University, skriver mere specifikt i et uddrag fra bogen ”100% Clean, Renewable Energy and Storage for Everything”: ”Even existing plants emit due to the continuous mining and refining of uranium needed for the plant. However, all plants also emit 4.4 g-CO2e/kWh from the water vapor and heat they release. This contrasts with solar panels and wind turbines, which reduce heat or water vapor fluxes to the air by about 2.2 g-CO2e/kWh for a net difference from this factor alone of 6.6 g-CO2e/kWh.”`,
    `Et andet af de mest prominente argumenter for indførslen af atomkraft i Danmark, er at det kan levere strøm til basisbelastningen på elnettet. Det nævner videnskab.dk også i den førnævnte artikel: ”Strømmen kan reguleres i modsætning til eksempelvis vind og solenergi, som er afhængig af, at vinden blæser, eller af at solen skinner. El-produktion fra atomkraft kan dermed følge efterspørgslen på elektricitet.” Dette er utvivlsomt den største svaghed ved vind- og solenergi, som der mangler en klar løsning på. Dog er der en række faktorer, som Mark Z. Jacobson kommer ind på i sin bog. Den første er prisen på eksempelvis vindenergi sammenlignet med atomkraft: ”[…] a new nuclear power plant costs 2.3 to 7.4 times that of an onshore wind farm (or utility PV farm)”. Derfor ville man kunne have et stort overskud af elkapacitet ved brug af vind- og solenergi, hvis man investerede den samme mængde penge. Den anden faktor er, at man kan bruge nogle af de penge man sparer på at bygge vind- og solenergi på at investere i batterifarme og ”Power-to-X” teknologier. Dette kan hjælpe med at gøre vind og solenergi til en mere pålidelig energikilde, som ikke er utilregnelig. Fasihi og Breyer skriver i deres videnskabelige artikel “Baseload electricity and hydrogen supply based on hybrid PV-wind power plants” følgende: ”The hourly analyses show that hybrid PV-wind [sol og vind] power plants can provide BLEL [baseload electricity] at affordable costs in most regions around the world, if coupled with proper daily and long-term balancing technologies.”. Mark Diesendorf, professor ved Institute of Environmental Studies på UNSW, skriver desuden om en række tiltag man kan gøre for at bæredygtige energikilder kan imødekomme basisbelastnings efterspørgslen i artiklen “Renewable energy can provide baseload power - here’s how”: ”The baseload issue can be solved by reducing baseload demand, having some renewable energy sources that can supply baseload power and increasing the proportion of flexible peakload plant in the generating mix.” Altså har han de følgende tre argumenter:
    1.	Sænke efterspørgslen af basisbelastningen på strøm og udligne efterspørgslen om natten og dagen
    2.	Gøre brug af vand- og geotermisk energi hvor det er geografisk muligt, og derudover bioelektricitet til at generere strøm når vind- og solenergi ikke er nok
    3.	Udnytte et fælles energinet over større geografiske områder. Det gør vind- og solenergi mere forudsigeligt og mindre svingende`,
    `Alt dette er de udvalgte kilders syn på atomkraft sammenlignet med bæredygtige energikilder. Ud fra dette vil jeg argumentere for, hvorfor vi ikke skal bruge tid og penge på at bygge atomkraftværker i Danmark.`,    
    `Den første årsag er ret åbenlys. Der er ud fra ovenstående referat af kilderne, store teknologiske udfordringer og begrænsninger med atomkraft, som ofte ikke bliver nævnt i debatten. Debatten ender tit om patosladede ekstremer, der på den ene side bruger Tjernobyl som et radioaktivt fugleskræmsel, og på den anden side bruger eksempelvis Frankrigs store succes med atomkraft. Når ”Atomkraft - ja tak” siden bliver konfronteret med de teknologiske udfordringer ved atomkraft, ender det ofte med en håbefuld tanke om nye Generation IV reaktorer som eksempelvis flydende salt reaktorer. Disse kan i teorien gøre det billigere og mere klimavenligt at producere atomkraft. Danske virksomheder som Seaborg og Copenhagen Atomics arbejder på at realisere denne teknologi. Det kan blandt andet gøre atomkraft mere klimavenlig, ved at det kræver mindre brændsel og dermed mindre udledning af CO2 under raffinering og udvinding. De kan også benytte atomaffald fra andre reaktorer som brændsel. Der er også mindre CO2 ækvivalent opvarmning ved udledning af damp og varme, ved brug af Generation IV reaktorer som smeltet saltreaktorer - og der er ikke problemet om variabel strømproduktion som ved vind- og solenergi.`,
    `Problemet med Generation IV reaktorer, er at ”klimakampen” har en meget klar tidshorisont, og det giver ikke mening at vente med at videnskaben kommer med et magisk, mirakuløst løsningsforslag som eksempelvis kunne være Generation IV reaktorer - i modsætning til hvad konsensus er i den siddende regering om såkaldte ”hockeystavsløsninger”. De nyeste atomkraftværker har taget mellem 10 og 20 år fra planlægning til de bliver tændt. Det er ambitiøst nok at tro vi i et land, der, desværre, ikke har kompetencerne og den nødvendige viden til at bygge det første atomkraftværk kan holde os indenfor denne tidsramme, men sagen er den at selv hvis vi når denne tidsramme, er det stadig for sent. Parisaftalen har et mål om at holde os under allerhøjest 2 graders global opvarmning i 2100. Med et fald på 5% årligt i CO2 udledning skulle vi være i gang allerede i år. Derfor kan det kun gå for langsomt. Vi kan ikke vente med at videnskaben kommer med Generation IV reaktorer. Jovist ville disse muligvis løse mange af de teknologiske og økonomiske ulemper der er ved atomkraft sammenlignet med vind- og solenergi, men hvis disse først er klar i 2030, og der derefter går 10 til 20 år for at det kan blive implementeret i en ordentlig skala, er vi langt bag tidsplanen. Til sammenligning vil de europæiske lande omkring Nordsøen i 2030 allerede producere 65 GW elektricitet fra havvindmøller, hvilket svarer til over en firedobling af den strøm, der bliver produceret af havvindmøller i Nordsøen i dag. Det er disse aftaler, der er realistiske, ikke nye uafprøvede atomkraftværker, der først muligvis kunne være klar fra 2040. Vindmøller er teknologi som danske virksomheder er specialiserede i, og en investering i disse danske virksomheder giver også langt mere mening for samfundsøkonomien, end at bruge de 1000 mia. kr denne havvindmølle-aftale har af budget, på udenlandske virksomheder, der har den nødvendige viden om atomkraft.`,
    `Min kritik af atomkraft må endelig ikke forstås som om at kul-, olie-, og gaskraftværker er at foretrække over atomkraftværker. Det er en komplet misforstået holdning. Indtil nu, har alle mine sammenligninger været med primært vind- og solenergi, men også vand- og geotermiskenergi og biobrændsel. Det er min holdning, at debatten om atomkraft kontra fossilebrændstoffer er udkørt i den offentlige debat, og at ingen af argumenterne for at foretrække fossilebrændstoffer over atomkraft holder. Disse argumenter er nemlig primært omkring områderne atomaffald og atomulykker. Alligevel vil jeg gerne adressere disse argumenter, men i en kontekst af atomkraft kontra vind- og solenergi. Atomaffald er i høj grad et mindre problem, en mange antager, og størstedelen af lande, der gør brug af atomkraft i dag, har langtidsholdbare løsninger til opbevaring af atomaffald - det gælder fx Finland. Det er af min overbevisning, at hvis Danmark skulle indføre atomkraft, ville det også være muligt at finde en realistisk løsning på spørgsmålet om atomaffald. Det næste spørgsmål er ulykker på atomkraftværker. Moderne reaktorer som vi ville skulle bygge i Danmark, er utrolig sikre og på ingen måde at sammenligne med Tjernobyl eller Fukushima. Dog, selvom ulykker på atomkraftværker ikke er et stort problem i et stabilt land som Danmark, er det værd at overveje konsekvenserne af det ansvar det kræver at opretholde et atomkraftværk. Der er i min optik tre primære trusler angående sikkerheden af atomkraftværker. Den første er naturkatastrofer. Dem er vi heldigvis meget sikre mod i Danmark, og det er af min overbevisning at et atomkraftværk i Danmark ville være fuldstændig sikret mod de relativt små naturlige begivenheder, der er i Danmark. Den næste er terrorisme. Atomkraftværker udgør et stort og åbenlyst terrormål. Derfor er det nødvendigt at bruge mange penge på sikkerheden ved et atomkraftværk samt opbevaringen af atomaffald i Danmark. Skulle en terrorgruppe vælge at målrette sig mod et atomkraftværk på dansk grund, er det muligt at det vil have meget ødelæggende konsekvenser for et lille og tætbebygget land som Danmark. Den tredje er krig. Selvom krig i Danmark trods alt er meget usandsynlig, skal man ikke kigge langt væk for at se, hvor stort et ansvar et atomkraftværk er i en krigssituation. Det er en stor byrde for Ukraine at opretholde sikkerheden ved deres atomkraftværker under krigen, og man koncentrerer desuden meget af energiproduktionen på et meget lille geografisk område. Derfor er det vigtigt at opretholde sikkerheden både på grund af risikoen for radioaktivt udslip samt for at sikre strøm til store dele af landet. Vind- og solenergi derimod ville ikke udgøre den samme forsvars- og sikkerhedsmæssige byrde - både i tilfælde af krig, terrorisme og naturkatastrofer.`,
    `Spørgsmålet om basisforsyning er det største argument mod brugen af vind- og solenergi fremfor atomkraft. Vind- og solenergi afhænger selvfølgelig af henholdsvis vind og sol, men i en tid hvor vi har et utrolig veludbygget elnet i Europa, er det et klart mindre problem end man skulle tro. Som nævnt i referatet af Mark Diesendorfs artikel, er der mange veje der sammen kan føre til at bæredygtige energikilder kan dække basisforsyningen med høj pålidelighed. Selvfølgelig er den nuværende basisforsyning af primært fossilebrændstoffer et problem. Derfor kræver det at vi investerer i ”Power to X” løsninger der kan lagre strømmen fra havvindmøller og solcelleparker i eksempelvis hydrogen, eller at vi investerer i batteriteknologi, der kan udligne forsyningen af strøm fra vind- og sol når det blæser og når det ikke blæser. Forskellen er, at det er teknologi der eksisterer i dag, og kunne indføres hurtigt.`,
    `Gør alt dette så atomkraft til en ligegyldig spiller i klimadebatten? I Danmark - ja. Scenarierne med atomkraft er enten at få en middelmådig løsning, der eksisterer i dag, men måske kan tændes om 10 til 20 år, eller at vente et uvist antal år, måske i omegnen af et årti, på at Generation IV reaktorer er realiseret, og så derefter en række år for at det er udbygget til et niveau, der kan erstatte nuværende fossilebrændstoffer. Det er, som nævnt før, for uambitiøst, urealistisk og en dårlig undskyldning for ikke at gøre noget i dag. Derfor skal vi hellere investere i vind- og solenergi, som måske ikke altid kan levere strøm Danmark hvis det ikke blæser nok, men at det indgår i det Europæiske elnet, hvor der også kan indgå atomkraft. Atomkraftværker er som argumenteret for i denne essay, langt at foretrække over fossilebrændstoffer, og lukningen af atomkraftværker i Europa er kontraproduktiv i et raserende klimakapløb mod naturen. Det handler ikke om at ”Danmark bliver afhængig af grøn strøm produceret af atomkraftværker i andre lande”, som nogle ville sige, men at Europa sammen benytter sig af forskellige bæredygtige energikilder afhængig af de geografiske muligheder. I Danmark har vi meget vind og hav, og derfor giver det mening for os at investere i havvindmøller i Nordsøen. I mellemtiden kan vi investere i den nødvendige forskning det vil kræve at få fusionsreaktorer eller Generation IV reaktorer i Danmark, hvis det til den tid er billigere og teknologisk mere attraktivt end vind- og solenergi. Er atomkraft bedre end kul? Ja. Skal vi investere flere penge i forskningen af atomkraft? Ja. Skal vi have traditionel atomkraft i Danmark? Nej, det er for dyrt og langsomt sammenlignet med vind- og solenergi.`,
],
    author: "Anton Irvold",
    time: new Date(2022, 4, 29),
    references: references2,
}

let articles = [article3, article2, article1];

function Emner() {
    return (
        <div>
            {articles.map((article, index) => {
                if ("references" in article) {
                    return (<Article article={article} references={article.references}/>);
                } else {
                    return (<Article article={article} />)
                };
            })
            }
        </div>
    );
}

export default Emner;