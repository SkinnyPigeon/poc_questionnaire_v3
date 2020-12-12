const zmcPatientQuestions = {
    questions: {
        q0: {
            question: `Het belangrijkste doel van deze studie is om de mening, voorkeur en sympathie van de eindgebruikers te evalueren met betrekking tot het Serums Smart Health Centre Systems, een nieuwe technologie die gericht is op een veilige en gebruiksvriendelijke toegang tot uw medische dossiers.
                    
                    Voordat u aan deze studie deelneemt, dient u de onderstaande informatie te lezen. Als u klaar bent en de verklaringen begrijpt en instemt met deelname aan dit onderzoek , klikt u op de optie "Ik ga akkoord" onderaan deze pagina.

                    Het gebruikersonderzoek duurt ongeveer 45-75 minuten. Uw antwoorden worden vertrouwelijk en anoniem behandeld. 

                    Deelname aan het onderzoek is vrijwillig en kan te allen tijde worden geannuleerd. U kunt uw deelname dus te allen tijde beëindigen. Daarbij maakt u ook bezwaar tegen het gebruik van uw tot dan toe verzamelde gegevens.

                    De gegevens die in het kader van dit onderzoek worden verzameld en hierboven beschreven, worden vertrouwelijk behandeld. Bovendien worden de resultaten van het onderzoek in anonieme vorm gepubliceerd, d.w.z. zonder dat uw gegevens persoonlijk identificeerbaar zijn.
                    Er zijn geen risico's voor personen die deelnemen aan dit onderzoek buiten de risico's die in het dagelijks leven bestaan.

                    Voor verdere vragen over dit onderzoek, het project of over de manier waarop uw bijdrage zal worden gebruikt, kunt u contact met ons opnemen.

                    Bedankt dat u de tijd heeft genomen om dit project te steunen!

                    Toestemming
                    Door op de knop "Ik ga akkoord" te klikken verklaart u dat u
                    1) het doel van het onderzoek begrijpt,
                    2) meer dan 18 jaar oud bent,
                    3) vrijwillig deelneemt aan dit onderzoek, en
                    4) kennis heeft genomen van de hierboven gepresenteerde onderzoeksinformatie en deze begrijpt.
                `,
            answer: 1,
            type: 'consent'
        },
        q1: {
            question: "Voer uw gebruikers-ID in die door de onderzoeker is verstrekt" ,
            answer: '',
            type: 'input',
            values: [""]
        },
        q2: {
            question: "Wat is uw leeftijdscategorie (in jaren)?",
            answer: 0,
            type: 'select',
            values: ["Maak hier uw keuze", "18-25", "26-35", "36-45", "46-55", "56-65", "66 en hoger"]
        },
        q3: {
            question: "Wat is uw hoogste opleidingsniveau?",
            answer: 0,
            type: 'select',
            values: ["Maak hier uw keuze", "Ph.D. opleiding", "Master opleiding", "Bachelor opleiding", "Middelbare opleiding", "Basis school"]
        },
        q4: {
            question: "Hoe zou u uw computervaardigheden beoordelen?",
            answer: '',
            type: 'checkbox',
            values: ["Beginner", "Gevorderd"]
        },
        q5: {
            question: "Heeft u op dit moment regelmatig toegang tot een computer?",
            answer: 0,
            type: 'select',
            values: ["Maak hier uw keuze", "Ja", "Nee"]
        },
        q6: {
            question: "Ik denk dat ik het FlexPass systeem regelmatig wil gebruiken",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q7: {
            question: "Ik vind het FlexPass systeem onnodig complex",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q8: {
            question: "Ik vind dat het FlexPass systeem gemakkelijk te gebruiken is",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q9: {
            question: "Ik denk dat ik de steun van een technisch persoon nodig heb om het FlexPass systeem te kunnen gebruiken",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q10: {
            question: "Ik vind dat de verschillende functies in het FlexPass systeem goed geïntegreerd zijn",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q11: {
            question: "Ik vind dat er te veel tegenstrijdigheden zijn in het FlexPass systeem",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q12: {
            question: "Ik kan me voorstellen dat de meeste mensen heel snel kunnen leren om het FlexPass-systeem te gebruiken",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q13: {
            question: "Ik vind het FlexPass systeem erg omslachtig in het gebruik",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q14: {
            question: "Ik heb veel vertrouwen in het gebruik van het FlexPass-systeem",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q15: {
            question: "Ik moest veel leren voordat ik met het FlexPass systeem aan de slag kon",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q16: {
            question: "Vindt u het in het algemeen moeilijk of gemakkelijk om een wachtwoord aan te maken in het Flexpass systeem?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer moeilijk", "Zeer gemakkelijk"]
        },
        q17: {
            question: "Hoe langzaam of hoe snel vind u het proces om een wachtwoord aan te maken in het FlexPass systeem?",
            answer: '',
            type: 'checkbox',
            values: ["Langzaam", "Snel"]
        },
        q18: {
            question: "Hoeveel seconden had u ongeveer nodig om uw wachtwoord in het FlexPass systeem aan te maken?",
            answer: '',
            type: 'input',
            values: ["Seconden"]
        },
        q19: {
            question: "Hoe veilig vindt u het FlexPass systeem?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer onveilig", "Zeer veilig"]
        },
        q20: {
            question: "Hoe sterk denkt u dat uw wachtwoord in het FlexPass systeem is?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer zwak", "Zeer sterk"]
        },
        q21: {
            question: "Heeft de setting van de afbeeldingen invloed gehad op uw wachtwoordselecties (b.v. heeft u een bepaald verhaal gecreëerd bij het selecteren van punten op de afbeelding, heeft u eerdere ervaringen in aanmerking genomen als onderdeel van uw selecties)? Zo ja, kunt u hieronder uitleggen hoe de afbeelding de wachtwoordselecties heeft beïnvloed (optioneel)",
            answer: '',
            type: 'textarea',
            optional: true
        },
        q22: {
            question: "Hoe heeft u besloten waar u de figuren (tik, lijn of cirkel) op de afbeelding ging tekenen? (optioneel)",
            answer: '',
            type: 'textarea',
            optional: true
        },
        q23: {
            question: "Hoe heeft u besloten welke figuren (tik, lijn of cirkel) u ging gebruiken? (optioneel)",
            answer: '',
            type: 'textarea',
            optional: true
        },
        q24: {
            question: "Welke strategie heeft u gevolgd om uw wachtwoord aan te maken? (optioneel)",
            answer: '',
            type: 'textarea',
            optional: true
        },
        q25: {
            question: "Wat voor soort achtergrondafbeelding heeft uw voorkeur? (optioneel)",
            answer: '',
            type: 'textarea',
            optional: true
        },
        q26: {
            question: "Over het geheel genomen, hoe moeilijk of gemakkelijk vind u het inloggen in het FlexPass systeem?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer moeilijk", "Zeer gemakkelijk"]
        },
        q27: {
            question: "Hoe belastend was het inloggen mentaal?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer laag", "Zeer hoog"]
        },
        q28: {
            question: "Ik kon gemakkelijk inloggen op het FlexPass systeem",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q29: {
            question: "Ik heb mijn wachtwoord goed kunnen onthouden",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q30: {
            question: "Heeft u met succes de twee-factor authenticatie mobiele applicatie geïnstalleerd en ingeschreven?",
            answer: 0,
            type: 'select',
            values: ["Maak hier uw keuze", "Ja", "Nee"],
            dependencies: true,
            linked: ['q31', 'q32', 'q33', 'q34', 'q35', 'q36'],
            trigger: 2
        },
        q31: {
            question: "Als uw antwoord 'Ja' was, welke twee-factor authenticatiemethode heeft u dan gebruikt om in te loggen?",
            answer: 0,
            type: 'select',
            values: ["Maak hier uw keuze", "Push-bericht", "Geheime code (Time-based One-Time Password - TOTP)"]
        },
        q32: {
            question: "Heeft u met succes toegang gekregen tot het systeem na gebruik te hebben gemaakt van de tweefactor authenticatiemethode?",
            answer: 0,
            type: 'select',
            values: ["Maak hier uw keuze", "Ja", "Nee"]
        },
        q33: {
            question: "Hoe moeilijk of eenvoudig vond u de installatie en inschrijving voor de twee-factor authenticatie mobiele applicatie?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer moeilijk", "Zeer moeilijk"]
        },
        q34: {
            question: "In het algemeen, hoe moeilijk of gemakkelijk vond u de twee-factor authenticatie goedkeuringstaak (push-bericht of geheime code)?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer moeilijk", "Zeer gemakkelijk"]
        },
        q35: {
            question: "Hoe veilig vindt u de twee-factor mobiele applicatie voor authenticatie?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer onveilig", "Zeer veilig"]
        },
        q36: {
            question: "Ik zou bereid zijn om de twee-factor authenticatie mobiele applicatie te gebruiken in mijn dagelijkse taken",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q37: {
            question: "Heeft u uw wachtwoord moeten resetten?",
            answer: '',
            type: 'select',
            values: ["Maak hier uw keuze", "Ja", "Nee"],
            dependencies: true,
            linked: ['q38', 'q39'],
            trigger: 2
        },
        q38: {
            question: "Hoe moeilijk of gemakkelijk vindt u het resetten van uw wachtwoord in het FlexPass systeem?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer moeilijk", "Zeer eenvoudig"]
        },
        q39: {
            question: "Hoe veilig vindt u het wachtwoord reset proces van het FlexPass systeem?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer onveilig", "Zeer veilig"]
        },
        q40: {
            question: "Ik vertrouw op de technologie die het FlexPass systeem gebruikt",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q41: {
            question: "Ik vertrouw erop dat het FlexPass systeem mijn privacy beschermt",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q42: {
            question: "Ik maak me geen zorgen over de veiligheid van het FlexPass systeem",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q43: {
            question: "Ik vertrouw erop dat het FlexPass systeem mijn account en mijn gegevens beschermt tegen cybercriminelen",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q44: {
            question: "Vindt u het een goed idee om afbeeldingswachtwoorden te creëren met gepersonaliseerde beelden die zijn afgestemd op de eerdere activiteiten en ervaringen van de gebruikers in het dagelijks leven?",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal niet", "Helemaal"]
        },
        q45: {
            question: "Vindt u het een goed idee om gebruikers flexibel hun favoriete authenticatiemethode (afbeelding of teksteel wachtwoord) te laten kiezen?",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal niet", "Helemaal"]
        },
        q46: {
            question: "Wat zijn de positieve aspecten van het FlexPass systeem? (optioneel)",
            answer: '',
            type: 'textarea',
            optional: true
        },
        q47: {
            question: "Wat zijn de negatieve aspecten van het FlexPass systeem? (optioneel)",
            answer: '',
            type: 'textarea',
            optional: true
        },
        q48: {
            question: "Ik zou bereid zijn om het FlexPass systeem te gebruiken als alternatief om in te loggen op mijn accounts",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q49: {
            question: "Leg de redenering achter uw antwoord in de vorige vraag uit",
            answer: '',
            type: 'textarea'
        },
        q50: {
            question: "Hoe comfortabel zou u zijn met het Serums systeem voor het beheer van uw medische gegevens?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer ongemakkelijk", "Zeer comfortabel"]
        },
        q51: {
            question: "Hoe handig denkt u dat het Serums systeem is voor de veilige omgaan met medische gegevens?",
            answer: '',
            type: 'checkbox',
            values: ["Erg onhandig", "Erg handig"]
        },
        q52: {
            question: "Geef aan of u het eens bent met deze verklaring: 'Ik vertrouw erop dat het Serums systeem mijn medische gegevens op een veilige manier verwerkt'",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q53: {
            question: "Het gebruik van het Serums systeem zou het mogelijk maken om mijn medische gegevens te delen en inzichtelijk te maken",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q54: {
            question: "Het gebruik van het Serums systeem zou het vinden en delen van mijn medische informatie efficiënter maken",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q55: {
            question: "Het gebruik van het Serums systeem zou mijn vermogen vergroten om mijn medische dossiers op te halen en te delen",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q56: {
            question: "Ik zou het Serums systeem nuttig vinden",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q57: {
            question: "Het leren werken met het Serums systeem zou voor mij gemakkelijk zijn",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q58: {
            question: "Ik zou het gemakkelijk vinden om het Serums systeem te laten doen wat ik wil",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q59: {
            question: "Het zou voor mij gemakkelijk zijn om vaardig te worden in het gebruik van het Serums systeem",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q60: {
            question: "Ik zou het Serums systeem gemakkelijk te gebruiken vinden",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q61: {
            question: "Ik ben van plan om het Serums systeem te gebruiken wanneer ik toegang tot mijn medische dossiers nodig heb",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q62: {
            question: "Ik ben van mening dat mijn persoonlijke informatie alleen toegankelijk is voor degenen die bevoegd zijn om toegang te hebben",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q63: {
            question: "Het is duidelijk welke informatie over mij in het Serums systeem aanwezig is",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q64: {
            question: "Het is duidelijk wie het publiek van mijn gedeelde informatie is",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q65: {
            question: "Ik denk dat het Serums systeem mij in staat stelt om de toegang tot gedeelten van mijn persoonlijke gegevens te beperken tot bepaalde mensen",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q66: {
            question: "Ik denk dat ik controle heb over welke persoonlijke informatie ik kan delen via Serums",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q67: {
            question: "Het is duidelijk welke persoonlijke informatie zorgverleners kunnen zien op Serums",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q68: {
            question: "Hoe veilig vindt u het Serums systeem in het algemeen?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer onveilig", "Zeer veilig"]
        },
        q69: {
            question: "Ik maak me geen zorgen over de veiligheid van het Serums systeem",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q70: {
            question: "Ik vertrouw op het vermogen van het Serums systeem om mijn privacy te beschermen",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q71: {
            question: "Ik vertrouw op de technologie die het Serums systeem gebruikt",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        }
    },
    sections: {
        s0: {
            title: 'Dank u voor uw deelname aan deze studie voor het EU Horizon 2020-onderzoeksproject Serums',
            range: [0, 0],
            text: ''
        },
        s1: {
            title: 'Gebruikers-ID',
            range: [1, 1],
            text: ''
        },
        s2: {
            title: 'Algemene achtergrond',
            range: [2, 5],
            text: ''
        },
        s3: {
            title: 'Bruikbaarheid FlexPass Afbeeldingswachtwoord Systeem',
            range: [6, 15],
            text: 'Beoordeel de bruikbaarheid van het FlexPass Afbeeldingswachtwoord Systeem'
        },
        s4: {
            title: 'Wachtwoord aanmaken',
            range: [16, 25],
            text: 'Beoordeel uw ervaring en perceptie met betrekking tot het FlexPass Afbeeldingswachtwoord systeem voor het aanmaken van wachtwoorden en het proces'
        },
        s5: {
            title: 'Inloggen met een wachtwoord',
            range: [26, 29],
            text: "Beoordeel uw ervaring en perceptie met betrekking tot het inloggen in het FlexPass Afbeeldingswachtwoord systeem"
        },
        s6: {
            title: 'Twee-factor Authenticatie Mobiele Applicatie',
            range: [30, 36],
            text: 'Indien u gebruik heeft gemaakt van de twee-factor authenticatie mobiele applicatie, beoordeel dan uw ervaring en perceptie met betrekking tot het twee-factor authenticatiesysteem'
        },
        s7: {
            title: 'Wachtwoord resetten',
            range: [37, 39],
            text: 'Indien u uw wachtwoord heeft gereset, beoordeel dan uw ervaring en perceptie met betrekking tot het FlexPass Afbeeldingswachtwoord Resetsysteem en -proces'
        },
        s8: {
            title: 'Vertrouwen',
            range: [40, 43],
            text: 'Beoordeel uw vertrouwen in het FlexPass Afbeeldingswachtwoord systeem'
        },
        s9: {
            title: 'Wachtwoordervaring en -voorkeur',
            range: [44, 49],
            text: 'Gelieve uw algemene ervaring, voorkeur en meningen met betrekking tot het FlexPass Afbeeldingswachtwoord systeem toe te lichten'
        },
        s10: {
            title: 'Patiëntvertrouwen medische gegevens',
            range: [50, 52],
            text: ''
        },
        s11: {
            title: 'Waargenomen bruikbaarheid',
            range: [53, 56],
            text: ''
        },
        s12: {
            title: 'Waargenomen gebruiksgemak',
            range: [57, 60],
            text: ''
        },
        s13: {
            title: 'Gedragsintentie',
            range: [61, 61],
            text: ''
        },
        s14: {
            title: 'Eigendom van de gegevens',
            range: [62, 67],
            text: ''
        },
        s15: {
            title: 'Waargenomen veiligheid van het Serums systeem',
            range: [68, 71],
            text: ''
        }
    },
    message: "Er worden vragen overgeslagen i.v.m. uw antwoord op vraag 30",
    sectionTranslation: "Sectie",
    next: "Volgende",
    previous: "Vorige",
    consent: "Ik ga akkoord",
    submit: "Verzenden"
}

export default zmcPatientQuestions;