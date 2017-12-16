var friends = [
  {
    name: "Andrew",
    question1: "answer#1",
    question2: "answer#2",
    question3: "answer#3",
    question4: "answer#4",
    question5: "answer#1",
    question6: "answer#2",
    question7: "answer#3",
    question8: "answer#4",
    question9: "answer#1",
    question10: "answer#2"
  },
  {
    name: "Kerri",
    question1: "answer#4",
    question2: "answer#3",
    question3: "answer#2",
    question4: "answer#1",
    question5: "answer#4",
    question6: "answer#3",
    question7: "answer#2",
    question8: "answer#1",
    question9: "answer#4",
    question10: "answer#3"
  },
  {
    name: "Karen",
    question1: "answer#1",
    question2: "answer#3",
    question3: "answer#2",
    question4: "answer#4",
    question5: "answer#2",
    question6: "answer#3",
    question7: "answer#1",
    question8: "answer#3",
    question9: "answer#2",
    question10: "answer#4"
  },
  {
    name: "Rich",
    question1: "answer#4",
    question2: "answer#1",
    question3: "answer#2",
    question4: "answer#3",
    question5: "answer#4",
    question6: "answer#1",
    question7: "answer#2",
    question8: "answer#3",
    question9: "answer#4",
    question10: "answer#1"
  },
  {
    name: "Buster",
    question1: "answer#1",
    question2: "answer#1",
    question3: "answer#2",
    question4: "answer#2",
    question5: "answer#3",
    question6: "answer#3",
    question7: "answer#4",
    question8: "answer#4",
    question9: "answer#1",
    question10: "answer#1"
  }
];

$("#enterSurveyButton").on('click', function() {
  console.log('button clicked');
  var survey = document.getElementById('friendFinder-view');
  if (survey.style.display === "none") {
    survey.style.display = "block";
  } else {
    survey.style.display = "none";
  };
  console.log(friends);
});

$('#submit-survey').on('click', function() {
  console.log('survey submitted');
  console.log(friends);
  var name = $('#nameInput').val();
  var answer1 = $('#question1').val();
  var answer2 = $('#question2').val();
  var answer3 = $('#question3').val();
  var answer4 = $('#question4').val();
  var answer5 = $('#question5').val();
  var answer6 = $('#question6').val();
  var answer7 = $('#question7').val();
  var answer8 = $('#question8').val();
  var answer9 = $('#question9').val();
  var answer10 = $('#question10').val();
  var newFriend = friends.push({
    name: name,
    question1: answer1,
    question2: answer2,
    question3: answer3,
    question4: answer4,
    question5: answer5,
    question6: answer6,
    question7: answer7,
    question8: answer8,
    question9: answer9,
    question10: answer10
  });
  var closeSurvey = document.getElementById('friendFinder-view');
  if (closeSurvey.style.display === "block") {
    closeSurvey.style.display = "none";
  } else {
    closeSurvey.style.display = "block";
  };



  for (var i = 0; i < friends.length - 1; i++) {
    var latestUser = friends[friends.length - 1];
    var score = 0;
    if (latestUser.queston1 === friends[i].question1) {
      score++;
      console.log('question1 matched');
    };
    if (latestUser.question2 === friends[i].question2) {
      score++;
      console.log('question2 matched');
    };
    if (latestUser.question3 === friends[i].question3) {
      score++;
      console.log('question3 matched');
    };
    if (latestUser.question4 === friends[i].question4) {
      score++;
      console.log('question4 matched');
    };
    if (latestUser.question5 === friends[i].question5) {
      score++;
      console.log('question5 matched');
    };
    if (latestUser.question6 === friends[i].question6) {
      score++;
      console.log('question6 matched');
    };
    if (latestUser.question7 === friends[i].question7) {
      score++;
      console.log('question7 matched');
    };
    if (latestUser.question8 === friends[i].question8) {
      score++;
      console.log('question8 matched');
    };
    if (latestUser.question9 === friends[i].question9) {
      score++;
      console.log('question9 matched');
    };
    if (latestUser.question10 === friends[i].question10) {
      score++;
      console.log('question10 matched');
    };
  };


  $('#friendName').html("New Friend: " + friends[score - 1].name);
  $('#friendScore').html(score + " Responses Matched!");
});
