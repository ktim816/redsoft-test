/* eslint-disable */
const $ = window.$;

export default function mainSlider() {
  $('.main__slider-button').on('click', function() {
    $(this).addClass('is-active').siblings().removeClass('is-active');
    if ($('.main-wrapper__bg-img').first().hasClass('is-active')) {
      $('.main-wrapper__bg-img').first().removeClass('is-active');
      $('.main-wrapper__bg-img').last().addClass('is-active');
    } else {
      $('.main-wrapper__bg-img').last().removeClass('is-active');
      $('.main-wrapper__bg-img').first().addClass('is-active');
    }
    if ($('.main__text-content').first().hasClass('is-active')) {
      $('.main__text-content').first().removeClass('is-active');
      $('.main__text-content').last().addClass('is-active');
    } else {
      $('.main__text-content').last().removeClass('is-active');
      $('.main__text-content').first().addClass('is-active');
    }
  });
}
/* eslint-enable */
