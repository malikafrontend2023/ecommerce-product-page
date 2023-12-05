const modifiers = {
  siteHeaderCartModalOpen: 'site-header__cart-modal--open',
  imgThumbnailActive: 'img-showcase__thumbnail--active',
  lightboxOpen: 'lightbox--open'
};

// Shopping cart modal
const elSiteHeaderCartLink = document.querySelector('.js-site-header-cart-link');
const elSiteHeaderCartModal = document.querySelector('.site-header__cart-modal');


if (elSiteHeaderCartLink) {
  elSiteHeaderCartLink.addEventListener('click', function (evt) {
    evt.preventDefault();


    elSiteHeaderCartModal.classList.toggle(modifiers.siteHeaderCartModalOpen)
  });
}


// Img showcase
const elImgShowcaseActiveImg = document.querySelector('.img-showcase__active-img');
const elsImgThumbnailButton = document.querySelectorAll('.js-img-showcase-thumbnail-button');
const elsImgThumbnail = document.querySelectorAll('.img-showcase__thumbnail');

elsImgThumbnailButton.forEach(function (elButton) {
  elButton.addEventListener('click', function () {

    // Remove active state from all buttons
    elsImgThumbnail.forEach(function (elImgThumbnail) {
      elImgThumbnail.classList.remove(modifiers.imgThumbnailActive)
    });

    // Add active state to clicked button
    elButton.parentElement.classList.add(modifiers.imgThumbnailActive)

    // Update active image src accordingly
    elImgShowcaseActiveImg.src = elButton.dataset.imgShowcaseBig;
    elImgShowcaseActiveImg.srcset = `${elButton.dataset.imgShowcaseBig} 1x, ${elButton.dataset.imgShowcaseRetina} 2x`;
  })

})

// LIGHTBOX
const elLightbox = document.querySelector('.lightbox');
const elLightboxToggler = document.querySelector('.js-lightbox-toggler');
const elCloseButton = document.querySelector('.js-lightbox__close');

if(elLightboxToggler){
  elLightboxToggler.addEventListener('click', function () {
    elLightbox.classList.add(modifiers.lightboxOpen)
  })
}


if(elCloseButton){
  elCloseButton.addEventListener('click', function () {
    elLightbox.classList.remove(modifiers.lightboxOpen)
  })
}