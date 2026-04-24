// JavaScript source code
//defining variables for the quiz
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitbutton = document.getElementById("submit");

//quiz questions
const quizQuestions = [
    {
    question: "What undergraduate degree did Swathi do?",
    answers: {
        a: "Mechanical engineering",
        b: "Chemical engineering",
        c: "Bioengineering",
        d: "Biomedical sciences"
    },
    correctAnswer: "c"
    },
    {
        question: "What skill is Swathi currently hoping to further her knowledge in?",
        answers: {
            a: "Finite Element Analysis",
            b: "3D Printing",
            c: "Image processing",
            d: "Data analysis"
        },
        correctAnswer: "a"
    },
    {
        question: "What technique did Swathi use to measure shear stiffness in her MPhil project?",
        answers: {
            a: "Optical Coherence Tomography (OCT)",
            b: "Finite Element Analysis",
            c: "Magnetic Resonance Imaging (MRI)",
            d: "Magnetic Resonance Elastography (MRE)"
        },
        correctAnswer: "d"
    },
    {
        question: "Which of these statements is correct?",
        answers: {
            a: "Swathi has a Youtube channel called Mathematical784.",
            b: "Swathi considers herself a Jack of all trades.",
            c: "Swathi is proficient in Adobe Photoshop",
            d: "Swathi did an URECA project which involved synthesizing gold nanoparticles"
        },
        correctAnswer: "b"
    },
    {
        question: "How can you find or contact Swathi?",
        answers: {
            a: "LinkedIn",
            b: "Youtube channel",
            c: "Via the contact form",
            d: "All of the above"
        },
        correctAnswer: "d"
    },
];
function buildQuiz() {
    const output = [];
    for (i = 0; i < quizQuestions.length; i++) {
        const answers = [];
        for (letter in quizQuestions[i].answers) {
            answers.push(
                '<label>'
                + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                + letter + ': '
                + quizQuestions[i].answers[letter]
                + '</label>');
        }
        output.push(
            '<div class="question">' + quizQuestions[i].question + '</div>' + '<div class="answers">' + answers.join('') + '</div>'
        );
    }
    quizContainer.innerHTML = output.join('');
}

function showResults() {
    //gather answer containers
    var answerContainers = quizContainer.querySelectorAll('.answers');
    var quizContainers = quizContainer.querySelectorAll('.question');
    //track user's answers
    var correctAnswers = 0;
    for (i = 0; i < quizQuestions.length; i++) {
        //find user answer
        userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;
        if (userAnswer == quizQuestions[i].correctAnswer) {
            correctAnswers++;
            quizContainers[i].style.color = '#CEEDDB';
          //answerContainers[i].style.color = 'lightgreen';
            
        }
        else {
            quizContainers[i].style.color = '#B60253';
          //answerContainers[i].style.color = 'red';
        }
    }
    if (correctAnswers == 0) {
        resultsContainer.innerHTML = "You could do better. You didn't get any answers right."
    }
    else if (correctAnswers <= 3) {
        resultsContainer.innerHTML = "Not too bad. You got " + correctAnswers + " questions right."
    }
    else {
        resultsContainer.innerHTML = "Wow, congratulations! You got " + correctAnswers + " questions right!"
    }
}

buildQuiz()
submitbutton.onclick = function () {
    showResults();
};
const feedbackEl = document.querySelector("#feedback");

function updateFeedback(message) {
    feedbackEl.textContent = message;
}