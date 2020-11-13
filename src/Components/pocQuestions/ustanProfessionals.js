const ustanProfessionalQuestions = {
    questions: {
        q1: {
            question: "What is your Age range (in years)?",
            answer: 0,
            type: 'select',
            values: ["Select your answer", "18-25", "26-35", "36-45", "46-55", "56-65", "66 and above"]
        },
        q2: {
            question: "What is your highest degree of education?",
            answer: 0,
            type: 'select',
            values: ["Select your answer", "Ph.D. Studies", "Master Studies", "Bachelor Studies", "High School", "Primary School"]
        },
        q3: {
            question: "What is your occupation?",
            answer: 0,
            type: 'select',
            values: ["Select your answer", "Doctor", "Nurse", "Caregiver", "IT Expert", "Security Expert", "Other"]
        },
        q4: {
            question: "How would you rate your computer literacy?",
            answer: '',
            type: 'checkbox',
            values: ["Beginner", "Advanced"]
        },
        q5: {
            question: "Do you currently have regular access to a computer?",
            answer: 0,
            type: 'select',
            values: ["Select your answer", "Yes", "No"]
        },
        q6: {
            question: "Do you like the idea of creating picture passwords with personalized images tailored to the users' prior daily life activities and experiences?",
            answer: '',
            type: 'checkbox',
            values: ["Not at all", "Extremely"]
        },
        q7: {
            question: "Do you like the idea of allowing users to flexibly choose their preferred authentication method (picture or text password)?",
            answer: '',
            type: 'checkbox',
            values: ["Not at all", "Extremely"]
        },
        q8: {
            question: "Do you believe that FlexPass would be a good alternative authentication method for patients?",
            answer: '',
            type: 'checkbox',
            values: ["Not at all", "Extremely"]
        },
        q9: {
            question: "What are the positive aspects you like in the FlexPass password system?",
            answer: '',
            type: 'textarea'
        },
        q10: {
            question: "What are the negative aspects you do not like in the FlexPass password system?",
            answer: '',
            type: 'textarea'
        },
        q11: {
            question: "Would you be willing to use the FlexPass password system as an alternative user authentication system to login to your user account?",
            answer: 0,
            type: 'select',
            values: ["Select your answer", "Yes", "No"]
        },
        q12: {
            question: "Explain the reasoning behind your answer in the previous question",
            answer: '',
            type: 'textarea'
        },
        q13: {
            question: "Overall, how difficult or easy do you find the password creation task in FlexPass?",
            answer: '',
            type: 'checkbox',
            values: ["Very difficult", "Very easy"]
        },
        q14: {
            question: "Overall, how slow or fast do you find the password creation task in FlexPass?",
            answer: '',
            type: 'checkbox',
            values: ["Slow", "Fast"]
        },
        q15: {
            question: "Overall, how secure do you find the FlexPass password system?",
            answer: '',
            type: 'checkbox',
            values: ["Very insecure", "Very secure"]
        },
        q16: {
            question: "How strong do you believe a FlexPass password is?",
            answer: '',
            type: 'checkbox',
            values: ["Very weak", "Very strong"]
        },
        q17: {
            question: "Overall, how difficult or easy do you find the login task in FlexPass?",
            answer: '',
            type: 'checkbox',
            values: ["Very difficult", "Very easy"]
        },
        q18: {
            question: "How mentally demanding do you believe the login task is?",
            answer: '',
            type: 'checkbox',
            values: ["Very low", "Very high"]
        },
        q19: {
            question: "Patients will easily log on to the FlexPass password system",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q20: {
            question: "Patients will effectively remember their password",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q21: {
            question: "Overall, how difficult or easy do you find the installation and enrollment to the two-factor authentication mobile application?",
            answer: '',
            type: 'checkbox',
            values: ["Very difficult", "Very easy"]
        },
        q22: {
            question: "Overall, how difficult or easy do you find the two-factor authentication approval task (push notification)?",
            answer: '',
            type: 'checkbox',
            values: ["Very difficult", "Very easy"]
        },
        q23: {
            question: "Overall, how secure do you find the two-factor authentication mobile application?",
            answer: '',
            type: 'checkbox',
            values: ["Very insecure", "Very secure"]
        },
        q24: {
            question: "Overall, how difficult or easy did you find the password reset process of the FlexPass system?",
            answer: '',
            type: 'checkbox',
            values: ["Very difficult", "Very easy"]
        },
        q25: {
            question: "Overall, how secure did you find the password reset process of the FlexPass system?",
            answer: '',
            type: 'checkbox',
            values: ["Very insecure", "Very secure"]
        },
        q26: {
            question: "I trust in the technology the FlexPass password system is using",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q27: {
            question: "I trust in the ability of the FlexPass password system to protect the patients' privacy",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q28: {
            question: "I am not worried about the security of the FlexPass password system",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q29: {
            question: "I trust the FlexPass password system to protect my account and data from cybercriminals",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q30: {
            question: "How comfortable or uncomfortable would you be with this system managing the patient’s medical data?",
            answer: '',
            type: 'checkbox',
            values: ["Very uncomfortable", "Very comfortable"]
        },
        q31: {
            question: "How capable or incapable do you consider this system in handling medical data securely?",
            answer: '',
            type: 'checkbox',
            values: ["Very incapable", "Very capable"]
        },
        q32: {
            question: "Please rate your agreement with the following statement: 'I trust this system to handle medical data in a safe and secure manner'",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q33: {
            question: "Using the Serums technology would make it possible to share and get insight in the patient’s medical data",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q34: {
            question: "Using the Serums technology would make finding and sharing the patient’s medical information more efficient",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q35: {
            question: "Using the Serums technology would enhance my ability to retrieve and share all patient’s medical files",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q36: {
            question: "I would find the Serums technology useful",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q37: {
            question: "Learning to operate the Serums technology would be easy for me",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q38: {
            question: "I would find it easy to get the Serums technology to do what I want it to do",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q39: {
            question: "It would be easy for me to become skillful in the use of the Serums technology",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q40: {
            question: "I would find the Serums technology easy to use",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q41: {
            question: "I would intend to use the Serums technology when I need access to all patients medical files",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q42: {
            question: "I believe the patient’s personal medical information is accessible only to those authorized to have access",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q43: {
            question: "It is clear what information about the patient Serums keeps in the system",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q44: {
            question: "It is clear who is the audience of the patient’s shared information",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q45: {
            question: "I think Serums allows the patient to restrict the access to some of his personal information to some people",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q46: {
            question: "I think the patient has control over what personal information he or she can share via Serums",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q47: {
            question: "It is clear what patient information caregivers can see on",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q48: {
            question: "Overall, how secure do you find the Serums system?",
            answer: '',
            type: 'checkbox',
            values: ["Very insecure", "Very secure"]
        },
        q49: {
            question: "I am not worried about the security of the Serums system",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q50: {
            question: "I trust in the ability of the Serums system to protect my privacy",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q51: {
            question: "I trust in the technology the Serums system is using",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        }
    },
    sections: {
        s1: {
            title: 'General Background',
            range: [1, 5],
            text: ''
        },
        s2: {
            title: 'General Preference and Opinion about FlexPass',
            range: [6, 12],
            text: 'Please explain your overall preference and opinions with regards to the FlexPass password system'
        },
        s3: {
            title: 'Password Creation',
            range: [13, 16],
            text: 'Please rate your perceptions with regards to the FlexPass password creation system and process'
        },
        s4: {
            title: 'Password Login',
            range: [17, 20],
            text: 'Please rate your perceptions with regards to the FlexPass login system'
        },
        s5: {
            title: 'Two-factor Authentication Mobile Application',
            range: [21, 23],
            text: 'Please rate your perceptions with regards to the two-factor authentication system'
        },
        s6: {
            title: 'Password Reset',
            range: [24, 25],
            text: 'Please rate your perceptions with regards to the FlexPass password reset system and process'
        },
        s7: {
            title: 'Trust',
            range: [26, 29],
            text: 'Please rate your trust towards the FlexPass password system'
        },
        s8: {
            title: 'Patient trust medical data',
            range: [30, 32],
            text: ''
        },
        s9: {
            title: 'Perceived Usefulness',
            range: [33, 36],
            text: ''
        },
        s10: {
            title: 'Perceived Ease of Use',
            range: [37, 40],
            text: ''
        },
        s11: {
            title: 'Behavioural Intention to use',
            range: [41, 41],
            text: ''
        },
        s12: {
            title: 'Data ownership',
            range: [42, 47],
            text: ''
        },
        s13: {
            title: 'Perceived security of Serums system',
            range: [48, 51],
            text: ''
        }
    },
    sectionTranslation: "Section",
    next: "Next",
    previous: "Previous"
}

export default ustanProfessionalQuestions;