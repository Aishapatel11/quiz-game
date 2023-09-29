//Questions That Can Be Asked

let questionCounter = 0;
let Money = 0;
let completedQuestions = []
const correct = document.querySelector("#correct")

const Questions =[{
    q: 'What Country Has The Highest Life Expectancy?',
    a: [{ text: 'Hong Kong', isCorrect:true},
    {text: 'China',isCorrect:false},
    {text:'Russia',isCorrect:false},
    {text:'United Kingdom',isCorrect:false}
    ]
},
{
    q:'How Many Sides Does A Hexagon Have?',
    a:[{ text:'Five', isCorrect:false},
    {text: 'Eight',isCorrect:true},
    {text:'Seven',isCorrect:false},
    {text:'Nine',isCorrect:false}
    ]
},
{
    q:'What is the currency of India?',
    a:[{ text:'Dirhams', isCorrect:false},
    {text: 'Yen',isCorrect:false},
    {text:'British Sterling',isCorrect:false},
    {text:'Rupees',isCorrect:true}
    ]
},
{
    q:'What Does A Cow Drink?',
    a:[{ text:'Mojitos', isCorrect:false},
    {text: 'Beer',isCorrect:false},
    {text:'Water',isCorrect:true},
    {text:'Milk',isCorrect:false}
    ]
},
{
    q:'Which of the following are a mammal?',
    a:[{ text:'Shark', isCorrect:false},
    {text: 'Bats',isCorrect:true},
    {text:'Goldfish',isCorrect:false},
    {text:'Caterpillar',isCorrect:false}
    ]
},
{
    q:'Where is the smallest bone located on the human body?',
    a:[{ text:'Finger', isCorrect:false},
    {text: 'Nose',isCorrect:false},
    {text:'Eye',isCorrect:false},
    {text:'Ear',isCorrect:true}
    ]
},
{
    q:"What does the 'K' Element represent on the periodic table?",
    a:[{ text:'Potassium', isCorrect:true},
    {text: 'Karbine',isCorrect:false},
    {text:'Gold',isCorrect:false},
    {text:'Silver',isCorrect:false}
    ]
},
{
    q:'Who founded Amazon?',
    a:[{ text:'Aisha Patel', isCorrect:false},
    {text: 'Jai Somaiya',isCorrect:false},
    {text:'Elon Musk',isCorrect:false},
    {text:'Jeff Bezos',isCorrect:true}
    ]
},
{
    q:'What street does the UK Prime Minister Live On',
    a:[{ text:'Granby Street', isCorrect:false},
    {text: 'Niklaus Street',isCorrect:false},
    {text:'Downing Street',isCorrect:true},
    {text:'Niklaus Street',isCorrect:false}
    ]
},
{
    q:"Who Wrote The Book Series 'Harry Potter?",
    a:[{ text:'Charles Dickens', isCorrect:false},
    {text: 'Tom Holland',isCorrect:false},
    {text:'J.K Rowling',isCorrect:true},
    {text:'Roald Dhal',isCorrect:false}
    ]
}

]

function randomiseAns(){
    myAnswers = Questions[questionCounter].a;
    for (let index = 0; index < myAnswers.length; index++) {
        let rand = Math.floor(Math.random()*4);

        let first = Questions[questionCounter].a[index];
        let move = Questions[questionCounter].a[rand];

        Questions[questionCounter].a[index] = move;
        Questions[questionCounter].a[rand] = first;
    }

} 

function loadQuest(){
    const loadQs = document.getElementById('Qs')
    const loadAns = document.getElementById('Ans')

    loadQs.textContent = Questions[questionCounter].q;
    loadAns.innerHTML=""

    randomiseAns();

    for (let i = 0; i < Questions[questionCounter].a.length; i++)
    {
        const choicesdiv = document.createElement('div');
        const choice = document.createElement('input');
        const choiceLabel = document.createElement('label');

        choice.type = 'Radio';
        choice.name = 'Answer';
        choice.value = i ;


        choiceLabel.textContent = Questions[questionCounter].a[i].text;
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        
        loadAns.appendChild(choicesdiv);
        loadMoney();
    }
}

loadQuest();

function loadMoney() {
    const totalMoney = document.getElementById('Money');
    totalMoney.innerHTML = `You have earned  £${Money} out of £1000`
}

function nextQuestion(){
    if (questionCounter < Questions.length -1){
        questionCounter ++ ;
        loadQuest();
    }

    else {
        
        document.getElementById('Qs').remove();
        document.getElementById('Ans').remove()
        document.getElementById('btn').remove();
        loadMoney();
    }
}

function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="Answer"]:checked').value);

    if (Questions[questionCounter].a[selectedAns].isCorrect){
        Money += 100;
        loadMoney();
        nextQuestion();
    } 
    else {
        nextQuestion();
        loadMoney();
    }
}

