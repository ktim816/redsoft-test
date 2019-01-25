import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import anchor from '../blocks/js-functions/anchor';
import './globalOptions';
import scrollanimation from '../blocks/js-functions/scrollanimation';
import scrollbar from '../blocks/scrollbar/scrollbar';
import mainSlider from '../components/main/main-slider';

const $ = window.$;

$(() => {
  svg4everybody();
  objectFitImages();
  anchor();
  scrollbar();
  mainSlider();
  scrollanimation();
});
