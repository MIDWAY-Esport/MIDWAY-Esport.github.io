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
})
