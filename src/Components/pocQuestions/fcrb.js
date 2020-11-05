const fcrbQuestions = {
    questions: {
        q1: {
            question: "Introdueixi el codi d'usuari proveït per l’investigador" ,
            answer: '',
            type: 'input',
            values: [""]
        },
        q2: {
            question: "En quin rang d’edat es troba vostè (en anys)?",
            answer: 0,
            type: 'select',
            values: ["Si us plau seleccioneu", "18-25", "26-35", "36-45", "46-55", "56-65", "66 o més"]
        },
        q3: {
            question: "Quin és el grau més alt de la seva educació oficial?",
            answer: 0,
            type: 'select',
            values: ["Si us plau seleccioneu", "Doctorat", "Estudis de Màster", "Estudis de Grau / Diplomatura", "Estudis de Batxillerat", "Estudis Secundaris"]
        },
        q4: {
            question: "Com qualificaria els seus coneixements informàtics?",
            answer: '',
            type: 'checkbox',
            values: ["Principiant", "Avançat"]
        },
        q5: {
            question: "Té accés regular a un ordinador?",
            answer: 0,
            type: 'select',
            values: ["Si us plau seleccioneu", "Sí", "No"]
        },
        q6: {
            question: "Crec que m’agradaria fer servir el sistema FlexPass freqüentment",
            answer: '',
            type: 'checkbox',
            values: ["Molt en desacord", "Molt d’acord"],
            selected: {1: false, 2: false, 3: true, 4: false, 5: false}
        },
        q7: {
            question: "He trobat el sistema FlexPass innecessàriament complexe",
            answer: '',
            type: 'checkbox',
            values: ["Molt en desacord", "Molt d’acord"],
            selected: {1: false, 2: false, 3: true, 4: false, 5: false}
        },
        q8: {
            question: "He trobat el sistema FlexPass fàcil d’usar",
            answer: '',
            type: 'checkbox',
            values: ["Molt en desacord", "Molt d’acord"]
        },
        q9: {
            question: "Crec que necessitaria el suport d’un tècnic per a poder usar el sistema FlexPass",
            answer: '',
            type: 'checkbox',
            values: ["Molt en desacord", "Molt d’acord"]
        },
        q10: {
            question: "Trobo que les varies funcionalitats del sistema FlexPass han sigut ben integrades",
            answer: '',
            type: 'checkbox',
            values: ["Molt en desacord", "Molt d’acord"]
        },
        q11: {
            question: "He trobat que hi ha massa inconsistència en el sistema FlexPass",
            answer: '',
            type: 'checkbox',
            values: ["Molt en desacord", "Molt d’acord"]
        },
        q12: {
            question: "Crec que a la majoria de la gent aprendria a fer servir el sistema FlexPass ràpidament",
            answer: '',
            type: 'checkbox',
            values: ["Molt en desacord", "Molt d’acord"]
        },
        q13: {
            question: "Trobo que el el systema FlexPass ha sigut molt incomode d’usar",
            answer: '',
            type: 'checkbox',
            values: ["Molt en desacord", "Molt d’acord"]
        },
        q14: {
            question: "M’he sentit molt segur en fer servir el sistema FlexPass",
            answer: '',
            type: 'checkbox',
            values: ["Molt en desacord", "Molt d’acord"]
        },
        q15: {
            question: "He necessitat aprendre moltes coses abans de poder avançar en l’ús del sistema FlexPass",
            answer: '',
            type: 'checkbox',
            values: ["Molt en desacord", "Molt d’acord"]
        },
        q16: {
            question: "En general com ha sigut de fàcil o difícil la tasca de creació d'una contrasenya amb FlexPass?",
            answer: '',
            type: 'checkbox',
            values: ["Molt difícil", "Molt fàcil"]
        },
        q17: {
            question: "En general com de ràpida o lenta li ha semblat la tasca de creació d'una contrasenya amb FlexPass",
            answer: '',
            type: 'checkbox',
            values: ["Lent", "Ràpid"]
        },
        q18: {
            question: "Quant li ha costat (en segons) crear la seva contrasenya a FlexPass?",
            answer: '',
            type: 'input',
            values: ["Segons"]
        },
        q19: {
            question: "En general com troba de segur el sistema de contrasenya FlexPass?",
            answer: '',
            type: 'checkbox',
            values: ["Molt insegura", "Molt segura"]
        },
        q20: {
            question: "Com de segura creu que és la seva contrasenya feta amb FlexPass?",
            answer: '',
            type: 'checkbox',
            values: ["Molt dèbil", "Molt resistent"]
        },
        q21: {
            question: "L'escena representada a la imatge ha tingut impacte en la selecció de la contrasenya (és a dir, ha creat una història concreta a l'hora de seleccionar punts en la imatge, ha considerat alguna experiència passada com a part de la seva selecció)? Si és així expliqui com la escena de la imatge ha intervingut en la selecció de la seva contrasenya",
            answer: '',
            type: 'textarea',
            optional: true
        },
        q22: {
            question: "Com ha decidit on dibuixar els gestos a la imatge? (opcional)",
            answer: '',
            type: 'textarea',
            optional: true
        },
        q23: {
            question: "Com ha decidit quin gest (punt, línia o cercle) dibuixar? (opcional)",
            answer: '',
            type: 'textarea',
            optional: true
        },
        q24: {
            question: "Quina estratègia ha seguit per a crear la seva contrasenya? (opcional)",
            answer: '',
            type: 'textarea',
            optional: true
        },
        q25: {
            question: "Quin tipus d'imatge de fons preferiria? (opcional)",
            answer: '',
            type: 'textarea',
            optional: true
        },
        q26: {
            question: "En general, com consideres de difícil o fàcil la tasca d'accés a FlexPass?",
            answer: '',
            type: 'checkbox',
            values: ["Molt difícil", "Molt fàcil"]
        },
        q27: {
            question: "Com de mentalment exigent ha sigut la tasca d'accés?",
            answer: '',
            type: 'checkbox',
            values: ["Molt poc", "Molt alt"]
        },
        q28: {
            question: "He pogut accedir fàcilment al sistema de contrasenya FlexPass",
            answer: '',
            type: 'checkbox',
            values: ["Molt en desacord", "Molt d’acord"]
        },
        q29: {
            question: "He recordat la meva contrasenya de manera efectiva",
            answer: '',
            type: 'checkbox',
            values: ["Molt en desacord", "Molt d’acord"]
        },
        q30: {
            question: "Ha pogut instal·lar i inscriure’t a l’aplicació d’autenticació de dos factors amb èxit?",
            answer: 0,
            type: 'select',
            values: ["Si us plau seleccioneu", "Sí", "No"],
            dependencies: true,
            linked: ['q31', 'q32', 'q33', 'q34', 'q35', 'q36'],
            trigger: 2
        },
        q31: {
            question: "Si la seva resposta ha sigut «Sí», quin mètode d’autenticació de dos factors ha fet servir per a accedir?",
            answer: 0,
            type: 'select',
            values: ["Si us plau seleccioneu", "Missatge de notificació push", "Codi secret (Contrasenya temporal d’un sol us - TOTP)"]
        },
        q32: {
            question: "Ha pogut accedir de manera exitosa al sistema després de fer servir l’autenticació de dos factors?",
            answer: 0,
            type: 'select',
            values: ["Si us plau seleccioneu", "Sí", "No"]
        },
        q33: {
            question: "En general com de difícil o fàcil ha sigut la instal·lació i inscripció a la aplicació mòbil d’autenticació de dos factors?",
            answer: '',
            type: 'checkbox',
            values: ["Molt difícil", "Molt fàcil"]
        },
        q34: {
            question: "En general com de fàcil o difícil ha sigut la tasca d’aprovar l’autenticació de dos factors  (notificació push o codi secret)?",
            answer: '',
            type: 'checkbox',
            values: ["Molt difícil", "Molt fàcil"]
        },
        q35: {
            question: "En general com de segura troba que es l’aplicació d’autentificació de dos factors",
            answer: '',
            type: 'checkbox',
            values: ["Molt insegura", "Molt segura"]
        },
        q36: {
            question: "Estaria disposat a utilitzar la aplicació d’autenticació de dos factors en les tasques del meu dia a dia",
            answer: '',
            type: 'checkbox',
            values: ["Molt en desacord", "Molt d’acord"]
        },
        q37: {
            question: "Did you require to reset your password?",
            answer: '',
            type: 'select',
            values: ["Si us plau seleccioneu", "Sí", "No"],
            dependencies: true,
            linked: ['q38', 'q39'],
            trigger: 2
        },
        q38: {
            question: "En general com de difícil o fàcil li ha semblat el procés de restabliment de la contrasenya del sistema FlexPass?",
            answer: '',
            type: 'checkbox',
            values: ["Molt difícil", "Molt fàcil"]
        },
        q39: {
            question: "En general com de segur troba el procés de restabliment del sistema FlexPass",
            answer: '',
            type: 'checkbox',
            values: ["Molt insegura", "Molt segura"]
        },
        q40: {
            question: "Confio en la tecnologia que fa servir el sistema de contrasenya FlexPass",
            answer: '',
            type: 'checkbox',
            values: ["Molt en desacord", "Molt d’acord"]
        },
        q41: {
            question: "Confio en l'habilitat del sistema de contrasenya FlexPass per a protegir la meva privacitat",
            answer: '',
            type: 'checkbox',
            values: ["Molt en desacord", "Molt d’acord"]
        },
        q42: {
            question: "No estic preocupat per la seguretat del sistema de contrasenya FlexPass",
            answer: '',
            type: 'checkbox',
            values: ["Molt en desacord", "Molt d’acord"]
        },
        q43: {
            question: "Confio en el sistema de contrasenya FlesPass per a protegir el meu compte i les meves dades de cibercriminals",
            answer: '',
            type: 'checkbox',
            values: ["Molt en desacord", "Molt d’acord"]
        },
        q44: {
            question: "Li agrada la idea de crear contrasenyes gràfiques amb imatges fetes a mida de la seva vida diària i experiència?",
            answer: '',
            type: 'checkbox',
            values: ["Gèns", "Extremadament"]
        },
        q45: {
            question: "Li agrada la idea de permetre als usuaris de triar de manera flexible el seu tipus d’autenticació preferida (gràfica o textual)?",
            answer: '',
            type: 'checkbox',
            values: ["Gèns", "Extremadament"]
        },
        q46: {
            question: "Quins son els aspectes positius que li agraden del sistema de contrasenya FlexPass?(opcional)?",
            answer: '',
            type: 'textarea',
            optional: true
        },
        q47: {
            question: "Quins son els aspectes negatius que no li han agradat del sistema de contrasenya FlexPass? (opcional)",
            answer: '',
            type: 'textarea',
            optional: true
        },
        q48: {
            question: "Estaria disposat a fer servir el sistema FlexPass com a sistema alternatiu d’autenticació d’usuari per a accedir a la meva compta d’usuari",
            answer: '',
            type: 'checkbox',
            values: ["Molt en desacord", "Molt d’acord"]
        },
        q49: {
            question: "Expliqui el raonament darrere la resposta a la pregunta anterior",
            answer: '',
            type: 'textarea'
        },
        q50: {
            question: "Com de còmode o incòmode estaria si aquest sistema gestionés les seves dades mèdiques?",
            answer: '',
            type: 'checkbox',
            values: ["Molt incomode", "Molt còmode"]
        },
        q51: {
            question: "Com de capaç o incapaç considera aquest sistema per gestionar les seves dades mèdiques?",
            answer: '',
            type: 'checkbox',
            values: ["Molt incapaç", "Molt capaç"]
        },
        q52: {
            question: "Si us plau qualifiqueu com d'acord esteu amb la següent afirmació: 'Confio en aquest sistema perquè gestioni les meves dades mèdiques de manera segura'",
            answer: '',
            type: 'checkbox',
            values: ["Molt en desacord", "Molt d’acord"]
        },
        q53: {
            question: "Usant el la tecnologia Serums seria possible compartir i obtenir informació de les meves dades mèdiques",
            answer: '',
            type: 'checkbox',
            values: ["Molt en desacord", "Molt d’acord"]
        },
        q54: {
            question: "Usant la tecnologia Serums seria possible trobar i compartir les meves dades mèdiques de manera més eficient",
            answer: '',
            type: 'checkbox',
            values: ["Molt en desacord", "Molt d’acord"]
        },
        q55: {
            question: "Usant la tecnologia Serums augmentaria la meva capacitat per recuperar i compartir els meus fitxers mèdics",
            answer: '',
            type: 'checkbox',
            values: ["Molt en desacord", "Molt d’acord"]
        },
        q56: {
            question: "Consideraría la tecnología Serums útil",
            answer: '',
            type: 'checkbox',
            values: ["Molt en desacord", "Molt d’acord"]
        },
        q57: {
            question: "Aprendre a fer servir la tecnología de Serums em sería fàcil",
            answer: '',
            type: 'checkbox',
            values: ["Molt en desacord", "Molt d’acord"]
        },
        q58: {
            question: "Trobaria fàcil de fer que la tecnología de Serums fes el que jo volgués que fes",
            answer: '',
            type: 'checkbox',
            values: ["Molt en desacord", "Molt d’acord"]
        },
        q59: {
            question: "Seria fàcil per a mi tornar-me hàbil en l’ús de la tecnologia de Serums",
            answer: '',
            type: 'checkbox',
            values: ["Molt en desacord", "Molt d’acord"]
        },
        q60: {
            question: "Trobaria la tecnologia de Serums fàcil d’utilitzar",
            answer: '',
            type: 'checkbox',
            values: ["Molt en desacord", "Molt d’acord"]
        },
        q61: {
            question: "Faria servir la tecnologia de Serums quan hagués d’accedir als meus fitxers mèdics",
            answer: '',
            type: 'checkbox',
            values: ["Molt en desacord", "Molt d’acord"]
        },
        q62: {
            question: "Crec que la meva informació personal és només accessible a aquells autoritzats a tenir-lo",
            answer: '',
            type: 'checkbox',
            values: ["Molt en desacord", "Molt d’acord"]
        },
        q63: {
            question: "És clar quina informació de mi guarda Serums al sistema",
            answer: '',
            type: 'checkbox',
            values: ["Molt en desacord", "Molt d’acord"]
        },
        q64: {
            question: "És clar qui serà l’audiència de les meves dades compartides",
            answer: '',
            type: 'checkbox',
            values: ["Molt en desacord", "Molt d’acord"]
        },
        q65: {
            question: "Crec que Serums em permet restringir l’accés a les meves dades personals a algunes persones",
            answer: '',
            type: 'checkbox',
            values: ["Molt en desacord", "Molt d’acord"]
        },
        q66: {
            question: "Crec que tinc control sobre quina informació puc compartir via Serums",
            answer: '',
            type: 'checkbox',
            values: ["Molt en desacord", "Molt d’acord"]
        },
        q67: {
            question: "És clar quina informació poden veure els meus cuidadors a Serums",
            answer: '',
            type: 'checkbox',
            values: ["Molt en desacord", "Molt d’acord"]
        },
        q68: {
            question: "En general com de segur creu que és el sistema Serums",
            answer: '',
            type: 'checkbox',
            values: ["Molt insegura", "Molt segura"]
        },
        q69: {
            question: "No estic precupat per la seguretat del sistema Serums",
            answer: '',
            type: 'checkbox',
            values: ["Molt en desacord", "Molt d’acord"]
        },
        q70: {
            question: "Confio en la habilitat del sistema Serums per a protegir la meva privacitat",
            answer: '',
            type: 'checkbox',
            values: ["Molt en desacord", "Molt d’acord"]
        },
        q71: {
            question: "Confio en la tecnologia que fa servir el sistema Serums",
            answer: '',
            type: 'checkbox',
            values: ["Molt en desacord", "Molt d’acord"]
        }
    },
    sections: {
        s1: {
            title: 'ID d’Usuari',
            range: [1, 1],
            text: ''
        },
        s2: {
            title: 'Antecedents Generals',
            range: [2, 5],
            text: ''
        },
        s3: {
            title: 'Usabilitat del Sistema de Contrasenya FlexPass',
            range: [6, 15],
            text: 'Qualifiqui la usabilitat del Sistema de Contrasenya FlexPass'
        },
        s4: {
            title: 'Creació de la Contrasenya',
            range: [16, 25],
            text: 'Siusplau, qualifiqui la seva experiència i percepció pel que fa al sistema i procés de creació de la contrasenya FlexPass'
        },
        s5: {
            title: 'Accés amb Contrasenya',
            range: [26, 29],
            text: "Qualifiqui la seva experiència i percepcions pel que fa al sistema d'accés FlexPass"
        },
        s6: {
            title: 'Aplicació mòbil per a l’Autenticació de Dos Factors',
            range: [30, 36],
            text: 'En cas d’haver fet servir la aplicació mòbil d’autenticació de dos factors, si us plau qualifiqui la seva experiència'
        },
        s7: {
            title: 'Restabliment de la Contrasenya',
            range: [37, 39],
            text: 'En cas de que hagi hagut de restablir la seva contrasenya, si us plau qualifiqui la seva experiència i percepcions pel que fa al sistema i procés de restabliment de la contrasenya del sistema FlexPass'
        },
        s8: {
            title: 'Confiança',
            range: [40, 43],
            text: 'Siusplau qualifiqui la seva confiança en systema de contrasenya FlexPass'
        },
        s9: {
            title: 'Experiència i Preferència de la Contrasenya',
            range: [44, 49],
            text: 'Siusplau, expliqui la seva experiència, preferències i opinions sobre el sistema de contrasenya FlexPass'
        },
        s10: {
            title: 'Confiança del Pacient sobre Dades Mèdiques',
            range: [50, 52],
            text: ''
        },
        s11: {
            title: 'Utilitat Percebuda',
            range: [53, 56],
            text: ''
        },
        s12: {
            title: 'Percepció de Facilitat en l’Ús',
            range: [57, 60],
            text: ''
        },
        s13: {
            title: 'Intenció Conductual a usar',
            range: [61, 61],
            text: ''
        },
        s14: {
            title: 'Propietat de les Dades',
            range: [62, 67],
            text: ''
        },
        s15: {
            title: 'Seguretat percebuda del sistema Serums',
            range: [68, 71],
            text: ''
        }
    },
    message: "Skipping questions due to answer provided on Q30",
    sectionTranslation: "Secció"
}

export default fcrbQuestions;