$(document).ready(() =>{
    $('.hint-box').on('click', () => {
      $('.hint').slideToggle(500)
    })
    $('.wrong-answer-one').on('click', () => {
        $('.wrong-answer-one').fadeOut(500)
    })
    $('.wrong-answer-two').on('click', () => {
        $('.wrong-answer-two').fadeOut(500)
    })
    $('.wrong-answer-three').on('click', () => {
        $('.wrong-answer-three').fadeOut(500)
    })
});