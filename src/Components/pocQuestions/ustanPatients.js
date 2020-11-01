const ustanPatientQuestions = {
    questions: {
        q1: {
            question: "Please enter your User ID that was provided by the researcher" ,
            answer: '',
            type: 'input'
        },
        q2: {
            question: "What is your Age range (in years)?",
            answer: '',
            type: 'select',
            values: ["18-25", "26-35", "36-45", "46-55", "56-65", "66 and above"]
        },
        q3: {
            question: "What is your highest degree of education?",
            answer: '',
            type: 'select',
            values: ["Ph.D. Studies", "Master Studies", "Bachelor Studies", "High School", "Primary School"]
        },
        q4: {
            question: "How would you rate your computer literacy?",
            answer: '',
            type: 'checkbox',
            values: ["Beginner", "Advanced"],
            selected: {1: false, 2: false, 3: true, 4: false, 5: false}
        },
        q5: {
            question: "Do you currently have regular access to a computer?",
            answer: '',
            type: 'select',
            values: ["Yes", "No"]
        },
        q6: {
            question: "Overall, how difficult or easy did you find the password creation task in FlexPass?",
            answer: '',
            type: 'checkbox',
            values: ["Very difficult", "Very easy"],
            selected: {1: false, 2: false, 3: true, 4: false, 5: false}
        },
        q7: {
            question: "Overall, how slow or fast did you find the password creation task in FlexPass?",
            answer: '',
            type: 'checkbox',
            values: ["Slow", "Fast"],
            selected: {1: false, 2: false, 3: true, 4: false, 5: false}
        },
        q8: {
            question: "How long (in seconds) did you need to create your password in FlexPass?",
            answer: '',
            type: 'input'
        },
        q9: {
            question: "Overall, how secure do you find the FlexPass password system?",
            answer: '',
            type: 'checkbox',
            values: ["Very insecure", "Very secure"],
            selected: {1: false, 2: false, 3: true, 4: false, 5: false}
        },
        q10: {
            question: "How strong do you believe your FlexPass password is?",
            answer: '',
            type: 'checkbox',
            values: ["Very weak", "Very strong"]
        },
        q11: {
            question: "Did the image scenery impact your password selections (i.e., did you create a certain story when selecting points on the image, did you consider any past experiences as part of your selections)? If yes, please explain how the image scenery impacted your password selections",
            answer: '',
            type: 'textarea'
        },
        q12: {
            question: "How did you decide where to draw the gestures on the image?",
            answer: '',
            type: 'textarea'
        },
        q13: {
            question: "How did you decide which gesture (tap, line, or circle) to draw?",
            answer: '',
            type: 'textarea'
        },
        q14: {
            question: "What strategy did you follow to create your password?",
            answer: '',
            type: 'textarea'
        },
        q15: {
            question: "What type of background image would you prefer?",
            answer: '',
            type: 'textarea'
        },
        q16: {
            question: "Overall, how difficult or easy did you find the login task in FlexPass?",
            answer: '',
            type: 'checkbox',
            values: ["Very difficult", "Very easy"]
        },
        q17: {
            question: "How mentally demanding was the login task?",
            answer: '',
            type: 'checkbox',
            values: ["Very low", "Very high"]
        },
        q18: {
            question: "I could easily log on to the FlexPass password system",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q19: {
            question: "I effectively remembered my password",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q20: {
            question: "Overall, how difficult or easy did you find the installation and enrollment to the two-factor authentication mobile application?",
            answer: '',
            type: 'checkbox',
            values: ["Very difficult", "Very easy"]
        },
        q21: {
            question: "Overall, how difficult or easy did you find the two-factor authentication approval task (push notification)?",
            answer: '',
            type: 'checkbox',
            values: ["Very difficult", "Very easy"]
        },
        q22: {
            question: "Overall, how secure do you find the two-factor authentication mobile application?",
            answer: '',
            type: 'checkbox',
            values: ["Very insecure", "Very secure"]
        },
        q23: {
            question: "I would be willing to use the two-factor authentication mobile application in my everyday tasks",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
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
            question: "I trust in the ability of the FlexPass password system to protect my privacy",
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
            question: "Do you like the idea of creating picture passwords with personalized images tailored to the users' prior daily life activities and experiences?",
            answer: '',
            type: 'checkbox',
            values: ["Not at all", "Extremely"]
        },
        q31: {
            question: "Do you like the idea of allowing users to flexibly choose their preferred authentication method (picture or text password)?",
            answer: '',
            type: 'checkbox',
            values: ["Not at all", "Extremely"]
        },
        q32: {
            question: "What are the positive aspects you like in the FlexPass password system?",
            answer: '',
            type: 'textarea'
        },
        q33: {
            question: "What are the negative aspects you do not like in the FlexPass password system?",
            answer: '',
            type: 'textarea'
        },
        q34: {
            question: "I would be willing to use the FlexPass password system as an alternative user authentication system to login to my user account",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q35: {
            question: "Explain the reasoning behind your answer in the previous question",
            answer: '',
            type: 'textarea'
        },
        q36: {
            question: "How comfortable or uncomfortable would you be with this system managing your medical data?",
            answer: '',
            type: 'checkbox',
            values: ["Very uncomfortable", "Very comfortable"]
        },
        q37: {
            question: "How capable or incapable do you consider this system in handling medical data securely?",
            answer: '',
            type: 'checkbox',
            values: ["Very incapable", "Very capable"]
        },
        q38: {
            question: "Please rate your agreement with the following statement: 'I trust this system to handle my medical data in a safe and secure manner'",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q39: {
            question: "Using the Serums technology would make it possible to share and get insight in my medical data",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q40: {
            question: "Using the Serums technology would make finding and sharing my medical information more efficient",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q41: {
            question: "Using the Serums technology would enhance my ability to retrieve and share my medical files",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q42: {
            question: "I would find the Serums technology useful",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q43: {
            question: "Learning to operate the Serums technology would be easy for me",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q44: {
            question: "I would find it easy to get the Serums technology to do what I want it to do",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q45: {
            question: "It would be easy for me to become skillful in the use of the Serums technology",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q46: {
            question: "I would find the Serums technology easy to use",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q47: {
            question: "I would intend to use the Serums technology when I need access to my medical files",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q48: {
            question: "I believe my personal information is accessible only to those authorized to have access",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q49: {
            question: "It is clear what information about me Serums keeps in the system",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q50: {
            question: "It is clear who is the audience of my shared information",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q51: {
            question: "I think Serums allows me to restrict the access to some of my personal information to some people",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q52: {
            question: "I think I have control over what personal information I can share via Serums",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q53: {
            question: "It is clear what information about me caregivers can see on Serums",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q54: {
            question: "Overall, how secure do you find the Serums system?",
            answer: '',
            type: 'checkbox',
            values: ["Very insecure", "Very secure"]
        },
        q55: {
            question: "I am not worried about the security of the Serums system",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q56: {
            question: "I trust in the ability of the Serums system to protect my privacy",
            answer: '',
            type: 'checkbox',
            values: ["Strongly disagree", "Strongly agree"]
        },
        q57: {
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
            title: 'Password Creation',
            range: [6, 15],
            text: 'Please rate your experience and perceptions with regards to the FlexPass password creation system and process'
        },
        s4: {
            title: 'Password Login',
            range: [16, 19],
            text: 'Please rate your experience and perceptions with regards to the FlexPass login system'
        },
        s5: {
            title: 'Two-factor Authentication Mobile Application',
            range: [20, 23],
            text: 'In case you have used the two-factor authentication mobile application, please rate your experience and perceptions with regards to the two-factor authentication system'
        },
        s6: {
            title: 'Password Reset',
            range: [24, 25],
            text: 'In case you have reset your password, please rate your experience and perceptions with regards to the FlexPass password reset system and process'
        },
        s7: {
            title: 'Trust',
            range: [26, 29],
            text: 'Please rate your trust towards the FlexPass password system'
        },
        s8: {
            title: 'Password Experience and Preference',
            range: [30, 35],
            text: 'Please explain your overall experience, preference and opinions with regards to the FlexPass password system'
        },
        s9: {
            title: 'Patient trust medical data',
            range: [36, 38],
            text: ''
        },
        s10: {
            title: 'Perceived Usefulness ',
            range: [39, 42],
            text: ''
        },
        s11: {
            title: 'Perceived Ease of Use ',
            range: [43, 46],
            text: ''
        },
        s12: {
            title: 'Behavioural Intention to use ',
            range: [47, 47],
            text: ''
        },
        s13: {
            title: 'Data ownership',
            range: [48, 53],
            text: ''
        },
        s14: {
            title: 'Perceived security of Serums system',
            range: [54, 57],
            text: ''
        }
    }
}

export default ustanPatientQuestions;