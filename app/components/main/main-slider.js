/* eslint-disable */
const $ = window.$;

export default function mainSlider() {
  $('.main__slider-button').on('click', function() {
    $(this).addClass('is-active').siblings().removeClass('is-active');
    if ($(this).index() != $('.main-wrapper__bg-img.is-active').index()) {
      $('.main-wrapper__bg-img.is-active').removeClass('is-active').siblings('.main-wrapper__bg-img').addClass('is-active');
      $('.main__text-content.is-active').removeClass('is-active').siblings('.main__text-content').addClass('is-active');
    }
  });
}
/* eslint-enable */
