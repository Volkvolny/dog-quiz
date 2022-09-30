const quizData = [
  {
    question: "How much better than ours is a dog's sense of smell?",
    a: "At least 20x better",
    b: "At least 10x better",
    c: "At least 30x better",
    d: "At least 40x better",
    correct: "d"
  },
  {
    question: "Which dog breed is used as a water rescue dog?",
    a: "Chesapeake Bay Retriever",
    b: "Newfoundland",
    c: "English Setter",
    d: "Portugese Water Dog",
    correct: "b"
  },
  {
    question: "What dog could beat a cheetah in a race?",
    a: "Greyhound",
    b: "Vizsla",
    c: "Saluki",
    d: "Dalmation",
    correct: "a"
  },
  {
    question: "Which fact about dogs is not true?",
    a: "Dogs can be left or right pawed",
    b: "Dogs do not sweat",
    c: "Dogs can't see colours",
    d: "Dogs can sniff at the same time as breathing",
    correct: "c"
  },
  {
    question: "How many muscles control a dog's ears?",
    a: "5",
    b: "8",
    c: "12",
    d: "18",
    correct: "d"
  },
  {
    question: "Dogs can learn over how many words and gestures?",
    a: "60",
    b: "80",
    c: "20",
    d: "100",
    correct: "d"
  },
  {
    question: "Which dog breed has been on AKC's top 10 most popular dogs breeds list for over 30 years?",
    a: "French Bulldog",
    b: "Labrador Retriever",
    c: "German Shepherd",
    d: "Husky",
    correct: "b"
  },
  {
    question: "Where did Australian Shepherds originate from?",
    a: "United States",
    b: "Germany",
    c: "Spain",
    d: "Australia",
    correct: "c"
  },
  {
    question: "Which dog breed has such a great sense of smell that it can be used as evidence in court?",
    a: "Bloodhound",
    b: "Beagle",
    c: "American English Coonhound",
    d: "English Pointer",
    correct: "a"
  },
  {
    question: "What percent of Dalmations are deaf in one ear?",
    a: "20%",
    b: "50%",
    c: "45%",
    d: "30%",
    correct: "d"
  }
]

const questionText = $("#question"); //grab question text id

//grab ids of inputs
const aText = $("#aText");
const bText = $("#bText");
const cText = $("#cText");
const dText = $("#dText");
const submitBtn = $("#submit");
const restartBtn = $("#restart");

let currentQuiz = 0;

let score = [];

let points = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  $('input[type=radio]:checked').prop('checked', false);

  $("#submit").show();
  $("#restart").hide();

  questionText.html(currentQuizData.question);
  aText.html(currentQuizData.a);
  bText.html(currentQuizData.b);
  cText.html(currentQuizData.c);
  dText.html(currentQuizData.d);


}

function getSelectedValue() {
  const currentQuizData = quizData[currentQuiz];

  const value = $('input[name="answer"]:checked').val(); //get the value of the checked input

  if (value == currentQuizData.correct)
  {
    score.push("Correct");
  }
  else {
    score.push("Incorrect");
  }

} //end getSelectedValue

submitBtn.click(function(){

  getSelectedValue();
  currentQuiz++;

  if (currentQuiz < quizData.length) {
    loadQuiz();
  }
  else
  {
    $("#submit").hide();
    $("#restart").show();

    for (i = 0; i < score.length; i++)
    {
      if (score[i] === 'Correct') {
        points += 1;
      }
      else {
        continue;
      }
    } //end for

    alert("Congrats on finishing the quiz! You got a score of " + (points * 10) + "%!");
  }
}); //end buttonsubmit

restartBtn.click(function(){
  currentQuiz = 0;
  score = [];
  points = 0;
  loadQuiz();
}); //end restartBtn
