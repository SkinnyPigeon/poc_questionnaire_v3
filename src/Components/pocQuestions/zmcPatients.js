const zmcPatientQuestions = {
    questions: {
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
            values: ["18-25", "26-35", "36-45", "46-55", "56-65", "66 en hoger"]
        },
        q3: {
            question: "Wat is je hoogste opleidingsniveau?",
            answer: 0,
            type: 'select',
            values: ["Ph.D. opleiding", "Master opleiding", "Bachelor opleiding", "Middelbare opleiding", "Basis school"]
        },
        q4: {
            question: "Hoe zou u uw computervaardigheden beoordelen?",
            answer: '',
            type: 'checkbox',
            values: ["Beginner", "Gevorderd"]
        },
        q5: {
            question: "Té accés regular a un ordinador?",
            answer: 0,
            type: 'select',
            values: ["Ja", "Nee"]
        },
        q6: {
            question: "Ik denk dat ik het FlexPass systeem regelmatig wil gebruiken",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q7: {
            question: "Ik vond het FlexPass systeem onnodig complex",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q8: {
            question: "Ik dacht dat het FlexPass systeem gemakkelijk te gebruiken was",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q9: {
            question: "Ik denk dat ik de steun van een technisch persoon nodig heb om het FlexPass systeem te kunnen gebruiken",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q10: {
            question: "Ik vond dat de verschillende functies in het FlexPass systeem goed geïntegreerd waren",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q11: {
            question: "Ik dacht dat er te veel inconsistentie waren in het FlexPass systeem",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q12: {
            question: "Ik kan me voorstellen dat de meeste mensen het FlexPass-systeem heel snel zouden leren gebruiken",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q13: {
            question: "Ik vond het FlexPass systeem erg omslachtig in het gebruik",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q14: {
            question: "Ik had veel vertrouwen in het gebruik van het FlexPass-systeem",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q15: {
            question: "Ik moest veel leren voordat ik met het FlexPass systeem aan de slag kon",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q16: {
            question: "Over het geheel genomen, hoe moeilijk of gemakkelijk vond je de taak om een wachtwoord te creëren in FlexPass",
            answer: '',
            type: 'checkbox',
            values: ["Zeer moeilijk", "Zeer eenvoudig"]
        },
        q17: {
            question: "Hoe langzaam of hoe snel vond u de taak om een wachtwoord aan te maken in FlexPass?",
            answer: '',
            type: 'checkbox',
            values: ["Langzaam", "Snel"]
        },
        q18: {
            question: "Hoe lang (in seconden) moest u uw wachtwoord in FlexPass aanmaken?",
            answer: '',
            type: 'input',
            values: ["Seconden"]
        },
        q19: {
            question: "Hoe veilig vindt u het FlexPass-wachtwoordsysteem?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer onveilig", "Zeer veilig"]
        },
        q20: {
            question: "Hoe sterk gelooft u dat uw FlexPass-wachtwoord is?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer zwak", "Zeer sterk"]
        },
        q21: {
            question: "Heeft het beelddecor invloed gehad op uw wachtwoordselecties (b.v. heeft u een bepaald verhaal gecreëerd bij het selecteren van punten op de afbeelding, heeft u eerdere ervaringen in aanmerking genomen als onderdeel van uw selecties)? Zo ja, kunt u hieronder uitleggen hoe de afbeelding de wachtwoordselecties heeft beïnvloed (optioneel)",
            answer: '',
            type: 'textarea',
            optional: true
        },
        q22: {
            question: "Hoe heb je besloten waar je de gebaren op het beeld tekent? (optioneel)",
            answer: '',
            type: 'textarea',
            optional: true
        },
        q23: {
            question: "Hoe heb je besloten welk gebaar (tik, lijn of cirkel) je moet maken? (optioneel)",
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
            question: "Over het geheel genomen, hoe moeilijk of gemakkelijk vond je de login-taak in FlexPass?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer moeilijk", "Zeer gemakkelijk"]
        },
        q27: {
            question: "Hoe veeleisend was de login-taak mentaal?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer laag", "Zeer hoog"]
        },
        q28: {
            question: "Ik kon gemakkelijk inloggen op het FlexPass wachtwoordsysteem",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q29: {
            question: "Ik heb mijn wachtwoord effectief onthouden",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
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
            question: "In het algemeen, hoe moeilijk of gemakkelijk vond u de twee-factor authenticatie goedkeuringstaak (push notification of geheime code)?",
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
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q37: {
            question: "Hoe moeilijk of gemakkelijk heeft u het wachtwoord reset proces van het FlexPass systeem gevonden?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer moeilijk", "Zeer eenvoudig"]
        },
        q38: {
            question: "Hoe veilig heeft u het wachtwoord reset proces van het FlexPass systeem gevonden?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer onveilig", "Zeer veilig"]
        },
        q39: {
            question: "Ik vertrouw op de technologie die het FlexPass-wachtwoordsysteem gebruikt",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q40: {
            question: "Ik vertrouw op het vermogen van het FlexPass wachtwoordsysteem om mijn privacy te beschermen",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q41: {
            question: "Ik maak me geen zorgen over de veiligheid van het FlexPass-wachtwoordsysteem",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q42: {
            question: "Ik vertrouw op het FlexPass-wachtwoordsysteem om mijn account en gegevens te beschermen tegen cybercriminelen",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q43: {
            question: "Vindt u het een goed idee om beeldwachtwoorden te creëren met gepersonaliseerde beelden die zijn afgestemd op de eerdere activiteiten en ervaringen van de gebruikers in het dagelijks leven?",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal niet", "Helemaal"]
        },
        q44: {
            question: "Vindt u het een goed idee om gebruikers flexibel hun favoriete authenticatiemethode (foto of tekstpaswoord) te laten kiezen?",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal niet", "Helemaal"]
        },
        q45: {
            question: "Wat zijn de positieve aspecten van het FlexPass-wachtwoordsysteem? (optioneel)",
            answer: '',
            type: 'textarea',
            optional: true
        },
        q46: {
            question: "Wat zijn de negatieve aspecten die je niet leuk vindt in het FlexPass wachtwoordsysteem? (optioneel)",
            answer: '',
            type: 'textarea',
            optional: true
        },
        q47: {
            question: "Ik zou bereid zijn om het FlexPass wachtwoordsysteem te gebruiken als alternatief gebruikersverificatiesysteem om in te loggen op mijn gebruikersaccount",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q48: {
            question: "Leg de redenering achter uw antwoord in de vorige vraag uit",
            answer: '',
            type: 'textarea'
        },
        q49: {
            question: "Hoe comfortabel of ongemakkelijk zou u zijn met dit systeem voor het beheer van uw medische gegevens?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer ongemakkelijk", "Zeer comfortabel"]
        },
        q50: {
            question: "Hoe geschikt of onbekwaam acht u dit systeem voor de veilige omgang met medische gegevens?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer onbekwaam", "Zeer bekwaam"]
        },
        q51: {
            question: "Beoordeel uw instemming met de volgende verklaring: 'Ik vertrouw erop dat dit systeem mijn medische gegevens op een veilige manier verwerkt'",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q52: {
            question: "Het gebruik van de Serums technologie zou het mogelijk maken om mijn medische gegevens te delen en inzichtelijk te maken",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q53: {
            question: "Het gebruik van de Serums technologie zou het vinden en delen van mijn medische informatie efficiënter maken",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q54: {
            question: "Het gebruik van de Serums technologie zou mijn vermogen vergroten om mijn medische dossiers op te halen en te delen",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q55: {
            question: "Ik zou de Serums technologie nuttig vinden ",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q56: {
            question: "Het leren werken met de Serums technologie zou voor mij gemakkelijk zijn",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q57: {
            question: "Ik zou het gemakkelijk vinden om de Serums technologie te laten doen wat ik wil",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q58: {
            question: "Het zou voor mij gemakkelijk zijn om vaardig te worden in het gebruik van de Serums technologie",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q59: {
            question: "Ik zou de Serums technologie gemakkelijk te gebruiken vinden",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q60: {
            question: "Ik ben van plan om de Serums technologie te gebruiken wanneer ik toegang tot mijn medische dossiers nodig heb",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q61: {
            question: "Ik ben van mening dat mijn persoonlijke informatie alleen toegankelijk is voor degenen die bevoegd zijn om toegang te hebben",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q62: {
            question: "Het is duidelijk welke informatie over mij Serums in het systeem aanwezig is",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q63: {
            question: "Het is duidelijk wie het publiek van mijn gedeelde informatie is",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q64: {
            question: "Ik denk dat Serums mij in staat stelt om de toegang tot sommige van mijn persoonlijke gegevens te beperken tot sommige mensen",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q65: {
            question: "Ik denk dat ik controle heb over welke persoonlijke informatie ik kan delen via Serums",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q66: {
            question: "Het is duidelijk welke persoonlijke informatie zorgverleners kunnen zien op Serums",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q67: {
            question: "Hoe veilig vindt u het Serums-systeem in het algemeen?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer onveilig", "Zeer veilig"]
        },
        q68: {
            question: "Ik maak me geen zorgen over de veiligheid van het Serums-systeem",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q69: {
            question: "Ik vertrouw op het vermogen van het Serums-systeem om mijn privacy te beschermen",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q70: {
            question: "Ik vertrouw op de technologie die het Serums-systeem gebruikt",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        }
    },
    sections: {
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
            title: 'Bruikbaarheid FlexPass Wachtwoord Systeem',
            range: [6, 15],
            text: 'Beoordeel de bruikbaarheid van het FlexPass Wachtwoord Systeem'
        },
        s4: {
            title: 'Wachtwoord aanmaken',
            range: [16, 25],
            text: 'Beoordeel uw ervaring en perceptie met betrekking tot het FlexPass-systeem voor het aanmaken van wachtwoorden en het proces'
        },
        s5: {
            title: 'Inloggen met een wachtwoord',
            range: [26, 29],
            text: "Beoordeel uw ervaring en perceptie met betrekking tot het FlexPass-loginsysteem"
        },
        s6: {
            title: 'Twee-factor Authenticatie Mobiele Applicatie',
            range: [30, 36],
            text: 'Indien u gebruik heeft gemaakt van de twee-factor authenticatie mobiele applicatie, beoordeel dan uw ervaring en perceptie met betrekking tot het twee-factor authenticatiesysteem'
        },
        s7: {
            title: 'Wachtwoord resetten',
            range: [37, 38],
            text: 'Indien u uw wachtwoord heeft gereset, beoordeel dan uw ervaring en perceptie met betrekking tot het FlexPass wachtwoord-resetsysteem en -proces'
        },
        s8: {
            title: 'Vertrouw op',
            range: [39, 42],
            text: 'Beoordeel uw vertrouwen in het FlexPass-wachtwoordsysteem'
        },
        s9: {
            title: 'Wachtwoordervaring en -voorkeur',
            range: [43, 48],
            text: 'Gelieve uw algemene ervaring, voorkeur en meningen met betrekking tot het FlexPass-wachtwoordsysteem toe te lichten'
        },
        s10: {
            title: 'Patiëntvertrouwen medische gegevens',
            range: [49, 51],
            text: ''
        },
        s11: {
            title: 'Waargenomen bruikbaarheidsvragen',
            range: [52, 55],
            text: ''
        },
        s12: {
            title: 'Waargenomen gebruiksgemak vragen',
            range: [56, 59],
            text: ''
        },
        s13: {
            title: 'Gedragsintentie',
            range: [60, 60],
            text: ''
        },
        s14: {
            title: 'Eigendom van de gegevens',
            range: [61, 66],
            text: ''
        },
        s15: {
            title: 'Waargenomen veiligheid van het Serums-systeem',
            range: [67, 70],
            text: ''
        }
    },
    message: "Er worden vragen overgeslagen i.v.m. uw antwoord op vraag 30",
    sectionTranslation: "Sectie"
}

export default zmcPatientQuestions;