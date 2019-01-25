import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import './globalOptions';
import anchor from '../blocks/js-functions/anchor';
import burger from '../blocks/burger/burger';
import { freezebuttons } from '../blocks/js-functions/freeze';
import scrollanimation from '../blocks/js-functions/scrollanimation';
import {
  selects, sliders, datepicker, inputmask, numberinput,
} from '../blocks/form-elements/form-elements';
import popups from '../blocks/popups/popups';
import scrollbar from '../blocks/scrollbar/scrollbar';
import slider from '../blocks/slider/slider';
import tooltips from '../blocks/tooltip/tooltip';
import tabs from '../blocks/tabs/tabs';
import maps from '../blocks/map/map';
import mainSlider from '../components/main/main-slider';
import '../blocks/rating/rating';
import '../blocks/accordion/accordion';
import '../blocks/dropdown/dropdown';
import '../blocks/put-block-into-slot/put-block-into-slot';

const $ = window.$;

$(() => {
  svg4everybody();
  objectFitImages();
  anchor();
  burger();
  freezebuttons();
  selects();
  sliders();
  popups();
  scrollbar();
  slider();
  tooltips();
  tabs();
  datepicker();
  inputmask();
  numberinput();
  maps();
  mainSlider();
  scrollanimation();
});