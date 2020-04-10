console.log("mükszik")

$(document).ready(function () {
  $("#contact-button").click(function (event) {
    console.log("clicked")

    var name = $('#name').val()
    var email = $('#e-mail').val()
    var comment = $('#comment').val()
    var statusElement = $('.status')
    statusElement.empty()

    if(email.length > 5 && email.includes('@') && email.includes('.')) {

    } else {
      event.preventDefault()
    }
  })
  let imgtoggle
  imgtoggle = 0
  $('#r6s').fadeToggle(0)
  $('.img-left').click(() => {
    if (imgtoggle === 1 || imgtoggle === 0) {
      $('#rocket-league').fadeToggle(300)
      $('#r6s').fadeToggle(300)
      imgtoggle = 0
    }
  })

  $('.img-right').click(() => {
    if (imgtoggle === 0 || imgtoggle === 1) {
      $('#rocket-league').fadeToggle(300)
      $('#r6s').fadeToggle(300)
      imgtoggle = 1
    }
  })


})
