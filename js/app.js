$(function(){

  const $firstpage = $('.firstpage');
  const $question1 = $('.question1');
  const $question2 = $('.question2');
  const $question3 = $('.question3');
  const $question4 = $('.question4');

  const $modalcorrect1 = $('.modalcorrect1');
  const $modalcorrect2 = $('.modalcorrect2');
  const $modalcorrect3 = $('.modalcorrect3');
  const $modalcorrect4 = $('.modalcorrect4');

  const $modalincorrect1 = $('.modalincorrect1');
  const $modalincorrect2 = $('.modalincorrect2');
  const $modalincorrect3 = $('.modalincorrect3');
  const $modalincorrect4 = $('.modalincorrect4');

  const $checkbutton1 = $('.checkbutton1');
  const $checkbutton2 = $('.checkbutton2');
  const $checkbutton3 = $('.checkbutton3');
  const $checkbutton4 = $('.checkbutton4');

  const $imagefr = $('.imagefr');
  const $choiceimage1 = $('.choiceimage1');
  const $choiceimage2 = $('.choiceimage2');
  const $choiceimage3 = $('.choiceimage3');

  const $input2 = $('.input2');
  const $input3 = $('.input3');

  const $correctbutton1 = $('#correct-continue-button1');
  const $correctbutton2 = $('#correct-continue-button2');
  const $correctbutton3 = $('#correct-continue-button3');
  const $correctbutton4 = $('#correct-continue-button4');

  const $incorrectbutton1 = $('#incorrect-back-button1');
  const $incorrectbutton2 = $('#incorrect-back-button2');
  const $incorrectbutton3 = $('#incorrect-back-button3');
  const $incorrectbutton4 = $('#incorrect-back-button4');

  const $word1 = $('#word1');
  const $word2 = $('#word2');
  const $word3 = $('#word3');
  const $word4 = $('#word4');
  const $word5 = $('#word5');
  const $word6 = $('#word6');


  // starting page select lang

  $question1.add($question2).add($question3).add($question4).hide();
  $modalcorrect1.add($modalcorrect2).add($modalcorrect3).add($modalcorrect4).hide();
  $modalincorrect1.add($modalincorrect2).add($modalincorrect3).add($modalincorrect4).hide();

  // show first french question

  $imagefr.on('click', function (){
    $question1.show();
    $firstpage.hide();
    $checkbutton1.hide();
  });

  // show checkbutton after image click

  $choiceimage2.on('click', function(){
    $checkbutton1.show();
    $choiceimage2.addClass('correct');
  });

  $choiceimage1.add($choiceimage3).on('click', function(){
    $checkbutton1.show();
    $choiceimage1.add($choiceimage3).addClass('incorrect');
  });


  // show correct or incorrect answer modal

  $checkbutton1.on('click', function(){
    if($choiceimage2.hasClass('correct')){
      $modalcorrect1.show();
    } else {
      $modalincorrect1.show();
    }
  });

  // proceed to q2 or try again

  $correctbutton1.on('click', function(){
    $modalcorrect1.hide();
    $question1.hide();
    $question2.show();
  });

  $incorrectbutton1.on('click', function(){
    $modalincorrect1.hide();
  });


  // check answer for q2

  $checkbutton2.on('click', function(){
    if($input2.val() === 'Je n\'aime pas les serpents.'){
      $modalcorrect2.show();
      $question2.hide();
    } else {
      $modalincorrect2.show();
      $question2.hide();
    }
  });


  // proceed to q3 or retry q2

  $correctbutton2.on('click', function (){
    $modalcorrect2.hide();
    $question3.show();
  });

  $incorrectbutton2.on('click', function(){
    $modalincorrect2.hide();
    $question2.show();
  });

  // check answer for q3
  $checkbutton3.on('click', function(){
    if($input3.val() === 'I don\'t like snakes.'){
      $modalcorrect3.show();
      $question3.hide();
    } else {
      $modalincorrect3.show();
      $question3.hide();
    }
  });


  // proceed to q4 or retry q3

  $correctbutton3.on('click', function (){
    $modalcorrect3.hide();
    $question4.show();
  });

  $incorrectbutton3.on('click', function(){
    $modalincorrect3.hide();
    $question3.show();
  });


  // q4 functionality

  $word1.on('click', function(){
    $word1.appendTo('#droparea');
  });
  $word2.on('click', function(){
    $word2.appendTo('#droparea');
  });
  $word3.on('click', function(){
    $word3.appendTo('#droparea');
  });
  $word4.on('click', function(){
    $word4.appendTo('#droparea');
  });
  $word5.on('click', function(){
    $word5.appendTo('#droparea');
  });
  $word6.on('click', function(){
    $word6.appendTo('#droparea');
  });

  // check answer for q4

  $checkbutton4.on('click', function(){
    if(($word2.index() === 0) &&
    ($word5.index() === 1) &&
    ($word3.index() === 2) &&
    ($word1.index() === 3) &&
    ($word6.index() === 4) &&
    ($word4.index() === 5)) {
      $modalcorrect4.show();
      $question4.hide();
    } else {
      $modalincorrect4.show();
      $question4.hide();
    }
  });


  // end game

  $correctbutton4.on('click', function (){
    $modalcorrect4.hide();
    $firstpage.show();
  });

  $incorrectbutton4.on('click', function(){
    $modalincorrect4.hide();
    $question4.show();
  });

});