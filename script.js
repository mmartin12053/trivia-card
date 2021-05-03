$(document).ready(() =>{
    $('.hint-box').click({
      $('.hint').slideToggle(500)
    })
    $('.wrong-answer-one').click({
        $('.wrong-answer-one').fadeOut('fast')
    })
    $('.wrong-answer-two').click({
        $('.wrong-answer-two').fadeOut('fast')
    })
    $('.wrong-answer-three').click({
        $('.wrong-answer-three').fadeOut('fast')
    })
});
