$(function() {
  $('.q-answer').css('display', 'none'); //質問の答えの非表示
  $('.q-first').css('display', 'block'); //最初の質問の答えを初めから表示

  $('.q-inner').click(function() {
    var $answer = $(this).find('.q-answer');
    if($answer.hasClass('open')) {
      $answer.removeClass('open');
      $answer.slideUp();
    } else {
      $answer.addClass('open');
      $answer.slideDown();
    }
  })
});