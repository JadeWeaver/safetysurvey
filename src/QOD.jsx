// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function () {
    const questions = [
        {
            type: "radiogroup",
                name: "question1",
                title: "What action is unsafe due to the chances of causing unwanted wildlife encounters?",
                choices: [
                    "Wearing dark colored clothing while hiking", "Swimming in lakes/rivers in wooded areas", "Wearing headphones while hiking", "Hiking after dark"
                ],
                correctAnswer: "Wearing headphones while hiking"
            },
            {
            type: "radiogroup",
                name: "question2",
                title: "You see a bear walking on the road up ahead, what should you do while driving?",
                choices: [
                    "Stop immediately", "Turn your hazards on and slow down", "Continue as normal", "Stop and take photos"
                ],
                correctAnswer: "Turn your hazards on and slow down"
            },
            {
            type: "radiogroup",
                name: "question3",
                title: "You've set up a picnic and now want to check out a trailhead before eating. There are no animals around. What should you do?",
                choices: [
                    "Leave the food as long as you will be back in 5 minutes", "Cover the food before you leave", "Pack up the food and take it with you", "Leave the food"
                ],
                correctAnswer: "Pack up the food and take it with you"
            },
             {
            type: "radiogroup",
                name: "question4",
                title: "You're at a park and see a raccoon digging around in leftover food. What should you do?",
                choices: [
                    "Call a park employee to inform them of the loose/unantended food", "Wave your arms and make loud noises", "Approach the raccoon to scare them away", "Throw sticks, rocks, or other items to scare it away"
                ],
                correctAnswer: "Call a park employee to inform them of the loose/unantended food"
            },
            {
            type: "radiogroup",
                name: "question5",
                title: "You see an injured deer on the road. What should you do?",
                choices: [
                    "Exit your vehicle and move the deer away from the road", "Position your car to block oncoming traffic to protect the deer", "Call your local animal control or non-emergency police line", "Drive carefully around the deer"
                ],
                correctAnswer: "Call your local animal control or non-emergency police line"
            },
            {
            type: "radiogroup",
                name: "question6",
                title: "If you are bitten by or suspect you've been bitten by a snake, what should you do?",
                choices: [
                    "Catch the snake to identify if it is venomous and what type of treatment is needed", "Apply ice to the bite area or submerse it in cold water", "Use a tourniquet to prevent venom from spreading", "Keep the bite below the level your heart and seek medication attention"
                ],
                correctAnswer: "Keep the bite below the level your heart and seek medication attention"
            },
            {
            type: "radiogroup",
                name: "question7",
                title: "If you see a bear while hiking, and it hasn't seen you, what should you do?",
                choices: [
                    "Calmly and slowly back away while facing the bear", "Yell and wave your arms above your head to make yourself seem larger", "Run away", "Lie flat on the ground and hide yourself from it"
                ],
                correctAnswer: "Calmly and slowly back away while facing the bear"
            },
            {
            type: "radiogroup",
                name: "question7",
                title: "What type of wild animal is safe to touch?",
                choices: [
                    "Non-dangerous animals like rabbits or squirrels", "None", "Animals that approach you first", "Cute ones"
                ],
                correctAnswer: "None"
            },
            {
            type: "radiogroup",
                name: "question8",
                title: "What should you do if a moose approaches your car?",
                choices: [
                    "Slowly drive away while avoiding loud noises", "Honk your horn to scare it away", "Quickly drive away and leave the area", "Stop the car and wait for the moose to leave"
                ],
                correctAnswer: "Slowly drive away while avoiding loud noises"
            },
            {
            type: "radiogroup",
                name: "question9",
                title: "When is it safe to feed wild animals?",
                choices: [
                    "If they are injured or sick", "If they are babies", "If they are not dangerous animals", "Never"
                ],
                correctAnswer: "Never"
            },
            {
            type: "radiogroup",
                name: "question10",
                title: "Which animal can transmit rabies to humans?",
                choices: [
                    "Bear", "Raccoon", "Bat", "All of the above"
                ],
                correctAnswer: "All of the above"
            }
            
            
    ]
    const nQuestion = Math.floor((Math.random() * questions.length));
    const surveyJson = {
        title: "Wildlife Safety Survey",
        showCorrectAnswer: "always",
        showProgressBar: "bottom",
        firstPageIsStarted: true,
        startSurveyText: "Start Quiz",
        pages: [{
            elements: [{
                type: "html",
                html: "You are about to start a quiz on Wildlife Safety. <br>You will have 30 seconds for every question and 60 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
            }, {
                type: "text",
                name: "username",
                titleLocation: "hidden",
                isRequired: true
            }]
        }, {
            elements: [questions[nQuestion]]
            
        }]
    };
    const survey = new Model(surveyJson);

    survey.onComplete.add(function (sender) {
        var questions = sender.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var correctAnswer = question.correctAnswer;
            var userAnswer = question.value;
            var questionTitle = question.title;
            console.log("Question: " + questionTitle);
            console.log("Correct Answer: " + correctAnswer);
            console.log("User Answer: " + userAnswer);
        }
    });

    return <Survey model={survey} />;
}