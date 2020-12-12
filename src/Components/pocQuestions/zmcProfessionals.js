const zmcProfessionalQuestions = {
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
            question: "Wat is uw leeftijdsbereik (in jaren)?",
            answer: 0,
            type: 'select',
            values: ["Maak hier uw keuze", "18-25", "26-35", "36-45", "46-55", "56-65", "66 en hoger"]
        },
        q2: {
            question: "Wat is uw hoogste opleidingsniveau?",
            answer: 0,
            type: 'select',
            values: ["Maak hier uw keuze", "Ph.D. opleiding", "Master opleiding", "Bachelor opleiding", "Middelbare opleiding", "Basis school"]
        },
        q3: {
            question: "Wat is uw beroep?",
            answer: 0,
            type: 'select',
            values: ["Maak hier uw keuze", "Dokter", "Verpleegkundige", "Verzorger", "IT-expert", "Beveiligingsexpert", "Overige"]
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
            question: "Vindt u het een goed idee om beeldwachtwoorden te creëren met gepersonaliseerde beelden die zijn afgestemd op de eerdere activiteiten en ervaringen van de gebruikers in het dagelijks leven?",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal niet", "Helemaal wel"]
        },
        q7: {
            question: "Vindt u het een goed idee om gebruikers flexibel hun favoriete authenticatiemethode (afbeelding of teksteel wachtwoord) te laten kiezen?",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal niet", "Helemaal wel"]
        },
        q8: {
            question: "Denkt u dat het FlexPass systeem een goede alternatieve authenticatiemethode voor patiënten zou zijn?",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal niet", "Helemaal wel"]
        },
        q9: {
            question: "Wat zijn de positieve aspecten van het FlexPass systeem?",
            answer: '',
            type: 'textarea'
        },
        q10: {
            question: "Wat zijn de negatieve aspecten van het FlexPass systeem?",
            answer: '',
            type: 'textarea'
        },
        q11: {
            question: "Bent u bereid om het FlexPass systeem te gebruiken als alternatief om in te loggen op uw accounts?",
            answer: 0,
            type: 'select',
            values: ["Maak hier uw keuze", "Ja", "Nee"]
        },
        q12: {
            question: "Leg de redenering achter uw antwoord in de vorige vraag uit",
            answer: '',
            type: 'textarea'
        },
        q13: {
            question: "Vindt u het in het algemeen moeilijk of gemakkelijk om een wachtwoord aan te maken in het Flexpass systeem?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer moeilijk", "Zeer eenvoudig"]
        },
        q14: {
            question: "Hoe langzaam of hoe snel vindt u het proces om een wachtwoord aan te maken in het Flexpass systeem?",
            answer: '',
            type: 'checkbox',
            values: ["Langzaam", "Snel"]
        },
        q15: {
            question: "Hoe veilig vindt u het FlexPass systeem?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer onveilig", "Zeer veilig"]
        },
        q16: {
            question: "Hoe sterk denkt u dat een wachtwoord in het FlexPass systeem is?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer zwak", "Zeer sterk"]
        },
        q17: {
            question: "Over het geheel genomen, hoe moeilijk of gemakkelijk vind u het inloggen in het FlexPass systeem?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer moeilijk", "Zeer gemakkelijk"]
        },
        q18: {
            question: "Hoe belastend denkt u dat de aanmeldingsopdracht mentaal is?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer laag", "Zeer hoog"]
        },
        q19: {
            question: "Patiënten kunnen gemakkelijk inloggen op het FlexPass systeem",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q20: {
            question: "Patiënten zullen hun wachtwoord goed kunnen onthouden",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q21: {
            question: "Hoe moeilijk of eenvoudig vindt u de installatie en inschrijving voor de twee-factor authenticatie mobiele applicatie?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer moeilijk", "Zeer eenvoudig"]
        },
        q22: {
            question: "Hoe moeilijk of gemakkelijk vindt u de twee-factor goedkeuringstaak van de authenticatie (push-bericht)?",
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
            question: "Hoe moeilijk of gemakkelijk vindt u het resetten van een wachtwoord in het FlexPass systeem?",
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
            question: "Ik vertrouw op de technologie die het FlexPass systeem gebruikt",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q27: {
            question: "Ik vertrouw erop dat het FlexPass systeem de privacy van de patiënten beschermt",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q28: {
            question: "Ik maak me geen zorgen over de veiligheid van het FlexPass systeem",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q29: {
            question: "Ik vertrouw erop dat het FlexPass systeem mijn account en mijn gegevens beschermt tegen cybercriminelen",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q30: {
            question: "Hoe comfortabel zou u zijn met dit systeem voor het beheer van de medische gegevens van de patiënt?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer ongemakkelijk", "Zeer comfortabel"]
        },
        q31: {
            question: "Hoe handig acht u dit systeem voor de veilige omgang met medische gegevens?",
            answer: '',
            type: 'checkbox',
            values: ["Erg onhandig", "Erg handig"]
        },
        q32: {
            question: "Geef aan of u het eens bent met deze verklaring: 'Ik vertrouw erop dat dit systeem op een veilige manier met medische gegevens omgaat.'",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q33: {
            question: "Met behulp van het Serums systeem zou het mogelijk zijn om de medische gegevens van de patiënt te delen en inzichtelijk te maken",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q34: {
            question: "Het gebruik van het Serums systeem zou het vinden en delen van de medische informatie van de patiënt efficiënter maken",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q35: {
            question: "Het gebruik van het Serums systeem zou mijn vermogen vergroten om alle medische dossiers van de patiënt op te halen en te delen",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q36: {
            question: "Ik zou het Serums systeem nuttig vinden",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q37: {
            question: "Het leren werken met het Serums systeem zou voor mij gemakkelijk zijn",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q38: {
            question: "Ik zou het gemakkelijk vinden om het Serums systeem te laten doen wat ik wil",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q39: {
            question: "Ik zou het gemakkelijk vinden om bekwaam te worden in het gebruik van het Serums systeem",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q40: {
            question: "Ik zou het Serums systeem gemakkelijk te gebruiken vinden",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q41: {
            question: "Ik ben van plan om het Serums systeem te gebruiken wanneer ik toegang moet hebben tot alle medische dossiers van de patiënten",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q42: {
            question: "Ik ben van mening dat de persoonlijke medische informatie van de patiënt alleen toegankelijk is voor degenen die bevoegd zijn om toegang te hebben",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q43: {
            question: "Het is duidelijk welke informatie over de patiënt in het Serums systeem aanwezig is",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q44: {
            question: "Het is duidelijk wie het publiek van de gedeelde informatie van de patiënt is",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q45: {
            question: "Ik denk dat het Serums systeem de patiënt in staat stelt om de toegang tot gedeelten van zijn persoonlijke informatie te beperken tot bepaalde mensen",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q46: {
            question: "Ik denk dat de patiënt de controle heeft over welke persoonlijke informatie hij of zij kan delen via het Serums systeem",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q47: {
            question: "Het is duidelijk welke patiëntinformatie zorgverleners kunnen zien op het Serums systeem",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q48: {
            question: "Hoe veilig vindt u het Serums systeem?",
            answer: '',
            type: 'checkbox',
            values: ["Zeer onveilig", "Zeer veilig"]
        },
        q49: {
            question: "Ik maak me geen zorgen over de veiligheid van het Serums systeem",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q50: {
            question: "Ik vertrouw op het vermogen van het Serums systeem om mijn privacy te beschermen",
            answer: '',
            type: 'checkbox',
            values: ["Helemaal oneens", "Helemaal mee eens"]
        },
        q51: {
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
            title: 'Algemene achtergrond',
            range: [1, 5],
            text: ''
        },
        s2: {
            title: 'Algemene voorkeur en mening over het FlexPass Afbeeldingswachtwoord systeem',
            range: [6, 12],
            text: 'Gelieve uw algemene voorkeur en meningen met betrekking tot het FlexPass Afbeeldingswachtwoord systeem toe te lichten'
        },
        s3: {
            title: 'Wachtwoord aanmaken',
            range: [13, 16],
            text: 'Beoordeel uw perceptie met betrekking tot het FlexPass Afbeeldingswachtwoord systeem voor het aanmaken van wachtwoorden en het proces daarvan'
        },
        s4: {
            title: 'Inloggen met een wachtwoord',
            range: [17, 20],
            text: 'Beoordeel uw perceptie met betrekking tot het inloggen in het FlexPass Afbeeldingswachtwoord systeem'
        },
        s5: {
            title: 'Twee-factor Authenticatie Mobiele Applicatie',
            range: [21, 23],
            text: 'Beoordeel uw perceptie van het authenticatiesysteem met twee factoren'
        },
        s6: {
            title: 'Wachtwoord resetten',
            range: [24, 25],
            text: 'Beoordeel uw waarnemingen met betrekking tot het FlexPass Afbeeldingswachtwoord Resetsysteem en -proces'
        },
        s7: {
            title: 'Vertrouwen',
            range: [26, 29],
            text: 'Beoordeel uw vertrouwen in het FlexPass Afbeeldingswachtwoord systeem'
        },
        s8: {
            title: 'Patiëntvertrouwen medische gegevens',
            range: [30, 32],
            text: ''
        },
        s9: {
            title: 'Waargenomen bruikbaarheid',
            range: [33, 36],
            text: ''
        },
        s10: {
            title: 'Waargenomen gebruiksgemak',
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
            title: 'Waargenomen veiligheid van het Serums systeem',
            range: [48, 51],
            text: ''
        }
    },
    sectionTranslation: "Sectie",
    next: "Volgende",
    previous: "Vorige",
    consent: "Ik ga akkoord",
    submit: "Verzenden"
}

export default zmcProfessionalQuestions;