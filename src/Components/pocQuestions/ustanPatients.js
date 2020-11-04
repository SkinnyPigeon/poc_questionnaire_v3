const ustanPatientQuestions = {
    questions: {
        q1: {
            question: "Please enter your User ID that was provided by the researcher" ,
            answer: '',
            type: 'input',
            values: [""]
        },
        q2: {
            question: "What is your Age range (in years)?",
            answer: 0,
            type: 'select',
            values: ["Select your answer", "18-25", "26-35", "36-45", "46-55", "56-65", "66 and above"]
        },
        q3: {
            question: "What is your highest degree of education?",
            answer: 0,
            type: 'select',
            values: ["Select your answer", "Ph.D. Studies", "Master Studies", "Bachelor Studies", "High School", "Primary School"]
        },
        q4: {
            question: "How would you rate your computer literacy?",
            answer: 0,
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
            question: "I think that I would like to use the FlexPass system frequently",
            answer: 0,
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q7: {
            question: "I found the FlexPass system unnecessarily complex",
            answer: 0,
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q8: {
            question: "I thought the FlexPass system was easy to use",
            answer: 0,
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q9: {
            question: "I think that I would need the support of a technical person to be able to use the FlexPass system",
            answer: 0,
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q10: {
            question: "I found the various functions in the FlexPass system were well integrated",
            answer: 0,
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q11: {
            question: "I thought there was too much inconsistency in the FlexPass system",
            answer: 0,
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q12: {
            question: "I would imagine that most people would learn to use the FlexPass system very quickly",
            answer: 0,
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q13: {
            question: "I found the FlexPass system very cumbersome to use",
            answer: 0,
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q14: {
            question: "I felt very confident using the FlexPass system",
            answer: 0,
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q15: {
            question: "I needed to learn a lot of things before I could get going with the FlexPass system",
            answer: 0,
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q16: {
            question: "Overall, how difficult or easy did you find the password creation task in FlexPass?",
            answer: 0,
            type: 'checkbox',
            values: ["Very difficult", "Very easy"]
        },
        q17: {
            question: "Overall, how slow or fast did you find the password creation task in FlexPass?",
            answer: 0,
            type: 'checkbox',
            values: ["Slow", "Fast"]
        },
        q18: {
            question: "How long (in seconds) did you need to create your password in FlexPass?",
            answer: '',
            type: 'input',
            values: ["Seconds"]
        },
        q19: {
            question: "Overall, how secure do you find the FlexPass password system?",
            answer: '',
            type: 'checkbox',
            values: ["Very insecure", "Very secure"]
        },
        q20: {
            question: "How strong do you believe your FlexPass password is?",
            answer: '',
            type: 'checkbox',
            values: ["Very weak", "Very strong"]
        },
        q21: {
            question: "Did the image scenery impact your password selections (i.e., did you create a certain story when selecting points on the image, did you consider any past experiences as part of your selections)? If yes, please explain how the image scenery impacted your password selections (optional)",
            answer: '',
            type: 'textarea',
            optional: true
        },
        q22: {
            question: "How did you decide where to draw the gestures on the image? (optional)",
            answer: '',
            type: 'textarea',
            optional: true
        },
        q23: {
            question: "How did you decide which gesture (tap, line, or circle) to draw? (optional)",
            answer: '',
            type: 'textarea',
            optional: true
        },
        q24: {
            question: "What strategy did you follow to create your password? (optional)",
            answer: '',
            type: 'textarea',
            optional: true
        },
        q25: {
            question: "What type of background image would you prefer? (optional)",
            answer: '',
            type: 'textarea',
            optional: true
        },
        q26: {
            question: "Overall, how difficult or easy did you find the login task in FlexPass?",
            answer: '',
            type: 'checkbox',
            values: ["Very difficult", "Very easy"]
        },
        q27: {
            question: "How mentally demanding was the login task?",
            answer: '',
            type: 'checkbox',
            values: ["Very low", "Very high"]
        },
        q28: {
            question: "I could easily log on to the FlexPass password system",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q29: {
            question: "I effectively remembered my password",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q30: {
            question: "Did you successfully install and enroll to the two-factor authentication mobile application?",
            answer: 0,
            type: 'select',
            values: ["Select your answer", "Yes", "No"]
        },
        q31: {
            question: "If your answer was 'Yes', which two-factor authentication method did you use to login?",
            answer: 0,
            type: 'select',
            values: ["Select your answer", "Push notification message", "Secret code (Time-based One-Time Password - TOTP)"],
            optional: false
        },
        q32: {
            question: "Did you successfully access the system after using the two-factor authentication method?",
            answer: 0,
            type: 'select',
            values: ["Select your answer", "Yes", "No"],
            optional: false
        },
        q33: {
            question: "Overall, how difficult or easy did you find the installation and enrollment to the two-factor authentication mobile application?",
            answer: '',
            type: 'checkbox',
            values: ["Very difficult", "Very easy"],
            optional: false
        },
        q34: {
            question: "Overall, how difficult or easy did you find the two-factor authentication approval task (push notification or secret code)?",
            answer: '',
            type: 'checkbox',
            values: ["Very difficult", "Very easy"],
            optional: false
        },
        q35: {
            question: "Overall, how secure do you find the two-factor authentication mobile application?",
            answer: '',
            type: 'checkbox',
            values: ["Very insecure", "Very secure"],
            optional: false
        },
        q36: {
            question: "I would be willing to use the two-factor authentication mobile application in my everyday tasks",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"],
            optional: false
        },
        q37: {
            question: "Overall, how difficult or easy did you find the password reset process of the FlexPass system?",
            answer: '',
            type: 'checkbox',
            values: ["Very difficult", "Very easy"]
        },
        q38: {
            question: "Overall, how secure did you find the password reset process of the FlexPass system?",
            answer: '',
            type: 'checkbox',
            values: ["Very insecure", "Very secure"]
        },
        q39: {
            question: "I trust in the technology the FlexPass password system is using",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q40: {
            question: "I trust in the ability of the FlexPass password system to protect my privacy",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q41: {
            question: "I am not worried about the security of the FlexPass password system",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q42: {
            question: "I trust the FlexPass password system to protect my account and data from cybercriminals",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q43: {
            question: "Do you like the idea of creating picture passwords with personalized images tailored to the users' prior daily life activities and experiences?",
            answer: '',
            type: 'checkbox',
            values: ["Not at all", "Extremely"]
        },
        q44: {
            question: "Do you like the idea of allowing users to flexibly choose their preferred authentication method (picture or text password)?",
            answer: '',
            type: 'checkbox',
            values: ["Not at all", "Extremely"]
        },
        q45: {
            question: "What are the positive aspects you like in the FlexPass password system? (optional)",
            answer: '',
            type: 'textarea',
            optional: true
        },
        q46: {
            question: "What are the negative aspects you do not like in the FlexPass password system? (optional)",
            answer: '',
            type: 'textarea',
            optional: true
        },
        q47: {
            question: "I would be willing to use the FlexPass password system as an alternative user authentication system to login to my user account",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q48: {
            question: "Explain the reasoning behind your answer in the previous question",
            answer: '',
            type: 'textarea'
        },
        q49: {
            question: "How comfortable or uncomfortable would you be with this system managing your medical data?",
            answer: '',
            type: 'checkbox',
            values: ["Very uncomfortable", "Very comfortable"]
        },
        q50: {
            question: "How capable or incapable do you consider this system in handling medical data securely?",
            answer: '',
            type: 'checkbox',
            values: ["Very incapable", "Very capable"]
        },
        q51: {
            question: "Please rate your agreement with the following statement: 'I trust this system to handle my medical data in a safe and secure manner'",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q52: {
            question: "Using the Serums technology would make it possible to share and get insight in my medical data",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q53: {
            question: "Using the Serums technology would make finding and sharing my medical information more efficient",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q54: {
            question: "Using the Serums technology would enhance my ability to retrieve and share my medical files",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q55: {
            question: "I would find the Serums technology useful",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q56: {
            question: "Learning to operate the Serums technology would be easy for me",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q57: {
            question: "I would find it easy to get the Serums technology to do what I want it to do",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q58: {
            question: "It would be easy for me to become skillful in the use of the Serums technology",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q59: {
            question: "I would find the Serums technology easy to use",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q60: {
            question: "I would intend to use the Serums technology when I need access to my medical files",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q61: {
            question: "I believe my personal information is accessible only to those authorized to have access",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q62: {
            question: "It is clear what information about me Serums keeps in the system",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q63: {
            question: "It is clear who is the audience of my shared information",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q64: {
            question: "I think Serums allows me to restrict the access to some of my personal information to some people",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q65: {
            question: "I think I have control over what personal information I can share via Serums",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q66: {
            question: "It is clear what information about me caregivers can see on Serums",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q67: {
            question: "Overall, how secure do you find the Serums system?",
            answer: '',
            type: 'checkbox',
            values: ["Very insecure", "Very secure"]
        },
        q68: {
            question: "I am not worried about the security of the Serums system",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q69: {
            question: "I trust in the ability of the Serums system to protect my privacy",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q70: {
            question: "I trust in the technology the Serums system is using",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        }
    },
    sections: {
        s1: {
            title: 'User ID',
            range: [1, 1],
            text: ''
        },
        s2: {
            title: 'General Background',
            range: [2, 5],
            text: ''
        },
        s3: {
            title: 'FlexPass Password System Usability',
            range: [6, 15],
            text: 'Please rate the usability of the FlexPass Password System'
        },
        s4: {
            title: 'Password Creation',
            range: [16, 25],
            text: 'Please rate your experience and perceptions with regards to the FlexPass password creation system and process'
        },
        s5: {
            title: 'Password Login',
            range: [26, 29],
            text: 'Please rate your experience and perceptions with regards to the FlexPass login system'
        },
        s6: {
            title: 'Two-factor Authentication Mobile Application',
            range: [30, 36],
            text: 'In case you have used the two-factor authentication mobile application, please rate your experience and perceptions with regards to the two-factor authentication system'
        },
        s7: {
            title: 'Password Reset',
            range: [37, 38],
            text: 'In case you have reset your password, please rate your experience and perceptions with regards to the FlexPass password reset system and process'
        },
        s8: {
            title: 'Trust',
            range: [39, 42],
            text: 'Please rate your trust towards the FlexPass password system'
        },
        s9: {
            title: 'Password Experience and Preference',
            range: [43, 48],
            text: 'Please explain your overall experience, preference and opinions with regards to the FlexPass password system'
        },
        s10: {
            title: 'Patient trust medical data',
            range: [49, 51],
            text: ''
        },
        s11: {
            title: 'Perceived Usefulness',
            range: [52, 55],
            text: ''
        },
        s12: {
            title: 'Perceived Ease of Use',
            range: [56, 59],
            text: ''
        },
        s13: {
            title: 'Behavioural Intention to use',
            range: [60, 60],
            text: ''
        },
        s14: {
            title: 'Data ownership',
            range: [61, 66],
            text: ''
        },
        s15: {
            title: 'Perceived security of Serums system',
            range: [67, 70],
            text: ''
        }
    }
}

export default ustanPatientQuestions;