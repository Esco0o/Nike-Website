$('#humMob').on('click' , function(){
    $('#menuMob').slideToggle(500)
})

$('.imgs img').on('click' , function(e){
      const currentSrc =  $(e.target).attr('src')

      $('.mainImg').attr('src' , currentSrc )
})