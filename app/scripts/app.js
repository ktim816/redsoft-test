import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import anchor from '../blocks/js-functions/anchor';
import slider from '../blocks/slider/slider';
import './globalOptions';
import scrollanimation from '../blocks/js-functions/scrollanimation';
import scrollbar from '../blocks/scrollbar/scrollbar';

const $ = window.$;

$(() => {
  svg4everybody();
  objectFitImages();
  anchor();
  slider();
  scrollbar();
  scrollanimation();
});
