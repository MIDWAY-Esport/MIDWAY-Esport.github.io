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
  let photo1 = {
    photo: 'images/MIDWAY header.png',
    title: 'Rocket League',
    description: ''
  }

  let photo2 = {
    photo: 'images/r6logo.jpg',
    title: 'Rainbow Six Siege',
    description: ''
  }

  let photo3 = {
    photo: 'images/Valorant.webp',
    title: 'none',
    description: ''
  }

  let currentPhoto = 0;

  let imagesData = [photo1, photo2, photo3];

  let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').html(imagesData[photoNumber].title)
    $('#photo-description').html(imagesData[photoNumber].description)
  }

  loadPhoto(currentPhoto);

  $('#left-arrow').click(() => {
    currentPhoto--;
    if (currentPhoto < 0) {
      currentPhoto++
    }
    loadPhoto(currentPhoto);
  })

  $('#right-arrow').click(() => {
    currentPhoto++;
    if (currentPhoto > 2) {
      currentPhoto--
    }
    loadPhoto(currentPhoto);
  })

  $('.0').click(() => {
    currentPhoto = 0;
    loadPhoto(0);
  })

  $('.1').click(() => {
    currentPhoto = 1;
    loadPhoto(1);
  })


  $('.2').click(() => {
    currentPhoto = 2;
    loadPhoto(2);
  })


})
