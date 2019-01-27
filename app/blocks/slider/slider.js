/* eslint-disable */
const $ = window.$;

export default function slider() {
  $('.slider-nav__button').on('click', function() {
    $(this).addClass('is-active').siblings().removeClass('is-active');
    if ($(this).index() != $('.section__bg-img.is-active').index()) {
      $('.section__bg-img.is-active').removeClass('is-active').siblings('.section__bg-img').addClass('is-active');
      $('.greeting.is-active').removeClass('is-active').siblings('.greeting').addClass('is-active');
    }
  });
}
/* eslint-enable */
