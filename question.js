$(function() {
  $('.q-answer').css('display', 'none'); //質問の答えの非表示

  $('.q-inner').click(function() {
    var $answer = $(this).find('.q-answer');
    if($answer.hasClass('open')) {
      $answer.removeClass('open');
      $answer.slideUp();
      $(this).find('#qc-upBottom').removeClass().addClass('fas fa-chevron-circle-down');

    } else {
      $answer.addClass('open');
      $answer.slideDown();
      $(this).find('#qc-upBottom').removeClass().addClass('fas fa-chevron-circle-up');
    }
  })
});