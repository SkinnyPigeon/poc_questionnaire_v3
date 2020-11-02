const zmcProfessionalQuestions = {
    questions: {
        q1: {
            question: "Wat is uw leeftijdsbereik (in jaren)?",
            answer: 0,
            type: 'select',
            values: ["18-25", "26-35", "36-45", "46-55", "56-65", "66 en hoger"]
        },
        q2: {
            question: "Wat is uw hoogste opleidingsniveau?",
            answer: 0,
            type: 'select',
            values: ["Ph.D. opleiding", "Master opleiding", "Bachelor opleiding", "Middelbare opleiding", "Basis school"]
        },
        q3: {
            question: "Wat is uw beroep?",
            answer: 0,
            type: 'select',
            values: ["Dokter", "Verpleegkundige", "Verzorger", "IT-expert", "Beveiligingsexpert", "Overige"]
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
            values: ["Ja", "Nee"]
        },
        q6: {
            question: "Vindt u het een goed idee om beeldwachtwoorden te creëren met gepersonaliseerde beelden die zijn afgestemd op de eerdere activiteiten en ervaringen van de gebruikers in het dagelijks leven?",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal niet", "Helemaal wel"]
        },
        q7: {
            question: "Vindt u het een goed idee om gebruikers flexibel hun favoriete authenticatiemethode (foto of tekstpaswoord) te laten kiezen?",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal niet", "Helemaal wel"]
        },
        q8: {
            question: "Denkt u dat FlexPass een goede alternatieve authenticatiemethode voor patiënten zou zijn?",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal niet", "Helemaal wel"]
        },
        q9: {
            question: "Wat zijn de positieve aspecten van het FlexPass-wachtwoordsysteem?",
            answer: '',
            type: 'textarea'
        },
        q10: {
            question: "Wat zijn de negatieve aspecten die je niet leuk vindt in het FlexPass wachtwoordsysteem?",
            answer: '',
            type: 'textarea'
        },
        q11: {
            question: "Bent u bereid om het FlexPass wachtwoordsysteem te gebruiken als alternatief gebruikersauthenticatiesysteem om in te loggen op uw gebruikersaccount?",
            answer: 0,
            type: 'select',
            values: ["Ja", "Nee"]
        },
        q12: {
            question: "Leg de redenering achter uw antwoord in de vorige vraag uit",
            answer: '',
            type: 'textarea'
        },
        q13: {
            question: "In het algemeen, hoe moeilijk of gemakkelijk vind je de taak om een wachtwoord te creëren in FlexPass?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer moeilijk", "Zeer eenvoudig"]
        },
        q14: {
            question: "Hoe langzaam of hoe snel vindt u de taak om een wachtwoord aan te maken in FlexPass?",
            answer: '',
            type: 'checkbox',
            values: ["Langzaam", "Snel"]
        },
        q15: {
            question: "Hoe veilig vindt u het FlexPass-wachtwoordsysteem?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer onveilig", "Zeer veilig"]
        },
        q16: {
            question: "Hoe sterk gelooft u dat een FlexPass wachtwoord is?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer zwak", "Zeer sterk"]
        },
        q17: {
            question: "Over het geheel genomen, hoe moeilijk of gemakkelijk vind je de login-taak in FlexPass?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer moeilijk", "Zeer gemakkelijk"]
        },
        q18: {
            question: "Hoe veeleisend denkt u dat de aanmeldingsopdracht is?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer laag", "Zeer hoog"]
        },
        q19: {
            question: "Patiënten kunnen eenvoudig inloggen op het FlexPass-wachtwoordsysteem",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q20: {
            question: "Patiënten zullen hun wachtwoord effectief onthouden",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q21: {
            question: "Hoe moeilijk of eenvoudig vindt u de installatie en inschrijving voor de twee-factor authenticatie mobiele applicatie?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer moeilijk", "Zeer eenvoudig"]
        },
        q22: {
            question: "Hoe moeilijk of gemakkelijk vindt u de twee-factor goedkeuringstaak van de authenticatie (push notification)?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer moeilijk", "Zeer gemakkelijk"]
        },
        q23: {
            question: "Hoe veilig vindt u de twee-factor authenticatie mobiele applicatie?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer onveilig", "Zeer veilig"]
        },
        q24: {
            question: "Hoe moeilijk of eenvoudig vindt u het wachtwoord reset proces van het FlexPass systeem?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer moeilijk", "Zeer eenvoudig"]
        },
        q25: {
            question: "Hoe veilig vindt u het wachtwoord reset proces van het FlexPass systeem?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer onveilig", "Zeer veilig"]
        },
        q26: {
            question: "Ik vertrouw op de technologie die het FlexPass-wachtwoordsysteem gebruikt",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q27: {
            question: "Ik vertrouw op het vermogen van het FlexPass wachtwoordsysteem om de privacy van de patiënten te beschermen",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q28: {
            question: "Ik maak me geen zorgen over de veiligheid van het FlexPass-wachtwoordsysteem",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q29: {
            question: "Ik vertrouw op het FlexPass-wachtwoordsysteem om mijn account en gegevens te beschermen tegen cybercriminelen",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q30: {
            question: "Hoe comfortabel of ongemakkelijk zou u zijn met dit systeem voor het beheer van de medische gegevens van de patiënt?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer ongemakkelijk", "Zeer comfortabel"]
        },
        q31: {
            question: "Hoe geschikt of onbekwaam acht u dit systeem voor de veilige omgang met medische gegevens?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer onbekwaam", "Zeer bekwaam"]
        },
        q32: {
            question: "Beoordeel uw instemming met de volgende verklaring: 'Ik vertrouw erop dat dit systeem op een veilige manier met medische gegevens omgaat.'",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q33: {
            question: "Met behulp van de Serums technologie zou het mogelijk zijn om de medische gegevens van de patiënt te delen en inzichtelijk te maken",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q34: {
            question: "Het gebruik van de Serums technologie zou het vinden en delen van de medische informatie van de patiënt efficiënter maken",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q35: {
            question: "Het gebruik van de Serums technologie zou mijn vermogen vergroten om alle medische dossiers van de patiënt op te halen en te delen",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q36: {
            question: "Ik zou de Serums technologie nuttig vinden ",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q37: {
            question: "Het leren werken met de Serums technologie zou voor mij gemakkelijk zijn",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q38: {
            question: "Ik zou het gemakkelijk vinden om de Serums technologie te laten doen wat ik wil",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q39: {
            question: "Ik zou het gemakkelijk vinden om de Serums technologie te laten doen wat ik wil",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q40: {
            question: "Ik zou de Serums technologie gemakkelijk te gebruiken vinden ",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q41: {
            question: "Ik ben van plan om de Serums technologie te gebruiken wanneer ik toegang moet hebben tot alle medische dossiers van de patiënten",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q42: {
            question: "Ik ben van mening dat de persoonlijke medische informatie van de patiënt alleen toegankelijk is voor degenen die bevoegd zijn om toegang te hebben",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q43: {
            question: "Het is duidelijk welke informatie over de patiënt Serums in het systeem aanwezig is",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q44: {
            question: "Het is duidelijk wie het publiek van de gedeelde informatie van de patiënt is",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q45: {
            question: "Ik denk dat Serums de patiënt in staat stelt om de toegang tot sommige van zijn persoonlijke informatie te beperken tot sommige mensen",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q46: {
            question: "Ik denk dat de patiënt de controle heeft over welke persoonlijke informatie hij of zij kan delen via Serums",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q47: {
            question: "Het is duidelijk welke patiëntinformatie zorgverleners kunnen zien op Serums",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q48: {
            question: "Hoe veilig vindt u het Serums-systeem?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer onveilig", "Zeer veilig"]
        },
        q49: {
            question: "Ik maak me geen zorgen over de veiligheid van het Serums-systeem",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q50: {
            question: "Ik vertrouw op het vermogen van het Serums-systeem om mijn privacy te beschermen",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        },
        q51: {
            question: "Ik vertrouw op de technologie die het Serums-systeem gebruikt",
            answer: '',
            type: 'checkbox',
            values: ["Sterk oneens", "Sterk mee eens"]
        }
    },
    sections: {
        s1: {
            title: 'Algemene achtergrond',
            range: [1, 5],
            text: ''
        },
        s2: {
            title: 'Algemene voorkeur en mening over FlexPass',
            range: [6, 12],
            text: 'Gelieve uw algemene voorkeur en meningen met betrekking tot het FlexPass-wachtwoordsysteem toe te lichten'
        },
        s3: {
            title: 'Wachtwoord aanmaken',
            range: [13, 16],
            text: 'Beoordeel uw perceptie met betrekking tot het FlexPass-systeem voor het aanmaken van wachtwoorden en het proces'
        },
        s4: {
            title: 'Inloggen met een wachtwoord',
            range: [17, 20],
            text: 'Beoordeel uw perceptie met betrekking tot het FlexPass-loginsysteem'
        },
        s5: {
            title: 'Twee-factor Authenticatie Mobiele Applicatie',
            range: [21, 23],
            text: 'Beoordeel uw perceptie van het authenticatiesysteem met twee factoren'
        },
        s6: {
            title: 'Wachtwoord resetten',
            range: [24, 25],
            text: 'Beoordeel uw waarnemingen met betrekking tot het FlexPass wachtwoord-resetsysteem en het proces'
        },
        s7: {
            title: 'Vertrouwen',
            range: [26, 29],
            text: 'Beoordeel uw vertrouwen in het FlexPass-wachtwoordsysteem'
        },
        s8: {
            title: 'Patiëntvertrouwen medische gegevens',
            range: [30, 32],
            text: ''
        },
        s9: {
            title: 'Waargenomen bruikbaarheidsvragen',
            range: [33, 36],
            text: ''
        },
        s10: {
            title: 'Waargenomen gebruiksgemak vragen',
            range: [37, 40],
            text: ''
        },
        s11: {
            title: 'Gedragsintentie',
            range: [41, 41],
            text: ''
        },
        s12: {
            title: 'Eigendom van de gegevens',
            range: [42, 47],
            text: ''
        },
        s13: {
            title: 'Waargenomen veiligheid van het Serums-systeem',
            range: [48, 51],
            text: ''
        }
    }
}

export default zmcProfessionalQuestions;