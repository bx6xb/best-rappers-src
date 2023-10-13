// Page elements
const hamburger = document.querySelector('#hamburger'),
  menu = document.querySelector('#menu'),
  header = document.querySelector('header'),
  spans = document.querySelectorAll('span'),
  bigPicture = document.querySelector('#big-picture'),
  bigPictureImg = document.querySelector('#big-picture-img'),
  biographySection = document.querySelector('#biography-section'),
  musicSection = document.querySelector('#music-section'),
  photosSection = document.querySelector('#photos-section'),
  bioBtn = document.querySelector('#bio'),
  musicBtn = document.querySelector('#music'),
  photosBtn = document.querySelector('#photos')

// JS variables
let count = 0

// Event listeners
hamburger.addEventListener('click', function () {
  0 === count
    ? ((menu.style.display = 'flex'),
      (header.style.left = '0'),
      (spans[1].style.display = 'none'),
      (spans[0].style.position = 'absolute'),
      (spans[2].style.position = 'absolute'),
      (spans[0].style.transform = 'rotate(45deg)'),
      (spans[2].style.transform = 'rotate(-45deg)'),
      (hamburger.style.justifyContent = 'center'),
      count++)
    : ((menu.style.display = 'none'),
      (header.style.left = '-50vw'),
      (spans[1].style.display = 'block'),
      (spans[0].style.position = 'relative'),
      (spans[2].style.position = 'relative'),
      (spans[0].style.transform = 'rotate(0deg)'),
      (spans[2].style.transform = 'rotate(0deg)'),
      (hamburger.style.justifyContent = 'space-around'),
      (count = 0))
})

bioBtn.addEventListener('click', function () {
  ;(biographySection.style.display = 'block'),
    (musicSection.style.display = 'none'),
    (photosSection.style.display = 'none'),
    (bioBtn.style.textDecoration = 'underline'),
    (musicBtn.style.textDecoration = 'none'),
    (photosBtn.style.textDecoration = 'none')
})

musicBtn.addEventListener('click', function () {
  ;(biographySection.style.display = 'none'),
    (musicSection.style.display = 'block'),
    (photosSection.style.display = 'none'),
    (bioBtn.style.textDecoration = 'none'),
    (musicBtn.style.textDecoration = 'underline'),
    (photosBtn.style.textDecoration = 'none')
})

photosBtn.addEventListener('click', function () {
  ;(biographySection.style.display = 'none'),
    (musicSection.style.display = 'none'),
    (photosSection.style.display = 'grid'),
    (bioBtn.style.textDecoration = 'none'),
    (musicBtn.style.textDecoration = 'none'),
    (photosBtn.style.textDecoration = 'underline')
})

for (let e = 0; e < photos.length; e++)
  photos[e].addEventListener('click', function () {
    ;(bigPicture.style.display = 'flex')((bigPictureImg.src = photos[e].src))(
      (bigPictureImg.alt = photos[e].alt)
    )((bigPictureImg.title = photos[e].title))
  })

// bigPicture.addEventListener(
//   'mousedown',
//   () => (bigPicture.style.display = 'none')
// )

// bigPictureImg.addEventListener(
//   'mousedown',
//   () => (bigPicture.style.display = 'none')
// )
